"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getCourseBySlug } from "@/lib/courses-data";

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <main id="main-content" className="bg-archi-pink min-h-screen">
        <Header variant="default" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-20 py-8 sm:py-12">
          <h1 className="w-full min-w-0 text-[clamp(2rem,7vw,5rem)] font-display font-black text-archi-black uppercase tracking-tighter break-words text-center md:text-left mb-8 sm:mb-12 border-b-2 border-archi-black pb-4 sm:pb-6">
            {course.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
            <div className="md:col-span-5">
              <h2 className="text-h4 font-display font-bold text-archi-black mb-4">
                Course Outline
              </h2>
              <div className="text-body text-archi-black leading-relaxed space-y-4 sm:space-y-6">
                {course.description && (
                  <p>{course.description}</p>
                )}
                {course.modules && course.modules.map((module, idx) => (
                  <p key={idx}>
                    <strong>Module {idx + 1}:</strong> {module}
                  </p>
                ))}
              </div>
            </div>

            <div className="md:col-span-7">
              {course.thumbnail && (
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-auto shadow-lg"
                />
              )}
            </div>
          </div>

          {course.status === "closed" ? (
            <div className="mt-8 border-2 border-archi-black bg-archi-black px-6 py-4 text-center font-display font-bold uppercase tracking-wide text-archi-white sm:inline-block">
              Registration Closed
            </div>
          ) : course.paymentOptions?.length ? (
            <div className="mt-8 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-end sm:gap-6">
              <label className="flex w-full flex-col gap-2 font-display text-meta font-bold uppercase tracking-wide text-archi-black sm:w-80">
                Payment Option
                <select
                  id="payment-option"
                  defaultValue={course.paymentOptions[0].url}
                  className="min-h-12 border-2 border-archi-black bg-archi-white px-4 py-3 text-body font-body font-medium normal-case tracking-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-archi-black"
                >
                  {course.paymentOptions.map((option) => (
                    <option key={option.url} value={option.url}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="button"
                className="btn-black w-full text-center sm:w-auto"
                onClick={() => {
                  const select = document.getElementById("payment-option") as HTMLSelectElement | null;
                  if (select) window.open(select.value, "_blank", "noopener,noreferrer");
                }}
              >
                CONTINUE TO PAYMENT
              </button>
            </div>
          ) : null}
        </div>
      </main>
      <Footer />

    </>
  );
}
