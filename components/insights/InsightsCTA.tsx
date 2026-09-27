import { SlideUp } from "@/components/animations/SlideUp";
import Link from "next/link";

export function InsightsCTA() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <SlideUp>
          <div className="max-w-[720px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-[#0B1220] font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] mb-4">
              See how these ideas work in your operation
            </h2>
            <p className="text-[#5B6472] font-inter text-[14px] md:text-[15px] leading-[24px] mb-8 max-w-[640px]">
              Book a personalised demonstration to explore how AdunniTrak can connect your facility structure, workflows, equipment information and operational knowledge.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center h-[48px] px-8 rounded-[8px] bg-[#0F58F5] text-[15px] font-[600] text-white transition-colors hover:bg-[#093593] shadow-sm w-full sm:w-auto"
              >
                Book a live demo
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center h-[48px] px-8 rounded-[8px] bg-[#F4F5F7] text-[15px] font-[600] text-[#0B1220] transition-colors hover:bg-[#E2E6ED] border border-[#E2E6ED] w-full sm:w-auto"
              >
                Explore the platform
              </Link>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
