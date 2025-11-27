// components/AreasStrip.tsx
"use client";

import Link from "next/link";
import { useRef } from "react";
import { AREAS } from "@/data/areas";

export function AreasStrip() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const CARD_WIDTH = 380; // match ServicesStrip scroll distance
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
        aria-label="Scroll areas left"
      >
        ‹
      </button>

      {/* Right arrow – desktop/tablet only */}
      <button
        type="button"
        onClick={() => scroll("right")}
        className="hidden sm:flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full border border-[#01487E]/30 bg-white/90 text-sm font-bold text-[#01487E] shadow-sm hover:bg-[#01487E]/5"
        aria-label="Scroll areas right"
      >
        ›
      </button>

      {/* Scrollable row – scrollbar hidden, no vertical clipping */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overflow-y-visible pb-2 pt-1 scroll-smooth scrollbar-hide"
      >
        {AREAS.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="group flex min-w-[300px] sm:min-w-[340px] lg:min-w-[380px] max-w-[420px] flex-shrink-0 flex-col justify-between rounded-2xl border border-[#01487E]/20 bg-white/95 p-4 sm:p-5 text-sm shadow-sm transition-all duration-200 hover:border-[#F08B1F]/70 hover:shadow-md min-h-[230px] sm:min-h-[260px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#01487E]">
              {area.region}
            </p>
            <p className="mt-1 text-sm font-semibold text-[#01487E]">
              {area.name}
            </p>
            <p className="mt-2 line-clamp-3 text-xs text-[#01487E]/80">
              {area.description}
            </p>
            <span className="mt-3 inline-flex text-[11px] font-semibold text-[#F08B1F] group-hover:underline">
              See EZO work in {area.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
