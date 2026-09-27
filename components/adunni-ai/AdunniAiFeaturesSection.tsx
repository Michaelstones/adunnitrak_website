import React from "react";
import { 
  Search, 
  Database, 
  Focus, 
  BarChart2, 
  FileText, 
  Network, 
  Lightbulb, 
  WandSparkles 
} from "lucide-react";

export const AdunniAiFeaturesSection = () => {
  const features = [
    {
      title: "Find similar failures",
      description: "Locate equipment failures and incident history similar to a current event.",
      icon: Search
    },
    {
      title: "Retrieve operational knowledge",
      description: "Surface plant-specific procedures, records and confirmed findings.",
      icon: Database
    },
    {
      title: "Support investigations",
      description: "Support structured root-cause investigations with relevant history.",
      icon: Focus
    },
    {
      title: "Identify recurring patterns",
      description: "Recognise recurring failure patterns across equipment and time.",
      icon: BarChart2
    },
    {
      title: "Summarise operational events",
      description: "Summarise downtime, maintenance and reliability information.",
      icon: FileText
    },
    {
      title: "Recommend next steps",
      description: "Recommend relevant next steps for authorised professional review.",
      icon: Network
    },
    {
      title: "Generate reports",
      description: "Prepare operational and executive reports from connected records.",
      icon: Lightbulb
    },
    {
      title: "Use your terminology",
      description: "Present information using the client's approved terminology and nomenclature.",
      icon: WandSparkles
    }
  ];

  return (
    <section id="features" className="w-full py-16 lg:py-24 bg-[#F5F7FB]">
      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8">
        
        {/* Header */}
        <div className="max-w-[862px] mb-12 lg:mb-16 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            What Adunni AI can help authorised teams do
          </span>
          <h2 className="text-[30px] md:text-[36px] leading-[38px] md:leading-[44px] font-extrabold text-[#0B1220] tracking-[-0.01em]">
            Grounded assistance across every connected domain
          </h2>
        </div>

        {/* Grid (4 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-12 lg:gap-y-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-start bg-white p-6 rounded-lg shadow-sm border border-[#E2E6ED]">
                <div className="w-12 h-12 rounded-full bg-[#1656E8]/10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#1656E8]" />
                </div>
                <h3 className="text-[16px] leading-[24px] font-bold text-[#0B1220] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-[#5B6472]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
