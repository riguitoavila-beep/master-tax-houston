"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const DEPT_LINKS = [
  { label: "Impuestos y Finanzas",       href: "/departamentos/impuestos-finanzas",   dot: "#3b82f6" },
  { label: "Formas Migratorias",         href: "/departamentos/formas-migratorias",   dot: "#a78bfa" },
  { label: "Aseguradoras",               href: "/departamentos/aseguradoras",          dot: "#34d399" },
  { label: "Crédito y Financiamiento",   href: "/departamentos/credito-financiamiento", dot: "#fbbf24" },
];

const NAV_LINKS = [
  { label: "Inicio",    href: "#inicio",    scroll: true  },
  { label: "Equipo",    href: "#equipo",    scroll: true  },
  { label: "Academia",  href: "/academia",  scroll: false },
  { label: "Contacto",  href: "#contacto",  scroll: true  },
];

/* ── Spring 3D Logo ─────────────────────────────────────── */
function Logo() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-40, 40], [8, -8]), { stiffness: 260, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-40, 40], [-10, 10]), { stiffness: 260, damping: 22 });
  const scale   = useSpring(1, { stiffness: 280, damping: 22 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width  / 2);
    mouseY.set(e.clientY - rect.top  - rect.height / 2);
  };
  const onEnter = () => scale.set(1.08);
  const onLeave = () => { mouseX.set(0); mouseY.set(0); scale.set(1); };

  return (
    <Link href="/" className="flex-shrink-0">
      {/* breathing wrapper */}
      <div className="logo-breathe">
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d", perspective: 400 }}
          className="cursor-pointer"
        >
          <Image
            src="/logo-icon.png"
            alt="Master Tax"
            width={42}
            height={42}
            className="h-10 w-10 object-contain drop-shadow-sm"
            priority
          />
        </motion.div>
      </div>
    </Link>
  );
}

/* ── Elastic Nav Bubble ─────────────────────────────────── */
function NavItem({
  children,
  onClick,
  scrolled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  scrolled: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const linkCls = scrolled ? "text-white/75 hover:text-white" : "text-white/60 hover:text-white";

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Elastic bubble */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            layoutId="nav-bubble-desktop"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: "rgba(255,255,255,0.09)",
              backdropFilter: "blur(6px)",
            }}
          />
        )}
      </AnimatePresence>
      <button
        onClick={onClick}
        className={`relative z-10 cursor-pointer px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors duration-200 min-h-[44px] ${linkCls}`}
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        {children}
      </button>
    </div>
  );
}

/* ── Main Navbar ────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [deptOpen,      setDeptOpen]      = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setDeptOpen(false);
    if (pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  const scrolledCls = scrolled
    ? "bg-[#030a1a]/80 backdrop-blur-2xl shadow-[0_4px_32px_rgba(0,0,0,0.35)] border-white/10"
    : "bg-white/5 backdrop-blur-md border-white/8";

  const linkCls = scrolled ? "text-white/75 hover:text-white" : "text-white/60 hover:text-white";

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-3 left-4 right-4 z-50 transition-all duration-500 rounded-2xl border ${scrolledCls}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-[62px] items-center justify-between lg:h-[66px]">

            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">

              {/* Departamentos dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDeptOpen(true)}
                onMouseLeave={() => setDeptOpen(false)}
              >
                <div className="relative">
                  <AnimatePresence>
                    {deptOpen && (
                      <motion.span
                        layoutId="nav-bubble-desktop"
                        initial={{ opacity: 0, scale: 0.88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.88 }}
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          background: "rgba(255,255,255,0.09)",
                          backdropFilter: "blur(6px)",
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <button
                    className={`relative z-10 flex items-center gap-1.5 cursor-pointer px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors duration-200 min-h-[44px] ${linkCls}`}
                    onClick={() => scrollTo("#departamentos")}
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Departamentos
                    <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-300 ${deptOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <AnimatePresence>
                  {deptOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2.5 w-60 rounded-2xl border border-slate-100 bg-white overflow-hidden"
                      style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)" }}
                    >
                      <div className="p-1.5">
                        {DEPT_LINKS.map((dept, i) => (
                          <motion.div
                            key={dept.href}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                          >
                            <Link
                              href={dept.href}
                              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150 group"
                              style={{ fontFamily: "var(--font-manrope)" }}
                            >
                              <span
                                className="h-1.5 w-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                                style={{ background: dept.dot }}
                              />
                              {dept.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other nav links with elastic bubble */}
              {NAV_LINKS.map((link) => {
                if (link.scroll) {
                  return (
                    <NavItem key={link.href} onClick={() => scrollTo(link.href)} scrolled={scrolled}>
                      {link.label}
                    </NavItem>
                  );
                }
                return (
                  <div key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors duration-200 inline-flex items-center ${linkCls}`}
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA — WhatsApp only */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://wa.me/13464593090"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition-all duration-200 ${
                  scrolled
                    ? "bg-[#0033CC] text-white shadow-[0_4px_16px_rgba(0,51,204,0.28)] hover:bg-[#001899]"
                    : "border border-white/15 bg-white/10 text-white/90 hover:bg-white/18"
                }`}
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                <WhatsAppIcon className="h-3.5 w-3.5 fill-current flex-shrink-0" />
                WhatsApp
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden cursor-pointer rounded-xl p-2 transition-colors text-white/70 hover:bg-white/10`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={21} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={21} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[82px] z-40 rounded-2xl border border-slate-100 bg-white/97 backdrop-blur-2xl overflow-hidden lg:hidden"
            style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.12)" }}
          >
            <div className="flex flex-col px-3 py-3 gap-0.5">
              <button onClick={() => scrollTo("#inicio")} className="cursor-pointer w-full text-left rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>
                Inicio
              </button>

              <div>
                <button
                  onClick={() => setMobileDeptOpen(!mobileDeptOpen)}
                  className="cursor-pointer w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Departamentos
                  <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${mobileDeptOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileDeptOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                      <div className="pl-3 pb-1 flex flex-col gap-0.5">
                        {DEPT_LINKS.map((dept) => (
                          <Link key={dept.href} href={dept.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>
                            <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: dept.dot }} />
                            {dept.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => scrollTo("#equipo")}   className="cursor-pointer w-full text-left rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>Equipo</button>
              <Link  href="/academia" onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>Academia</Link>
              <button onClick={() => scrollTo("#contacto")} className="cursor-pointer w-full text-left rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>Contacto</button>

              <div className="mt-2 px-1 pb-1">
                <a
                  href="https://wa.me/13464593090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0033CC] py-3 text-sm font-bold text-white transition-colors hover:bg-[#001899]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  <WhatsAppIcon className="h-4 w-4 fill-white flex-shrink-0" />
                  WhatsApp · (346) 459-3090
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
