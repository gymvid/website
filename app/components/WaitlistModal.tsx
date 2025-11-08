"use client";

import { useState } from "react";
import { X, ChevronLeft } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INTEREST_OPTIONS = [
  {
    id: "ai_auto_logging",
    label: "Auto Log Workouts with Video",
    description: "Film your set, AI logs everything instantly - reps, weight, RPE, form",
  },
  {
    id: "ai_form_coaching",
    label: "AI Form Analysis & Feedback",
    description: "Get instant technique feedback on every lift to improve form and prevent injuries",
  },
  {
    id: "train_with_friends",
    label: "Compete Against Friends",
    description: "Motivate each other by creating groups, sharing PR's, and climbing the leaderboard",
  },
  {
    id: "build_fitness_brand",
    label: "Build Your Fitness Brand",
    description: "Grow a real following of lifters who care about your training, not just your abs",
  },
];

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInitialContinue = () => {
    setStep(2);
  };

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleInterestContinue = () => {
    if (selectedInterests.length > 0) {
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
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, email, interests: selectedInterests }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
      // Reset form
      setFirstName("");
      setEmail("");
      setSelectedInterests([]);

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
    setSelectedInterests([]);
    setFirstName("");
    setEmail("");
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
                  /* Step 1: Initial Hook - Updated text */
                  <>
                    <div className="text-center mb-6 pt-3">
                      <h2 className="text-2xl font-bold text-gray-dark mb-4">
                        Tired of Wasting Hours Logging All Your Workouts?
                      </h2>
                      <div className="text-base text-gray-medium leading-relaxed space-y-3">
                        <p>You already film your lifts to check your form.</p>

                        <p>But then you waste 5+ minutes manually entering every set into your tracking app...</p>

                        <p className="font-semibold text-gray-dark">What if your workout logged itself?</p>

                        <p>THIS question is what led us to build GymVid!</p>

                        <p className="text-primary">Imagine if AI could watch your vids & track:</p>
                        <ul className="text-center space-y-2">
                          <li className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Exercise, sets, reps, weight</span>
                          </li>
                          <li className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Form quality with coaching tips</span>
                          </li>
                          <li className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>RPE, RIR, and time under tension</span>
                          </li>
                        </ul>

                        <p><span className="font-semibold">Plus:</span> You'll be able to share your vids, compete against friends & build a following!</p>

                        <p className="font-semibold text-gray-dark">Join Now for early access & VIP pricing!</p>
                      </div>
                    </div>

                    <button
                      onClick={handleInitialContinue}
                      className="w-full h-12 md:h-14 px-4 bg-charcoal text-white-off font-semibold rounded-lg
                               shadow-glow hover:bg-charcoal-active hover:shadow-glow-active
                               transition-all duration-150 hover:scale-[1.02] active:scale-95
                               text-lg"
                    >
                      Get Early Access
                    </button>
                  </>
                ) : step === 2 ? (
                  /* Step 2: Interest Selection */
                  <>
                    <div className="text-center mb-3 pt-3">
                      <h2 className="text-2xl font-bold text-gray-dark mb-0">
                        Which features excite you most about GymVid?
                      </h2>
                    </div>

                    <div className="space-y-3 mb-6">
                      {INTEREST_OPTIONS.map((interest) => (
                        <label
                          key={interest.id}
                          className={`flex items-start gap-3 px-4 py-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedInterests.includes(interest.id)
                              ? "border-primary bg-primary/5"
                              : "border-gray-light hover:border-gray-medium"
                          }`}
                        >
                          <div className="flex-1">
                            <div className="font-medium text-gray-dark mb-1">
                              {interest.label}
                            </div>
                            <div className="text-sm text-gray-medium">
                              {interest.description}
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            checked={selectedInterests.includes(interest.id)}
                            onChange={() => handleInterestToggle(interest.id)}
                            className="mt-1 w-5 h-5 rounded border-2 border-gray-light text-primary-glow focus:ring-primary-glow focus:ring-offset-0"
                          />
                        </label>
                      ))}
                    </div>

                    <button
                      onClick={handleInterestContinue}
                      disabled={selectedInterests.length === 0}
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
                        You're Almost In!
                      </h2>
                      <p className="text-base text-gray-medium">
                        Secure your founding member spot to get early access & VIP pricing locked in for life.
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
                        {isSubmitting ? "Securing..." : "Secure My Spot"}
                      </button>
                    </form>

                    {/* Reassurance Text */}
                    <div className="text-center mb-3">
                      <p className="text-xs text-gray-medium">
                        We'll send you beta access when it's ready.
                      </p>
                      <p className="text-xs text-gray-medium">
                        No spam, unsubscribe anytime.
                      </p>
                    </div>

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
                  You're in!
                </h3>
                <p className="text-base text-gray-medium">
                  Check your email to confirm and unlock your VIP benefits.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
