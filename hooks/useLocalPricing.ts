"use client";

import { useState, useEffect } from "react";

export type PlanRegion = "nigeria" | "international";

export function useLocalPricing() {
  const [region, setRegion] = useState<PlanRegion>("international");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // 1. URL parameter override for testing/preview (e.g., ?region=nigeria or ?currency=usd)
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const urlRegion = params.get("region")?.toLowerCase();
        const urlCurrency = params.get("currency")?.toLowerCase();

        if (urlRegion === "nigeria" || urlCurrency === "ngn") {
          setRegion("nigeria");
          return;
        }
        if (urlRegion === "international" || urlCurrency === "usd") {
          setRegion("international");
          return;
        }
      }
    } catch {
      // Ignore URL parsing errors
    }

    // 2. Client-side Timezone Detection (instant, zero network delay)
    // In IANA tz database, Nigeria is mapped to "Africa/Lagos".
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
      const isNigeriaTz =
        tz === "africa/lagos" ||
        tz.includes("lagos") ||
        tz.includes("w. central africa");

      if (isNigeriaTz) {
        setRegion("nigeria");
        return;
      }
    } catch (e) {
      console.warn("Timezone detection error:", e);
    }

    // 3. Platform Geo-headers verification (e.g. Vercel / Cloudflare edge headers via /api/geo)
    fetch("/api/geo")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country) {
          if (data.country === "NG") {
            setRegion("nigeria");
          } else {
            setRegion("international");
          }
        }
      })
      .catch(() => {
        // Fallback silently if API is unreachable
      });
  }, []);

  return {
    region,
    isNigeria: region === "nigeria",
    isMounted,
  };
}
