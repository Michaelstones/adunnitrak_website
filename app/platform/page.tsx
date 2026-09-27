
import CtaSection from "@/components/home/CtaSection";
import PlatformHeroSection from "@/components/platform/PlatformHeroSection";
import ConfigurationGridSection from "@/components/platform/ConfigurationGridSection";
import DomainCardsSection from "@/components/platform/DomainCardsSection";
import OperationalEventTimeline from "@/components/platform/OperationalEventTimeline";
import AdunniAISection from "@/components/platform/AdunniAISection";
import RoleBasedAccessSection from "@/components/platform/RoleBasedAccessSection";
import FoundationalControlsSection from "@/components/platform/FoundationalControlsSection";
import ImplementationApproachTimeline from "@/components/platform/ImplementationApproachTimeline";
import SecurityDisclaimerSection from "@/components/platform/SecurityDisclaimerSection";
import FaqSection from "@/components/platform/FaqSection";
import { SlideUp } from "@/components/animations/SlideUp";

export default function PlatformPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <PlatformHeroSection />

        {/* Section 2: Configuration */}
        <SlideUp><ConfigurationGridSection /></SlideUp>

        {/* Section 3: Domain Cards */}
        <SlideUp><DomainCardsSection /></SlideUp>

        {/* Section 4: Timeline 1 */}
        <SlideUp><OperationalEventTimeline /></SlideUp>

        {/* Section 5: Adunni AI */}
        <SlideUp><AdunniAISection /></SlideUp>

        {/* Section 6: Role Based Access */}
        <SlideUp><RoleBasedAccessSection /></SlideUp>

        {/* Section 7: Foundational Controls */}
        <SlideUp><FoundationalControlsSection /></SlideUp>

        {/* Section 8: Implementation Timeline */}
        <SlideUp><ImplementationApproachTimeline /></SlideUp>

        {/* Section 9: Security Disclaimer */}
        <SlideUp><SecurityDisclaimerSection /></SlideUp>

        {/* Section 10: FAQ */}
        <SlideUp><FaqSection /></SlideUp>
      </main>

      {/* Footer Area: CTA and Footer */}

      <SlideUp><CtaSection /></SlideUp>
    </div>
  );
}
