"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";

export default function PlatformHeroSection() {
  return (
    <section className="bg-[#071A33] relative overflow-hidden min-h-[646px] flex items-center">
      {/* Background Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 0, 0, 0) 100%)"
        }}
      />

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8 relative z-10 py-16 xl:py-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-center w-full">

          {/* Left Content */}
          <SlideUp className="flex flex-col w-full xl:max-w-[620px] relative z-20">
            <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#3FC3EE] uppercase mb-4">
              AI-powered industrial operational intelligence
            </span>
            <h1 className="font-sans font-extrabold text-[36px] lg:text-[42px] leading-[44px] lg:leading-[50px] tracking-[-0.01em] text-white">
              One connected platform built around your operation
            </h1>
            <p className="font-sans font-normal text-[16px] leading-[26px] text-white pt-6">
              Connect people, equipment, workflows and operational knowledge in one configurable system.
            </p>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-white/70 pt-4">
              AdunniTrak brings operations, downtime, maintenance, reliability, inventory, workforce activity, administration and operational reporting into one connected environment. The platform is configured around your facility structure, equipment hierarchy, workflows, responsibilities and operational terminology, while Adunni AI provides an authorised intelligence layer across relevant areas of the system.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-6 bg-[#0F58F5] rounded-lg font-sans font-bold text-[16px] text-white transition-opacity hover:opacity-90 gap-2"
              >
                Discuss Your Operational Needs
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-6 bg-transparent border-[1.5px] border-[#ECEDEE] rounded-lg font-sans font-bold text-[16px] text-white transition-colors hover:bg-white/10 gap-2"
              >
                Book a Demo
                <ArrowRight size={16} />
              </Link>
            </div>
          </SlideUp>

          {/* Right Image/Mockup */}
          <FadeIn delay={0.3} className="w-full relative h-[300px] sm:h-[400px] lg:h-[480px] xl:h-[449px] z-10 flex justify-center xl:justify-end">
            <div className="relative w-full max-w-[639px] h-full">
              <Image
                src="/images/mockup-platform-hero-1fb634.png"
                alt="AdunniTrak Platform Interface Mockup"
                fill
                className="object-contain xl:object-right"
                priority
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}