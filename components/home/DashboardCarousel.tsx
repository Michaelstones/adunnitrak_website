"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SlideUp } from "@/components/animations/SlideUp";

const cards = [
  {
    image: "/images/scroll1.png",
    label: "01 · Dashboard Command Centre",
    title: "Plant-wide operational view",
    desc: "See plant status, production, downtime, maintenance workload, reliability indicators and priorities.",
  },
  {
    image: "/images/scroll2.png",
    label: "02 · Daily Shift Details and Production Plan",
    title: "Shift activity, targets and feed plan",
    desc: "Capture shift performance, production, workforce activity, targets and feed requirements.",
  },
  {
    image: "/images/scroll3.png",
    label: "03 · Downtime Incident Response.",
    title: "Detection, acknowledgement and timeline",
    desc: "Record each event and follow the response timeline through acknowledgement and escalation",
  },
  {
    image: "/images/scroll4.png",
    label: "04 · Maintenance Execution P1 to P4",
    title: "Safe priority-based repair workflow",
    desc: "Manage emergency, urgent, deferred and planned work with ownership and gated safety execution.",
  },
  {
    image: "/images/scroll5.png",
    label: "05 · Preventive Maintenance Schedule and Execution",
    title: "PM planning and completion",
    desc: "Plan recurring tasks, assign responsibilities, record completion evidence and monitor compliance.",
  },
  {
    image: "/images/scroll6.png",
    label: "06 · Reliability Performance and FMEA",
    title: "Performance, reliability & investigarion",
    desc: "Measure reliability, investigate causes, identify repeats and preserve confirmed learning.",
  },
  {
    image: "/images/scroll7.png",
    label: "07 · Inventory and Stores",
    title: "Parts, locations, movement and reorder",
    desc: "Maintain parts, locations, receipts, issues, balances and reorder visibility.",
  },
  {
    image: "/images/scroll8.png",
    label: "08 · Shift Attendance",
    title: "Biometric workforce visibility",
    desc: "Use API-capable biometric devices for current shift and workforce visibility.",
  },
  {
    image: "/images/scroll9.png",
    label: "09 · Ask Adunni",
    title: "Plant-specific AI insight and reporting",
    desc: "Ask questions, retrieve knowledge, identify similar failures and generate summaries.",
  },
];

export default function DashboardCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive item width: 404px card + 16px gap on desktop, on mobile we'll measure dynamically or estimate
  // For precise scrollTo, it's safer to read the clientWidth of the first child, but for now we rely on CSS scroll-snap
  const scrollTo = useCallback((index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        // Calculate offset taking into account the gap
        const scrollLeft = child.offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
      setActiveIndex(index);
    }
  }, []);

  const scrollLeft = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollTo(newIndex);
  };

  const scrollRight = () => {
    const newIndex = activeIndex >= cards.length - 1 ? 0 : activeIndex + 1;
    scrollTo(newIndex);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPos = container.scrollLeft;
      // Find the index of the child that is closest to the scroll position
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const childElement = child as HTMLElement;
        const distance = Math.abs(childElement.offsetLeft - container.offsetLeft - scrollPos);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  // Auto-scrolling
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = current >= cards.length - 1 ? 0 : current + 1;
        scrollTo(nextIndex);
        return nextIndex;
      });
    }, 4000); // 4 seconds per slide for a smoother reading experience

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
        {/* Scroller container */}
        <SlideUp className="flex flex-col gap-6 md:gap-8">
          {/* Track */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-4 md:gap-6 pb-4 snap-x snap-mandatory scroll-smooth"
            onScroll={handleScroll}
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="w-full max-w-[300px] md:max-w-[404px] shrink-0 bg-[#071635ff] rounded-[14px] p-2 flex flex-col justify-between snap-start shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),0px_4px_8px_3px_rgba(0,0,0,0.15)]"
              >
                {/* Image block */}
                <div className="w-full aspect-[4/3] md:h-[284px] rounded-lg shadow-[1px_4px_2px_0px_rgba(0,0,0,0.1)] overflow-hidden shrink-0">
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
                  <p className="font-sans font-bold text-[10px] md:text-[12px] leading-[16px] md:leading-[18px] text-[#0C46C4] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)]">
                    {card.label}
                  </p>
                  <p className="font-sans font-semibold text-[13px] md:text-[14px] leading-[20px] md:leading-[21.75px] text-white pt-1">
                    {card.title}
                  </p>
                  <p className="font-sans font-normal text-[11px] md:text-[12px] leading-[18px] md:leading-[21.13px] text-[#8890A3] pt-2">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between py-2 md:py-6">
            {/* Left Button */}
            <button
              onClick={scrollLeft}
              disabled={activeIndex === 0}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-opacity border-none ${
                activeIndex === 0 ? "bg-[#525A72] opacity-50 cursor-not-allowed" : "bg-[#D4D4D4] cursor-pointer"
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={activeIndex === 0 ? "#FFFFFF" : "#000000"} strokeWidth="2" className="rotate-180">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Pagination dots (1 active + N inactive) */}
            <div className="flex items-center gap-2">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-2 rounded-full p-0 border-none cursor-pointer transition-all duration-300 ease-in-out ${
                    activeIndex === idx ? "w-6 bg-[#0C46C4]" : "w-2 bg-[#D4D4D4]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={scrollRight}
              className="flex items-center justify-center w-10 h-10 bg-white rounded-lg border-none cursor-pointer hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
