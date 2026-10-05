"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SlideUp } from "@/components/animations/SlideUp";
import Link from "next/link";

const cards = [
  {
    image: "/images/carousel1.svg",
    label: "01 · Dashboard Command Centre",
    title: "Plant-wide operational view",
    desc: "See plant status, production, downtime, maintenance workload, reliability indicators and priorities.",
  },
  {
    image: "/images/carousel2.svg",
    label: "02 · Daily Shift Details and Production Plan",
    title: "Shift activity, targets and feed plan",
    desc: "Capture shift performance, production, workforce activity, targets and feed requirements.",
  },
  {
    image: "/images/carousel3.svg",
    label: "03 · Downtime Incident Response",
    title: "Detection, acknowledgement and timeline",
    desc: "Record each event and follow the response timeline through acknowledgement and escalation.",
  },
  {
    image: "/images/carousel4.svg",
    label: "04 · Maintenance Execution P1 to P4",
    title: "Safe priority-based repair workflow",
    desc: "Manage emergency, urgent, deferred and planned work with ownership and gated safety execution.",
  },
  {
    image: "/images/carousel5.svg",
    label: "05 · Preventive Maintenance Schedule and Execution",
    title: "PM planning and completion",
    desc: "Plan recurring tasks, assign responsibilities, record completion evidence and monitor compliance.",
  },
  {
    image: "/images/carousel6.svg",
    label: "06 · Reliability Performance and FMEA",
    title: "Performance, reliability & investigation",
    desc: "Measure reliability, investigate causes, identify repeats and preserve confirmed learning.",
  },
  {
    image: "/images/carousel7.svg",
    label: "07 · Inventory and Stores",
    title: "Parts, locations, movement and reorder",
    desc: "Maintain parts, locations, receipts, issues, balances and reorder visibility.",
  },
  {
    image: "/images/carousel8.svg",
    label: "08 · Shift Attendance",
    title: "Biometric workforce visibility",
    desc: "Use API-capable biometric devices for current shift and workforce visibility.",
  },
  {
    image: "/images/carousel9.svg",
    label: "09 · Ask Adunni",
    title: "Plant-specific AI insight and reporting",
    desc: "Ask questions, retrieve knowledge, identify similar failures and generate summaries.",
  },
];

export default function DashboardCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement | undefined;
    if (child) {
      container.scrollTo({
        left: child.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
    activeRef.current = index;
    setActiveIndex(index);
  }, []);

  const scrollLeft = () => scrollTo(Math.max(0, activeIndex - 1));
  const scrollRight = () =>
    scrollTo(activeIndex >= cards.length - 1 ? 0 : activeIndex + 1);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollPos = container.scrollLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft - container.offsetLeft - scrollPos);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeRef.current) {
      activeRef.current = closestIndex;
      setActiveIndex(closestIndex);
    }
  };

  // Auto-scroll (no side effects inside a state updater)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const next = activeRef.current >= cards.length - 1 ? 0 : activeRef.current + 1;
      scrollTo(next);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, scrollTo]);

  return (
    <section
      className="bg-[#031231] py-16 md:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-[1366px] mx-auto px-4 md:px-8">
        <SlideUp className="flex flex-col gap-6 md:gap-8">
          {/* Track */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-4 md:gap-6 py-2 snap-x snap-mandatory scroll-smooth"
            onScroll={handleScroll}
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="w-full max-w-[300px] md:max-w-[404px] shrink-0 snap-start flex flex-col justify-between rounded-[14px] p-2
                           bg-gradient-to-b from-[#17356C] to-[#0E2554]
                           border border-[#5B8CFF]/40
                           shadow-[0_0_0_1px_rgba(91,140,255,0.12),0_4px_8px_3px_rgba(0,0,0,0.15),0_0_24px_rgba(60,110,255,0.18)]"
              >
                {/* Image block */}
                <div className="w-full aspect-[4/3] md:h-[284px] rounded-lg overflow-hidden shrink-0 bg-white shadow-[1px_4px_2px_0px_rgba(0,0,0,0.1)]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={758}
                    height={568}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text block */}
                <div className="flex flex-col p-4 md:p-5">
                  <p className="font-sans font-bold text-[10px] md:text-[12px] leading-[16px] md:leading-[18px] text-[#4F8BFF]">
                    {card.label}
                  </p>
                  <p className="font-sans font-semibold text-[13px] md:text-[14px] leading-[20px] md:leading-[21.75px] text-white pt-1">
                    {card.title}
                  </p>
                  <p className="font-sans font-normal text-[11px] md:text-[12px] leading-[18px] md:leading-[21.13px] text-[#B4C0D9] pt-2">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between py-2 md:py-6">
            <button
              onClick={scrollLeft}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-opacity border-none ${activeIndex === 0
                ? "bg-[#525A72] opacity-50 cursor-not-allowed"
                : "bg-white cursor-pointer hover:opacity-80"
                }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={activeIndex === 0 ? "#FFFFFF" : "#000000"}
                strokeWidth="2"
                className="rotate-180"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-2 rounded-full p-0 border-none cursor-pointer transition-all duration-300 ease-in-out ${activeIndex === idx ? "w-6 bg-[#1D5CF0]" : "w-2 bg-[#D4D4D4]"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollRight}
              aria-label="Next slide"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-lg border-none cursor-pointer hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </SlideUp>
      </div>
      <SlideUp className="bg-[#192F5D] w-[90%] mx-auto py-8 mt-12">
        <div className="w-full flex items-center justify-center  flex-col ">
          <h3 className="text-white">
            See AdunnitTrak in Action
          </h3>
          <Link
            href="https://app.adunnitrak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0F58F5] text-white py-4 px-6 rounded-lg hover:opacity-90 transition-opacity w-[80%] text-center mt-12"
          >
            Start Free Production Trial
          </Link>
        </div>
      </SlideUp>
    </section>
  );
}