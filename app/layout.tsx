import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";

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
              <span className="truncate pr-2">
                24/7 emergency callouts · EZO Plumbing and Heating Ltd
              </span>
              <a
                href="tel:+44 7418 640186"
                className="whitespace-nowrap font-semibold text-[#F08B1F] transition-colors hover:text-orange-200"
              >
                Call now: +44 7418 640186
              </a>
            </div>
          </div>

          {/* Header with mobile menu */}
          <SiteHeader />

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
