"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { DEPARTMENTS } from "@/lib/departments-data";
import SectionHeader from "@/components/ui/SectionHeader";

const DEPT_COLORS: Record<string, { accent: string; light: string; label: string; gradient: string }> = {
  impuestos: {
    accent: "#0033CC",
    light: "#eff6ff",
    label: "Impuestos y Finanzas",
    gradient: "linear-gradient(135deg, #0033CC, #2563eb)",
  },
  migracion: {
    accent: "#7c3aed",
    light: "#f5f3ff",
    label: "Formas Migratorias",
    gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)",
  },
  seguros: {
    accent: "#059669",
    light: "#ecfdf5",
    label: "Aseguradoras",
    gradient: "linear-gradient(135deg, #059669, #34d399)",
  },
  credito: {
    accent: "#d97706",
    light: "#fffbeb",
    label: "Crédito y Financiamiento",
    gradient: "linear-gradient(135deg, #d97706, #fbbf24)",
  },
};

type SpecialistCardProps = {
  name: string;
  role: string;
  company?: string;
  photo: string;
  bio: string;
  deptId: string;
  index: number;
  objectPosition?: string;
};

function SpecialistCard({ name, role, company, photo, bio, deptId, index, objectPosition = "top" }: SpecialistCardProps) {
  const colors = DEPT_COLORS[deptId] || DEPT_COLORS.impuestos;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-4xl bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2"
      style={{
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 4px 8px rgba(0,0,0,0.03), 0 28px 64px rgba(0,0,0,0.12), 0 0 0 1px ${colors.accent}25`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)";
      }}
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)` }}
      />

      {/* PHOTO AREA — full width */}
      <div className="relative w-full h-72 overflow-hidden bg-slate-100">
        {/* Gradient overlay at bottom — soft fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 z-10"
          style={{
            background: "linear-gradient(to top, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 40%, transparent 100%)",
          }}
        />

        {/* Dept badge — top right — frosted glass */}
        <div className="absolute top-3 right-3 z-20">
          <span
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{
              background: "rgba(0,0,0,0.28)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.92)",
              fontFamily: "var(--font-manrope)",
            }}
          >
            {colors.label}
          </span>
        </div>

        {/* Photo */}
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* CONTENT */}
      <div className="px-6 pt-3 pb-6">
        {/* Name */}
        <h3
          className="text-lg font-extrabold text-slate-900 leading-tight mb-0.5"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {name}
        </h3>
        {company && (
          <p
            className="text-[12px] font-bold mb-1"
            style={{ fontFamily: "var(--font-manrope)", color: colors.accent }}
          >
            {company}
          </p>
        )}
        <p
          className="text-[12px] text-slate-400 font-semibold mb-4"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {role}
        </p>

        {/* Divider */}
        <div
          className="h-px w-full mb-4"
          style={{ background: `linear-gradient(90deg, ${colors.accent}20, transparent)` }}
        />

        {/* Bio */}
        <p
          className="text-sm text-slate-500 leading-relaxed"
          style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
        >
          {bio}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const allSpecialists = DEPARTMENTS.flatMap((dept) =>
    dept.specialists.map((sp) => ({ ...sp, deptId: dept.id }))
  );

  return (
    <section id="equipo" className="py-28 bg-slate-50/60">
      <div className="section-container">

        <SectionHeader
          badge="Nuestro Equipo"
          title={
            <>
              Expertos{" "}
              <span
                className="text-section-accent"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Reales.
              </span>
              <br />
              Resultados Reales.
            </>
          }
          subtitle="Cada departamento tiene su especialista dedicado. Conoce a las personas que van a trabajar para ti."
        />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSpecialists.map((sp, i) => (
            <SpecialistCard
              key={`${sp.name}-${i}`}
              name={sp.name}
              role={sp.role}
              company={sp.company}
              photo={sp.photo}
              bio={sp.bio}
              deptId={sp.deptId}
              index={i}
              objectPosition={sp.name === "Erika Martinez" ? "center 8%" : "top"}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p
            className="text-sm text-slate-400 mb-5 font-semibold"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            ¿No sabes con qué departamento empezar?
          </p>
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="cursor-pointer inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-manrope)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            Contáctanos y te orientamos
          </button>
        </motion.div>

      </div>
    </section>
  );
}
