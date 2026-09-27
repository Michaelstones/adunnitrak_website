import React from "react";
import Image from "next/image";
import Link from "next/link";

export const AdunniAiHeroSection = () => {
  return (
    <section className="relative w-full min-h-[646px] flex items-center bg-[#071A33] text-white overflow-hidden py-16 lg:py-24">
      {/* Background Image */}
      <Image
        src="/images/adunni-ai/hero_bg.png"
        alt="Adunni AI Background"
        fill
        className="object-cover opacity-60 mix-blend-overlay"
        priority
      />

      {/* Replaced 12-col grid with a balanced 2-col grid */}
      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Content */}
        <div className="flex flex-col w-full lg:max-w-[620px]">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Not a generic chatbot
          </span>

          <h1 className="text-[36px] lg:text-[56px] leading-[44px] lg:leading-[64px] font-extrabold tracking-[-0.02em] mb-4">
            Adunni AI
          </h1>

          <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[32px] text-white/90 font-bold mb-6">
            Industrial intelligence grounded in your operation
          </p>

          <p className="text-[16px] leading-[26px] text-white/70 mb-4">
            Adunni AI is embedded within the AdunniTrak platform and works with the operational information available to each authorised user. Its context may include the client's equipment hierarchy, incident history, maintenance records, confirmed failure causes, reliability knowledge, procedures and approved plant terminology.
          </p>

          <p className="text-[16px] leading-[26px] text-white/70 mb-8">
            Because Adunni AI works within the connected platform, it can support questions and decisions using relevant operational context rather than providing generic responses disconnected from the facility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/demo" className="inline-flex items-center justify-center h-12 px-8 bg-[#1656E8] hover:bg-[#0F45C4] rounded-[10px] text-white font-bold text-[14px] transition-colors">
              Book a live demo
            </Link>
            <Link href="#features" className="inline-flex items-center justify-center h-12 px-8 bg-transparent hover:bg-white/10 border-[1.5px] border-white/20 rounded-[10px] text-white font-bold text-[14px] transition-colors">
              See what it can do
            </Link>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="w-full relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[688px] h-full">
            <Image
              src="/images/adunni-ai/hero_graphic.png"
              alt="Adunni AI Interface"
              fill
              className="object-contain lg:object-right"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};