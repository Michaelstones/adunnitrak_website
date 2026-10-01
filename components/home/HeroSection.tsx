"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TriangleAlert, CalendarIcon } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071A33] pt-24 pb-16 lg:pt-32 lg:pb-20 px-6 lg:px-[24px]">

      {/* Background gradients */}
      <div className="pointer-events-none absolute left-[644px] top-[515px] w-[258px] h-[21px] bg-[#0B1220] rounded-full blur-[20px]" />
      <div className="pointer-events-none absolute left-[926px] top-[504px] w-[190px] h-[21px] bg-[#0B1220] rounded-full blur-[20px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_100%)]" />

      {/* Main container enforcing max-width and 24px padding */}
      <div className="relative z-10 mx-auto w-full max-w-[1302px]">

        {/* Top Grid: Text and Devices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Block (7 cols) */}
          <div className="lg:col-span-7 flex flex-col relative z-20">
            <SlideUp delay={0.1}>
              <p className="font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase text-[#3FC3EE] mb-4">
                AI-Powered Industrial Operational Intelligence
              </p>
            </SlideUp>

            <SlideUp delay={0.2}>
              <h1 className="font-inter font-extrabold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-white mb-6 max-w-[700px]">
                One intelligent platform built around your operation
              </h1>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[28px] text-white mb-4">
                Connect your plant floor to intelligent decision making.
              </p>
            </SlideUp>

            <SlideUp delay={0.4}>
              <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-[#A0ABBA] max-w-[640px] mb-8">
                AdunniTrak connects operations, maintenance, reliability, inventory and workforce activity in one intelligent platform. It is configured around your facility, workflows, equipment structure, responsibilities and operational terminology, giving teams a shared view of performance and the information required to act with confidence.
              </p>
            </SlideUp>

            <SlideUp delay={0.5}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center h-[52px] px-8 bg-[#0F58F5] hover:bg-[#093593] rounded-[8px] font-inter font-semibold text-[15px] text-white transition-colors shadow-sm"
                >
                  Book a Live Demo
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 h-[52px] px-8 bg-transparent border border-white/20 hover:bg-white/10 rounded-[8px] font-inter font-semibold text-[15px] text-white transition-colors"
                >
                  Explore The Platform
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </div>
            </SlideUp>
          </div>

          {/* Right Visuals Block (5 cols) */}
          <FadeIn delay={0.3} className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] lg:h-[650px] mt-8 lg:mt-0">

            {/* 
              Breakout Wrapper: 
              Allows the image to span up to 160% of the 5-column width and anchor to the right. 
              This causes the object-contain to render the image massive and full like the design.
            */}
            <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 lg:right-[-5%] xl:right-[-10%] lg:translate-x-0 w-[110%] lg:w-[130%] xl:w-[150%] h-[120%] lg:h-[130%] z-10 pointer-events-none">
              <Image
                src="/images/dashboard.svg"
                alt="AdunniTrak Platform across devices"
                fill
                quality={100}
                className="object-contain object-center lg:object-right"
                priority
                sizes="(max-width: 700px) 100vw, 700px"
              />
            </div>

            {/* Floating Badge 1: Issues (Pulled further left to match the larger image scaling) */}
            <SlideUp delay={0.5} yOffset={20} className="absolute top-[25%] lg:top-[32%] left-[2%] lg:-left-20 z-20">
              <div className="bg-white text-black px-4 py-2.5 rounded-[8px] flex items-center gap-2.5 shadow-xl -rotate-[8deg] hover:rotate-0 transition-transform cursor-default">
                <TriangleAlert className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]/20" />
                <span className="font-inter font-medium text-[13px]">3 Issues Today</span>
              </div>
            </SlideUp>

            {/* Floating Badge 2: PMs Due (Adjusted right positioning) */}
            <SlideUp delay={0.6} yOffset={20} className="absolute top-[15%] lg:top-[30%] right-[5%] lg:-right-4 z-20">
              <div className="bg-white text-black px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-xl rotate-[6deg] hover:rotate-0 transition-transform cursor-default">
                <CalendarIcon className="w-4 h-4 text-[#0F58F5]" />
                <span className="font-inter font-medium text-[13px]">5 PMs Due This Week</span>
              </div>
            </SlideUp>

          </FadeIn>
        </div>

        {/* Bottom Feature Cards */}
        <StaggerContainer delayChildren={0.4} staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24">
          <StaggerItem>
            <div className="bg-[#112444]/60 backdrop-blur-sm border border-white/10 rounded-[12px] p-6 hover:bg-[#112444] transition-colors h-full">
              <h3 className="text-[#3FC3EE] font-inter font-semibold text-[15px] mb-2">
                One connected platform
              </h3>
              <p className="text-[#A0ABBA] font-inter text-[14px] leading-[22px]">
                Plant-wide visibility without disconnected records.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-[#112444]/60 backdrop-blur-sm border border-white/10 rounded-[12px] p-6 hover:bg-[#112444] transition-colors h-full">
              <h3 className="text-[#3FC3EE] font-inter font-semibold text-[15px] mb-2">
                Built around your operation
              </h3>
              <p className="text-[#A0ABBA] font-inter text-[14px] leading-[22px]">
                Requirements, processes, asset hierarchy and nomenclature.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-[#112444]/60 backdrop-blur-sm border border-white/10 rounded-[12px] p-6 hover:bg-[#112444] transition-colors h-full">
              <h3 className="text-[#3FC3EE] font-inter font-semibold text-[15px] mb-2">
                AI embedded across the platform
              </h3>
              <p className="text-[#A0ABBA] font-inter text-[14px] leading-[22px]">
                Investigation, learning, reporting and decision support.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </section>
  );
}