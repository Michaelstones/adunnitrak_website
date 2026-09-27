import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface IndustryDetail {
  id: string;
  category: string;
  heading: string;
  description: string;
  challenges: string[];
  applicationTitle: string;
  applicationText: string;
  ctaText: string;
  ctaLink: string;
  bgWhite?: boolean;
}

const industryDetails: IndustryDetail[] = [
  {
    id: "aggregates",
    category: "Aggregates and quarries",
    heading: "Connect production from extraction to loadout",
    description: "Aggregate and quarry operations depend on the coordination of mobile extraction fleets, crushing plants, screens, wash plants and dispatch systems.",
    challenges: [
      "Unplanned crusher, screen and conveyor stoppages",
      "Incomplete production and feed-plan records",
      "Delayed communication between plant and mobile-equipment",
      "Limited visibility into recurring downtime",
      "Inconsistent shift handover",
      "Difficulty connecting field observations to maintenance execution"
    ],
    applicationTitle: "How AdunniTrak can be applied",
    applicationText: "AdunniTrak can connect production reporting, downtime events, maintenance requests and shift logs across the quarry and processing plant.",
    ctaText: "Explore for quarries",
    ctaLink: "/book-demo?industry=quarries",
    bgWhite: false
  },
  {
    id: "mining",
    category: "Mining and mineral processing",
    heading: "Improve visibility across mining and processing operations",
    description: "Mining operations combine mobile equipment, fixed processing plants and complex supply chains that require continuous coordination.",
    challenges: [
      "Equipment failures affecting production and material movement",
      "Disconnected information between mining and processing teams",
      "Delayed maintenance response",
      "Limited visibility into equipment history",
      "Critical-spares and resource constraints",
      "Operational knowledge being lost between shifts or rosters"
    ],
    applicationTitle: "How AdunniTrak can be applied",
    applicationText: "AdunniTrak can provide a connected record of production, delays, maintenance response and shift communication across mining and processing areas.",
    ctaText: "Explore for mining",
    ctaLink: "/book-demo?industry=mining",
    bgWhite: true
  },
  {
    id: "cement",
    category: "Cement manufacturing",
    heading: "Connect information across the cement production process",
    description: "Cement manufacturing requires coordination across quarrying, raw milling, pyro-processing, finish milling and dispatch.",
    challenges: [
      "Process interruptions and equipment downtime",
      "Limited visibility across production departments",
      "Reactive maintenance and recurring failures",
      "Incomplete shift communication",
      "Difficulty connecting operational incidents to corrective action",
      "Limited visibility into critical spare parts"
    ],
    applicationTitle: "How AdunniTrak can be applied",
    applicationText: "AdunniTrak can connect production activity, downtime analysis, maintenance and reliability information across the facility.",
    ctaText: "Explore for cement",
    ctaLink: "/book-demo?industry=cement",
    bgWhite: false
  },
  {
    id: "steel",
    category: "Iron and steel",
    heading: "Coordinate operations across an integrated industrial site",
    description: "Iron and steel facilities may include raw-material handling, ironmaking, steelmaking, casting, rolling mills and complex site utilities.",
    challenges: [
      "Fragmented information across departments",
      "Complex equipment and production dependencies",
      "Extended downtime caused by maintenance or spare-part delays",
      "Limited coordination between production and central services",
      "Difficulty tracking rebuilt or fabricated components",
      "Operational knowledge remaining within individual teams"
    ],
    applicationTitle: "How AdunniTrak can be applied",
    applicationText: "AdunniTrak can be configured around the departmental structure of an integrated site, standardising communication and performance visibility.",
    ctaText: "Explore for steel",
    ctaLink: "/book-demo?industry=steel",
    bgWhite: true
  },
  {
    id: "power",
    category: "Power and utilities",
    heading: "Strengthen equipment and operational visibility",
    description: "Power-generation and utility facilities may not operate continuously, requiring precise coordination of maintenance and outages.",
    challenges: [
      "Forced outages and equipment trips",
      "Incomplete equipment operating records",
      "Delayed escalation of abnormal conditions",
      "Disconnected inspection and maintenance information",
      "Recurring failures without a shared reliability history",
      "Inconsistent communication between shifts"
    ],
    applicationTitle: "How AdunniTrak can be applied",
    applicationText: "Terminology such as downtime, production and output can be replaced with availability, dispatch and generation to match the specific operating model.",
    ctaText: "Explore for power",
    ctaLink: "/book-demo?industry=power",
    bgWhite: false
  },
  {
    id: "heavy-manufacturing",
    category: "Heavy manufacturing",
    heading: "Connect production, equipment and workforce activity",
    description: "Heavy manufacturing operations rely on coordinated production lines, complex fabrication processes and closely managed maintenance.",
    challenges: [
      "Production-line stoppages",
      "Inconsistent production and downtime reporting",
      "Delayed maintenance response",
      "Material and spare-part shortages",
      "Poor communication between shifts",
      "Limited visibility into recurring equipment problems"
    ],
    applicationTitle: "How AdunniTrak can be applied",
    applicationText: "The platform can be configured around production lines and work centres to coordinate downtime, maintenance response and shift continuity.",
    ctaText: "Explore for manufacturing",
    ctaLink: "/book-demo?industry=manufacturing",
    bgWhite: true
  }
];

export const IndustryDetailsSections = () => {
  return (
    <div className="w-full flex flex-col">
      {industryDetails.map((detail, idx) => (
        <section
          key={detail.id}
          id={detail.id}
          className={`w-full py-16 lg:py-24 border-t border-[#E2E6ED] ${detail.bgWhite ? "bg-white" : "bg-[#F5F7FB]"}`}
        >
          <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Left Content (8 columns) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
              <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
                {detail.category}
              </span>
              <h3 className="text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] font-bold text-[#0B1220] tracking-[-0.01em] mb-4">
                {detail.heading}
              </h3>
              <p className="text-[16px] leading-[26px] text-[#5B6472] mb-8 max-w-[680px]">
                {detail.description}
              </p>

              <div className="flex flex-col">
                <h4 className="text-[14px] font-bold text-[#0B1220] mb-4">Common operational challenges</h4>
                <ul className="grid grid-cols-1  gap-x-6 gap-y-3">
                  {detail.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1656E8] mt-2 shrink-0" />
                      <span className="text-[14px] leading-[22px] text-[#5B6472]">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content (4 columns) */}
            <div className="flex flex-col item-center text-left lg:col-span-5 xl:col-span-4  lg:pl-12 p-3  bg-white rounded-sm border border-1 drop-shadow-md">
              <h4 className="text-[18px] font-bold text-[#0B1220] mb-4">
                {detail.applicationTitle}
              </h4>
              <p className="text-[16px] leading-[26px] text-[#5B6472] mb-8">
                {detail.applicationText}
              </p>
              <Button className="bg-[#1656E8] flex items-center gap-2 w-fit h-auto py-3 rounded-sm">


                <Link
                  href={detail.ctaLink}
                  className="inline-flex text-white text-[14px] font-bold "
                >
                  {detail.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
};
