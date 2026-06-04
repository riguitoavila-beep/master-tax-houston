import { notFound } from "next/navigation";
import { DEPARTMENTS } from "@/lib/departments-data";
import DepartmentPageClient from "./DepartmentPageClient";

export async function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);
  if (!dept) return {};
  return {
    title: `${dept.name} | Master Tax Houston`,
    description: dept.description,
  };
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);
  if (!dept) notFound();
  return <DepartmentPageClient dept={dept} />;
}
