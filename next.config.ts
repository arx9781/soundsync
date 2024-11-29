import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lastfm.freetls.fastly.net'], // Add the allowed external image domain here
  },
};

export default nextConfig;
