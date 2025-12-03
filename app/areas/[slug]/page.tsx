// app/areas/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AREAS } from "@/data/areas";
import { SectionDivider } from "@/components/SectionDivider";
import { ContactForm } from "@/components/ContactForm";

// Next 16: params is a Promise<{ slug: string }>
type RouteParams = {
  params: Promise<{ slug: string }>;
};

function getAreaFromSlug(slug: string | undefined) {
  if (!slug) return null;

  const normalised = slug.trim().toLowerCase();

  return (
    AREAS.find(
      (area) =>
        area.slug.toLowerCase() === normalised ||
        area.name.toLowerCase().replace(/\s+/g, "-") === normalised
    ) ?? null
  );
}

// ✅ Tell Next which /areas/[slug] pages to pre-generate for static export
export async function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaFromSlug(slug);

  if (!area) {
    return {
      title: "EZO Plumbing and Heating – Area not found",
      description: "We could not find details for this EZO Plumbing area.",
    };
  }

  return {
    // Uses your SEO headline from data/areas.ts
    title: `${area.headline} | EZO Plumbing and Heating Ltd`,
    description: `${area.description} EZO Plumbing and Heating offers 24/7 emergency plumbers in ${area.name} for leaks, blocked drains, toilets, heating issues and bathroom plumbing across nearby postcodes.`,
  };
}

