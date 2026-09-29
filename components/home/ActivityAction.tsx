"use client";

import Link from "next/link";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

const actions = [
  {
    num: "01",
    title: "Capture",
    desc: "Operators and authorised users record shift activity, production, downtime, equipment condition, maintenance work, inventory and attendance.",
  },
  {
    num: "02",
    title: "Connect",
    desc: "Information is linked to the relevant facility, department, line, equipment, work order, employee or inventory item.",
  },
  {
    num: "03",
    title: "See",
    desc: "Teams see plant conditions, incidents, maintenance priorities, production, stock and emerging operational risks.",
  },
  {
    num: "04",
    title: "Analyse",
    desc: "Adunni AI finds similar failures, supports investigations, retrieves knowledge and prepares summaries and reports.",
  },
  {
    num: "05",
    title: "Act",
    desc: "Teams coordinate action, complete accountable workflows, retain findings and improve future performance.",
  },
];

export default function ActivityAction() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1366px] mx-auto">
        {/* Heading block */}
        <SlideUp className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 flex flex-col">
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424]">
              From operational activity to intelligent action
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-4 max-w-[862px]">
              AdunniTrak creates a continuous flow of operational information. Activity captured at the point of work becomes shared visibility, structured analysis and coordinated action across the organisation.
            </p>
          </div>
        </SlideUp>

        {/* Cards container */}
        <div className="pt-8 md:pt-12">
          {/* Row 1: 3 cards */}
          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
            {actions.slice(0, 3).map((action) => (
              <StaggerItem
                key={action.num}
                className="md:col-span-4"
              >
                <div className="bg-white border border-[#DDDEE1] rounded-[14px] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)] p-6 min-h-[204px] flex flex-col hover:border-[#17A9DB]/50 transition-colors h-full">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#17A9DB] flex items-center justify-center shrink-0">
                    <span className="font-sans font-bold text-[16px] leading-[16px] text-white">
                      {action.num}
                    </span>
                  </div>
                  <p className="font-sans font-semibold text-[18px] leading-[26px] text-[#0F1424] pt-4">
                    {action.title}
                  </p>
                  <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2">
                    {action.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Row 2: 2 cards */}
          <StaggerContainer staggerChildren={0.1} delayChildren={0.2} className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {actions.slice(3).map((action) => (
              <StaggerItem
                key={action.num}
                className="md:col-span-6"
              >
                <div className="bg-white border border-[#DDDEE1] rounded-[14px] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)] p-6 min-h-[184px] flex flex-col hover:border-[#17A9DB]/50 transition-colors h-full">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#17A9DB] flex items-center justify-center shrink-0">
                    <span className="font-sans font-bold text-[16px] leading-[16px] text-white">
                      {action.num}
                    </span>
                  </div>
                  <p className="font-sans font-semibold text-[18px] leading-[26px] text-[#0F1424] pt-4">
                    {action.title}
                  </p>
                  <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2">
                    {action.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
