export default function PhilosophyGrid() {
  const pillars = [
    {
      title: "OUR WHY",
      content:
        "LearnArchi exists to intentionally bridge the gap between architectural education and real-world practice by empowering students and young designers to grow intellectually, practically, and personally so they can navigate the profession with clarity and purpose.",
    },
    {
      title: "OUR HOW",
      content:
        "We cultivate growth through process-driven, first-principles learning and an accountable, ego-free community that provides beyond-the-classroom exposure and champions service-oriented leadership.",
    },
    {
      title: "WHAT WE DO",
      content:
        "We currently provide practical software classes, process-focused design reviews, and shared resources, while actively building toward a comprehensive learning ecosystem featuring mentorship pathways and a strong, pan-African network of designers.",
    },
  ];

  return (
    <section className="bg-archi-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="flex flex-col gap-12 md:gap-16 max-w-7xl mx-auto w-full">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
          >
            <div className="md:col-span-5">
              <h2 className="text-h2 font-display font-bold text-archi-black uppercase tracking-[-0.02em] leading-[0.95]">
                {pillar.title}
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-body font-body text-archi-black leading-relaxed tracking-[0.01em]">
                {pillar.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}