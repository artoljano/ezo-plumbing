// components/ServicesStrip.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { SERVICES } from "@/data/services";

export function ServicesStrip() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = SERVICES.length;

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container || total === 0) return;

    const clamped = Math.max(0, Math.min(index, total - 1));
    const child = container.children[clamped] as HTMLElement | undefined;

    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setCurrentIndex(clamped);
    }
  };

  const handleArrow = (direction: "left" | "right") => {
    const delta = direction === "left" ? -1 : 1;
    scrollToIndex(currentIndex + delta);
  };

  // Reset index if services list ever changes
  useEffect(() => {
    if (currentIndex > total - 1) {
      setCurrentIndex(total - 1);
    }
  }, [total, currentIndex]);

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        type="button"
        onClick={() => handleArrow("left")}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#01487E]/30 bg-white/90 text-sm font-bold text-[#01487E] shadow-sm hover:bg-[#01487E]/5 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/90"
        aria-label="Scroll services left"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => handleArrow("right")}
        disabled={currentIndex === total - 1}
        className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#01487E]/30 bg-white/90 text-sm font-bold text-[#01487E] shadow-sm hover:bg-[#01487E]/5 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/90"
        aria-label="Scroll services right"
      >
        ›
      </button>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth pb-2 pt-1 scrollbar-hide snap-x snap-mandatory"
      >
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className="flex min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] max-w-full flex-shrink-0 snap-start flex-col justify-between rounded-2xl border border-[#01487E]/20 bg-white/95 p-4 sm:p-5 text-sm shadow-sm transition-all duration-200 hover:border-[#F08B1F]/70 hover:shadow-md min-h-[230px] sm:min-h-[260px]"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#F08B1F]">
                Service {index + 1}
              </p>
              <h3 className="mt-1 text-base sm:text-lg font-semibold text-[#01487E]">
                {service.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#01487E]/85">
                {service.short}
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#01487E]/75">
              <span className="rounded-full border border-[#01487E]/20 bg-[#01487E]/5 px-2.5 py-1">
                Plumbing &amp; heating
              </span>
              <span className="rounded-full border border-[#01487E]/10 bg-white/80 px-2.5 py-1">
                Emergency &amp; planned work
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
