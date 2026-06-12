"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, Star, Shield, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
import { StarsBackground } from "@/components/ui/stars";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const CYCLING_WORDS = [
  { text: "Taxes",     gradient: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)" },
  { text: "Seguros",   gradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)" },
  { text: "Crédito",   gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)" },
  { text: "Migración", gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)" },
];

/* ── Fluid blur word reveal ─────────────────────────────────── */
type BlurChunkProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

function BlurChunk({ children, delay = 0, className, style }: BlurChunkProps) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(18px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.85, delay, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
      className={className}
      style={{
        display: "inline-block",
        paddingRight: "0.22em",
        willChange: "filter, opacity, transform",
        ...style,
      }}
    >
      {children}
    </motion.span>
  );
}

/* ── Cycling word ────────────────────────────────────────────── */
function CyclingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % CYCLING_WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const word = CYCLING_WORDS[index];

  return (
    /* isolation + translateZ(0) → previene flickering en iOS Safari con gradient text animado */
    <span
      style={{
        display: "inline-block",
        position: "relative",
        isolation: "isolate",
        paddingBottom: "0.28em",
        transform: "translateZ(0)",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 16, filter: "blur(14px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              opacity: { duration: 0.45, ease: "easeOut" as const },
              y:       { duration: 0.58, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
              filter:  { duration: 0.6,  ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
            },
          }}
          exit={{
            opacity: 0,
            y: -12,
            filter: "blur(10px)",
            transition: {
              opacity: { duration: 0.25, ease: "easeIn" as const },
              y:       { duration: 0.28, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
              filter:  { duration: 0.28, ease: "easeIn" as const },
            },
          }}
          className="text-hero-accent"
          style={{
            display: "inline-block",
            lineHeight: 1.4,
            background: word.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            /* translateZ fuerza GPU layer — evita artifacts en Chrome/Safari */
            transform: "translateZ(0)",
            willChange: "opacity, transform, filter",
            whiteSpace: "nowrap",
          }}
        >
          {word.text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ── Stagger variants ────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <StarsBackground
      id="inicio"
      className="relative min-h-screen w-full"
      speed={60}
      factor={0.04}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 44, 0], y: [0, -28, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 h-[680px] w-[680px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(ellipse, rgba(0,51,204,0.18) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -32, 0], y: [0, 42, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/4 -right-40 h-[560px] w-[560px] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 22, 0], y: [0, 26, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-28 left-1/3 h-[480px] w-[480px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(0,24,153,0.14) 0%, transparent 70%)" }}
        />
      </div>

      {/* Content — pt responsivo: menos en mobile, más en desktop */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-6xl w-full">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* LEFT */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex-1 min-w-0 text-center lg:text-left"
            >
              {/* Eyebrow badge */}
              <motion.div variants={fadeIn} className="mb-6 inline-flex">
                <span className="section-badge-dark" style={{ fontFamily: "var(--font-manrope)" }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                  <Star className="h-3 w-3 fill-[#c9a96e] text-[#c9a96e]" />
                  +500 Clientes · Houston, TX
                </span>
              </motion.div>

              {/* Headline */}
              <h1
                className="text-hero text-white text-balance"
                style={{ lineHeight: 1.16, marginBottom: "1.5rem" }}
              >
                {/* Line 1 */}
                <span style={{ display: "block", marginBottom: "0.12em" }}>
                  <BlurChunk delay={0.15}>Tu</BlurChunk>
                  <BlurChunk delay={0.27}>Agencia</BlurChunk>
                  <BlurChunk delay={0.39}>de</BlurChunk>
                </span>

                {/* Line 2: Confianza — azul claro → verde esmeralda */}
                <BlurChunk
                  delay={0.54}
                  className="text-hero-accent"
                  style={{
                    background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    transform: "translateZ(0)",
                    paddingRight: 0,
                    display: "block",
                    marginBottom: "0.1em",
                  }}
                >
                  Confianza
                </BlurChunk>

                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="block h-px w-44 origin-left rounded-full mx-auto lg:mx-0"
                  style={{
                    background: "linear-gradient(90deg, rgba(34,211,238,0.5), transparent)",
                    marginBottom: "0.22em",
                  }}
                />

                {/* Line 3: Cycling word */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.45 }}
                  style={{ display: "block" }}
                >
                  <CyclingWord />
                </motion.span>
              </h1>

              {/* Subheading — ligeramente transparente para jerarquía */}
              <motion.p
                variants={fadeUp}
                className="mb-8 max-w-md text-[15px] leading-relaxed text-white/75 mx-auto lg:mx-0"
                style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
              >
                Cuatro departamentos especializados bajo un mismo techo.{" "}
                Todo en español, todo para ti.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo("#contacto")}
                  className="cursor-pointer btn-hero-primary w-full sm:w-auto"
                >
                  Consulta Gratis
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo("#departamentos")}
                  className="cursor-pointer btn-hero-ghost w-full sm:w-auto"
                >
                  Ver Departamentos
                </motion.button>
              </motion.div>

              {/* Trust row — más visible */}
              <motion.div
                variants={fadeIn}
                className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
              >
                {[
                  { icon: CheckCircle, text: "Atención en Español" },
                  { icon: Shield,       text: "100% Confidencial" },
                  { icon: Clock,        text: "Respuesta en 24h" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.text}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-white tracking-wide"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      <Icon className="h-3 w-3 text-[#22d3ee]/70 flex-shrink-0" strokeWidth={2} />
                      {item.text}
                    </span>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* RIGHT — glassmorphism logo */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.14, 1], opacity: [0.3, 0.58, 0.3] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 scale-[1.55] rounded-[2.5rem] blur-3xl"
                  style={{ background: "radial-gradient(ellipse, rgba(0,51,204,0.5) 0%, transparent 70%)" }}
                />
                <motion.div
                  animate={{ scale: [1, 1.22, 1], opacity: [0.14, 0.42, 0.14] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-5 -right-5 h-24 w-24 rounded-full blur-2xl"
                  style={{ background: "rgba(34,211,238,0.26)" }}
                />
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className="relative p-5 rounded-[2.2rem]"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 60%, rgba(0,51,204,0.07) 100%)",
                      backdropFilter: "blur(28px)",
                      WebkitBackdropFilter: "blur(28px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 28px 90px rgba(0,0,0,0.6), 0 52px 130px rgba(0,51,204,0.2), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.16)",
                    }}
                  >
                    <div
                      className="absolute inset-x-7 top-0 h-px rounded-full"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.36), transparent)" }}
                    />
                    <Image
                      src="/logo-hero.png"
                      alt="Master Tax Houston"
                      width={300}
                      height={300}
                      className="h-56 w-56 object-contain sm:h-64 sm:w-64 md:h-[17rem] md:w-[17rem]"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/13464593090"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="WhatsApp"
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl whatsapp-pulse"
          style={{ background: "linear-gradient(135deg, #25D366 0%, #1da851 100%)" }}
        >
          <WhatsAppIcon className="h-6 w-6 fill-white" />
        </motion.div>
        <span
          className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-900/90 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none backdrop-blur-sm"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          (346) 459-3090
        </span>
      </a>
    </StarsBackground>
  );
}
