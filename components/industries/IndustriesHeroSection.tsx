"use client";


import Image from "next/image";
import Link from "next/link";
import { SlideUp } from "@/components/animations/SlideUp";

export const IndustriesHeroSection = () => {
  return (
    <section className="relative w-full h-[530px] flex items-center bg-navy-900 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/industriesHero.jpg"
        alt="Industrial Operations"
        fill
        className="object-cover opacity-40 mix-blend-overlay"
        priority
      />

      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <SlideUp className="lg:col-span-8 xl:col-span-7 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4">
            Built for industrial operations
          </span>

          <h1 className="text-[40px] md:text-[56px] leading-[48px] md:leading-[64px] font-extrabold tracking-[-0.02em] mb-6">
            Operational intelligence for asset-intensive industries
          </h1>

          <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-white/80 mb-4 max-w-[566px]">
            AdunniTrak helps industrial organisations connect production, downtime and maintenance activity across the operation.
          </p>

          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/60 mb-8 max-w-[566px]">
            The platform is configured around each facility&apos;s workflows and terminology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#industries" className="inline-flex items-center justify-center h-[51px] px-8 bg-[#1656E8] hover:bg-[#0F45C4] rounded-[10px] text-white font-bold text-[14px] transition-colors">
              Explore industries

            </Link>
            <Link href="/demo" className="inline-flex items-center justify-center h-[51px] px-8 bg-white/10 hover:bg-white/20 border border-white/20 rounded-[10px] text-white font-bold text-[14px] transition-colors">
              Book an industry focused demo
            </Link>

          </div>
        </SlideUp>
      </div>
    </section>
  );
};
