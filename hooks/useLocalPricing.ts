"use client";

import { useState, useEffect } from "react";

export type PlanRegion = "nigeria" | "canada" | "international";

export function useLocalPricing() {
  const [region, setRegion] = useState<PlanRegion>("international");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const isCanada = [
        "America/St_Johns", "America/Halifax", "America/Glace_Bay",
        "America/Moncton", "America/Goose_Bay", "America/Blanc-Sablon",
        "America/Toronto", "America/Nipigon", "America/Thunder_Bay",
        "America/Iqaluit", "America/Pangnirtung", "America/Atikokan",
        "America/Winnipeg", "America/Rainy_River", "America/Resolute",
        "America/Rankin_Inlet", "America/Regina", "America/Swift_Current",
        "America/Edmonton", "America/Cambridge_Bay", "America/Yellowknife",
        "America/Inuvik", "America/Creston", "America/Dawson_Creek",
        "America/Fort_Nelson", "America/Vancouver", "America/Whitehorse",
        "America/Dawson"
      ].includes(timeZone) || timeZone.startsWith("Canada/");

      if (timeZone.startsWith("Africa/")) {
        setRegion("nigeria");
      } else if (isCanada) {
        setRegion("canada");
      } else {
        setRegion("international"); // Default for everywhere else (USD)
      }
    } catch (error) {
      setRegion("international");
    }
  }, []);

  return { region, isMounted };
}
