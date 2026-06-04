import ServicePage from "@/components/ServicePage";
import { servicesData } from "@/lib/services-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preparación de Taxes en Houston | Master Tax",
  description: "Preparamos tu declaración federal y estatal maximizando tu reembolso. IRS Authorized e-file Provider. Atención en español en Houston, TX.",
};

export default function TaxesPage() {
  return <ServicePage data={servicesData.taxes} />;
}
