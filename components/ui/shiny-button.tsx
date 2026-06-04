"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  /** "blue" = solid blue bg (light sections), "dark" = glass on dark bg (hero) */
  variant?: "blue" | "dark";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  variant = "blue",
  onClick,
  type = "button",
  disabled,
  style,
}) => {
  const isDark = variant === "dark";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      initial={{ "--x": "100%", scale: 0.95 } as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      animate={{ "--x": "-100%", scale: 1 } as any}
      whileTap={{ scale: 0.96 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1.5,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: { type: "spring", stiffness: 200, damping: 5, mass: 0.5 },
      }}
      className={cn(
        "relative cursor-pointer select-none rounded-2xl px-8 font-semibold transition-shadow duration-300 ease-in-out",
        isDark
          ? "bg-white/8 backdrop-blur-sm border border-white/15 hover:border-white/30 hover:shadow-[0_8px_32px_rgba(0,51,204,0.5)]"
          : "bg-[#0033CC] hover:shadow-[0_10px_36px_rgba(0,51,204,0.55)] shadow-[0_6px_22px_rgba(0,51,204,0.38)]",
        disabled && "opacity-60 pointer-events-none",
        className
      )}
      style={{ minHeight: "54px", ...style }}
    >
      {/* Shiny text */}
      <span
        className="relative z-10 flex items-center justify-center gap-2.5 text-sm font-semibold uppercase tracking-wide"
        style={{
          color: isDark ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.95)",
          maskImage: isDark
            ? "linear-gradient(-75deg, rgba(255,255,255,1) calc(var(--x) + 20%), rgba(255,255,255,0.4) calc(var(--x) + 30%), rgba(255,255,255,1) calc(var(--x) + 100%))"
            : "linear-gradient(-75deg, rgba(255,255,255,1) calc(var(--x) + 20%), rgba(255,255,255,0.55) calc(var(--x) + 30%), rgba(255,255,255,1) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>

      {/* Shiny border sweep */}
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className={cn(
          "absolute inset-0 z-20 block rounded-[inherit] p-px",
          isDark
            ? "bg-[linear-gradient(-75deg,rgba(0,51,204,0.15)_calc(var(--x)+20%),rgba(99,153,255,0.65)_calc(var(--x)+25%),rgba(0,51,204,0.15)_calc(var(--x)+100%))]"
            : "bg-[linear-gradient(-75deg,rgba(255,255,255,0.08)_calc(var(--x)+20%),rgba(255,255,255,0.55)_calc(var(--x)+25%),rgba(255,255,255,0.08)_calc(var(--x)+100%))]"
        )}
      />
    </motion.button>
  );
};

export default ShinyButton;
