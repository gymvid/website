# GymVid Website

**Intelligent fitness tracking powered by AI video analysis**

---

## Overview

This repository contains the marketing website for **GymVid** - an AI-powered fitness tracking platform that automatically logs workouts from video, analyzes form, and gamifies strength training through competitive leaderboards and social features.

The website serves as the primary lead generation funnel for:
- **Potential users**: Fitness enthusiasts interested in early access to the mobile app
- **Potential investors**: Angels and VCs evaluating the opportunity
- **General audience**: Anyone learning about GymVid's value proposition

**Important**: This website is separate from the mobile application. It does not have backend connectivity to the app and serves purely as a marketing and lead capture tool.

---

## What is GymVid?

GymVid is positioned as **"Strava for strength training"** - combining the automatic tracking convenience of fitness wearables with the social competition dynamics that made Strava successful for runners and cyclists.

### Core Value Proposition

**Primary**: AI video analysis eliminates manual workout logging (saves 5+ minutes per workout)  
**Secondary**: Real-time form feedback prevents injury and accelerates strength gains  
**Tertiary**: Gamified competition via GymVid Games creates engagement and retention

### How It Works

1. **Film Your Set**: Record your workout like you already do for Instagram/TikTok
2. **AI Analyzes**: Computer vision detects exercise, counts reps, estimates weight, evaluates form
3. **Auto-Logs**: Everything saves to your workout history automatically
4. **Get Feedback**: AI coaching points help improve technique and performance
5. **Compete Globally**: Fair rankings using DOTS scoring (strength relative to bodyweight)
6. **Share Progress**: Post workout videos to your feed, follow friends, build community

### Key Features

- **AI Video Logging**: Automatic exercise detection, rep counting, and load estimation
- **Form Analysis**: Real-time coaching feedback on technique, tempo, and range of motion
- **GymVid Games**: Monthly progress leaderboards + all-time records with video verification
- **Social Feed**: Share workouts, follow lifters, discover new routines
- **Training Score**: Multi-dimensional point system (prevents retention cliff when PRs plateau)
- **AI Workout Generator**: Custom programs based on goals, equipment, and experience level

---

## Market Position

### Target Audience

**Primary Users**:
- Intermediate to advanced lifters (18-35 years old)
- Already filming workouts for Instagram/TikTok
- Currently using manual logging apps (Strong, Hevy) or pen & paper
- Frustrated by time-consuming manual entry

**Why They'll Switch**:
- Save 5+ minutes per workout (AI logging)
- Get objective form feedback (improve faster, reduce injury risk)
- Compete fairly with others (DOTS scoring accounts for bodyweight)
- Verify lifts with video proof (eliminate leaderboard cheating)

### Competitive Differentiation

GymVid is the **only app** combining:
1. AI video-to-workout logging (automatic tracking)
2. Real-time form analysis (coaching feedback)
3. Video-verified leaderboards (honest competition)
4. Social feed with carousel posts (community engagement)
5. Fair strength comparison (DOTS scoring system)

**We're not competing with Strong/Hevy** (they're manual logging apps)  
**We're competing with inertia** (lifters using Notes app or notebooks who won't switch to manual entry)

---

## Monetization Model

**Free Tier**: 1 video per workout, 3 custom exercises, 3 routines, unlimited manual logging  
**Standard ($9.95/mo)**: Unlimited video storage + manual logging (no AI features)  
**Enhanced ($24.95/mo)**: 200 AI credits/month + all premium features  
**Credit Packs**: Purchasable for power users who exceed monthly limits

### Revenue Validation

Competitors prove users will pay for AI + gamification:
- **Manual logging apps** (Hevy): $1.00 revenue per download
- **Gamification apps** (Liftoff): $2.36 revenue per download (2.36x premium)
- **AI workout apps** (Fitness AI): $10.00 revenue per download (10x premium)

