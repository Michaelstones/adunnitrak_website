import { Metadata } from "next";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { LatestArticles } from "@/components/insights/LatestArticles";
import { WatchAndLearn } from "@/components/insights/WatchAndLearn";
import { FromTheField } from "@/components/insights/FromTheField";
import { IndustrialAIEducation } from "@/components/insights/IndustrialAIEducation";
import { InsightsNewsletter } from "@/components/insights/InsightsNewsletter";
import { InsightsCTA } from "@/components/insights/InsightsCTA";
import { getCombinedArticles } from "@/app/actions/getArticles";


export const metadata: Metadata = {
  title: "Insights | AdunniTrak",
  description: "Practical industrial knowledge for connected operations.",
};


export const revalidate = 0;
export default async function InsightsPage() {
  const articles = await getCombinedArticles();
  return (
    <main className="min-h-screen bg-[#0a0f1c]">
      <InsightsHero />
      <FeaturedInsight article={articles[0]} />
      <LatestArticles initialArticles={articles} />
      <WatchAndLearn />
      <FromTheField />
      <IndustrialAIEducation />
      <InsightsNewsletter />
      <InsightsCTA
        bgColor="bg-[#fff]"
        titleColor="text-[#0B1220]"
        descColor="text-[#5B6472]"
        hasBorder={true}
      />
    </main>
  );
}
