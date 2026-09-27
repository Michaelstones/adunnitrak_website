import { StaggerContainer } from "../animations/StaggerContainer";
import { StaggerItem } from "../animations/StaggerItem";

interface PrincipleCard {
  id: string;
  title: string;
  body: string;
}

const PRINCIPLE_CARDS: PrincipleCard[] = [
  {
    id: "p-1",
    title: "Practical industrial understanding",
    body: "We begin with the realities of the operating environment. Technology must reflect how equipment, people, responsibilities and workflows function in practice.",
  },
  {
    id: "p-2",
    title: "Responsible innovation",
    body: "We use technology and AI to support visibility, investigation, learning, reporting and decision-making while respecting professional judgement, safety requirements and authorised approval controls.",
  },
  {
    id: "p-3",
    title: "Partnership and continuous improvement",
    body: "We work with clients and industrial teams to understand their requirements, validate the platform within their environment and improve it as operational needs evolve.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8">

        {/* Top Section: Mission & Vision Cards (Balanced 50/50 split) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* Left: Mission Card (Navy) */}
          <StaggerItem className="h-full">
            <div className="flex flex-col justify-center bg-[#031231] p-8 lg:p-10 rounded-[14px] h-full shadow-sm">
              <h2 className="font-inter font-extrabold text-[20px] md:text-[24px] leading-[32px] tracking-[-0.01em] text-[#3FC3EE]">
                Our mission
              </h2>
              <p className="mt-4 text-[14px] md:text-[16px] leading-[26px] font-normal text-[#EDEFF5] font-inter">
                To help industrial organisations connect operational activity, coordinate accountable work, strengthen reliability and preserve organisational knowledge through configurable operational intelligence.
              </p>
            </div>
          </StaggerItem>

          {/* Right: Vision Card (Blue) */}
          <StaggerItem className="h-full">
            <div className="flex flex-col justify-center bg-[#0F58F5] p-8 lg:p-10 rounded-[14px] h-full shadow-sm">
              <h2 className="font-inter font-extrabold text-[20px] md:text-[24px] leading-[32px] tracking-[-0.01em] text-white">
                Our vision
              </h2>
              <p className="mt-4 text-[14px] md:text-[16px] leading-[26px] font-normal text-white font-inter">
                To become a trusted industrial operational intelligence platform that helps organisations transform daily activity into connected insight, lasting knowledge and continuous operational improvement.
              </p>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* Bottom Section: Heading 3 + 3-col Principle Cards Grid */}
        <StaggerContainer className="mt-16 lg:mt-24">
          <StaggerItem>
            <h3 className="font-inter font-bold text-[24px] md:text-[28px] leading-[32px] tracking-[-0.01em] text-[#0B1220]">
              Our operating principles
            </h3>
          </StaggerItem>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLE_CARDS.map((card) => (
              <StaggerItem key={card.id} className="h-full">
                <article
                  id={card.id}
                  className="flex flex-col gap-3 rounded-[14px] border border-[#E2E6ED] bg-white p-6 lg:p-8 shadow-sm transition-shadow hover:shadow-md h-full"
                >

                  <h4 className="text-[16px] leading-[24px] font-bold text-[#0B1220] font-inter">
                    {card.title}
                  </h4>
                  <p className="text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
                    {card.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}