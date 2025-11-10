export function getInvestorConfirmationEmail(firstName: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\$340K/month flowing away from manual workout loggers – GymVid Investment</title>
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
    .body-text {
      font-size: 16px;
      margin-bottom: 16px;
      color: #1C1C1E;
    }
    .section-header {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #1C1C1E;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #8E8E93;
    }
    a {
      color: #007AFF;
      text-decoration: none;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 16px;
    }
    table td {
      padding: 12px;
      border: 1px solid #E5E5EA;
      text-align: left;
    }
    table th {
      padding: 12px;
      border: 1px solid #E5E5EA;
      text-align: left;
      font-weight: 700;
      background-color: #f9fafb;
    }

    @media only screen and (max-width: 600px) {
      .content {
        padding: 20px 20px 0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" class="logo" style="width: 200px; height: auto;" />
      <div style="border-top: 1px solid #E5E5EA; margin: 20px 0 0 0; height: 0;"></div>
    </div>

    <div class="content">
      <div class="body-text">
        Hey ${firstName}
      </div>

      <div class="body-text">
        Thanks for your interest in GymVid!
      </div>

      <div class="body-text">
        I'm not going to waste your time.
      </div>

      <div class="body-text">
        My goal with this email is to give you everything you need to validate our thinking.
      </div>

      <div class="body-text">
        Prepare yourself for a 5-minute read & a deep insight into the current state of gym logging apps…
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Here's what's happening...</div>

      <div class="body-text">
        In the last 6 months, manual workout logging apps lost <span style="color: #007AFF; font-weight: 600;">\$150K/month</span> in revenue.
      </div>

      <div class="body-text">
        Where'd it go?
      </div>

      <div class="body-text">
        Social features (<span style="color: #007AFF; font-weight: 600;">+\$200K</span>) and gamification (<span style="color: #007AFF; font-weight: 600;">+\$140K</span>).
      </div>

      <div class="body-text">
        The market is speaking: People want Strava for strength training… But nobody's built it yet.
      </div>

      <div class="body-text">
        <strong>That's the opportunity.</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Walk into any gym…</div>

      <div class="body-text">
        You'll see phones propped against water bottles everywhere. People filming sets for form checks.
      </div>

      <div class="body-text">
        Then they close the camera, open a different app, and manually type in everything they just recorded on video.
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">That friction is the entire opportunity.</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">The Competitive Landscape</div>

      <div class="body-text">
        These are the major players in the gym logging space:
      </div>

      <div class="body-text">
        <strong><a href="https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577" style="color: #007AFF; text-decoration: underline;">Strong:</a></strong> The OG. Been around 14 years. Pure utility app focused on manual logging.
      </div>

      <div class="body-text">
        <strong><a href="https://apps.apple.com/us/app/hevy-workout-tracker-gym-log/id1458862350" style="color: #007AFF; text-decoration: underline;">Hevy:</a></strong> The up and comer. Been around 6 years. Added basic social features (share workouts, gym selfies).
      </div>

      <div class="body-text">
        <strong><a href="https://apps.apple.com/us/app/liftoff-ranked-gym-workouts/id6448081563" style="color: #007AFF; text-decoration: underline;">Liftoff:</a></strong> The new kid. 4 years old. Added gamification (leaderboards, challenges).
      </div>

      <div class="body-text" style="color: #8E8E93;">
        <em>Here's what SensorTower data reveals…</em>
      </div>

      <table>
        <tr>
          <th>App</th>
          <th>May 2025</th>
          <th>Nov 2025</th>
          <th>Change</th>
        </tr>
        <tr>
          <td><strong>Strong</strong><br/>(manual only)</td>
          <td>\$700k/mo</td>
          <td>\$550k/mo</td>
          <td style="color: #dc2626;"><strong>-21%<br/>(-\$150k)</strong></td>
        </tr>
        <tr>
          <td><strong>Hevy</strong><br/>(manual + social)</td>
          <td>\$300k/mo</td>
          <td>\$500k/mo</td>
          <td style="color: #16a34a;"><strong>+67%<br/>(+\$200k)</strong></td>
        </tr>
        <tr>
          <td><strong>Liftoff</strong><br/>(manual + gamification)</td>
          <td>\$300k/mo</td>
          <td>\$440k/mo</td>
          <td style="color: #16a34a;"><strong>+47%<br/>(+\$140k)</strong></td>
        </tr>
      </table>

      <div class="body-text">
        <strong>The thesis:</strong> Manual logging is dying. Social and gamification are winning. But execution is weak.
      </div>

      <div class="body-text">
        <strong style="color: #1C1C1E;">Hevy's "social":</strong> Placeholder images with text summaries. You can share workouts and compare lifts, but there's nothing to actually watch. Just boring thumbnails.
      </div>

      <div class="body-text">
        <strong style="color: #1C1C1E;">Liftoff's "gamification":</strong> Cartoon elephants, a mascot named "Jymbo," egg currency, "GymBros Inc" branding. Alienates mainstream users with extreme bro-culture positioning.
      </div>

      <div class="body-text">
        Yet both are growing despite weak execution.
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">And most importantly - neither is Strava.</strong>
      </div>

      <div class="body-text">
        They're all stuck in manual logging with bolt-on features.
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">This is the Instagram vs TikTok Moment for Fitness</div>

      <div class="body-text">
        We watched this exact pattern in content:
      </div>

      <div class="body-text">
        • Instagram dominated with images (2015-2020)<br/>
        • TikTok demolished them with video (2020-2024)<br/>
        • Instagram copied with Reels, never recovered
      </div>

      <div class="body-text">
        Hevy is Instagram 2010. Liftoff has gamification with childish branding. Both growing despite weak execution.
      </div>

      <div class="body-text">
        <strong>The market is ready for video.</strong><br/>
        <strong style="color: #007AFF;">And nobody's built it yet…</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Why Video Changes Everything</div>

      <div class="body-text">
        For strength training, video is the GPS.
      </div>

      <div class="body-text">
        Strava worked because GPS made tracking automatic. You run, your phone tracks it, done.
      </div>

      <div class="body-text">
        People already film workouts constantly.
      </div>

      <div class="body-text">
        Open Instagram or TikTok and search #gym - you'll find millions of posts prove the behaviour exists at scale.
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">But right now, all that footage is being wasted!</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Here's proof the technology works…</div>

      <div class="body-text">
        An app called <a href="https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616" style="color: #007AFF; text-decoration: underline;">Cal AI</a> just validated this exact approach.
      </div>

      <div class="body-text">
        Users take a photo of their meal. AI estimates calories and macros.
      </div>

      <div class="body-text">
        They went from zero to <span style="color: #007AFF; font-weight: 600;">\$30M projected revenue in 2 years</span> competing against MyFitnessPal.
      </div>

      <div class="body-text">
        If AI works for static images (meals), it works for video — which provides exponentially more data for movement analysis.
      </div>

      <div class="body-text">
        Strava launched when GPS became ubiquitous (2009).<br/>
        <br/>
        <strong style="color: #007AFF;">We're launching when computer vision became commercially viable (2025).</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">What We're Building</div>

      <div class="body-text">
        <strong>GymVid =</strong> Strava's formula applied to strength training:
      </div>

      <table>
        <tr>
          <th>MOAT</th>
          <th>Strava</th>
          <th>GymVid</th>
        </tr>
        <tr>
          <td><strong style="color: #007AFF;">Automatic Logging</strong></td>
          <td>GPS Tracking</td>
          <td>AI Video Analysis</td>
        </tr>
        <tr>
          <td><strong style="color: #007AFF;">Social feed</strong></td>
          <td>Activities</td>
          <td>Workout Videos</td>
        </tr>
        <tr>
          <td><strong style="color: #007AFF;">Competition</strong></td>
          <td>Segments & KOMs</td>
          <td>Categories with Video-proof</td>
        </tr>
        <tr>
          <td><strong style="color: #007AFF;">Events</strong></td>
          <td>Clubs, routes</td>
          <td>Gyms, exercises</td>
        </tr>
        <tr>
          <td><strong style="color: #007AFF;">Creator platform</strong></td>
          <td>Attract Sponsors</td>
          <td>Trainers monetize</td>
        </tr>
      </table>

      <div class="body-text">
        <strong>The user experience:</strong>
      </div>

      <div class="body-text" style="margin-bottom: 20px;">
        <span style="color: #007AFF; font-weight: 600;">→</span> Film your set<br/>
        <br/>
        <span style="color: #007AFF; font-weight: 600;">→</span> AI detects exercise, counts reps, estimates weight<br/>
        <br/>
        <span style="color: #007AFF; font-weight: 600;">→</span> AI analyzes form and provides coaching feedback (RPE from bar speed, Time Under Tension, Reps in Reserve)<br/>
        <br/>
        <span style="color: #007AFF; font-weight: 600;">→</span> Post to feed with verified proof<br/>
        <br/>
        <span style="color: #007AFF; font-weight: 600;">→</span> Compete on global leaderboards (filtered by age/gender/weight class)<br/>
        <br/>
        <span style="color: #007AFF; font-weight: 600;">→</span> Follow other lifters, watch their workouts, build community
      </div>

      <div class="body-text">
        <strong>No manual entry. No fake weights. Just film and lift.</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Why Strength Training is Compelling</div>

      <div class="body-text">
        In full transparency - the total addressable market is smaller than running/cycling…
      </div>

      <div class="body-text">
        But here's what makes it attractive:
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">1)</strong> <strong>Higher engagement:</strong> Lifters train 4-5x/week vs runners/cyclists 2-3x/week
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">2)</strong> <strong>Higher monetization:</strong> Strength athletes spend more on coaching, programs, and tracking
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">3)</strong> <strong>No dominant player:</strong> Strava owns running/cycling. Strength is fragmented across weak apps
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">4)</strong> <strong>Creator economy:</strong> 2M+ personal trainers globally need a platform to build following and attract clients. Strava doesn't serve this.
      </div>

      <div class="body-text">
        <strong>The market is smaller but more engaged, pays more, and has no category leader yet.</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Who Am I?</div>

      <div class="body-text">
        I've been in gyms since I left high school - 15 years now.
      </div>

      <div class="body-text">
        I started with a local PT business, opened a gym, then sold it (still operating today).
      </div>

      <div class="body-text">
        I then partnered with Stephanie Sanzo to build her fitness media channels - we now reach <span style="color: #007AFF; font-weight: 600;">5M+ people</span> worldwide across Instagram, YouTube, and TikTok. Together we've created content that's generated over <span style="color: #007AFF; font-weight: 600;">1 billion views.</span>
      </div>

      <div class="body-text">
        From 2018-2022, Stephanie was a global trainer on the Sweat app as they scaled to 30M users and a <span style="color: #007AFF; font-weight: 600;">\$200M exit</span> to iFIT.
      </div>

      <div class="body-text">
        I co-managed that partnership - which gave us insider insight into how world-class fitness apps operate at scale.
      </div>

      <div class="body-text">
        This prompted us to build our own platform: LIFTit.
      </div>

      <div class="body-text">
        Built exclusively for Stephanie's audience, it's now live in app stores with <span style="color: #007AFF; font-weight: 600;">50K+ downloads</span> and <span style="color: #007AFF; font-weight: 600;">1,000+ five-star reviews.</span>
      </div>

      <div class="body-text">
        Throughout all these experiences - I've fallen in love with tech. And with everything I know about strength training, I can see a massive opportunity with GymVid.
      </div>

      <div class="body-text">
        <strong>Most founders pitch "Strava for X" without understanding why Strava worked or having domain expertise.</strong>
      </div>

      <div class="body-text">
        I've filmed fitness content that scaled to 1B+ views, launched a fitness app that's live in stores, and got a front-row seat watching a fitness app scale to \$200M.
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">The Team</div>

      <div class="body-text">
        I've partnered with Shine Dezign to help launch GymVid - we've worked together for nearly 3 years across multiple ventures, including building LIFTit.
      </div>

      <div class="body-text">
        They've assigned a full development team to GymVid under my product direction.
      </div>

      <div class="body-text">
        We structured this as a performance-based equity partnership (up to 22.5% to Shine upon hitting development milestones) with fixed cash recovery upon revenue generation.
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">No runway pressure. Just execution.</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Where We're At</div>

      <div class="body-text">
        <strong>MVP Status:</strong>
      </div>

      <div class="body-text">
        <span style="color: #007AFF;">✓</span> Core AI video logging system functional<br/>
        <span style="color: #007AFF;">✓</span> Form analysis working (RPE, Time Under Tension, Reps in Reserve calculated from bar speed)<br/>
        <span style="color: #007AFF;">✓</span> Social feed architecture complete<br/>
        <span style="color: #007AFF; font-weight: 600;">→</span> Leaderboard system with video verification in development
      </div>

      <div class="body-text">
        <strong>Timeline:</strong>
      </div>

      <div class="body-text">
        • <strong>Beta launch:</strong> Q1 2026<br/>
        • <strong>Target:</strong> 1,000 users within 6 months (organic growth + gym partnerships)
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Day 1 Distribution Advantage</div>

      <div class="body-text">
        • My partner Stephanie's <span style="color: #007AFF; font-weight: 600;">5M+ follower network</span> launches with us<br/>
        • Direct relationships with <span style="color: #007AFF; font-weight: 600;">100+ fitness influencers</span> (Arnold Classic, Olympia, industry connections)
      </div>

      <div class="body-text">
        <strong>We're not launching to a cold audience. We're launching to an engaged fitness community that already films workouts.</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">The Competitive Window</div>

      <div class="body-text">
        Strong, Hevy, and Liftoff are built on text/image infrastructure.
      </div>

      <div class="body-text">
        Adding AI video analysis means:
      </div>

      <div class="body-text">
        • Complete technical rebuild (18-24 months minimum)<br/>
        • Computer vision expertise they don't have in-house<br/>
        • Re-educating millions of users on new behavior (filming vs manual entry)
      </div>

      <div class="body-text">
        We're building Strava from the ground up for strength training — which no one has even come close to doing.
      </div>

      <div class="body-text">
        By the time they pivot, we'll have:
      </div>

      <div class="body-text">
        • <span style="color: #007AFF; font-weight: 600;">100K+ videos</span> of proprietary training data<br/>
        • <span style="color: #007AFF; font-weight: 600;">AI models fine-tuned</span> on real gym footage<br/>
        • Creator <span style="color: #007AFF; font-weight: 600;">network effects</span> (personal trainers building followings)<br/>
        • <span style="color: #007AFF; font-weight: 600;">First-mover</span> brand ("the video one")
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">The Opportunity</div>

      <div class="body-text">
        <strong>Strong:</strong> <span style="color: #007AFF;">\$6.6M ARR</span> (manual logging only)<br/>
        <strong>Hevy:</strong> <span style="color: #007AFF;">\$6M ARR</span> (manual + basic social)<br/>
        <strong>Liftoff:</strong> <span style="color: #007AFF;">\$5.3M ARR</span> (manual + gamification)<br/>
        <strong>Total market: <span style="color: #007AFF;">~\$18M+ ARR</span></strong>
      </div>

      <div class="body-text" style="color: #8E8E93;">
        <em>These numbers only include the 3 biggest players in the gym logging space.</em>
      </div>

      <div class="body-text">
        <strong>Our thesis:</strong> Video-first changes the game, but we're not pitching 10x overnight growth.
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">The Roadmap</div>

      <div class="body-text">
        <strong style="color: #007AFF;">First 18 months:</strong> Prove the model works
      </div>

      <div class="body-text">
        <span style="color: #007AFF;">•</span> 10K users (0.005% of 200M gym members)<br/>
        <span style="color: #007AFF;">•</span> \$5 blended ARPU = \$600K ARR<br/>
        <span style="color: #007AFF;">•</span> Break even, validate retention (>40% Month-1)<br/>
        <span style="color: #007AFF;">•</span> Raise seed round with proof of concept
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">18-36 months:</strong> Scale to category leadership
      </div>

      <div class="body-text">
        <span style="color: #007AFF;">•</span> 100K users (0.05% penetration)<br/>
        <span style="color: #007AFF;">•</span> \$5 blended ARPU = \$6M ARR<br/>
        <span style="color: #007AFF;">•</span> Match current market leaders (Hevy/Strong scale)<br/>
        <span style="color: #007AFF;">•</span> Series A readiness
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">Year 3-5:</strong> Strategic inflection point
      </div>

      <div class="body-text">
        <span style="color: #007AFF;">•</span> 500K users = \$30M ARR (1.5x current total market)<br/>
        <span style="color: #007AFF;">•</span> Dominant player in video-verified strength training<br/>
        <span style="color: #007AFF;">•</span> Multiple paths forward:
      </div>

      <div class="body-text">
        <strong>Most likely:</strong> <span style="color: #007AFF;">Strategic acquisition</span>
      </div>

      <div class="body-text">
        • <strong>Strava</strong> <strong style="color: #007AFF;">→</strong> just acquired Runna for AI coaching - we'd be their strength vertical<br/>
        • <strong>Whoop/Garmin/Oura</strong> <strong style="color: #007AFF;">→</strong> wearables need strength tracking content + validation data<br/>
        • <strong>Apple Fitness+</strong> <strong style="color: #007AFF;">→</strong> need strength training content, HealthKit integration opportunities<br/>
        • <strong>ClassPass/Mindbody</strong> <strong style="color: #007AFF;">→</strong> building full-stack fitness ecosystem
      </div>

      <div class="body-text">
        At this scale, we become a "buy vs build" decision for platforms that need 18-24 months and significant R&D to replicate our video verification + proprietary training data.
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">Alternatively:</strong>
      </div>

      <div class="body-text">
        • Continue scaling independently (Series B for global expansion)<br/>
        • Strategic partnership maintaining independence
      </div>

      <div class="body-text">
        <strong>The goal:</strong> Build something valuable enough that we have choices.
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Is This Possible?</div>

      <div class="body-text">
        Consider this...
      </div>

      <div class="body-text">
        Hevy grew <span style="color: #007AFF; font-weight: 600;">67% in 6 months.</span><br/>
        Liftoff grew <span style="color: #007AFF; font-weight: 600;">47% in 6 months.</span>
      </div>

      <div class="body-text">
        Both with weak execution.
      </div>

      <div class="body-text">
        We have better technology (AI vs manual), better distribution (5M followers), and a feature competitors would need 18-24 months to replicate.
      </div>

      <div class="body-text">
        <strong>The goal isn't to 10x the market overnight. It's to become the category leader in an emerging segment (video-verified training), then grow the category itself.</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">What I Need From You</div>

      <div class="body-text">
        If this resonates…
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">Let's set up a 30-minute call.</strong> I'll walk you through:
      </div>

      <div class="body-text">
        <strong style="color: #007AFF;">→</strong> Live product demo (AI form analysis in action)<br/>
        <strong style="color: #007AFF;">→</strong> Detailed unit economics model<br/>
        <strong style="color: #007AFF;">→</strong> Go-to-market strategy (gym partnerships + influencer flywheel)<br/>
        <strong style="color: #007AFF;">→</strong> Traction metrics we're targeting for fundability
      </div>

      <div class="body-text">
        If you're not interested right now:
      </div>

      <div class="body-text">
        <strong>I'll send monthly updates</strong> starting January 2026 as we hit beta milestones.
      </div>

      <div class="body-text">
        You'll see:
      </div>

      <div class="body-text">
        <span style="color: #007AFF;">✓</span> User growth metrics (signups, retention, engagement)<br/>
        <span style="color: #007AFF;">✓</span> AI accuracy improvements (targeting 90%+ on big 3 lifts)<br/>
        <span style="color: #007AFF;">✓</span> Creator adoption (personal trainers building followings)<br/>
        <span style="color: #007AFF;">✓</span> Revenue data (conversion rates, ARPU, LTV:CAC)
      </div>

      <div class="body-text">
        <strong>Either way, I'll keep you in the loop!</strong>
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">Due Diligence Starting Points</div>

      <div class="body-text">
        <strong style="color: #007AFF;">→</strong> Download Strong, Hevy, Liftoff — see why they're not Strava<br/>
        <br/>
        <strong style="color: #007AFF;">→</strong> Search "Strava valuation" + "Cal AI \$30M" to verify the model works<br/>
        <br/>
        <strong style="color: #007AFF;">→</strong> Check LIFTit in app stores (50K+ downloads, 1K+ five-star reviews prove our ability to ship)<br/>
        <br/>
        <strong style="color: #007AFF;">→</strong> SensorTower data verifiable (all revenue figures, October 2025)
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="section-header">In Summary…</div>

      <div class="body-text">
        Strava proved the model works in running/cycling.
      </div>

      <div class="body-text">
        The market just proved strength trainers want social and competition (<span style="color: #007AFF; font-weight: 600;">\$340K/mo in 6 months</span>).
      </div>

      <div class="body-text">
        Video is the unlock that makes automatic logging possible.
      </div>

      <div class="body-text">
        <strong>The window is 12-18 months before this gets crowded.</strong>
      </div>

      <div class="body-text">
        <strong>Want to help us build the Strava for strength training?</strong>
      </div>

      <div class="body-text">
        Let me know if you're interested and I'll keep you posted once we launch our seed round.
      </div>

      <div class="body-text">
        Talk soon!
      </div>

      <div class="signature" style="margin-top: 12px; font-size: 16px;">
        <strong>Jamie</strong><br/>
        Founder & CEO, GymVid<br/>
        <img src="https://www.gymvid.com/images/logo/gymvid-transparent-logo.png" alt="GymVid" style="width: 100px; height: auto; margin-top: 12px; display: block;" />
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0; height: 0;"></div>

      <div class="body-text" style="margin-top: 28px; color: #8E8E93;">
        <strong style="color: #1C1C1E;">P.S.</strong> Strava took 10 years to hit \$200M revenue. We have their playbook, better technology (AI vs GPS), Day 1 distribution (5M followers), and a market with no dominant player. The window is now.
      </div>

      <div style="border-top: 1px solid #E5E5EA; margin: 28px 0 0 0; height: 0;"></div>
    </div>

    <div class="footer">
      © 2025 GymVid. All rights reserved.
    </div>
  </div>
</body>
</html>
  `.trim();
}
