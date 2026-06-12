"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, CheckCircle, Calculator, Globe, Shield, TrendingUp, Send } from "lucide-react";

const DEPARTMENTS = [
  { value: "impuestos-finanzas", label: "Impuestos y Finanzas", icon: Calculator, color: "#0033CC" },
  { value: "formas-migratorias", label: "Formas Migratorias", icon: Globe, color: "#7c3aed" },
  { value: "aseguradoras", label: "Aseguradoras", icon: Shield, color: "#059669" },
  { value: "credito-financiamiento", label: "Crédito y Financiamiento", icon: TrendingUp, color: "#d97706" },
];

const SERVICES: Record<string, string[]> = {
  "impuestos-finanzas": [
    "Preparación de Taxes Personales",
    "Taxes Corporativos",
    "Asesoría Fiscal",
    "Creación de Compañía",
    "Contabilidad para Negocios",
  ],
  "formas-migratorias": [
    "Preparación de Formas Migratorias",
    "Traducción de Documentos",
    "Notarización",
    "Poderes Notariales",
    "Oficiante de Boda",
  ],
  aseguradoras: [
    "Seguro de Salud",
    "Seguro de Vida",
    "Seguro de Autos",
    "Seguro de Vehículos Comerciales",
    "Seguro de Casa",
    "Seguro de Negocios",
  ],
  "credito-financiamiento": [
    "Revisión de Reporte de Crédito",
    "Disputas de Errores en Burós",
    "Eliminación de Cuentas Negativas",
    "Ayuda con Cuentas en Colección",
    "Negociación de Deudas y Settlements",
    "Construcción de Puntaje de Crédito",
    "Monitoreo de Crédito",
    "Preparación para Financiamientos",
    "Crédito Empresarial",
  ],
};

