"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Instagram,
  Send,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import { track } from "@vercel/analytics/react";
import { AnimatedSection } from "../components/AnimatedSection";

const sessionExpectations = [
  {
    icon: Target,
    title: "Business Audit",
    description:
      "We'll review your current marketing efforts and identify what's working and what's not.",
  },
  {
    icon: Lightbulb,
    title: "Growth Diagnosis",
    description:
      "Pinpoint the exact bottlenecks preventing your business from scaling predictably.",
  },
  {
    icon: BarChart3,
    title: "Strategy Blueprint",
    description:
      "Walk away with a clear, actionable plan  even if you don't work with us.",
  },
];

const growthChallenges = [
  "I'm spending on marketing but not seeing ROI",
  "My brand doesn't reflect the value we deliver",
  "I need a clear growth strategy",
  "I want to build marketing systems that scale",
  "I'm not sure what's holding my business back",
  "Other",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    businessName: "",
    email: "",
    businessDescription: "",
    growthChallenge: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formStarted, setFormStarted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFocus = () => {
    if (!formStarted) {
      track("form_started");
      setFormStarted(true);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.fullName.trim())
      newErrors.fullName = "Full name is required";
    if (!formState.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.businessDescription.trim())
      newErrors.businessDescription = "Please describe your business";
    if (!formState.growthChallenge)
      newErrors.growthChallenge = "Please select a challenge";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      track("form_abandonment");
      return;
    }

    const mailtoLink = `mailto:benel.hub@gmail.com?subject=Strategy Session Request — ${encodeURIComponent(formState.businessName)}&body=${encodeURIComponent(
      `Name: ${formState.fullName}\nBusiness: ${formState.businessName}\nEmail: ${formState.email}\n\nBusiness Description:\n${formState.businessDescription}\n\nGrowth Challenge: ${formState.growthChallenge}`,
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    track("form_completion");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Book a Session
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight leading-[1.1] text-navy">
              This session exists for one reason:
              <br className="hidden sm:block" />
              to find exactly what&apos;s{" "}
              <span className="gradient-text">limiting your growth</span> and
              show you the way through it.
            </h1>
            <p className="mt-6 text-navy-300 text-xl max-w-2xl leading-relaxed">
              Book a free 60-minute strategy session. No fluff, no obligation
              just a clear-eyed look at what&apos;s holding your business back
              and what to do about it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===================== EXPECTATIONS ===================== */}
      <section className="relative py-20 overflow-hidden bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-navy">
              What to expect from your{" "}
              <span className="gradient-text">60-minute session</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {sessionExpectations.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-card h-full">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mx-auto mb-5">
                    <item.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-navy-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BOOKING FORM + SIDEBAR ===================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* Booking Form */}
            <AnimatedSection>
              <div className="glass gradient-border rounded-2xl p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-navy">
                      Request Sent!
                    </h3>
                    <p className="mt-3 text-navy-300 max-w-md mx-auto">
                      Thank you for reaching out. We&apos;ll review your
                      information and get back to you within 24 hours to
                      schedule your strategy session.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          fullName: "",
                          businessName: "",
                          email: "",
                          businessDescription: "",
                          growthChallenge: "",
                        });
                      }}
                      className="mt-8 btn-outline text-sm"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold font-display text-navy">
                        Book Your Strategy Session
                      </h2>
                      <p className="mt-2 text-navy-300 text-sm">
                        Tell us about your business and we&apos;ll come
                        prepared.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formState.fullName}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          placeholder="Your full name"
                          className={`input-field ${errors.fullName ? "!border-red-400" : ""}`}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="businessName"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Business Name *
                        </label>
                        <input
                          id="businessName"
                          name="businessName"
                          type="text"
                          value={formState.businessName}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          placeholder="Your business name"
                          className={`input-field ${errors.businessName ? "!border-red-400" : ""}`}
                        />
                        {errors.businessName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.businessName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        placeholder="you@business.com"
                        className={`input-field ${errors.email ? "!border-red-400" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="businessDescription"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Tell us about your business *
                      </label>
                      <textarea
                        id="businessDescription"
                        name="businessDescription"
                        rows={4}
                        value={formState.businessDescription}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        placeholder="What does your business do? Who do you serve? What stage are you at?"
                        className={`input-field resize-none ${errors.businessDescription ? "!border-red-400" : ""}`}
                      />
                      {errors.businessDescription && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.businessDescription}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="growthChallenge"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Primary Growth Challenge *
                      </label>
                      <select
                        id="growthChallenge"
                        name="growthChallenge"
                        value={formState.growthChallenge}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        className={`input-field ${errors.growthChallenge ? "!border-red-400" : ""}`}
                      >
                        <option value="" disabled>
                          Select your biggest challenge
                        </option>
                        {growthChallenges.map((challenge) => (
                          <option key={challenge} value={challenge}>
                            {challenge}
                          </option>
                        ))}
                      </select>
                      {errors.growthChallenge && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.growthChallenge}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 text-base"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Send size={18} />
                        Book My Strategy Session
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                {/* Direct Contact */}
                <div className="glass rounded-2xl p-7">
                  <h3 className="text-lg font-bold font-display text-navy mb-5">
                    Direct Contact
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="mailto:benel.hub@gmail.com"
                        onClick={() =>
                          track("social_click", { platform: "email" })
                        }
                        className="flex items-start gap-3 text-navy-300 hover:text-navy transition-colors group"
                      >
                        <Mail
                          size={20}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="font-medium text-navy text-sm">Email</p>
                          <p className="text-sm">benel.hub@gmail.com</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+2348000000000"
                        onClick={() =>
                          track("social_click", { platform: "phone" })
                        }
                        className="flex items-start gap-3 text-navy-300 hover:text-navy transition-colors group"
                      >
                        <Phone
                          size={20}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="font-medium text-navy text-sm">Phone</p>
                          <p className="text-sm">+234 800 000 0000</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="glass rounded-2xl p-7">
                  <h3 className="text-lg font-bold font-display text-navy mb-5">
                    Follow Us
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.instagram.com/benel.global/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          track("social_click", { platform: "instagram" })
                        }
                        className="flex items-center gap-3 p-3 rounded-xl bg-navy/3 hover:bg-navy/5 transition-colors text-navy-400 hover:text-navy text-sm font-medium"
                      >
                        <Instagram size={18} className="text-gold" />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@benel.global"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          track("social_click", { platform: "tiktok" })
                        }
                        className="flex items-center gap-3 p-3 rounded-xl bg-navy/3 hover:bg-navy/5 transition-colors text-navy-400 hover:text-navy text-sm font-medium"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-[18px] h-[18px] text-gold"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.91a8.2 8.2 0 004.76 1.52V7a4.84 4.84 0 01-1-.31z" />
                        </svg>
                        TikTok
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/benelglobal"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          track("social_click", { platform: "linkedin" })
                        }
                        className="flex items-center gap-3 p-3 rounded-xl bg-navy/3 hover:bg-navy/5 transition-colors text-navy-400 hover:text-navy text-sm font-medium"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-[18px] h-[18px] text-gold"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Response Time */}
                <div className="glass rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={18} className="text-gold" />
                    <h3 className="text-sm font-bold font-display text-navy">
                      Quick Response
                    </h3>
                  </div>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    We respond within 24 hours. Strategy sessions are typically
                    scheduled within 2–3 business days of your request.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING QUOTE ===================== */}
      <section className="relative py-24 overflow-hidden bg-navy">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-white leading-relaxed italic">
                &ldquo;When your business is clear, Your marketing works, Your
                sales flow, and your growth makes sense&rdquo;
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Today
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
