// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🔹 Generate a static site we can upload to cPanel
  output: "export",

  // 🔹 Disable Next.js image optimizer (not available on static hosting like cPanel)
  images: {
    unoptimized: true,
  },

  // (optional) keep room for future config here
  // reactStrictMode: true,
};

export default nextConfig;
