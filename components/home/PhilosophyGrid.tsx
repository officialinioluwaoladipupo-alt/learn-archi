export default function PhilosophyGrid() {
  const pillars = [
    {
      title: "OUR WHY",
      content:
        "Most architecture portfolios show finished buildings and sanitized renders. Ours shows how you think—from initial site analysis to construction details—so clients and firms trust your process, not just the render.",
    },
    {
      title: "OUR HOW",
      content:
        "We bridge the gap between architectural academia and professional practice. Through peer-reviewed project critiques, technical modeling workshops, and studio-grade storytelling, we elevate spatial ideas into built reality.",
    },
    {
      title: "WHAT WE DO",
      content:
        "We provide industry-leading masterclasses in Rhino, Grasshopper, Revit, and Architectural Visualization, paired with live community critiques, portfolio reviews, and studio placement mentorship.",
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