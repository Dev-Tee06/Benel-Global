"use client";

import Link from "next/link";
import Image from "next/image";
import { track } from "@vercel/analytics/react";
import { Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-cream text-navy border-t border-navy/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-40">
                <Image src="/BenEl%20logo.png" alt="BenEl Global Logo" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed max-w-xs">
              Growth consultancy helping businesses build the clarity, strategy, and systems that drive real revenue.
            </p>
            <p className="text-navy-400 text-xs italic">
              Marketing Consulting · Brand Strategy · Digital Execution
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-navy font-semibold font-display text-sm uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold transition-colors duration-200 flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-navy font-semibold font-display text-sm uppercase tracking-widest mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:benel.hub@gmail.com"
                  onClick={() => track("social_click", { platform: "email" })}
                  className="text-navy-300 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-3"
                >
                  <Mail size={16} className="text-gold" />
                  benel.hub@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/benel.global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("social_click", { platform: "instagram" })}
                  className="text-navy-300 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-3"
                >
                  <Instagram size={16} className="text-gold" />
                  @benel.global
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-navy/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-xs">
            © 2026 BenEl Global
          </p>
          <p className="text-navy-400 text-xs">
            Built for growth. Designed with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
