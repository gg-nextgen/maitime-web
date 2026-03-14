import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/piattaforma",
        destination: "/opera/piattaforma",
        permanent: true,
      },
      {
        source: "/piattaforma/:slug",
        destination: "/opera/piattaforma/:slug",
        permanent: true,
      },
      {
        source: "/come-funziona",
        destination: "/opera/come-funziona",
        permanent: true,
      },
      {
        source: "/risorse",
        destination: "/opera/risorse",
        permanent: true,
      },
      {
        source: "/risorse/:slug",
        destination: "/opera/risorse/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
