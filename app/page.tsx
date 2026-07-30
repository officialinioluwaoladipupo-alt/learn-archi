import HeroSection from "@/components/home/HeroSection";
import PhilosophyGrid from "@/components/home/PhilosophyGrid";
import CommunityCta from "@/components/home/CommunityCta";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <PhilosophyGrid />
        <CommunityCta />
      </main>
      <Footer />
    </>
  );
}