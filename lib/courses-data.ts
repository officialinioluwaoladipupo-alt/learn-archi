export interface Course {
  id: string;
  slug: string;
  category: string;
  tutor: string;
  title: string;
  thumbnail: string;
  level: string;
  duration: string;
  status: "open" | "closed";
  paymentOptions?: { label: string; url: string }[];
  description?: string;
  modules?: string[];
}

export const courses: Course[] = [
  {
    id: "indesign-presentation",
    slug: "indesign-presentation",
    category: "Presentation Design",
    tutor: "Bolu Adekunle",
    title: "LEARNARCHI INDESIGN COURSE",
    thumbnail: "/images/Website_Indesign Course.png",
    level: "Architects",
    duration: "9 Classes",
    status: "open",
    paymentOptions: [
      { label: "Full Course (All Modules)", url: "https://selar.com/laidcourse" },
      { label: "Module 1 Only", url: "https://selar.com/134831051a" },
      { label: "Module 2 Only", url: "https://selar.com/717u9077b9" },
      { label: "Module 3 Only", url: "https://selar.com/998a783wy7" }
    ],
    description: "Thirty percent of what we do in architecture is presenting concepts; fundamentally, we sell ideas. Yet many talented architects struggle to document and communicate their vision effectively. The LearnArchi InDesign Course is a nine-class journey designed to bridge this gap. Led by Bolu Adekunle, who has crafted over 20 global architectural portfolios, the course transforms your presentation workflow. Progress from basic page setups to integrating images, text, and color, then reverse-engineer studio-grade layouts and explore the psychology behind exceptional portfolios to elevate your documentation and pitch with confidence.",
    modules: [
      "Page setup and presentation foundations",
      "Integrating images, text, and color",
      "Reverse-engineering studio-grade layouts",
      "Portfolio psychology and communicating design ideas"
    ]
  },
  {
    id: "learning-rhino",
    slug: "learning-rhino",
    category: "3D Modeling",
    tutor: "Learn Archi",
    title: "LEARNING RHINO: A COMPLETE CURRICULUM",
    thumbnail: "/images/Building Image.png",
    level: "Beginner",
    duration: "6–10 Weeks",
    status: "closed",
    description: "This guide breaks Rhino into six progressive modules. Each module builds on the last — don’t skip ahead to solids before curves feel automatic, and don’t touch Grasshopper before you can loft, boolean, and trim confidently by hand. A capstone project (modeling a Burj Khalifa–style tapered, twisting tower) is woven through the later modules so every new skill has an immediate, concrete use.",
    modules: [
      "Interface & Foundations",
      "Curves in Depth",
      "Surfacing",
      "Solids & Boolean Logic",
      "Precision, Documentation & Output",
      "Toward Parametric Design"
    ]
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
