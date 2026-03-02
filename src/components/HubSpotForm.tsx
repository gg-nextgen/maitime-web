"use client";

import { useEffect, useRef } from "react";

export default function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          portalId: "145692411",
          formId: "400976a0-44c4-4275-bff2-7ce7cbc19de5",
          region: "eu1",
          target: `#${containerRef.current.id}`,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div id="hubspot-form-container" ref={containerRef} />;
}

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (opts: {
          portalId: string;
          formId: string;
          region: string;
          target?: string;
        }) => void;
      };
    };
  }
}
