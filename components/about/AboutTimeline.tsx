"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

interface TimelineItem {
  date: string;
  title: string;
  body: string;
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    date: "July 1, 2024",
    title: "The catalyst",
    body: "At 5:30 a.m., illegible handwritten handover notes left a team uncertain about an unresolved operational issue. Approximately two and a half hours of unnecessary downtime inspired the idea for clearer digital records and better shift communication.",
  },
  {
    date: "October 2024",
    title: "AdunniTrak takes its name",
    body: "The digital handover initiative becomes AdunniTrak, giving the developing solution a distinct identity.",
  },
  {
    date: "January 2025",
    title: "Development expands",
    body: "The initiative grows beyond shift handovers to include structured workflows, reporting and broader operational coverage.",
  },
  {
    date: "May 2025",
    title: "The operational vision strengthens",
    body: "Industry research and continued operational experience reinforce the need for a purpose-built operational intelligence platform.",
  },
  {
    date: "October 2025",
    title: "Cloud-based development",
    body: "AdunniTrak is rebuilt using Google AppSheet to support digital data capture and connected operational workflows.",
  },
  {
    date: "March 2026",
    title: "A professional milestone",
    body: "Founder Agboola Shonekan earns the Certified Engineering Technician (C.Tech.) designation following OACETT’s acceptance of his technical report on production tracking and shift communication.",
  },
  {
    date: "April 2026",
    title: "A unified platform",
    body: "AdunniTrak evolves into a unified operational intelligence platform connecting operations, maintenance, reliability, inventory and reporting.",
  },
  {
    date: "May 2026",
    title: "Canadian incorporation",
    body: "AdunniTrak Solutions Inc. is incorporated in Canada, establishing the business’s Canadian corporate entity.",
  },
  {
    date: "June 2026",
    title: "Adunni AI is introduced",
    body: "AI capabilities are added to help teams explore operational history, access relevant knowledge and support informed decisions.",
  },
  {
    date: "September 2026",
    title: "Nigerian incorporation and facility configuration",
    body: "AdunniTrak Solutions Nigeria Limited is incorporated in Nigeria. The team is configuring the platform for Ajaokuta Steel Company Limited, aligning workflows with departmental requirements.",
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
              The Evolution of AdunniTrak
            </h2>
          </SlideUp>

          {/* Right: Timeline rail — 7 cols (col 6-12) */}
          <div className="lg:col-span-7 lg:col-start-6 relative pl-[40px] lg:pl-[64px]">

            {/* Vertical line — Figma: 2px wide, #ECEDEE fill, positioned at x=16 (mobile) and x=21 (desktop) */}
            <div className="absolute top-[8px] bottom-0 left-[16px] lg:left-[21px] w-[2px] bg-[#ECEDEE]" />

            <StaggerContainer staggerChildren={0.1}>
              {/* First item — no top padding */}
              <StaggerItem className="relative">
                <TimelineDot isFirst />
                <TimelineContent item={TIMELINE_ITEMS[0]} />
              </StaggerItem>

              {/* Remaining items — 32px top padding */}
              {TIMELINE_ITEMS.slice(1).map((item, index) => (
                <StaggerItem key={index} className="relative pt-[32px]">
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
  // Mobile rail padding is 40px, so left=-24px relative to start. Line center is at 17px. Dot offset needs to be 40px - 17px = 23px + 10px radius = 33px.
  // Desktop rail padding is 64px, Line center is at 22px. Dot offset needs to be 64px - 22px = 42px + 10px radius = 52px.
  return (
    <div
      className={`absolute flex items-center justify-center left-[-33px] lg:left-[-52px] w-[20px] rounded-full h-[20px] ${isFirst ? "top-[4px]" : "top-[36px]"}`}
    >
      <div className="w-[16px] h-[16px] rounded-full border-[5px] border-[#3FC3EE] bg-[#FFFFFF]" />
    </div>
  );
}

function TimelineContent({ item }: { item: TimelineItem }) {
  return (
    <div className="flex flex-col gap-[4px] max-w-[688px]">
      <span className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
        {item.date}
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