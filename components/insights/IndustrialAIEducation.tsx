"use client";

import React from "react";
import Link from "next/link";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

/* ─── Data ─────────────────────────────────────────────── */
const AI_BULLETS = [
  "Why industrial AI needs operational context",
  "Generic chatbot versus operational intelligence",
  "Why plant terminology and hierarchy matter",
  "Using confirmed failure history in investigations",
  "AI governance, permissions and responsibility",
  "Supporting reporting without replacing approval",
];

/* ─── Component ──────────────────────────────────────────── */
export function IndustrialAIEducation() {
  return (
    <section className="py-16 lg:py-24 bg-[#050F1E]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column: Text & CTA */}
          <div className="flex flex-col">
            <SlideUp>
              <span className="text-[#3FC3EE] font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase mb-3 block">
                Industrial AI education
              </span>
              <h2 className="text-white font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] mb-4">
                Understanding AI in industrial operations
              </h2>
              <p className="text-[#A0ABBA] font-inter text-[14px] md:text-[15px] leading-[24px] mb-8 max-w-[540px]">
                Industrial AI must understand the context in which work is performed. Adunni AI is designed to work with authorised operational information, equipment relationships, confirmed failure history, approved procedures and client terminology within the connected AdunniTrak environment.
              </p>

              <div>
                <Link
                  href="/adunni-ai"
                  className="inline-flex items-center justify-center h-[48px] px-8 bg-[#0F58F5] hover:bg-[#093593] text-white font-inter font-semibold text-[15px] rounded-[8px] transition-colors shadow-sm"
                >
                  Learn about Adunni AI
                </Link>
              </div>
            </SlideUp>
          </div>

          {/* Right Column: Bullets & Disclaimer Card */}
          <div className="flex flex-col">
            <StaggerContainer>
              <ul className="flex flex-col gap-4 mb-8">
                {AI_BULLETS.map((bullet, idx) => (
                  <StaggerItem key={idx}>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3FC3EE] flex-shrink-0" />
                      <span className="text-[#E2E6ED] font-inter text-[14px] md:text-[15px] leading-[24px]">
                        {bullet}
                      </span>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-[12px] p-6">
                <p className="text-[#A0ABBA] font-inter text-[13px] leading-[20px]">
                  Adunni AI supports investigation, knowledge retrieval and reporting. Decisions, approvals and operational actions remain with authorised personnel.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}