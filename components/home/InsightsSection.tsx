"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

const articles = [
  {
    slug: "why-connected-shift-data-is-the-foundation-of-plant-wide-improvement",
    category: "Operational intelligence",
    title: "Why connected shift data is the foundation of plant-wide improvement",
    desc: "Consistent shift information creates the operational history required to improve coordination, maintenance response and performance.",
    image: "/images/insight-1.png",
  },
  {
    slug: "from-downtime-event-to-organisational-knowledge",
    category: "Reliability",
    title: "From downtime event to organisational knowledge",
    desc: "Closing the loop between incidents, repairs, failure investigation and confirmed learning helps prevent repeated operational losses.",
    image: "/images/insight-2.png",
  },
  {
    slug: "why-industrial-ai-needs-operational-context",
    category: "Artificial intelligence",
    title: "Why industrial AI needs operational context",
    desc: "AI becomes more useful when it understands the facility's equipment, terminology, workflows and verified operating history.",
    image: "/images/insight-3.png",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-[#EAEEF6] py-16 md:py-24 px-6 lg:px-[24px]">
      <div className="max-w-[1302px] mx-auto flex flex-col gap-8 md:gap-12">
        
        {/* Header */}
        <SlideUp className="flex flex-col">
          <h2 className="font-inter font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-[#0B1220]">
            Ideas for modern industrial operations
          </h2>
          <p className="font-inter font-normal text-[15px] leading-[24px] text-[#5B6472] pt-4 max-w-[800px]">
            Practical perspectives on connected operations, maintenance performance, asset reliability, industrial knowledge and the responsible use of AI in asset-intensive industries.
          </p>
        </SlideUp>

        {/* 3 insight cards: row */}
        <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {articles.map((article, idx) => (
            <StaggerItem
              key={idx}
              className="w-full"
            >
              <div className="w-full p-5 bg-white border border-[#E2E6ED] rounded-[16px] shadow-sm flex flex-col hover:border-[#0F58F5]/30 hover:shadow-md transition-all h-full">
                {/* Image */}
                <div className="w-full aspect-[16/9] rounded-[8px] overflow-hidden shrink-0 bg-[#EEF1F6]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={748}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <p className="font-inter font-bold text-[11px] leading-[16px] tracking-[0.06em] uppercase text-[#0F58F5] pt-5">
                  {article.category}
                </p>
                <h3 className="font-inter font-bold text-[18px] leading-[26px] text-[#0B1220] pt-2">
                  {article.title}
                </h3>
                <p className="font-inter font-normal text-[14px] leading-[22px] text-[#5B6472] pt-3 flex-grow">
                  {article.desc}
                </p>
                
                {/* Dynamic Read Insight link */}
                <div className="pt-6 mt-auto">
                  <Link
                    href={`/insight/${article.slug}`}
                    className="inline-flex items-center gap-2 group font-inter font-semibold text-[14px] leading-[20px] text-[#0F58F5] hover:text-[#093593] transition-colors"
                  >
                    Read Insight
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Insights button */}
        <SlideUp delay={0.3} className="flex justify-center mt-4">
          <Link
            href="/insight"
            className="inline-flex items-center justify-center gap-3 bg-white border border-[#E2E6ED] rounded-[8px] h-[48px] px-8 font-inter font-semibold text-[15px] text-[#0B1220] hover:border-[#0B1220]/20 transition-colors w-full sm:w-auto"
          >
            View All Insights
            <ArrowRight size={16} />
          </Link>
        </SlideUp>

      </div>
    </section>
  );
}