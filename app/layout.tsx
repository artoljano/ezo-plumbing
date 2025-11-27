// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "EZO Plumbing and Heating Ltd – Emergency Plumbers in West Midlands, East Midlands & London",
  description:
    "EZO Plumbing and Heating Ltd provides 24/7 emergency plumbers across the West Midlands, East Midlands and London. Fast response for leaks, bursts, blockages, heating issues and bathroom installs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen bg-slate-50 text-slate-900`}
      >
        <div className="flex min-h-screen flex-col">
          {/* Top strip */}
          <div className="border-b border-[#01487E]/30 bg-[#01487E] text-xs text-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-1.5">
              <span>
                24/7 emergency callouts · EZO Plumbing and Heating Ltd
              </span>
              <a
                href="tel:+447000000000"
                className="font-semibold text-[#F08B1F] transition-colors hover:text-orange-200"
              >
                Call now: +44 7000 000000
              </a>
            </div>
          </div>

          {/* Header */}
          <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
              {/* Logo + name */}
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/ezo-logo.jpeg"
                  alt="EZO Plumbing and Heating Ltd"
                  width={260}
                  height={260}
                  className="h-16 w-auto sm:h-20"
                  priority
                />
                <div className="hidden leading-tight sm:block">
                  <p className="text-lg font-semibold text-[#01487E] sm:text-xl">
                    EZO Plumbing and Heating Ltd
                  </p>
                  <p className="text-xs text-slate-500">
                    Plumbing · Heating · Emergency callouts
                  </p>
                </div>
              </Link>

              {/* Nav links */}
              <nav className="hidden items-center gap-6 text-base sm:flex">
                <Link
                  href="/"
                  className="text-[#01487E] transition-colors hover:text-[#F08B1F]"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-[#01487E] transition-colors hover:text-[#F08B1F]"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-[#01487E] transition-colors hover:text-[#F08B1F]"
                >
                  Services
                </Link>
                <Link
                  href="/areas"
                  className="text-[#01487E] transition-colors hover:text-[#F08B1F]"
                >
                  Areas
                </Link>
                <Link
                  href="/contact"
                  className="text-[#01487E] transition-colors hover:text-[#F08B1F]"
                >
                  Contact
                </Link>
              </nav>

              {/* Call button */}
              <a
                href="tel:+447000000000"
                className="rounded-lg bg-[#F08B1F] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#ff9c32]"
              >
                Call EZO
              </a>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-slate-200 bg-slate-100">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>© {year} EZO Plumbing and Heating Ltd. All rights reserved.</p>
              <p>
                Plumbing &amp; heating for the West Midlands, East Midlands
                &amp; London.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
