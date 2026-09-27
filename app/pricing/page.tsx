"use client";

import { useState } from "react";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import FeatureComparisonTable from "@/components/pricing/FeatureComparisonTable";
import AddOnsSplit from "@/components/pricing/AddOnsSplit";
import PricingGuarantees from "@/components/pricing/PricingGuarantees";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";
import PricingTrustBar from "@/components/pricing/PricingTrustBar";
import OnboardingEnterpriseSplit from "@/components/pricing/OnboardingEnterpriseSplit";
import OptionalHardwareSection from "@/components/pricing/OptionalHardwareSection";




export default function PricingPage() {


  return (
    <>


      <main>
        {/* 1. Hero + billing toggle + region selector */}
        <PricingHero

        />

        {/* 2. Pricing cards (3 tiers) */}
        <PricingCards

        />

        {/* 3. Feature comparison table */}
        <FeatureComparisonTable />

        {/* 4. Two-column: Nigerian vs International differentiators */}
        <AddOnsSplit />
        <OnboardingEnterpriseSplit />
        <OptionalHardwareSection />

        {/* 5. Side-by-side guarantees */}
        <PricingGuarantees />

        {/* 6. FAQ accordion */}
        <PricingFAQ />

        {/* 7. CTA banner */}
        <PricingCTA />

        {/* 8. Trust / compliance note bar */}
        <PricingTrustBar />
      </main>

    </>
  );
}
