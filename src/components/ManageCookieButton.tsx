"use client";

import { resetCookieConsent } from "./CookieBanner";

export function ManageCookieButton() {
  return (
    <button
      onClick={resetCookieConsent}
      className="hover:text-white/80"
    >
      Gestisci Cookie
    </button>
  );
}
