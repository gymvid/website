import { NextResponse } from "next/server";
import { getInvestorConfirmationEmail } from "@/app/lib/investorEmailTemplate";
import { appendToInvestorsSheet } from "@/app/lib/googleSheets";

function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "Unknown";
  return ip;
}

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

    // Get client IP for tracking
    const clientIP = getClientIP(request);

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

    // Step 2: Append investor data to Google Sheets
    try {
      console.log("Step 2: Appending to Google Sheets...");
      const timestamp = new Date().toISOString();
      const rowData = [firstName, lastName, email, investorType, investmentRange || "not specified", timestamp, clientIP];
      console.log("Row data to append:", JSON.stringify(rowData));

      await appendToInvestorsSheet([rowData]);
      console.log("Google Sheets append completed successfully");
    } catch (sheetError) {
      console.error("Error appending to Google Sheet:", sheetError);
      // Continue to send email even if sheet fails
    }

    // Step 3: Send confirmation email to investor
    console.log("Step 3: Sending confirmation email to investor...");
    const htmlContent = getInvestorConfirmationEmail(firstName);

    const confirmationEmailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email }],
            subject: "\$340K/month flowing away from manual workout loggers",
          },
        ],
        from: {
          email: "hello@gymvid.com",
          name: "Jamie Bisset | GymVid",
        },
        content: [
          {
            type: "text/html",
            value: htmlContent,
          },
        ],
      }),
    });

    if (!confirmationEmailResponse.ok) {
      const emailError = await confirmationEmailResponse.text();
      console.error("SendGrid confirmation email error:", emailError);
      throw new Error("Failed to send confirmation email");
    }

    // Step 4: Send notification email to you
    console.log("Step 4: Sending notification email to admin...");
    const investorTypeLabels: { [key: string]: string } = {
      vc_fund: "Venture Capital Fund",
      angel: "Angel Investor",
      strategic_partner: "Strategic Partner",
      influencer: "Fitness Influencer",
    };

    const notificationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 90%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px;">
              <h1 style="margin: 0 0 8px; font-size: 24px; font-weight: 700; color: #1C1C1E;">
                New Investor Inquiry
              </h1>
              <p style="margin: 0; font-size: 14px; color: #8E8E93;">
                ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
              </p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <div style="background-color: #F2F2F7; padding: 24px; border-radius: 12px;">
                <p style="margin: 0 0 12px; font-size: 16px; color: #1C1C1E;">
                  <strong>Name:</strong> ${firstName} ${lastName}
                </p>
                <p style="margin: 0 0 12px; font-size: 16px; color: #1C1C1E;">
                  <strong>Email:</strong> <a href="mailto:${email}" style="color: #007AFF; text-decoration: none;">${email}</a>
                </p>
                <p style="margin: 0 0 12px; font-size: 16px; color: #1C1C1E;">
                  <strong>Investor Type:</strong> ${investorTypeLabels[investorType] || investorType}
                </p>
                <p style="margin: 0; font-size: 16px; color: #1C1C1E;">
                  <strong>Investment Range:</strong> ${investmentRange || "Not specified"}
                </p>
              </div>

              <p style="margin: 24px 0 0; font-size: 14px; color: #8E8E93;">
                The investor has been added to your SendGrid "Investors" list and received a confirmation email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const notificationEmailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "hello@gymvid.com" }],
            subject: `New Investor Inquiry: ${firstName} ${lastName} (${investorTypeLabels[investorType] || investorType})`,
          },
        ],
        from: {
          email: "hello@gymvid.com",
          name: "GymVid Notifications",
        },
        content: [
          {
            type: "text/html",
            value: notificationHtml,
          },
        ],
      }),
    });

    if (!notificationEmailResponse.ok) {
      const notificationError = await notificationEmailResponse.text();
      console.error("SendGrid notification email error:", notificationError);
      // Don't throw error - investor already got their confirmation
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
