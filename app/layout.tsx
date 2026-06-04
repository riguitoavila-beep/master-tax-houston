import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

/*
  STACK TIPOGRÁFICO PREMIUM
  ─────────────────────────
  Fraunces   → Display / Títulos (reemplaza Playfair Display)
              Variable font con eje SOFT y WONK.
              Comparable a PP Editorial New / Ogg en contraste y curvas orgánicas.

  DM Sans    → UI / Cuerpo / Botones (reemplaza Manrope)
              Sans-serif geométrico ultra-nítido.
              Comparable a PP Neue Montreal / Roobert / Switzer.
*/

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair", // mantenemos el nombre de variable para compatibilidad
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope", // mantenemos el nombre de variable para compatibilidad
  display: "swap",
});

export const metadata: Metadata = {
  title: "Master Tax Houston | Impuestos, Seguros, Migración y Crédito",
  description:
    "4 departamentos especializados en Houston, TX: Impuestos y Finanzas, Formas Migratorias, Aseguradoras y Reparación de Crédito. Atención en español. +500 clientes satisfechos.",
  keywords:
    "taxes houston, preparación de impuestos houston, seguro de salud houston, reparación de crédito houston, formas migratorias houston, notaria houston, taxes en español, mastercredit",
  openGraph: {
    title: "Master Tax Houston | Tu Agencia de Confianza",
    description:
      "Impuestos, Seguros, Migración y Crédito en Houston, TX. 4 departamentos. Atención en español.",
    locale: "es_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
