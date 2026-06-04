import ServicePage from "@/components/ServicePage";
import { servicesData } from "@/lib/services-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Inmigración Houston | Master Tax",
  description: "Solicitud de ITIN, orientación DACA, peticiones familiares y más. Te acompañamos en tu proceso migratorio con discreción y en español. Houston, TX.",
};

export default function InmigracionPage() {
  return <ServicePage data={servicesData.inmigracion} />;
}
