import { Metadata } from "next";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { InsightsTopicBrowser } from "@/components/insights/InsightsTopicBrowser";
import { LatestArticles } from "@/components/insights/LatestArticles";
import { WatchAndLearn } from "@/components/insights/WatchAndLearn";
import { FromTheField } from "@/components/insights/FromTheField";
import { IndustrialAIEducation } from "@/components/insights/IndustrialAIEducation";
import { InsightsNewsletter } from "@/components/insights/InsightsNewsletter";
import { InsightsCTA } from "@/components/insights/InsightsCTA";

export const metadata: Metadata = {
  title: "Insights | AdunniTrak",
  description: "Practical industrial knowledge for connected operations.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1c]">
      <InsightsHero />
      <FeaturedInsight />
      {/* <InsightsTopicBrowser /> */}
      <LatestArticles />
      <WatchAndLearn />
      <FromTheField />
      <IndustrialAIEducation />
      <InsightsNewsletter />
      <InsightsCTA />
    </main>
  );
}
