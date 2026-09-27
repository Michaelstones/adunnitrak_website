import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Operational intelligence",
    title: "Why connected shift data is the foundation of plant-wide improvement",
    desc: "Consistent shift information creates the operational history required to improve coordination, maintenance response and performance.",
    image: "/images/insight-1.png",
  },
  {
    category: "Reliability",
    title: "From downtime event to organisational knowledge",
    desc: "Closing the loop between incidents, repairs, failure investigation and confirmed learning helps prevent repeated operational losses.",
    image: "/images/insight-2.png",
  },
  {
    category: "Artificial intelligence",
    title: "Why industrial AI needs operational context",
    desc: "AI becomes more useful when it understands the facility's equipment, terminology, workflows and verified operating history.",
    image: "/images/insight-3.png",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-[#EAEEF6] py-16 md:py-24">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-12 min-h-auto md:min-h-[693px]">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 flex flex-col">
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424]">
              Ideas for modern industrial operations
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-4 max-w-[862px]">
              Practical perspectives on connected operations, maintenance performance, asset reliability, industrial knowledge and the responsible use of AI in asset-intensive industries.
            </p>
          </div>
        </div>

        {/* 3 insight cards: row */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch overflow-x-hidden">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="w-full lg:w-[423px] p-4 md:p-6 bg-white border border-[#ECEDEE] rounded-[14px] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)] flex flex-col shrink-0"
            >
              {/* Image: 374×200 */}
              <div className="w-full aspect-[16/9] md:h-[200px] rounded-[4px] overflow-hidden shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={748}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Category */}
              <p className="font-sans font-semibold text-[12px] leading-[16px] tracking-[0.02em] text-[#525A72] pt-4">
                {article.category}
              </p>
              {/* Title */}
              <p className="font-sans font-semibold text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] text-[#0F1424] pt-2 max-w-full md:max-w-[374px]">
                {article.title}
              </p>
              {/* Desc */}
              <p className="font-sans font-normal text-[13px] md:text-[14px] leading-[20px] text-[#525A72] pt-3 max-w-full md:max-w-[374px]">
                {article.desc}
              </p>
              {/* "Read Insight" button */}
              <div className="pt-4 mt-auto flex items-center gap-2">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity font-sans font-semibold text-[14px] leading-[20px] text-[#0F1424]"
                >
                  Read Insight
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* "View All Insights" button */}
        <div className="flex justify-center">
          <Link
            href="/insights"
            className="inline-flex items-center justify-center gap-4 bg-[#E3E6EF] border-[1.5px] border-[#ECEDEE] rounded-lg py-4 px-6 font-sans font-bold text-[16px] text-[#525A72] hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            View All Insights
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
