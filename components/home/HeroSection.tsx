"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TriangleAlert, CalendarIcon } from "lucide-react";

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
            <p className="font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase text-[#3FC3EE] mb-4">
              AI-Powered Industrial Operational Intelligence
            </p>
            
            <h1 className="font-inter font-extrabold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-white mb-6 max-w-[700px]">
              One intelligent platform built around your operation
            </h1>
            
            <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[28px] text-white mb-4">
              Connect your plant floor to intelligent decision making.
            </p>
            
            <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-[#A0ABBA] max-w-[640px] mb-8">
              AdunniTrak connects operations, maintenance, reliability, inventory and workforce activity in one intelligent platform. It is configured around your facility, workflows, equipment structure, responsibilities and operational terminology, giving teams a shared view of performance and the information required to act with confidence.
            </p>
            
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
          </div>

          {/* Right Visuals Block (5 cols) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[600px] mt-8 lg:mt-0">
            
            {/* 
              Export the multi-device mockup (desktop, tablet, mobile) from Figma as ONE transparent PNG 
              named 'hero-devices.png' to ensure crisp, proportionate rendering. 
            */}
            <Image
              src="/images/hero-dashboard.png" 
              alt="AdunniTrak Platform across devices"
              quality={100}
              width={700}
              height={510}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain lg:object-right"
              priority
            />

            {/* Floating Badge 1: Issues (Rotated Left) */}
            <div className="absolute top-[35%] left-0 lg:-left-12 bg-white text-black px-4 py-2.5 rounded-[8px] flex items-center gap-2.5 shadow-xl -rotate-[8deg] hover:rotate-0 transition-transform cursor-default z-20">
              <TriangleAlert className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]/20" />
              <span className="font-inter font-medium text-[13px]">3 Issues Today</span>
            </div>

            {/* Floating Badge 2: PMs Due (Rotated Right, Pill shape) */}
            <div className="absolute top-[5%] right-[5%] lg:right-4 bg-white text-black px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-xl rotate-[6deg] hover:rotate-0 transition-transform cursor-default z-20">
              <CalendarIcon className="w-4 h-4 text-[#0F58F5]" />
              <span className="font-inter font-medium text-[13px]">5 PMs Due This Week</span>
            </div>
            
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24">
          
          <div className="bg-[#112444]/60 backdrop-blur-sm border border-white/10 rounded-[12px] p-6 hover:bg-[#112444] transition-colors">
            <h3 className="text-[#3FC3EE] font-inter font-semibold text-[15px] mb-2">
              One connected platform
            </h3>
            <p className="text-[#A0ABBA] font-inter text-[14px] leading-[22px]">
              Plant-wide visibility without disconnected records.
            </p>
          </div>

          <div className="bg-[#112444]/60 backdrop-blur-sm border border-white/10 rounded-[12px] p-6 hover:bg-[#112444] transition-colors">
            <h3 className="text-[#3FC3EE] font-inter font-semibold text-[15px] mb-2">
              Built around your operation
            </h3>
            <p className="text-[#A0ABBA] font-inter text-[14px] leading-[22px]">
              Requirements, processes, asset hierarchy and nomenclature.
            </p>
          </div>

          <div className="bg-[#112444]/60 backdrop-blur-sm border border-white/10 rounded-[12px] p-6 hover:bg-[#112444] transition-colors">
            <h3 className="text-[#3FC3EE] font-inter font-semibold text-[15px] mb-2">
              AI embedded across the platform
            </h3>
            <p className="text-[#A0ABBA] font-inter text-[14px] leading-[22px]">
              Investigation, learning, reporting and decision support.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}