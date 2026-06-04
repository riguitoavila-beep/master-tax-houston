"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Lock, MessageSquare, Smartphone } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const features = [
  {
    icon: Zap,
    title: "Rápido y Eficiente",
    description: "Procesamos tu declaración en el menor tiempo posible. Tu reembolso llega lo antes que la ley permite.",
    accent: "#d4a853",
  },
  {
    icon: Lock,
    title: "100% Confidencial",
    description: "Tu información personal y financiera está protegida bajo estrictos protocolos de seguridad.",
    accent: "#22d3ee",
  },
  {
    icon: MessageSquare,
    title: "Atención en Español",
    description: "Te explicamos todo en tu idioma con claridad. Sin tecnicismos, sin confusiones, con respeto.",
    accent: "#0033CC",
  },
  {
    icon: Smartphone,
    title: "Servicio Digital",
    description: "Trabaja con nosotros desde casa o visítanos en nuestra oficina en Houston.",
    accent: "#818cf8",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-badge mb-6">¿Por qué elegirnos?</span>
            <h2 className="text-section-title mt-5 mb-6 text-slate-950">
              No somos una{" "}
              <span className="bg-gradient-to-r from-[#0033CC] to-[#22d3ee] bg-clip-text text-transparent">
                oficina de taxes
              </span>{" "}
              tradicional
            </h2>
            <p className="mb-10 text-lg leading-[1.8] text-slate-500">
              Somos una agencia moderna orientada a la comunidad latina de
              Houston. Combinamos tecnología, experiencia y atención humana para
              darte el mejor servicio posible.
            </p>

            <ShinyButton
              variant="blue"
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Habla con nosotros
            </ShinyButton>

            {/* Gold accent stat */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <div className="text-center">
                <p className="text-2xl font-bold tracking-tight" style={{ color: "#d4a853" }}>8+</p>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Años de confianza</p>
              </div>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
          </motion.div>

          {/* Right: 2×2 grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group cursor-default rounded-2xl p-6 transition-all duration-300"
                  style={{
                    background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.border = `1px solid ${f.accent}30`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${f.accent}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.border = "1px solid #e2e8f0";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: `${f.accent}12`,
                      border: `1px solid ${f.accent}20`,
                    }}
                  >
                    <Icon className="h-4.5 w-4.5" style={{ color: f.accent }} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-slate-900">{f.title}</h3>
                  <p className="text-sm leading-[1.7] text-slate-500">{f.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
