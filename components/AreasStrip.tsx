// components/AreasStrip.tsx
"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { AREAS, type Area } from "@/data/areas";

type AreasStripProps = {
  areas?: Area[]; // optional – if not provided, use all AREAS (for homepage)
};

export function AreasStrip({ areas }: AreasStripProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = areas && areas.length > 0 ? areas : AREAS;
  const total = items.length;

  // Keep index in range if the list ever changes
  useEffect(() => {
    if (currentIndex > total - 1) {
      setCurrentIndex(total - 1);
    }
  }, [total, currentIndex]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container || total === 0) return;

    const clamped = Math.max(0, Math.min(index, total - 1));
    const child = container.children[clamped] as HTMLElement | undefined;

    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start", // align card nicely from the left
      });
      setCurrentIndex(clamped);
    }
  };

  const handleArrow = (direction: "left" | "right") => {
    const delta = direction === "left" ? -1 : 1;
    scrollToIndex(currentIndex + delta);
  };

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        type="button"
        onClick={() => handleArrow("left")}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#01487E]/30 bg-white/90 text-sm font-bold text-[#01487E] shadow-sm hover:bg-[#01487E]/5 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/90"
        aria-label="Scroll areas left"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => handleArrow("right")}
        disabled={currentIndex === total - 1}
        className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#01487E]/30 bg-white/90 text-sm font-bold text-[#01487E] shadow-sm hover:bg-[#01487E]/5 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/90"
        aria-label="Scroll areas right"
      >
        ›
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overflow-y-visible pb-2 pt-1 scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        {items.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="group flex min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] max-w-full flex-shrink-0 snap-start flex-col justify-between rounded-2xl border border-[#01487E]/20 bg-white/95 p-4 sm:p-5 text-sm shadow-sm transition-all duration-200 hover:border-[#F08B1F]/70 hover:shadow-md min-h-[230px] sm:min-h-[260px]"
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
