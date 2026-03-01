"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlowCard({
  children,
  className = "",
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-[#FF00FF]/50 sm:p-8 ${className}`}
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FF00FF]/10 via-transparent to-[#3B82F6]/10" />
      </div>
      {/* Shimmer line on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF00FF]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
