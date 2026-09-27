import React from "react";

export const DemoParticipantsSection = () => {
  const participants = [
    {
      title: "Plant and operations leadership",
      description: "Plant managers, operations managers and production leaders."
    },
    {
      title: "Maintenance and reliability teams",
      description: "Maintenance managers, planners, supervisors, technicians and reliability engineers."
    },
    {
      title: "Frontline supervision",
      description: "Shift supervisors and team leads responsible for crew execution and safety."
    },
    {
      title: "Inventory and stores teams",
      description: "Personnel responsible for parts availability and materials handling."
    },
    {
      title: "IT, OT and cybersecurity teams",
      description: "Technical representatives responsible for infrastructure, integration and security."
    },
    {
      title: "Executive and organisational leadership",
      description: "Decision-makers evaluating operational transformation platforms."
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#EAEEF6]">
      <div className=" w-full mx-auto px-5 lg:px-8 flex flex-col">

        {/* Header */}
        <div className="flex flex-col mb-12 lg:mb-16">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Bring the right people to the conversation
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-extrabold text-[#0B1220] tracking-[-0.01em] mb-4 max-w-[862px]">
            Designed for operational, technical and organisational evaluation
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#5B6472] max-w-[862px]">
            The demonstration can include participants from different departments to ensure a complete evaluation. We recommend inviting:
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
          {participants.map((item, index) => (
            <div key={index} className="flex flex-col bg-white shadow-md p-5 rounded-xl">
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
