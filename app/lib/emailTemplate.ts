export function getWaitlistConfirmationEmail(firstName: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to GymVid – Your Founding Member Spot is Secured</title>
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
    .tagline {
      font-size: 14px;
      color: #007AFF;
      font-weight: 600;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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
    .benefits-title {
      font-size: 16px;
      font-weight: 700;
      margin: 28px 0 16px;
      color: #007AFF;
    }
    .benefit-item {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
      font-size: 16px;
      background-color: #f9fafb;
      padding: 12px;
      border-radius: 8px;
    }
    .checkmark {
      color: #1C1C1E;
      font-weight: 700;
      margin-right: 12px;
      flex-shrink: 0;
      font-size: 18px;
    }
    .benefit-text {
      flex: 1;
      line-height: 1.5;
    }
    .benefit-title {
      font-weight: 600;
      margin-bottom: 4px;
    }
    .benefit-desc {
      font-size: 14px;
      color: #8E8E93;
    }
    .vip-box {
      background-color: #f0f7ff;
      border: 2px solid #007AFF;
      border-radius: 12px;
      padding: 20px;
      margin: 24px 0;
      text-align: center;
    }
    .vip-title {
      font-size: 14px;
      color: #007AFF;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .vip-text {
      font-size: 18px;
      font-weight: 700;
      color: #1C1C1E;
    }
    .timeline {
      background-color: #f0f7ff;
      border-radius: 12px;
      padding: 20px;
      margin: 24px 0;
      border: 2px solid #007AFF;
    }
    .timeline-title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 12px;
      color: #007AFF;
    }
    .timeline-item {
      margin-bottom: 10px;
      font-size: 14px;
      padding-left: 20px;
      position: relative;
    }
    .timeline-item:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #007AFF;
      font-weight: 700;
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

    @media only screen and (max-width: 600px) {
      .content {
        padding: 20px 20px 0;
      }
      .greeting {
        font-size: 18px;
      }
      .benefit-item {
        padding: 10px;
      }
      .footer {
        padding: 10px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" class="logo" />
      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0 0 0;" />
    </div>

    <div class="content">
      <div class="greeting">Hey ${firstName},</div>

      <div class="body-text">
        You just joined something most lifters won't get access to for years.
      </div>

      <div class="body-text">
        Right now, everyone else is still doing the same thing: film a set, check their form, then spend 5 minutes manually logging it all into an app. It's a waste of your time.
      </div>

      <div class="body-text">
        As a GymVid founder, you skip all that. You're already filming anyway — we just made that footage actually work for you.
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="benefits-title">Here's What You Get:</div>

      <div class="benefit-item">
        <div class="checkmark">✨</div>
        <div class="benefit-text">
          <div class="benefit-title"><strong>No More Logging</strong></div>
          <div class="benefit-desc">Film your set. That's it. AI logs your exercise, reps, weight, and form — instantly.</div>
        </div>
      </div>

      <div class="benefit-item">
        <div class="checkmark">💡</div>
        <div class="benefit-text">
          <div class="benefit-title"><strong>Stop Guessing Your Form</strong></div>
          <div class="benefit-desc">Get real-time feedback on every lift. Fix bad habits before they become injuries. Train smarter, not just harder.</div>
        </div>
      </div>

      <div class="benefit-item">
        <div class="checkmark">🏆</div>
        <div class="benefit-text">
          <div class="benefit-title"><strong>Compete Against Friends (For Real)</strong></div>
          <div class="benefit-desc">Challenge your crew with video proof. No claims, no BS — just who actually lifted what. Real leaderboards. Real winners.</div>
        </div>
      </div>

      <div class="benefit-item">
        <div class="checkmark">😎</div>
        <div class="benefit-text">
          <div class="benefit-title"><strong>Build a Following That Respects Your Work</strong></div>
          <div class="benefit-desc">Share your progress and find your people. Stop training alone.</div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="timeline">
        <div class="timeline-title">What's Next:</div>
        <div class="timeline-item">→ <strong>More details on the opportunity</strong> are coming soon</div>
        <div class="timeline-item">→ You'll be notified when we open our <strong>seed round</strong></div>
        <div class="timeline-item">→ <strong>VIP pricing is locked in for you forever</strong></div>
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="body-text">
        We're in final stages of development now. You'll be among the first to experience this when we launch in 2026.
      </div>

      <div class="body-text">
        In the meantime, hit reply with any questions. We'd genuinely love to hear what excites you most about this.
      </div>

      <div class="signature">
        Looking forward to building together,<br/>
        <br/>
        <strong>Jamie</strong><br/>
        Founder & CEO<br/>
        <br/>
        <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" style="max-width: 100px; height: auto; margin: 16px 0;" />
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0 0 0;" />
    </div>

    <div class="footer">
      You're receiving this because you joined our GymVid Founding Members Club - <a href="{{unsubscribe}}" class="footer-link">Unsubscribe</a>
    </div>
  </div>
</body>
</html>
  `.trim();
}
