import React from "react";
import Image from "next/image";
import Link from "next/link";

export const DemoHeroSection = () => {
  return (
    <section className="relative w-full min-h-[570px] flex items-center bg-navy-900 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Image */}
      <Image
        src="/images/demo/demo_hero_bg.png"
        alt="Demo Background"
        fill
        className="object-cover opacity-60 mix-blend-overlay"
        priority
      />

      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Personalised AdunniTrak demonstration
          </span>
          
          <h1 className="text-[36px] md:text-[56px] leading-[44px] md:leading-[64px] font-extrabold tracking-[-0.02em] mb-4">
            See how AdunniTrak can work around your operation
          </h1>
          
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/80 max-w-[566px] mb-6">
            A guided demonstration built around your plant, workflows and equipment.
          </p>

          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/80 max-w-[566px] mb-8">
            Before the session, we learn about your facility, and configure the platform environment to reflect your actual operational reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
            <Link href="#request-form" className="inline-flex items-center justify-center h-12 px-8 bg-[#1656E8] hover:bg-[#0F45C4] rounded-lg text-white font-bold text-[14px] transition-colors">
              Book your demonstration
            </Link>
            <Link href="#expectations" className="inline-flex items-center justify-center h-12 px-8 bg-transparent hover:bg-white/10 border-[1.5px] border-white/20 rounded-lg text-white font-bold text-[14px] transition-colors">
              What to expect
            </Link>
          </div>

          <p className="text-[14px] leading-[20px] text-white/60">
            No generic presentation. Your demonstration is prepared specifically for your organisation.
          </p>
        </div>
      </div>
    </section>
  );
};
