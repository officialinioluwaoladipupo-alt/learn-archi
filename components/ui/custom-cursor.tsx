"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    // Hide native cursor globally
    document.documentElement.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animateRing = () => {
      const dx = pos.current.x - ringPos.current.x;
      const dy = pos.current.y - ringPos.current.y;
      ringPos.current.x += dx * 0.12;
      ringPos.current.y += dy * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      rafId.current = requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, select, textarea, label, [data-cursor='hover']");
      setIsHovering(!!interactive);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", handleHoverStart);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      document.documentElement.style.cursor = "";
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousemove", handleHoverStart);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Small dot — snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="w-2 h-2 rounded-full bg-archi-terracotta transition-transform duration-150"
          style={{ transform: isHovering ? "scale(2)" : "scale(1)" }}
        />
      </div>

      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="w-10 h-10 rounded-full border-2 border-archi-black transition-all duration-200"
          style={{
            transform: isHovering ? "scale(1.6)" : "scale(1)",
            borderColor: isHovering ? "#A84B42" : "#000000",
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </>
  );
}
