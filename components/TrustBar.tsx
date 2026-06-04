"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, Lock, FileCheck, Award, Users, ShieldCheck } from "lucide-react";

const badges = [
  { icon: BadgeCheck, label: "IRS Authorized", sub: "e-file Provider" },
  { icon: FileCheck,  label: "ITIN Certified", sub: "Tax Professional" },
  { icon: Award,      label: "8+ Años",        sub: "de Experiencia" },
  { icon: Users,      label: "+500 Familias",  sub: "Atendidas" },
  { icon: Lock,       label: "SSL Seguro",     sub: "Datos Cifrados" },
  { icon: ShieldCheck,label: "100% Privado",   sub: "& Confidencial" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <section ref={ref} className="bg-[#020817] border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/20"
        >
          Credenciales &amp; Certificaciones
        </motion.p>

        {/* Badges — monochromatic, horizontal */}
        <div className="flex flex-wrap items-center justify-center gap-0">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-3 px-6 py-3 transition-all duration-200 hover:bg-white/3"
                style={{ borderRight: i < badges.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-white/30 transition-colors duration-200 group-hover:text-[#22d3ee]/70"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-xs font-semibold text-white/55 group-hover:text-white/80 transition-colors duration-200">
                    {b.label}
                  </p>
                  <p className="text-[10px] text-white/20 leading-tight">{b.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
