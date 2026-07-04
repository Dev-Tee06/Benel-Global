"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics/react";

export function ScrollTracker() {
  useEffect(() => {
    let scrolled25 = false;
    let scrolled50 = false;
    let scrolled75 = false;
    let scrolled100 = false;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight - windowHeight;
      
      if (documentHeight <= 0) return;

      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      if (scrollPercentage >= 25 && !scrolled25) {
        track("scroll_depth", { depth: "25%" });
        scrolled25 = true;
      }
      if (scrollPercentage >= 50 && !scrolled50) {
        track("scroll_depth", { depth: "50%" });
        scrolled50 = true;
      }
      if (scrollPercentage >= 75 && !scrolled75) {
        track("scroll_depth", { depth: "75%" });
        scrolled75 = true;
      }
      if (scrollPercentage >= 99 && !scrolled100) {
        track("scroll_depth", { depth: "100%" });
        scrolled100 = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
