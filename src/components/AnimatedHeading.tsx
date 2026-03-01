"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function AnimatedHeading({
  children,
  subtitle,
  className = "",
}: AnimatedHeadingProps) {
  return (
    <div className={className}>
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-4 text-center text-3xl font-bold sm:text-4xl"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center text-white/50"
        >
          {subtitle}
        </motion.p>
      )}
      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className={`mx-auto mb-16 h-px w-24 origin-left bg-gradient-to-r from-[#FF00FF] to-transparent ${subtitle ? "-mt-12" : "mt-4"}`}
      />
    </div>
  );
}
