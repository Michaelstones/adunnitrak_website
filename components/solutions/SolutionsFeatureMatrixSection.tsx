import Image from "next/image";

export const SolutionsFeatureMatrixSection = () => {
  const features = [
    {
      title: "Production visibility and coordination",
      challenge: "Production information is delayed, fragmented or disconnected across teams and shifts.",
      response: "AdunniTrak structures production plans, shift activity and output targets in one place.",
      modules: "Operations Command Centre · Daily Shift Details · Production Targets",
      outcome: "Helps supervisors and operational teams understand current status instantly.",
      image: "/images/solutioncard.svg",
    },
    {
      title: "Downtime response and incident control",
      challenge: "Teams may know that equipment has stopped but lack clear visibility into root causes and response times.",
      response: "AdunniTrak records the incident timeline, operational impact and root cause.",
      modules: "Downtime Log · Incident Response Timeline · Maintenance Alerts",
      outcome: "Supports faster coordination, clearer response-time metrics and traceable root causes.",
      image: "/images/solutioncard.svg",
    },
    {
      title: "Maintenance planning and execution",
      challenge: "Maintenance activity can become reactive, inconsistent or difficult to trace back to specific assets.",
      response: "AdunniTrak routes work by priority, supports work instructions and tracks completion.",
      modules: "Emergency P1 · Urgent P2 · Deferred P3/P4 · Work Orders",
      outcome: "Strengthens maintenance ownership, execution visibility and compliance.",
      image: "/images/solutioncard.svg",
    },
    {
      title: "Reliability improvement and failure prevention",
      challenge: "Recurring failures may be repaired repeatedly without addressing the underlying reliability issues.",
      response: "AdunniTrak connects downtime incidents with reliability analysis and action plans.",
      modules: "Reliability Performance · Asset Reliability Analytics · FMEA",
      outcome: "Helps teams move from repeated reaction toward evidence-based prevention.",
      image: "/images/solutioncard.svg",
    },
    {
      title: "Shift continuity and workforce accountability",
      challenge: "Unresolved issues, instructions and operational knowledge often slip through the cracks during shift changes.",
      response: "AdunniTrak structures shift logs, handover records and team communications.",
      modules: "Daily Shift Details · Shift Handover Log · Team Messages",
      outcome: "Improves continuity, visibility and accountability across different operating teams.",
      image: "/images/solutioncard.svg",
    },
    {
      title: "Inventory and maintenance material coordination",
      challenge: "Parts availability may be difficult to confirm, leading to extended downtime or excess stock.",
      response: "AdunniTrak provides structured item, location, and utilization records.",
      modules: "Inventory Database · Store Location · Stock Ledger",
      outcome: "Supports clearer parts visibility, traceability and maintenance readiness.",
      image: "/images/solutioncard.svg",
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative">
      <div className="container-custom">
        <div className="flex flex-col mb-20 max-w-3xl">
          <span className="t-overline text-action-primary mb-4 block">Solutions built around operational challenges</span>
          <h2 className="t-h2 text-text-main mb-6">Connected workflows for the work your teams perform</h2>
          <p className="t-body-lg text-text-muted">
            Each solution brings together the relevant modules to solve specific industrial pain points.
          </p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {features.map((feature, index) => {
            const isImageLeft = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isImageLeft ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Text Content */}
                <div className="flex-1 flex flex-col w-full">
                  <h3 className="t-h3 text-text-main mb-8">{feature.title}</h3>

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                      <span className="t-label text-action-primary mb-2">Operational challenge</span>
                      <p className="t-body text-text-muted">{feature.challenge}</p>
                    </div>

                    <div className="flex flex-col">
                      <span className="t-label text-action-primary mb-2">Connected response</span>
                      <p className="t-body text-text-muted">{feature.response}</p>
                    </div>



                    <div className="bg-canvas-50 p-4 rounded-2xl border border-gray-200">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="t-label text-text-main">Relevant modules</span>
                        </div>
                        <p className="t-body-sm text-text-muted">{feature.modules}</p>
                      </div>

                      <div className="flex flex-col">
                        <span className="t-label text-text-main mb-2">Expected outcome</span>
                        <p className="t-body-sm text-text-muted">{feature.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Asset */}
                <div className="flex-1 w-full">
                  <div className="w-full aspect-[3/2]   flex items-center justify-center relative overflow-hidden group">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain hover:scale-110 transform transition-transform duration-500 ease-in-out "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
