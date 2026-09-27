import Image from "next/image";

const leaders = [
  {
    name: "Agboola Adio Shonekan, C.Tech.",
    role: "Founder & Chief Executive Officer",
    bio: "Leads vision, product strategy and digital transformation, combining engineering, industrial operations and project management expertise.",
    image: "/images/leader1.png",
  },
  {
    name: "Eyitayo Fajinmi",
    role: "Director of Industry Strategy",
    bio: "Oversees system architecture, security and technical operations, ensuring enterprise reliability and scalability.",
    image: "/images/leader2.png",
  },
  {
    name: "Isaac Adejuwo",
    role: "Chief Technology Officer",
    bio: "Drives the development of Adunni AI, focusing on practical industrial intelligence and operational insights.",
    image: "/images/leader3.png",
  },
  {
    name: "Michael Oluwasegun Agbaje",
    role: "Lead Software Architect",
    bio: "Connects platform capabilities with client operational needs, drawing on decades of facility management experience.",
    image: "/images/leader4.png",
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1366px] mx-auto">
        
        {/* Header grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8 md:mb-12">
          <div className="md:col-span-8 flex flex-col">
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424]">
              Industrial experience meets technical excellence
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-4 max-w-[862px]">
              Our leadership team brings together industrial operations, reliability engineering, cybersecurity, cloud infrastructure, software development and digital transformation expertise.
            </p>
          </div>
        </div>

        {/* 4 Cards Row */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 items-stretch">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[250px] flex flex-col p-6 bg-white border border-[#ECEDEE] rounded-[14px] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)]"
            >
              {/* 80x80 Image */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden shrink-0 bg-gradient-to-br from-[#0F2E56] to-[#1656E8]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <div className="pt-4">
                <p className="font-sans font-bold text-[18px] leading-[26px] text-[#0F1424]">
                  {leader.name}
                </p>
              </div>

              {/* Role */}
              <div className="pt-1">
                <p className="font-sans font-semibold text-[14px] leading-[20px] text-[#0F58F5]">
                  {leader.role}
                </p>
              </div>

              {/* Bio */}
              <div className="pt-3">
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72]">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center pt-12">
          <button className="bg-[#E3E6EF] border-[1.5px] border-[#ECEDEE] rounded-lg py-4 px-6 font-sans font-bold text-[16px] text-[#525A72] cursor-pointer hover:opacity-90 transition-opacity">
            Meet Our Leadership Team
          </button>
        </div>
      </div>
    </section>
  );
}
