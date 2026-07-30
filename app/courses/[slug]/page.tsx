"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getCourseBySlug } from "@/lib/courses-data";

function PaymentModal({ onClose }: { onClose: () => void }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      id="payment-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="payment-modal"
        className="relative bg-white shadow-2xl flex flex-col overflow-hidden"
        style={{
          width: "min(90vw, 680px)",
          height: "min(90vh, 700px)",
        }}
      >
        {/* Modal Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b-2 border-archi-black shrink-0"
          style={{ background: "#1a1a1a" }}
        >
          <span
            className="font-display font-black uppercase tracking-tight text-white"
            style={{ fontSize: "1rem", letterSpacing: "0.08em" }}
          >
            Complete Your Registration
          </span>
          <button
            id="close-payment-modal"
            onClick={onClose}
            aria-label="Close payment modal"
            className="text-white hover:text-archi-pink transition-colors"
            style={{ fontSize: "1.5rem", lineHeight: 1, background: "none", border: "none", cursor: "pointer" }}
          >
            ✕
          </button>
        </div>

        {/* Loader overlay — shown until iframe fires onLoad */}
        {!loaded && (
          <div
            id="payment-loader"
            className="absolute inset-0 flex flex-col items-center justify-center gap-6"
            style={{ top: "57px", background: "#fdf0f5", zIndex: 10 }}
          >
            <p
              className="font-display font-bold uppercase text-archi-black"
              style={{ fontSize: "0.65rem", letterSpacing: "0.22em" }}
            >
              Loading Payment Page
            </p>

            {/* Bouncing dots — 3 dots with staggered delays */}
            <div className="flex items-end gap-3">
              {[
                { color: "#1a1a1a", delay: "0s" },
                { color: "#A84B42", delay: "0.2s" },
                { color: "#F4BAD3", delay: "0.4s" },
              ].map((dot, i) => (
                <div
                  key={i}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: dot.color,
                    animationName: "archi-bounce",
                    animationDuration: "0.9s",
                    animationTimingFunction: "cubic-bezier(0.45, 0, 0.55, 1)",
                    animationDelay: dot.delay,
                    animationIterationCount: "infinite",
                    animationDirection: "alternate",
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Keyframe styles injected inline */}
        <style>{`
          @keyframes archi-bounce {
            from { transform: translateY(0px);  opacity: 1;   }
            to   { transform: translateY(-18px); opacity: 0.5; }
          }
        `}</style>

        {/* iframe */}
        <div className="flex-1 relative">
          <iframe
            id="paystack-payment-iframe"
            src="https://paystack.shop/pay/larhinocourse"
            title="Register & Pay"
            allow="payment"
            onLoad={() => setLoaded(true)}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);
  const [showModal, setShowModal] = useState(false);

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

          <div className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-6 mt-8">
            <a
              href="#"
              className="btn-black w-full sm:w-auto text-center"
            >
              DOWNLOAD BROCHURE
            </a>
            <button
              id="register-btn"
              onClick={() => setShowModal(true)}
              className="btn-black w-full sm:w-auto text-center"
            >
              REGISTER HERE
            </button>
          </div>
        </div>
      </main>
      <Footer />

      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </>
  );
}