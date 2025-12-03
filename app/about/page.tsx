// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AREAS } from "@/data/areas";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "About EZO Plumbing and Heating Ltd",
  description:
    "Learn about EZO Plumbing and Heating Ltd – a responsive plumbing and heating company serving the West Midlands, East Midlands and London with clear communication, tidy work and fast callouts.",
};

export default function AboutPage() {
  const coreCities = AREAS.slice(0, 6).map((a) => a.name);

  return (
    <div className="mx-auto max-w-5xl space-y-14 px-4 py-10">
      {/* INTRO / HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-[#01487E]/15 bg-gradient-to-br from-[#01487E]/5 via-white to-[#F08B1F]/10 px-5 py-8 md:px-8 md:py-10">
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#01487E]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-[#F08B1F]/20 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[3fr,2.3fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#01487E] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F08B1F]" />
              About EZO Plumbing and Heating Ltd
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#01487E] sm:text-4xl md:text-5xl">
              A plumbing &amp; heating team built for{" "}
              <span className="text-[#F08B1F]">fast, clear, tidy</span> work.
            </h1>

            <p className="max-w-2xl text-sm text-[#01487E]/90 sm:text-[15px]">
              EZO Plumbing and Heating Ltd was created to be the opposite of the
              “no-show, no-communication” experience people have had with
              trades. We focus on quick replies, realistic time slots and
              leaving every job as neat as possible.
            </p>
            <p className="max-w-2xl text-sm text-[#01487E]/90 sm:text-[15px]">
              We&apos;re building a responsive plumbing and heating network
              across the West Midlands, East Midlands and London – handling
              everything from emergencies to bathroom upgrades and landlord
              callouts.
            </p>

            <div className="flex flex-wrap gap-3 text-[11px] text-[#01487E]/85">
              <span className="rounded-full bg-white/80 px-3 py-1">
                West Midlands · East Midlands · London
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1">
                Emergencies · Bathrooms · Landlords
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1">
                Clear communication &amp; tidy work
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-[#01487E]/20 bg-white shadow-md">
              <Image
                src="/images/ezo-team-van.webp"
                alt="EZO Plumbing and Heating van"
                width={900}
                height={520}
                className="h-60 w-full object-cover sm:h-72"
              />
              <div className="px-4 py-3 text-xs text-[#01487E]/90">
                <p className="font-semibold text-[#01487E]">
                  Local vans, local engineers
                </p>
                <p className="text-[11px]">
                  EZO focuses on the areas we know well – not trying to cover
                  the whole country from a call centre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO EZO IS / WHAT WE FOCUS ON */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 01 · Who EZO is" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          A hands-on team, not a faceless franchise
        </h2>

        <div className="grid gap-5 rounded-2xl border border-[#01487E]/15 bg-white/90 p-4 md:grid-cols-[2fr,2fr] md:p-5">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#01487E]">Who EZO is</h3>
            <p className="text-sm text-[#01487E]/90">
              EZO Plumbing and Heating Ltd is a hands-on plumbing and heating
              company – not a faceless franchise. We deal directly with
              homeowners, tenants, landlords and agents who want issues solved
              without drama.
            </p>
            <ul className="mt-2 space-y-1 text-xs text-[#01487E]/90">
              <li>
                • Focused on real-world problems: leaks, blockages, no hot
                water, bathrooms.
              </li>
              <li>
                • Covering key areas in the West Midlands, East Midlands and
                London.
              </li>
              <li>• Built for clear communication and reliable timings.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#01487E]">
              What we focus on
            </h3>
            <p className="text-sm text-[#01487E]/90">
              You&apos;ll find us dealing with emergencies, tracing hidden
              leaks, refreshing bathrooms and sorting the “small but annoying”
              issues that interrupt everyday life.
            </p>
            <ul className="mt-2 space-y-1 text-xs text-[#01487E]/90">
              <li>• 24/7 emergency leaks, bursts and serious blockages.</li>
              <li>• Bathroom plumbing for new suites and upgrades.</li>
              <li>• Radiator moves and heating pipework adjustments.</li>
              <li>• Tenant and landlord plumbing issues in rented homes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE WORK – PROCESS */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 02 · How EZO works" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          A simple, predictable way of handling jobs
        </h2>

        <p className="max-w-3xl text-sm text-[#01487E]/90">
          Whether it&apos;s an emergency call or a planned bathroom project, we
          try to keep the process simple and predictable.
        </p>

        <div className="grid gap-4 text-sm md:grid-cols-4">
          <div className="flex flex-col gap-1 rounded-2xl border border-[#01487E]/20 bg-white/90 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#F08B1F]">
              Step 1
            </p>
            <p className="text-sm font-semibold text-[#01487E]">
              You get in touch
            </p>
            <p className="text-xs text-[#01487E]/90">
              Call, WhatsApp or use the contact form with a short description
              and ideally some photos if you can.
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl border border-[#01487E]/20 bg-white/90 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#F08B1F]">
              Step 2
            </p>
            <p className="text-sm font-semibold text-[#01487E]">
              We assess &amp; quote
            </p>
            <p className="text-xs text-[#01487E]/90">
              We&apos;ll give you a clear idea of pricing, timing and what we
              expect to do before you confirm the booking.
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl border border-[#01487E]/20 bg-white/90 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#F08B1F]">
              Step 3
            </p>
            <p className="text-sm font-semibold text-[#01487E]">
              We carry out the work
            </p>
            <p className="text-xs text-[#01487E]/90">
              Engineers arrive in the agreed window, explain what&apos;s
              happening and work as neatly as possible.
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl border border-[#01487E]/20 bg-white/90 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#F08B1F]">
              Step 4
            </p>
            <p className="text-sm font-semibold text-[#01487E]">
              Aftercare &amp; guarantee
            </p>
            <p className="text-xs text-[#01487E]/90">
              We&apos;ll talk you through what&apos;s been done and any next
              steps. Our workmanship is guaranteed – if something isn&apos;t
              right, we&apos;ll come back.
            </p>
          </div>
        </div>
      </section>

      {/* COVERAGE SNAPSHOT */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 03 · Where EZO works" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          Focused on the Midlands &amp; London
        </h2>

        <section className="space-y-4 rounded-2xl border border-[#01487E]/15 bg-[#01487E]/5 p-4 md:p-5">
          <p className="max-w-3xl text-sm text-[#01487E]/90">
            We&apos;re focused on the West Midlands, East Midlands and London –
            not the entire UK. That means better local knowledge and more
            realistic response times.
          </p>
          <div className="grid gap-4 text-sm md:grid-cols-[2fr,2fr]">
            <ul className="space-y-1 text-xs text-[#01487E]/90">
              <li>• Core cities we regularly work in include:</li>
              {coreCities.map((name) => (
                <li key={name}>• {name}</li>
              ))}
            </ul>
            <div className="rounded-2xl border border-[#01487E]/25 bg-white/90 p-3 text-xs text-[#01487E]/90">
              <p className="text-sm font-semibold text-[#01487E]">
                Just outside our listed areas?
              </p>
              <p className="mt-1">
                If you&apos;re close to one of our main areas, send your
                postcode via WhatsApp or the contact form. We&apos;ll confirm if
                we can help directly or suggest the best next step.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* LANDLORDS & AGENTS */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 04 · Landlords &amp; agents" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          Looking after tenanted properties the right way
        </h2>

        <section className="space-y-4 rounded-2xl border border-[#01487E]/15 bg-white/90 p-4 md:p-5">
          <p className="max-w-3xl text-sm text-[#01487E]/90">
            A big part of EZO&apos;s work is looking after tenanted properties
            for landlords and agents who want issues resolved quickly without
            making tenants&apos; lives harder.
          </p>
          <div className="grid gap-4 text-sm md:grid-cols-[2fr,2fr]">
            <ul className="space-y-1 text-xs text-[#01487E]/90">
              <li>• Direct tenant contact if you prefer.</li>
              <li>• Simple, honest communication around urgency and cost.</li>
              <li>• Photos and short notes after visits for your records.</li>
              <li>• Respectful behaviour and tidy work in every property.</li>
            </ul>
            <div className="rounded-2xl border border-[#F08B1F]/40 bg-[#F08B1F]/5 p-3 text-xs text-[#01487E]/90">
              <p className="text-sm font-semibold text-[#01487E]">
                Managing multiple properties?
              </p>
              <p className="mt-1">
                Tell us how many homes you look after and the typical issues you
                see. We can suggest a simple way to route recurring plumbing and
                heating jobs through EZO.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* PHILOSOPHY / TRUST */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 05 · What matters to EZO" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          The things we care about on every job
        </h2>

        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-4">
            <p className="text-sm font-semibold text-[#01487E]">
              Clear expectations
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              No jargon, no mystery pricing. We explain what&apos;s going on and
              what it&apos;s likely to cost before you agree.
            </p>
          </div>
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-4">
            <p className="text-sm font-semibold text-[#01487E]">
              Respect for your home
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              Shoe covers, dust sheets and clean-up where needed. We treat your
              space as if it was our own.
            </p>
          </div>
          <div className="rounded-2xl border border-[#F08B1F]/40 bg-[#F08B1F]/5 p-4">
            <p className="text-sm font-semibold text-[#01487E]">
              Workmanship guarantee
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              If something we&apos;ve done isn&apos;t right, we want to know
              about it – and we&apos;ll put it right as quickly as possible.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY FAQ */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 06 · About EZO – FAQs" />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          A few quick answers about the company
        </h2>

        <section className="space-y-4 rounded-2xl border border-[#01487E]/15 bg-white/90 p-4 md:p-5">
          <div className="grid gap-3 text-sm md:grid-cols-2">
            <div className="rounded-xl border border-[#01487E]/15 bg-[#01487E]/5 p-3">
              <p className="text-sm font-semibold text-[#01487E]">
                Are you a franchise?
              </p>
              <p className="mt-1 text-xs text-[#01487E]/90">
                No. EZO Plumbing and Heating Ltd is an independent company. That
                means you&apos;re dealing with a team that&apos;s directly
                responsible for the work carried out in your home or properties.
              </p>
            </div>
            <div className="rounded-xl border border-[#01487E]/15 bg-[#01487E]/5 p-3">
              <p className="text-sm font-semibold text-[#01487E]">
                Do you only do emergencies?
              </p>
              <p className="mt-1 text-xs text-[#01487E]/90">
                Emergencies are a big part of what we do, but we also handle
                planned work – bathrooms, upgrades and &quot;small but
                annoying&quot; issues that need sorting properly.
              </p>
            </div>
            <div className="rounded-xl border border-[#01487E]/15 bg-[#01487E]/5 p-3">
              <p className="text-sm font-semibold text-[#01487E]">
                What if I don&apos;t know the right plumbing words?
              </p>
              <p className="mt-1 text-xs text-[#01487E]/90">
                That&apos;s completely fine. Just describe the problem in your
                own words, or send photos or a short video – we&apos;ll ask the
                right questions from there.
              </p>
            </div>
            <div className="rounded-xl border border-[#01487E]/15 bg-[#01487E]/5 p-3">
              <p className="text-sm font-semibold text-[#01487E]">
                How do I book EZO?
              </p>
              <p className="mt-1 text-xs text-[#01487E]/90">
                The quickest options are to call us or open a WhatsApp chat. You
                can also use the contact form if you prefer writing everything
                down first.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* CTA */}
      <section className="space-y-3 rounded-2xl border border-[#01487E]/15 bg-gradient-to-r from-[#01487E]/5 via-white to-[#F08B1F]/10 p-4">
        <h2 className="text-2xl font-semibold text-[#01487E] sm:text-3xl">
          Ready to talk to EZO?
        </h2>
        <p className="max-w-3xl text-sm text-[#01487E]/90">
          If you&apos;ve read this far, you probably have a specific issue in
          mind. Tell us what&apos;s going wrong and where you are – we&apos;ll
          reply with times and a clear plan.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#01487E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#015b9f]"
          >
            Go to the contact page
          </Link>
          <a
            href="https://wa.me/447418640186"
            target="_blank"
            className="inline-flex items-center justify-center rounded-md border border-[#F08B1F] bg-white/80 px-4 py-2 text-sm font-semibold text-[#F08B1F] shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#F08B1F]/5"
          >
            Open WhatsApp chat
          </a>
        </div>
      </section>
    </div>
  );
}
