import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { ScrollTracker } from "./components/ScrollTracker";
import { SplashScreen } from "./components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,800&f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
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
        <SplashScreen />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <ScrollTracker />
      </body>
    </html>
  );
}
