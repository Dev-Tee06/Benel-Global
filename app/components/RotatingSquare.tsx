"use client";

import { motion } from "framer-motion";

interface RotatingSquareProps {
  className?: string;
  colors?: string;
  duration?: number;
}

export function RotatingSquare({ 
  className = "w-[120%] h-[120%] lg:w-[80%] lg:h-[150%] opacity-80 mix-blend-multiply",
  colors = "rgba(41, 93, 255, 0.6) 60deg, transparent 120deg, rgba(200, 169, 81, 0.6) 240deg",
  duration = 40
}: RotatingSquareProps) {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${className}`}
      style={{
        background: `conic-gradient(from 0deg, transparent 0deg, ${colors}, transparent 300deg)`
      }}
    />
  );
}
