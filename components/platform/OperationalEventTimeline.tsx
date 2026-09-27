interface TimelineStep {
  num: string;
  title: string;
  desc: string;
}

const steps: TimelineStep[] = [
  { num: "1", title: "Production or operational event", desc: "A shift team records the operating condition, performance impact or equipment event." },
  { num: "2", title: "Failure detected", desc: "The event is formally marked as detected in the downtime log, establishing the detection point and supporting MTTD." },
  { num: "3", title: "Incident acknowledged", desc: "An authorised supervisor, planner or reliability representative acknowledges the incident, supporting MTTA." },
  { num: "4", title: "Maintenance response", desc: "The issue is routed into the appropriate P1, P2, P3 or P4 workflow with responsibilities, work information and required safety controls." },
  { num: "5", title: "Repair execution", desc: "Authorised personnel start and complete the repair. The recorded repair window supports MTTR." },
  { num: "6", title: "Root cause investigation", desc: "Where investigation is required, the event moves into FMEA Live. Confirming the root cause supports MTTI and preserves the approved finding." },
  { num: "7", title: "Reliability learning", desc: "Confirmed causes, recurring patterns and asset history contribute to reliability analysis and future preventive action." },
  { num: "8", title: "Reporting and improvement", desc: "Operational and leadership teams review the event, response, outcome and related improvement actions." },
];

export default function OperationalEventTimeline() {
  return (
    <section className="bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Sticky Header (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="lg:sticky lg:top-28">
              <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#0F58F5] uppercase">
                From event to organisational learning
              </span>
              <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4">
                Follow one operational event across the platform
              </h2>
              <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-4">
                A connected platform becomes most useful when information follows the work. The example shows how one equipment event progresses through AdunniTrak.
              </p>

              {/* Supporting Domains Callout */}
              <div className="mt-8 p-6 bg-[#EDEFF5]  rounded-[14px]">
                <h4 className="font-sans font-semibold text-[16px] leading-[24px] text-[#0F1424]">
                  Supporting domains
                </h4>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2">
                  Inventory information supports parts availability. Workforce records establish responsibilities and shift context. Adunni AI helps authorised users locate similar failures and prepare structured summaries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Timeline (Col 6-12) */}
          <div className="lg:col-span-7 lg:col-start-6 relative flex flex-col">
            {/* Vertical Line */}
            <div className="absolute left-[21px] lg:-left-[42px] top-4 bottom-4 w-[2px] bg-[#ECEDEE] z-0 hidden sm:block" />

            <div className="flex flex-col gap-8 md:gap-10 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col sm:flex-row lg:block gap-6 relative">
                  {/* Circle */}
                  <div className="w-11 h-11 shrink-0 bg-[#0F58F5] rounded-full flex items-center justify-center shadow-sm z-10 lg:absolute lg:-left-[64px] lg:top-[-4px]">
                    <span className="font-sans font-bold text-[16px] leading-[16px] text-white">
                      {step.num}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex flex-col pt-1 lg:pt-0">
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
