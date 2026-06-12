"use client";
import { motion } from "framer-motion";

type SectionHeaderProps = {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  className?: string;
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
  dark = false,
  className = "mb-16",
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-5"
      >
        <span
          className={dark ? "section-badge-dark" : "section-badge"}
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {badge}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-section-title mb-4 ${dark ? "text-white" : "text-slate-900"}`}
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className={`max-w-2xl mx-auto text-base leading-relaxed ${
            dark ? "text-white/50" : "text-slate-500"
          }`}
          style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
