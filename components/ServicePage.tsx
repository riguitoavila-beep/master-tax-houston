"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CheckCircle,
  FileText, Shield, CheckCircle2, Globe,
  Zap, BadgeCheck, Clock, Lock, Users, PhoneCall,
  type LucideIcon,
} from "lucide-react";
import { StarsBackground } from "@/components/ui/stars";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurredStagger } from "@/components/ui/text-reveal-faqs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import type { ServiceData } from "@/lib/services-data";

const iconMap: Record<string, LucideIcon> = {
  FileText, Shield, CheckCircle2, Globe,
  Zap, BadgeCheck, Clock, Lock, Users, PhoneCall,
};

function getIcon(key: string): LucideIcon {
  return iconMap[key] ?? FileText;
}


export default function ServicePage({ data }: { data: ServiceData }) {
  const Icon = getIcon(data.iconKey);

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────── */}
        <StarsBackground className="relative min-h-[75vh] w-full flex items-center" speed={55} factor={0.03}>
          {/* Orbs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full blur-[140px]"
              style={{ background: `${data.accent}20` }}
            />
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-20 right-0 h-[500px] w-[500px] rounded-full blur-[130px]"
              style={{ background: `${data.accentLight}15` }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
            {/* Back */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <Link
                href="/#servicios"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/35 transition-colors hover:text-white/70"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Todos los servicios
              </Link>
            </motion.div>

            {/* Icon badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: data.accent }}>
                <Icon className="h-3.5 w-3.5 text-white" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                {data.title}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-hero mb-6 text-balance text-white"
            >
              {data.tagline.split(" ").slice(0, -2).join(" ")}{" "}
              <span
                className="italic"
                style={{
                  background: `linear-gradient(135deg, ${data.accentLight}, ${data.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {data.tagline.split(" ").slice(-2).join(" ")}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-10 max-w-2xl text-lg leading-[1.8] text-white/45"
            >
              {data.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="flex flex-wrap gap-3"
            >
              <ShinyButton
                variant="blue"
                onClick={() => document.querySelector("#contacto-servicio")?.scrollIntoView({ behavior: "smooth" })}
              >
                Consulta Gratis
                <ArrowRight className="h-4 w-4" />
              </ShinyButton>
              <ShinyButton variant="dark" onClick={() => document.querySelector("#como-funciona")?.scrollIntoView({ behavior: "smooth" })}>
                Cómo funciona
              </ShinyButton>
            </motion.div>
          </div>
        </StarsBackground>

        {/* ── BENEFITS ─────────────────────────── */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.benefits.map((b, i) => {
                const BIcon = getIcon(b.iconKey);
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl p-6"
                    style={{
                      background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: `${data.accent}12`, border: `1px solid ${data.accent}20` }}
                    >
                      <BIcon className="h-4.5 w-4.5" style={{ color: data.accent }} strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-1.5 text-sm font-bold text-slate-900">{b.title}</h3>
                    <p className="text-sm leading-[1.7] text-slate-500">{b.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── INCLUDED ─────────────────────────── */}
        <section className="bg-[#F8FAFC] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 text-center"
            >
              <span className="section-badge mb-4">Qué incluye</span>
              <h2 className="text-section-title mt-4 text-slate-950">
                Todo lo que <span style={{
                  background: `linear-gradient(135deg, ${data.accent}, ${data.accentLight})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>cubrimos</span>
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {data.included.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl bg-white p-7"
                  style={{ border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="mb-1 inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: `${data.accent}12`, color: data.accent }}
                  >
                    {group.title}
                  </div>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: data.accent, opacity: 0.7 }} strokeWidth={2} />
                        <span className="text-sm leading-snug text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────── */}
        <section id="como-funciona" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mb-14 text-center"
            >
              <span className="section-badge mb-4">Proceso</span>
              <h2 className="text-section-title mt-4 text-slate-950">Cómo funciona</h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Connector line */}
                  {i < data.steps.length - 1 && (
                    <div
                      className="absolute top-5 left-full hidden h-px w-full -translate-x-3 lg:block"
                      style={{ background: `linear-gradient(90deg, ${data.accent}30, transparent)` }}
                    />
                  )}
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: data.accent }}
                  >
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-[1.75] text-slate-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────── */}
        <section className="bg-[#F8FAFC] py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <span className="section-badge mb-4">FAQ</span>
              <h2 className="text-section-title mt-4 text-slate-950">
                Preguntas{" "}
                <span style={{
                  background: `linear-gradient(135deg, ${data.accent}, ${data.accentLight})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>frecuentes</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="grid gap-8 md:grid-cols-5 md:gap-12"
            >
              {/* Left label */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Todo lo que necesitas saber
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-500">
                  Resolvemos las dudas más comunes sobre{" "}
                  <span className="font-medium" style={{ color: data.accent }}>{data.title}</span>.
                </p>
                <p className="mt-6 hidden text-sm text-slate-400 md:block">
                  ¿Tienes otra pregunta?{" "}
                  <button
                    onClick={() => document.querySelector("#contacto-servicio")?.scrollIntoView({ behavior: "smooth" })}
                    className="cursor-pointer font-medium hover:underline"
                    style={{ color: data.accent }}
                  >
                    Contáctanos gratis
                  </button>
                  .
                </p>
              </div>

              {/* Right accordion */}
              <div className="md:col-span-3">
                <Accordion type="single" collapsible>
                  {data.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-slate-200 last:border-0"
                    >
                      <AccordionTrigger
                        className="cursor-pointer py-5 text-left text-sm font-semibold text-slate-800 hover:no-underline"
                        style={{ "--accent": data.accent } as React.CSSProperties}
                      >
                        <span className="hover:text-[var(--accent)] transition-colors duration-150 [.group[data-state=open]_&]:text-[var(--accent)]">
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pb-2 pr-6 text-slate-500">
                          <BlurredStagger text={faq.a} />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────── */}
        <StarsBackground id="contacto-servicio" className="py-24 md:py-32" speed={65} factor={0.03}>
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-badge mb-6" style={{ borderColor: `${data.accent}30`, background: `${data.accent}10`, color: data.accentLight }}>
                {data.title}
              </span>
              <h2 className="text-section-title mt-5 mb-5 text-white">
                ¿Listo para{" "}
                <span style={{
                  background: `linear-gradient(135deg, ${data.accentLight}, ${data.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>comenzar?</span>
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-[1.75] text-white/45">
                Contáctanos hoy y recibe una consulta gratuita. Estamos aquí para
                ayudarte en español, sin complicaciones.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <ShinyButton
                  variant="blue"
                  onClick={() => window.location.href = "/#contacto"}
                >
                  Contactar Ahora
                  <ArrowRight className="h-4 w-4" />
                </ShinyButton>
                <ShinyButton variant="dark" onClick={() => window.location.href = "/#servicios"}>
                  Ver todos los servicios
                </ShinyButton>
              </div>
            </motion.div>
          </div>
        </StarsBackground>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
