// app/areas/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AREAS } from "@/data/areas";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "EZO Plumbing and Heating Ltd – Areas We Cover",
  description:
    "See all areas covered by EZO Plumbing and Heating across the West Midlands, East Midlands and London.",
};

export default function AreasPage() {
  const westMidlands = AREAS.filter((a) => a.region === "West Midlands");
  const eastMidlands = AREAS.filter((a) => a.region === "East Midlands");
  const london = AREAS.filter((a) => a.region === "London");

  return (
    <div className="mx-auto max-w-5xl space-y-14 px-4 py-10">
      {/* HERO / INTRO */}
      <section className="relative overflow-hidden rounded-3xl border border-[#01487E]/15 bg-gradient-to-br from-[#01487E]/5 via-white to-[#F08B1F]/10 px-5 py-8 md:px-8 md:py-10">
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#01487E]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-[#F08B1F]/20 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[3fr,2.3fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#01487E] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F08B1F]" />
              EZO coverage map
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#01487E] sm:text-4xl md:text-5xl">
              Where EZO Plumbing and Heating is ready to help
            </h1>

            <p className="max-w-2xl text-sm text-[#01487E]/90 sm:text-[15px]">
              We&apos;re building a fast-response plumbing and heating network
              across the West Midlands, East Midlands and London. If you live
              just outside one of these areas, send us your postcode and
              we&apos;ll confirm what we can do and how quickly we can get to
              you.
            </p>
            <p className="max-w-2xl text-sm text-[#01487E]/85">
              Many customers start by asking a simple question: &quot;Do you
              come to my street?&quot; – the answer is often yes, especially if
              you are close to any of the locations listed below.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#01487E]/20 bg-gradient-to-br from-[#01487E]/8 via-white to-[#F08B1F]/12">
            <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#01487E]/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-[#F08B1F]/25 blur-3xl" />

            <div className="relative">
              <Image
                src="/images/ezo-team-van.jpg"
                alt="EZO Plumbing and Heating van covering multiple areas"
                width={900}
                height={520}
                className="h-60 w-full rounded-b-none rounded-t-2xl object-cover sm:h-72"
              />
              <div className="px-4 py-3 text-xs text-[#01487E]/90">
                <p className="font-semibold text-[#01487E]">
                  Local engineers, not a national call centre
                </p>
                <p className="text-[11px]">
                  Focusing on the Midlands and London means more realistic
                  response times and better local knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEST MIDLANDS */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 01 · West Midlands areas" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          EZO coverage across the West Midlands
        </h2>
        <p className="max-w-3xl text-sm text-[#01487E]/90">
          From city centres to surrounding suburbs, these are some of the key
          West Midlands locations where EZO regularly attends callouts and
          planned jobs.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {westMidlands.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-[#01487E]/20 bg-white/95 p-4 sm:p-5 text-sm shadow-sm transition-all duration-200 hover:border-[#F08B1F]/70 hover:shadow-md min-h-[230px] sm:min-h-[260px]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#01487E]">
                EZO in {area.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#01487E]">
                {area.name}
              </p>
              <p className="mt-2 line-clamp-3 text-xs text-[#01487E]/80">
                {area.description}
              </p>
              <span className="mt-3 inline-flex text-[11px] font-semibold text-[#F08B1F] group-hover:underline">
                View local plumber page
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* EAST MIDLANDS */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 02 · East Midlands areas" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          EZO coverage across the East Midlands
        </h2>
        <p className="max-w-3xl text-sm text-[#01487E]/90">
          These East Midlands locations are part of EZO&apos;s growing coverage
          – with both emergency callouts and planned plumbing work.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {eastMidlands.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-[#01487E]/20 bg-white/95 p-4 sm:p-5 text-sm shadow-sm transition-all duration-200 hover:border-[#F08B1F]/70 hover:shadow-md min-h-[230px] sm:min-h-[260px]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#01487E]">
                EZO in {area.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#01487E]">
                {area.name}
              </p>
              <p className="mt-2 line-clamp-3 text-xs text-[#01487E]/80">
                {area.description}
              </p>
              <span className="mt-3 inline-flex text-[11px] font-semibold text-[#F08B1F] group-hover:underline">
                View local plumber page
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* LONDON */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 03 · London areas" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          EZO coverage across London
        </h2>
        <p className="max-w-3xl text-sm text-[#01487E]/90">
          In and around London, EZO focuses on realistic travel times and honest
          communication about when an engineer can reach you.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {london.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-[#01487E]/20 bg-white/95 p-4 sm:p-5 text-sm shadow-sm transition-all duration-200 hover:border-[#F08B1F]/70 hover:shadow-md min-h-[230px] sm:min-h-[260px]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#01487E]">
                EZO in {area.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#01487E]">
                {area.name}
              </p>
              <p className="mt-2 line-clamp-3 text-xs text-[#01487E]/80">
                {area.description}
              </p>
              <span className="mt-3 inline-flex text-[11px] font-semibold text-[#F08B1F] group-hover:underline">
                View local plumber page
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SOFT CTA */}
      <section className="space-y-3 border-t border-slate-200 pt-8">
        <div className="space-y-3 rounded-2xl border border-[#01487E]/15 bg-gradient-to-r from-[#01487E]/5 via-white to-[#F08B1F]/10 p-4">
          <h2 className="text-2xl font-semibold text-[#01487E] sm:text-3xl">
            Just outside one of these areas?
          </h2>
          <p className="max-w-3xl text-sm text-[#01487E]/90">
            If you&apos;re close to one of our listed locations, send your
            postcode via WhatsApp or the contact form. We&apos;ll confirm if we
            can help directly or suggest the best next step.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#01487E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#015b9f]"
            >
              Go to the contact page
            </Link>
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md border border-[#F08B1F] bg-white/80 px-4 py-2 text-sm font-semibold text-[#F08B1F] shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#F08B1F]/5"
            >
              Open WhatsApp chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
