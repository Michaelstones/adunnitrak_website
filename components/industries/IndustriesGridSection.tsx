import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IndustryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const IndustriesGridSection = () => {
  const industries: IndustryCard[] = [
    {
      id: "aggregates",
      title: "Aggregates & Quarries",
      description: "Connect extraction, crushing, screening, washing, and loadout.",
      image: "/images/industriesImage1.jpg",
      href: "#aggregates"
    },
    {
      id: "mining",
      title: "Mining & Mineral Processing",
      description: "Create operational visibility across mining, material handling and processing.",
      image: "/images/industriesImage2.jpg",
      href: "#mining"
    },
    {
      id: "cement",
      title: "Cement Manufacturing",
      description: "Connect raw-material handling, production processes and dispatch.",
      image: "/images/industriesImage3.png",
      href: "#cement"
    },
    {
      id: "steel",
      title: "Iron & Steel",
      description: "Coordinate production facilities, utilities, workshops and logistics.",
      image: "/images/industriesImage4.png",
      href: "#steel"
    },
    {
      id: "power",
      title: "Power & Utilities",
      description: "Connect generation, water processing, maintenance and shift operations.",
      image: "/images/industriesImage5.png",
      href: "#power"
    },
    {
      id: "heavy-manufacturing",
      title: "Heavy Manufacturing",
      description: "Connect production lines, equipment events, resources and shifts.",
      image: "/images/industriesImage6.png",
      href: "#heavy-manufacturing"
    }
  ];

  return (
    <section id="industries" className="w-full py-16 lg:py-24 bg-white relative">
      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8">
        
        {/* Header */}
        <div className="max-w-[862px] mb-12 lg:mb-16">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Industries we support
          </span>
          <h2 className="text-[30px] md:text-[36px] leading-[38px] md:leading-[44px] font-extrabold text-[#0B1220] tracking-[-0.01em] mb-4">
            Built for complex industrial environments
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#5B6472]">
            AdunniTrak supports asset-intensive organisations where production depends on the reliability of equipment and the coordination of teams.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry) => (
            <div key={industry.id} className="relative flex flex-col justify-end w-full aspect-[422/625] md:aspect-[3/4] lg:aspect-[422/625] rounded-[16px] overflow-hidden group">
              <Image 
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay gradient to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/40 to-transparent pointer-events-none" />

              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                <h3 className="text-white text-[24px] leading-[28px] font-bold mb-3">
                  {industry.title}
                </h3>
                <p className="text-white/80 text-[14px] leading-[20px] mb-6 min-h-[40px]">
                  {industry.description}
                </p>
                <Link 
                  href={industry.href}
                  className="inline-flex items-center text-white text-[14px] font-bold hover:text-[#1656E8] transition-colors w-fit"
                >
                  Explore Industry
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
