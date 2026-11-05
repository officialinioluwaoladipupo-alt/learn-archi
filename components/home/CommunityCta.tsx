import SectionCta from "@/components/ui/section-cta";

export default function CommunityCta() {
  return (
    <section className="bg-archi-pink py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-auto">
          <SectionCta
            href="#"
            label="JOIN HERE"
            variant="accent"
            size="lg"
            className="w-full md:w-auto text-center"
          />
        </div>

        <div className="w-full md:w-auto text-right">
          <h2 className="text-[clamp(2rem,6.5vw,4.75rem)] font-display font-extrabold text-archi-black uppercase text-right">
            <span className="block">JOIN THE</span>
            <span className="block">COMMUNITY</span>
            <span className="block">TODAY</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
