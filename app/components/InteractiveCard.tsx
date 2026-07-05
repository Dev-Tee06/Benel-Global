"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  return (
    <div className={`relative h-full w-full ${className}`}>
        <motion.div
          whileHover={{ y: -15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
    </div>
  );
}
