"use client";

import { useRef } from "react";
import { SERVICES } from "@/data/services";

export function ServicesStrip() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const CARD_WIDTH = 380; // px including gap
    container.scrollBy({
      left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Left arrow – desktop/tablet only */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="hidden sm:flex absolute -left-4 top-1/2 z-10 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full border border-[#01487E]/30 bg-white/90 text-sm font-bold text-[#01487E] shadow-sm hover:bg-[#01487E]/5"
        aria-label="Scroll services left"
      >
        ‹
      </button>

      {/* Right arrow – desktop/tablet only */}
      <button
        type="button"
        onClick={() => scroll("right")}
        className="hidden sm:flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full border border-[#01487E]/30 bg-white/90 text-sm font-bold text-[#01487E] shadow-sm hover:bg-[#01487E]/5"
        aria-label="Scroll services right"
      >
        ›
      </button>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth pb-2 pt-1 scrollbar-hide"
      >
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className="flex min-w-[300px] sm:min-w-[340px] lg:min-w-[380px] max-w-[420px] flex-shrink-0 flex-col justify-between rounded-2xl border border-[#01487E]/20 bg-white/95 p-4 sm:p-5 text-sm shadow-sm transition-all duration-200 hover:border-[#F08B1F]/70 hover:shadow-md min-h-[230px] sm:min-h-[260px]"
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
