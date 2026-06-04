import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademiaSection from "@/components/AcademiaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academia | Master Tax Houston — Cursos y Mentorías",
  description:
    "Aprende de nuestros expertos. Cursos en video y mentorías 1:1 sobre impuestos, crédito y finanzas personales. Atención en español.",
};

export default function AcademiaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #030a1a 0%, #0a1628 100%)" }}
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(ellipse, #0033CC 0%, transparent 70%)" }} />
          <div className="section-container relative z-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 backdrop-blur-sm mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
              Master Tax Academia
            </span>
            <h1 className="text-hero text-white mb-5">
              Aprende de los{" "}
              <span style={{ background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Expertos
              </span>
            </h1>
            <p className="max-w-xl mx-auto text-lg text-white/40 leading-relaxed">
              Cursos en video y mentorías 1:1 para dominar los temas que más impactan tu vida financiera.
              Pago único, acceso de por vida, todo en español.
            </p>
          </div>
        </section>

        {/* Courses */}
        <AcademiaSection />
      </main>
      <Footer />
    </>
  );
}
