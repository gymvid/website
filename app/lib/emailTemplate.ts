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
      <div class="greeting">Hey ${firstName}</div>

      <div class="body-text">
        Welcome to the GymVid Founders Club 🎉<br/>
        <br/>
        You've just joined something that is about to change the way that you (and the world) lift forever!<br/>
        <br/>
        I know that's a bold claim...<br/>
        <br/>
        But as someone who's spent the last 15 years working in gyms - I'm confident in saying this.
      </div>

      <div class="body-text">
        <strong>Here's the problems I've observed over the years...</strong>
      </div>

      <div class="list-item">
        <strong>1. Logging your lifts suck.</strong><br/>
        There's nothing more demotivating than trying to record all your lifts. You're there to train - not perform data entry!
      </div>

      <div class="list-item">
        <strong>2. Personal trainers are expensive.</strong><br/>
        I'm saying this as a PT myself! Getting coaching isn't feasible for everyone - but it should be.
      </div>

      <div class="list-item">
        <strong>3. It's hard to stay motivated.</strong><br/>
        Training is often repetitive & can easily become stale - especially without a training partner or a supportive gym community.
      </div>

      <div class="list-item">
        <strong>4. Training has become entertainment.</strong><br/>
        These days, social media rewards fast pace low value content. What happened to real, raw, training?
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="body-text">
        <strong>That's exactly why we built GymVid.</strong>
      </div>

      <div class="body-text">
        You film your set. That's it. AI handles the logging instantly — no tapping, no data entry. Just training.
      </div>

      <div class="body-text">
        Plus, you'll never question your form again. Get real feedback on every lift so you're constantly improving. Better form = better gains. That's how serious lifters level up.
      </div>

      <div class="body-text">
        And here's what's cool: you're already filming anyway. So why not share those videos with people who actually care about lifting? Real training partners. People who compete with video proof. No filters, no BS.
      </div>

      <div class="body-text">
        <strong>All of this will be possible within GymVid.</strong>
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="section-title">As a Founder, here's what you get:</div>

      <div class="list-item">✅ Early access when we launch (targeting Q1 2026)</div>
      <div class="list-item">✅ Founding member pricing — you'll pay less than everyone else</div>
      <div class="list-item">✅ Direct line to me — your feedback shapes what we build</div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="section-title">Here's what I need from you:</div>

      <div class="body-text">
        What's the #1 thing that frustrates you most about tracking workouts right now?
      </div>

      <div class="body-text">
        Reply and tell me. I'm using founder feedback to prioritize features.
      </div>

      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0;" />

      <div class="body-text">
        We're in the final stages of development now. I'll keep you updated as we hit milestones.<br/>
        <br/>
        Can't wait to build this with you.
      </div>

      <div class="signature">
        Jamie<br/>
        Founder & CEO, GymVid
      </div>

      <div class="body-text" style="font-size: 14px; margin-top: 24px;">
        <strong>P.S.</strong> I'm selecting a small group for beta testing before launch. If you want early access to test features and give feedback, reply with "BETA" and let me know.
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
