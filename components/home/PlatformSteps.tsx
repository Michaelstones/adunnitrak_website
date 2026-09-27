import Link from "next/link";

const steps = [
  {
    num: "1",
    title: "Understand",
    desc: "Assess the operating environment, processes, objectives, challenges and information gaps.",
  },
  {
    num: "2",
    title: "Map",
    desc: "Map facilities, departments, equipment, sub-equipment, roles, approvals and information flow.",
  },
  {
    num: "3",
    title: "Configure",
    desc: "Configure workflows, terminology, access levels, dashboards, notifications and reports.",
  },
  {
    num: "4",
    title: "Implement and improve",
    desc: "Validate with teams, onboard users and continuously improve as operational needs evolve.",
  },
];

export default function PlatformSteps() {
  return (
    <section className="bg-[#E3E6EF] py-16 md:py-24">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — col 1 to 5 */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <span className="font-sans font-bold text-[12px] leading-[16px] uppercase tracking-[0.0625em] text-[#0F58F5]">
              Not a one-size-fits-all platform
            </span>
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0B1220]">
              Your operation. Your workflows. Your nomenclature.
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72]">
              No two industrial facilities operate in exactly the same way. Each organisation has its own plant structure, equipment hierarchy, operating procedures, maintenance responsibilities, approval processes, reporting requirements and local terminology. AdunniTrak begins by understanding these differences before the platform is configured.
            </p>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72]">
              This means your teams work with familiar equipment names, departments, priorities and processes while gaining the structure, visibility and intelligence of one connected system.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-fit h-12 px-6 rounded-[8px] bg-[#093593] font-sans font-semibold text-[14px] text-white transition-opacity hover:opacity-90"
            >
              Discuss Your Requirements
            </Link>
          </div>

          {/* Right Column — col 7 to 12 */}
          <div className="lg:col-span-6 lg:col-start-7 relative">
            {/* Vertical connector line */}
            <div className="absolute left-[21px] top-4 bottom-4 w-[2px] hidden sm:block bg-[#C5CCD8] z-0" />
            
            <div className="flex flex-col gap-12 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-row gap-6">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[16px] shrink-0 border-[2px] border-white bg-[#1656e8] text-white z-10">
                    {step.num}
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <h4 className="font-sans font-semibold text-[18px] leading-[26px] text-[#0B1220]">
                      {step.title}
                    </h4>
                    <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72]">
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
