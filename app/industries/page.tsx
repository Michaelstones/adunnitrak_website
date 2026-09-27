import { IndustriesHeroSection } from "@/components/industries/IndustriesHeroSection";
import { IndustriesGridSection } from "@/components/industries/IndustriesGridSection";
import { IndustryDetailsSections } from "@/components/industries/IndustryDetailsSections";
import { IndustriesDeploymentSection } from "@/components/industries/IndustriesDeploymentSection";
import { IndustriesFaqSection } from "@/components/industries/IndustriesFaqSection";
import { IndustriesCtaSection } from "@/components/industries/IndustriesCtaSection";
import { SlideUp } from "@/components/animations/SlideUp";

export const metadata = {
  title: "Industries | AdunniTrak",
  description: "Operational intelligence for asset-intensive industries.",
};

export default function IndustriesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <IndustriesHeroSection />
      <SlideUp><IndustriesGridSection /></SlideUp>
      <SlideUp><IndustryDetailsSections /></SlideUp>
      <SlideUp><IndustriesDeploymentSection /></SlideUp>
      <SlideUp><IndustriesFaqSection /></SlideUp>
      <SlideUp><IndustriesCtaSection /></SlideUp>
    </main>
  );
}
