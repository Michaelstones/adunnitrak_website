import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const nextSteps = [
  {
    num: "1",
    title: "Editorial check",
    desc: "We review fit, accuracy and clarity.",
  },
  {
    num: "2",
    title: "Feedback",
    desc: "We may suggest edits before approval.",
  },
  {
    num: "3",
    title: "Publication",
    desc: "Your insight goes live with full credit.",
  },
];

export default function ContributeSidebar() {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-6">
      <FadeIn delay={0.2}>


        <div className="bg-white border border-[#E2E6ED] rounded-[12px] p-6 shadow-sm">
          <h3 className="font-inter font-bold text-[15px] text-[#0B1220] mb-5">
            What happens next
          </h3>
          <div className="flex flex-col gap-5">
            {nextSteps.map((step) => (
              <div key={step.num} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0F58F5] text-white font-bold text-[12px] flex items-center justify-center shrink-0 mt-0.5">
                  {step.num}
                </div>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-[14px] text-[#0B1220] mb-0.5">
                    {step.title}
                  </span>
                  <span className="font-inter text-[13px] text-[#5B6472] leading-[20px]">
                    {step.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E2E6ED] rounded-[12px] p-6 shadow-sm mt-6">
          <h3 className="font-inter font-bold text-[15px] text-[#0B1220] mb-4">
            What makes a strong insight
          </h3>
          <ul className="flex flex-col gap-4">
            {[
              "Grounded in real operational experience.",
              "Explains a problem and a practical response.",
              "Uses your plant's language without naming clients.",
              "Clear headings and short paragraphs.",
              'Avoids sales language and product claims.'
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-[6px] h-[6px] rounded-full bg-[#0F58F5] mt-2 shrink-0" />
                <span className="text-[#5B6472] font-inter text-[14px] leading-[22px]">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#031231] rounded-[12px] p-6 mt-6">
          <h3 className="font-inter font-bold text-[15px] text-white mb-2">
            Confidentiality
          </h3>
          <p className="text-[#A0ABBA] font-inter text-[13px] leading-[20px] mb-4">
            Do not include drawings, credentials, proprietary data or identifiable client information unless you hold written permission.
          </p>

        </div>
      </FadeIn>
    </aside>
  );
};