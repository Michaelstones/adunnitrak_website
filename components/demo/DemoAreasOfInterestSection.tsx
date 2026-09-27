import React from "react";

interface AreaCard {
  number: string;
  title: string;
  description: string;
  isWide?: boolean;
}

export const DemoAreasOfInterestSection = () => {
  const areas: AreaCard[] = [
    {
      number: "01",
      title: "Operations and production",
      description: "Plant status, shift details, plans, reporting and general awareness."
    },
    {
      number: "02",
      title: "Downtime response",
      description: "Detection, acknowledgement and connected incident collaboration."
    },
    {
      number: "03",
      title: "Maintenance",
      description: "Priority work, PM, safety validation and repair execution.",
      isWide: true
    },
    {
      number: "04",
      title: "Reliability and FMEA",
      description: "Investigation, confirmed causes, metrics and reusable knowledge."
    },
    {
      number: "05",
      title: "Inventory and resources",
      description: "Locations, receipts, issues and material availability."
    },
    {
      number: "06",
      title: "Workforce and attendance",
      description: "Biometric attendance, shift assignments and accountability."
    },
    {
      number: "07",
      title: "Adunni AI",
      description: "Plant-specific investigation, knowledge retrieval and assistance."
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#F5F7FB]">
      <div className=" w-full mx-auto px-5 lg:px-8 flex flex-col">

        {/* Header */}
        <div className="flex flex-col mb-12">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Select your areas of interest
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-extrabold text-[#0B1220] tracking-[-0.01em] mb-4 max-w-[845px]">
            Explore the capabilities most relevant to your organisation
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#5B6472] max-w-[610px]">
            Your demonstration can cover the complete platform, or focus entirely on the specific modules relevant to your immediate challenges.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 md:p-8 flex flex-col border border-[#E2E6ED] ${area.isWide ? 'sm:col-span-2' : 'col-span-1'
                }`}
            >
              <span className="text-[#1656E8] text-[14px] font-bold mb-6 block">
                {area.number}
              </span>
              <h3 className="text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-bold text-[#0B1220] mb-3">
                {area.title}
              </h3>
              <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-[#5B6472]">
                {area.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
