import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy Session | BenEl Global",
  alternates: {
    canonical: "https://benelglobal.com/contact",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
