"use client";

import { motion } from "framer-motion";

import { DiagonalAccent } from "./DiagonalAccent";

export function CinematicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
      {/* Bold Diagonal Accent */}
      <DiagonalAccent color="blue-gold" />
      
      {/* Soft moving gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gold/30 blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-royal-blue/30 blur-[100px]"
      />

      <motion.div
        animate={{
          y: [0, -100, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[20%] h-[20%] rounded-full bg-cyan-400/20 blur-[80px]"
      />

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
