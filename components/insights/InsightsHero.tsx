"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

export function InsightsHero() {
  const benefits = [
    "Built around practical industrial challenges and operational learning.",
    "Created for plant teams, technical professionals and industrial leadership.",
    "Reviewed for clarity, relevance and responsible use.",
  ];

  // Custom smooth scroll handler to offset the sticky header
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80; // Adjust this if your sticky header height changes
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 flex items-center min-h-[700px]">

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/insights-bg.png" // Add your blurred/background shelf image here
          alt="Industrial knowledge background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark blue gradient overlay fading from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031231] via-[#031231]/95 to-[#031231]/40" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7">
            <StaggerContainer>
              <StaggerItem>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[#3FC3EE] font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase">
                    AdunniTrak insights
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <h1 className="text-white font-inter font-extrabold text-[36px] lg:text-[48px] leading-[1.1] tracking-[-0.01em] mt-2 max-w-[580px]">
                  Practical industrial knowledge for connected operations
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="text-[#D4D4D4] font-inter text-[16px] md:text-[18px] leading-[28px] mt-6 max-w-[540px]">
                  Operational lessons, technical perspectives and platform guidance
                  grounded in the realities of industrial work.
                </p>
              </StaggerItem>

              <StaggerItem>
                <ul className="mt-8 flex flex-col gap-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-sm bg-[#3FC3EE] flex-shrink-0" />
                      <span className="text-[#E2E6ED] font-inter text-[14px] md:text-[15px] leading-[24px]">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  {/* Updated Link with Smooth Scroll onClick */}
                  <Link
                    href="/add-insights"
                    className="h-[48px] px-6 bg-[#0F58F5] hover:bg-[#093593] text-white font-inter font-semibold text-[15px] rounded-[8px] transition-colors flex items-center justify-center"
                  >
                    Contribute to insights
                  </Link>

                  {/* Updated Link with Smooth Scroll onClick */}
                  <Link
                    href="#operational-walkthrough"
                    onClick={(e) => handleScroll(e, "operational-walkthrough")}
                    className="h-[48px] px-6 bg-transparent hover:bg-white/10 text-white font-inter font-semibold text-[15px] rounded-[8px] transition-colors border border-white/20 flex items-center justify-center"
                  >
                    View operational  walkthrough
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Column: Foreground Image (5 cols) */}
          <div className="lg:col-span-5 w-full flex justify-end">
            <FadeIn delay={0.3} className="w-full">
              <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/insights-hero.jpg" // Add your foreground binder image here
                  alt="Hand pulling a blue binder from an industrial shelf"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}