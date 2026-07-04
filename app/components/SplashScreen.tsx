"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock body scroll while splash is visible
    document.body.style.overflow = "hidden";

    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-24 w-64 md:h-32 md:w-80 mb-8"
          >
            <Image
              src="/BenEl%20logo.png"
              alt="BenEl Global Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center px-4"
          >
            <p className="text-navy/60 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              Marketing Consulting{" "}
              <span className="mx-1 md:mx-2 text-gold">·</span> Brand Strategy{" "}
              <span className="mx-1 md:mx-2 text-gold">·</span> Digital
              Execution
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
