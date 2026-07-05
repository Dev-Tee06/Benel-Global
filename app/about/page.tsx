"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Stethoscope,
  Lightbulb,
  Rocket,
  Megaphone,
  Compass,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { track } from "@vercel/analytics/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { CinematicBackground } from "../components/CinematicBackground";
import { InteractiveCard } from "../components/InteractiveCard";
import { DiagonalAccent } from "../components/DiagonalAccent";

const journeySteps = [
  {
    title: "Discover",
    description: "Deep dive into your business model, market, and goals to align on the core challenge.",
    icon: Eye,
  },
  {
    title: "Research",
    description: "Audit current strategies, identify bottlenecks, and gather data-driven insights.",
    icon: Compass,
  },
  {
    title: "Strategy",
    description: "Design a custom roadmap aligned with your revenue targets and positioning.",
    icon: Lightbulb,
  },
  {
    title: "Build",
    description: "Develop the required assets, systems, and campaigns for execution.",
    icon: Code2,
  },
  {
    title: "Launch",
    description: "Deploy the strategy into the market with precision and agility.",
    icon: Rocket,
  },
  {
    title: "Scale",
    description: "Optimize continuously based on performance data to accelerate growth.",
    icon: TrendingUp,
  },
];

const philosophyItems = [
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Marketing should generate revenue, not just attention. Every campaign we build is designed to drive measurable business outcomes.",
  },
  {
    icon: Compass,
    title: "Positioning",
    description:
      "Your brand position should be so clear that your ideal customer feels like you're speaking directly to them and only them.",
  },
  {
    icon: BarChart3,
    title: "Strategy",
    description:
      "Strategy without execution is a wish. Execution without strategy is chaos. We deliver both  integrated and intentional.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Sustainable growth comes from systems, not shortcuts. We build the infrastructure that makes scaling inevitable.",
  },
];

const beliefs = [
  "Strategy built on understanding",
  "Positioning is the job",
  "Marketing measurable",
  "Clearest message wins",
  "Consistency is a system",
];

