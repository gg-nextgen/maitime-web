"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prodottiOpen, setProdottiOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProdottiOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {/* Prodotti Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setProdottiOpen(true)}
            onMouseLeave={() => setProdottiOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-white/80 transition-colors hover:text-white"
              onClick={() => setProdottiOpen(!prodottiOpen)}
            >
              Prodotti
              <svg
                className={`h-4 w-4 transition-transform ${prodottiOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {prodottiOpen && (
              <div className="absolute top-full left-1/2 z-50 mt-2 w-72 -translate-x-1/2 rounded-xl border border-white/10 bg-[#000020]/95 p-4 shadow-2xl backdrop-blur-xl">
                {/* OPERA */}
                <div className="mb-3">
                  <Link
                    href="/opera"
                    className="mb-1 flex items-center gap-2 text-sm font-bold text-[#FF00FF] hover:text-[#FF00FF]/80"
                    onClick={() => setProdottiOpen(false)}
                  >
                    MAITIME OPERA
                    <span className="rounded bg-[#FF00FF]/10 px-1.5 py-0.5 text-[10px] font-normal text-[#FF00FF]/70">
                      PMI
                    </span>
                  </Link>
                  <p className="mb-2 text-xs text-white/40">
                    L&apos;agente AI della tua PMI
                  </p>
                  <div className="ml-2 space-y-1">
                    <Link
                      href="/opera/piattaforma"
                      className="block text-xs text-white/60 transition-colors hover:text-white"
                      onClick={() => setProdottiOpen(false)}
                    >
                      Piattaforma
                    </Link>
                    <Link
                      href="/opera/come-funziona"
                      className="block text-xs text-white/60 transition-colors hover:text-white"
                      onClick={() => setProdottiOpen(false)}
                    >
                      Come Funziona
                    </Link>
                    <Link
                      href="/opera/risorse"
                      className="block text-xs text-white/60 transition-colors hover:text-white"
                      onClick={() => setProdottiOpen(false)}
                    >
                      Risorse
                    </Link>
                  </div>
                </div>

                <div className="my-3 border-t border-white/5" />

                {/* SECRETUM */}
                <div>
                  <Link
                    href="/secretum"
                    className="mb-1 flex items-center gap-2 text-sm font-bold text-[#06B6D4] hover:text-[#06B6D4]/80"
                    onClick={() => setProdottiOpen(false)}
                  >
                    MAITIME SECRETUM
                    <span className="rounded bg-[#06B6D4]/10 px-1.5 py-0.5 text-[10px] font-normal text-[#06B6D4]/70">
                      Coming Soon
                    </span>
                  </Link>
                  <p className="mb-2 text-xs text-white/40">
                    Privacy condominiale con AI
                  </p>
                  <div className="ml-2 space-y-1">
                    <Link
                      href="/secretum/funzionalita"
                      className="block text-xs text-white/60 transition-colors hover:text-white"
                      onClick={() => setProdottiOpen(false)}
                    >
                      Funzionalità
                    </Link>
                    <Link
                      href="/secretum/a-chi-si-rivolge"
                      className="block text-xs text-white/60 transition-colors hover:text-white"
                      onClick={() => setProdottiOpen(false)}
                    >
                      A Chi Si Rivolge
                    </Link>
                    <Link
                      href="/secretum/come-funziona"
                      className="block text-xs text-white/60 transition-colors hover:text-white"
                      onClick={() => setProdottiOpen(false)}
                    >
                      Come Funziona
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

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
          {/* OPERA section */}
          <div>
            <Link
              href="/opera"
              className="mb-1 block text-sm font-bold text-[#FF00FF]"
              onClick={() => setMenuOpen(false)}
            >
              MAITIME OPERA
            </Link>
            <div className="ml-3 space-y-2">
              <Link
                href="/opera/piattaforma"
                className="block text-sm text-white/60 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Piattaforma
              </Link>
              <Link
                href="/opera/come-funziona"
                className="block text-sm text-white/60 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Come Funziona
              </Link>
              <Link
                href="/opera/risorse"
                className="block text-sm text-white/60 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Risorse
              </Link>
            </div>
          </div>

          {/* SECRETUM section */}
          <div>
            <Link
              href="/secretum"
              className="mb-1 flex items-center gap-2 text-sm font-bold text-[#06B6D4]"
              onClick={() => setMenuOpen(false)}
            >
              MAITIME SECRETUM
              <span className="rounded bg-[#06B6D4]/10 px-1.5 py-0.5 text-[9px] text-[#06B6D4]/70">
                Coming Soon
              </span>
            </Link>
            <div className="ml-3 space-y-2">
              <Link
                href="/secretum/funzionalita"
                className="block text-sm text-white/60 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Funzionalità
              </Link>
              <Link
                href="/secretum/a-chi-si-rivolge"
                className="block text-sm text-white/60 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                A Chi Si Rivolge
              </Link>
            </div>
          </div>

          <div className="border-t border-white/5" />

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
