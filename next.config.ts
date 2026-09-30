import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "25mb",
    },
  },
  images: {
    qualities: [25, 50, 75, 80, 85, 90, 100],
  },
};

export default nextConfig;
