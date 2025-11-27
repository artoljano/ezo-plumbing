"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Top row */}
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        {/* Logo + name (always visible, compact on mobile) */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/ezo-logo.jpeg"
            alt="EZO Plumbing and Heating Ltd"
            width={200}
            height={200}
            className="h-12 w-auto sm:h-16"
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[#01487E] sm:text-lg">
              EZO Plumbing and Heating Ltd
            </p>
            <p className="text-[10px] text-slate-500 sm:text-xs">
              Plumbing · Heating · Emergency callouts
            </p>
          </div>
        </Link>

        {/* Desktop nav + call */}
        <div className="hidden items-center gap-6 sm:flex">
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "font-semibold text-[#F08B1F]"
                    : "text-[#01487E] transition-colors hover:text-[#F08B1F]"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+447000000000"
            className="rounded-lg bg-[#F08B1F] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#ff9c32]"
          >
            Call EZO
          </a>
        </div>

        {/* Mobile: call + hamburger */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="tel:+447000000000"
            className="inline-flex items-center justify-center rounded-md bg-[#F08B1F] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm hover:bg-[#ff9c32]"
          >
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="sr-only">Toggle navigation</span>
            {/* Simple hamburger / close icon */}
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-4 rounded bg-slate-800 transition-transform ${
                  open ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded bg-slate-800 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded bg-slate-800 transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white/98 sm:hidden">
          <nav className="mx-auto max-w-5xl space-y-1 px-4 py-3 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2 ${
                  isActive(link.href)
                    ? "bg-[#01487E]/5 font-semibold text-[#01487E]"
                    : "text-[#01487E] hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+447000000000"
              className="mt-2 block rounded-md bg-[#F08B1F] px-2 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#ff9c32]"
            >
              Call EZO now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
