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
              <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" style="width: 220px; height: auto; max-width: 100%; display: block; margin: 0 auto;" />
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <h2 style="margin: 0 0 20px; font-size: 22px; font-weight: 600; color: #1C1C1E;">
                Thank you for your interest, ${firstName}
              </h2>

              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                We're thrilled to connect with you about GymVid's investment opportunity.
              </p>

              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                <strong>We're building the Strava for strength training.</strong>
              </p>

              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                Strava revolutionized how millions of runners and cyclists track their workouts and connect with like-minded people. We're building the same type of platform but for gym goers.
              </p>

              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                While runners use GPS tracking and Strava, lifters use video — but they don't have any technology to leverage the footage. We're not asking people to start filming their workouts, <strong>they already are!</strong>
              </p>

              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                50+ million Instagram posts tagged with #formcheck proves this behavior already exists at scale. So we're creating the world's first AI-powered video analysis platform for strength training.
              </p>

              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #1C1C1E;">
                We're transforming wasted footage into automatic logging, verified PRs, and competitive leaderboards in a native social experience — all powered by AI that provides real-time form coaching at a fraction of the cost of personal training.
              </p>

              <!-- What's Next Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f0f7ff; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px; border-radius: 12px;">
                    <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 600; color: #1C1C1E;">
                      What's Next:
                    </h3>
                    <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.8; color: #1C1C1E;">
                      <li style="margin-bottom: 8px;"><strong>More Information:</strong> We'll send you more details about the opportunity soon</li>
                      <li style="margin-bottom: 8px;"><strong>Seed Round:</strong> You'll be notified when our seed round goes live for investment</li>
                      <li><strong>Product Updates:</strong> Stay in the loop as we hit major milestones</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Key Highlights -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px; border-radius: 12px;">
                    <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 600; color: #1C1C1E;">
                      Why GymVid Will Win:
                    </h3>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.8; color: #1C1C1E;">
                      <li style="margin-bottom: 8px;"><strong>Proven Distribution:</strong> Stephanie Sanzo's 3M+ follower network guarantees Day 1 users</li>
                      <li style="margin-bottom: 8px;"><strong>Video-First Moat:</strong> Competitors need 18-24 months to pivot from text to video architecture</li>
                      <li style="margin-bottom: 8px;"><strong>Multiple Revenue Streams:</strong> Subscriptions, creator platform, gym partnerships, video ads</li>
                      <li><strong>Validated Market:</strong> Competitors generate $183M+ ARR combined; Ladder raised $105M, Sweat exited for $200M</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- CTA Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px; border-radius: 12px;">
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
