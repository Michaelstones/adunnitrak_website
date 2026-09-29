"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

/* ─── Types & Data ─────────────────────────────────────────────── */
type BillingCycle = "monthly" | "annual";
type PlanRegion = "nigeria" | "international";

interface PlanFeature {
  label: string;
}

interface Plan {
  id: string;
  overline: string;
  name: string;
  badge?: string;
  tagline: string;
  nigeriaMonthly: string | null;
  nigeriaAnnual: string | null;
  intlMonthly: string | null;
  intlAnnual: string | null;
  unit: string;
  isPopular?: boolean;
  ctaLabel: string;
  ctaHref: string;
  ctaStyle: "light" | "blue" | "dark";
  footerText: string;
  features: PlanFeature[];
}

const PLANS: Plan[] = [
  {
    id: "starter",
    overline: "Operations core",
    name: "Starter",
    tagline: "Facilities replacing paper, spreadsheets and disconnected shift reporting.",
    nigeriaMonthly: "₦500,000",
    nigeriaAnnual: "₦450,000",
    intlMonthly: "$399",
    intlAnnual: "$359",
    unit: "/site/month",
    ctaLabel: "Book a starter demo",
    ctaHref: "/demo",
    ctaStyle: "light",
    footerText: "Start with clearer daily operations and dependable shift information.",
    features: [
      { label: "Complete Operations suite" },
      { label: "Daily shift and operational records" },
      { label: "Production and feed-plan tracking" },
      { label: "Downtime and incident reporting" },
      { label: "Shift handover and communication" },
      { label: "Picture reporting and evidence" },
      { label: "10 full users" },
      { label: "200 shared Adunni AI requests/site/month" },
      { label: "Cloud hosting and remote support" },
    ],
  },
  {
    id: "growth",
    overline: "Operations + maintenance",
    name: "Growth",
    badge: "MOST COMMON",
    tagline: "Plants ready to coordinate corrective, planned and preventive maintenance.",
    nigeriaMonthly: "₦1,200,000",
    nigeriaAnnual: "₦1,080,000",
    intlMonthly: "$899",
    intlAnnual: "$809",
    unit: "/site/month",
    isPopular: true,
    ctaLabel: "Book a Growth demo",
    ctaHref: "/demo",
    ctaStyle: "blue",
    footerText: "Move from recording problems to coordinating the work to resolve them.",
    features: [
      { label: "Everything in Starter" },
      { label: "P1–P4 maintenance workflows" },
      { label: "Work orders and PM task register" },
      { label: "PM schedule and execution log" },
      { label: "Safety and work-execution documentation" },
      { label: "Restricted equipment list" },
      { label: "25 full users" },
      { label: "750 shared Adunni AI requests/site/month" },
      { label: "Priority remote support" },
    ],
  },
  {
    id: "enterprise",
    overline: "Reliability + plant intelligence",
    name: "Enterprise",
    tagline: "Organisations requiring complete asset, inventory and reliability intelligence.",
    nigeriaMonthly: null,
    nigeriaAnnual: null,
    intlMonthly: null,
    intlAnnual: null,
    unit: "Proposal based on requirements",
    ctaLabel: "Contact enterprise sales",
    ctaHref: "/contact",
    ctaStyle: "dark",
    footerText: "Connect execution with asset, inventory and reliability intelligence.",
    features: [
      { label: "Everything in Growth" },
      { label: "Full asset register and hierarchy" },
      { label: "Inventory database and stock management" },
      { label: "Reliability performance and analytics" },
      { label: "FMEA live tracker and knowledge base" },
      { label: "Advanced Adunni AI and executive reporting" },
      { label: "Multi-site intelligence and integrations" },
      { label: "User and AI allowances defined in proposal" },
    ],
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default function PricingCards() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
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
      console.warn("Timezone detection failed, defaulting to international", e);
    }
  }, []);

  function getPrice(plan: Plan): string {
    if (plan.nigeriaMonthly === null && plan.intlMonthly === null) return "Custom pricing";

    if (planRegion === "nigeria") {
      return billingCycle === "monthly" ? (plan.nigeriaMonthly ?? "") : (plan.nigeriaAnnual ?? "");
    }
    return billingCycle === "monthly" ? (plan.intlMonthly ?? "") : (plan.intlAnnual ?? "");
  }

  function getPriceUnit(plan: Plan): string {
    return plan.unit;
  }

  return (
    <section className="bg-[#F9FAFB] py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Header bar above cards */}
        <SlideUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-[720px]">
            <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
              Select your pricing region
            </p>
            <h2 className="text-[#0B1220] font-inter font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em]">
              View pricing for your organisation
            </h2>
            <p className="mt-2 text-[13px] leading-[20px] font-normal text-[#7C8798] font-inter">
              Save 10% with annual billing on eligible Nigerian plans. International
              annual pricing is displayed separately for each plan. All subscription
              prices are charged per site and exclude applicable taxes.
            </p>
          </div>

          {/* Toggles */}
          <div className="flex items-center gap-4">
            {/* Region Toggle */}
            <div className="flex items-center bg-white border border-[#E2E6ED] rounded-full p-1 shadow-sm">
              <button
                onClick={() => setPlanRegion("nigeria")}
                className={`px-4 py-1.5 text-[13px] font-semibold rounded-full transition-colors ${planRegion === "nigeria" ? "bg-[#0F58F5] text-white" : "text-[#5B6472] hover:text-[#0B1220]"
                  }`}
              >
                Nigeria
              </button>
              <button
                onClick={() => setPlanRegion("international")}
                className={`px-4 py-1.5 text-[13px] font-semibold rounded-full transition-colors ${planRegion === "international" ? "bg-[#0F58F5] text-white" : "text-[#5B6472] hover:text-[#0B1220]"
                  }`}
              >
                International
              </button>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center bg-white border border-[#E2E6ED] rounded-full p-1 shadow-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 text-[13px] font-semibold rounded-full transition-colors ${billingCycle === "monthly" ? "bg-[#0F58F5] text-white" : "text-[#5B6472] hover:text-[#0B1220]"
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 py-1.5 text-[13px] font-semibold rounded-full transition-colors ${billingCycle === "annual" ? "bg-[#0F58F5] text-white" : "text-[#5B6472] hover:text-[#0B1220]"
                  }`}
              >
                Annual
              </button>
            </div>
          </div>
        </SlideUp>

        {/* Cards grid */}
        <StaggerContainer staggerChildren={0.12} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.id}>
              <PlanCard
                plan={plan}
                price={getPrice(plan)}
                priceUnit={getPriceUnit(plan)}
                isMounted={isMounted}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─── PlanCard ───────────────────────────────────────────── */
interface PlanCardProps {
  plan: Plan;
  price: string;
  priceUnit: string;
  isMounted: boolean;
}

function PlanCard({ plan, price, priceUnit, isMounted }: PlanCardProps) {
  const isPopular = plan.isPopular;
  const isEnterprise = plan.nigeriaMonthly === null && plan.intlMonthly === null;

  return (
    <article
      className={`relative flex flex-col rounded-[16px] bg-white transition-shadow duration-300 p-8 ${isPopular ? "border-[2px] border-[#0F58F5] shadow-lg" : "border border-[#E2E6ED] shadow-sm"
        }`}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-[12px] left-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] leading-[14px] font-[800] tracking-[0.04em] uppercase bg-[#0F58F5] text-white">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1">
        <span className="text-[12px] leading-[16px] text-[#7C8798] font-inter mb-1">
          {plan.overline}
        </span>
        <h3 className="text-[24px] leading-[32px] font-[800] text-[#0B1220] font-inter">
          {plan.name}
        </h3>
        <p className="mt-4 text-[14px] leading-[22px] font-[400] text-[#5B6472] font-inter min-h-[44px]">
          {plan.tagline}
        </p>

        {/* Price */}
        <div className="mt-8 flex items-baseline gap-1 h-[48px]">
          {!isMounted ? (
            <div className="w-[180px] h-[40px] rounded animate-pulse bg-[#E2E6ED]" />
          ) : (
            <div className={`flex items-baseline gap-1 transition-opacity duration-300 ${!isMounted ? "opacity-0" : "opacity-100"}`}>
              <span className={`font-inter font-[800] tracking-[-0.01em] text-[#0B1220] ${isEnterprise ? "text-[28px]" : "text-[36px]"}`}>
                {price}
              </span>
              <span className={`text-[14px] leading-[22px] font-[400] text-[#5B6472] font-inter ${isEnterprise ? "ml-0 block mt-1" : "ml-1"}`}>
                {priceUnit}
              </span>
            </div>
          )}
        </div>

        {/* Features list */}
        <ul className="mt-8 flex flex-col gap-4 flex-1">
          {plan.features.map((feat) => (
            <li key={feat.label} className="flex items-start gap-3">
              <span className="mt-1 shrink-0">
                <Check className="w-[14px] h-[14px] text-[#0F58F5]" strokeWidth={3} />
              </span>
              <span className="text-[14px] leading-[22px] font-[400] text-[#0B1220] font-inter">
                {feat.label}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA & Footer */}
        <div className="mt-10 flex flex-col gap-4">
          <Link
            href={plan.ctaHref}
            className={`w-full flex items-center justify-center h-[48px] rounded-[8px] text-[15px] font-[600] transition-colors ${plan.ctaStyle === "light"
                ? "bg-[#F4F5F7] text-[#0B1220] hover:bg-[#E2E6ED]"
                : plan.ctaStyle === "blue"
                  ? "bg-[#0F58F5] text-white hover:bg-[#093593]"
                  : "bg-[#050F1E] text-white hover:bg-[#030A14]"
              }`}
          >
            {plan.ctaLabel}
          </Link>
          <p className="text-[12px] leading-[18px] text-[#7C8798] font-inter">
            {plan.footerText}
          </p>
        </div>
      </div>
    </article>
  );
}