"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AboutOffices() {
  const [isAfrica, setIsAfrica] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      // Detect if the user's timezone is in Africa (e.g., "Africa/Lagos")
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && tz.startsWith("Africa")) {
        setIsAfrica(true);
      }
    } catch (e) {
      console.warn("Timezone detection failed", e);
    }
  }, []);

  // Dynamically set the top row entity details
  const currentEntity = isAfrica
    ? {
      name: "AdunniTrak Solutions Nigeria Ltd.",
      location: "Jahi, Abuja, Nigeria",
    }
    : {
      name: "AdunniTrak Solutions Inc.",
      location: "London, Ontario, Canada",
    };

  return (
    <section className="bg-[#F9FAFB] py-16 lg:py-24">
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8">

        <h2 className="font-inter font-extrabold text-[24px] md:text-[32px] text-[#0B1220] mb-8">
          Company information
        </h2>

        {/* 6-Card Grid (3 columns x 2 rows) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 transition-opacity duration-300 ${!isMounted ? "opacity-0" : "opacity-100"
            }`}
        >
          {/* --- ROW 1: Dynamic Entity Info & Static Focus --- */}
          <div className="flex flex-col rounded-[12px] border border-[#E2E6ED] bg-white p-5 shadow-sm">
            <span className="text-[12px] text-[#5B6472] mb-1 font-inter">Company name</span>
            <p className="text-[14px] font-semibold text-[#0B1220] font-inter">
              {currentEntity.name}
            </p>
          </div>

          <div className="flex flex-col rounded-[12px] border border-[#E2E6ED] bg-white p-5 shadow-sm">
            <span className="text-[12px] text-[#5B6472] mb-1 font-inter">Location</span>
            <p className="text-[14px] font-semibold text-[#0B1220] font-inter">
              {currentEntity.location}
            </p>
          </div>

          <div className="flex flex-col rounded-[12px] border border-[#E2E6ED] bg-white p-5 shadow-sm">
            <span className="text-[12px] text-[#5B6472] mb-1 font-inter">Company focus</span>
            <p className="text-[14px] font-semibold text-[#0B1220] font-inter">
              Industrial operational intelligence software
            </p>
          </div>

          {/* --- ROW 2: Static Details --- */}
          <div className="flex flex-col rounded-[12px] border border-[#E2E6ED] bg-white p-5 shadow-sm">
            <span className="text-[12px] text-[#5B6472] mb-1 font-inter">Industries served</span>
            <p className="text-[14px] font-normal text-[#0B1220] leading-[22px] font-inter">
              Steel · Mining · Cement · Manufacturing · Quarry and aggregates · Power generation · Processing plants
            </p>
          </div>

          <div className="flex flex-col rounded-[12px] border border-[#E2E6ED] bg-white p-5 shadow-sm">
            <span className="text-[12px] text-[#5B6472] mb-1 font-inter">Platform focus</span>
            <p className="text-[14px] font-normal text-[#0B1220] leading-[22px] font-inter">
              Operations · Maintenance · Reliability and analytics · Inventory and resources · Workforce and administration · Adunni AI
            </p>
          </div>

          <div className="flex flex-col rounded-[12px] border border-[#E2E6ED] bg-white p-5 shadow-sm">
            <span className="text-[12px] text-[#5B6472] mb-1 font-inter">Contact</span>
            <div className="flex flex-col gap-1 mt-1">
              <Link
                href="mailto:agboola.shonekan@adunnitrak.com"
                className="text-[14px] font-medium text-[#0F58F5] hover:text-[#093593] hover:underline transition-colors font-inter"
              >
                agboola.shonekan@adunnitrak.com
              </Link>
              <Link
                href="https://www.adunnitrak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-[#0F58F5] hover:text-[#093593] hover:underline transition-colors font-inter"
              >
                www.adunnitrak.com
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}