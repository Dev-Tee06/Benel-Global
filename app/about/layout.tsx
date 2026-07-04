import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BenEl Global | Growth Consultancy & Brand Strategy",
  description: "BenEl Global is a marketing and brand strategy consultancy that helps business owners fix unclear positioning, build real marketing systems, and grow with intention.",
  alternates: {
    canonical: "https://benelglobal.com/about",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
