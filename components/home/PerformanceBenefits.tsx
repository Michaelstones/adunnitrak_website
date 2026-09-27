import Link from "next/link";

const benefits = [
  {
    title: "Reduce unplanned downtime",
    desc: "Faster detection, acknowledgement, investigation and repair with a complete incident record.",
  },
  {
    title: "Strengthen asset reliability",
    desc: "Connect downtime, maintenance history, FMEA findings and reliability metrics.",
  },
  {
    title: "Improve maintenance planning",
    desc: "Clear priorities, accountable ownership, PM schedules and accurate work history.",
  },
  {
    title: "Reinforce safe work execution",
    desc: "Embed LOTO, FLRA, validation procedures and supporting evidence.",
  },
  {
    title: "Create operational consistency",
    desc: "Standardise workflows while retaining approved terminology and requirements.",
  },
  {
    title: "Improve cross-functional coordination",
    desc: "Connect operations, maintenance, reliability, inventory, workforce and leadership.",
  },
  {
    title: "Retain organisational knowledge",
    desc: "Preserve equipment history, failure causes, repair experience and learning.",
  },
  {
    title: "Support faster decisions",
    desc: "Provide real-time visibility and AI-supported access to operational context.",
  },
];

export default function PerformanceBenefits() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-12">
        {/* Heading — spans ~8 cols */}
        <div className="w-full max-w-[862px]">
          <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0B1220] mb-4">
            Move from reactive activity to connected performance
          </h2>
          <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72]">
            AdunniTrak gives industrial organisations the structure and visibility required to respond faster, coordinate more effectively and convert daily operational activity into lasting improvement.
          </p>
        </div>

        {/* 4x2 benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 pt-8 border-t border-[#E3E6EF]">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              {/* Icon dot */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#EAEEF6]">
                <div className="w-3 h-3 rounded-full bg-[#1656e8]" />
              </div>
              <h4 className="font-sans font-semibold text-[16px] leading-[24px] text-[#0B1220]">
                {item.title}
              </h4>
              <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Centered button */}
        <div className="flex justify-center mt-4">
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center h-12 px-6 rounded-[8px] bg-[#0F58F5] font-sans font-semibold text-[14px] text-white transition-opacity hover:opacity-90"
          >
            Explore AdunniTrak Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
