"use client";

import Link from "next/link";
import { SlideUp } from "@/components/animations/SlideUp";

export default function AboutCTA() {
  return (
    <section className="w-full py-[96px] bg-[#192F5D]">
      <div className="w-full max-w-[1366px] mx-auto px-5 lg:px-[32px]">
        <SlideUp className="flex flex-col items-center text-center max-w-[862px] mx-auto">
          
          {/* Overline */}
          <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#17A9DB] font-inter">
            Work with us
          </p>

          {/* H2 */}
          <h2 className="mt-[16px] font-inter font-extrabold text-[32px] md:text-[40px] leading-[1.15] tracking-[-0.02em] text-white">
            Let&apos;s build a clearer view of your operation
          </h2>

          {/* Body */}
          <p className="mt-[24px] text-[16px] leading-[26px] font-normal text-white/80 font-inter max-w-[560px]">
            Tell us about your facility, workflows and operational priorities.
          </p>

          {/* CTAs */}
          <div className="mt-[48px] flex flex-col sm:flex-row items-center gap-[16px] w-full sm:w-auto">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center h-[52px] px-[32px] rounded-[8px] bg-[#0F58F5] text-white font-inter font-bold text-[16px] transition-all hover:bg-[#0c47c4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3)]"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center h-[52px] px-[32px] rounded-[8px] border-[1.5px] border-white/30 text-white font-inter font-semibold text-[16px] transition-all hover:bg-white/10"
            >
              Contact Sales
            </Link>
          </div>
          
        </SlideUp>
      </div>
    </section>
  );
}
