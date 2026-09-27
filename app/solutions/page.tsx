import { SolutionsHeroSection } from "@/components/solutions/SolutionsHeroSection";

import { SolutionsAdunniAiSection } from "@/components/solutions/SolutionsAdunniAiSection";
import { SolutionsCtaSection } from "@/components/solutions/SolutionsCtaSection";
import { SolutionsDisconnectSection } from "@/components/solutions/SolutionsDisconnectSection";
import { SolutionsWorkflowSection } from "@/components/solutions/SolutionsWorkflowSection";
import { SolutionsFeatureMatrixSection } from "@/components/solutions/SolutionsFeatureMatrixSection";
import { SolutionsConfigOutcomesSection } from "@/components/solutions/SolutionsConfigOutcomesSection";

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-bg-canvas">
      <SolutionsHeroSection />
      <SolutionsDisconnectSection />
      <SolutionsWorkflowSection />
      <SolutionsFeatureMatrixSection />
      <SolutionsAdunniAiSection />
      <SolutionsConfigOutcomesSection />
      <SolutionsCtaSection />
    </main>
  );
}
