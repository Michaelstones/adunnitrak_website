import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const IndustriesCtaSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-navy-900 text-white relative">
      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 text-center flex flex-col items-center">
        
        <h2 className="text-[30px] md:text-[36px] leading-[38px] md:leading-[44px] font-extrabold tracking-[-0.01em] mb-6 max-w-[862px]">
          Let's build the right operational solution for you
        </h2>
        
        <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/80 mb-10 max-w-[862px]">
          Every industrial operation is different. Let us understand your facility, workflows and operational challenges so we can structure a demonstration that is relevant to you.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            href="/book-demo" 
            className="inline-flex items-center justify-center w-full sm:w-auto h-[51px] px-8 bg-[#1656E8] hover:bg-[#0F45C4] rounded-[10px] text-white font-bold text-[14px] transition-colors"
          >
            Book an industry-focused demo
          </Link>
          <Link 
            href="/platform" 
            className="inline-flex items-center justify-center w-full sm:w-auto h-[51px] px-8 bg-transparent hover:bg-white/10 border border-white/20 rounded-[10px] text-white font-bold text-[14px] transition-colors"
          >
            Explore the platform
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
};
