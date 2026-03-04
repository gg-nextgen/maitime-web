"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getCookieConsent } from "./CookieBanner";

export default function ConditionalAnalytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(getCookieConsent() === "accepted");

    const handleChange = () => {
      setConsent(getCookieConsent() === "accepted");
    };
    window.addEventListener("cookie-consent-change", handleChange);
    return () =>
      window.removeEventListener("cookie-consent-change", handleChange);
  }, []);

  if (!consent) return null;

  return <GoogleAnalytics gaId="G-V7L3SGZNLB" />;
}
