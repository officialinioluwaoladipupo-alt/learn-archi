export interface Course {
  id: string;
  slug: string;
  category: string;
  tutor: string;
  title: string;
  thumbnail: string;
  level: string;
  duration: string;
}

export const courses: Course[] = [
  {
    id: "rhino-parametric-facades",
    slug: "rhino-parametric-facades",
    category: "Computational Design",
    tutor: "Elena Rostova, RIBA",
    title: "RHINO 3D & GRASSHOPPER FOR ARCHITECTS",
    thumbnail: "/images/courses/rhino-thumb.jpg",
    level: "Advanced",
    duration: "8 Weeks",
  },
  {
    id: "portfolio-to-pitch",
    slug: "portfolio-to-pitch",
    category: "Professional Practice",
    tutor: "Marcus Vance, AIA",
    title: "PORTFOLIOS THAT WIN STUDIO BIDS",
    thumbnail: "/images/courses/portfolio-thumb.jpg",
    level: "All Levels",
    duration: "4 Weeks",
  },
  {
    id: "revit-bim-construction",
    slug: "revit-bim-construction",
    category: "BIM & Documentation",
    tutor: "David Chen, Lead BIM Manager",
    title: "REVIT FROM CONCEPT TO DETAIL",
    thumbnail: "/images/courses/revit-thumb.jpg",
    level: "Intermediate",
    duration: "6 Weeks",
  },
  {
    id: "environmental-site-analysis",
    slug: "environmental-site-analysis",
    category: "Environmental Design",
    tutor: "Dr. Sarah Al-Mansoor",
    title: "CLIMATE & SITE ANALYSIS WORKFLOWS",
    thumbnail: "/images/courses/climate-thumb.jpg",
    level: "Intermediate",
    duration: "5 Weeks",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}