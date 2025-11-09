export function getInvestorConfirmationEmail(firstName: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Interest in GymVid – Investment Opportunity</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      background-color: #f5f5f5;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #FFFFFF;
    }
    .header {
      text-align: center;
      padding: 40px 20px 20px;
    }
    .logo {
      max-width: 200px;
      height: auto;
    }
    .content {
      padding: 20px 40px 0;
      color: #1C1C1E;
      line-height: 1.6;
    }
    .greeting {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .body-text {
      font-size: 16px;
      margin-bottom: 16px;
      color: #1C1C1E;
    }
    .highlight {
      font-weight: 600;
      color: #1C1C1E;
    }
    .section-title {
      font-size: 16px;
      font-weight: 700;
      margin: 28px 0 16px;
      color: #1C1C1E;
    }
    .highlight-box {
      background-color: #f0f7ff;
      border: 2px solid #007AFF;
      border-radius: 12px;
      padding: 20px;
      margin: 24px 0;
    }
    .highlight-box-title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 12px;
      color: #007AFF;
    }
    .list-item {
      margin-bottom: 12px;
      font-size: 16px;
      color: #1C1C1E;
    }
    .list-item strong {
      font-weight: 600;
    }
    .grey-box {
      background-color: #f9fafb;
      padding: 20px;
      margin: 24px 0;
      border-radius: 8px;
    }
    .grey-box-title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 12px;
      color: #1C1C1E;
    }
    .signature {
      margin-top: 32px;
      font-size: 16px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #8E8E93;
    }
    .footer-link {
      color: #007AFF;
      text-decoration: none;
    }
    a {
      color: #007AFF;
      text-decoration: none;
    }

    @media only screen and (max-width: 600px) {
      .content {
        padding: 20px 20px 0;
      }
      .greeting {
        font-size: 18px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" class="logo" />
      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />
    </div>

    <div class="content">
      <div class="greeting">Thank you for your interest, ${firstName}</div>

      <div class="body-text">
        We're thrilled to connect with you about GymVid's investment opportunity.
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="body-text">
        <span class="highlight">We're building the Strava for strength training.</span><br/>
        <br/>
        Strava revolutionized how millions of runners and cyclists track their workouts and connect with like-minded people. We're building the same type of platform but for gym goers.
      </div>

      <div class="body-text">
        While runners use GPS tracking and Strava, lifters use video — but they don't have any technology to leverage the footage. We're not asking people to start filming their workouts, <span class="highlight">they already are!</span>
      </div>

      <div class="body-text">
        50+ million Instagram posts tagged with #formcheck proves this behavior already exists at scale. So we're creating the world's first AI-powered video analysis platform for strength training.
      </div>

      <div class="body-text">
        We're transforming wasted footage into automatic logging, verified PRs, and competitive leaderboards in a native social experience — all powered by AI that provides real-time form coaching at a fraction of the cost of personal training.
      </div>

      <div class="highlight-box">
        <div class="highlight-box-title">What's Next:</div>
        <div class="list-item">→ <strong>More Information:</strong> We'll send you more details about the opportunity soon</div>
        <div class="list-item">→ <strong>Seed Round:</strong> You'll be notified when our seed round goes live for investment</div>
        <div class="list-item">→ <strong>Product Updates:</strong> Stay in the loop as we hit major milestones</div>
      </div>

      <div class="section-title">Why GymVid Will Win:</div>

      <div class="list-item">
        <strong>Proven Distribution:</strong> Stephanie Sanzo's 3M+ follower network guarantees Day 1 users
      </div>

      <div class="list-item">
        <strong>Video-First Moat:</strong> Competitors need 18-24 months to pivot from text to video architecture
      </div>

      <div class="list-item">
        <strong>Multiple Revenue Streams:</strong> Subscriptions, creator platform, gym partnerships, video ads
      </div>

      <div class="list-item">
        <strong>Validated Market:</strong> Competitors generate $183M+ ARR combined; Ladder raised $105M, Sweat exited for $200M
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="section-title">In the Meantime:</div>

      <div class="list-item">→ Check out our website: <a href="https://www.gymvid.com">gymvid.com</a></div>

      <div class="list-item">→ Follow our progress on social media</div>

      <div class="list-item">→ Feel free to reach out with any questions</div>

      <div class="signature">
        <br/>
        Looking forward to building together,<br/>
        <br/>
        <strong>Jamie Bisset</strong><br/>
        Founder & CEO, GymVid<br/>
        <a href="mailto:hello@gymvid.com">hello@gymvid.com</a>
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />
    </div>

    <div class="footer">
      © 2025 GymVid. All rights reserved.
    </div>
  </div>
</body>
</html>
  `.trim();
}
