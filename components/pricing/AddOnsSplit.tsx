"use client";

import { useEffect, useState } from "react";

/* ─── Types & Data ─────────────────────────────────────────────── */
type PlanRegion = "nigeria" | "international";

const EQUIPMENT_CARDS = [
  {
    plan: "Starter",
    description:
      "Operational equipment references required for production, downtime and reporting. No complete asset register.",
  },
  {
    plan: "Growth",
    description:
      "A restricted equipment list configured during onboarding, supporting downtime, work orders and PM tasks.",
  },
  {
    plan: "Enterprise",
    description:
      "Full asset register, equipment hierarchy, sub-equipment relationships and connected reliability history.",
  },
];

const USERS_CARDS = [
  {
    plan: "Starter",
    baseText: "10 full users · 200 shared AI requests/site/month",
    nigeriaAddOn: "Additional user ₦20,000/month",
    intlAddOn: "Additional user $15/month",
  },
  {
    plan: "Growth",
    baseText: "25 full users · 750 shared AI requests/site/month",
    nigeriaAddOn: "Additional user ₦25,000/month",
    intlAddOn: "Additional user $20/month",
  },
  {
    plan: "Enterprise",
    baseText: "User limits and AI allowances defined in the commercial proposal.",
    nigeriaAddOn: null,
    intlAddOn: null,
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default function PlanDetailsSplit() {
  const [planRegion, setPlanRegion] = useState<PlanRegion>("international");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      // Auto-detect location based on timezone
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && tz.startsWith("Africa")) {
        setPlanRegion("nigeria");
      }
    } catch (e) {
      console.warn("Timezone detection failed", e);
    }
  }, []);

  return (
    <section className="bg-[#F9FAFB] py-16 lg:py-24 border-t border-[#ECEDEE]">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Two-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Equipment Structure */}
          <div className="flex flex-col">
            <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
              Equipment structure by plan
            </p>
            <h2 className="mt-2 font-inter font-extrabold text-[24px] md:text-[28px] leading-[32px] tracking-[-0.01em] text-[#0B1220]">
              The right level of equipment visibility
            </h2>

            <div className="mt-8 flex flex-col gap-4">
              {EQUIPMENT_CARDS.map((card) => (
                <article
                  key={card.plan}
                  className="flex flex-col rounded-[12px] bg-white border border-[#E2E6ED] shadow-sm p-6"
                >
                  <h3 className="text-[16px] font-bold text-[#0B1220] font-inter">
                    {card.plan}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Users & AI Usage */}
          <div className="flex flex-col">
            <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
              Users and Adunni AI usage
            </p>
            <h2 className="mt-2 font-inter font-extrabold text-[24px] md:text-[28px] leading-[32px] tracking-[-0.01em] text-[#0B1220]">
              Built for collaborative industrial teams
            </h2>

            <div className="mt-8 flex flex-col gap-4">
              {USERS_CARDS.map((card) => (
                <article
                  key={card.plan}
                  className="flex flex-col rounded-[12px] bg-white border border-[#E2E6ED] shadow-sm p-6"
                >
                  <h3 className="text-[16px] font-bold text-[#0B1220] font-inter">
                    {card.plan}
                  </h3>

                  <div className="mt-2 text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter min-h-[22px]">
                    {card.baseText}

                    {/* Dynamic Location-Based Pricing for Add-ons */}
                    {card.nigeriaAddOn && card.intlAddOn && (
                      <span
                        className={`transition-opacity duration-300 ${!isMounted ? "opacity-0" : "opacity-100"
                          }`}
                      >
                        {" · "}
                        {planRegion === "nigeria"
                          ? card.nigeriaAddOn
                          : card.intlAddOn}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Footer Note */}
            <p className="mt-6 text-[12px] leading-[18px] font-normal text-[#7C8798] font-inter">
              The Adunni AI allowance is shared across authorised users within the subscribed site.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}