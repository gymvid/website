export function getInvestorConfirmationEmail(firstName: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta name="x-apple-disable-message-reformatting">
  <title>Thank You for Your Interest in GymVid</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f5f5f5; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">

          <!-- Header -->
          <tr>
            <td style="padding: 30px 30px 20px; text-align: center;">
              <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" style="width: 200px; height: auto; max-width: 90%; display: block; margin: 0 auto; border: 0; -ms-interpolation-mode: bicubic;" />
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 0 30px 30px;">
              <h2 style="margin: 0 0 18px; font-size: 20px; font-weight: 600; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif; mso-line-height-rule: exactly; line-height: 28px;">
                Thank you for your interest, ${firstName}
              </h2>

              <p style="margin: 0 0 14px; font-size: 15px; line-height: 24px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                We're thrilled to connect with you about GymVid's investment opportunity.
              </p>

              <p style="margin: 0 0 14px; font-size: 15px; line-height: 24px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                <strong style="font-weight: 700;">We're building the Strava for strength training.</strong>
              </p>

              <p style="margin: 0 0 14px; font-size: 15px; line-height: 24px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                Strava revolutionized how millions of runners and cyclists track their workouts and connect with like-minded people. We're building the same type of platform but for gym goers.
              </p>

              <p style="margin: 0 0 14px; font-size: 15px; line-height: 24px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                While runners use GPS tracking and Strava, lifters use video — but they don't have any technology to leverage the footage. We're not asking people to start filming their workouts, <strong style="font-weight: 700;">they already are!</strong>
              </p>

              <p style="margin: 0 0 14px; font-size: 15px; line-height: 24px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                50+ million Instagram posts tagged with #formcheck proves this behavior already exists at scale. So we're creating the world's first AI-powered video analysis platform for strength training.
              </p>

              <p style="margin: 0 0 22px; font-size: 15px; line-height: 24px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                We're transforming wasted footage into automatic logging, verified PRs, and competitive leaderboards in a native social experience — all powered by AI that provides real-time form coaching at a fraction of the cost of personal training.
              </p>

              <!-- What's Next Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f0f7ff; margin-bottom: 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tr>
                  <td style="padding: 18px;">
                    <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 700; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                      What's Next:
                    </h3>
                    <table role="presentation" style="width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tr>
                        <td style="padding: 0 0 8px 0; font-size: 15px; line-height: 22px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • <strong style="font-weight: 700;">More Information:</strong> We'll send you more details about the opportunity soon
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 8px 0; font-size: 15px; line-height: 22px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • <strong style="font-weight: 700;">Seed Round:</strong> You'll be notified when our seed round goes live for investment
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0; font-size: 15px; line-height: 22px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • <strong style="font-weight: 700;">Product Updates:</strong> Stay in the loop as we hit major milestones
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Key Highlights -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; margin-bottom: 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tr>
                  <td style="padding: 18px;">
                    <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 700; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                      Why GymVid Will Win:
                    </h3>
                    <table role="presentation" style="width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tr>
                        <td style="padding: 0 0 8px 0; font-size: 14px; line-height: 20px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • <strong style="font-weight: 700;">Proven Distribution:</strong> Stephanie Sanzo's 3M+ follower network guarantees Day 1 users
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 8px 0; font-size: 14px; line-height: 20px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • <strong style="font-weight: 700;">Video-First Moat:</strong> Competitors need 18-24 months to pivot from text to video architecture
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 8px 0; font-size: 14px; line-height: 20px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • <strong style="font-weight: 700;">Multiple Revenue Streams:</strong> Subscriptions, creator platform, gym partnerships, video ads
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0; font-size: 14px; line-height: 20px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • <strong style="font-weight: 700;">Validated Market:</strong> Competitors generate $183M+ ARR combined; Ladder raised $105M, Sweat exited for $200M
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; margin-bottom: 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tr>
                  <td style="padding: 18px;">
                    <p style="margin: 0 0 12px; font-size: 15px; font-weight: 700; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                      In the meantime:
                    </p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tr>
                        <td style="padding: 0 0 8px 0; font-size: 14px; line-height: 20px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • Check out our website: <a href="https://www.gymvid.com" style="color: #007AFF; text-decoration: underline;">gymvid.com</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 8px 0; font-size: 14px; line-height: 20px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • Follow our progress on social media
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0; font-size: 14px; line-height: 20px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif;">
                          • Feel free to reach out with any questions
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 15px; line-height: 24px; color: #1C1C1E; font-family: Arial, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                Best regards,<br>
                <strong style="font-weight: 700;">Jamie Bisset</strong><br>
                Founder & CEO, GymVid<br>
                <a href="mailto:hello@gymvid.com" style="color: #007AFF; text-decoration: underline;">hello@gymvid.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 18px 30px; background-color: #f9fafb; text-align: center; border-top: 1px solid #E5E5EA;">
              <p style="margin: 0; font-size: 13px; line-height: 18px; color: #8E8E93; font-family: Arial, Helvetica, sans-serif;">
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
