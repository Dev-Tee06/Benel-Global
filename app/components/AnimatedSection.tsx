"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "blur" | "scale";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  const directionMap: Record<string, Record<string, number>> = {
    up: { y: 60, x: 0, scale: 1 },
    down: { y: -60, x: 0, scale: 1 },
    left: { y: 0, x: 60, scale: 1 },
    right: { y: 0, x: -60, scale: 1 },
    zoom: { y: 0, x: 0, scale: 0.9 },
    blur: { y: 30, x: 0, scale: 1 },
    scale: { y: 0, x: 0, scale: 0.85 },
  };

  const getHiddenState = () => {
    const base: Record<string, number | string> = {
      opacity: 0,
      ...directionMap[direction],
    };
    if (direction === "blur") {
      base.filter = "blur(12px)";
    }
    return base;
  };

  const getVisibleState = () => {
    const base: Record<string, number | string> = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    };
    if (direction === "blur") {
      base.filter = "blur(0px)";
    }
    return base;
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: getHiddenState(),
        visible: {
          ...getVisibleState(),
          transition: {
            duration: 1,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
