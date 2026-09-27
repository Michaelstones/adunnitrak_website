import React from "react";
import { Check } from "lucide-react";

export const AdunniAiGovernanceSection = () => {
  const contextList = [
    "Facility and equipment hierarchy",
    "Downtime and incident history",
    "Maintenance and repair records",
    "Confirmed failure causes",
    "FMEA and reliability knowledge",
    "Inventory and resource information",
    "Approved procedures and reference material",
    "Client-specific terminology"
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-t border-[#E2E6ED]">
      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Content (Context) */}
        <div className="lg:col-span-7 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Grounded, not generic
          </span>
          <h2 className="text-[30px] md:text-[36px] leading-[38px] md:leading-[44px] font-extrabold text-[#0B1220] tracking-[-0.01em] mb-6">
            Working within authorised operational context
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#5B6472] mb-8">
            Adunni AI operates within defined user permissions and authorised information boundaries, using only the operational context relevant to each user's role and site.
          </p>

          <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-bold text-[#0B1220] mb-6">
            Potential authorised context includes
          </p>

          <ul className="grid grid-cols-1  gap-x-6 gap-y-4">
            {contextList.map((item, i) => (
              <li key={i} className="flex  items-start gap-2">
                <div className="flex items-center gap-3">
                  <div className=" w-1.5 h-1.5 rounded-full bg-[#1656E8] " />
                  <span className="text-[14px] leading-[22px] text-[#5B6472] italic">
                    {item}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content (Governance) */}
        <div className="lg:col-span-5 flex flex-col justify-center bg-[#031231] rounded-xl p-8 lg:p-12 border border-[#E2E6ED]">
          <h3 className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold text-white mb-4">
            Trust and governance statement
          </h3>
          <p className="text-[16px] leading-[26px] text-white/70">
            Adunni AI supports professional judgement. It does not replace operational responsibility, engineering judgement, safety procedures or required approvals. Decisions, approvals and operational actions remain with authorised personnel at all times.
          </p>
        </div>

      </div>
    </section>
  );
};
