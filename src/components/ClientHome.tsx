"use client";

import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

const HeroChat = dynamic(() => import("@/components/HeroChat"), {
  ssr: false,
});

const FloatingChat = dynamic(() => import("@/components/FloatingChat"), {
  ssr: false,
});

export { ParticleBackground, HeroChat, FloatingChat };
