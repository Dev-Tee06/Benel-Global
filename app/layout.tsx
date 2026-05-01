import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BenEl Global — Growth Consultancy | Strategy · Branding · Marketing",
  description:
    "BenEl Global is a growth consultancy that helps businesses build clarity, strategy, and marketing systems that drive real revenue. Book a free strategy session today.",
  keywords: [
    "BenEl Global",
    "growth consultancy",
    "business strategy",
    "marketing consulting",
    "brand positioning",
    "marketing systems",
    "digital marketing",
    "revenue growth",
  ],
  openGraph: {
    title: "BenEl Global — Growth Consultancy",
    description:
      "Your business isn't broken. Your growth system is. We help businesses stop guessing and start growing with clear strategy and marketing systems that drive revenue.",
    type: "website",
    url: "https://benelglobal.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
