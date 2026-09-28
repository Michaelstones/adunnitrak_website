"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, FileText, Link2, Gauge, History } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import insightsData from "@/data/insights.json";

/* ─── Types ─────────────────────────────────────────────── */
export interface Article {
  id: string;
  slug: string;
  iconName: "FileText" | "Link2" | "Gauge" | "History";
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

interface InsightsHubProps {
  initialTopics?: string[];
  initialArticles?: Article[];
}

/* ─── Default CMS Data Mapping ────────────────────── */
const DEFAULT_TOPICS = [
  "All topics",
  "Operations",
  "Downtime",
  "Maintenance",
  "Reliability & FMEA",
  "Inventory & resources",
  "Workforce & shift management",
  "Adunni AI",
  "Industrial digital transformation",
  "Product updates",
];

// Helper to determine icon based on category
const getIconForCategory = (category: string): "FileText" | "Link2" | "Gauge" | "History" => {
  const cat = category.toLowerCase();
  if (cat.includes("transformation") || cat.includes("connected")) return "Link2";
  if (cat.includes("operations") || cat.includes("control")) return "Gauge";
  if (cat.includes("downtime") || cat.includes("history")) return "History";
  return "FileText"; // Default fallback
};

// Map the detailed JSON structure to the flatter card structure
const JSON_ARTICLES: Article[] = insightsData.articles.map((article) => {
  // Extract the first paragraph block to use as the card description
  const firstParagraph = article.blocks.find((b: any) => b.type === "paragraph")?.text || "";
  const description = firstParagraph.length > 140 ? firstParagraph.substring(0, 140) + "..." : firstParagraph;

  return {
    id: article.slug,
    slug: article.slug,
    iconName: getIconForCategory(article.category),
    category: article.category,
    title: article.title,
    description: description,
    author: article.author.name,
    date: article.publishedDate,
  };
});

/* ─── Icon Map ───────────────────────────────────────────── */
const IconMap = {
  FileText,
  Link2,
  Gauge,
  History,
};

/* ─── Component ──────────────────────────────────────────── */
export function LatestArticles({
  initialTopics = DEFAULT_TOPICS,
  initialArticles = JSON_ARTICLES, // Using the dynamically mapped JSON data
}: InsightsHubProps) {
  const [activeTopic, setActiveTopic] = useState("All topics");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchesTopic = activeTopic === "All topics" || article.category === activeTopic;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTopic && matchesSearch;
    });
  }, [activeTopic, searchQuery, initialArticles]);

  return (
    <>
      {/* ─── Topic Browser Section ─── */}
      <section className="py-16 lg:py-24 bg-[#EEF1F6]">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
          <SlideUp>
            <div className="max-w-[720px] mb-12">
              <span className="text-[#0F58F5] font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase mb-3 block">
                Explore the knowledge centre
              </span>
              <h2 className="text-[#0B1220] font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] mb-4">
                Browse insights by operational topic
              </h2>
              <p className="text-[#5B6472] font-inter text-[14px] md:text-[15px] leading-[24px]">
                Choose a topic to find relevant articles, videos, field observations and platform guidance.
              </p>
            </div>
          </SlideUp>

          <FadeIn delay={0.2}>
            <div className="max-w-[600px] mb-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#A0ABBA]" />
              <input
                type="text"
                placeholder="Search topic, category......."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E2E6ED] rounded-[8px] py-3.5 pl-11 pr-4 text-[#0B1220] font-inter text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[#0F58F5]/20 focus:border-[#0F58F5] transition-shadow shadow-sm placeholder:text-[#A0ABBA]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-3">
              {initialTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`px-4 py-2 rounded-full font-inter text-[13px] leading-[20px] font-medium transition-colors shadow-sm ${activeTopic === topic
                    ? "bg-[#0F58F5] text-white hover:bg-[#093593]"
                    : "bg-white text-[#5B6472] border border-[#E2E6ED] hover:text-[#0B1220] hover:border-[#0B1220]/20"
                    }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Filtered Articles Grid Section ─── */}
      <section className="py-16 lg:py-24 bg-[#F9FAFB]">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
          <SlideUp>
            <div className="mb-12 max-w-[800px]">
              <span className="text-[#0F58F5] font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase mb-3 block">
                {activeTopic === "All topics" ? "Latest articles" : `${activeTopic} articles`}
              </span>
              <h2 className="text-[#0B1220] font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] mb-4">
                Operational knowledge you can apply
              </h2>
              <p className="text-[#5B6472] font-inter text-[14px] md:text-[15px] leading-[24px]">
                {filteredArticles.length > 0
                  ? "Practical perspectives on the systems, workflows and information that support stronger industrial coordination and decision-making."
                  : "No articles found matching your criteria. Try adjusting your search or category."}
              </p>
            </div>
          </SlideUp>

          {filteredArticles.length > 0 && (
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {filteredArticles.map((article) => {
                  const Icon = IconMap[article.iconName] || FileText;

                  return (
                    <StaggerItem key={article.id}>
                      <Link
                        href={`/insight/${article.slug}`} // Ensuring this routes correctly to your slug page
                        className="group flex flex-col h-full bg-white border border-[#E2E6ED] rounded-[16px] p-6 lg:p-8 hover:border-[#0F58F5]/30 hover:shadow-md transition-all cursor-pointer block"
                      >
                        <div className="mb-6">
                          <Icon className="w-8 h-8 text-[#0F58F5]" strokeWidth={1.5} />
                        </div>

                        <div className="flex flex-col flex-grow">
                          <span className="text-[#7C8798] font-inter font-medium text-[12px] leading-[16px] mb-2 block">
                            {article.category}
                          </span>

                          <h3 className="text-[#0B1220] font-inter font-bold text-[18px] lg:text-[20px] leading-[28px] tracking-[-0.01em] mb-4 group-hover:text-[#0F58F5] transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-[#5B6472] font-inter text-[14px] leading-[24px] mb-8 flex-grow">
                            {article.description}
                          </p>

                          <div className="text-[#A0ABBA] font-inter text-[12px] leading-[18px]">
                            {article.author} · {article.date}
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
          )}
        </div>
      </section>
    </>
  );
}