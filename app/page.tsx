"use client";

import { useState, useRef, useEffect } from "react";
import { Video, Dumbbell, Sparkles, Share2 } from "lucide-react";
import WaitlistModal from "./components/WaitlistModal";
import InvestorModal from "./components/InvestorModal";

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showTagline, setShowTagline] = useState([false, false, false, false]);
  const [showSubheading, setShowSubheading] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showInvestorModal, setShowInvestorModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }

    // Start animations 800ms earlier (before video ends)
    // Video is 1480ms, so start at 680ms (1480ms - 800ms)
    setTimeout(() => setShowTagline([true, false, false, false]), 680);
    setTimeout(() => setShowTagline([true, true, false, false]), 830);
    setTimeout(() => setShowTagline([true, true, true, false]), 980);
    setTimeout(() => setShowTagline([true, true, true, true]), 1130);
    // Show subheading right after tagline completes
    setTimeout(() => {
      setShowSubheading(true);
    }, 1280);
    // Show buttons after subheading
    setTimeout(() => {
      setShowButtons(true);
    }, 1580);
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Landing Page */}
      <section className="snap-section min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-2xl">
          {/* Video and Logo Container */}
          <div className="relative w-full aspect-video md:h-[25vh] md:w-[50vw] flex items-center justify-center overflow-hidden">
            {/* Background Image (shows after video ends) */}
            <img
              src="/images/logo/annimation/GymVidWelcomeAnimation-desktop.jpg"
              alt="GymVid Logo"
              className="absolute inset-0 w-full h-full object-contain md:object-cover object-center md:object-top"
            />

            {/* Video Animation */}
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-contain md:object-cover object-center md:object-top z-10 transition-opacity duration-500 ${
                videoEnded ? "opacity-0" : "opacity-100"
              }`}
              muted
              playsInline
              onEnded={handleVideoEnd}
            >
              <source
                src="/images/logo/annimation/GymVidWelcomeAnimation-desktop.mp4"
                type="video/mp4"
              />
            </video>

            {/* Tagline - Overlaid on mobile, positioned below on desktop via parent flex */}
            <p className="absolute bottom-0 left-0 right-0 text-center text-gray-dark font-medium text-[19px] px-4 pb-2 z-20 md:hidden flex items-center justify-center gap-3 flex-wrap">
              <span className={`flex items-center gap-1.5 transition-all duration-300 ${
                showTagline[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <Video className="text-primary-glow w-[19px] h-[19px]" />
                Film
              </span>
              <span className={`flex items-center gap-1.5 transition-all duration-300 ${
                showTagline[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <Dumbbell className="text-primary-glow w-[19px] h-[19px]" />
                Lift
              </span>
              <span className={`flex items-center gap-1.5 transition-all duration-300 ${
                showTagline[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <Sparkles className="text-primary-glow w-[19px] h-[19px]" />
                Analyze
              </span>
              <span className={`flex items-center gap-1.5 transition-all duration-300 ${
                showTagline[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <Share2 className="text-primary-glow w-[19px] h-[19px]" />
                Share
              </span>
            </p>
          </div>

          {/* Sub-heading for Mobile - Below tagline */}
          <p className={`md:hidden text-center text-gray-medium font-normal text-[19px] -mt-4 transition-all duration-500 ${
            showSubheading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Film your workout. AI does the rest.
          </p>

          {/* Tagline for Desktop - Below video */}
          <div className="hidden md:flex flex-col items-center gap-8 mb-16">
            <p className={`text-center text-gray-dark font-medium text-2xl mt-0 transition-all duration-500 ${
              showSubheading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Film your lift <span className="text-primary-glow">•</span> Analyze your form <span className="text-primary-glow">•</span> Share your progress
            </p>
            <p className={`text-center text-gray-medium font-normal text-2xl transition-all duration-500 ${
              showSubheading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Film your workout. AI does the rest.
            </p>
          </div>

          {/* Positioning Statement - Mobile */}
          <p className={`md:hidden text-center text-primary font-semibold text-lg -mt-2 mb-4 transition-all duration-500 ${
            showSubheading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Strava for strength training. Finally.
          </p>

          {/* Positioning Statement - Desktop */}
          <p className={`hidden md:block text-center text-primary font-semibold text-xl -mt-12 mb-8 transition-all duration-500 ${
            showSubheading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Strava for strength training. Finally.
          </p>

          {/* Buttons Container */}
          <div
            className={`flex flex-col sm:flex-row gap-4 w-full transition-all duration-700 ${
              showButtons
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Register for Early Access Button - Flat Black */}
            <button
              onClick={() => setShowWaitlistModal(true)}
              className="w-full sm:flex-1 min-h-[55px] px-4 bg-[#000000] text-white-off font-semibold rounded-[12px]
                       hover:bg-gray-dark
                       transition-all duration-[150ms] hover:scale-[1.02] active:scale-95
                       text-lg"
            >
              Register for Early Access
            </button>

            {/* Become an Investor Button - Secondary Style (Design System) */}
            <button
              onClick={() => setShowInvestorModal(true)}
              className="w-full sm:flex-1 min-h-[55px] px-4 bg-white text-gray-social font-medium rounded-[10px]
                       border border-gray-light shadow-medium hover:border-gray-medium
                       transition-all duration-[150ms] hover:scale-[1.02] active:scale-95
                       text-base"
            >
              Become an Investor
            </button>
          </div>

          {/* App Store Coming Soon Badges - Mobile Only */}
          <div className={`flex md:hidden flex-row items-center justify-center gap-4 mt-6 transition-all duration-700 ${
            showButtons
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <button
              onClick={() => setShowWaitlistModal(true)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/logo/coming-soon-app.png"
                alt="Coming Soon on App Store"
                className="h-12 object-contain"
              />
            </button>
            <button
              onClick={() => setShowWaitlistModal(true)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/logo/coming-soon-play.png"
                alt="Coming Soon on Google Play"
                className="h-12 object-contain"
              />
            </button>
          </div>

        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
      />

      {/* Investor Modal */}
      <InvestorModal
        isOpen={showInvestorModal}
        onClose={() => setShowInvestorModal(false)}
      />
    </div>
  );
}
