"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FileText, Globe, Heart, Stamp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Preparación de Taxes",
    desc: "Federal & estatal, W-2, 1099, autónomos y más.",
    color: "from-[#0033CC] to-[#1a6fff]",
    glow: "rgba(0,51,204,0.4)",
    accent: "#60a5fa",
  },
  {
    icon: Globe,
    title: "Inmigración",
    desc: "ITIN, DACA, peticiones y trámites migratorios.",
    color: "from-[#6d28d9] to-[#8b5cf6]",
    glow: "rgba(109,40,217,0.4)",
    accent: "#a78bfa",
  },
  {
    icon: Heart,
    title: "Seguros Médicos",
    desc: "Marketplace, ACA/Obamacare y planes familiares.",
    color: "from-[#0369a1] to-[#0ea5e9]",
    glow: "rgba(3,105,161,0.4)",
    accent: "#38bdf8",
  },
  {
    icon: Stamp,
    title: "Notaría",
    desc: "Documentos legales, apostillas y certificaciones.",
    color: "from-[#065f46] to-[#10b981]",
    glow: "rgba(6,95,70,0.4)",
    accent: "#34d399",
  },
];

// Duplicate for seamless infinite loop
const loopServices = [...services, ...services, ...services];

export default function LogoScroll() {
  return (
    <div className="bg-white overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-6">
            <span className="section-badge mb-5">Nuestros Servicios</span>
            <h2 className="text-section-title mt-5 text-gray-950">
              Todo lo que necesitas{" "}
              <span className="bg-gradient-to-r from-[#0033CC] to-[#1a6fff] bg-clip-text text-transparent">
                en un solo lugar
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Más de 500 familias latinas en Houston confían en nosotros cada temporada.
            </p>
          </div>
        }
      >
        {/* Inner tablet screen */}
        <div className="relative flex h-full w-full flex-col justify-center overflow-hidden bg-[#030B1A]">
          {/* Background orbs */}
          <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-[#0033CC]/20 blur-[70px] pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#1a6fff]/15 blur-[70px] pointer-events-none" />

          {/* Header inside screen */}
          <div className="relative z-10 mb-5 px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
              Master Tax Houston · Servicios
            </p>
          </div>

          {/* Carousel track */}
          <div className="relative z-10 overflow-hidden">
            {/* Left/right fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#030B1A] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#030B1A] to-transparent" />

            <motion.div
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex gap-4 px-4"
              style={{ width: "max-content" }}
            >
              {loopServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="relative w-52 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 p-5"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)`,
                    }}
                  >
                    {/* Glass inner highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/8 to-transparent" />

                    {/* Glow behind icon */}
                    <div
                      className="absolute -top-4 -left-4 h-24 w-24 rounded-full blur-2xl opacity-60"
                      style={{ background: service.glow }}
                    />

                    {/* Icon */}
                    <div className={`relative mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}>
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="mb-1.5 text-sm font-bold text-white leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs leading-relaxed text-white/45">
                      {service.desc}
                    </p>

                    {/* Arrow */}
                    <div className="mt-3 flex items-center gap-1" style={{ color: service.accent }}>
                      <span className="text-xs font-semibold">Ver más</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-10 mt-5 flex items-center justify-center gap-2 px-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="h-1 w-6 rounded-full bg-white/15"
              />
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
