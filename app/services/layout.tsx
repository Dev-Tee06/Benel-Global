import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | BenEl Global",
  description: "Comprehensive, end-to-end services designed to accelerate your business at every stage. We build strategies built for you.",
  alternates: {
    canonical: "https://benelglobal.com/services",
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
