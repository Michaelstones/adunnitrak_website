import { AdunniAiHeroSection } from "@/components/adunni-ai/AdunniAiHeroSection";
import { AdunniAiFeaturesSection } from "@/components/adunni-ai/AdunniAiFeaturesSection";
import { AdunniAiGovernanceSection } from "@/components/adunni-ai/AdunniAiGovernanceSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "Adunni AI | AdunniTrak",
  description: "Industrial intelligence grounded in your operation.",
};

export default function AdunniAiPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <AdunniAiHeroSection />
      <AdunniAiFeaturesSection />
      <AdunniAiGovernanceSection />
      <CtaSection />
    </main>
  );
}