export default function AboutPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-white">
        <CinematicBackground />
        <DiagonalAccent color="gold" className="opacity-60" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-navy/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <AnimatedSection direction="up" delay={0.2} className="w-full flex flex-col items-center">
            <span className="px-5 py-2 rounded-full bg-white border border-navy/10 text-sm font-bold text-navy tracking-widest uppercase mb-8 shadow-sm">
              About BenEl Global
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-display tracking-tight leading-[1.1] text-navy max-w-5xl">
              We built this consultancy around one{" "}
              <span className="text-cinematic-gradient">
                uncomfortable truth:
              </span>
              <br className="hidden sm:block" />
              most businesses aren&apos;t struggling because they&apos;re not
              trying hard enough.
            </h1>
            <p className="mt-10 text-lg sm:text-xl md:text-2xl text-navy-300 max-w-3xl leading-relaxed font-light">
              We exist to help businesses see what they can&apos;t see
              themselves and build the systems that turn that clarity into
              revenue.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===================== WHO WE ARE ===================== */}
      <section className="relative py-32 overflow-hidden bg-navy/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
              <span className="text-sm font-bold text-gold uppercase tracking-widest block mb-4">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-navy leading-[1.1]">
                A consultancy built on{" "}
                <span className="text-gold">conviction</span>
              </h2>
              <div className="mt-10 space-y-6 text-navy-400 text-lg sm:text-xl leading-relaxed font-light">
                <p>
                  BenEl Global is a growth consultancy for businesses that are
                  tired of random marketing and ready for real strategy. We work
                  at the intersection of{" "}
                  <Link href="/#services" className="text-gold hover:underline">
                    branding
                  </Link>
                  , marketing, and business systems because growth happens when
                  all three are aligned.
                </p>
                <p>
                  We don&apos;t do cookie-cutter. We don&apos;t do templates.
                  Every engagement starts with understanding your business
                  deeply then designing a system built specifically for your
                  growth.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-900 rounded-[2.5rem] transform rotate-2 opacity-10 blur-xl" />
                <div className="relative bg-navy rounded-[2rem] p-10 sm:p-14 border border-white/10 shadow-2xl overflow-hidden">
                  <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-gold/10 blur-[50px] rounded-full" />
                  <h3 className="text-3xl font-bold font-display text-white mb-10 relative z-10 flex items-center gap-4">
                    <span className="w-8 h-1 bg-gold rounded-full" />
                    We believe:
                  </h3>
                  <div className="space-y-6 relative z-10">
                    {beliefs.map((belief, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1 bg-gold/20 rounded-full p-1 border border-gold/30">
                          <CheckCircle2 size={16} className="text-gold" />
                        </div>
                        <p className="text-white/90 text-lg font-light leading-snug">
                          {belief}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===================== GROWTH JOURNEY ===================== */}
      <section className="relative py-32 overflow-hidden bg-gold/10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 blur-[150px] rounded-full pointer-events-none" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-bold text-gold uppercase tracking-widest block mb-4">
              Growth Journey
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-navy leading-[1.1]">
              The Roadmap to <span className="text-gold">Scale</span>
            </h2>
            <p className="mt-8 text-xl text-navy-400 font-light leading-relaxed">
              We guide you through a comprehensive, interactive journey designed to move your business from confusion to consistent growth.
            </p>
          </AnimatedSection>

          <div className="relative max-w-5xl mx-auto pb-20 pt-10">
            {/* Central Vertical Line (Desktop only) */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-navy/10 via-gold/50 to-navy/10 origin-top -translate-x-1/2 rounded-full"
            />

            <div className="space-y-16 md:space-y-24">
              {journeySteps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center md:flex-row md:justify-between group">
                  {/* Timeline Node — centered on top for mobile, centered in line for desktop */}
                  <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 mb-6 md:mb-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.1, bounce: 0.4 }}
                      className="w-[72px] h-[72px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center transform group-hover:scale-[1.1] transition-transform duration-500 shadow-[0_10px_30px_rgba(200,169,81,0.2)] relative bg-white border-2 border-gold/20"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.15, 0.5] }} 
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="absolute inset-[-12px] rounded-full border-2 border-gold/40 pointer-events-none"
                      />
                      <step.icon className="text-gold w-7 h-7 md:w-8 md:h-8 z-10" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-[45%] ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto md:text-left"
                    }`}
                  >
                    <InteractiveCard>
                      <div className={`service-card hover:-translate-y-2 flex flex-col items-center text-center ${i % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                        <span className="text-gold font-bold text-sm tracking-widest block mb-2 uppercase">
                          Phase 0{i + 1}
                        </span>
                        <h3 className="text-2xl font-bold font-display text-navy mb-4">
                          {step.title}
                        </h3>
                        <p className={`text-navy-300 font-light leading-relaxed text-center ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                          {step.description}
                        </p>
                      </div>
                    </InteractiveCard>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PHILOSOPHY ===================== */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-bold text-gold uppercase tracking-widest block mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-navy leading-[1.1]">
              What we stand{" "}
              <span className="text-cinematic-gradient">
                for
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {philosophyItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="zoom">
                <InteractiveCard>
                  <div className="service-card group relative h-full flex flex-col sm:flex-row gap-6 lg:gap-8 items-start hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-navy group-hover:border-navy transition-all duration-500">
                      <item.icon className="text-navy group-hover:text-gold w-8 h-8 transition-colors duration-500" />
                    </div>
                      <div>
                        <h3 className="text-2xl font-bold font-display text-navy mb-4">
                          {item.title}
                        </h3>
                        <p className="text-navy-300 text-lg font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                  </div>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="relative py-24 overflow-hidden bg-white">
        <DiagonalAccent color="navy" className="opacity-50" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="service-card rounded-[40px] p-12 sm:p-20 lg:p-24 text-center relative overflow-hidden">
              <div className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] bg-[#00D4FF]/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-[-30%] right-[-10%] w-[400px] h-[400px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-navy mb-8 leading-[1.1]">
                  Ready for clarity?
                  <br />
                  <span className="text-cinematic-gradient">Let&apos;s talk growth.</span>
                </h2>
                <p className="text-xl text-navy-300 font-light max-w-2xl mx-auto mb-12">
                  Book a free 60-minute strategy session and discover
                  what&apos;s really holding your business back and what to do
                  about it.
                </p>
                <Link
                  href="/contact"
                  onClick={() =>
                    track("cta_click", { location: "about_bottom" })
                  }
                  className="btn-primary inline-flex items-center justify-center gap-3 text-lg sm:text-xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Book Your Free Session
                    <ArrowRight
                      size={22}
                      className="transition-transform group-hover:translate-x-1"
                    />
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
