"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Target, BarChart3, Rocket, Crosshair, TrendingUp, Layers } from "lucide-react";
import { AnimatedSection } from "./components/AnimatedSection";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-left md:text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 text-sm text-navy font-medium mb-8">
              <span>The Business Catalyst ⚡</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display tracking-tight leading-[1.05] text-navy">
              Your business isn&apos;t broken.<br />
              <span className="text-gold">Your growth system is.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-navy-300 max-w-3xl md:mx-auto leading-relaxed">
              We work with businesses to identify what&apos;s actually limiting their growth — and build the strategy, structure, and systems to fix it. No guesswork. No random tactics. Just clear, focused growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 md:justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base !px-6 !py-3 sm:!px-8 sm:!py-4">
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Strategy Session <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-b border-navy/5 bg-navy/2 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-sm font-semibold tracking-widest text-navy/40 uppercase">
          Consulting · Strategy · Execution
        </div>
      </div>

      {/* SECTION 1 — The Real Problem */}
      <section className="relative py-28 overflow-hidden bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-navy leading-[1.1]">
                Most businesses are working hard in the <span className="text-gold">wrong direction.</span>
              </h2>
              <div className="mt-10 glass-dark rounded-2xl p-8 bg-navy text-white">
                <p className="text-lg leading-relaxed text-navy-100">
                  <strong className="text-gold">The issue is rarely effort. It&apos;s almost always clarity.</strong> When your positioning is unclear, everything else suffers — messaging, marketing, sales. All of it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <ul className="space-y-6">
                {[
                  "You're creating content — but it's not attracting the right people",
                  "You're investing in marketing — but the results aren't consistent",
                  "You know what you offer — but your audience doesn't fully understand it",
                  "You've tried different things — but nothing seems to stick",
                  "Growth is happening — but it feels scattered, not strategic"
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <p className="text-lg text-navy-300 leading-relaxed">{problem}</p>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 — What We Do */}
      <section className="relative py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-navy">
              We find what&apos;s broken. <span className="text-gold">Then we fix it.</span>
            </h2>
            <p className="mt-8 text-xl text-navy-300 leading-relaxed">
              BenEl is a growth consultancy. We look at your business as a whole — your brand, your messaging, your marketing, your sales process — and identify exactly what&apos;s holding you back. Then we build the plan and systems to move you forward.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — Services */}
      <section className="relative py-28 bg-navy text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="glass-dark border-gold/20 p-10 h-full rounded-2xl flex flex-col">
                <Target className="text-gold mb-6 w-10 h-10" />
                <h3 className="text-2xl font-bold font-display mb-4">Marketing Consulting</h3>
                <p className="text-navy-100 leading-relaxed">
                  We sit with your business, diagnose the real growth blockers, and give you a clear, structured plan. No generic advice — everything is specific to where you are and where you need to go.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-dark border-gold/20 p-10 h-full rounded-2xl flex flex-col">
                <Crosshair className="text-gold mb-6 w-10 h-10" />
                <h3 className="text-2xl font-bold font-display mb-4">Brand & Positioning Strategy</h3>
                <p className="text-navy-100 leading-relaxed">
                  How your business is perceived determines how it grows. We sharpen your positioning, clarify your message, and make sure your brand communicates value — not just aesthetics.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="glass-dark border-gold/20 p-10 h-full rounded-2xl flex flex-col">
                <Layers className="text-gold mb-6 w-10 h-10" />
                <h3 className="text-2xl font-bold font-display mb-4">Marketing Strategy & Systems</h3>
                <p className="text-navy-100 leading-relaxed">
                  A strategy isn&apos;t a plan on paper. It&apos;s a system that runs. We build structured marketing systems — content, channels, funnels — that work together and drive consistent results.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="glass-dark border-gold/20 p-10 h-full rounded-2xl flex flex-col">
                <Rocket className="text-gold mb-6 w-10 h-10" />
                <h3 className="text-2xl font-bold font-display mb-4">Digital Marketing & Implementation</h3>
                <p className="text-navy-100 leading-relaxed">
                  For businesses that want it done for them. Social media, paid ads, SEO, email, content creation — we handle the execution end-to-end, aligned with your strategy.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The BenEl Difference */}
      <section className="relative py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-navy">
              We don&apos;t just market your business. <br /><span className="text-gold">We understand it first.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Diagnosis Before Direction",
                copy: "We never recommend before we understand. Every engagement starts with a deep look at your business — what's working, what isn't, and why."
              },
              {
                title: "Systems, Not Guesswork",
                copy: "Random tactics produce random results. We build structured systems where every action — content, messaging, marketing — connects to growth."
              },
              {
                title: "Revenue-Focused Always",
                copy: "Visibility means nothing without conversion. Every strategy we build is tied to one thing — moving your business forward in revenue and growth."
              }
            ].map((col, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass p-8 rounded-2xl h-full border-navy/5">
                  <div className="text-gold font-display font-bold text-5xl mb-6 opacity-120">0{i + 1}</div>
                  <h3 className="text-xl font-bold font-display text-navy mb-4">{col.title}</h3>
                  <p className="text-navy-300 leading-relaxed">{col.copy}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Who This Is For */}
      <section className="relative py-28 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-navy mb-6">
                Built for businesses ready to <span className="text-gold">grow seriously.</span>
              </h2>
              <p className="text-xl text-navy-300">
                It doesn&apos;t matter where you are in the journey. What matters is that you&apos;re ready to move with clarity and intention.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-12">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Founders & Entrepreneurs", "Product-Based Businesses", "Service Businesses",
                  "E-Commerce Brands", "Coaches & Creators", "Growing SMEs",
                  "Retail Brands", "Tech Startups"
                ].map((tag, i) => (
                  <span key={i} className="px-5 py-2.5 rounded-full bg-white border border-navy/10 text-sm font-medium text-navy-400 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-16">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-navy/5 max-w-3xl mx-auto relative">
                <span className="absolute -top-6 -left-2 text-6xl text-gold/20 font-serif">&quot;</span>
                <p className="text-2xl font-display font-medium text-navy italic leading-snug relative z-10">
                  If your growth feels inconsistent, unclear, or slower than it should be — that&apos;s the gap we close.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="mt-12">
              <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
                Let&apos;s Talk About Your Business <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Bottom CTA Banner */}
      <section className="relative py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="bg-navy rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-10">
                  Ready to stop guessing and start <br />
                  <span className="text-gold">growing with structure?</span>
                </h2>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base sm:text-lg !px-6 !py-3 sm:!px-10 sm:!py-4">
                  <span className="relative z-10 flex items-center gap-2">
                    Book Your Free Session <ArrowRight size={20} />
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
