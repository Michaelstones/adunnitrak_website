interface FoundationCard {
  title: string;
  desc: string;
}

const foundations: FoundationCard[] = [
  {
    title: "Connected operational records",
    desc: "Link related production, downtime, maintenance, reliability, inventory and workforce information into a traceable history.",
  },
  {
    title: "Shift-to-shift continuity",
    desc: "Carry unresolved issues, updates and responsibilities forward so context is not lost between teams.",
  },
  {
    title: "Mobile and desktop access",
    desc: "Support approved operational activity and visibility from suitable desktop and mobile interfaces.",
  },
  {
    title: "Picture and evidence reporting",
    desc: "Capture approved field photographs and supporting evidence directly within relevant workflows.",
  },
  {
    title: "Role-based access",
    desc: "Provide information and actions according to authorized responsibilities.",
  },
  {
    title: "Workflow and approval controls",
    desc: "Use defined steps, required validations and approval points to support accountable execution.",
  },
  {
    title: "Notifications and escalation",
    desc: "Inform the appropriate users when attention, acknowledgement, action or review is required.",
  },
  {
    title: "Operational audit history",
    desc: "Preserve timestamps, actions, updates, approvals and workflow history for traceability.",
  },
  {
    title: "Structured reporting",
    desc: "Turn connected records into clear shift, maintenance, reliability and leadership information.",
  },
  {
    title: "Multi-site configuration",
    desc: "Support organisations that require separate site structures with appropriate consolidated oversight.",
  },
  {
    title: "Integration-ready architecture",
    desc: "Support approved connections with existing business, operational or monitoring systems.",
  },
  {
    title: "Organisational knowledge retention",
    desc: "Preserve confirmed operational experience and learning so it remains accessible to authorised teams.",
  },
];

export default function FoundationalControlsSection() {
  return (
    <section className="bg-[#EEF1F6] py-16 lg:py-24 px-6 lg:px-[24px]">
      <div className="max-w-[1302px] mx-auto flex flex-col">
        
        {/* Header */}
        <div className="max-w-[800px]">
          <span className="font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#0F58F5] uppercase block mb-3">
            Structured operational control and intelligence
          </span>
          <h2 className="font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] text-[#0B1220]">
            Foundations that support connected industrial work
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E6ED] shadow-sm rounded-[16px] p-6 flex flex-col justify-between hover:border-[#0F58F5]/30 transition-all"
            >
              <h3 className="font-inter font-bold text-[18px] leading-[26px] text-[#0B1220] mb-3">
                {item.title}
              </h3>
              <p className="font-inter font-normal text-[14px] leading-[22px] text-[#5B6472]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}