// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServicesStrip } from "@/components/ServicesStrip";
import { AreasStrip } from "@/components/AreasStrip";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title:
    "EZO Plumbing and Heating Ltd – 24/7 Emergency Plumbers in West Midlands, East Midlands & London",
  description:
    "EZO Plumbing and Heating Ltd provides fast-response plumbers across the West Midlands, East Midlands and London. Emergency callouts, leak repairs, heating issues, blockages, bathrooms and more.",
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-20 px-4 py-10">
      {/* HERO – new layout */}
      <section className="relative overflow-hidden rounded-3xl border border-[#01487E]/15 bg-gradient-to-br from-[#01487E]/5 via-white to-[#F08B1F]/10 px-5 py-8 md:px-8 md:py-10">
        {/* soft animated blobs */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#01487E]/15 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-[#F08B1F]/20 blur-3xl animate-pulse" />

        <div className="relative grid gap-10 md:grid-cols-[3fr,2.2fr] md:items-center">
          {/* Left – main content */}
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#01487E]/25 bg-white/80 px-3 py-1 text-xs font-medium text-[#01487E] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F08B1F]" />
              24/7 plumbing &amp; heating · West &amp; East Midlands · London
            </span>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#01487E] sm:text-4xl md:text-5xl">
              When <span className="text-[#F08B1F]">water, heat</span> or drains
              fail,
              <br className="hidden sm:block" /> EZO gets it moving again.
            </h1>

            <p className="max-w-xl text-sm text-[#01487E]/90 sm:text-[15px]">
              Burst pipe, no hot water, blocked toilet or a bathroom that needs
              modernising – EZO Plumbing and Heating focuses on fast response,
              clear communication and tidy, reliable work.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+447000000000"
                className="inline-flex items-center justify-center rounded-md bg-[#01487E] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#015b9f]"
              >
                Call EZO now · +44 7000 000000
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#01487E] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#01487E] shadow-sm transition-colors duration-150 hover:bg-[#01487E]/5"
              >
                Book or ask a question
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] text-[#01487E]/80">
              <span className="rounded-full bg-white/80 px-3 py-1">
                West Midlands · East Midlands · London
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1">
                Plumbing &amp; heating · Domestic &amp; landlords
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1">
                Card &amp; bank transfer accepted
              </span>
            </div>
          </div>

          {/* Right – imagery & stats */}
          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-[#01487E]/15 bg-white/90 shadow-md transition-transform duration-200 hover:-translate-y-1">
              <Image
                src="/images/ezo-hero-plumber.jpeg"
                alt="EZO plumber fixing a leak"
                width={900}
                height={520}
                className="h-60 w-full object-cover sm:h-72"
              />
              <div className="flex items-center justify-between gap-3 px-4 py-3 text-xs">
                <div>
                  <p className="font-semibold text-[#01487E]">
                    Leak stopped. Heating safe.
                  </p>
                  <p className="text-[11px] text-[#01487E]/80">
                    Same-evening fix after a burst under a kitchen sink.
                  </p>
                </div>
                <span className="rounded-full bg-[#01487E]/10 px-2 py-1 text-[10px] font-medium text-[#01487E]">
                  Real EZO job
                </span>
              </div>
            </div>

            <div className="grid gap-3 text-xs sm:grid-cols-2">
              <div className="flex flex-col justify-between rounded-2xl border border-[#01487E]/20 bg-white/90 px-3 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#01487E]">
                  Typical response
                </p>
                <p className="mt-1 text-xl font-bold text-[#01487E]">
                  60–90 mins
                </p>
                <p className="mt-1 text-[11px] text-[#01487E]/80">
                  For many emergency callouts, depending on location &amp;
                  traffic.
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-[#F08B1F]/40 bg-gradient-to-br from-[#F08B1F]/8 via-white to-[#01487E]/6 px-3 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#F08B1F]">
                  Direct to engineer
                </p>
                <p className="mt-1 text-sm font-semibold text-[#01487E]">
                  No call centres. Talk to someone who can actually help.
                </p>
                <p className="mt-1 text-[11px] text-[#01487E]/80">
                  Send photos by WhatsApp or describe the problem in your own
                  words.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TRUST STRIP */}
      <section className="grid gap-4 rounded-2xl border border-[#01487E]/15 bg-[#01487E]/5 p-4 text-sm sm:grid-cols-3">
        <div className="rounded-xl bg-white/70 p-3 transition-transform duration-150 hover:-translate-y-0.5">
          <p className="text-2xl font-bold text-[#01487E]">60–90 min</p>
          <p className="text-sm text-[#01487E]/90">
            Typical emergency response time in many areas*
          </p>
        </div>
        <div className="rounded-xl bg-white/70 p-3 transition-transform duration-150 hover:-translate-y-0.5">
          <p className="text-2xl font-bold text-[#01487E]">7 days</p>
          <p className="text-sm text-[#01487E]/90">
            Appointments available every day of the week
          </p>
        </div>
        <div className="rounded-xl bg-white/70 p-3 transition-transform duration-150 hover:-translate-y-0.5">
          <p className="text-2xl font-bold text-[#01487E]">
            Plumbing &amp; heat
          </p>
          <p className="text-sm text-[#01487E]/90">
            One team for leaks, heating issues, bathrooms &amp; more
          </p>
        </div>
      </section>

      {/* SECTION DIVIDER – SERVICES & PRICING */}
      <SectionDivider label="Services &amp; pricing" />

      {/* FEATURED SERVICES – all services, scrollable */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#01487E]">
              What EZO actually does
            </h2>
            <p className="max-w-2xl text-sm text-[#01487E]/90">
              Real-world jobs – not just fancy names. These are the things we
              get called out for every single week.
            </p>
          </div>
          <Link
            href="/services"
            className="text-xs font-semibold text-[#F08B1F] hover:underline"
          >
            See all services
          </Link>
        </div>

        <ServicesStrip />
      </section>

      {/* HOW PRICING WORKS */}
      <section className="space-y-4 rounded-2xl border border-[#01487E]/15 bg-white/90 p-4 md:p-5">
        <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#01487E]">
          How EZO pricing works
        </h2>
        <p className="max-w-3xl text-sm text-[#01487E]/90">
          We keep pricing straightforward and explain costs before you commit.
          No surprise extras once the work is done.
        </p>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-xl border border-[#01487E]/20 bg-[#01487E]/5 p-3">
            <p className="text-sm font-semibold text-[#01487E]">
              Call-out &amp; first hour
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              A clear call-out fee usually covers travel and the first block of
              time on site. We&apos;ll tell you this up front.
            </p>
          </div>
          <div className="rounded-xl border border-[#01487E]/20 bg-[#01487E]/5 p-3">
            <p className="text-sm font-semibold text-[#01487E]">
              Then in fair blocks
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              If we need longer, time is normally charged in fair blocks (for
              example per 30 minutes) rather than rounding up to full hours.
            </p>
          </div>
          <div className="rounded-xl border border-[#F08B1F]/40 bg-[#F08B1F]/5 p-3">
            <p className="text-sm font-semibold text-[#01487E]">
              What affects the price?
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              Emergency vs planned work, access to pipework, parts required and
              time of day. We&apos;ll always explain options first.
            </p>
          </div>
        </div>
      </section>

      {/* WHY EZO – TRUST / GUARANTEE */}
      <section className="space-y-4">
        <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#01487E]">
          Why people choose EZO
        </h2>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-4">
            <p className="text-sm font-semibold text-[#01487E]">
              Clear communication
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              We tell you what&apos;s going on in normal language, send photos
              if helpful and confirm what we&apos;re doing before we start.
            </p>
          </div>
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-4">
            <p className="text-sm font-semibold text-[#01487E]">
              Tidy, careful work
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              Shoe covers, dust sheets and proper clean-down where needed. Your
              home shouldn&apos;t feel like a building site afterwards.
            </p>
          </div>
          <div className="rounded-2xl border border-[#F08B1F]/40 bg-[#F08B1F]/5 p-4">
            <p className="text-sm font-semibold text-[#01487E]">
              Workmanship guarantee
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              All EZO work comes with a workmanship guarantee. If something
              we&apos;ve done isn&apos;t right, we&apos;ll come back and put it
              right.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER – COVERAGE & SUPPORT */}
      <SectionDivider label="Coverage &amp; support" />

      {/* LANDLORDS & AGENTS */}
      <section className="space-y-4 rounded-2xl border border-[#01487E]/15 bg-[#01487E]/5 p-4 md:p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#01487E]">
              Support for landlords &amp; letting agents
            </h2>
            <p className="max-w-3xl text-sm text-[#01487E]/90">
              EZO works with landlords and agents who need reliable, polite
              engineers looking after their tenants in the Midlands and London.
            </p>
          </div>
          <Link
            href="/services"
            className="text-xs font-semibold text-[#F08B1F] hover:underline"
          >
            See landlord service details
          </Link>
        </div>
        <div className="grid gap-4 text-sm md:grid-cols-[2fr,2fr]">
          <ul className="space-y-2 text-xs text-[#01487E]/90">
            <li>
              • Direct tenant contact if you prefer, with clear time slots.
            </li>
            <li>• Photos and short notes after each visit for your records.</li>
            <li>• Help prioritising urgent vs non-urgent issues.</li>
            <li>• Respectful behaviour in tenants&apos; homes at all times.</li>
          </ul>
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-3 text-xs text-[#01487E]/90">
            <p className="text-sm font-semibold text-[#01487E]">
              Managing multiple properties?
            </p>
            <p className="mt-1">
              Tell us how many properties you look after and we&apos;ll suggest
              a simple way to handle repeat plumbing &amp; heating issues with
              EZO as your go-to team.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED AREAS – all areas, scrollable */}
      <section id="areas" className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#01487E]">
              Where EZO is working right now
            </h2>
            <p className="max-w-2xl text-sm text-[#01487E]/90">
              We&apos;re expanding across the West Midlands, East Midlands and
              London. These are some of our core patches.
            </p>
          </div>
          <Link
            href="/areas"
            className="text-xs font-semibold text-[#F08B1F] hover:underline"
          >
            View all areas
          </Link>
        </div>

        <AreasStrip />
      </section>

      {/* FAQ */}
      <section className="space-y-4 rounded-2xl border border-[#01487E]/15 bg-white/90 p-4 md:p-5">
        <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#01487E]">
          EZO Plumbing &amp; Heating – quick FAQs
        </h2>
        <div className="grid gap-3 text-sm md:grid-cols-2">
          <div className="rounded-xl border border-[#01487E]/15 bg-[#01487E]/5 p-3">
            <p className="text-sm font-semibold text-[#01487E]">
              Do you charge a call-out fee?
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              For most emergency visits there is a clear call-out fee that
              covers travel and the first block of time. We&apos;ll confirm this
              before you book so there are no surprises.
            </p>
          </div>
          <div className="rounded-xl border border-[#01487E]/15 bg-[#01487E]/5 p-3">
            <p className="text-sm font-semibold text-[#01487E]">
              Can I pay by card?
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              Yes – we normally accept major cards and bank transfer. Let us
              know your preference when you book and we&apos;ll confirm options.
            </p>
          </div>
          <div className="rounded-xl border border-[#01487E]/15 bg-[#01487E]/5 p-3">
            <p className="text-sm font-semibold text-[#01487E]">
              Do you cover my postcode?
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              We focus on the West Midlands, East Midlands and London. Send us
              your postcode via WhatsApp or the contact form and we&apos;ll
              confirm exactly what we can do.
            </p>
          </div>
          <div className="rounded-xl border border-[#01487E]/15 bg-[#01487E]/5 p-3">
            <p className="text-sm font-semibold text-[#01487E]">
              Is everything 24/7?
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              Emergency leak and serious issues can often be attended 24/7.
              Planned work is usually booked in daytime slots – we&apos;ll talk
              through times that work for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA TO CONTACT */}
      <section className="space-y-3 rounded-2xl border border-[#01487E]/15 bg-gradient-to-r from-[#01487E]/5 via-white to-[#F08B1F]/10 p-4">
        <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#01487E]">
          Not sure what the issue is?
        </h2>
        <p className="max-w-3xl text-sm text-[#01487E]/90">
          You don&apos;t have to know the correct plumbing or heating terms.
          Describe the problem in your own words, or send a photo, and
          we&apos;ll advise the best next step.
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
      </section>
    </div>
  );
}
