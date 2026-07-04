"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Megaphone,
  BarChart3,
  Target,
  Lightbulb,
  Palette,
  Code2,
  Headphones,
} from "lucide-react";
import { track } from "@vercel/analytics/react";
import { AnimatedSection } from "../components/AnimatedSection";

const services = [
  {
    icon: Globe,
    title: "Business Strategy & Planning",
    description:
      "We craft tailored business strategies that align your vision with actionable roadmaps. From market analysis to competitive positioning, we help you make smarter decisions that drive sustainable growth.",
    features: [
      "Market & competitor analysis",
      "Strategic roadmap development",
      "Revenue model optimization",
      "Risk assessment & mitigation",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Our data-driven marketing campaigns span social media, search engine optimization, content marketing, and paid advertising all designed to amplify your brand presence and maximize ROI.",
    features: [
      "Social media management",
      "SEO & content strategy",
      "Paid advertising campaigns",
      "Analytics & performance tracking",
    ],
  },
  {
    icon: TrendingUp,
    title: "Brand Development",
    description:
      "We build brands that stand out. From visual identity to messaging strategy, we create cohesive brand experiences that resonate with your target audience and build lasting loyalty.",
    features: [
      "Brand identity design",
      "Messaging & positioning",
      "Brand guidelines creation",
      "Rebranding & refresh",
    ],
  },
  {
    icon: BarChart3,
    title: "Growth Consulting",
    description:
      "Scale your operations with expert guidance. We help you identify growth opportunities, optimize processes, and implement systems that unlock new revenue streams.",
    features: [
      "Growth opportunity identification",
      "Process optimization",
      "Scaling strategy",
      "KPI framework setup",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation & Product Development",
    description:
      "Transform ideas into market-ready products. Our innovation framework takes you from concept validation through to launch, ensuring every product meets a real market need.",
    features: [
      "Concept validation",
      "MVP development support",
      "Go-to-market planning",
      "Product-market fit analysis",
    ],
  },
  {
    icon: Target,
    title: "Market Entry Strategy",
    description:
      "Navigate new markets with confidence. Our research-backed expansion strategies minimize risk and maximize your chances of success when entering unfamiliar territories.",
    features: [
      "Market feasibility studies",
      "Localization strategy",
      "Partnership identification",
      "Regulatory compliance guidance",
    ],
  },
  {
    icon: Palette,
    title: "Creative & Design Solutions",
    description:
      "Elevate your visual presence with premium design solutions. We create everything from websites to pitch decks that communicate professionalism and authority.",
    features: [
      "Website design & development",
      "Pitch deck creation",
      "Marketing collateral",
      "UI/UX design",
    ],
  },
  {
    icon: Code2,
    title: "Digital Transformation",
    description:
      "Modernize your operations with technology. We help businesses adopt the right tools, automate workflows, and build digital infrastructure that supports scalable growth.",
    features: [
      "Technology stack advisory",
      "Workflow automation",
      "Digital infrastructure setup",
      "Team training & adoption",
    ],
  },
  {
    icon: Headphones,
    title: "Ongoing Advisory & Support",
    description:
      "Growth doesn't stop after launch. Our ongoing advisory services provide continuous strategic support, keeping your business agile and ahead of the competition.",
    features: [
      "Monthly strategy sessions",
      "Performance reviews",
      "Industry trend briefings",
      "On-demand consulting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-cream">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-navy/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest block mb-4">
              Our Services
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.05] text-navy">
              Solutions That
              <br className="hidden sm:block" />
              <span className="gradient-text"> Drive Growth</span>
            </h1>
            <p className="mt-6 text-navy-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive, end-to-end services designed to accelerate your
              business at every stage. No templates, just strategies built for
              you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={0.05}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass group relative overflow-hidden rounded-[2rem] p-8 md:p-10 border border-navy/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 bg-white/70 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-[-50%] right-[-50%] w-[150%] h-[150%] bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none" />
                  <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start relative z-10">
                    <div>
                      <div className="flex flex-col items-start gap-5 mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-navy group-hover:border-navy group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-500 flex-shrink-0">
                          <service.icon size={24} className="text-navy group-hover:text-gold transition-colors duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold font-display text-navy">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-navy-300 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 text-sm text-navy-300 font-medium"
                          >
                            <div className="w-2 h-2 rounded-full bg-navy/20 group-hover:bg-gold transition-colors duration-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex md:flex-col gap-3 md:pt-2">
                      <Link
                        href="/contact"
                        onClick={() => track("cta_click", { location: "services_card" })}
                        className="btn-primary text-sm !px-8 !py-3 whitespace-nowrap inline-flex items-center justify-center"
                      >
                        <span className="relative z-10">Get Started</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="bg-navy rounded-[40px] p-12 sm:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-[-30%] right-[-10%] w-[400px] h-[400px] bg-gold/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-[-30%] left-[-10%] w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-6">
                  Not Sure Which Service{" "}
                  <span className="text-gold">Is Right?</span>
                </h2>
                <p className="text-navy-100 text-lg mx-auto mb-10 leading-relaxed">
                  Book a free consultation and we&apos;ll help you identify
                  exactly what your business needs to reach the next level.
                </p>
                <Link
                  href="/contact"
                  onClick={() => track("cta_click", { location: "services_bottom" })}
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-white text-navy px-10 py-5 rounded-xl font-bold text-lg sm:text-xl transition-transform hover:scale-105 duration-300 shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Book a Free Consultation <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
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
