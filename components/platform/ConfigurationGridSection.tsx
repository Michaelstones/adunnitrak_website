interface ConfigStep {
  num: string;
  title: string;
  desc: string;
}

const configSteps: ConfigStep[] = [
  { num: "01", title: "Facility structure", desc: "Sites, plants, departments, areas, lines and teams." },
  { num: "02", title: "Equipment hierarchy", desc: "Equipment, sub-equipment and approved asset relationships." },
  { num: "03", title: "Terminology", desc: "Names, classifications, priorities and expressions." },
  { num: "04", title: "Roles", desc: "Access, responsibilities, escalation and approvals." },
  { num: "05", title: "Workflows", desc: "Operational steps, validations, priorities and controls." },
  { num: "06", title: "Reporting", desc: "Operational, technical, supervisory and leadership views." },
  { num: "07", title: "Integration", desc: "Approved connections based on need and available interfaces." },
];

export default function ConfigurationGridSection() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 flex flex-col">
            <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#0F58F5] uppercase">
              Not a generic installation
            </span>
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4">
              Configured around the way your plant works
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-4 max-w-[862px]">
              Industrial facilities differ in structure, equipment, responsibilities, terminology and operating priorities. A steel plant does not operate like a quarry, a power facility or a processing plant. AdunniTrak provides a common platform structure that can be configured to reflect those operational differences.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="pt-12">
          {/* Top Row: 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {configSteps.slice(0, 4).map((step) => (
              <div
                key={step.num}
                className="bg-white border border-[#DDDEE1] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)] rounded-[14px] p-4 flex flex-col h-[130px]"
              >
                <span className="font-sans font-semibold text-[12px] leading-[16px] tracking-[0.02em] text-[#0C46C4]">
                  {step.num}
                </span>
                <p className="font-sans font-semibold text-[16px] leading-[24px] text-[#0F1424] pt-2">
                  {step.title}
                </p>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2 mt-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Items (Wider) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {configSteps.slice(4).map((step) => (
              <div
                key={step.num}
                className="bg-white border border-[#DDDEE1] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)] rounded-[14px] p-4 flex flex-col h-[130px]"
              >
                <span className="font-sans font-semibold text-[12px] leading-[16px] tracking-[0.02em] text-[#0C46C4]">
                  {step.num}
                </span>
                <p className="font-sans font-semibold text-[16px] leading-[24px] text-[#0F1424] pt-2">
                  {step.title}
                </p>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2 mt-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="pt-8 flex justify-center text-center">
          <p className="font-sans font-normal text-[14px] leading-[20px] text-[#8890A3] max-w-[1302px]">
            Not generic. Not completely bespoke. A structured platform configured around the organisation.
          </p>
        </div>
      </div>
    </section>
  );
}
