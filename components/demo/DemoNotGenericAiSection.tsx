import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export const DemoNotGenericAiSection = () => {
  const capabilities = [
    "Find similar historical failures",
    "Retrieve equipment and incident information",
    "Support root-cause investigations",
    "Summarise operational events",
    "Assist with operational reporting",
    "Use client terminology and nomenclature"
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#071A33]">
      <div className=" w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div className="flex flex-col w-full">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Not generic AI
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-extrabold text-white tracking-[-0.01em] mb-6">
            Industrial intelligence grounded in operational context
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white mb-8">
            Adunni AI works within the AdunniTrak environment to support your team, not replace it. Built on your plant’s data, it can securely:
          </p>

          <ul className="flex flex-col gap-4 mb-8">
            {capabilities.map((cap, i) => (
              <li key={i} className="flex  place-items-center gap-3">
                <div className=" w-1.5 h-1.5 rounded-full bg-[#3FC3EE] flex items-center justify-center" />
                <span className="text-[16px] leading-[24px] text-white font-medium">
                  {cap}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex bg-[#1656E8] w-fit rounded-md ">
            <Link
              href="/adunni-ai"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md text-white font-bold text-[14px] transition-colors w-full sm:w-auto"
            >
              Learn more about Adunni AI
            </Link>
          </div>
        </div>

        {/* Right Content - Responsive Image Stack */}
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full relative h-[300px] sm:h-[400px] lg:h-[365px] rounded-xl overflow-hidden ">
            <Image
              src="/images/demo/adunni_ai_graphic.png"
              alt="Adunni AI Graphic"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-[#0B1220] rounded-xl p-6 md:p-8 flex flex-col">
            <h3 className="text-[18px] leading-[24px] font-bold text-white mb-3">
              Governance statement
            </h3>
            <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-white/70">
              Adunni AI operates within defined user permissions and authorised information boundaries, using only the operational context relevant to each user's role and site.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
