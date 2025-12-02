// app/contact/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Contact EZO Plumbing and Heating Ltd",
  description:
    "Contact EZO Plumbing and Heating to book a plumber, ask a question or get a quote. Call, WhatsApp or use the enquiry form for plumbing and heating issues across the Midlands and London.",
};

export default function ContactPage() {
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
              Contact EZO Plumbing and Heating Ltd
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#01487E] sm:text-4xl md:text-5xl">
              Tell EZO what&apos;s going wrong –{" "}
              <span className="text-[#F08B1F]">we&apos;ll handle the rest</span>
              .
            </h1>

            <p className="max-w-2xl text-sm text-[#01487E]/90 sm:text-[15px]">
              Whether it&apos;s an emergency leak, a stubborn blockage, no hot
              water or a planned bathroom upgrade, send us a few details and
              we&apos;ll reply with timing and a clear plan. You can also call
              or open WhatsApp directly if you prefer talking it through.
            </p>
            <p className="max-w-2xl text-sm text-[#01487E]/90 sm:text-[15px]">
              For urgent water damage or active flooding, please call –
              don&apos;t wait for a message reply.
            </p>

            <div className="space-y-1 text-sm text-[#01487E]/90">
              <div>
                <span className="font-semibold text-[#01487E]">Call EZO: </span>
                <a
                  href="tel:+44 7418 640186"
                  className="font-semibold text-[#F08B1F] hover:underline"
                >
                  +44 7418 640186
                </a>
              </div>
              <div>
                <span className="font-semibold text-[#01487E]">WhatsApp: </span>
                <a
                  href="https://wa.me/447418640186"
                  target="_blank"
                  className="font-semibold text-[#F08B1F] hover:underline"
                >
                  Open chat
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] text-[#01487E]/85">
              <span className="rounded-full bg-white/80 px-3 py-1">
                Fast response for leaks &amp; blockages
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1">
                Photos &amp; videos welcome
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1">
                West Midlands · East Midlands · London
              </span>
            </div>
          </div>

          {/* Right: image card with gradient bg & same style */}
          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-[#01487E]/20 bg-white shadow-md">
              <Image
                src="/images/ezo-hero-plumber.jpeg"
                alt="EZO plumber inspecting a leak"
                width={900}
                height={520}
                className="h-60 w-full object-cover sm:h-72"
              />
              <div className="px-4 py-3 text-xs text-[#01487E]/90">
                <p className="font-semibold text-[#01487E]">
                  The sooner we see it, the better
                </p>
                <p className="text-[11px]">
                  Photos or a short video of leaks, damp patches or blockages
                  help us plan the right fix before we arrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + INFO BOX */}
      <section className="space-y-4 border-t border-slate-200 pt-8">
        <SectionDivider label="Section 01 · Enquiry form" />

        <h2 className="mt-2 text-xl font-semibold text-[#01487E]">
          Quick enquiry form (sends straight to WhatsApp)
        </h2>
        <p className="max-w-2xl text-sm text-[#01487E]/90">
          Fill this in and we&apos;ll prepare a WhatsApp message for you with
          all the details. You can still edit it before you send. It&apos;s a
          simple way to give us the key info without typing everything on your
          phone.
        </p>

        <div className="grid gap-6 md:grid-cols-[3fr,2fr] md:items-start">
          {/* Contact form (already wired to WhatsApp in your component) */}
          <ContactForm />

          {/* Info / tips box */}
          <div className="space-y-3 rounded-2xl border border-[#01487E]/20 bg-[#01487E]/5 p-4 text-sm">
            <h3 className="text-sm font-semibold text-[#01487E]">
              What to include for a faster reply
            </h3>
            <ul className="space-y-1 text-xs text-[#01487E]/90">
              <li>
                • How long it&apos;s been happening (minutes, hours, days).
              </li>
              <li>• Where it is (kitchen, bathroom, ceiling, garden, etc.).</li>
              <li>• Photos or a short video if you can – really helpful.</li>
              <li>
                • If it&apos;s a rental, tell us if you&apos;re the tenant,
                landlord or agent.
              </li>
            </ul>

            <h4 className="mt-3 text-sm font-semibold text-[#01487E]">
              When is it an emergency?
            </h4>
            <p className="text-xs text-[#01487E]/90">
              Treat it as an emergency and call EZO straight away if:
            </p>
            <ul className="mt-1 space-y-1 text-xs text-[#01487E]/90">
              <li>• Water is spreading quickly or affecting electrics.</li>
              <li>• You can&apos;t safely use your toilet or bathroom.</li>
              <li>
                • A leak is coming through a ceiling or near light fittings.
              </li>
            </ul>
            <p className="mt-2 text-xs text-[#01487E]/80">
              For anything else, the form or WhatsApp chat is usually the best
              starting point – we&apos;ll guide you from there.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
