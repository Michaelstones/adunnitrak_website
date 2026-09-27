import Image from "next/image";

interface RoleCard {
  title: string;
  desc: string;
  image: string; // Placeholder string path for image mapping
}

const roles: RoleCard[] = [
  {
    title: "Frontline Operators",
    desc: "Record activity, report events, provide evidence and support shift continuity.",
    image: "/images/roles/role-operators.png",
  },
  {
    title: "Shift Supervisors",
    desc: "Review production, downtime, workforce activity, open issues and handover.",
    image: "/images/roles/role-supervisors.png",
  },
  {
    title: "Maintenance Teams",
    desc: "Receive work, validate safety requirements, execute repairs and record completion.",
    image: "/images/roles/role-maintenance.png",
  },
  {
    title: "Reliability Engineers",
    desc: "Review performance, investigate failures, confirm causes and preserve learning.",
    image: "/images/roles/role-reliability.png",
  },
  {
    title: "Inventory & Stores Managers",
    desc: "Manage item information, locations, receipts, issues and stock availability.",
    image: "/images/roles/role-inventory.png",
  },
  {
    title: "Plant Managers",
    desc: "Monitor plant status, performance, open risks, maintenance and priorities.",
    image: "/images/roles/role-plant-managers.png",
  },
  {
    title: "Executive Leadership",
    desc: "Review approved summaries, trends, organisational performance and priority risks.",
    image: "/images/roles/role-execs.png",
  },
  {
    title: "IT & System Administrators",
    desc: "Manage authorised access, configuration, system support and technical requirements.",
    image: "/images/roles/role-it.png",
  },
];

export default function RoleBasedAccessSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 flex flex-col">
            <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#0F58F5] uppercase">
              The right information for the right responsibility
            </span>
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4">
              A shared operational view with role-based access
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-4 max-w-[862px]">
              The Command Centre brings relevant operational information together while role-based access helps ensure users see and perform the activities authorised for their responsibilities.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ECEDEE] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)] rounded-[14px] flex flex-col p-4"
            >
              {/* Image Header */}
              <div className="w-full h-[181px] relative bg-[#EDEFF5] rounded-[8px] overflow-hidden shrink-0 mb-4">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#0F1424]">
                  {role.title}
                </h3>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2 mt-auto">
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
