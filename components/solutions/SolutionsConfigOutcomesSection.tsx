import React from "react";
import { Settings, BarChart3 } from "lucide-react";

export const SolutionsConfigOutcomesSection = () => {
  const configurations = [
    "Facility, department and production-area structure",
    "Equipment and sub-equipment hierarchy",
    "Plant terminology, nomenclature and classification",
    "Roles, responsibilities, permissions and approvals",
    "Downtime, maintenance and reliability workflows",
    "Reporting requirements and operational procedures",
    "Approved integrations and implementation scope"
  ];

  const outcomes = [
    "Stronger plant-wide operational visibility",
    "Faster and more coordinated incident response",
    "Clearer maintenance ownership and execution history",
    "Improved reliability learning and failure prevention",
    "Better continuity between shifts and teams",
    "Improved operational knowledge retention",
    "More informed operational and leadership decisions"
  ];

  return (
    <section className="w-full py-24 bg-white relative">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left: Configuration */}
        <div className="flex flex-col">
          <span className="t-overline text-action-primary mb-4 block">Configured around your operation</span>
          <h2 className="t-h2 text-text-main mb-6">
            Your plant structure, workflows and terminology
          </h2>
          <p className="t-body-lg text-text-muted mb-10">
            AdunniTrak provides a connected core platform and adapts to match the reality of how your teams already work.
          </p>

          <ul className="flex flex-col gap-4">
            {configurations.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="t-body text-text-main">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Outcomes */}
        <div className="flex flex-col  p-2 md:p-1 ">
          <span className="t-overline text-action-primary mb-4 block">Expected operational outcomes</span>
          <h2 className="t-h2 text-text-main mb-6">
            Stronger visibility, coordination and operational control
          </h2>
          <p className="t-body-lg text-text-gray-700 mb-10">
            By connecting operational activity and making responsibilities clear, plants achieve measurable improvements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            {outcomes.map((item, i) => (
              <div key={i} className="flex flex-col gap-2 bg-white border border-line-200 p-2 rounded-md">
                <span className="t-body text-text-main font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
