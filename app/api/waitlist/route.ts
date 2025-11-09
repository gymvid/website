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
      console.log("Step 1: Adding contact to SendGrid Marketing Contacts...");
      const interestsString = interests.join(", ");

      const contactPayload = {
        contacts: [
          {
            email: email.toLowerCase(),
            first_name: firstName,
          },
        ],
      };
      console.log("Contact payload:", JSON.stringify(contactPayload));

      const addContactResponse = await fetch(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactPayload),
        }
      );

      const contactData = await addContactResponse.json();
      console.log("SendGrid contact response:", JSON.stringify(contactData));

      // Check if email already exists
      if (contactData.errors && contactData.errors.length > 0) {
        const duplicateError = contactData.errors.find((err: any) =>
          err.message?.includes("duplicate") || err.message?.includes("exists")
        );

        if (duplicateError) {
          console.log("Email already exists in SendGrid");
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
      console.log("Contact added to SendGrid successfully");
    } catch (contactError) {
      console.error("Error adding contact to SendGrid:", contactError);
      // Continue to next steps even if this fails
    }

    // Step 2: Add contact to SendGrid "Waitlist" list
    try {
      console.log("Step 2: Adding contact to SendGrid 'Waitlist' list...");
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
      console.log("SendGrid lists response:", JSON.stringify(listsData));

      const waitlistList = listsData.result?.find(
        (list: any) => list.name === "Waitlist"
      );

      if (waitlistList) {
        const listId = waitlistList.id;
        console.log("Found 'Waitlist' list with ID:", listId);

        // Wait for contact to be indexed in SendGrid (async operation)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Add contact to the list - try alternative endpoint format
        console.log("Adding contact to 'Waitlist' list by email:", email.toLowerCase());
        const listEndpoint = `https://api.sendgrid.com/v3/marketing/lists/${listId}/contacts`;
        console.log("List endpoint URL:", listEndpoint);
        const addToListResponse = await fetch(
          listEndpoint,
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

        console.log("Add to list response status:", addToListResponse.status);

        if (!addToListResponse.ok) {
          const errorText = await addToListResponse.text();
          console.error("Failed to add contact to Waitlist list:", errorText);
        } else {
          const responseData = await addToListResponse.json();
          console.log("Add to list response data:", JSON.stringify(responseData));
          console.log("Contact added to 'Waitlist' list successfully");
        }
      } else {
        console.warn("'Waitlist' list not found in SendGrid");
      }
    } catch (listError) {
      console.error("Error adding to SendGrid list:", listError);
      // Continue to Google Sheets - this step is optional since Google Sheets serves as backup
      console.log("Continuing with Google Sheets backup (SendGrid list assignment is optional)");
    }

    // Step 3: Append to Google Sheets
    try {
      console.log("Step 3: Appending to Google Sheets...");
      const timestamp = new Date().toISOString();
      const interestsString = interests.join(", ");
      const rowData = [firstName, email, interestsString, timestamp, country];
      console.log("Row data to append:", JSON.stringify(rowData));

      await appendToGoogleSheet([rowData]);
      console.log("Google Sheets append completed successfully");
    } catch (sheetError) {
      console.error("Error appending to Google Sheet:", sheetError);
      // Continue to send email even if sheet fails
    }

    // Step 4: Send confirmation email
    console.log("Step 4: Sending confirmation email...");
    const htmlContent = getWaitlistConfirmationEmail(firstName);

    const emailPayload = {
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
    };
    console.log("Email payload subject:", emailPayload.personalizations[0].subject);
    console.log("Email sending to:", email);

    const emailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    console.log("SendGrid email response status:", emailResponse.status);

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text();
      console.error("SendGrid email error:", emailError);
      throw new Error("Failed to send confirmation email");
    }

    console.log("Confirmation email sent successfully");

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
