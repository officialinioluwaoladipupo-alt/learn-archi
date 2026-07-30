import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getCourseBySlug } from "@/lib/courses-data";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <main id="main-content" className="bg-archi-pink min-h-screen">
        <Header variant="default" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-20 py-8 sm:py-12">
          <h1 className="text-d2 font-display font-black text-archi-black uppercase tracking-tighter w-full text-center md:text-left mb-8 sm:mb-12 border-b-2 border-archi-black pb-4 sm:pb-6">
            {course.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
            <div className="md:col-span-5">
              <h2 className="text-h4 font-display font-bold text-archi-black mb-4">
                Course Outline
              </h2>
              <div className="text-body text-archi-black leading-relaxed space-y-4 sm:space-y-6">
                <p>
                  Master parametric modeling and algorithmic design specifically
                  tailored for architectural façades, structural shells, and complex
                  geometry.
                </p>
                <p>
                  Over eight weeks, you will transition from fundamental NURBS
                  surface modeling in Rhino 5/8 to generative visual programming in
                  Grasshopper. We cover environmental radiation analysis with
                  Ladybug, data tree manipulation, panelization strategies, and
                  clean fabrication export for BIM integration.
                </p>
                <p>
                  Whether you are designing responsive kinetic skins or preparing
                  production drawings for complex structural curvature, this
                  masterclass gives you the computational literacy required by
                  world-class architecture studios.
                </p>
                <p>
                  <strong>Module 1:</strong> Advanced Rhino Surface Modeling
                </p>
                <p>
                  <strong>Module 2:</strong> Grasshopper Parametric Façades
                </p>
                <p>
                  <strong>Module 3:</strong> Structural Integration & BIM Hand-off
                </p>
                <p>
                  <strong>Module 4:</strong> Winning Architectural Pitch Deck Assembly
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="relative w-full aspect-video bg-archi-black shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-16 sm:w-20 h-16 sm:h-20 bg-archi-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Play video"
                  >
                    <div className="w-0 h-0 border-t-8 sm:border-t-10 border-t-transparent border-l-12 sm:border-l-15 border-l-archi-black border-b-8 sm:border-b-10 border-b-transparent ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-6 mt-8">
            <a
              href="#"
              className="btn-black w-full sm:w-auto text-center"
            >
              DOWNLOAD BROCHURE
            </a>
            <a
              href="#"
              className="btn-black w-full sm:w-auto text-center"
            >
              REGISTER HERE
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}