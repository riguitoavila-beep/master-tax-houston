"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Calculator, Globe, Shield, TrendingUp, ArrowRight } from "lucide-react";

const DEPT_PREVIEW = [
  {
    icon: Calculator,
    name: "Impuestos y Finanzas",
    specialist: "Eduardo Martinez",
    services: [
      "Taxes Personales",
      "Taxes Corporativos",
      "Asesoría Fiscal",
      "Creación de LLC",
      "Contabilidad",
    ],
    color: "#3b82f6",
    dimColor: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.22)",
    glow: "rgba(59,130,246,0.28)",
  },
  {
    icon: Globe,
    name: "Formas Migratorias",
    specialist: "Erika Martinez",
    services: [
      "Formas USCIS",
      "Traducción Certificada",
      "Notarización",
      "Poderes Notariales",
      "Oficios de Boda",
    ],
    color: "#a78bfa",
    dimColor: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.22)",
    glow: "rgba(124,58,237,0.28)",
  },
  {
    icon: Shield,
    name: "Aseguradoras",
    specialist: "Alfredo R. · Rafael S.",
    services: [
      "Seguro de Salud",
      "Seguro de Vida",
      "Seguro de Autos",
      "Seguro de Casa",
      "Seguro de Negocio",
    ],
    color: "#34d399",
    dimColor: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.22)",
    glow: "rgba(5,150,105,0.28)",
  },
  {
    icon: TrendingUp,
    name: "Crédito y Financiamiento",
    specialist: "Jonatan M. · Aristides M.",
    services: [
      "Reparación de Crédito",
      "Disputas en Burós",
      "Negociación de Deudas",
      "Crédito Empresarial",
      "Preparación para Préstamos",
    ],
    color: "#fbbf24",
    dimColor: "rgba(251,191,36,0.12)",
    border: "rgba(251,191,36,0.22)",
    glow: "rgba(217,119,6,0.28)",
  },
];

export default function HeroScroll() {
  return (
    <div
      id="hero-scroll"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #030a1a 0%, #0c1220 50%, #f8fafc 100%)" }}
    >
      <ContainerScroll
        titleComponent={
          <div className="mb-6 text-center px-4">
            <span
              className="section-badge-dark mb-6 inline-flex"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
              4 Departamentos · Un Solo Lugar
            </span>
            <h2
              className="text-section-title text-white mb-5"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Todo lo que necesitas{" "}
              <br className="hidden sm:block" />
              <span
                className="text-section-accent"
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "var(--font-playfair)",
                }}
              >
                en un solo lugar.
              </span>
            </h2>
            <p
              className="text-base text-white/38 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
            >
              Especialistas reales, servicios reales. Atención personalizada en español
              para toda la comunidad hispana de Houston.
            </p>
          </div>
        }
      >
        {/* Tablet screen content */}
        <div
          className="h-full w-full overflow-hidden flex flex-col"
          style={{ background: "linear-gradient(160deg, #020a18 0%, #050e1f 100%)" }}
        >
          {/* Browser chrome */}
          <div
            className="flex items-center gap-2 px-4 py-2.5 border-b flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
            </div>
            <div
              className="flex-1 mx-3 flex items-center justify-center rounded-md px-3 py-1"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="text-[10px] text-white/28 font-semibold tracking-wide" style={{ fontFamily: "var(--font-manrope)" }}>
                mastertaxnotary.com
              </span>
            </div>
            <div className="w-12" />
          </div>

          {/* Dashboard header */}
          <div
            className="flex items-center justify-between px-4 py-2 flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.018)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
          >
            <span className="text-[10px] font-extrabold text-white/55 tracking-wider uppercase" style={{ fontFamily: "var(--font-manrope)" }}>
              Master Tax · Servicios
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
              <span className="text-[9px] text-white/35 font-semibold" style={{ fontFamily: "var(--font-manrope)" }}>En línea</span>
            </div>
          </div>

          {/* Cards grid */}
          <div className="flex-1 overflow-hidden p-3 grid grid-cols-2 gap-2.5">
            {DEPT_PREVIEW.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.name}
                  className="rounded-2xl flex flex-col overflow-hidden relative"
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    border: `1px solid ${dept.border}`,
                  }}
                >
                  {/* Top glow accent */}
                  <div
                    className="absolute -top-8 -right-8 h-20 w-20 rounded-full blur-2xl pointer-events-none"
                    style={{ background: dept.glow, opacity: 0.5 }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${dept.color}70, transparent)` }}
                  />

                  {/* Card header */}
                  <div
                    className="flex items-center gap-2 px-3 pt-3 pb-2.5"
                    style={{ borderBottom: `1px solid rgba(255,255,255,0.05)` }}
                  >
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-xl flex-shrink-0"
                      style={{ background: dept.dimColor, border: `1px solid ${dept.border}` }}
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: dept.color }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9.5px] font-extrabold leading-tight truncate" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-manrope)" }}>
                        {dept.name}
                      </p>
                      <p className="text-[7.5px] leading-tight truncate" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-manrope)", fontWeight: 600 }}>
                        {dept.specialist}
                      </p>
                    </div>
                  </div>

                  {/* Services list */}
                  <div className="flex flex-col gap-1.5 px-3 py-2.5 flex-1 relative z-10">
                    {dept.services.map((service) => (
                      <div key={service} className="flex items-center gap-1.5">
                        <div
                          className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ background: dept.color }}
                        />
                        <span
                          className="text-[8.5px] font-semibold leading-none"
                          style={{ color: "rgba(255,255,255,0.62)", fontFamily: "var(--font-manrope)" }}
                        >
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="px-3 pb-2.5 relative z-10">
                    <div
                      className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[7.5px] font-bold"
                      style={{
                        background: dept.dimColor,
                        color: dept.color,
                        border: `1px solid ${dept.border}`,
                      }}
                    >
                      Ver servicios
                      <ArrowRight className="h-2 w-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats bar */}
          <div
            className="flex items-center justify-around px-4 py-2.5 flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            {[
              { label: "Clientes", value: "+500" },
              { label: "Departamentos", value: "4" },
              { label: "Años", value: "10+" },
              { label: "Servicios", value: "20+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[11px] font-extrabold text-white/80" style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.03em" }}>
                  {stat.value}
                </p>
                <p className="text-[7px] text-white/28 font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-manrope)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
