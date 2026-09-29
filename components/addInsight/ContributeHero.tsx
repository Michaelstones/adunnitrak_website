import { SlideUp } from "@/components/animations/SlideUp";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContributeHero() {
  return (
    <section className="relative w-full bg-[#031231] overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28">
      {/* Background Overlay simulating the design's dark blue gradient/image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031231] via-[#031231]/90 to-[#12358F]/80 z-10" />
        {/* Replace with your actual dark industrial background image */}
        <Image
          src="/images/dark-industrial-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 relative z-20 flex flex-col items-start">
        <SlideUp>
          <span className="text-[#3FC3EE] font-inter font-bold text-[12px] leading-[16px] tracking-[0.08em] uppercase mb-4 block">
            Contribute to Insights
          </span>
          <h1 className="text-white font-inter font-extrabold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] max-w-[850px] mb-6">
            Share what you have learned from <span className="text-[#3FC3EE]">real industrial work</span>
          </h1>
          <p className="text-[#A0ABBA] font-inter text-[16px] md:text-[18px] leading-[28px] max-w-[750px] mb-10">
            Plant teams, technicians and operational leaders learn the most from each other. Submit an article, walkthrough or field lesson and help connected operations improve.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-10">
            {[
              "Reviewed by our editorial team",
              "Credited to you and your organisation",
              "No confidential plant data required"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#3FC3EE] shrink-0" />
                <span className="text-[#E2E6ED] font-inter text-[14px]">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/insights" className="inline-flex items-center justify-center h-[52px] px-8 bg-[#0F58F5] hover:bg-[#093593] rounded-[8px] font-inter font-bold text-[15px] text-white transition-colors shadow-sm">
              Explore latest insights
            </Link>
            <Link href="/platform" className="inline-flex items-center justify-center h-[52px] px-8 bg-transparent border border-[#E2E6ED]/30 hover:bg-white/10 rounded-[8px] font-inter font-bold text-[15px] text-white transition-colors">
              Explore the platform
            </Link>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

