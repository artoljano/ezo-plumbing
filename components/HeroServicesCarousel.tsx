// components/HeroServicesCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import { SERVICES } from "@/data/services";

export function HeroServicesCarousel() {
  const [index, setIndex] = useState(0);
  const total = SERVICES.length;

  const goTo = (i: number) => {
    if (total === 0) return;
    const normalised = ((i % total) + total) % total;
    setIndex(normalised);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Simple autoplay
  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (((current + 1) % total) + total) % total);
    }, 6000); // 6s per slide
    return () => clearInterval(id);
  }, [total]);

  if (total === 0) return null;

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-[#01487E]/20 bg-white/95 shadow-md">
        {/* Sliding track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.id ?? service.name}
              className="w-full flex-shrink-0 p-4 sm:p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#F08B1F]">
                Service {i + 1} of {total}
              </p>
              <h3 className="mt-1 text-base sm:text-lg font-semibold text-[#01487E]">
                {service.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#01487E]/85">
                {service.short}
              </p>

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

        {/* Bottom bar: nav + caption */}
        <div className="flex items-center justify-between gap-3 border-t border-[#01487E]/10 px-4 py-2 text-[11px] text-[#01487E]/80">
          <span className="hidden sm:inline">
            Showing:{" "}
            <span className="font-semibold">{SERVICES[index].name}</span>
          </span>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous service"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#01487E]/25 bg-white/90 text-xs font-bold text-[#01487E] shadow-sm hover:bg-[#01487E]/5"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next service"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#01487E]/25 bg-white/90 text-xs font-bold text-[#01487E] shadow-sm hover:bg-[#01487E]/5"
            >
              ›
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 pb-3 pt-1">
          {SERVICES.map((service, i) => {
            const isActive = i === index;
            return (
              <button
                key={service.id ?? service.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${service.name}`}
                className={`h-1.5 rounded-full transition-all ${
                  isActive
                    ? "w-5 bg-[#F08B1F]"
                    : "w-2 bg-[#01487E]/25 hover:bg-[#01487E]/40"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
