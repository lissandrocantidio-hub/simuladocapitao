import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/anexos/cpa1-2016-sextante.pdf",
        destination: "/anexos/cpa1-2016-sextante.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
