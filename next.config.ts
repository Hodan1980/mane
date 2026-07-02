import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contacts",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/track-record",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
