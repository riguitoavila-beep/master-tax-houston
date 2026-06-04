import ServicePage from "@/components/ServicePage";
import { servicesData } from "@/lib/services-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Notaría en Houston | Master Tax",
  description: "Notario público certificado en Houston. Documentos legales, poderes notariales, apostillas y más. Servicio el mismo día en español.",
};

export default function NotariaPage() {
  return <ServicePage data={servicesData.notaria} />;
}
