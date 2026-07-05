import React from "react";

interface DiagonalAccentProps {
  color?: "blue-gold" | "gold" | "navy";
  className?: string;
}

export function DiagonalAccent({ color = "blue-gold", className = "" }: DiagonalAccentProps) {
  let bgClass = "";
  
  if (color === "blue-gold") {
    bgClass = "bg-gradient-to-r from-[rgba(41,93,255,0.08)] to-[rgba(200,169,81,0.08)]";
  } else if (color === "gold") {
    bgClass = "bg-gradient-to-r from-[rgba(200,169,81,0.08)] to-[rgba(200,169,81,0.02)]";
  } else if (color === "navy") {
    bgClass = "bg-gradient-to-r from-[rgba(10,37,64,0.08)] to-[rgba(10,37,64,0.02)]";
  }

  return (
    <div 
      className={`absolute top-0 left-0 w-[150%] h-[150%] origin-top-left -skew-y-12 pointer-events-none -z-10 ${bgClass} ${className}`} 
    />
  );
}
