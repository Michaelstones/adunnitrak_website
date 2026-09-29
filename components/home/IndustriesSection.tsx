"use client";

import Link from "next/link";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

interface Industry {
  name: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    name: "Steel",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F58F5" strokeWidth="1.5">
        <path d="M3 3v18h18"/><path d="M18.4 9l-5.7 5.7-4-4L3 16.4"/>
      </svg>
    ),
  },
  {
    name: "Mining",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F58F5" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    name: "Cement",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F58F5" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    name: "Manufacturing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F58F5" strokeWidth="1.5">
        <path d="M12 22V8M5 22V12l-3-3V5l3 3V4l3 3v4l-3 3zM19 22V12l3-3V5l-3 3V4l-3 3v4l3 3z"/>
      </svg>
    ),
  },
  {
    name: "Quarry & Aggregates",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F58F5" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.15 3.18a2 2 0 0 1 2-.18l3 1a2 2 0 0 1 1.22 2.27 12 12 0 0 1-.51 1.62 2 2 0 0 0 .45 2.11L8.09 11a16 16 0 0 0 6 6l.41-.32a2 2 0 0 0 2.11.45 12 12 0 0 1 1.62-.51 2 2 0 0 1 2.28 1.22z"/>
      </svg>
    ),
  },
  {
    name: "Power Generation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#0F58F5">
        <path d="M9 3h6l1 5H8L9 3z" opacity="0.7"/>
        <path d="M8 8l1 4h6l1-4H8z"/>
        <path d="M10 12 8 21h8l-2-9H10z"/>
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-12 md:py-20 px-2.5 border-b border-[#ECEDEE] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.3),0px_6px_10px_4px_rgba(0,0,0,0.15)] relative z-10">
      <div className="max-w-[1366px] mx-auto flex flex-col items-center gap-8">
        {/* Label */}
        <SlideUp>
          <p className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.0625em] uppercase text-[#031231] text-center">
            Purpose Built for Asset-Intensive Industries
          </p>
        </SlideUp>

        {/* Cards row */}
        <StaggerContainer staggerChildren={0.08} className="flex flex-wrap justify-center gap-4 w-full">
          {industries.map((ind, idx) => (
            <StaggerItem
              key={idx}
              className="w-full sm:w-[calc(50%-8px)] md:w-[200px]"
            >
              <div className="w-full h-auto md:h-[100px] flex flex-col items-center justify-center bg-white border border-[#ECEDEE] rounded-[16px] p-4 gap-4 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
                {/* Icon */}
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  {ind.icon}
                </div>
                {/* Label */}
                <span className="font-sans font-semibold text-[14px] leading-[18px] text-center text-[#0F1424]">
                  {ind.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* "View All Industries" button */}
        <SlideUp delay={0.2}>
          <Link
            href="/industries"
            className="font-sans font-bold text-[16px] text-[#0F58F5] hover:opacity-80 transition-opacity"
          >
            View All Industries
          </Link>
        </SlideUp>
      </div>
    </section>
  );
}
