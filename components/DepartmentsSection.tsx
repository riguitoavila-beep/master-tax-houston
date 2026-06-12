"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Globe, Shield, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DEPARTMENTS } from "@/lib/departments-data";
import SectionHeader from "@/components/ui/SectionHeader";

const ICONS = {
  calculator: Calculator,
  globe: Globe,
  shield: Shield,
  "trending-up": TrendingUp,
};

const DEPT_CONFIG = [
  { accent: "#0033CC", lightBg: "#eff6ff", iconBg: "linear-gradient(135deg, #0033CC, #2563eb)" },
  { accent: "#7c3aed", lightBg: "#f5f3ff", iconBg: "linear-gradient(135deg, #7c3aed, #a78bfa)" },
  { accent: "#059669", lightBg: "#ecfdf5", iconBg: "linear-gradient(135deg, #059669, #34d399)" },
  { accent: "#d97706", lightBg: "#fffbeb", iconBg: "linear-gradient(135deg, #d97706, #fbbf24)" },
];

export default function DepartmentsSection() {
  const [active, setActive] = useState(0);

  const dept = DEPARTMENTS[active];
  const cfg = DEPT_CONFIG[active];
  const Icon = ICONS[dept.icon as keyof typeof ICONS] || Calculator;

  return (
    <section id="departamentos" className="relative py-28 bg-white overflow-hidden">
      {/* Ambient bg accent */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 70% 50%, ${cfg.accent}06 0%, transparent 70%)`,
        }}
      />

      <div className="section-container relative z-10">

        <SectionHeader
          badge="Nuestros Departamentos"
          title={
            <>
              4 Departamentos.{" "}
              <span
                className="text-section-accent"
                style={{ color: cfg.accent, transition: "color 0.5s ease" }}
              >
                Un Solo Lugar.
              </span>
            </>
          }
          subtitle="Especialistas dedicados en cada área para darte el mejor servicio posible. Todos bajo el mismo techo, todos en español."
        />

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {DEPARTMENTS.map((d, i) => {
            const DIcon = ICONS[d.icon as keyof typeof ICONS] || Calculator;
            const dcfg = DEPT_CONFIG[i];
            const isActive = active === i;
            return (
              <motion.button
                key={d.id}
                onClick={() => setActive(i)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`cursor-pointer flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[13px] font-bold transition-all duration-300 min-h-[44px] ${
                  isActive
                    ? "text-white shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                }`}
                style={{
                  fontFamily: "var(--font-manrope)",
                  ...(isActive ? { background: `linear-gradient(135deg, ${dcfg.accent}, ${dcfg.accent}dd)` } : {}),
                }}
              >
                <DIcon className="h-4 w-4 flex-shrink-0" />
                <span>{d.shortName}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

              {/* Left: Department info */}
              <div
                className="rounded-4xl p-8 lg:p-10 flex flex-col justify-between"
                style={{ background: cfg.lightBg, border: `1px solid ${cfg.accent}15` }}
              >
                <div>
                  {/* Icon + name */}
                  <div className="flex items-center gap-4 mb-7">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white flex-shrink-0 shadow-md"
                      style={{ background: cfg.iconBg }}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p
                        className="text-label text-slate-400 mb-0.5"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        Departamento
                      </p>
                      <h3
                        className="text-xl font-extrabold text-slate-900 leading-tight"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        {dept.name}
                      </h3>
                    </div>
                  </div>

                  <p
                    className="text-2xl font-bold mb-4 leading-snug"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: cfg.accent,
                    }}
                  >
                    {dept.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className="text-[14px] text-slate-600 leading-relaxed mb-8"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
                  >
                    {dept.description}
                  </p>

                  {/* Specialists */}
                  <div className="mb-8">
                    <p
                      className="text-label text-slate-400 mb-4"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      Especialista{dept.specialists.length > 1 ? "s" : ""}
                    </p>
                    <div className="flex flex-col gap-4">
                      {dept.specialists.map((sp) => (
                        <div key={sp.name} className="flex items-center gap-4">
                          {/* Photo avatar */}
                          <div
                            className="relative h-14 w-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-md"
                            style={{ background: cfg.iconBg }}
                          >
                            <Image
                              src={sp.photo}
                              alt={sp.name}
                              fill
                              loading="lazy"
                              className="object-cover object-[center_15%]"
                              sizes="56px"
                            />
                          </div>
                          <div>
                            <p
                              className="text-sm font-bold text-slate-800"
                              style={{ fontFamily: "var(--font-manrope)" }}
                            >
                              {sp.name}
                            </p>
                            {sp.company && (
                              <p
                                className="text-[11px] font-semibold"
                                style={{ fontFamily: "var(--font-manrope)", color: cfg.accent }}
                              >
                                {sp.company}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/departamentos/${dept.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      background: cfg.iconBg,
                      fontFamily: "var(--font-manrope)",
                      boxShadow: `0 4px 16px ${cfg.accent}30`,
                    }}
                  >
                    Ver Departamento
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                    className="cursor-pointer flex-1 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {dept.cta}
                  </button>
                </div>
              </div>

              {/* Right: Services */}
              <div
                className="rounded-4xl bg-white p-8 lg:p-10"
                style={{
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)",
                }}
              >
                <p
                  className="text-label text-slate-400 mb-7"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Servicios del Departamento
                </p>
                <div className="flex flex-col gap-2">
                  {dept.services.map((service, i) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.28 }}
                      className="group flex items-start gap-3.5 rounded-2xl p-4 transition-all duration-200 hover:bg-slate-50 cursor-default"
                    >
                      <div
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ background: `${cfg.accent}14` }}
                      >
                        <CheckCircle className="h-3.5 w-3.5" style={{ color: cfg.accent }} />
                      </div>
                      <div>
                        <p
                          className="text-sm font-bold text-slate-800 mb-0.5 group-hover:text-slate-900 leading-tight"
                          style={{ fontFamily: "var(--font-manrope)" }}
                        >
                          {service.name}
                        </p>
                        <p
                          className="text-[12px] text-slate-400 leading-relaxed"
                          style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
}
