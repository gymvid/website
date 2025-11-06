import { NextResponse } from "next/server";
import { getInvestorConfirmationEmail } from "@/app/lib/investorEmailTemplate";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, investorType, investmentRange } = await request.json();

    // Validate input
    if (!firstName || !lastName || !email || !investorType) {
      return NextResponse.json(
        { error: "First name, last name, email, and investor type are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    if (!SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Step 1: Add contact to SendGrid "Investors" Marketing List
    try {
      const addContactResponse = await fetch(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contacts: [
              {
                email: email.toLowerCase(),
                first_name: firstName,
                last_name: lastName,
                custom_fields: {
                  signup_date: new Date().toISOString(),
                  source: "website",
                  investor_type: investorType,
                  investment_range: investmentRange || "not specified",
                },
              },
            ],
          }),
        }
      );

      const contactData = await addContactResponse.json();

      // Check if email already exists (SendGrid returns specific error)
      if (contactData.errors && contactData.errors.length > 0) {
        const duplicateError = contactData.errors.find((err: any) =>
          err.message?.includes("duplicate") || err.message?.includes("exists")
        );

        if (duplicateError) {
          return NextResponse.json(
            { error: "You've already submitted your interest. We'll be in touch soon!" },
            { status: 200 } // Return 200 so frontend shows success state
          );
        }
      }

      if (!addContactResponse.ok) {
        console.error("SendGrid contact error:", contactData);
        throw new Error("Failed to add contact to list");
      }
    } catch (contactError) {
      console.error("Error adding contact to SendGrid:", contactError);
      // Continue to send email even if list add fails
    }

    // Step 2: Send confirmation email
    const htmlContent = getInvestorConfirmationEmail(firstName);

    const emailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email }],
            subject: "Thank you for your interest in GymVid",
          },
        ],
        from: {
          email: "hello@gymvid.com",
          name: "Jamie Bisset - GymVid",
        },
        content: [
          {
            type: "text/html",
            value: htmlContent,
          },
        ],
      }),
    });

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text();
      console.error("SendGrid email error:", emailError);
      throw new Error("Failed to send confirmation email");
    }

    return NextResponse.json({
      success: true,
      message: "Successfully submitted investor interest!",
    });
  } catch (error) {
    console.error("Investor API error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to submit interest. Please try again.",
      },
      { status: 500 }
    );
  }
}
