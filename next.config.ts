import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local assets live in /public/images; allow common widths used by the page.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
