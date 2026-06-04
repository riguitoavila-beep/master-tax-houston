"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { StarsBackground } from "@/components/ui/stars";

const stats = [
  { value: 500, suffix: "+", label: "Clientes atendidos" },
  { value: 10,  suffix: "+", label: "Años de experiencia" },
  { value: 4,   suffix: "",  label: "Departamentos especializados" },
  { value: 20,  suffix: "+", label: "Servicios disponibles" },
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2200, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString();
    });
  }, [spring]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <StarsBackground className="py-20 md:py-28" speed={70} factor={0.03}>
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div
                className="mb-2 text-4xl font-extrabold text-white md:text-5xl"
                style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.04em" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p
                className="text-xs font-bold uppercase tracking-[0.14em] text-white/30"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </StarsBackground>
  );
}