export default async function AreaPage({ params }: RouteParams) {
  const { slug } = await params;
  const area = getAreaFromSlug(slug);

  if (!area) {
    // Helpful debug page in dev; real 404 in production
    if (process.env.NODE_ENV === "development") {
      return (
        <div className="mx-auto max-w-4xl space-y-4 px-4 py-10">
          <h1 className="text-2xl font-semibold text-red-700">
            Area not recognised
          </h1>
          <p className="text-sm text-slate-700">
            We couldn&apos;t match the URL segment{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5">
              {slug ?? "(missing)"}
            </code>{" "}
            to any known EZO coverage areas.
          </p>
          <p className="text-xs text-slate-600">
            Valid slugs are:{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5">
              {AREAS.map((a) => a.slug).join(", ")}
            </code>
          </p>
          <p className="text-xs text-slate-500">
            (This debug view only appears in development. In production the
            normal 404 page is shown.)
          </p>
        </div>
      );
    }

    notFound();
  }

  // Per-area hero image from data/areas.ts, with safe fallback
  const heroImage = area.heroImage ?? {
    src: "/images/ezo-hero-plumber.jpeg",
    alt: `EZO plumber at work in ${area.name}`,
  };

  return (
    <div className="mx-auto max-w-5xl space-y-14 px-4 py-10">
      {/* BREADCRUMBS */}
      <nav className="mb-2 text-[11px] text-[#01487E]/70">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/areas" className="hover:underline">
          Areas
        </Link>{" "}
        / <span className="font-semibold">{area.name}</span>
      </nav>

      {/* HERO / INTRO – same layout style as About/Services heroes */}
      <section className="relative overflow-hidden rounded-3xl border border-[#01487E]/15 bg-gradient-to-br from-[#01487E]/5 via-white to-[#F08B1F]/10 px-5 py-8 md:px-8 md:py-10">
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#01487E]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-[#F08B1F]/20 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[3fr,2.2fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#01487E] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F08B1F]" />
              EZO in {area.region}
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#01487E] sm:text-4xl md:text-5xl">
              {area.name} plumbers · EZO Plumbing and Heating
            </h1>

            <p className="max-w-2xl text-sm text-[#01487E]/90 sm:text-[15px]">
              {area.description} EZO Plumbing and Heating handles everything
              from emergency leaks and blockages to bathroom installs and
              radiator moves in {area.name} and the surrounding neighbourhoods.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="tel:+44 7418 640186"
                className="inline-flex items-center justify-center rounded-md bg-[#01487E] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#015b9f]"
              >
                Call EZO in {area.name}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#01487E] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#01487E] shadow-sm transition-colors duration-150 hover:bg-[#01487E]/5"
              >
                Request an online quote
              </Link>
            </div>

            <p className="text-[11px] text-[#01487E]/75">
              Typical emergency response: 60–90 minutes in many parts of{" "}
              {area.name}, depending on time of day and traffic.
            </p>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-[#01487E]/20 bg-white shadow-md">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={700}
                height={420}
                className="h-60 w-full object-cover sm:h-72"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 text-[11px] text-[#01487E]/90">
              <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 px-3 py-2">
                Same-day appointments for many non-emergency jobs.
              </div>
              <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 px-3 py-2">
                Ideal for homeowners, tenants and landlords in {area.name}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY STRIP */}
      <section className="rounded-2xl border border-red-200 bg-red-50/80 p-3 text-xs text-red-800">
        <p className="font-semibold">Emergency in {area.name}?</p>
        <p className="mt-1">
          If water is spreading quickly, affecting electrics or coming through a
          ceiling, please call EZO immediately – don&apos;t wait for a form
          reply.
        </p>
        <a
          href="tel:+44 7418 640186"
          className="mt-2 inline-flex rounded-md bg-red-600 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-red-700"
        >
          Call EZO emergency line
        </a>
      </section>

      {/* SECTION 01 – LOCAL CONTACT / FORM SECTION */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label={`Section 01 · Book EZO in ${area.name}`} />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          Tell EZO what&apos;s happening in {area.name}
        </h2>
        <p className="max-w-2xl text-sm text-[#01487E]/90">
          Use this quick form to send details of your plumbing or heating issue
          in {area.name}. We&apos;ll reply with timing and the next steps. For
          active leaks or spreading water, please call instead of waiting for a
          message.
        </p>

        <div className="grid gap-6 md:grid-cols-[3fr,2fr] md:items-start">
          {/* Re-using your existing ContactForm component */}
          <ContactForm defaultAreaSlug={area.slug} />

          <div className="space-y-3 rounded-2xl border border-[#01487E]/20 bg-[#01487E]/5 p-4 text-xs text-[#01487E]/90">
            <p className="font-semibold text-[#01487E]">
              Helpful details for {area.name} callouts
            </p>
            <ul className="mt-1 space-y-1">
              <li>
                • Rough area (e.g. near the town centre, station or a local
                landmark).
              </li>
              <li>• Parking or access details we should know.</li>
              <li>
                • How long the issue has been going on (minutes, hours, days).
              </li>
              <li>
                • If it&apos;s a rental, tell us if you&apos;re the tenant,
                landlord or agent.
              </li>
            </ul>
            <p className="mt-2 text-[11px] text-[#01487E]/80">
              Photos or a short video of leaks, damp patches or blockages are
              very helpful – they let us plan the right fix before we arrive.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02 – COMMON JOBS */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label={`Section 02 · Jobs we handle in ${area.name}`} />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          Common plumbing jobs EZO handles in {area.name}
        </h2>

        <ul className="grid gap-2 text-sm sm:grid-cols-2">
          {[
            "Emergency leaks, burst pipes and overflowing toilets",
            "Blocked sinks, showers, baths and slow drains",
            "Toilet, tap, shower and bath repairs or replacements",
            "Bathroom plumbing for refurbishments and new suites",
            "Radiator moves, additions and pipework adjustments",
            "Landlord & letting-agent callouts with photos and updates",
          ].map((item) => (
            <li
              key={item}
              className="rounded-xl border border-[#01487E]/20 bg-white/90 px-3 py-2 text-xs text-[#01487E]/90"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 03 – RECENT / TYPICAL JOBS */}
      <section className="space-y-4 border-t border-slate-200 pt-8">
        <SectionDivider
          label={`Section 03 · Recent jobs around ${area.name}`}
        />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          Typical EZO callouts in {area.name}
        </h2>

        <div className="grid gap-3 text-xs sm:grid-cols-3">
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-3">
            <p className="text-[11px] font-semibold text-[#01487E]">
              Emergency kitchen leak
            </p>
            <p className="mt-1 text-[11px] text-[#01487E]/85">
              Emergency kitchen leak isolated and repaired near {area.name} town
              centre, with pipework made safe and advice on drying out units.
            </p>
          </div>
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-3">
            <p className="text-[11px] font-semibold text-[#01487E]">
              Blocked toilet in a flat
            </p>
            <p className="mt-1 text-[11px] text-[#01487E]/85">
              Blocked toilet cleared in a first-floor flat in {area.name}, plus
              tips to avoid repeat blockages and checks on the rest of the
              system.
            </p>
          </div>
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-3">
            <p className="text-[11px] font-semibold text-[#01487E]">
              Cold radiators in a 3-bed home
            </p>
            <p className="mt-1 text-[11px] text-[#01487E]/85">
              Radiators bled and balanced in a 3-bed property in {area.name} to
              improve heating performance and reduce cold spots.
            </p>
          </div>
        </div>

        <p className="text-[11px] text-[#01487E]/70">
          These are the kinds of plumbing and heating issues we deal with every
          week in and around {area.name}.
        </p>
      </section>

      {/* SECTION 04 – POPULAR SERVICES */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider
          label={`Section 04 · Popular services in ${area.name}`}
        />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          Popular EZO services in {area.name}
        </h2>

        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <Link
            href="/services"
            className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-3 hover:border-[#F08B1F]/60 hover:shadow-sm"
          >
            <p className="text-sm font-semibold text-[#01487E]">
              Blocked drains &amp; toilets in {area.name}
            </p>
            <p className="mt-1 text-xs text-[#01487E]/85">
              Fast response for blocked toilets, slow sinks and gurgling drains
              in and around {area.name}.
            </p>
          </Link>

          <Link
            href="/services"
            className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-3 hover:border-[#F08B1F]/60 hover:shadow-sm"
          >
            <p className="text-sm font-semibold text-[#01487E]">
              Leaks, burst pipes &amp; water damage in {area.name}
            </p>
            <p className="mt-1 text-xs text-[#01487E]/85">
              We isolate the leak, protect your property and plan a proper
              repair – not just a quick patch.
            </p>
          </Link>
        </div>
      </section>

      {/* SECTION 05 – FAQ */}
      <section className="space-y-5 border-t border-slate-200 pt-8">
        <SectionDivider label={`Section 05 · FAQs for ${area.name}`} />
        <h2 className="mt-2 text-2xl font-semibold text-[#01487E] sm:text-3xl">
          EZO Plumbing and Heating FAQs for {area.name}
        </h2>

        <div className="grid gap-3 text-sm md:grid-cols-2">
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-3">
            <p className="text-sm font-semibold text-[#01487E]">
              Do you charge extra for evenings or weekends in {area.name}?
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              Some time slots and emergency callouts do have different rates,
              but we&apos;ll always explain pricing clearly before you confirm a
              booking. No hidden charges.
            </p>
          </div>
          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-3">
            <p className="text-sm font-semibold text-[#01487E]">
              Can EZO help if I&apos;m a landlord with tenants in {area.name}?
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              Yes. We regularly handle landlord and letting-agent work –
              including direct communication with tenants, and photos or notes
              after each visit for your records.
            </p>
          </div>

          <div className="rounded-2xl border border-[#01487E]/20 bg-white/90 p-3 md:col-span-2">
            <p className="text-sm font-semibold text-[#01487E]">
              How much does a plumber cost in {area.name}?
            </p>
            <p className="mt-1 text-xs text-[#01487E]/90">
              Prices depend on the time of day, how urgent it is and what we
              find when we arrive. We&apos;ll always explain call-out and hourly
              rates before you confirm a booking in {area.name}, so you know
              what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="border-t border-slate-200 pt-6">
        <Link
          href="/areas"
          className="text-xs font-semibold text-[#01487E] hover:underline"
        >
          ← Back to all EZO areas
        </Link>
      </section>
    </div>
  );
}
