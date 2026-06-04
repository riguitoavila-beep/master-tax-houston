import { notFound } from "next/navigation";
import { COURSES } from "@/lib/courses-data";
import AcademiaCoursePage from "./AcademiaCoursePage";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: `${course.title} | Academia Master Tax`,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();
  return <AcademiaCoursePage course={course} />;
}
