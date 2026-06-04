"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/ui/marquee";
import { LiquidCard } from "@/components/ui/liquid-glass-card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    location: "Houston, TX",
    initial: "M",
    text: "Master Tax me ayudó a recuperar más de lo que esperaba. El proceso fue súper rápido y me explicaron todo en español.",
    color: "#0033CC",
  },
  {
    name: "Carlos R.",
    location: "Houston, TX",
    initial: "C",
    text: "Llevaba 3 años sin hacer mis taxes y tenía miedo. El equipo de Master Tax me resolvió todo sin problemas. Muy profesionales.",
    color: "#4f46e5",
  },
  {
    name: "Luisa M.",
    location: "Houston, TX",
    initial: "L",
    text: "Me inscribí en el Obamacare con su ayuda y conseguí un plan excelente para mi presupuesto. Fue muy fácil y rápido.",
    color: "#0369A1",
  },
  {
    name: "Roberto P.",
    location: "Houston, TX",
    initial: "R",
    text: "Necesitaba documentos notarizados urgentes y Master Tax me atendió el mismo día. Muy eficientes y siempre en español.",
    color: "#059669",
  },
  {
    name: "Ana S.",
    location: "Houston, TX",
    initial: "A",
    text: "Me ayudaron con mi ITIN y con la solicitud de DACA de mi hijo. Un equipo que de verdad entiende nuestra comunidad.",
    color: "#d97706",
  },
  {
    name: "Jorge F.",
    location: "Houston, TX",
    initial: "J",
    text: "Llevo 5 años viniendo aquí para mis taxes. Siempre salgo con el máximo reembolso posible. Los recomiendo 100%.",
    color: "#7c3aed",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <LiquidCard className="mx-2 w-[280px] shrink-0 cursor-default p-5">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>

      {/* Opening quote */}
      <span
        className="block text-3xl leading-none mb-1"
        style={{
          fontFamily: "var(--font-playfair)",
          color: t.color,
          opacity: 0.55,
          lineHeight: 1,
        }}
        aria-hidden
      >
        &ldquo;
      </span>

      {/* Text */}
      <p
        className="mb-5 text-sm leading-[1.8] text-slate-300"
        style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
      >
        {t.text}
      </p>

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm"
          style={{ background: t.color, fontFamily: "var(--font-manrope)" }}
        >
          {t.initial}
        </div>
        <div>
          <p
            className="text-sm font-bold text-white"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            {t.name}
          </p>
          <p
            className="text-[11px] text-slate-400 font-semibold"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            {t.location}
          </p>
        </div>
      </div>
    </LiquidCard>
  );
}

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="overflow-hidden py-24 md:py-32"
      style={{ background: "#020817" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span
            className="section-badge-dark mb-5 inline-flex"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
            Testimonios
          </span>
          <h2
            className="text-section-title mt-5 mb-5 text-white"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Lo que dicen{" "}
            <span
              className="text-section-accent"
              style={{
                fontFamily: "var(--font-playfair)",
                background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              nuestros clientes.
            </span>
          </h2>
          <p
            className="mx-auto max-w-xl text-base text-slate-400 leading-relaxed"
            style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
          >
            Más de 500 familias en Houston confían en Master Tax cada temporada.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-4">
        <Marquee pauseOnHover className="[--duration:32s]">
          {row1.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:38s]">
          {row2.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
