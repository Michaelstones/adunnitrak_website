import Link from "next/link";
import { ArrowRight, Gauge, PenTool, AreaChart, Boxes, Users, Settings2 } from "lucide-react";

interface DomainCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
  link: string;
}

const domains: DomainCard[] = [
  {
    title: "Operations",
    desc: "Daily operational activity, production, downtime, shift communication and field reporting.",
    icon: <Gauge className="w-6 h-6 text-[#0F58F5]" />,
    link: "operations",
  },
  {
    title: "Maintenance",
    desc: "Priority-based work, planned tasks, preventive maintenance, safety validation and execution history.",
    icon: <PenTool className="w-6 h-6 text-[#0F58F5]" />,
    link: "maintenance",
  },
  {
    title: "Reliability & Analytics",
    desc: "Performance metrics, failure analysis, asset reliability, FMEA investigation and organisational learning.",
    icon: <AreaChart className="w-6 h-6 text-[#0F58F5]" />,
    link: 'reliability'
  },
  {
    title: "Inventory & Resources",
    desc: "Parts, store locations, stock receipts, stock issues, availability and resource visibility.",
    icon: <Boxes className="w-6 h-6 text-[#0F58F5]" />,
    link: 'inventory'
  },
  {
    title: "Workforce & Administration",
    desc: "Employee structure, shift assignment, attendance, team coordination and authorised administration.",
    icon: <Users className="w-6 h-6 text-[#0F58F5]" />,
    link: 'workforce',
  },
  {
    title: "System & Support",
    desc: "Configuration, access control, system overview, support, settings and approved integration management.",
    icon: <Settings2 className="w-6 h-6 text-[#0F58F5]" />,
    link: 'system'
  },
];

export default function DomainCardsSection() {
  return (
    <section className="bg-[#EAEEF6] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 flex flex-col">
            <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#0F58F5] uppercase">
              One operational environment
            </span>
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4">
              Every operational domain contributes to a shared view
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-4 max-w-[862px]">
              AdunniTrak connects the activities and information required to understand what is happening, coordinate what needs to happen next and preserve what the organisation learns over time.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 bg-white border border-[#ECEDEE] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)] rounded-[14px] p-6 flex flex-col h-full min-h-[228px]"
            >

              <div className=" w-12 h-12 flex items-center justify-center shrink-0 rounded-lg">
                {domain.icon}
              </div>


              <h3 className="font-sans font-bold text-[20px] leading-[28px] text-[#0F1424]">
                {domain.title}
              </h3>
              <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] flex-grow">
                {domain.desc}
              </p>

              <p className="flex flex-row items-center gap-2">
                <Link href={`${domain.link}`} className="text-[#0F58F5]">
                  Explore {domain.link}
                </Link>
                <ArrowRight className="w-4 h-4 text-[#0F58F5]" />
              </p>

            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="flex justify-center text-center pt-8">
          <p className="font-sans font-normal text-[14px] leading-[20px] text-[#7C8798] max-w-[1302px]">
            The value of the platform comes from these domains working together. Information should not have to be recreated every time work moves between teams.
          </p>
        </div>
      </div>
    </section>
  );
}
