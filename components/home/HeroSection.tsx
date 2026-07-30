import Header from "@/components/layout/Header";
import NewsTicker, { NewsItem } from "@/components/layout/NewsTicker";

const HOME_ALERTS: NewsItem[] = [
  {
    id: "01",
    tag: "NEW COURSE",
    text: "Learning Rhino: A Complete Curriculum is now live! From First Curve to Complex Tower Geometry.",
    linkText: "View Course",
    href: "/courses/learning-rhino",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-archi-terracotta min-h-[80vh] flex flex-col pb-16">
      <Header variant="default" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-20 pt-4 flex-1 flex flex-col justify-between gap-8">
        <div className="w-full flex justify-end">
          <NewsTicker className="max-w-md" alerts={HOME_ALERTS} />
        </div>

        <div className="flex-1 flex flex-col justify-center items-start w-full">
          <h1 className="text-d1 font-display font-extrabold text-archi-black uppercase leading-[0.85] tracking-architectural max-w-full">
            <span className="block leading-none">WORLD LARGEST</span>
            <span className="block leading-none">ARCHITECTURE</span>
            <span className="block leading-none text-archi-white">COMMUNITY</span>
          </h1>
          <p className="mt-8 text-body text-archi-black max-w-2xl leading-relaxed font-body">
            Design that builds trust before you say a word. We help architecture studios turn
            portfolios into pitches that win.
          </p>
        </div>
      </div>
    </section>
  );
}