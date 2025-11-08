import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "GymVid - AI-Powered Workout Tracking | Strava for Strength Training",
  description: "Stop logging. Start training. GymVid uses AI to automatically log your workouts from video, analyze your form, and verify your PRs on competitive leaderboards. The first video-powered fitness tracking app built for strength trainers.",
  keywords: [
    "AI workout tracking",
    "automatic workout logging",
    "form analysis",
    "strength training app",
    "gym tracking",
    "fitness AI",
    "video workout analysis",
    "powerlifting tracker",
    "bodybuilding app",
    "PR verification",
    "competitive leaderboards",
    "Strava for lifting",
    "AI form check",
  ],
  authors: [{ name: "GymVid", url: "https://www.gymvid.com" }],
  creator: "GymVid",
  publisher: "GymVid",
  metadataBase: new URL("https://www.gymvid.com"),
  alternates: {
    canonical: "https://www.gymvid.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gymvid.com",
    title: "GymVid - AI-Powered Workout Tracking | Strava for Strength Training",
    description: "Transform your gym videos into automatic workout logs with AI-powered form analysis and verified competitive leaderboards. Stop logging. Start training.",
    siteName: "GymVid",
    images: [
      {
        url: "/images/logo/gymvid-favicon.jpg",
        width: 1200,
        height: 1200,
        alt: "GymVid - AI-Powered Workout Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GymVid - AI-Powered Workout Tracking | Strava for Strength Training",
    description: "Transform your gym videos into automatic workout logs with AI-powered form analysis. Stop logging. Start training.",
    images: ["/images/logo/gymvid-favicon.jpg"],
    creator: "@gymvidapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo/gymvid-favicon.jpg",
    apple: "/images/logo/gymvid-favicon.jpg",
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add these when you set up search console
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GymVid",
    applicationCategory: "HealthApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    operatingSystem: "iOS, Android",
    description: "AI-powered workout tracking app that automatically logs your workouts from video, analyzes your form, and verifies your PRs on competitive leaderboards.",
    url: "https://www.gymvid.com",
    logo: "https://www.gymvid.com/images/logo/gymvid-transparent-logo.png",
    image: "https://www.gymvid.com/images/logo/gymvid-favicon.jpg",
    creator: {
      "@type": "Organization",
      name: "GymVid",
      url: "https://www.gymvid.com",
      logo: "https://www.gymvid.com/images/logo/gymvid-transparent-logo.png",
      sameAs: [
        "https://www.instagram.com/stephaniesanzo",
        "https://www.youtube.com/@stephaniesanzo"
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "1",
      bestRating: "5",
      worstRating: "1"
    },
    featureList: [
      "AI-powered automatic workout logging",
      "Real-time form analysis",
      "Video-verified PR tracking",
      "Competitive leaderboards with DOTS scoring",
      "Social fitness feed",
      "AI coaching feedback"
    ]
  };

  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
