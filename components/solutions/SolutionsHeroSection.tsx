"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";

export const SolutionsHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-bg-inverse text-white min-h-[646px] flex items-center">
      {/* Background Gradients/Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(113deg,rgba(3,18,49,0.97)_37%,rgba(9,3,63,0.63)_49%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8 relative z-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Content Box */}
        <SlideUp className="flex flex-col w-full lg:max-w-[620px]">
          <span className="t-overline text-action-primary mb-4 block">Connected solutions for industrial operations</span>

          <h1 className="t-display mb-6">
            Turn operational challenges into connected action
          </h1>

          <p className="t-body-lg text-text-muted text-white/70 mb-4">
            Bring people, processes and operational data together in one intelligent workflow.
          </p>
          <p className="t-body-lg text-text-muted text-white/70 mb-8">
            AdunniTrak helps industrial teams move from disconnected records and isolated activities to coordinated operational action — configured around your facility, equipment hierarchy, workflows, responsibilities and terminology.
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            <li className="flex items-start gap-3">
              <div 
  className="w-[6px] h-[6px] rounded-full shrink-0 mt-2" 
  style={{ background: "var(--Design-Colours-text-primary-w-text-teal-3, #3FC3EE)" }}
/>
              <span className="t-body-lg text-white/90">Configured around your operation, not a generic one-size-fits-all system.</span>
            </li>
            <li className="flex items-start gap-3">
                     <div 
  className="w-[6px] h-[6px] rounded-full shrink-0 mt-2" 
  style={{ background: "var(--Design-Colours-text-primary-w-text-teal-3, #3FC3EE)" }}
/>
              <span className="t-body-lg text-white/90">Connected across operational functions, not a collection of isolated tools.</span>
            </li>
            <li className="flex items-start gap-3">
                       <div 
  className="w-[6px] h-[6px] rounded-full shrink-0 mt-2" 
  style={{ background: "var(--Design-Colours-text-primary-w-text-teal-3, #3FC3EE)" }}
/>
              <span className="t-body-lg text-white/90">Supported by Adunni AI, grounded in your approved operational context.</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/demo" className="btn-primary w-full sm:w-auto group flex items-center justify-center">
              Book a live demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#solutions" className="btn-outline-dark w-full sm:w-auto flex items-center justify-center">
              Explore solutions
            </Link>
          </div>
        </SlideUp>

        {/* Right Asset Box */}
        <FadeIn delay={0.3} className="w-full relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[600px] h-full">
            <Image
              src="/images/solutions/hero_image.png"
              alt="AdunniTrak Solutions Hero Image"
              fill
              className="object-contain lg:object-right"
              priority
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
};