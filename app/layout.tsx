import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { ScrollTracker } from "./components/ScrollTracker";
import { SplashScreen } from "./components/SplashScreen";
import { SmoothScroll } from "./components/SmoothScroll";
import { CustomCursor } from "./components/CustomCursor";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://benelglobal.com"),
  title: "BenEl Global | Marketing Consultancy & Brand Strategy",
  description:
    "BenEl Global is a marketing consultancy that helps businesses fix unclear positioning, build growth systems, and convert strategy into consistent revenue.",
  keywords: [
    "marketing consultancy Nigeria",
    "brand strategy consultant",
    "business growth strategy",
    "marketing strategy for small businesses",
    "brand positioning consultant",
  ],
  openGraph: {
    title: "BenEl Global — The Business Catalyst",
    description:
      "Your business isn't broken. Your growth system is. We build the brand strategy, marketing systems, and structured execution that move businesses forward.",
    type: "website",
    url: "https://benelglobal.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BenEl Global Logo",
      }
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {`{
            "@context":"https://schema.org",
            "@type":"Organization",
            "name":"BenEl Global",
            "url":"https://benelglobal.com",
            "logo":"https://benelglobal.com/logo.png"
          }`}
        </Script>
      </head>
      <body className="font-sans">
        <CustomCursor />
        <SmoothScroll>
          <SplashScreen />
          <Navbar />
          <div className="fixed top-[15%] -right-1/4 w-[300px] md:w-[500px] lg:w-[800px] opacity-[0.015] pointer-events-none z-40 mix-blend-multiply transform -rotate-12">
            <img src="/BenEl%20logo.png" alt="" className="w-full h-auto grayscale" />
          </div>
          <div className="fixed bottom-[10%] -left-1/4 w-[250px] md:w-[400px] lg:w-[600px] opacity-[0.015] pointer-events-none z-40 mix-blend-multiply transform rotate-12">
            <img src="/BenEl%20logo.png" alt="" className="w-full h-auto grayscale" />
          </div>
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
          <Analytics />
          <ScrollTracker />
        </SmoothScroll>
      </body>
    </html>
  );
}
