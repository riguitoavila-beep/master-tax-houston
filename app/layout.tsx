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
  title: {
    default: "Preparación de Taxes en Houston | Master Tax",
    template: "%s | Master Tax Houston",
  },
  description:
    "Preparación de taxes, seguros médicos, formas migratorias y reparación de crédito en Houston, TX. Atención 100% en español. +500 clientes. IRS Authorized e-File Provider.",
  keywords:
    "preparación de taxes houston, taxes en español houston, seguro médico houston, formas migratorias houston, reparación de crédito houston, ITIN houston, obamacare houston, master tax, notaria houston",
  authors: [{ name: "Master Tax Houston" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Preparación de Taxes en Houston | Master Tax",
    description:
      "4 departamentos especializados: Impuestos, Seguros, Migración y Crédito. Atención 100% en español en Houston, TX.",
    locale: "es_US",
    type: "website",
    siteName: "Master Tax Houston",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preparación de Taxes en Houston | Master Tax",
    description:
      "4 departamentos especializados: Impuestos, Seguros, Migración y Crédito. Atención en español.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0033CC",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AccountingService"],
  name: "Master Tax Houston",
  description:
    "Agencia de servicios financieros y legales en Houston, TX. Preparación de taxes, seguros médicos, formas migratorias y reparación de crédito. Atención en español.",
  url: "https://mastertaxnotary.com",
  telephone: "(346) 589-7005",
  email: "martinez@mastertaxnotary.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10910 Jones Rd Suite 2A",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77065",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.8891,
    longitude: -95.5311,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: { "@type": "City", name: "Houston" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Master Tax Houston",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preparación de Taxes Personales" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preparación de Taxes Corporativos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seguro de Salud / ACA Obamacare" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Formas Migratorias / USCIS" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de Crédito" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solicitud de ITIN" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Notarización de Documentos" } },
    ],
  },
  inLanguage: "es",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
