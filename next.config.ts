import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    forceSwcTransforms: false,
  },
};

export default nextConfig;
