"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Megaphone, BarChart3, Target, Lightbulb, Palette, Code2, Headphones } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

const services = [
  { icon: Globe, title: "Business Strategy & Planning", description: "We craft tailored business strategies that align your vision with actionable roadmaps. From market analysis to competitive positioning, we help you make smarter decisions that drive sustainable growth.", features: ["Market & competitor analysis", "Strategic roadmap development", "Revenue model optimization", "Risk assessment & mitigation"] },
  { icon: Megaphone, title: "Digital Marketing", description: "Our data-driven marketing campaigns span social media, search engine optimization, content marketing, and paid advertising — all designed to amplify your brand presence and maximize ROI.", features: ["Social media management", "SEO & content strategy", "Paid advertising campaigns", "Analytics & performance tracking"] },
  { icon: TrendingUp, title: "Brand Development", description: "We build brands that stand out. From visual identity to messaging strategy, we create cohesive brand experiences that resonate with your target audience and build lasting loyalty.", features: ["Brand identity design", "Messaging & positioning", "Brand guidelines creation", "Rebranding & refresh"] },
  { icon: BarChart3, title: "Growth Consulting", description: "Scale your operations with expert guidance. We help you identify growth opportunities, optimize processes, and implement systems that unlock new revenue streams.", features: ["Growth opportunity identification", "Process optimization", "Scaling strategy", "KPI framework setup"] },
  { icon: Lightbulb, title: "Innovation & Product Development", description: "Transform ideas into market-ready products. Our innovation framework takes you from concept validation through to launch, ensuring every product meets a real market need.", features: ["Concept validation", "MVP development support", "Go-to-market planning", "Product-market fit analysis"] },
  { icon: Target, title: "Market Entry Strategy", description: "Navigate new markets with confidence. Our research-backed expansion strategies minimize risk and maximize your chances of success when entering unfamiliar territories.", features: ["Market feasibility studies", "Localization strategy", "Partnership identification", "Regulatory compliance guidance"] },
  { icon: Palette, title: "Creative & Design Solutions", description: "Elevate your visual presence with premium design solutions. We create everything from websites to pitch decks that communicate professionalism and authority.", features: ["Website design & development", "Pitch deck creation", "Marketing collateral", "UI/UX design"] },
  { icon: Code2, title: "Digital Transformation", description: "Modernize your operations with technology. We help businesses adopt the right tools, automate workflows, and build digital infrastructure that supports scalable growth.", features: ["Technology stack advisory", "Workflow automation", "Digital infrastructure setup", "Team training & adoption"] },
  { icon: Headphones, title: "Ongoing Advisory & Support", description: "Growth doesn't stop after launch. Our ongoing advisory services provide continuous strategic support, keeping your business agile and ahead of the competition.", features: ["Monthly strategy sessions", "Performance reviews", "Industry trend briefings", "On-demand consulting"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="bg-orb w-[500px] h-[500px] bg-secondary-purple top-[-100px] left-[-200px]" />
        <div className="bg-orb w-[400px] h-[400px] bg-secondary-cyan bottom-[-100px] right-[-100px]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="text-sm font-semibold text-secondary-cyan uppercase tracking-widest">Our Services</span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.05]">
              Solutions That<br /><span className="gradient-text">Drive Growth</span>
            </h1>
            <p className="mt-6 text-primary-200 text-xl max-w-2xl leading-relaxed">Comprehensive, end-to-end services designed to accelerate your business at every stage. No templates — just strategies built for you.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={0.05}>
                <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }} className="glass gradient-border rounded-2xl p-8 md:p-10">
                  <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-cta-gradient flex items-center justify-center shadow-glow flex-shrink-0">
                          <service.icon size={22} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold font-display text-white">{service.title}</h3>
                      </div>
                      <p className="text-primary-200 leading-relaxed">{service.description}</p>
                      <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-primary-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary-cyan flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex md:flex-col gap-3 md:pt-2">
                      <Link href="/contact" className="btn-gradient text-sm !px-6 !py-2.5 whitespace-nowrap"><span className="relative z-10">Get Started</span></Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="bg-orb w-[300px] h-[300px] bg-secondary-purple top-[-100px] right-[-100px]" />
              <div className="bg-orb w-[250px] h-[250px] bg-secondary-cyan bottom-[-80px] left-[-80px]" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight">Not Sure Which Service <span className="gradient-text">Is Right?</span></h2>
                <p className="mt-4 text-primary-200 text-lg max-w-xl mx-auto">Book a free consultation and we&apos;ll help you identify exactly what your business needs to reach the next level.</p>
                <div className="mt-8">
                  <Link href="/contact" className="btn-gradient inline-flex items-center gap-2 text-lg !px-10 !py-4"><span className="relative z-10 flex items-center gap-2">Book a Free Consultation <ArrowRight size={20} /></span></Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
