// app/services/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "EZO Plumbing and Heating Ltd – Services",
  description:
    "Explore EZO Plumbing and Heating services: emergency callouts, leaks, bathrooms, blockages, radiators and landlord support across the West Midlands, East Midlands and London.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-14 px-4 py-10">
      {/* HERO / INTRO – unified hero style */}
      <section className="relative overflow-hidden rounded-3xl border border-[#01487E]/15 bg-gradient-to-br from-[#01487E]/5 via-white to-[#F08B1F]/10 px-5 py-8 md:px-8 md:py-10">
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#01487E]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-[#F08B1F]/20 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[3fr,2.3fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#01487E] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F08B1F]" />
              EZO Plumbing and Heating services
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#01487E] sm:text-4xl md:text-5xl">
              Everything EZO can{" "}
              <span className="text-[#F08B1F]">help you with</span>.
            </h1>

            <p className="max-w-2xl text-sm text-[#01487E]/90 sm:text-[15px]">
              From sudden emergencies to planned upgrades, our services are
              built around real problems people have in their homes and rentals
              – not just technical jargon. If water, heat or drainage is
              misbehaving, EZO is here to sort it.
            </p>
            <p className="max-w-2xl text-sm text-[#01487E]/85 sm:text-[15px]">
              Many of these services can be booked for both one-off visits and
              repeat support for landlords and letting agents across the West
              Midlands, East Midlands and London.
            </p>

            <div className="flex flex-wrap gap-3 text-[11px] text-[#01487E]/85">
              <span className="rounded-full bg-white/80 px-3 py-1">
                Emergency callouts
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1">
                Bathrooms &amp; upgrades
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1">
                Landlord &amp; agent support
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-[#01487E]/20 bg-white shadow-md">
              <Image
                src="/images/ezo-bathroom-install.jpg"
                alt="EZO Plumbing bathroom work"
                width={700}
                height={420}
                className="h-60 w-full object-cover sm:h-72"
              />
              <div className="px-4 py-3 text-xs text-[#01487E]/90">
                <p className="font-semibold text-[#01487E]">
                  Real-world plumbing &amp; heating jobs
                </p>
                <p className="text-[11px]">
                  Leaks, blockages, bathrooms, radiators and more – the list
                  below shows the types of work we handle day to day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="space-y-6 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 01 · Plumbing &amp; heating services" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          Detailed service list
        </h2>

        <div className="grid gap-5">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="grid gap-4 rounded-2xl border border-[#01487E]/20 bg-white/90 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#F08B1F]/70 hover:shadow-md md:grid-cols-[2fr,2fr]"
            >
              {/* Left – text */}
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#F08B1F]">
                  Service {index + 1}
                </p>
                <h2 className="text-xl font-semibold text-[#01487E]">
                  {service.name}
                </h2>
                <p className="text-sm text-[#01487E]/90">{service.short}</p>
                <p className="text-sm text-[#01487E]/85">
                  {service.description}
                </p>
              </div>

              {/* Right – image + bullets */}
              <div className="space-y-2 text-xs text-[#01487E]/85">
                <div className="overflow-hidden rounded-2xl border border-[#01487E]/20 bg-[#01487E]/5">
                  <Image
                    src={
                      index % 2 === 0
                        ? "/images/ezo-kitchen-leak.png"
                        : "/images/ezo-hero-plumber.jpeg"
                    }
                    alt={service.name}
                    width={900}
                    height={520}
                    className="h-60 w-full object-cover sm:h-72"
                  />
                </div>
                <ul className="space-y-1">
                  <li>
                    • Typical callouts:{" "}
                    <span className="font-semibold text-[#01487E]">
                      {service.short}
                    </span>
                  </li>
                  <li>• Available across our main coverage areas.</li>
                  <li>
                    • Can be booked via call, WhatsApp or the contact page.
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SMALL CLOSING NOTE / CTA */}
      <section className="space-y-3 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 02 · Need help choosing?" />
        <div className="mt-2 space-y-3 rounded-2xl border border-[#01487E]/15 bg-gradient-to-r from-[#01487E]/5 via-white to-[#F08B1F]/10 p-4">
          <h2 className="text-xl font-semibold text-[#01487E]">
            Not sure which service you need?
          </h2>
          <p className="max-w-3xl text-sm text-[#01487E]/90">
            Many jobs touch more than one of these services – for example, a
            leak that affects your bathroom and radiators. Describe what&apos;s
            going wrong in your own words, and we&apos;ll match it to the right
            type of visit.
          </p>
          <p className="text-xs text-[#01487E]/80">
            Photos or a short video sent by WhatsApp are especially useful for
            hidden leaks, bathroom work and anything you&apos;re unsure how to
            describe.
          </p>
        </div>
      </section>
    </div>
  );
}
