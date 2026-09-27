interface ImplStep {
  num: string;
  title: string;
  desc: string;
}

const implSteps: ImplStep[] = [
  { num: "1", title: "Understand the operation", desc: "Review facility type, operational areas, priorities, challenges and intended outcomes." },
  { num: "2", title: "Map the facility and equipment", desc: "Capture the agreed plant structure, departments, lines, equipment hierarchy and local names." },
  { num: "3", title: "Confirm workflows and responsibilities", desc: "Document how information, incidents, work, approvals and handovers move between roles." },
  { num: "4", title: "Configure modules and terminology", desc: "Align the relevant AdunniTrak domains with processes, priorities and nomenclature." },
  { num: "5", title: "Review security and integration", desc: "Engage operational, IT, OT and cybersecurity representatives to confirm requirements." },
  { num: "6", title: "Validate with client teams", desc: "Review the configured environment with users and stakeholders before deployment." },
  { num: "7", title: "Deploy, support and improve", desc: "Introduce the agreed scope, support users, monitor adoption and refine configuration." },
];

export default function ImplementationApproachTimeline() {
  return (
    <section className="bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Sticky Header (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="lg:sticky lg:top-28">
              <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#0F58F5] uppercase">
                From requirements to operational use
              </span>
              <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4">
                A structured implementation approach
              </h2>
              <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-6">
                Implementation scope, sequence and technical requirements depend on the selected modules, facility complexity, existing information and agreed deployment approach.
              </p>
            </div>
          </div>

          {/* Right Timeline (Col 6-12) */}
          <div className="lg:col-span-7 lg:col-start-6 relative flex flex-col">
            {/* Vertical Line */}
            <div className="absolute left-[21px] top-4 bottom-4 w-[2px] bg-[#ECEDEE] z-0 hidden sm:block" />

            <div className="flex flex-col gap-8 md:gap-10 relative z-10">
              {implSteps.map((step) => (
                <div key={step.num} className="flex flex-col sm:flex-row gap-6 relative">
                  {/* Circle */}
                  <div className="w-11 h-11 shrink-0 bg-[#0F58F5] rounded-full flex items-center justify-center shadow-sm z-10">
                    <span className="font-sans font-bold text-[16px] leading-[16px] text-white">
                      {step.num}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex flex-col pt-1">
                    <h3 className="font-sans font-semibold text-[18px] leading-[26px] text-[#0F1424]">
                      {step.title}
                    </h3>
                    <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2 max-w-[640px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
