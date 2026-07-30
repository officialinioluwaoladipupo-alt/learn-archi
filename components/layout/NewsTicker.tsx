"use client";

import { useState, useEffect } from "react";

export interface NewsItem {
  id: string;
  tag: string;
  text: string;
  linkText: string;
  href: string;
}

interface NewsTickerProps {
  className?: string;
  alerts: NewsItem[];
}

export default function NewsTicker({ className = "", alerts = [] }: NewsTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (alerts.length === 0) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % alerts.length);
        setIsTransitioning(false);
      }, 300); // match transition duration
    }, 6000);

    return () => clearInterval(interval);
  }, [alerts.length]);

  if (alerts.length === 0) return null;

  const activeAlert = alerts[currentIndex];

  return (
    <div
      className={`w-full max-w-lg border border-archi-black bg-archi-white p-4 font-body transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}
      aria-live="polite"
    >
      <div className="flex items-center justify-between border-b border-archi-black pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="bg-archi-terracotta text-archi-white px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase">
            {activeAlert.tag}
          </span>
          <span className="text-[10px] text-archi-muted tracking-widest">
            NEWS FEED
          </span>
        </div>
        <div className="flex gap-1.5 items-center">
          {alerts.map((alert, idx) => (
            <button
              key={alert.id}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-1.5 h-1.5 transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-archi-black scale-125"
                  : "bg-archi-grey hover:bg-archi-muted"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <span className="text-[11px] font-mono ml-2 text-archi-black">
            {activeAlert.id}
          </span>
        </div>
      </div>

      <div
        className={`transition-opacity duration-300 flex flex-col items-start gap-1.5 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-[13px] md:text-sm font-semibold text-archi-black leading-snug">
          {activeAlert.text}
        </p>
        <a
          href={activeAlert.href}
          className="group inline-flex items-center gap-1.5 text-xs font-bold text-archi-terracotta hover:text-archi-black transition-colors"
        >
          <span className="underline underline-offset-4 decoration-2">
            {activeAlert.linkText}
          </span>
          <span className="inline-block transform group-hover:translate-x-1 transition-transform font-mono">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
}