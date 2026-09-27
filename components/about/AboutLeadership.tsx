import Image from "next/image";
import { StaggerContainer } from "../animations/StaggerContainer";
import { StaggerItem } from "../animations/StaggerItem";

interface LeaderCard {
  id: string;
  name: string;
  title: string;
  imageSrc: string;
  responsibility: string;
  bio: string;
}

const LEADERS: LeaderCard[] = [
  {
    id: "leader-1",
    name: "Agboola Adio Shonekan, C.Tech.",
    title: "Founder & Chief Executive Officer",
    imageSrc: "/images/leader1.png",
    responsibility: "Company vision, product strategy, client engagement and industrial digital transformation.",
    bio: "Agboola founded AdunniTrak after observing how disconnected records, operational workflows and knowledge dependency affected information continuity within plant operations. His background in civil engineering, industrial operations and project leadership informs the platform's practical direction."
  },
  {
    id: "leader-2",
    name: "Eyitayo Fajinmi",
    title: "Director of Industry Strategy",
    imageSrc: "/images/leader2.png",
    responsibility: "Industrial workflows, reliability strategy and operational implementation.",
    bio: "Eyitayo brings more than 18 years of experience across production, commissioning, maintenance, reliability, asset integrity and operational excellence. He guides AdunniTrak's industrial strategy and helps translate plant requirements into practical workflows."
  },
  {
    id: "leader-3",
    name: "Isaac Adejuwon",
    title: "Chief Technology Officer",
    imageSrc: "/images/leader3.png",
    responsibility: "Technology strategy, cybersecurity, cloud infrastructure and enterprise architecture.",
    bio: "Isaac leads the technology and security direction required to support reliable industrial deployment, including platform architecture, information security, cloud infrastructure and Operational Technology considerations."
  },
  {
    id: "leader-4",
    name: "Michael Oluwasegun Agbaje",
    title: "Lead Software Engineer",
    imageSrc: "/images/leader4.png",
    responsibility: "Software architecture, application development, database design and systems integration.",
    bio: "Michael leads the technical development of the AdunniTrak application and translates operational requirements into structured digital workflows that support frontline teams, technical personnel and organisational leadership."
  },
];

export default function AboutLeadership() {
  return (
    <section className="bg-[#ECEDEE] py-16 lg:py-24">
      <StaggerContainer className="max-w-[1280px] w-full mx-auto px-5 md:px-8">

        {/* Intro Section */}
        <div className="flex flex-col gap-4 max-w-[760px]">
          <StaggerItem>
            <span className="text-[#0F58F5] font-inter text-[12px] font-bold leading-[16px] tracking-[0.06em] uppercase">
              Leadership team
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-[#0F1424] font-inter text-[30px] md:text-[36px] font-extrabold leading-[38px] md:leading-[44px] tracking-[-0.01em]">
              The people building AdunniTrak
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[#525A72] font-inter text-[16px] md:text-[18px] font-normal leading-[26px] md:leading-[28px]">
              AdunniTrak is being developed by a multidisciplinary leadership team responsible for product direction, industrial strategy, technology, security and software delivery.
            </p>
          </StaggerItem>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-10">
          {LEADERS.map((leader) => (
            <StaggerItem key={leader.id} className="h-full">
              <article
                className="flex flex-col h-full rounded-[14px] bg-white border border-[#E2E6ED] shadow-sm transition-shadow hover:shadow-md p-6 lg:p-8"
              >

                {/* FIXED: 250x200 left-aligned image box */}
              <div className="relative w-[250px] h-[200px] rounded-[10px] overflow-hidden mb-4 bg-[#EAEEF6] shrink-0">
                <Image
                  src={leader.imageSrc}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                  sizes="250px"
                />
              </div>

              {/* Name & Title */}
              <div className="flex flex-col mb-6">
                <h3 className="text-[#0F1424] font-inter text-[18px] font-semibold leading-[26px]">
                  {leader.name}
                </h3>
                <p className="text-[#0F58F5] font-inter text-[14px] font-semibold leading-[20px]">
                  {leader.title}
                </p>
              </div>

              {/* Responsibility & Bio (flex-grow keeps bottom aligned) */}
              <div className="flex flex-col flex-grow">
                <p className="mb-2 text-[#7C8798] font-inter text-[12px] font-semibold leading-[16px] tracking-[0.02em] uppercase">
                  Primary responsibility
                </p>
                <p className="mb-4 text-[#0F1424] font-inter text-[14px] font-normal leading-[20px]">
                  {leader.responsibility}
                </p>
                <p className="text-[#525A72] font-inter text-[14px] font-normal leading-[20px]">
                  {leader.bio}
                </p>
              </div>

              </article>
            </StaggerItem>
          ))}
        </div>

      </StaggerContainer>
    </section>
  );
}