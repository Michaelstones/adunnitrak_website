import React from "react";

export const DemoJourneySection = () => {
  const steps = [
    {
      number: "1",
      title: "Tell us about your operation",
      description: "Complete the demonstration-request form and identify your areas of interest."
    },
    {
      number: "2",
      title: "We review your requirements",
      description: "Our team reviews the information and may contact you for brief clarifications."
    },
    {
      number: "3",
      title: "We prepare your demonstration",
      description: "We select relevant modules, workflows and examples that match your facility type."
    },
    {
      number: "4",
      title: "We conduct the live session",
      description: "Our team guides your participants through the relevant capabilities in a tailored environment."
    },
    {
      number: "5",
      title: "We discuss the next step",
      description: "We discuss configuration, site assessment, implementation paths and commercial models."
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 ">
      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Your demonstration journey
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-extrabold text-[#0B1220] tracking-[-0.01em] mb-6">
            A focused process from request to relevant demonstration
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#5B6472]">
            The purpose of the session is to determine how AdunniTrak fits your specific operational reality, not just to showcase software.
          </p>
        </div>

        {/* Right Content - Step Rails */}
        <div className="lg:col-span-7 flex flex-col lg:pl-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 relative pb-10 last:pb-0">
              {/* Vertical line connecting steps */}
              {index !== steps.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-[1px] bg-[#E2E6ED]" />
              )}

              {/* Number Circle */}
              <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-[#0F58F5] flex items-center justify-center font-bold text-[14px] text-white">
                {step.number}
              </div>

              {/* Text */}
              <div className="flex flex-col pt-2">
                <h3 className="text-[18px] leading-[26px] font-bold text-[#0B1220] mb-2">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#5B6472]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
