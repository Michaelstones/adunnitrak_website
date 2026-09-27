import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export const SolutionsWorkflowSection = () => {
  const steps = [
    "Detect", "Record", "Acknowledge", "Assign",
    "Execute", "Investigate", "Learn", "Prevent"
  ];

  return (
    <section className="w-full py-24 bg-[#031231] relative ">
      <div className="container-custom flex flex-col items-left">

        <div className="max-w-3xl mb-16">
          <span className="t-overline text-action-primary mb-4 block">One connected response</span>
          <h2 className="t-h2 text-white mb-6">
            From operational event to organisational learning
          </h2>
          <p className="t-body-lg text-white/70">
            Each module has a defined responsibility, while sharing the same underlying data record.
          </p>
        </div>

        {/* Workflow Steps Horizontal Flow */}
        <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-2 w-full max-w-5xl">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div className="bg-[#192F5D] flex items-center justify-center px-4 py-3  shadow-elev-1 rounded-lg">
                <span className="t-label text-white/80">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-line-300" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
