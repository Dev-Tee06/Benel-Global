"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  BarChart3,
  Rocket,
  Crosshair,
  TrendingUp,
  Layers,
  Compass,
} from "lucide-react";
import { track } from "@vercel/analytics/react";
import { AnimatedSection } from "./components/AnimatedSection";
import { CinematicBackground } from "./components/CinematicBackground";
import { InteractiveCard } from "./components/InteractiveCard";
import { MagneticButton } from "./components/MagneticButton";
import { DiagonalAccent } from "./components/DiagonalAccent";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-32 overflow-hidden text-navy">
        <CinematicBackground />
        {/* Dramatic Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -right-20 w-[400px] h-[400px] bg-gold/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 25, -30, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 -left-20 w-[350px] h-[350px] bg-royal-blue/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen"
        />
        <div className="container-custom relative z-10 text-left md:text-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 text-sm text-navy font-medium mb-8 backdrop-blur-md">
              <span>The Business Catalyst ⚡</span>
            </div>

            <h1 className="text-[56px] sm:text-[64px] lg:text-[72px] font-[800] leading-none tracking-[-0.06em] font-display text-navy mt-4 max-w-5xl md:mx-auto">
              Your business isn&apos;t broken.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#295DFF] to-[#C8A951]">
                Your growth system is.
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-navy-400 max-w-3xl md:mx-auto leading-relaxed">
              We work with businesses to identify what&apos;s actually limiting
              their growth and build the strategy, structure, and systems to fix
              it. No guesswork. No random tactics. Just clear, focused growth.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 md:justify-center">
              <MagneticButton
                href="/contact"
                onClick={() => track("cta_click", { location: "hero" })}
                className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base !px-6 !py-3 sm:!px-8 sm:!py-4 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Strategy Session{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIVIDER — Animated Marquee */}
      <div className="border-t border-b border-navy/5 bg-white py-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container-custom text-center text-sm font-semibold tracking-widest text-navy/40 uppercase"
        >
          Marketing Consulting · Brand Strategy · Digital Execution
        </motion.div>
      </div>

      {/* SECTION 1 — The Real Problem */}
      <section className="relative py-28 overflow-hidden bg-navy/5">
        <motion.div
          animate={{ x: [0, 30, -15, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-0 w-[300px] h-[300px] bg-red-500/10 blur-[80px] rounded-full pointer-events-none"
        />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-navy leading-[1.1]">
                Most businesses are working hard in the{" "}
                <span className="text-gold">wrong direction.</span>
              </h2>
              <div className="mt-10 service-card text-navy">
                <p className="text-lg leading-relaxed text-navy-400">
                  <strong className="text-gold">
                    The issue is rarely effort. It&apos;s almost always clarity.
                  </strong>{" "}
                  When your positioning is unclear, everything else suffers
                  messaging, marketing, sales. All of it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <ul className="space-y-6">
                {[
                  "You're creating content  but it's not attracting the right people",
                  "You're investing in marketing but the results aren't consistent",
                  "You know what you offer  but your audience doesn't fully understand it",
                  "You've tried different things  but nothing seems to stick",
                  "Growth is happening  but it feels scattered, not strategic",
                ].map((problem, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 * i,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        className="w-2 h-2 rounded-full bg-red-500"
                      />
                    </div>
                    <p className="text-lg text-navy-400 leading-relaxed">
                      {problem}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 — What We Do */}
      <section className="relative py-28 overflow-hidden bg-gold/10">
        <DiagonalAccent color="navy" className="opacity-5" />
        <motion.div
          animate={{ x: [0, -25, 20, 0], y: [0, 20, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/40 blur-[100px] rounded-full pointer-events-none"
        />
        <div className="container-custom text-center">
          <AnimatedSection direction="blur" className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-navy">
              We find what&apos;s broken.{" "}
              <span className="text-gold">Then we fix it.</span>
            </h2>
            <p className="mt-8 text-xl text-navy-400 leading-relaxed">
              BenEl is a growth consultancy. We look at your business as a whole
              your{" "}
              <Link
                href="/about"
                className="text-gold hover:underline font-medium"
              >
                brand strategy
              </Link>
              , your messaging, your marketing, your sales process and identify
              exactly what&apos;s holding you back. Then we build the plan and
              systems to move you forward.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — Services */}
      <section
        id="services"
        className="relative py-28 bg-white text-navy overflow-hidden"
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1} direction="zoom">
              <InteractiveCard>
                <div className="service-card group relative h-full flex flex-col">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-navy group-hover:border-navy transition-all duration-500">
                      <Target className="text-navy group-hover:text-gold w-8 h-8 transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-4 text-navy">
                      Marketing Consulting
                    </h3>
                    <p className="text-navy-300 leading-relaxed text-base">
                      We sit with your business, diagnose the real growth
                      blockers, and give you a clear, structured plan. No
                      generic advice everything is specific to where you are and
                      where you need to go.
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="zoom">
              <InteractiveCard>
                <div className="service-card group relative h-full flex flex-col">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-navy group-hover:border-navy transition-all duration-500">
                      <Crosshair className="text-navy group-hover:text-gold w-8 h-8 transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-4 text-navy">
                      Brand & Positioning Strategy
                    </h3>
                    <p className="text-navy-300 leading-relaxed text-base">
                      How your business is perceived determines how it grows. We
                      sharpen your positioning, clarify your message, and make
                      sure your brand communicates value not just aesthetics.
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="zoom">
              <InteractiveCard>
                <div className="service-card group relative h-full flex flex-col">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-navy group-hover:border-navy transition-all duration-500">
                      <Layers className="text-navy group-hover:text-gold w-8 h-8 transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-4 text-navy">
                      Marketing Strategy & Systems
                    </h3>
                    <p className="text-navy-300 leading-relaxed text-base">
                      A strategy isn&apos;t a plan on paper. It&apos;s a system
                      that runs. We build structured marketing systems content,
                      channels, funnels that work together and drive consistent
                      results.
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="zoom">
              <InteractiveCard>
                <div className="service-card group relative h-full flex flex-col">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-navy group-hover:border-navy transition-all duration-500">
                      <Rocket className="text-navy group-hover:text-gold w-8 h-8 transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-4 text-navy">
                      Digital Marketing & Implementation
                    </h3>
                    <p className="text-navy-300 leading-relaxed text-base">
                      For businesses that want it done for them. Social media,
                      paid ads, SEO, email, content creation we handle the
                      execution end-to-end, aligned with your strategy.
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The BenEl Difference */}
      <section className="relative py-28 overflow-hidden bg-navy/5">
        <motion.div
          animate={{ x: [0, 35, -20, 0], y: [0, -25, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 right-1/4 w-[350px] h-[350px] bg-gold/10 blur-[100px] rounded-full pointer-events-none"
        />
        <div className="container-custom">
          <AnimatedSection
            direction="blur"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-navy">
              We don&apos;t just market your business. <br />
              <span className="text-gold">We understand it first.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Compass,
                title: "Diagnosis Before Direction",
                copy: "We never recommend before we understand. Every engagement starts with a deep look at your business  what's working, what isn't, and why.",
              },
              {
                icon: Layers,
                title: "Built To Compound",
                copy: "Random tactics produce random results. We build structured systems where every action content, messaging, marketing connects to growth.",
              },
              {
                icon: TrendingUp,
                title: "Revenue Is The Only Metric",
                copy: "Visibility means nothing without conversion. Every strategy we build is tied to one thing  moving your business forward in revenue and growth.",
              },
            ].map((col, i) => (
              <AnimatedSection key={i} delay={i * 0.2} direction="scale">
                <InteractiveCard>
                  <div className="service-card p-8 rounded-2xl h-full flex flex-col items-start relative overflow-hidden group">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className="absolute top-8 right-8 text-gold font-display font-bold text-lg tracking-widest pointer-events-none"
                    >
                      0{i + 1}
                    </motion.div>
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-navy group-hover:border-navy transition-all duration-500">
                      <col.icon className="text-navy group-hover:text-gold w-7 h-7 transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-navy mb-4 relative z-10">
                      {col.title}
                    </h3>
                    <p className="text-navy-400 leading-relaxed relative z-10">
                      {col.copy}
                    </p>
                  </div>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Who This Is For */}
      <section className="relative py-28 bg-gold/10 overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-navy mb-6">
                Built for businesses ready to{" "}
                <span className="text-gold">grow seriously.</span>
              </h2>
              <p className="text-xl text-navy-400">
                It doesn&apos;t matter where you are in the journey. What
                matters is that you&apos;re ready to move with clarity and
                intention.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-12">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Founders & Entrepreneurs",
                  "Product-Based Businesses",
                  "Service-Based Businesses",
                  "E-Commerce Brands",
                  "Coaches & Consultants",
                  "Growing SMEs",
                  "Retail & FMCG Brands",
                  "Tech Startups",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 rounded-full bg-white/40 border border-navy/10 text-sm font-medium text-navy shadow-sm backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-16">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-navy/5 max-w-3xl mx-auto relative">
                <span className="absolute -top-6 -left-2 text-6xl text-gold/50 font-serif">
                  &quot;
                </span>
                <p className="text-2xl font-display font-medium text-navy italic leading-snug relative z-10">
                  If your growth feels inconsistent, unclear, or slower than it
                  should be that&apos;s the gap we close.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="mt-12">
              <Link
                href="/contact"
                className="btn-outline border-navy text-navy hover:bg-navy hover:text-white inline-flex items-center gap-2"
              >
                Let&apos;s Talk About Your Business <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Bottom CTA Banner */}
      <section className="relative py-28 overflow-hidden bg-white">
        <DiagonalAccent color="navy" className="opacity-60" />
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -40, 25, 0], y: [0, 20, -35, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy/5 blur-[120px] rounded-full pointer-events-none"
        />
        <div className="container-custom relative z-10">
          <AnimatedSection direction="scale">
            <div className="service-card rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-navy mb-10">
                  Ready to stop guessing and start <br />
                  <span className="text-gold">growing with structure?</span>
                </h2>
                <MagneticButton
                  href="/contact"
                  onClick={() =>
                    track("cta_click", { location: "bottom_banner" })
                  }
                  className="btn-primary inline-flex items-center gap-2 text-base sm:text-lg !px-6 !py-3 sm:!px-10 sm:!py-4"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Your Strategy Session <ArrowRight size={20} />
                  </span>
                </MagneticButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
