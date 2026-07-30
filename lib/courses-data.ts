export interface Course {
  id: string;
  slug: string;
  category: string;
  tutor: string;
  title: string;
  thumbnail: string;
  level: string;
  duration: string;
  description?: string;
  modules?: string[];
}

export const courses: Course[] = [
  {
    id: "learning-rhino",
    slug: "learning-rhino",
    category: "3D Modeling",
    tutor: "Learn Archi",
    title: "LEARNING RHINO: A COMPLETE CURRICULUM",
    thumbnail: "/images/Building Image.png",
    level: "Beginner",
    duration: "6–10 Weeks",
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