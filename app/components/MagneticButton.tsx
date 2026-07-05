"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
  href?: string;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  as: Component = "button",
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const ComponentToRender = href ? "a" : Component;
  
  return (
    <motion.div
      ref={ref as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <ComponentToRender
        href={href}
        onClick={onClick}
        className={className}
      >
        {children}
      </ComponentToRender>
    </motion.div>
  );
}
