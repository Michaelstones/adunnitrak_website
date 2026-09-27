import React from "react";
import { Search } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";

const TOPICS = [
  "All topics",
  "Operations",
  "Downtime",
  "Maintenance",
  "Reliabilty & FMEA",
  "Inventory & resources",
  "Workforce & shift management",
  "Adunni AI",
  "Industrial & Digital transformation",
  "Product updates",
];

export function InsightsTopicBrowser() {
  return (
    <section className="py-16 lg:py-24 bg-[#EEF1F6]">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Header Block */}
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

        {/* Search Input */}
        <FadeIn delay={0.2}>
          <div className="max-w-[600px] mb-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#A0ABBA]" />
            <input
              type="text"
              placeholder="Search topic, category......."
              className="w-full bg-white border border-[#E2E6ED] rounded-[8px] py-3.5 pl-11 pr-4 text-[#0B1220] font-inter text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[#0F58F5]/20 focus:border-[#0F58F5] transition-shadow shadow-sm placeholder:text-[#A0ABBA]"
            />
          </div>
        </FadeIn>

        {/* Topic Pills */}
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center gap-3">
            {TOPICS.map((topic, index) => (
              <button
                key={topic}
                className={`px-4 py-2 rounded-full font-inter text-[13px] leading-[20px] font-medium transition-colors shadow-sm ${index === 0
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
  );
}