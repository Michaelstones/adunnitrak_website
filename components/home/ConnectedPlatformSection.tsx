import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    overline: "01",
    title: "Operations",
    desc: "A downtime incident logged by an operator can directly initiate a maintenance work order with shared context.",
  },
  {
    overline: "02",
    title: "Maintenance",
    desc: "Work order completion data feeds directly into reliability dashboards and FMEA investigations.",
  },
  {
    overline: "03",
    title: "Reliability & Analytics",
    desc: "Confirmed root causes and repair outcomes are stored and made accessible through Adunni AI.",
  },
  {
    overline: "04",
    title: "Inventory & Resources",
    desc: "Maintenance teams see inventory levels for the parts required to complete scheduled and reactive work.",
  },
  {
    overline: "05",
    title: "Workforce & Admin",
    desc: "Attendance, roles, approvals and shift assignments are connected to the operational records that require them.",
  },
];

const flowTags = [
  "Downtime incident",
  "Maintenance action",
  "Reliability investigation",
  "Confirmed knowledge",
  "Inventory check",
  "Accountable action",
];

export default function ConnectedPlatformSection() {
  return (
    <section className="bg-[#031231] py-16 md:py-24">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8">

        {/* Header grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 flex flex-col justify-start">
            <p className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase text-[#3FC3EE]">
              One connected operational ecosystem
            </p>
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-white pt-4">
              No module operates in isolation
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#D4D4D4] pt-4 max-w-[862px]">
              Operations, maintenance, reliability, inventory and workforce administration are interconnected within AdunniTrak. A downtime incident can initiate maintenance action. Maintenance execution can support a reliability investigation. A confirmed failure can become reusable knowledge. The result is one continuous operational record rather than separate modules containing disconnected information.
            </p>
          </div>
        </div>

        {/* Cards bento */}
        <div className="pt-12">
          {/* Top row: 3 cards */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4 mb-4">
            {cards.slice(0, 3).map((card, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[280px] lg:max-w-[423px] min-h-[148px] bg-[#192F5D] border border-[rgba(236,237,238,0.15)] rounded-[14px] p-6 flex flex-col"
              >
                <p className="font-sans font-semibold text-[11px] leading-[16px] tracking-[0.02em] text-[#3FC3EE] uppercase">
                  {card.overline}
                </p>
                <p className="font-sans font-semibold text-[14px] leading-[20px] text-white pt-2">
                  {card.title}
                </p>
                <p className="font-sans font-normal text-[13px] leading-[20px] text-[#8890A3] pt-2">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row: 2 cards */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            {cards.slice(3).map((card, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[280px] lg:max-w-[643px] min-h-[128px] bg-[#192F5D] border border-[rgba(236,237,238,0.15)] rounded-[14px] p-6 flex flex-col"
              >
                <p className="font-sans font-semibold text-[11px] leading-[16px] tracking-[0.02em] text-[#3FC3EE] uppercase">
                  {card.overline}
                </p>
                <p className="font-sans font-semibold text-[14px] leading-[20px] text-white pt-2">
                  {card.title}
                </p>
                <p className="font-sans font-normal text-[13px] leading-[20px] text-[#8890A3] pt-2">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Link card */}
        <div className="pt-4">
          <div className="bg-[#192F5D] border border-[#ECEDEE] rounded-[14px] p-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3FC3EE" strokeWidth="1.5" className="shrink-0 mt-1 md:mt-0">
              <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="m2 15 2-2v4l-2-2z" /><path d="M8 15h.01M12 15h.01M16 15h.01" />
            </svg>
            <div className="flex-1">
              <p className="font-sans font-semibold text-[14px] leading-[20px] text-white">
                Adunni AI works across all modules
              </p>
              <p className="font-sans font-normal text-[13px] leading-[20px] text-[#8890A3]">
                Because all modules share one operational record, Adunni AI can retrieve, connect and summarise information across operations, maintenance, reliability, inventory and workforce data.
              </p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8890A3" strokeWidth="2" className="shrink-0 hidden md:block">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Flow tags row */}
        <div className="flex flex-wrap items-center pt-8 gap-3">
          {flowTags.map((tag, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="bg-[#192F5D] border border-[#ECEDEE] rounded-full py-2 px-4 font-sans font-semibold text-[13px] md:text-[14px] leading-[20px] text-white whitespace-nowrap">
                {tag}
              </div>
              {idx < flowTags.length - 1 && (
                <ArrowRight size={16} color="#8890A3" className="shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
