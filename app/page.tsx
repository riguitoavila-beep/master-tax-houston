import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroScroll from "@/components/HeroScroll";
import DepartmentsSection from "@/components/DepartmentsSection";
import TeamSection from "@/components/TeamSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import AcademiaSection from "@/components/AcademiaSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HeroScroll />
      <DepartmentsSection />
      <TeamSection />
      <Stats />
      <Testimonials />
      <AcademiaSection />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
