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
      padding: 20px 40px 40px;
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
      color: #1C1C1E;
    }
    .benefit-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 14px;
      font-size: 16px;
      background-color: #f9fafb;
      padding: 12px;
      border-radius: 8px;
      border-left: 3px solid #007AFF;
    }
    .checkmark {
      color: #007AFF;
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
      background-color: #f5f5f5;
      border-radius: 12px;
      padding: 20px;
      margin: 24px 0;
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
        padding: 20px 20px 40px;
      }
      .greeting {
        font-size: 18px;
      }
      .benefit-item {
        padding: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" class="logo" />
    </div>

    <div class="content">
      <div class="greeting">Hey ${firstName}</div>

      <div class="body-text">
        You just secured your spot in what we believe to be the future of strength training.<br/>
        <br/>
        <strong>Welcome to the GymVid founders club!</strong><br/>
        <br/>
        While people continue to go through the tedious task of manually logging their workouts...<br/>
        <br/>
        GymVid users will film their sets and let AI handle the rest!<br/>
        <br/>
        No more endless tapping.<br/>
        No more guessing your form.<br/>
        <strong>Just better training & faster progress.</strong>
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="benefits-title">What You Get as a Founding Member:</div>

      <div class="benefit-item">
        <div class="checkmark">✨</div>
        <div class="benefit-text">
          <div class="benefit-title"><strong>Automatic Workout Logging</strong></div>
          <div class="benefit-desc">Film your set. AI logs exercise, reps, weight, form quality instantly.</div>
        </div>
      </div>

      <div class="benefit-item">
        <div class="checkmark">💡</div>
        <div class="benefit-text">
          <div class="benefit-title"><strong>Real-Time AI Form Coaching</strong></div>
          <div class="benefit-desc">Get instant technique feedback on every lift to improve form & prevent injury.</div>
        </div>
      </div>

      <div class="benefit-item">
        <div class="checkmark">🏆</div>
        <div class="benefit-text">
          <div class="benefit-title"><strong>Verified Competition</strong></div>
          <div class="benefit-desc">Compete against friends with video proof. No honor system. Real leaderboards.</div>
        </div>
      </div>

      <div class="benefit-item">
        <div class="checkmark">😎</div>
        <div class="benefit-text">
          <div class="benefit-title"><strong>Build Your Training Brand</strong></div>
          <div class="benefit-desc">Share your progress & compete with a community of serious lifters.</div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="timeline">
        <div class="timeline-title">What's Next:</div>
        <div class="timeline-item"><strong>2026: App launches (date TBC)</strong></div>
        <div class="timeline-item"><strong>Launch: You'll get notified and be among the first to experience the future of strength training</strong></div>
        <div class="timeline-item"><strong>Always: VIP pricing locked in for life</strong></div>
      </div>

      <div class="body-text">
        We're in the final stages of development now and can't wait to put GymVid in your hands.<br/>
        <br/>
        You'll be the first to know the moment we're ready!<br/>
        <br/>
        In the meantime, please let us know if you have any questions.<br/>
        <br/>
        Otherwise, more info to come soon!<br/>
        <br/>
        Thanks so much for your support!!
      </div>

      <div class="signature">
        Ready to stop logging and start training?<br/>
        <br/>
        <strong>Jamie & The GymVid Team</strong>
      </div>
    </div>

    <div class="footer">
      You're receiving this because you joined our GymVid Founding Members Club - <a href="{{unsubscribe}}" class="footer-link">Unsubscribe</a>
    </div>
  </div>
</body>
</html>
  `.trim();
}
