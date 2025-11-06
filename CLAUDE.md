# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GymVid is a **marketing website** for an AI-powered fitness tracking mobile application. This website serves as the primary lead generation funnel for capturing early access signups and investor inquiries.

**Important Context**:
- This is the **website repository only** - NOT the mobile app
- The website has NO backend connectivity to the mobile app
- Focus is purely on marketing, education, and lead capture
- Full product context available in README.md and CONTEXT.md

## Current State

**Active Development - Landing Page Phase**

The repository contains a functional Next.js landing page with:
- ✅ Next.js 15 with App Router architecture
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Animated logo introduction (video → static image transition)
- ✅ CTA buttons (placeholder functionality)
- ✅ Responsive mobile-first design
- ✅ Favicon configured
- ✅ Local development server running on http://localhost:3000

## Technology Stack

**Framework**: Next.js 15 (App Router)
**Language**: TypeScript 5
**Styling**: Tailwind CSS 3.4
**Deployment**: AWS EC2
**Email**: SendGrid API (configured via MCP)
**Domain**: gymvid.com (managed via GoDaddy MCP)

**Key Dependencies**:
- React 18.3.1
- Next.js 15.0.3
- Tailwind CSS 3.4.1
- TypeScript 5

## Development Setup

**Start Development Server**:
```bash
npm run dev
```
Server runs at http://localhost:3000

**Build for Production**:
```bash
npm run build
```

**Other Commands**:
```bash
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture & Design Guidelines

### File Structure
- `app/layout.tsx` - Root layout with metadata (title, favicon)
- `app/page.tsx` - Landing page component (client-side for video handling)
- `app/globals.css` - Global Tailwind styles
- `public/images/logo/` - Logo assets and animations

### Brand Guidelines (from README.md)
**Voice**: Authentic, data-driven, community-focused
**Terminology**:
- Use "gym" not "fitness center"
- Use "lifters" not "athletes"
- Use "train" not "work out"
- Use "PR" not "PB"
- Use concrete numbers vs vague claims

**Typography**:
- Primary Font: DM Sans (all text, headings, buttons, UI elements)

**Color Palette**:
- Primary Background: #FFFFFF (white)
- Primary CTA: #121212 (near-black)
- Secondary CTA: Grey outline on white
- Logo Accent: Blue (#5B9FD5)

---

## Complete Design System

This design system is extracted from the GymVid mobile app to ensure brand consistency across web and mobile platforms. Follow iOS design principles with clean, modern styling, subtle shadows, and strategic use of the blue accent color.

### Typography Scale

**Primary Font Family**: DM Sans (all platforms)

**Font Sizes**:
- Headings/Titles: 18px
- Body Text: 16px
- Input Text: 16px
- Button Text: 18px (primary), 16px (secondary)
- Helper Text: 14px

**Font Weights**:
- Regular: 400 (body text, inputs)
- Medium: 500 (links, labels, dividers)
- Semi-Bold: 600 (primary buttons)
- Bold: 700 (headings)

### Color System

**Primary Colors**:
- Primary Blue: `#007AFF` (iOS blue - used for links, focused states, primary accents)
- Blue Glow: `#3b82f6` (shadow/glow effects on primary buttons)

**Neutral Grays**:
- Dark Gray (Text): `#1C1C1E` (almost black - primary text color)
- Medium Gray: `#8E8E93` (placeholders, helper text, secondary text)
- Light Gray (Borders): `#E5E5EA` (input borders, dividers)
- Charcoal (Buttons): `#27272a` (primary button background)
- Charcoal Active: `#3f3f46` (primary button pressed state)
- Social Button Gray: `#757575` (social login button text)

**White Tones**:
- Pure White: `#FFFFFF` (backgrounds, secondary buttons)
- Off-White: `#F9FAFB` (primary button text for contrast)

### Button Styles

#### Primary Button (Sign In, Submit, Main CTAs)
```css
Background: #27272a (charcoal)
Text Color: #F9FAFB (off-white)
Height: 56px
Border Radius: 12px
Padding: 20px horizontal
Font Size: 18px
Font Weight: 600 (semi-bold)
Shadow: Blue glow (#3b82f6, opacity 0.3, 4px blur)
```

**Hover/Active State**:
```css
Background: #3f3f46 (lighter charcoal)
Shadow Opacity: 0.5 (more prominent glow)
```

#### Secondary Button (Social Login, Alternative Actions)
```css
Background: #FFFFFF (white)
Border: 1px solid #E5E5EA (light gray)
Border Radius: 10px
Padding: 15px
Text Color: #757575 (gray)
Font Size: 16px
Font Weight: 500 (medium)
Shadow: Black (offset 0,2px, opacity 0.1, 4px blur)
```

**With Icon**:
- Icon Size: 24px
- Icon Margin: 16px right spacing

#### Text/Link Button (Forgot Password, Sign Up)
```css
Background: Transparent
Color: #007AFF (primary blue)
Font Size: 16px
Font Weight: 500 (medium)
Height: 32px
No border, no shadow
```

### Input/Form Styles

#### Text Input (Email, Password, General Forms)

**Default State**:
```css
Background: #FFFFFF (white)
Border: 1px solid #E5E5EA (light gray)
Border Radius: 12px
Height: 56px
Padding: 16px horizontal
Font Size: 16px
Text Color: #1C1C1E (dark gray)
Placeholder Color: #8E8E93 (medium gray)
Shadow: Black (opacity 0.05, 2px blur)
```

