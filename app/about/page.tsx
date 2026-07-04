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
} from "lucide-react";
import { track } from "@vercel/analytics/react";
import { AnimatedSection } from "../components/AnimatedSection";

const processSteps = [
  {
    icon: Eye,
    step: "01",
    title: "Understand",
    description:
      "We start with deep discovery your business model, market, customers, and goals. We listen before we advise.",
  },
  {
    icon: Stethoscope,
    step: "02",
    title: "Diagnose",
    description:
      "We audit your current strategies, identify what's working and what isn't, and pinpoint the real bottlenecks blocking growth.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Strategize",
    description:
      "We design a clear, custom growth strategy  aligned with your revenue targets, positioning, and competitive landscape.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Execute",
    description:
      "We implement with precision, from campaigns to systems and optimize continuously based on real performance data.",
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
      <section className="relative pt-40 pb-32 overflow-hidden bg-cream">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-navy/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <AnimatedSection className="w-full flex flex-col items-center">
            <span className="px-5 py-2 rounded-full bg-white border border-navy/10 text-sm font-bold text-navy tracking-widest uppercase mb-8 shadow-sm">
              About BenEl Global
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-display tracking-tight leading-[1.1] text-navy max-w-5xl">
              We built this consultancy around one{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
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
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              <div className="mt-10 space-y-6 text-navy-300 text-lg sm:text-xl leading-relaxed font-light">
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

      {/* ===================== PROCESS ===================== */}
      <section className="relative py-32 overflow-hidden bg-navy">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-bold text-gold uppercase tracking-widest block mb-4">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
              How we turn clarity into <span className="text-gold">growth</span>
            </h2>
            <p className="mt-8 text-xl text-navy-100 font-light leading-relaxed">
              Every engagement follows a structured 4-step process designed to
              move your business from confusion to consistent growth.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative pt-8">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[100px] font-display font-black text-white/[0.03] select-none pointer-events-none leading-none">
                    {step.step}
                  </div>

                  <div className="group relative bg-white/[0.03] border border-white/10 hover:border-gold/30 rounded-3xl p-8 h-full transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-500">
                      <step.icon className="text-gold w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <span className="text-gold font-bold text-sm tracking-widest block mb-2">
                        STEP {step.step}
                      </span>
                      <h3 className="text-2xl font-bold font-display text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-navy-100 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PHILOSOPHY ===================== */}
      <section className="relative py-32 overflow-hidden bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-bold text-gold uppercase tracking-widest block mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-navy leading-[1.1]">
              What we stand{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
                for
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {philosophyItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-[2rem] p-10 h-full shadow-xl shadow-navy/5 border border-navy/5 hover:border-gold/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-[40px] transform group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10 flex flex-col sm:flex-row gap-6 lg:gap-8 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="text-gold w-8 h-8" />
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
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="bg-navy rounded-[40px] p-12 sm:p-20 lg:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] bg-gold/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-[-30%] right-[-10%] w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-8 leading-[1.1]">
                  Ready for clarity?
                  <br />
                  <span className="text-gold">Let&apos;s talk growth.</span>
                </h2>
                <p className="text-xl text-navy-100 font-light max-w-2xl mx-auto mb-12">
                  Book a free 60-minute strategy session and discover
                  what&apos;s really holding your business back and what to do
                  about it.
                </p>
                <Link
                  href="/contact"
                  onClick={() =>
                    track("cta_click", { location: "about_bottom" })
                  }
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-white text-navy px-10 py-5 rounded-xl font-bold text-lg sm:text-xl transition-transform hover:scale-105 duration-300 shadow-xl"
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
