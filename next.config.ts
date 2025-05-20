import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'utfs.io'},
      { hostname: 'ydwuryl0ys.ufs.sh'},
    ]
  },
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  }
};
export default nextConfig;
