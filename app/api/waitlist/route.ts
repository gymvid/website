import { NextResponse } from "next/server";
import { getWaitlistConfirmationEmail } from "@/app/lib/emailTemplate";
import { appendToGoogleSheet } from "@/app/lib/googleSheets";

async function getCountryFromIP(ip: string): Promise<string> {
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    return data.country_name || "Unknown";
  } catch (error) {
    console.error("Error getting country from IP:", error);
    return "Unknown";
  }
}

function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "Unknown";
  return ip;
}

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

    // Get user's IP and country
    const clientIP = getClientIP(request);
    const country = await getCountryFromIP(clientIP);

    // Step 1: Add contact to SendGrid Marketing Contacts
    try {
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
                  w1_M: new Date().toISOString(),
                  w2_M: "website",
                  w3_M: interestsString,
                },
              },
            ],
          }),
        }
      );

      const contactData = await addContactResponse.json();

      // Check if email already exists
      if (contactData.errors && contactData.errors.length > 0) {
        const duplicateError = contactData.errors.find((err: any) =>
          err.message?.includes("duplicate") || err.message?.includes("exists")
        );

        if (duplicateError) {
          return NextResponse.json(
            { error: "You're already on the list! Check your email for your VIP benefits." },
            { status: 200 }
          );
        }
      }

      if (!addContactResponse.ok) {
        console.error("SendGrid contact error:", contactData);
        throw new Error("Failed to add contact");
      }
    } catch (contactError) {
      console.error("Error adding contact to SendGrid:", contactError);
      // Continue to next steps even if this fails
    }

    // Step 2: Add contact to SendGrid "Waitlist" list
    try {
      // First, get the list ID for "Waitlist"
      const listsResponse = await fetch(
        "https://api.sendgrid.com/v3/marketing/lists",
        {
          headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const listsData = await listsResponse.json();
      const waitlistList = listsData.result?.find(
        (list: any) => list.name === "Waitlist"
      );

      if (waitlistList) {
        const listId = waitlistList.id;

        // Add contact to the list
        const addToListResponse = await fetch(
          `https://api.sendgrid.com/v3/marketing/lists/${listId}/contacts`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${SENDGRID_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contacts: [email.toLowerCase()],
            }),
          }
        );

        if (!addToListResponse.ok) {
          console.error("Failed to add contact to Waitlist list");
        }
      }
    } catch (listError) {
      console.error("Error adding to SendGrid list:", listError);
      // Continue to Google Sheets
    }

    // Step 3: Append to Google Sheets
    try {
      const timestamp = new Date().toISOString();
      const interestsString = interests.join(", ");

      await appendToGoogleSheet([
        [firstName, email, interestsString, timestamp, country],
      ]);
    } catch (sheetError) {
      console.error("Error appending to Google Sheet:", sheetError);
      // Continue to send email even if sheet fails
    }

    // Step 4: Send confirmation email
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
            subject:
              "Welcome to the Founding Members Club 🤝 Your VIP perks are locked in!! 😎",
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
      message: "Successfully joined the founding members!",
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
