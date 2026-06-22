"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, BookOpen, Users, Star, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { COURSES } from "@/lib/courses-data";

const FORMAT_ICON = {
  Video: Play,
  "Mentoría 1:1": Users,
  Grupal: Users,
  Híbrido: Zap,
};

const LEVEL_COLOR = {
  Principiante: { bg: "#ecfdf5", text: "#059669" },
  Intermedio: { bg: "#eff6ff", text: "#0033CC" },
  Avanzado: { bg: "#fef3c7", text: "#d97706" },
};

function CourseCard({ course, index }: { course: (typeof COURSES)[0]; index: number }) {
  const [loading, setLoading] = useState(false);
  const lvlColor = LEVEL_COLOR[course.level];
  const FmtIcon = FORMAT_ICON[course.format] || Play;

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: course.id, courseSlug: course.slug }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Error al procesar. Por favor llámanos al 346-589-7005.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="course-card group flex flex-col"
    >
      {/* Thumbnail area */}
      <div
        className="relative h-44 rounded-t-3xl flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #030a1a 0%, #0a1628 100%)" }}
      >
        {course.featured && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#f59e0b] px-3 py-1 text-[10px] font-extrabold text-white uppercase tracking-wide">
            <Star className="h-3 w-3 fill-current" />
            {course.badge}
          </div>
        )}
        {/* Coming Soon overlay */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <FmtIcon className="h-7 w-7 text-white/80" />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-1.5 rounded-full bg-[#0033CC]/30 border border-[#60a5fa]/30 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
              <span className="text-[10px] font-extrabold text-[#93c5fd] uppercase tracking-widest">Próximamente</span>
            </div>
            <p className="text-[10px] text-white/30">{course.format}</p>
          </div>
        </div>

        {/* Department label */}
        <div className="absolute bottom-4 right-4 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 px-3 py-1">
          <p className="text-[10px] font-bold text-white/50">{course.department}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta row */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="rounded-xl px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider"
            style={{ background: lvlColor.bg, color: lvlColor.text }}
          >
            {course.level}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400 font-semibold">
            <Clock className="h-3 w-3" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400 font-semibold">
            <BookOpen className="h-3 w-3" />
            {course.modules.length} módulos
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-extrabold text-slate-900 mb-1.5 leading-snug group-hover:text-[#0033CC] transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-slate-400 mb-4 font-medium leading-relaxed">{course.subtitle}</p>

        {/* Instructor */}
        <div className="flex items-center gap-2.5 mb-5 pb-5 border-b border-slate-100">
          <div className="h-8 w-8 rounded-xl bg-[#0033CC] flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0">
            {course.instructor.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
          <div>
            <p className="text-xs font-bold text-slate-700">{course.instructor}</p>
            <p className="text-[10px] text-slate-400">{course.instructorRole}</p>
          </div>
        </div>

        {/* Includes */}
        <div className="flex-1 mb-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Incluye:</p>
          <ul className="flex flex-col gap-1.5">
            {course.includes.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                <span className="mt-0.5 h-3.5 w-3.5 rounded-full bg-[#0033CC]/10 flex items-center justify-center flex-shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0033CC]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-2xl font-extrabold text-slate-900">
              ${course.price}
              <span className="text-sm font-semibold text-slate-400"> USD</span>
            </p>
            <p className="text-[10px] text-slate-400">Pago único · Acceso inmediato</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleBuy}
            disabled={loading}
            className="cursor-pointer inline-flex items-center gap-1.5 rounded-full bg-[#0033CC] px-4 py-2.5 text-xs font-extrabold text-white shadow-[0_4px_16px_rgba(0,51,204,0.35)] hover:bg-[#001899] disabled:opacity-60 transition-all duration-200"
          >
            {loading ? (
              <svg className="h-3.5 w-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <>
                Comprar
                <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function AcademiaSection() {
  return (
    <section id="academia" className="py-28 bg-white overflow-hidden">
      <div className="section-container">

        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge mb-5" style={{ fontFamily: "var(--font-manrope)" }}>Master Tax Academia</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-section-title text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Aprende de{" "}
            <span
              className="text-section-accent"
              style={{
                fontFamily: "var(--font-manrope)",
                background: "linear-gradient(135deg, #2563eb 0%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nuestros Expertos.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="max-w-2xl mx-auto text-base text-slate-500 leading-relaxed"
          >
            Cursos en video y mentorías 1:1 para que tú también domines los temas que
            más impactan tu vida financiera. Pago único, acceso de por vida.
          </motion.p>
        </div>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {[
            { icon: Play, text: "Video cursos en español" },
            { icon: Users, text: "Mentorías 1:1 privadas" },
            { icon: BookOpen, text: "Material descargable" },
            { icon: Zap, text: "Acceso inmediato tras el pago" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-500">
              <Icon className="h-3.5 w-3.5 text-[#0033CC]" />
              {text}
            </span>
          ))}
        </motion.div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        {/* See all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <Link
            href="/academia"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#0033CC] px-8 py-3.5 text-sm font-extrabold text-[#0033CC] hover:bg-[#0033CC] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,51,204,0.25)]"
          >
            Ver Todos los Cursos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Stripe trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 text-xs text-slate-400 font-semibold">
            <svg className="h-4 w-4" viewBox="0 0 32 32" fill="none">
              <path d="M14.933 13.213c0-.88.72-1.227 1.92-1.24 1.707.027 3.413.533 4.88 1.44V9.573a12.96 12.96 0 00-4.88-.893c-4 0-6.667 2.08-6.667 5.56 0 5.427 7.467 4.547 7.467 6.88 0 1.04-.907 1.387-2.16 1.387-1.867 0-3.747-.773-5.413-1.787v3.893c1.84.8 3.693 1.12 5.413 1.12 4.107 0 6.933-2.027 6.933-5.547-.013-5.853-7.493-4.8-7.493-6.973z" fill="#635BFF"/>
            </svg>
            Pagos seguros procesados por Stripe · SSL · No guardamos tu tarjeta
          </span>
        </motion.div>

      </div>
    </section>
  );
}
