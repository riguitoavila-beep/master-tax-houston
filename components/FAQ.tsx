"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurredStagger } from "@/components/ui/text-reveal-faqs";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    id: "item-1",
    q: "¿Qué documentos necesito para preparar mis taxes?",
    a: "Necesitas tu identificación oficial (pasaporte, matrícula consular o ID), número de seguro social o ITIN, formularios W-2 o 1099 de tus empleadores, y cualquier carta del IRS que hayas recibido. Si tienes negocio propio, también necesitarás registros de ingresos y gastos.",
  },
  {
    id: "item-2",
    q: "¿Puedo aplicar aunque no tenga número de seguro social?",
    a: "Sí, absolutamente. Si no tienes número de seguro social, podemos ayudarte a solicitar un ITIN (Individual Taxpayer Identification Number). Con el ITIN puedes cumplir con tus obligaciones fiscales, reclamar créditos tributarios y declarar tus impuestos correctamente.",
  },
  {
    id: "item-3",
    q: "¿Cuánto tiempo tarda mi reembolso?",
    a: "Si declaras electrónicamente y solicitas depósito directo, el IRS generalmente procesa el reembolso en 10 a 21 días hábiles. Las declaraciones en papel pueden tardar hasta 6 semanas. Nosotros te notificamos cuando tu declaración es aceptada por el IRS.",
  },
  {
    id: "item-4",
    q: "¿Qué es el ITIN y quién lo necesita?",
    a: "El ITIN es un número de identificación fiscal emitido por el IRS para personas que no califican para un número de seguro social. Lo necesitan inmigrantes que trabajan, reciben ingresos o tienen obligaciones tributarias en los Estados Unidos.",
  },
  {
    id: "item-5",
    q: "¿Cómo funciona el seguro médico del Marketplace?",
    a: "El Marketplace (ACA/Obamacare) es un sistema federal donde puedes comparar y comprar seguros médicos. Dependiendo de tus ingresos, puedes calificar para subsidios que reducen significativamente el costo de tu prima mensual. La inscripción abierta es generalmente en noviembre y diciembre.",
  },
  {
    id: "item-6",
    q: "¿Qué pasa si no hice mis taxes en años anteriores?",
    a: "Nunca es demasiado tarde para ponerte al día. Podemos preparar tus declaraciones de años pasados (back taxes), negociar planes de pago si tienes deudas con el IRS, y en muchos casos recuperar reembolsos de hasta 3 años atrás.",
  },
  {
    id: "item-7",
    q: "¿Ofrecen servicio en persona y en línea?",
    a: "Sí, ofrecemos ambas opciones. Puedes visitarnos en nuestra oficina en Houston de lunes a sábado de 9am a 7pm, o trabajar completamente en línea: documentos seguros, videollamadas y seguimiento por WhatsApp.",
  },
  {
    id: "item-8",
    q: "¿Cuándo es la temporada de taxes?",
    a: "La temporada de taxes comienza en enero y la fecha límite es generalmente el 15 de abril de cada año. Te recomendamos prepararte desde enero para evitar demoras y maximizar tu reembolso.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span
            className="section-badge mb-5 inline-flex"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Preguntas frecuentes
          </span>
          <h2
            className="text-section-title mt-5 mb-5 text-slate-950"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Respondemos tus{" "}
            <span
              className="text-section-accent"
              style={{
                fontFamily: "var(--font-manrope)",
                background: "linear-gradient(135deg, #0033CC 0%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              dudas.
            </span>
          </h2>
          <p
            className="text-base text-slate-500"
            style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
          >
            ¿No encuentras lo que buscas?{" "}
            <button
              onClick={() =>
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer font-semibold text-[#0033CC] transition-colors hover:text-[#22d3ee]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Contáctanos
            </button>
            .
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="grid gap-8 md:grid-cols-5 md:gap-14"
        >
          {/* Left label */}
          <div className="md:col-span-2">
            <h3
              className="text-2xl font-extrabold text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Todo lo que necesitas saber
            </h3>
            <p
              className="text-sm leading-relaxed text-slate-500 mb-6"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
            >
              Respondemos las dudas más comunes de nuestra comunidad latina en
              Houston sobre taxes, seguros, notaría e inmigración.
            </p>
            <a
              href="https://wa.me/13464593090"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-manrope)",
                background: "linear-gradient(135deg, #25D366, #1da851)",
                boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
              }}
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp · (346) 459-3090
            </a>
          </div>

          {/* Right accordion */}
          <div className="md:col-span-3">
            <Accordion type="single" collapsible>
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-slate-200/70 last:border-0"
                >
                  <AccordionTrigger
                    className="cursor-pointer py-5 text-left text-sm font-bold text-slate-800 hover:text-[#0033CC] hover:no-underline [&[data-state=open]]:text-[#0033CC] transition-colors"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="pb-3 pr-6 text-slate-500"
                      style={{ fontFamily: "var(--font-manrope)", fontWeight: 400 }}
                    >
                      <BlurredStagger text={item.a} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
