"use client";

import React from "react";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

/* ─── Types & Data ─────────────────────────────────────────────── */
interface FieldNote {
  title: string;
  description: string;
}

const FIELD_NOTES: FieldNote[] = [
  {
    title: "What gets lost during shift handover",
    description: "Important equipment conditions, temporary actions and unresolved work can disappear when handover depends on memory or informal conversation.",
  },
  {
    title: "Why equipment nomenclature matters",
    description: "A digital system becomes difficult to use when its equipment names do not match the terminology recognised by the people performing the work.",
  },
  {
    title: "When a workshop supports the entire plant",
    description: "Central workshops may repair, rebuild or fabricate parts for several departments. Their workload should remain connected to the original equipment event.",
  },
  {
    title: "Parts availability is part of maintenance readiness",
    description: "A work order cannot be executed effectively when required materials are difficult to locate, issue or trace to the equipment and task.",
  },
];

/* ─── Component ──────────────────────────────────────────── */
export function FromTheField() {
  return (
    <section className="py-16 lg:py-24 bg-[#F9FAFB]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Header */}
        <SlideUp>
          <div className="max-w-[800px] mb-12">
            <span className="text-[#0F58F5] font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase mb-3 block">
              From the field
            </span>
            <h2 className="text-[#0B1220] font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] mb-4">
              Short lessons from real industrial work
            </h2>
            <p className="text-[#5B6472] font-inter text-[14px] md:text-[15px] leading-[24px]">
              Field notes turn practical operational observations into concise lessons for plant teams. They do not identify a client, facility or confidential process unless written permission has been obtained.
            </p>
          </div>
        </SlideUp>

        {/* 4-Column Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FIELD_NOTES.map((note, index) => (
              <StaggerItem key={index}>
                <article className="flex flex-col h-full p-6 bg-white border border-[#E2E6ED] rounded-[12px] hover:border-[#0F58F5]/30 hover:shadow-md transition-all cursor-pointer group">
                  <h3 className="text-[#0B1220] font-inter font-bold text-[16px] leading-[24px] tracking-[-0.01em] mb-3 group-hover:text-[#0F58F5] transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-[#5B6472] font-inter text-[14px] leading-[22px]">
                    {note.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}