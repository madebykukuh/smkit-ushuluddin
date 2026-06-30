import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 750, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 480, 640],
  },
};

export default nextConfig;
