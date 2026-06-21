import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Timeline from "@/components/Timeline";
import ProjectGrid from "@/components/ProjectGrid";
import StatsPanel from "@/components/StatsPanel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/footer";
import MouseGlow from "@/components/MouseGlow";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0c14] overflow-hidden">
      <MouseGlow />
      <div className="bg-gradient-sphere fixed inset-0 pointer-events-none" />
      <Navbar />
      <HeroSection />
      <div className="gradient-divider mx-auto max-w-6xl" />
      <AboutSection />
      <div className="gradient-divider mx-auto max-w-6xl" />
      <Timeline />
      <div className="gradient-divider mx-auto max-w-6xl" />
      <ProjectGrid />
      <div className="gradient-divider mx-auto max-w-6xl" />
      <StatsPanel />
      <div className="gradient-divider mx-auto max-w-6xl" />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
