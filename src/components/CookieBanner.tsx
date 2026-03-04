"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "maitime-cookie-consent";

export type CookieConsent = "accepted" | "rejected" | null;

export function getCookieConsent(): CookieConsent {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function resetCookieConsent() {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.dispatchEvent(new Event("cookie-consent-change"));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === null) {
      setVisible(true);
    }

    const handleChange = () => {
      if (getCookieConsent() === null) {
        setVisible(true);
      }
    };
    window.addEventListener("cookie-consent-change", handleChange);
    return () =>
      window.removeEventListener("cookie-consent-change", handleChange);
  }, []);

  function handleChoice(choice: "accepted" | "rejected") {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-change"));
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-maitime-border bg-[rgba(0,0,20,0.97)] px-4 py-4 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-center text-sm text-white/80 sm:text-left">
          Utilizziamo cookie tecnici e, con il tuo consenso, cookie di analisi
          per migliorare la tua esperienza.{" "}
          <Link
            href="/cookie-policy"
            className="text-maitime-accent hover:underline"
          >
            Scopri di più
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => handleChoice("rejected")}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            Rifiuta
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="rounded-lg bg-maitime-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
