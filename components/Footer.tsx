"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";

const DEPT_LINKS = [
  { label: "Impuestos y Finanzas", href: "/departamentos/impuestos-finanzas", dot: "#2563eb" },
  { label: "Formas Migratorias", href: "/departamentos/formas-migratorias", dot: "#7c3aed" },
  { label: "Aseguradoras", href: "/departamentos/aseguradoras", dot: "#059669" },
  { label: "Crédito y Financiamiento", href: "/departamentos/credito-financiamiento", dot: "#d97706" },
];

const SERVICE_LINKS = [
  { label: "Preparación de Taxes", href: "/departamentos/impuestos-finanzas" },
  { label: "Seguro de Salud (ACA)", href: "/departamentos/aseguradoras" },
  { label: "Formas Migratorias", href: "/departamentos/formas-migratorias" },
  { label: "Reparación de Crédito", href: "/departamentos/credito-financiamiento" },
  { label: "Academia Online", href: "/academia" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020810 0%, #030a1a 100%)" }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,51,204,0.55) 30%, rgba(34,211,238,0.35) 60%, transparent 100%)",
        }}
      />

      {/* Ambient glow blobs */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,51,204,0.14) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full blur-3xl pointer-events-none opacity-50"
        style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)" }}
      />

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <div className="relative z-10 section-container pt-16 pb-14">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-10 md:px-12 md:py-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,51,204,0.18) 0%, rgba(0,24,153,0.25) 50%, rgba(34,211,238,0.10) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Refraction line */}
          <div
            className="absolute top-0 left-16 right-16 h-px rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }}
          />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#22d3ee]/70 mb-3"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                ¿Listo para empezar?
              </p>
              <h3
                className="text-2xl md:text-3xl font-extrabold text-white leading-tight max-w-lg"
                style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.03em" }}
              >
                Tu consulta es{" "}
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    background: "linear-gradient(135deg, #93c5fd, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  gratis.
                </span>
              </h3>
              <p
                className="mt-2 text-sm text-white/40 max-w-md"
                style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
              >
                Habla con uno de nuestros especialistas hoy mismo. Sin compromiso, sin costo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://wa.me/13464593090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  fontFamily: "var(--font-manrope)",
                  background: "linear-gradient(135deg, #25D366, #1da851)",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.32)",
                }}
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/6 px-5 py-3 text-sm font-bold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white hover:-translate-y-0.5 backdrop-blur-sm"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Formulario de Contacto
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="section-container"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      />

      {/* ── MAIN GRID ────────────────────────────────────────────────── */}
      <div className="relative z-10 section-container pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">

          {/* Brand column */}
          <div>
            <Image
              src="/logo-icon.png"
              alt="Master Tax Houston"
              width={44}
              height={44}
              className="h-11 w-11 object-contain mb-5 opacity-90"
            />
            <p
              className="text-sm text-white/35 leading-relaxed mb-3 max-w-[230px]"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
            >
              Tu agencia de confianza en Houston. 4 departamentos especializados para
              cubrir cada área de tu vida financiera y personal.
            </p>
            <p
              className="text-sm text-white/55 font-semibold mb-7"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Atención 100% en español.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://wa.me/13464593090"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                aria-label="WhatsApp"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#25D366";
                  (e.currentTarget as HTMLElement).style.border = "1px solid #25D366";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                }}
              >
                <MessageSquare className="h-4 w-4 text-white/50" />
              </a>
              <a
                href="mailto:martinez@mastertaxnotary.com"
                className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                aria-label="Email"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#0033CC";
                  (e.currentTarget as HTMLElement).style.border = "1px solid #0033CC";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                }}
              >
                <Mail className="h-4 w-4 text-white/50" />
              </a>
            </div>
          </div>

          {/* Departments */}
          <div>
            <p
              className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/25 mb-5"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Departamentos
            </p>
            <ul className="flex flex-col gap-3.5">
              {DEPT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2.5 text-[13px] text-white/40 hover:text-white font-semibold transition-colors duration-200 group"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ background: link.dot }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/25 mb-5"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Servicios
            </p>
            <ul className="flex flex-col gap-3.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/40 hover:text-white font-semibold transition-colors duration-200"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/25 mb-5"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Contacto
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#0033CC] mt-0.5 flex-shrink-0" />
                <span
                  className="text-[13px] text-white/40 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
                >
                  10910 Jones Rd Suite 2A
                  <br />
                  Houston, TX 77065
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#0033CC] flex-shrink-0" />
                <a
                  href="tel:3465897005"
                  className="text-[13px] text-white/40 hover:text-white font-semibold transition-colors"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  (346) 589-7005
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/13464593090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/40 hover:text-white font-semibold transition-colors"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  WhatsApp (346) 459-3090
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#0033CC] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:martinez@mastertaxnotary.com"
                  className="text-[13px] text-white/40 hover:text-white font-semibold transition-colors break-all"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  martinez@mastertaxnotary.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-white/25 mt-0.5 flex-shrink-0" />
                <div>
                  <p
                    className="text-[13px] text-white/40 font-semibold"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Lun – Sáb: 9am – 7pm
                  </p>
                  <p
                    className="text-[11px] text-white/22"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Horario de Houston, TX
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ───────────────────────────────────────────────── */}
      <div
        className="relative z-10 section-container py-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[11px] text-white/18 font-semibold"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            © {new Date().getFullYear()} Master Tax Houston. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <span
              className="text-[11px] text-white/14 font-medium"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              10910 Jones Rd Suite 2A, Houston TX 77065
            </span>
            <span
              className="hidden sm:inline-block h-3 w-px"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
            <span
              className="text-[11px] text-white/14 font-medium hidden sm:block"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              IRS Authorized e-File Provider
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
