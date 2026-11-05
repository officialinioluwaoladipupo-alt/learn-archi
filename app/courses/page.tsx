import Header from "@/components/layout/Header";
import CourseCard from "@/components/courses/CourseCard";
import Footer from "@/components/layout/Footer";
import { courses } from "@/lib/courses-data";

export default function CoursesPage() {
  return (
    <>
      <main id="main-content" className="bg-archi-black min-h-screen">
        <Header variant="dark" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-20 pt-4 pb-16 sm:pb-24">
          <h1 className="text-h1 font-display font-bold text-archi-pink tracking-tight mb-8 sm:mb-12 uppercase">
            COURSES
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-0">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                slug={course.slug}
                category={course.category}
                tutor={course.tutor}
                title={course.title}
                thumbnail={course.thumbnail}
                status={course.status}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
