"use client";

import { useEffect, useRef } from "react";

interface HubSpotFormProps {
  formId: string;
  portalId?: string;
  region?: string;
}

export default function HubSpotForm({
  formId,
  portalId = "145692411",
  region = "eu1",
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const createForm = () => {
      if (containerRef.current && window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: containerRef.current,
        });
      }
    };

    if (window.hbspt) {
      createForm();
      return;
    }

    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = createForm;
    document.head.appendChild(script);
  }, [formId, portalId, region]);

  return <div ref={containerRef} />;
}

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (opts: {
          portalId: string;
          formId: string;
          region: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}
