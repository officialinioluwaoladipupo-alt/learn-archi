import Link from "next/link";

interface CourseCardProps {
  id: string;
  slug: string;
  category: string;
  tutor: string;
  title: string;
  thumbnail?: string;
  status: "open" | "closed";
}

export default function CourseCard({
  slug,
  category,
  tutor,
  title,
  thumbnail,
  status,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-archi-black focus-visible:ring-offset-2">
      <article className="bg-archi-white p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div className="flex justify-between items-start mb-2">
          <span className="text-meta uppercase font-semibold text-archi-muted">
            {category}
          </span>
          <span className="text-meta font-medium text-archi-muted">
            {tutor}
          </span>
        </div>

        <h3 className="text-h3 font-display font-bold text-archi-black mt-2 mb-6 uppercase">
          {title}
        </h3>

        {status === "closed" && (
          <p className="mb-4 inline-block bg-archi-black px-3 py-1 text-meta font-bold uppercase tracking-wide text-archi-white">
            Course Closed
          </p>
        )}

        <div className="w-full h-64 bg-archi-grey relative overflow-hidden">
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </article>
    </Link>
  );
}