type FormData = {
  name: string;
  phone: string;
  email: string;
  department: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    department: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const serviceOptions = form.department ? SERVICES[form.department] : [];

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
      ...(key === "department" ? { service: "" } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.department) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-28 bg-slate-50/60">
      <div className="section-container">

        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="section-badge mb-5">Contáctanos</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-section-title text-slate-900 mb-4">
            Estamos Aquí{" "}
            <span className="text-gradient-blue">Para Ti.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.18 }} className="max-w-xl mx-auto text-base text-slate-500 leading-relaxed">
            Selecciona tu departamento, cuéntanos lo que necesitas y te contactamos en menos de 24 horas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="lg:col-span-2 flex flex-col gap-4">

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0033CC]/8">
                  <MapPin className="h-5 w-5 text-[#0033CC]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Dirección</p>
                  <p className="text-sm font-bold text-slate-800">10910 Jones Rd Suite 2A</p>
                  <p className="text-sm text-slate-500">Houston, Texas 77065</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0033CC]/8">
                  <Phone className="h-5 w-5 text-[#0033CC]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Teléfono</p>
                  <a href="tel:3465897005" className="text-sm font-bold text-slate-800 hover:text-[#0033CC] transition-colors block">
                    (346) 589-7005
                  </a>
                </div>
              </div>
            </div>

            <a href="https://wa.me/13464593090" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-3xl border border-[#25D366]/25 bg-[#f0fdf4] p-6 shadow-card hover:border-[#25D366]/50 transition-colors group">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#25D366]">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#059669]/60 mb-1">WhatsApp</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-[#059669] transition-colors">(346) 459-3090</p>
                <p className="text-xs text-slate-400 mt-0.5">Respuesta rápida · Lun–Sáb</p>
              </div>
            </a>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0033CC]/8">
                  <Mail className="h-5 w-5 text-[#0033CC]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email</p>
                  <a href="mailto:martinez@mastertaxnotary.com" className="text-sm font-bold text-slate-800 hover:text-[#0033CC] transition-colors break-all">
                    martinez@mastertaxnotary.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Departamentos</p>
              <div className="flex flex-col gap-2.5">
                {DEPARTMENTS.map((dept) => {
                  const Icon = dept.icon;
                  return (
                    <div key={dept.value} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${dept.color}15` }}>
                        <Icon className="h-4 w-4" style={{ color: dept.color }} />
                      </div>
                      <span className="text-sm font-semibold text-slate-600">{dept.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }} className="lg:col-span-3">
            <div className="rounded-4xl border border-slate-100 bg-white p-8 shadow-card">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center text-center py-16 gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ecfdf5]">
                      <CheckCircle className="h-8 w-8 text-[#059669]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
                      <p className="text-sm text-slate-500 max-w-sm">Un especialista te contactará en menos de 24 horas. También puedes escribirnos al WhatsApp para respuesta inmediata.</p>
                    </div>
                    <button onClick={() => setStatus("idle")} className="cursor-pointer rounded-full bg-[#0033CC] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#001899] transition-colors">
                      Enviar Otro Mensaje
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="mb-2">
                      <h3 className="text-lg font-extrabold text-slate-900 mb-0.5">Envíanos un Mensaje</h3>
                      <p className="text-xs text-slate-400">Los campos marcados * son obligatorios</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-600 mb-1.5 block">Nombre completo *</label>
                        <input type="text" required value={form.name} onChange={set("name")} placeholder="Tu nombre" className="input-field" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-600 mb-1.5 block">Teléfono *</label>
                        <input type="tel" required value={form.phone} onChange={set("phone")} placeholder="(346) 000-0000" className="input-field" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-600 mb-1.5 block">Email</label>
                      <input type="email" value={form.email} onChange={set("email")} placeholder="tu@email.com" className="input-field" />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-600 mb-2 block">Departamento *</label>
                      <div className="grid grid-cols-2 gap-2">
                        {DEPARTMENTS.map((dept) => {
                          const Icon = dept.icon;
                          const isActive = form.department === dept.value;
                          return (
                            <button
                              key={dept.value}
                              type="button"
                              onClick={() => setForm((p) => ({ ...p, department: dept.value, service: "" }))}
                              className={`cursor-pointer flex items-center gap-2.5 rounded-2xl border p-3 text-left text-xs font-bold transition-all duration-200 ${isActive ? "border-transparent text-white shadow-md" : "border-slate-100 text-slate-600 hover:border-slate-200 hover:bg-slate-50"}`}
                              style={isActive ? { background: dept.color } : {}}
                            >
                              <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? "text-white" : ""}`} style={!isActive ? { color: dept.color } : {}} />
                              <span className="leading-tight">{dept.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <AnimatePresence>
                      {form.department && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }}>
                          <label className="text-xs font-bold text-slate-600 mb-1.5 block">Servicio específico</label>
                          <select value={form.service} onChange={set("service")} className="input-field">
                            <option value="">— Selecciona un servicio (opcional) —</option>
                            {serviceOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
                          </select>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div>
                      <label className="text-xs font-bold text-slate-600 mb-1.5 block">Cuéntanos más (opcional)</label>
                      <textarea rows={3} value={form.message} onChange={set("message")} placeholder="Describe brevemente tu situación o pregunta..." className="input-field resize-none" />
                    </div>

                    {status === "error" && (
                      <p className="text-xs font-semibold text-red-500 bg-red-50 rounded-xl px-4 py-2.5">
                        Error al enviar. Llámanos al (346) 589-7005 o escríbenos por WhatsApp.
                      </p>
                    )}

                    <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === "loading"} className="cursor-pointer mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0033CC] py-4 text-sm font-extrabold text-white shadow-[0_4px_24px_rgba(0,51,204,0.35)] hover:bg-[#001899] disabled:opacity-60 transition-all duration-300">
                      {status === "loading" ? (
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      ) : (
                        <><Send className="h-4 w-4" />Enviar Solicitud</>
                      )}
                    </motion.button>

                    <p className="text-center text-[10px] text-slate-400">Tu información es confidencial y nunca será compartida con terceros.</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
