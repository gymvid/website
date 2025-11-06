export function getWaitlistConfirmationEmail(firstName: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to GymVid Beta Group</title>
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
      padding: 20px 40px 40px;
      color: #1C1C1E;
      line-height: 1.6;
    }
    .greeting {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .body-text {
      font-size: 16px;
      margin-bottom: 16px;
    }
    .benefits-title {
      font-size: 16px;
      font-weight: 600;
      margin: 24px 0 12px;
    }
    .benefit-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 12px;
      font-size: 16px;
    }
    .checkmark {
      color: #007AFF;
      font-weight: 700;
      margin-right: 12px;
      flex-shrink: 0;
    }
    .cta {
      margin: 32px 0;
      text-align: center;
    }
    .cta-text {
      font-size: 16px;
      margin-bottom: 8px;
    }
    .social-link {
      color: #007AFF;
      text-decoration: none;
      font-weight: 500;
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
        padding: 20px 20px 40px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" class="logo" />
    </div>

    <div class="content">
      <div class="greeting">Hi ${firstName},</div>

      <div class="body-text">
        Welcome to the GymVid Beta Group!
      </div>

      <div class="body-text">
        You're officially on the list for early access to GymVid – the AI-powered fitness tracking app that automatically logs your workouts from video.
      </div>

      <div class="benefits-title">Here's what you get as a VIP beta member:</div>

      <div class="benefit-item">
        <span class="checkmark">✓</span>
        <span>Early access to the app before public launch</span>
      </div>
      <div class="benefit-item">
        <span class="checkmark">✓</span>
        <span>Exclusive VIP discount (details coming soon)</span>
      </div>
      <div class="benefit-item">
        <span class="checkmark">✓</span>
        <span>Direct input on features and improvements</span>
      </div>
      <div class="benefit-item">
        <span class="checkmark">✓</span>
        <span>Priority support from our team</span>
      </div>

      <div class="body-text" style="margin-top: 24px;">
        We're working hard to launch in Q1 2026. You'll be the first to know when we're ready!
      </div>

      <div class="cta">
        <div class="cta-text">In the meantime, follow us on Instagram</div>
        <a href="https://instagram.com/gymvidapp" class="social-link">@gymvidapp</a>
        <div class="cta-text" style="margin-top: 4px;">for behind-the-scenes updates and sneak peeks.</div>
      </div>

      <div class="signature">
        Stay strong,<br/>
        The GymVid Team
      </div>
    </div>

    <div class="footer">
      You're receiving this because you joined the GymVid Beta Group<br/>
      <a href="{{unsubscribe}}" class="footer-link">Unsubscribe</a>
    </div>
  </div>
</body>
</html>
  `.trim();
}
