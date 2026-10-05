"use client";

import Link from "next/link";
import { SlideUp } from "@/components/animations/SlideUp";

export default function CtaSection() {
  return (
    <section className="bg-[#192F5D] py-24">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8">
        {/* Height 194px container, content centered */}
        <div className="h-auto md:h-[194px] flex items-center justify-center">
          <SlideUp className="w-full max-w-[862px] flex flex-col items-center justify-center">
            {/* h2: Inter ExtraBold 30/38 -0.01em #FFFFFF center */}
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-white text-center">
              Ready to connect your industrial operations?
            </h2>
            {/* Para: padding-top 16px, Regular 16/26 #D4D4D4 center */}
            <p className="font-sans font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-[#D4D4D4] text-center pt-4 max-w-[862px]">
              Tell us about your facility, workflows and operational priorities. We will show you how AdunniTrak can be configured to support your teams.
            </p>
            {/* Buttons: padding-top 32px, gap 16px */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center pt-8 gap-4 w-full sm:w-auto">
              {/* Primary: #0F58F5 fill, padding 16px 24px, radius 8px */}
              <Link
                href="/demo"
                className="inline-flex items-center justify-center bg-[#0F58F5] rounded-lg py-4 px-6 font-sans font-bold text-[16px] text-white leading-none whitespace-nowrap hover:opacity-90 transition-opacity w-full sm:w-auto shadow-md"
              >
                Book a Personalised Demonstration
              </Link>
              {/* Secondary: no fill, stroke #FFFFFF 1px, radius 8px */}
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center bg-transparent border border-white rounded-lg py-4 px-6 font-sans font-bold text-[16px] text-white leading-none whitespace-nowrap hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Explore Solutions
              </Link>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
