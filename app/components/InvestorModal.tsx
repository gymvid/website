"use client";

import { useState } from "react";
import { X, ChevronLeft } from "lucide-react";

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INVESTOR_TYPES = [
  {
    id: "vc_fund",
    label: "Venture Capital Fund",
    description: "Institutional investor managing a fund",
  },
  {
    id: "angel",
    label: "Angel Investor",
    description: "Investing personal capital",
  },
  {
    id: "strategic_partner",
    label: "Strategic Partner",
    description: "Ex-fitness tech exec, gym chain, etc.",
  },
  {
    id: "influencer",
    label: "Fitness Influencer",
    description: "Content creator with 100K+ followers",
  },
];

const INVESTMENT_RANGES = [
  "$10K - $25K",
  "$25K - $50K",
  "$50K - $100K",
  "$100K - $250K",
  "$250K+",
  "Advisory without capital",
  "Prefer not to say",
];

export default function InvestorModal({ isOpen, onClose }: InvestorModalProps) {
  const [step, setStep] = useState(1);
  const [investorType, setInvestorType] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [investmentRange, setInvestmentRange] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInitialContinue = () => {
    setStep(2);
  };

  const handleTypeContinue = () => {
    if (investorType) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/investors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          investorType,
          investmentRange: investmentRange || "not specified",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setInvestorType("");
      setInvestmentRange("");

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
        onClose();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reset state when closing
    setStep(1);
    setInvestorType("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setInvestmentRange("");
    setError("");
    setIsSuccess(false);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      />

      {/* Modal - Bottom sheet on mobile, centered on desktop */}
      <div className={`fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-50 transition-all duration-300 ease-out ${
        isOpen ? "translate-y-0 md:translate-y-0 md:opacity-100" : "translate-y-full md:translate-y-0 md:opacity-0 md:pointer-events-none"
      }`}>
        <div className="bg-white rounded-t-xl md:rounded-xl shadow-xl max-w-2xl mx-auto md:w-full md:mx-4">
          {/* Drag Handle - Mobile only */}
          <div className="flex justify-center pt-3 pb-2 md:hidden">
            <div className="w-12 h-1 bg-gray-light rounded-full" />
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-light rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-dark" />
          </button>

          {/* Back Button - Only show on step 2 and 3 */}
          {(step === 2 || step === 3) && !isSuccess && (
            <button
              onClick={handleBack}
              className="absolute top-4 left-4 p-2 hover:bg-gray-light rounded-full transition-colors"
              aria-label="Back"
            >
              <ChevronLeft className="w-5 h-5 text-gray-dark" />
            </button>
          )}

          {/* Content */}
          <div className="px-6 pb-8 pt-6">
            {!isSuccess ? (
              <>
                {step === 1 ? (
                  /* Step 1: Initial Interest */
                  <>
                    <div className="text-center mb-6 pt-3">
                      <h2 className="text-2xl font-bold text-gray-dark mb-4">
                        Invest in the Strava for Strength Training
                      </h2>
                      <div className="text-base text-gray-medium leading-relaxed space-y-3">
                        <p>Strava revolutionized how millions of runners & cyclists track their workouts and connect with like-minded people.</p>

                        <p className="font-semibold">We're building the same type of platform but for gym goers!</p>

                        <p>While runners use GPS tracking & Strava...</p>

                        <p>Lifters use video - but they don't have any technology to leverage the footage!</p>

                        <p>We're not asking people to start filming their workouts - they already are!</p>

                        <p>50+ million Instagram posts tagged with #formcheck proves this behavior already exists at scale.</p>

                        <p>So, we're creating the world's first AI-Powered Video Analysis for strength training!</p>

                        <p>We're going to transform wasted footage into automatic logging, verified PRs, & competitive leaderboards in a native social experience.</p>
                      </div>
                    </div>

                    <button
                      onClick={handleInitialContinue}
                      className="w-full h-12 md:h-14 px-4 bg-charcoal text-white-off font-semibold rounded-lg
                               shadow-glow hover:bg-charcoal-active hover:shadow-glow-active
                               transition-all duration-150 hover:scale-[1.02] active:scale-95
                               text-lg"
                    >
                      Send Me the Pitch Deck
                    </button>
                  </>
                ) : step === 2 ? (
                  /* Step 2: Investor Type Selection */
                  <>
                    <div className="text-center mb-6 pt-3">
                      <h2 className="text-2xl font-bold text-gray-dark mb-2">
                        Thank you for your interest!
                      </h2>
                      <p className="text-base text-gray-medium">
                        What best describes you?
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {INVESTOR_TYPES.map((type) => (
                        <label
                          key={type.id}
                          className={`flex items-center gap-3 px-4 py-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                            investorType === type.id
                              ? "border-primary bg-primary/5"
                              : "border-gray-light hover:border-gray-medium"
                          }`}
                        >
                          <input
                            type="radio"
                            name="investorType"
                            value={type.id}
                            checked={investorType === type.id}
                            onChange={(e) => setInvestorType(e.target.value)}
                            className="w-5 h-5"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-gray-dark mb-1">
                              {type.label}
                            </div>
                            <div className="text-sm text-gray-medium">
                              {type.description}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>

                    <button
                      onClick={handleTypeContinue}
                      disabled={!investorType}
                      className="w-full h-12 md:h-14 px-4 bg-charcoal text-white-off font-semibold rounded-lg
                               shadow-glow hover:bg-charcoal-active hover:shadow-glow-active
                               transition-all duration-150 hover:scale-[1.02] active:scale-95
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                               text-lg"
                    >
                      Continue
                    </button>
                  </>
                ) : (
                  /* Step 3: Contact Details */
                  <>
                    <div className="text-center mb-6 pt-3">
                      <h2 className="text-2xl font-bold text-gray-dark mb-2">
                        Where can we reach you?
                      </h2>
                      <p className="text-base text-gray-medium">
                        We'll send you the pitch deck & let you know when our seed round goes live for investment!
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 mb-3">
                      {/* First Name Input */}
                      <div>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First name"
                          required
                          className="w-full h-14 px-4 bg-white border border-gray-light rounded-lg
                                   text-base text-gray-dark placeholder:text-gray-medium
                                   shadow-subtle focus:border-primary focus:shadow-medium focus:outline-none
                                   transition-all duration-200"
                        />
                      </div>

                      {/* Last Name Input */}
                      <div>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last name"
                          required
                          className="w-full h-14 px-4 bg-white border border-gray-light rounded-lg
                                   text-base text-gray-dark placeholder:text-gray-medium
                                   shadow-subtle focus:border-primary focus:shadow-medium focus:outline-none
                                   transition-all duration-200"
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email address"
                          required
                          className="w-full h-14 px-4 bg-white border border-gray-light rounded-lg
                                   text-base text-gray-dark placeholder:text-gray-medium
                                   shadow-subtle focus:border-primary focus:shadow-medium focus:outline-none
                                   transition-all duration-200"
                        />
                      </div>

                      {/* Investment Range Dropdown */}
                      <div>
                        <select
                          value={investmentRange}
                          onChange={(e) => setInvestmentRange(e.target.value)}
                          className="w-full h-14 px-4 bg-white border border-gray-light rounded-lg
                                   text-base text-gray-dark
                                   shadow-subtle focus:border-primary focus:shadow-medium focus:outline-none
                                   transition-all duration-200"
                        >
                          <option value="">Investment range (optional)</option>
                          {INVESTMENT_RANGES.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="text-sm text-red-600 text-center">
                          {error}
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 md:h-14 px-4 bg-charcoal text-white-off font-semibold rounded-lg
                                 shadow-glow hover:bg-charcoal-active hover:shadow-glow-active
                                 transition-all duration-150 hover:scale-[1.02] active:scale-95
                                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                                 text-lg"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </form>

                    {/* Privacy Policy Link */}
                    <div className="text-center">
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-medium hover:text-primary-glow underline transition-colors duration-150"
                      >
                        Privacy Policy
                      </a>
                    </div>
                  </>
                )}
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-2">
                  Thank you for your interest!
                </h3>
                <p className="text-base text-gray-medium">
                  We'll be in touch soon with investment details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
