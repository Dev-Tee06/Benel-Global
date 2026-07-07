"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Target,
  Layers,
  Rocket,
  Zap,
  CheckCircle2,
  Crosshair,
} from "lucide-react";
import { track } from "@vercel/analytics/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { CinematicBackground } from "../components/CinematicBackground";
import { InteractiveCard } from "../components/InteractiveCard";
import { DiagonalAccent } from "../components/DiagonalAccent";

const services = [
  {
    icon: Target,
    title: "Business Strategy & Planning",
    image: "/business.jpg",
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
    icon: Rocket,
    title: "Digital Marketing",
    image: "/digital-market.jpg",
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
    icon: Layers,
    title: "Brand Development",
    image: "/development.png",
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
    image: "/growth-dev.png",
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
    icon: Zap,
    title: "Innovation & Product Development",
    image: "/product.jpg",
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
    icon: CheckCircle2,
    title: "Creative & Design Solutions",
    image: "/creative-design.jpg",
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
    icon: BarChart3,
    title: "Digital Transformation",
    image: "/digital-trans.jpg",
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
    icon: Crosshair,
    title: "Ongoing Advisory & Support",
    image: "/advisory.jpg",
    description:
      "Growth doesn't stop after launch. Our ongoing advisory services provide continuous strategic support, keeping your business agile and ahead of the competition.",
    features: [
      "Monthly strategy sessions",
      "Performance reviews",
      "Industry trend briefings",
      "On-demand consulting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Market Entry Strategy",
    image: "/entry.jpg",
    description:
      "Navigate new markets with confidence. Our research-backed expansion strategies minimize risk and maximize your chances of success when entering unfamiliar territories.",
    features: [
      "Market feasibility studies",
      "Localization strategy",
      "Partnership identification",
      "Regulatory compliance guidance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-bg-primary">
        <CinematicBackground />
        <DiagonalAccent color="blue-gold" className="opacity-60" />
        <motion.div
          animate={{
            x: [0, 30, -15, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -right-10 w-[400px] h-[400px] bg-gold/8 blur-[120px] rounded-full pointer-events-none"
        />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection direction="blur" delay={0.2}>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest block mb-4">
              Our Services
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.05] text-navy">
              Solutions That
              <br className="hidden sm:block" />
              <span className="text-cinematic-gradient"> Drive Growth</span>
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
      <section className="relative py-24 overflow-hidden bg-bg-secondary">
        <div className="container-custom relative z-10">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              initial: { opacity: 0 },
              whileInView: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  whileInView: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <InteractiveCard>
                  <div className="service-card group relative h-full flex flex-col">
                    <div className="flex flex-col h-full z-10 relative">
                      {/* Image Integration */}
                      <div className="relative h-[220px] w-full rounded-[24px] overflow-hidden mb-8 flex-shrink-0 z-10">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transform group-hover:scale-[1.08] group-hover:translate-y-[-6px] transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/10 group-hover:to-navy/70 transition-colors duration-500" />
                      </div>

                      <div className="flex flex-col items-start gap-5 mb-5 px-1">
                        <div className="w-14 h-14 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center shadow-sm group-hover:bg-navy group-hover:border-navy group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-500 flex-shrink-0">
                          <service.icon
                            size={24}
                            className="text-navy group-hover:text-gold transition-colors duration-500"
                          />
                        </div>
                        <h3 className="text-2xl font-bold font-display text-navy group-hover:text-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-navy-300 leading-relaxed text-base flex-grow px-1">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-3 mb-8 px-1">
                        {service.features.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 text-sm text-navy-300 font-medium"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-navy/20 group-hover:bg-gold transition-colors duration-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto px-1">
                        <Link
                          href="/contact"
                          onClick={() =>
                            track("cta_click", { location: "services_card" })
                          }
                          className="btn-outline w-full text-sm !py-3 inline-flex items-center justify-center group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-300"
                        >
                          <span className="relative z-10">Get Started</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-bg-accent">
        <DiagonalAccent color="navy" className="opacity-5" />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 blur-[100px] rounded-full pointer-events-none"
        />
        <div className="container-custom relative z-10">
          <AnimatedSection direction="scale">
            <div className="service-card rounded-[40px] p-12 sm:p-20 text-center relative overflow-hidden">
              <div className="absolute top-[-30%] right-[-10%] w-[400px] h-[400px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-[-30%] left-[-10%] w-[300px] h-[300px] bg-navy/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-navy mb-6">
                  Not Sure Which Service{" "}
                  <span className="text-gold">Is Right?</span>
                </h2>
                <p className="text-navy-400 text-lg mx-auto mb-10 leading-relaxed">
                  Book your consultation now and we&apos;ll help you identify
                  exactly what your business needs to reach the next level.
                </p>
                <Link
                  href="/contact"
                  onClick={() =>
                    track("cta_click", { location: "services_bottom" })
                  }
                  className="btn-primary inline-flex items-center justify-center gap-3 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Book Your Consultation Now{" "}
                    <ArrowRight
                      size={20}
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
