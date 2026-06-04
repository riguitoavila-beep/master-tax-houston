"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Shield, CheckCircle2, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileText,
    title: "Preparación de Taxes",
    description: "Maximizamos tu reembolso con preparación precisa y eficiente para individuos y negocios.",
    items: ["Taxes Personales (W-2, 1099)", "Negocios & Self-Employed", "Solicitud de ITIN", "Años Anteriores (Back Taxes)"],
    accent: "#0033CC",
    active: false,
    href: "/servicios/taxes",
  },
  {
    icon: Shield,
    title: "Seguros Médicos",
    description: "Te guiamos para encontrar el plan de salud perfecto y aprovechar todos los subsidios disponibles.",
    items: ["Marketplace / ACA (Obamacare)", "Comparación de planes", "Inscripción y renovación", "Subsidios disponibles"],
    accent: "#4f46e5",
    active: false,
    href: "/servicios/seguros-medicos",
  },
  {
    icon: CheckCircle2,
    title: "Servicios de Notaría",
    description: "Notarizamos y autenticamos tus documentos legales con rapidez y profesionalismo.",
    items: ["Notarización de documentos", "Cartas de permiso", "Poderes notariales", "Documentos legales generales"],
    accent: "#22d3ee",
    active: true,
    href: "/servicios/notaria",
  },
  {
    icon: Globe,
    title: "Servicios de Inmigración",
    description: "Te acompañamos en cada paso de tu proceso migratorio con profesionalismo y discreción.",
    items: ["Solicitud y renovación de ITIN", "Asesoría DACA", "Peticiones familiares", "Consultas migratorias"],
    accent: "#059669",
    active: false,
    href: "/servicios/inmigracion",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="section-badge mb-5">Nuestros Servicios</span>
          <h2 className="text-section-title mt-5 mb-5 text-slate-950">
            Todo lo que{" "}
            <span className="bg-gradient-to-r from-[#0033CC] to-[#22d3ee] bg-clip-text text-transparent">
              necesitas
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slate-500 leading-[1.75]">
            Servicios especializados para la comunidad latina en Houston.
            Rápido, confiable y siempre en tu idioma.
          </p>
        </motion.div>

        {/* Cards grid — 2×2 on md, 4 col on lg */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={service.href} className="group block h-full cursor-pointer">
                  <div
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: service.active
                        ? "linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%)"
                        : "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                      border: service.active
                        ? `1px solid ${service.accent}40`
                        : "1px solid #e2e8f0",
                      boxShadow: service.active
                        ? `0 0 0 1px ${service.accent}15, 0 4px 24px ${service.accent}10, 0 1px 3px rgba(0,0,0,0.05)`
                        : "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.border = `1px solid ${service.accent}40`;
                      el.style.boxShadow = `0 0 0 1px ${service.accent}12, 0 12px 40px ${service.accent}12`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.border = service.active ? `1px solid ${service.accent}40` : "1px solid #e2e8f0";
                      el.style.boxShadow = service.active
                        ? `0 0 0 1px ${service.accent}15, 0 4px 24px ${service.accent}10`
                        : "0 1px 3px rgba(0,0,0,0.04)";
                    }}
                  >
                    {/* Active / hover top line */}
                    <div
                      className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${service.accent}, ${service.accent}80)`,
                        opacity: service.active ? 1 : 0,
                      }}
                    />
                    <div
                      className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: `linear-gradient(90deg, ${service.accent}, ${service.accent}80)` }}
                    />

                    {/* Icon */}
                    <div
                      className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300"
                      style={{
                        background: service.active
                          ? `${service.accent}18`
                          : `${service.accent}10`,
                        border: `1px solid ${service.accent}20`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: service.accent }} strokeWidth={1.5} />
                    </div>

                    {/* Title + Arrow */}
                    <div className="mb-2.5 flex items-start justify-between gap-2">
                      <h3 className="text-card-title text-slate-900 leading-snug">{service.title}</h3>
                      <ArrowUpRight
                        className="mt-0.5 h-4 w-4 shrink-0 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: service.accent }}
                      />
                    </div>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-[1.75] text-slate-500">{service.description}</p>

                    {/* List */}
                    <ul className="mt-auto space-y-2.5">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span
                            className="flex h-px w-4 shrink-0 rounded-full opacity-50"
                            style={{ background: service.accent }}
                          />
                          <span className="text-xs text-slate-500 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ver más link */}
                    <div
                      className="mt-6 flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                      style={{ color: service.accent, opacity: 0.7 }}
                    >
                      Ver detalle
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