GymVid combines BOTH AI and gamification = justified premium pricing.

---

## Website Goals

### Primary Objectives

1. **User Lead Generation**: Capture emails for early access waitlist
2. **Investor Lead Generation**: Provide materials for fundraising conversations
3. **Product Education**: Clearly explain what GymVid does and why it matters
4. **Social Proof**: Build credibility through founder story and market validation

### Key Pages

- **Homepage**: Value proposition + hero video demo + email capture CTA
- **How It Works**: Step-by-step breakdown of user experience
- **Features**: Detailed explanation of AI logging, form analysis, GymVid Games
- **Pricing**: Transparent tier comparison (Free vs Standard vs Enhanced)
- **About**: Founder story (Jamie Bisset + Stephanie Sanzo partnership)
- **For Investors**: Market size, competitive landscape, traction metrics
- **FAQ**: Common questions about AI accuracy, privacy, equipment compatibility

### Email Capture Strategy

Using **SendGrid** for email marketing platform:
- Newsletter signup for fitness content + product updates
- Early access waitlist (priority beta invites)
- Investor inquiry form (separate from user waitlist)

---

## Technical Specifications

### Tech Stack

This website is a **standalone marketing site** with NO backend connectivity to the GymVid mobile app.

**Frontend**:
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Hosting: AWS EC2
- Email: SendGrid API integration (configured via MCP)

**Current Implementation**:
- ✅ Landing page with animated logo introduction
- ✅ Video-to-image transition (GymVidWelcomeAnimation.mp4 → GymVidWelcomeImage.jpg)
- ✅ CTA buttons ("Join the waitlist", "Become an investor")
- ✅ Responsive design (mobile-first, scales to desktop)
- ✅ Favicon configured
- ⏳ Email capture forms (pending)
- ⏳ Additional pages (How It Works, Features, Pricing, etc.)

**Key Requirements**:
- Mobile-responsive design (60%+ traffic will be mobile)
- Fast page load (<2s on 4G)
- Video hosting for demo content (local mp4 files in /public)
- Form validation for email capture
- Privacy-compliant (GDPR/CCPA ready)

### Integration Points

- **SendGrid API**: Email capture + waitlist management (configured via MCP)
- **GoDaddy API**: Domain management for gymvid.com (configured via MCP)
- **Analytics**: Google Analytics + Meta Pixel (for future paid ads) - pending
- **CRM (Future)**: HubSpot or similar for investor pipeline management

### Development Status

**Phase 1: Landing Page (Current)** ✅ In Progress
- [x] Project initialization (Next.js + TypeScript + Tailwind)
- [x] Landing page with video animation
- [x] Responsive layout (mobile-first design)
- [x] CTA buttons (non-functional placeholders)
- [x] Favicon configuration
- [x] Local development environment
- [ ] Email capture integration with SendGrid
- [ ] Button click handling and routing

**Phase 2: Core Pages** ⏳ Pending
- [ ] How It Works page
- [ ] Features page
- [ ] Pricing page
- [ ] About page (founder story)
- [ ] For Investors page
- [ ] FAQ page

**Phase 3: Integration & Launch** ⏳ Pending
- [ ] Email capture forms functional
- [ ] Google Analytics integration
- [ ] Meta Pixel integration
- [ ] Domain connection (gymvid.com)
- [ ] Production deployment to AWS EC2
- [ ] SEO optimization

---

## Development Context

### About the Team

