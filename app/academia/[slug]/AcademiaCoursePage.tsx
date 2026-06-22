"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle, Star, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Course } from "@/lib/courses-data";

export default function AcademiaCoursePage({ course }: { course: Course }) {
  const [loading, setLoading] = useState(false);

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
      alert("Error al procesar. Llámanos al (346) 589-7005.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(160deg, #030a1a 0%, #0a1628 100%)" }}>
          <div className="section-container relative z-10">
            <Link href="/academia" className="inline-flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white/70 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Volver a Academia
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Left */}
              <div className="lg:col-span-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-bold text-white/40 uppercase tracking-wider mb-6">
                  {course.format} · {course.department}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">{course.title}</h1>
                <p className="text-lg text-white/40 mb-8">{course.subtitle}</p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-[#0033CC] flex items-center justify-center text-white text-sm font-extrabold">
                      {course.instructor.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/80">{course.instructor}</p>
                      <p className="text-xs text-white/40">{course.instructorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-white/40">
                    <Clock className="h-4 w-4" />{course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-white/40">
                    <BookOpen className="h-4 w-4" />{course.modules.length} módulos
                  </div>
                </div>
              </div>

              {/* Right: Buy card */}
              <div className="rounded-3xl border border-white/8 bg-white/6 backdrop-blur-sm p-6">
                <p className="text-3xl font-extrabold text-white mb-1">${course.price} <span className="text-base font-semibold text-white/40">USD</span></p>
                <p className="text-xs text-white/30 mb-6">Pago único · Acceso inmediato de por vida</p>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBuy}
                  disabled={loading}
                  className="cursor-pointer w-full rounded-2xl bg-[#0033CC] py-4 text-sm font-extrabold text-white shadow-[0_4px_24px_rgba(0,51,204,0.4)] hover:bg-[#001899] disabled:opacity-60 transition-all mb-4 flex items-center justify-center gap-2"
                >
                  {loading ? "..." : <><Star className="h-4 w-4 fill-current" /> Inscribirme Ahora — ${course.price}</>}
                </motion.button>
                <p className="text-[10px] text-white/25 text-center mb-5">Pagos seguros por Stripe · Sin cargos ocultos</p>
                <ul className="flex flex-col gap-2">
                  {course.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/45">
                      <CheckCircle className="h-3.5 w-3.5 text-[#059669] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Course content */}
        <section className="py-20">
          <div className="section-container grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">

              {/* Video Coming Soon */}
              <div className="mb-12 rounded-3xl overflow-hidden border border-slate-100 bg-gradient-to-br from-slate-900 to-[#0a1628] aspect-video flex flex-col items-center justify-center gap-4 relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #0033CC 0%, transparent 70%)" }} />
                <div className="relative flex flex-col items-center gap-4 text-center px-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white/60" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#0033CC]/40 border border-[#60a5fa]/30 px-4 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#60a5fa] animate-pulse" />
                    <span className="text-xs font-extrabold text-[#93c5fd] uppercase tracking-widest">Contenido Próximamente</span>
                  </div>
                  <p className="text-sm text-white/40 max-w-xs leading-relaxed">
                    Los videos de este curso estarán disponibles muy pronto. Una vez publicados tendrás acceso inmediato.
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-12">
                <h2 className="text-xl font-extrabold text-slate-900 mb-4">Sobre Este Curso</h2>
                <p className="text-sm text-slate-500 leading-relaxed">{course.description}</p>
              </div>

              {/* Modules */}
              <div className="mb-12">
                <h2 className="text-xl font-extrabold text-slate-900 mb-5">Contenido del Curso</h2>
                <div className="flex flex-col gap-3">
                  {course.modules.map((mod, i) => (
                    <motion.div
                      key={mod}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#0033CC]/8 text-xs font-extrabold text-[#0033CC]">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm font-semibold text-slate-700">{mod}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instructor sidebar */}
            <div>
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sticky top-24">
                <h3 className="text-sm font-extrabold text-slate-900 mb-5">Tu Instructor</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-3xl bg-[#0033CC] flex items-center justify-center text-white text-lg font-extrabold flex-shrink-0 overflow-hidden relative">
                    <Image src={course.instructorPhoto} alt={course.instructor} width={64} height={64} className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    <span className="absolute inset-0 flex items-center justify-center">{course.instructor.split(" ").map((n) => n[0]).slice(0, 2).join("")}</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900">{course.instructor}</p>
                    <p className="text-xs text-slate-400">{course.instructorRole}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">Especialista con años de experiencia ayudando a la comunidad hispana en Houston.</p>
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBuy}
                  disabled={loading}
                  className="cursor-pointer w-full rounded-2xl bg-[#0033CC] py-3.5 text-sm font-extrabold text-white shadow-[0_4px_16px_rgba(0,51,204,0.3)] hover:bg-[#001899] disabled:opacity-60 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? "..." : <><ArrowRight className="h-4 w-4" /> Inscribirme — ${course.price}</>}
                </motion.button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
