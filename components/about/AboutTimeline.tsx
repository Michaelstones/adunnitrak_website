
"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2014",
    title: "Founded in Lagos, Nigeria",
    body: "AdunniTrak was established with a mandate to bring structured operational intelligence to African industrial facilities starting with the oil & gas sector.",
  },
  {
    year: "2016",
    title: "First platform deployment",
    body: "The first full platform deployment went live at a mid-sized refinery in the Niger Delta, covering operations, maintenance, and inventory management.",
  },
  {
    year: "2018",
    title: "Expanded to power generation",
    body: "Platform adoption grew into the power generation sector, with multi-site implementations at independent power producers across Nigeria.",
  },
  {
    year: "2020",
    title: "Adunni AI introduced",
    body: "The Adunni AI assistant layer was launched — enabling natural-language querying of operational data and automated anomaly detection across monitored assets.",
  },
  {
    year: "2022",
    title: "North American entity established",
    body: "AdunniTrak Solutions Inc. was incorporated in London, Ontario, Canada — opening access to North American industrial markets and enabling global cloud infrastructure.",
  },
  {
    year: "2024",
    title: "Platform 2.0 — full module suite",
    body: "The complete six-module suite (Operations, Maintenance, Reliability, Inventory, Workforce, and Adunni AI) launched simultaneously — marking the platform's maturity.",
  },
  {
    year: "2026",
    title: "Serving operations across 3 continents",
    body: "AdunniTrak now supports industrial operations in Nigeria, Ghana, and Canada — with active expansion across West Africa and the Middle East.",
  },
];

export default function AboutTimeline() {
  return (
    <section className="bg-white py-[96px]">
      <div className="w-full mx-auto px-5 lg:px-[32px]">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-[16px] gap-y-[48px]">

          {/* Left: Heading — 4 cols */}
          <SlideUp className="lg:col-span-4 flex flex-col gap-0">
            <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
              From an observed problem to a connected platform
            </p>
            <h2 className="mt-[16px] font-inter font-extrabold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.01em] text-[#0F1424] whitespace-nowrap">
              The AdunniTrak journey
            </h2>
          </SlideUp>

          {/* Right: Timeline rail — 7 cols (col 6-12) */}
          <div className="lg:col-span-7 lg:col-start-6 relative pl-[40px] lg:pl-[64px]">

            {/* Vertical line — Figma: 2px wide, #ECEDEE fill, positioned at x=21 */}
            <div className="absolute top-[8px] bottom-0 left-[16px] lg:left-[21px] w-[2px] bg-[#ECEDEE]" />

            <StaggerContainer staggerChildren={0.1}>
              {/* First item — no top padding */}
              <StaggerItem className="relative">
                <TimelineDot isFirst />
                <TimelineContent item={TIMELINE_ITEMS[0]} />
              </StaggerItem>

              {/* Remaining items — 32px top padding */}
              {TIMELINE_ITEMS.slice(1).map((item) => (
                <StaggerItem key={item.year} className="relative pt-[32px]">
                  <TimelineDot />
                  <TimelineContent item={item} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineDot({ isFirst }: { isFirst?: boolean }) {
  // Mobile rail padding is 40px, so left=-24px. Desktop rail padding is 64px, so left=-48px.
  // Center of the line is at x=22 on desktop, so dot (w-12) should be at x=16. 
  // 16 - 64 = -48px for desktop. 
  // Mobile: line at 16, center 17, dot left 11. 11 - 40 = -29px. We'll use -29px for mobile, -48px for desktop.
  return (
    <div
      className={`absolute flex items-center justify-center left-[-10px] lg:left-[-52px] w-[20px] rounded-full h-[20px] ${isFirst ? "top-[4px]" : "top-[36px]"}`}
    >
      <div className="w-[16px] h-[16px] rounded-full border-[5px] border-[#3FC3EE] bg-[#FFFFFF]" />
    </div>
  );
}

function TimelineContent({ item }: { item: TimelineItem }) {
  return (
    <div className="flex flex-col gap-[4px] max-w-[688px]">
      <span className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
        {item.year}
      </span>
      <h3 className="text-[16px] leading-[24px] font-bold text-[#0B1220] font-inter">
        {item.title}
      </h3>
      <p className="text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
        {item.body}
      </p>
    </div>
  );
}
