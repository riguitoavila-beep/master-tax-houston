import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-playfair",
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
    <html lang="es" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
