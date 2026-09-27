"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const IndustriesFaqSection = () => {
  const faqs = [
    {
      q: "Is AdunniTrak limited to the industries shown on this page?",
      a: "No. The industries shown represent AdunniTrak's initial focus. The platform's modular structure allows it to be applied across many other asset-intensive and process manufacturing environments."
    },
    {
      q: "Does AdunniTrak work differently in every industry?",
      a: "The platform's core purpose remains consistent. It connects production, downtime, and maintenance. However, the terminology and equipment structure is adapted to match each industry's specific workflow."
    },
    {
      q: "Can AdunniTrak support a facility without a production line?",
      a: "Yes. Power plants, maintenance workshops, utilities and mobile-equipment fleets can utilise AdunniTrak for equipment reliability, maintenance requests and shift handover without using the production tracking modules."
    },
    {
      q: "Can the platform support several departments within a large facility?",
      a: "Yes. AdunniTrak can organise information across process areas (e.g. from mine to mill, or from kiln to dispatch) giving each department visibility over its own performance while providing site management with an aggregated view."
    },
    {
      q: "Can we retain our existing equipment names and terminology?",
      a: "Yes. The platform can be configured around the organisation's existing asset register, tags and operational vocabulary to ensure it remains familiar to the workforce."
    },
    {
      q: "Do we have to deploy every part of the platform at once?",
      a: "No. Deployment can begin with one department, facility, or process line. Modules can be introduced gradually as the workforce becomes familiar with the system."
    },
    {
      q: "Does AdunniTrak replace all our existing industrial software?",
      a: "Not necessarily. AdunniTrak can provide a connected operational record. It typically sits alongside ERPs, CMMS and historians, filling the gap between complex enterprise systems and paper-based shift logs."
    },
    {
      q: "Can the demonstration focus on our industry?",
      a: "Yes. The demonstration can be prepared around your facility type, using industry-relevant language and examples."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 lg:py-24 ">
      <div className=" w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Industry questions
          </span>
          <h2 className="text-[30px] md:text-[36px] leading-[38px] md:leading-[44px] font-extrabold text-[#0B1220] tracking-[-0.01em]">
            What industrial organisations may want to know
          </h2>
        </div>

        {/* Right FAQ List */}
        <div className="lg:col-span-7 flex flex-col  bg-[#F5F7FB] p-10 rounded-md">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`flex flex-col  `}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex items-center justify-between w-full py-6 text-left focus:outline-none"
                >
                  <span className="text-[16px] md:text-[18px] font-bold text-[#0B1220] pr-4">
                    {faq.q}
                  </span>
                  <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-[#0C46C4]">
                    {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6">
                      <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-[#5B6472]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
