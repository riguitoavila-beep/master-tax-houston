import ServicePage from "@/components/ServicePage";
import { servicesData } from "@/lib/services-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguros Médicos ACA / Obamacare Houston | Master Tax",
  description: "Te ayudamos a encontrar el mejor plan de salud en el Marketplace. Subsidios ACA disponibles. Inscripción el mismo día. Houston, TX.",
};

export default function SegurosMedicosPage() {
  return <ServicePage data={servicesData["seguros-medicos"]} />;
}