**Focused State**:
```css
Border Color: #007AFF (primary blue)
Shadow: Black (opacity 0.1, 4px blur - more prominent)
```

**With Icon**:
- Icon Color: `#8E8E93` (medium gray)
- Icon Size: 20px
- Icon Position: 16px from left edge

### Toggle/Switch Styles

**Remember Me / Settings Toggles**:
```css
Track Color (off): #E5E5EA (light gray)
Track Color (on): #007AFF (primary blue)
Thumb: White with subtle shadow
```

### Divider/Separator Styles

**Text Dividers** ("OR CONTINUE WITH"):
```css
Text Color: #8E8E93 (medium gray)
Font Weight: 500 (medium)
Text Transform: Uppercase
Font Size: 12px
Line Color: #E5E5EA (light gray)
```

### Shadow System

**Subtle Shadows** (inputs, cards):
```css
Shadow: rgba(0, 0, 0, 0.05)
Offset: (0, 2px)
Blur Radius: 2px
```

**Medium Shadows** (buttons, elevated elements):
```css
Shadow: rgba(0, 0, 0, 0.1)
Offset: (0, 2px)
Blur Radius: 4px
```

**Prominent Shadows** (primary button glow):
```css
Shadow: rgba(59, 130, 246, 0.3)
Offset: (0, 0)
Blur Radius: 4px
```

### Border Radius Scale

- Small: `8px` (tags, small buttons)
- Medium: `10px` (secondary buttons)
- Large: `12px` (primary buttons, inputs)
- Extra Large: `16px` (cards, modals)

### Spacing System

**Padding/Margin Scale**:
- xs: `4px`
- sm: `8px`
- md: `12px`
- lg: `16px`
- xl: `20px`
- 2xl: `24px`
- 3xl: `32px`

**Component Spacing**:
- Input Height: `56px`
- Button Height (Primary): `56px`
- Button Height (Secondary): `48px`
- Form Gap: `16px` between inputs
- Section Gap: `24px` between sections

### Logo Specifications

**Logo Dimensions**:
- Mobile: 200px × 200px
- Desktop: Scale proportionally based on viewport

**Logo Colors**:
- Wordmark: `#1C1C1E` (dark gray/black)
- Camera Icon: `#5B9FD5` or `#007AFF` (blue accent)

### Responsive Breakpoints

**Mobile First Approach**:
- Mobile: `< 768px` (default)
- Tablet: `≥ 768px`
- Desktop: `≥ 1024px`
- Large Desktop: `≥ 1440px`

### Animation Guidelines

**Timing Functions**:
- Standard Ease: `cubic-bezier(0.4, 0.0, 0.2, 1)`
- Button Press: `150ms`
- Input Focus: `200ms`
- Page Transition: `300ms`
- Video Fade: `500ms`

**Hover Effects**:
- Buttons: Scale to `1.02` on hover
- Links: Opacity to `0.8` on hover
- Cards: Translate Y `-2px` with shadow increase

### Accessibility

**Minimum Contrast Ratios**:
- Normal Text: 4.5:1
- Large Text (18px+): 3:1
- Interactive Elements: Clear focus states with `#007AFF` outline

**Touch Targets**:
- Minimum: `44px × 44px` (iOS guideline)
- Recommended: `48px × 48px` for primary actions

### Usage Notes for Website Implementation

1. **Adapt, don't copy**: The mobile app uses native iOS components; translate the visual design to web-appropriate components
2. **Consistency is key**: Use the same colors, typography, and spacing for brand recognition
3. **Tailwind mapping**:
   - Primary Blue: Add as custom color in tailwind.config.ts
   - Charcoal Button: Use `bg-[#27272a]`
   - Shadows: Define as custom utilities
4. **Button hierarchy**: Primary (charcoal) > Secondary (white outline) > Text (blue link)
5. **Form validation**: Use Primary Blue for focus, red (#DC2626) for errors

---

### Responsive Design
- **Mobile-first approach** (60%+ traffic expected on mobile)
- Video/logo: 70vh height on mobile, large fixed widths on desktop
- Buttons: Full width on mobile, flex-row on desktop

## Current Feature Status

**Implemented**:
- [x] Landing page with video animation
- [x] Seamless video-to-image transition (no white flash)
- [x] Responsive sizing (mobile full-width, desktop large)
- [x] CTA buttons with hover effects
- [x] Favicon

**Pending**:
- [ ] Email capture forms with SendGrid integration
- [ ] Button click handlers (waitlist/investor routing)
- [ ] Additional pages (How It Works, Features, Pricing, About, FAQ)
- [ ] Analytics integration (Google Analytics, Meta Pixel)
- [ ] Domain connection and production deployment

## Important Notes for Claude

1. **Read context files first**: README.md has product positioning, CONTEXT.md has detailed market/strategy
2. **This is NOT the mobile app**: Don't confuse with the React Native app being built by Shine
3. **Marketing focus**: Primary goals are email capture and education, not functionality
4. **Brand consistency**: Follow voice/tone guidelines in README.md
5. **Mobile-first**: Always test responsive behavior, majority of traffic will be mobile
6. **MCP integrations**: SendGrid and GoDaddy APIs are available via MCP tools

## Key Messaging (for copy)

**Primary Tagline**: "Intelligent fitness tracking powered by AI video analysis"
**Secondary**: "Strava for strength training"
**For Lifters**: "Stop logging. Start training."

See README.md for full messaging guidelines and elevator pitch.
