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
      display: block;
      margin: 0 auto;
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
    .section-header {
      font-size: 20px;
      font-weight: 700;
      margin: 28px 0 16px;
      color: #1C1C1E;
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
      <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" class="logo" style="width: 200px; height: auto;" />
      <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 20px 0 0 0;" />
    </div>

    <div class="content">
      <div class="body-text">
        Hey ${firstName}
      </div>

      <div class="body-text">
        Welcome to the <span style="color: #1C1C1E;">GymVid Founders Club</span> 👊
      </div>

      <div class="body-text" style="margin-top: 20px;">
        <strong>Let me know if this sounds familiar...</strong>
      </div>

      <div class="body-text">
        Walk into any gym and you'll see phones propped against water bottles everywhere.
      </div>

      <div class="body-text">
        People filming sets - some for form checks, others for social media content.
      </div>

      <div class="body-text">
        Maybe you're one of them?
      </div>

      <div class="body-text">
        But here's the annoying part:
      </div>

      <div class="body-text">
        Whether you're filming for yourself or for social media, you're STILL opening a separate app to manually log everything you just recorded.
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">That's the friction we're eliminating.</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">The apps you're probably using right now...</div>

      <div class="body-text">
        You've likely tried Strong, Hevy, or maybe something like MyFitnessPal.
      </div>

      <div class="body-text">
        And all these apps are great for tracking (which is a necessity for making progress).
      </div>

      <div class="body-text">
        But they're all built on manual logging.
      </div>

      <div class="body-text">
        Nobody's built the obvious solution for strength training yet:
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">Make the video DO the logging.</strong>
      </div>

      <div class="body-text">
        That's GymVid.
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Here's how it works:</div>

      <div class="body-text" style="margin-bottom: 20px;">
        <strong style="color: #007AFF;">→</strong> Film your set (like you already do)<br/>
        <strong style="color: #007AFF;">→</strong> AI detects exercise, counts reps, estimates weight, analyzes form<br/>
        <strong style="color: #007AFF;">→</strong> Get instant feedback on RPE, time under tension, reps in reserve<br/>
        <strong style="color: #007AFF;">→</strong> Post to your feed on a platform where people actually care about your lifts<br/>
        <strong style="color: #007AFF;">→</strong> Compete on leaderboards (records awarded by age/gender/weight class)
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">Literally, just film and lift.</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Why you should trust this will work...</div>

      <div class="body-text">
        I'm Jamie Bisset - I've spent 15 years in gyms as a PT, gym owner, and media partner to Stephanie Sanzo (5M+ followers across platforms).
      </div>

      <div class="body-text">
        Together we've created fitness content generating over 1 billion views.
      </div>

      <div class="body-text">
        <strong>More importantly:</strong> <span style="color: #007AFF;">We've already built and launched a fitness app.</span>
      </div>

      <div class="body-text">
        LIFTit (built for Stephanie's audience) is live in app stores with 50K+ downloads.
      </div>

      <div class="body-text">
        We know how to build products lifters actually use.
      </div>

      <div class="body-text">
        GymVid isn't our first app - it's everything we learned from LIFTit, rebuilt from the ground up for video-first strength training.
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Here's what I need from you:</div>

      <div class="body-text">
        What's the #1 thing that frustrates you most about tracking workouts?
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">Reply and tell me.</strong>
      </div>

      <div class="body-text">
        I'm using founder feedback to prioritize features for beta - and I read every single response.
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Want early access?</div>

      <div class="body-text">
        I'm hand-selecting 50 members from the Founders Club for closed beta testing before public launch.
      </div>

      <div class="body-text">
        If you want in, just reply <span style="color: #007AFF; font-weight: 600;">"BETA"</span> and I'll follow up directly.
      </div>

      <div class="body-text">
        <strong>Beta testers get:</strong>
      </div>

      <div class="body-text">
        <span style="color: #007AFF; font-weight: 700;">✓</span> Free access during beta (3-6 months)<br/>
        <span style="color: #007AFF; font-weight: 700;">✓</span> First access to new features<br/>
        <span style="color: #007AFF; font-weight: 700;">✓</span> Direct line to me and the dev team
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Monthly updates starting January</div>

      <div class="body-text">
        I'll keep you posted as we hit milestones:
      </div>

      <div class="body-text">
        • New exercises supported (we're starting with the big 3, then expanding)<br/>
        • Form analysis improvements (depth tracking, bar path, tempo)<br/>
        • Beta tester feedback and feature launches
      </div>

      <div class="body-text">
        Let's build this together 🙌
      </div>

      <div class="signature" style="margin-top: 32px; font-size: 16px;">
        <strong>Jamie</strong><br/>
        Founder & CEO<br/>
        <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" style="width: 100px; height: auto; margin-top: 12px; display: block;" />
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>
    </div>

    <div class="footer">
      You're receiving this because you joined our GymVid Founding Members Club - <a href="{{unsubscribe}}" class="footer-link">Unsubscribe</a>
    </div>
  </div>
</body>
</html>
  `.trim();
}
