import Link from "next/link";
import { Check } from "lucide-react";

/* ─── Types & Data ─────────────────────────────────────────────── */
interface PlanGuideCard {
  title: string;
  bullets: string[];
}

const GUIDE_CARDS: PlanGuideCard[] = [
  {
    title: "Choose Starter if",
    bullets: [
      "You need to replace paper, spreadsheets or disconnected shift records.",
      "Your priority is daily operational visibility.",
      "You need structured production, downtime and handover information.",
      "You do not yet require integrated maintenance or reliability management.",
    ],
  },
  {
    title: "Choose Growth if",
    bullets: [
      "You need everything in Starter.",
      "You want operational events connected to maintenance execution.",
      "You need work orders and preventive-maintenance workflows.",
      "You need clearer maintenance assignment and completion records.",
    ],
  },
  {
    title: "Speak with enterprise sales if",
    bullets: [
      "You require a complete asset register.",
      "You need inventory and spare-parts visibility.",
      "You need reliability performance, analytics or FMEA.",
      "You manage multiple facilities or complex operations.",
    ],
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default function PlanGuidanceSection() {
  return (
    <section className="bg-[#EAEEF6] py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto">
          <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
            Not sure which plan fits?
          </p>
          <h2 className="mt-3 font-inter font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-[#0B1220]">
            Begin with the operational outcome you need
          </h2>
        </div>

        {/* Three Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {GUIDE_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[16px] bg-white border border-[#E2E6ED] shadow-sm p-6 lg:p-8"
            >
              <h3 className="text-[18px] font-bold text-[#0B1220] font-inter mb-6">
                {card.title}
              </h3>

              <ul className="flex flex-col gap-4 flex-1">
                {card.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#0F58F5]" />
                    <span className="text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] px-8 rounded-[8px] bg-[#0F58F5] text-[15px] font-[600] text-white transition-colors hover:bg-[#093593] shadow-sm"
          >
            Help me choose a plan
          </Link>
        </div>

      </div>
    </section>
  );
}