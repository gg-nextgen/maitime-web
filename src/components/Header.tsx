"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#000020]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/MAITIME_Logo_Dark.png"
            alt="MAITIME Logo"
            width={160}
            height={40}
            className="hidden h-10 w-auto sm:block"
            priority
          />
          <Image
            src="/assets/MAITIME_Logo_Header_Mobile_Dark.png"
            alt="MAITIME Logo"
            width={40}
            height={40}
            className="h-10 w-auto sm:hidden"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/piattaforma"
            className="text-white/80 transition-colors hover:text-white"
          >
            Piattaforma
          </Link>
          <Link
            href="/come-funziona"
            className="text-white/80 transition-colors hover:text-white"
          >
            Come Funziona
          </Link>
          <Link
            href="/risorse"
            className="text-white/80 transition-colors hover:text-white"
          >
            Risorse
          </Link>
          <Link
            href="/chi-siamo"
            className="text-white/80 transition-colors hover:text-white"
          >
            Chi Siamo
          </Link>
          <Link
            href="/contatti"
            className="text-white/80 transition-colors hover:text-white"
          >
            Contatti
          </Link>
          <a
            href="https://gg-nextgen.ai/meetings/egiardini"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button rounded-lg bg-gradient-to-r from-[#5B21B6] to-[#FF00FF] px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            Prenota una Demo
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/[0.06] bg-[#000020]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <Link
            href="/piattaforma"
            className="text-white/80 transition-colors hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Piattaforma
          </Link>
          <Link
            href="/come-funziona"
            className="text-white/80 transition-colors hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Come Funziona
          </Link>
          <Link
            href="/risorse"
            className="text-white/80 transition-colors hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Risorse
          </Link>
          <Link
            href="/chi-siamo"
            className="text-white/80 transition-colors hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Chi Siamo
          </Link>
          <Link
            href="/contatti"
            className="text-white/80 transition-colors hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Contatti
          </Link>
          <a
            href="https://gg-nextgen.ai/meetings/egiardini"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button rounded-lg bg-gradient-to-r from-[#5B21B6] to-[#FF00FF] px-5 py-2.5 text-center text-sm font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Prenota una Demo
          </a>
        </nav>
      )}
    </header>
  );
}
