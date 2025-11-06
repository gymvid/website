export function getInvestorConfirmationEmail(firstName: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Interest in GymVid</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 90%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600; color: #1C1C1E;">
                GymVid
              </h1>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <h2 style="margin: 0 0 20px; font-size: 22px; font-weight: 600; color: #1C1C1E;">
                Thank you for your interest, ${firstName}
              </h2>

              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                We're excited to share GymVid's investment opportunity with you.
              </p>

              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                We're building the <strong>Strava for strength training</strong> — combining AI-powered workout logging, real-time form analysis, and verified competitive leaderboards into a single platform that already has proven distribution through Stephanie Sanzo's 3M+ follower network.
              </p>

              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                Our team will reach out within the next few days with our pitch deck, product roadmap, and investment details.
              </p>

              <!-- CTA Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #1C1C1E;">
                      In the meantime:
                    </p>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6; color: #1C1C1E;">
                      <li style="margin-bottom: 8px;">Check out our website: <a href="https://gymvid.com" style="color: #3b82f6; text-decoration: none;">gymvid.com</a></li>
                      <li style="margin-bottom: 8px;">Follow our progress on social media</li>
                      <li>Feel free to reach out with any questions</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                Best regards,<br>
                <strong>Jamie Bisset</strong><br>
                Founder & CEO, GymVid<br>
                <a href="mailto:hello@gymvid.com" style="color: #3b82f6; text-decoration: none;">hello@gymvid.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f9fafb; text-align: center; border-top: 1px solid #E5E5EA;">
              <p style="margin: 0; font-size: 14px; color: #8E8E93;">
                © 2025 GymVid. All rights reserved.
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
}
