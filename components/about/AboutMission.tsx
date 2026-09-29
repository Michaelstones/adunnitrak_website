"use client";

import Image from "next/image";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";

export default function AboutMission() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8">

        {/* Simplified Grid: 7 columns for text, 5 columns for the image, automatic gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Text block (7 cols) */}
          <SlideUp className="lg:col-span-7 flex flex-col">
            {/* Overline */}
            <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#1656E8]">
              Our mission
            </p>

            {/* H2 */}
            <h2 className="mt-4 font-extrabold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] tracking-[-0.01em] text-[#0B1220]">
              To give every industrial team the operational clarity they deserve
            </h2>

            {/* Paragraphs */}
            <div className="mt-6 flex flex-col gap-4 text-[16px] leading-[26px] text-[#5B6472]">
              <p>
                Industrial operations generate vast amounts of data — from work orders
                and maintenance logs to equipment readings and inventory movements. Yet
                most operational teams still work from spreadsheets, whiteboards and
                disconnected records. The result is avoidable downtime, compliance gaps
                and decisions made on incomplete information.
              </p>
              <p>
                AdunniTrak was built to close that gap. We configure our platform
                around each client's specific equipment, workflows and terminology — so
                the system works the way your teams work, not the other way around.
              </p>
              <p>
                From refineries and power plants to manufacturing facilities and
                utilities — we help operations teams in Africa and beyond gain the
                real-time visibility and structured intelligence they need to run
                efficiently, reliably and safely.
              </p>
            </div>

            {/* Quote block */}
            <div className="mt-5 rounded-[14px] border border-[#E2E6ED] bg-[#EAEEF6] p-6 lg:p-8">
              <p className="text-[16px] leading-[26px] text-[#5B6472]">
                <span className="font-bold text-[#0B1220]">Where data meets diligence.</span>{" "}
                We believe that operational excellence is not a luxury — it is what
                keeps people safe, assets productive and businesses viable. That belief
                drives every decision we make about our platform.
              </p>
            </div>
          </SlideUp>

          {/* Right: Photo card (5 cols) */}
          <FadeIn delay={0.2} className="lg:col-span-5 w-full">
            {/* Responsive height scale prevents squishing on mobile while maintaining desktop stature */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-[14px] overflow-hidden bg-[#F4F6FB] border border-[#E2E6ED] shadow-sm">
              <Image
                src="/images/about-mission-photo.png"
                alt="Industrial operations team at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                quality={100}
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}