**Jamie Bisset** (Founder/CEO, 77.5% equity)
- 13+ years as personal trainer and gym owner
- Co-managed Sweat App partnership (30M users, $200M acquisition)
- Built LIFTit app in 2023 (Stephanie Sanzo's training platform)
- 1B+ views on strength training content produced with Stephanie

**Shine Dezign Infonet PVT. LTD** (Technical Partner, 22.5% equity)
- Chandigarh-based development company (50-250 engineers)
- Building the React Native mobile app + Supabase backend
- 3-year partnership since LIFTit development (2022-present)

**Stephanie Sanzo** (Strategic Partner)
- 3M+ followers across Instagram, YouTube, TikTok
- Elite strength athlete and coach
- 100+ warm relationships with fitness influencers
- Provides Day 1 distribution through established network

### Current Stage

**MVP Development**: 120-day timeline (started July 2025)  
**Target Launch**: Early 2026 beta in Melbourne, Australia  
**Fundraising Goal**: 1,000 users before raising seed round ($500K-$1M)

### Success Criteria

**Month 1-3**: 1,000 organic users (no paid ads) through Stephanie's network  
**Month 4-6**: 40%+ Month-1 retention (validates product-market fit)  
**Month 7-12**: $5K+ MRR with 5-8% free-to-paid conversion  
**Series A Readiness**: 10,000+ users, proven unit economics (LTV > 3x CAC)

---

## Brand Guidelines

### Voice & Tone

**Target Emotional State**: Confident, motivated, aspirational (but not arrogant)

**Brand Personality**:
- **Authentic**: We're lifters building for lifters (not fitness tourists)
- **Data-driven**: AI accuracy and objective metrics matter
- **Community-focused**: Your gym crew goes global
- **Progress-oriented**: Celebrate consistency, not just PRs

**Copy Guidelines**:
- Use "gym" not "fitness center" or "health club"
- Use "lifters" not "athletes" or "gym-goers"
- Use "train" not "work out" or "exercise"
- Use "PR" (personal record) not "PB" (personal best)
- Use concrete numbers (save 5 minutes) vs vague claims (save time)

### Visual Identity

**Logo**: GymVid wordmark with camera icon embedded in "V"

**Typography**:
- Primary Font: DM Sans (all headings, body text, buttons, UI elements)
- Font Weights: Regular (400), Medium (500), Semi-Bold (600), Bold (700)

**Color Palette**:
- Primary Blue: `#007AFF` (iOS blue - links, focused states, accents)
- Primary Background: `#FFFFFF` (white)
- Charcoal (Primary Buttons): `#27272a` (near-black for main CTAs)
- Dark Gray (Text): `#1C1C1E` (primary text color)
- Medium Gray: `#8E8E93` (placeholders, helper text)
- Light Gray (Borders): `#E5E5EA` (input borders, dividers)
- Logo Accent: `#5B9FD5` or `#007AFF` (blue on camera icon)

**Design Philosophy**:
- iOS-inspired clean, modern aesthetic
- Subtle shadows with strategic depth
- Mobile-first responsive approach
- High contrast for accessibility

**Photography Style**: Real gym environments (not stock fitness models), authentic lifting content
**Video Style**: Phone-filmed quality (matches user-generated content aesthetic)

> **Note**: Complete design system including button styles, input styles, spacing, shadows, and animations is documented in [CLAUDE.md](./CLAUDE.md#complete-design-system) for implementation reference.

---

## Key Messaging

### Taglines

**Primary**: "Intelligent fitness tracking powered by AI video analysis"  
**Secondary**: "Strava for strength training"  
**For Lifters**: "Stop logging. Start training."  
**For Investors**: "The Instagram of strength training, where every post is verified"

### Elevator Pitch (60 seconds)

"GymVid solves the fundamental problem that no existing fitness app has addressed: you're already filming your workouts for Instagram, but you still have to manually log everything into Strong or Hevy. That's double work.

We use computer vision to automatically detect your exercise, count reps, estimate weight, and analyze your form - all from the video you're already recording. It saves 5+ minutes per workout and gives you coaching feedback that would normally cost $100 per personal training session.

Then we add the social layer - you can share workouts with friends, compete on global leaderboards using DOTS scoring (which makes strength comparison fair regardless of bodyweight), and every lift requires video proof so there's no cheating.

We're positioned as Strava for strength training. Strong and Hevy generate $10M+ combined from manual logging, Fitness AI does $1.2M from AI workouts, Liftoff does $4M from gamification - we're the first to combine all three: AI automation + form analysis + verified competition.

My fiancée Stephanie Sanzo has 3M followers in our exact target demographic. We can reach 1,000 users in Month 3 for under $5K through her network - competitors spend $30-50K in ads to get there. That's our unfair advantage: we launch WITH the users, not hoping to find them.

We're raising our seed round after hitting 1,000 users to fund marketing and scale to 10K users within 6 months. Early access beta launches in Melbourne in Q1 2026."

---

## Investor-Focused Messaging

### Market Opportunity

**Total Addressable Market**: 143 million strength trainers globally with equipment access  
**Serviceable Market**: 55 million in English-speaking countries (US/UK/AU/CA)  
**Target Market**: 12 million who currently film their workouts for social media

**Revenue Potential at Scale**:
- 1M users × $5 ARPU = $5M ARR
- 5M users × $7 ARPU = $35M ARR
- 10M users × $10 ARPU = $100M ARR
- 30M users × $15 ARPU = $450M ARR (Sweat App scale with higher monetization)

### Competitive Intelligence

**Verified Market Data (Sensor Tower, October 2025)**:
- Hevy: $3.6M ARR (manual logging + social)
- Strong: $6.7M ARR (legacy manual logging)
- Fitness AI: $1.2M ARR (AI workouts only, no auto-logging)
- Liftoff: $4M ARR (gamification of manual logging)
- Ladder: $48-54M ARR (AI programming, still requires manual logging)
- **Total ecosystem: $183-241M ARR**

**GymVid's Advantage**: Only app combining AI auto-logging + form analysis + verified competition + social feed + creator platform in one product. Competitors built on manual logging can't pivot to video-first without 18-24 months of development.

### Exit Precedent

**Sweat App**: 30M users, acquired by iFIT for $200M (2021)  
**Ladder**: Raised $105M across multiple rounds (validates billion-dollar fitness app thesis)  
**Strava**: $1.5B valuation (proves social fitness competition scales)

GymVid is applying the Strava playbook (segment competition + verified achievements) to the strength training vertical, with stronger monetization than Strava (premium AI features justify higher ARPU).

---

## Repository Structure

```
gymvid/
├── README.md                      # This file
├── CONTEXT.md                     # Detailed product/market context for developers & AI
├── CLAUDE.md                      # Claude Code project instructions
├── app/
│   ├── layout.tsx                 # Root layout with metadata & favicon config
│   ├── page.tsx                   # Landing page component
│   └── globals.css                # Global Tailwind CSS styles
├── public/
│   └── images/
│       └── logo/
│           ├── annimation/
│           │   ├── GymVidWelcomeAnimation.mp4
│           │   └── GymVidWelcomeImage.jpg
│           ├── gymvid-favicon.jpg
│           └── [other logo variants]
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── postcss.config.mjs             # PostCSS configuration
├── next.config.ts                 # Next.js configuration
└── .env                           # Environment variables (SendGrid API key)
```

---

## Contact & Links

**Website**: [gymvid.com](https://gymvid.com) (launching soon)  
**Email**: hello@gymvid.com  
**Founder**: Jamie Bisset (jamie@gymvid.com)

**Strategic Partner**: Stephanie Sanzo  
- Instagram: [@stephaniesanzo](https://instagram.com/stephaniesanzo) (3M+ followers)
- YouTube: [Stephanie Sanzo](https://youtube.com/@stephaniesanzo)

---

## License

**Proprietary** - All rights reserved. This repository contains confidential business information for GymVid Inc. (Delaware C-Corp, incorporated October 2025).

Unauthorized copying, distribution, or use of this code or content is strictly prohibited.

---

**Last Updated**: November 2025  
**Version**: 1.0 (Pre-Launch Website)