"use client";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, ArrowRight, Calculator, Globe, Shield, TrendingUp, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Department } from "@/lib/departments-data";

const ICONS = { calculator: Calculator, globe: Globe, shield: Shield, "trending-up": TrendingUp };

const DEPT_CFG: Record<string, { accent: string; light: string; glow: string; gradient: string; gradientCss: string }> = {
  impuestos: {
    accent: "#0033CC", light: "#eff6ff", glow: "rgba(0,51,204,0.35)",
    gradient: "from-[#0033CC] to-[#2563eb]",
    gradientCss: "linear-gradient(135deg, #0033CC, #2563eb)",
  },
  migracion: {
    accent: "#7c3aed", light: "#f5f3ff", glow: "rgba(124,58,237,0.35)",
    gradient: "from-[#7c3aed] to-[#9333ea]",
    gradientCss: "linear-gradient(135deg, #7c3aed, #a78bfa)",
  },
  seguros: {
    accent: "#059669", light: "#ecfdf5", glow: "rgba(5,150,105,0.35)",
    gradient: "from-[#059669] to-[#10b981]",
    gradientCss: "linear-gradient(135deg, #059669, #34d399)",
  },
  credito: {
    accent: "#d97706", light: "#fffbeb", glow: "rgba(217,119,6,0.35)",
    gradient: "from-[#d97706] to-[#f59e0b]",
    gradientCss: "linear-gradient(135deg, #d97706, #fbbf24)",
  },
};

