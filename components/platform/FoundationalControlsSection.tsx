interface FoundationCard {
  title: string;
  desc: string;
}

const foundations: FoundationCard[] = [
  { title: "Standardised equipment structure", desc: "A common asset hierarchy that connects operations, maintenance and reliability information." },
  { title: "Consistent operational history", desc: "A reliable record of production, downtime, maintenance and facility activity." },
  { title: "Defensible safety records", desc: "Validated procedures, hazard controls, LOTO execution and safety evidence." },
  { title: "Accountable work routing", desc: "Clear responsibilities for incident acknowledgement, approval and execution." },
  { title: "Traceable system access", desc: "Authorised roles, controlled permissions and recorded system actions." },
  { title: "Configurable reporting", desc: "Shift handovers, downtime summaries, maintenance backlogs and KPI dashboards." },
  { title: "Preserved organisational learning", desc: "Confirmed failure causes, repair procedures and historical performance data." },
  { title: "Authorised AI intelligence", desc: "Adunni AI provides insights based on the operation's specific structured data." },
];

export default function FoundationalControlsSection() {
  return (
    <section className="bg-[#EAEEF6] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 flex flex-col">
            <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#0F58F5] uppercase">
              Structured operational control and intelligence
            </span>
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4">
              Foundations that support connected industrial work
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {foundations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ECEDEE] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)] rounded-[14px] p-4 flex flex-col min-h-[106px]"
            >
              <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#0F1424]">
                {item.title}
              </h3>
              <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
