import { NextResponse } from "next/server";
import { getWaitlistConfirmationEmail } from "@/app/lib/emailTemplate";

export async function POST(request: Request) {
  try {
    const { firstName, email, interests = [] } = await request.json();

    // Validate input
    if (!firstName || !email) {
      return NextResponse.json(
        { error: "First name and email are required" },
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

    // Step 1: Add contact to SendGrid Marketing List
    try {
      // Convert interests array to a comma-separated string for SendGrid
      const interestsString = interests.join(", ");

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
                custom_fields: {
                  signup_date: new Date().toISOString(),
                  source: "website",
                  interests: interestsString,
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
            { error: "You're already on the list! Check your email for your VIP benefits." },
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
    const htmlContent = getWaitlistConfirmationEmail(firstName);

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
            subject: "Welcome to the Founding Members Club 🤝 Your VIP perks are locked in!! 😎",
          },
        ],
        from: {
          email: "hello@gymvid.com",
          name: "GymVid App",
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
      message: "Successfully joined the beta group!",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to join waitlist. Please try again.",
      },
      { status: 500 }
    );
  }
}
