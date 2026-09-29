import React from "react";

export const DemoBuiltAroundSection = () => {
  const items = [
    {
      title: "Your facility and operating environment",
      description: "Type of operation, plant structure, production areas and key infrastructure."
    },
    {
      title: "Your equipment hierarchy",
      description: "How equipment, sub-equipment and operational areas are linked together."
    },
    {
      title: "Your workflows and responsibilities",
      description: "The processes, roles, approvals and escalation paths used in your plant."
    },
    {
      title: "Your terminology and nomenclature",
      description: "The names, classifications and expressions already familiar to your team."
    },
    {
      title: "Your current challenges",
      description: "Downtime, maintenance, reliability, inventory, shifts or communication hurdles."
    },
    {
      title: "Your desired outcomes",
      description: "The operational improvements your organisation wants to achieve."
    }
  ];

  return (
    <section id="expectations" className="w-full py-16 lg:py-24 bg-[#DDDEE1] ">
      <div className=" w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Built around your operation
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-extrabold text-[#0B1220] tracking-[-0.01em] mb-6">
            A demonstration relevant to your plant, not a generic software tour
          </h2>
          <p className="text-[16px]  leading-[26px] md:leading-[28px] text-[#5B6472] mb-6">
            No two industrial operations are exactly the same. Equipment structures, production processes, responsibilities, approval requirements and terminology can differ significantly across facilities.
          </p>
          <p className="text-[16px] leading-[26px] md:leading-[28px] text-[#5B6472]">
            That is why we do not rely on a single standard presentation for every organisation. We prepare each demonstration around the prospective client's industry, facility type, operational priorities and areas of interest.
          </p>
        </div>

        {/* Right Content - 2 Column Grid */}
        <div className="  lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-12 lg:pl-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col p-4 bg-white rounded-md shadow-md">
              <h3 className="text-[16px] leading-[24px] font-bold text-[#0B1220] mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-[#5B6472]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
