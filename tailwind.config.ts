import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // GymVid Brand Colors (from Design System)
        primary: {
          DEFAULT: "#007AFF", // iOS blue - links, accents
          glow: "#3b82f6", // Blue glow for shadows
        },
        charcoal: {
          DEFAULT: "#27272a", // Primary button background
          active: "#3f3f46", // Primary button pressed/hover
        },
        gray: {
          dark: "#1C1C1E", // Primary text
          medium: "#8E8E93", // Placeholders, helper text
          light: "#E5E5EA", // Borders, dividers
          social: "#757575", // Social button text
        },
        white: {
          DEFAULT: "#FFFFFF", // Backgrounds
          off: "#F9FAFB", // Button text for contrast
        },
        logo: {
          accent: "#5B9FD5", // Camera icon blue
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        // GymVid Shadow System
        subtle: "0 2px 2px rgba(0, 0, 0, 0.05)", // Inputs, cards
        medium: "0 2px 4px rgba(0, 0, 0, 0.1)", // Buttons, elevated elements
        glow: "0 0 4px rgba(59, 130, 246, 0.3)", // Primary button glow
        "glow-active": "0 0 4px rgba(59, 130, 246, 0.5)", // Primary button active
      },
      borderRadius: {
        sm: "8px", // Tags, small buttons
        DEFAULT: "10px", // Secondary buttons
        lg: "12px", // Primary buttons, inputs
        xl: "16px", // Cards, modals
      },
    },
  },
  plugins: [],
} satisfies Config;
