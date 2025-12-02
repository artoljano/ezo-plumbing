// components/PreferredAreaBanner.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AREAS } from "@/data/areas";

const STORAGE_KEY = "ezo-preferred-area";

type Source = "guessed" | "stored" | null;

export function PreferredAreaBanner() {
  const router = useRouter();
  const [selectedSlug, setSelectedSlug] = useState<string>("");
  const [source, setSource] = useState<Source>(null);

  const selectedArea = AREAS.find((area) => area.slug === selectedSlug) || null;

  useEffect(() => {
    // 1) Try to restore from localStorage
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && AREAS.some((a) => a.slug === stored)) {
        setSelectedSlug(stored);
        setSource("stored");
        return; // don’t guess if user already chose
      }
    } catch {
      // ignore storage errors
    }

    // 2) If no stored choice, make a soft IP-based guess on the client
    let cancelled = false;

    async function guessFromIp() {
      try {
        // Uses the user's IP (no browser geolocation prompt)
        const res = await fetch("https://ipwho.is/");
        if (!res.ok) return;

        const data = await res.json();
        if (!data || data.success === false) return;

        const city = (data.city || "") as string;
        const regionName = (data.region || data.region_name || "") as string;

        const guessed = guessAreaFromGeo(city, regionName);
        if (!cancelled && guessed) {
          setSelectedSlug(guessed.slug);
          setSource("guessed");
          // NOTE: we do NOT store this guess yet; we only store when user changes/accepts
        }
      } catch {
        // silently ignore if the IP service is blocked / fails
      }
    }

    guessFromIp();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleChange = (value: string) => {
    setSelectedSlug(value);
    setSource(null); // user has overridden any auto source

    try {
      if (value) {
        window.localStorage.setItem(STORAGE_KEY, value);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore storage errors
    }
  };

  const handleGo = () => {
    if (!selectedSlug) return;
    router.push(`/areas/${selectedSlug}`);
  };

  if (!AREAS.length) return null;

  return (
    <section className="mb-4 rounded-2xl border border-[#01487E]/15 bg-[#01487E]/5 px-4 py-3 text-xs sm:text-sm text-[#01487E]/90">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Left text */}
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#01487E]/80">
            Local hint
          </p>
          <p className="text-xs sm:text-sm">
            We try to{" "}
            <span className="font-semibold text-[#01487E]">
              guess your nearest area
            </span>{" "}
            from your general location. You can change it any time.
          </p>

          {source === "guessed" && selectedArea && (
            <p className="text-[10px] text-[#01487E]/70">
              We&apos;ve pre-selected{" "}
              <span className="font-semibold">{selectedArea.name}</span> based
              on your approximate location. Please adjust if this isn&apos;t
              quite right.
            </p>
          )}

          {source === "stored" && selectedArea && (
            <p className="text-[10px] text-[#01487E]/70">
              Using your last choice:{" "}
              <span className="font-semibold">{selectedArea.name}</span>. You
              can switch to a different area below.
            </p>
          )}
        </div>

        {/* Right controls */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <select
            value={selectedSlug}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full rounded-md border border-[#01487E]/30 bg-white px-3 py-1.5 text-xs sm:text-sm text-[#01487E] focus:border-[#F08B1F] focus:outline-none focus:ring-1 focus:ring-[#F08B1F]"
          >
            <option value="">
              {source === "guessed"
                ? "Confirm or change your area"
                : "Select your nearest area"}
            </option>
            {AREAS.map((area) => (
              <option key={area.slug} value={area.slug}>
                {area.name} – {area.region}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={handleGo}
            disabled={!selectedSlug}
            className="inline-flex items-center justify-center rounded-md bg-[#01487E] px-3 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors disabled:cursor-not-allowed disabled:bg-[#01487E]/40 hover:bg-[#015b9f]"
          >
            View area page
          </button>
        </div>
      </div>

      {/* <p className="mt-1 text-[10px] text-[#01487E]/70">
        This uses a rough IP-based location only to pre-select an area – not
        exact GPS. Your choice is remembered on this device.
      </p> */}
    </section>
  );
}

/**
 * Very simple matcher: try to map IP city/region to one of your defined AREAS.
 * You can tweak this mapping over time as you see real data.
 */
function guessAreaFromGeo(cityRaw: string, regionRaw: string) {
  const city = (cityRaw || "").toLowerCase();
  const region = (regionRaw || "").toLowerCase();

  // Direct name match first (e.g. city === "birmingham")
  const direct = AREAS.find((a) => a.name.toLowerCase() === city);
  if (direct) return direct;

  const bySlug = (slug: string) => AREAS.find((a) => a.slug === slug) || null;

  // City contains checks – handles "Birmingham", "City of Nottingham", etc.
  if (city.includes("birmingham")) return bySlug("birmingham");
  if (city.includes("coventry")) return bySlug("coventry");
  if (city.includes("wolverhampton")) return bySlug("wolverhampton");
  if (city.includes("walsall")) return bySlug("walsall");
  if (city.includes("nottingham")) return bySlug("nottingham");
  if (city.includes("leicester")) return bySlug("leicester");
  if (city.includes("derby")) return bySlug("derby");
  if (city.includes("northampton")) return bySlug("northampton");
  if (city.includes("milton keynes")) return bySlug("milton-keynes");
  if (city.includes("london")) return bySlug("london");

  // Fallback by wider region
  if (region.includes("west midlands")) return bySlug("birmingham");
  if (region.includes("east midlands")) return bySlug("nottingham");
  if (region.includes("london")) return bySlug("london");

  return null;
}
