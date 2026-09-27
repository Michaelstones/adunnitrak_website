"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071A33] min-h-[714px]">
      {/* Background gradients/blur from Figma */}
      <div className="pointer-events-none absolute left-[644px] top-[515px] w-[258px] h-[21px] bg-[#0B1220] rounded-full blur-[10.3px]" />
      <div className="pointer-events-none absolute left-[926px] top-[504px] w-[190px] h-[21px] bg-[#0B1220] rounded-full blur-[10.3px]" />
      <div className="pointer-events-none absolute left-[1220px] top-[515px] w-[101px] h-[21px] bg-[#0B1220] rounded-full blur-[10.3px]" />
      <div 
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 0, 0, 0) 100%)" }}
      />

      {/* Main container: padding 0px 32px, starts at y=96 */}
      <div className="relative z-10 mx-auto max-w-[1366px] px-8 pt-24">
        {/* Inner fixed-width frame: 1302px wide, relative positioning */}
        <div className="relative mx-auto w-full max-w-[1302px] min-h-[522px]">
          
          {/* Left text block: width 752.8px */}
          <div className="relative z-20 max-w-[752.8px]">
            <p className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase text-[#3FC3EE]">
              AI-Powered Industrial Operational Intelligence
            </p>
            <h1 className="font-sans font-extrabold text-[40px] md:text-[48px] leading-[48px] md:leading-[52px] tracking-[-0.02em] text-white pt-4 max-w-[753px]">
              One intelligent platform built around your operation
            </h1>
            <p className="font-sans font-normal text-[16px] leading-[26px] text-white pt-6 max-w-[565px]">
              Connect your plant floor to intelligent decision making.
            </p>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-white/70 pt-4 max-w-[566px]">
              AdunniTrak connects operations, maintenance, reliability, inventory and workforce activity in one intelligent platform. It is configured around your facility, workflows, equipment structure, responsibilities and operational terminology, giving teams a shared view of performance and the information required to act with confidence.
            </p>
            <div className="flex flex-wrap items-center pt-8 gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center bg-[#0F58F5] rounded-lg py-4 px-6 font-sans font-bold text-[16px] text-white leading-none hover:opacity-90 transition-opacity"
              >
                Book a Live Demo
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 bg-transparent border-[1.5px] border-[#ECEDEE] rounded-lg py-4 px-6 font-sans font-bold text-[16px] text-white leading-none hover:bg-white/10 transition-colors"
              >
                Explore The Platform
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Desktop visual elements - strictly positioned to parent (1302px wide) */}
          <div className="hidden xl:block absolute inset-0 pointer-events-none">
            {/* Dashboard image: x=595, y=-15 */}
            <div className="absolute pointer-events-auto left-[595px] -top-[15px] w-[707px] h-[517px] z-10">
              <Image
                src="/images/hero-dashboard.png"
                alt="AdunniTrak Platform Dashboard"
                width={707}
                height={517}
                className="w-full h-full object-contain rounded-[4px]"
                priority
              />
            </div>

            {/* Notifier 1: x=635, y=152 */}
            <div className="absolute pointer-events-auto z-20 flex items-center gap-2 left-[635px] top-[152px] w-[154px] h-[72px] bg-white border border-[#EAEAEA] rounded-md py-2 px-4 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),0px_4px_8px_3px_rgba(0,0,0,0.15)]">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0F58F5" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
              <span className="font-sans font-normal text-[13px] leading-[20.8px] text-black">
                3 Issues Today
              </span>
            </div>

            {/* Notifier 2: x=1062, y=-8 */}
            <div className="absolute pointer-events-auto z-20 flex items-center gap-2 left-[1062px] -top-[8px] w-[196px] h-[76px] bg-white border border-[#EAEAEA] rounded-full py-2 px-4 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),0px_4px_8px_3px_rgba(0,0,0,0.15)]">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0F58F5" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span className="font-sans font-normal text-[13px] leading-[20.8px] text-black">
                5 PMs Due This Week
              </span>
            </div>
          </div>

          {/* Mobile dashboard image — shown below text on small screens */}
          <div className="mt-12 xl:hidden w-full rounded-[4px] relative overflow-hidden">
            <Image
              src="/images/hero-dashboard.png"
              alt="AdunniTrak Platform Dashboard"
              width={1414}
              height={1034}
              className="w-full h-auto relative z-10"
              priority
            />
            {/* Notifiers on mobile (approximate positions relative to image) */}
            <div className="absolute top-[30%] left-[5%] z-20 bg-white border border-[#EAEAEA] rounded-[6px] p-2 px-3 shadow-md flex items-center gap-2 scale-75 origin-left">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F58F5" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
               <span className="font-sans font-normal text-[12px] text-black">3 Issues Today</span>
            </div>
            <div className="absolute top-0 right-[5%] z-20 bg-white border border-[#EAEAEA] rounded-full p-2 px-3 shadow-md flex items-center gap-2 scale-75 origin-right">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F58F5" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
               <span className="font-sans font-normal text-[12px] text-black">5 PMs Due This Week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[96px]" />
    </section>
  );
}
