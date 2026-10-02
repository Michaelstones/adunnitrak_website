"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TriangleAlert, CalendarIcon } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

const featureCards = [
  {
    title: "One connected platform",
    desc: "Plant-wide visibility without disconnected records.",
  },
  {
    title: "Built around your operation",
    desc: "Requirements, processes, asset hierarchy and nomenclature.",
  },
  {
    title: "AI embedded across the platform",
    desc: "Investigation, learning, reporting and decision support.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071A33] pt-24 pb-16 xl:pt-32 xl:pb-20">

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 md:px-8">

        {/* Top Grid: Text (left) and Devices (right) */}
        <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-12 xl:gap-6 items-center w-full">

          {/* Left Text Block */}
          <div className="flex flex-col w-full xl:max-w-[600px] relative z-20">
            <SlideUp delay={0.1}>
              <p className="font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase text-[#3FC3EE] mb-4">
                AI-Powered Industrial Operational Intelligence
              </p>
            </SlideUp>

            <SlideUp delay={0.2}>
              <h1 className="font-inter font-extrabold text-[36px] md:text-[48px] xl:text-[46px] 2xl:text-[52px] leading-[1.1] tracking-[-0.02em] text-white mb-6">
                One intelligent platform built around your operation
              </h1>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[28px] text-white mb-4">
                Connect your plant floor to intelligent decision making.
              </p>
            </SlideUp>

            <SlideUp delay={0.4}>
              <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-[#A0ABBA] mb-8">
                AdunniTrak connects operations, maintenance, reliability, inventory and workforce activity in one intelligent platform. It is configured around your facility, workflows, equipment structure, responsibilities and operational terminology, giving teams a shared view of performance and the information required to act with confidence.
              </p>
            </SlideUp>

            <SlideUp delay={0.5}>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4">
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center h-[52px] px-8 bg-[#0F58F5] hover:bg-[#093593] rounded-[8px] font-inter font-semibold text-[15px] text-white transition-colors shadow-sm"
                >
                  Book a Live Demo
                </Link>
                <Link
                  href="/platform"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-[52px] px-8 bg-transparent border border-white/30 hover:bg-white/10 rounded-[8px] font-inter font-semibold text-[15px] text-white transition-colors"
                >
                  Explore The Platform
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </div>
            </SlideUp>
          </div>

          {/* Right Visuals Block */}
          <FadeIn
            delay={0.3}
            className="relative z-10 w-full flex justify-center xl:justify-end xl:-mr-8"
          >
            {/*
              The box has a fixed aspect ratio, so the image and the badges
              scale together and the badges always sit on the same spot of the artwork.
              If the SVG's real ratio differs, change aspect-[16/9] only.
            */}
            <div className="relative w-full max-w-[600px] sm:max-w-[720px] xl:max-w-[860px] aspect-[16/9]">

              {/* Soft glows under the devices */}
              <div className="pointer-events-none absolute left-[20%] bottom-[4%] w-[40%] h-[21px] bg-[#0B1220] rounded-full blur-[20px]" />
              <div className="pointer-events-none absolute left-[58%] bottom-[6%] w-[30%] h-[21px] bg-[#0B1220] rounded-full blur-[20px]" />

              <Image
                src="/images/herodashboard.svg"
                alt="AdunniTrak Platform across devices"
                fill
                quality={100}
                className="object-contain object-center xl:object-right"
                priority
                sizes="(max-width: 1280px) 100vw, 860px"
              />

              {/* Floating Badge 1: Issues (left edge, over the tablet's top corner) */}
              <SlideUp
                delay={0.5}
                yOffset={20}
                className="absolute top-[38%] left-[2%] sm:left-[4%] z-20"
              >
                <div className="bg-white text-black px-3 sm:px-4 py-2 sm:py-2.5 rounded-[8px] flex items-center gap-2 sm:gap-2.5 shadow-xl -rotate-[8deg] hover:rotate-0 transition-transform cursor-default">
                  <TriangleAlert className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]/20" />
                  <span className="font-inter font-medium text-[12px] sm:text-[13px] whitespace-nowrap">
                    3 Issues Today
                  </span>
                </div>
              </SlideUp>

              {/* Floating Badge 2: PMs Due (top right, above the monitor) */}
              <SlideUp
                delay={0.6}
                yOffset={20}
                className="absolute top-[2%] right-[4%] sm:right-[8%] z-20"
              >
                <div className="bg-white text-black px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 sm:gap-2.5 shadow-xl rotate-[8deg] hover:rotate-0 transition-transform cursor-default">
                  <CalendarIcon className="w-4 h-4 text-[#0F58F5]" />
                  <span className="font-inter font-medium text-[12px] sm:text-[13px] whitespace-nowrap">
                    5 PMs Due This Week
                  </span>
                </div>
              </SlideUp>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Feature Cards */}
        <StaggerContainer
          delayChildren={0.4}
          staggerChildren={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 xl:mt-20"
        >
          {featureCards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="bg-[#192E5C]/90 backdrop-blur-sm border border-white/10 rounded-[12px] p-6 hover:bg-[#1F3769] transition-colors h-full">
                <h3 className="text-[#3FC3EE] font-inter font-semibold text-[15px] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#A0ABBA] font-inter text-[14px] leading-[22px]">
                  {card.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}