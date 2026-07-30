import { WordHeroPage } from "@/components/ui/scroll-hero-section";
import SectionCta from "@/components/ui/section-cta";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DemoPage() {
  return (
    <div className="bg-archi-white min-h-screen">
      <Header variant="default" />

      {/* Scroll Hero Demonstration */}
      <WordHeroPage
        items={["design.", "model.", "detail.", "render.", "build.", "architect."]}
        theme="system"
        animate
        hue={12}
        startVh={50}
        spaceVh={50}
        debug={false}
        showFooter={false}
        taglineHTML={`World&apos;s largest architecture community.<br />Learn advanced computational design workflows.`}
      />

      {/* Section CTA Demonstration */}
      <section className="py-24 px-4 max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 text-center">
        <h2 className="text-h2 font-display font-bold text-archi-black uppercase">
          Interactive CTA Components
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 p-8 border border-archi-black bg-archi-pink hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <SectionCta href="#" label="Explore Courses" variant="accent" size="lg" />
          <SectionCta href="#" label="View Curriculum" variant="inverted" size="default" />
          <SectionCta href="#" label="Get Brochure" variant="outline" size="sm" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