/* Premium animated photo frame for specialist */
function SpecialistPhotoFrame({
  photo,
  name,
  accent,
  glow,
  index,
}: {
  photo: string;
  name: string;
  accent: string;
  glow: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.15 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex justify-center"
    >
      {/* Outer glow pulse */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 }}
        className="absolute inset-0 rounded-[2rem] blur-2xl"
        style={{ background: glow }}
      />

      {/* Float animation wrapper */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 1.2 }}
        className="relative"
      >
        {/* Photo container */}
        <div className="relative w-52 h-64 rounded-[1.875rem] overflow-hidden bg-slate-100 shadow-xl">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="208px"
          />

          {/* Bottom name overlay */}
          <div
            className="absolute inset-x-0 bottom-0 px-4 py-3 z-10"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
            }}
          >
            <p
              className="text-white text-sm font-extrabold leading-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {name}
            </p>
          </div>
        </div>

        {/* Side glow line */}
        <motion.div
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 + index * 0.5 }}
          className="absolute -left-1 top-8 bottom-8 w-0.5 rounded-full"
          style={{ background: `linear-gradient(to bottom, transparent, ${accent}, transparent)` }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function DepartmentPageClient({ dept }: { dept: Department }) {
  const cfg = DEPT_CFG[dept.id] || DEPT_CFG.impuestos;
  const Icon = ICONS[dept.icon as keyof typeof ICONS] || Calculator;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-24 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #030a1a 0%, #0a1628 100%)" }}
        >
          {/* Glow blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full blur-[140px]"
              style={{ background: `radial-gradient(ellipse, ${cfg.glow} 0%, transparent 70%)` }}
            />
            <div
              className="absolute -bottom-20 right-0 h-[300px] w-[300px] rounded-full blur-[100px]"
              style={{ background: `radial-gradient(ellipse, ${cfg.glow} 0%, transparent 70%)`, opacity: 0.4 }}
            />
          </div>

          <div className="section-container relative z-10">
            <Link
              href="/#departamentos"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white/70 transition-colors mb-8"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-2xl">
                {/* Dept icon + label */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white flex-shrink-0 shadow-lg`}
                    style={{ background: cfg.gradientCss }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Departamento
                  </span>
                </div>

                <h1
                  className="text-hero text-white mb-4"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {dept.name}
                </h1>
                <p
                  className="text-base text-white/40 leading-relaxed mb-8 max-w-xl"
                  style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
                >
                  {dept.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => document.querySelector("#contacto-dept")?.scrollIntoView({ behavior: "smooth" })}
                    className="cursor-pointer inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-extrabold text-white shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5"
                    style={{ background: cfg.gradientCss, fontFamily: "var(--font-manrope)", boxShadow: `0 6px 24px ${cfg.glow}` }}
                  >
                    {dept.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="https://wa.me/13464593090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/6 px-7 py-3.5 text-sm font-extrabold text-white/70 hover:bg-white/10 hover:text-white transition-all hover:-translate-y-0.5 backdrop-blur-sm"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Tagline glass card */}
              <div className="hidden lg:block flex-shrink-0">
                <div
                  className="rounded-4xl p-8 max-w-xs"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                  }}
                >
                  <div
                    className="h-px w-full mb-6 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${cfg.accent}60, transparent)` }}
                  />
                  <p
                    className="text-xl font-bold text-white leading-snug"
                    style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                  >
                    &ldquo;{dept.tagline}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECIALISTS — premium animated frames ──────────── */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mb-14"
            >
              <span
                className="section-badge mb-4 inline-flex"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {dept.specialists.length > 1 ? "Nuestros Especialistas" : "Nuestro Especialista"}
              </span>
              <h2
                className="text-section-title text-slate-900 mt-4"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {dept.specialists.length > 1 ? "El equipo de " : "Especialista en "}
                <span
                  className="text-section-accent"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: cfg.accent,
                  }}
                >
                  {dept.shortName || dept.name}.
                </span>
              </h2>
            </motion.div>

            <div
              className={`grid gap-12 ${dept.specialists.length === 1
                ? "grid-cols-1 max-w-3xl"
                : "grid-cols-1 md:grid-cols-2"
                }`}
            >
              {dept.specialists.map((sp, i) => (
                <motion.div
                  key={sp.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-10"
                >
                  {/* Animated photo frame */}
                  <div className="flex-shrink-0">
                    <SpecialistPhotoFrame
                      photo={sp.photo}
                      name={sp.name}
                      accent={cfg.accent}
                      glow={cfg.glow}
                      index={i}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3
                      className="text-2xl font-extrabold text-slate-900 mb-1 leading-tight"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {sp.name}
                    </h3>
                    {sp.company && (
                      <p
                        className="text-sm font-bold mb-2"
                        style={{ fontFamily: "var(--font-manrope)", color: cfg.accent }}
                      >
                        {sp.company}
                      </p>
                    )}
                    <p
                      className="text-sm text-slate-400 font-semibold mb-5"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {sp.role}
                    </p>

                    <div
                      className="h-px w-16 mb-5 rounded-full mx-auto sm:mx-0"
                      style={{ background: cfg.gradientCss }}
                    />

                    <p
                      className="text-base text-slate-600 leading-relaxed mb-6"
                      style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
                    >
                      {sp.bio}
                    </p>

                    <button
                      onClick={() =>
                        document.querySelector("#contacto-dept")?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="cursor-pointer inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                      style={{
                        background: cfg.gradientCss,
                        fontFamily: "var(--font-manrope)",
                        boxShadow: `0 4px 16px ${cfg.glow}`,
                      }}
                    >
                      Consultar con {sp.name.split(" ")[0]}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────────── */}
        <section className="py-20" style={{ background: cfg.light }}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2
                className="text-section-title text-slate-900"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Todos nuestros{" "}
                <span
                  className="text-section-accent"
                  style={{ fontFamily: "var(--font-playfair)", color: cfg.accent }}
                >
                  servicios.
                </span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dept.services.map((service, i) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group rounded-3xl border border-white bg-white p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.055)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 8px rgba(0,0,0,0.03), 0 20px 48px rgba(0,0,0,0.09), 0 0 0 1px ${cfg.accent}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.055)";
                  }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl"
                    style={{ background: `${cfg.accent}12` }}
                  >
                    <CheckCircle className="h-5 w-5" style={{ color: cfg.accent }} />
                  </div>
                  <h3
                    className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-slate-800"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-sm text-slate-500 leading-relaxed"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ───────────────────────────────────── */}
        <section id="contacto-dept" className="py-24 bg-white">
          <div className="section-container max-w-3xl text-center">
            <span
              className="section-badge mb-5 inline-flex"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Agenda tu Consulta
            </span>
            <h2
              className="text-section-title text-slate-900 mb-4 mt-5"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {dept.cta}
            </h2>
            <p
              className="text-base text-slate-500 mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
            >
              Llámanos, escríbenos por WhatsApp o usa el formulario en la página principal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:3465897005"
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-extrabold text-white shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5"
                style={{ background: cfg.gradientCss, fontFamily: "var(--font-manrope)", boxShadow: `0 6px 24px ${cfg.glow}` }}
              >
                <Phone className="h-4 w-4" />
                (346) 589-7005
              </a>
              <a
                href="https://wa.me/13464593090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-7 py-3.5 text-sm font-extrabold text-white hover:opacity-90 transition-all hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-manrope)", boxShadow: "0 6px 24px rgba(37,211,102,0.3)" }}
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 px-7 py-3.5 text-sm font-extrabold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Formulario de Contacto
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
