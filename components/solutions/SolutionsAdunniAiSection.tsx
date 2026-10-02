import Link from "next/link";
import Image from "next/image";

export const SolutionsAdunniAiSection = () => {
  const aiFeatures = [
    "Find similar incidents and recurring failure patterns",
    "Support root-cause investigations with relevant operational data",
    "Retrieve approved procedures and reliability knowledge",
    "Assist with operational summaries and management reporting",
    "Recommend relevant next actions for authorised professional review"
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-canvas-50 relative border-t border-line-200">
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#1656E8] uppercase">
              Industrial AI grounded in your operation
            </span>
          </div>

          <h2 className="font-extrabold text-[30px] lg:text-[36px] leading-[38px] lg:leading-[44px] tracking-[-0.01em] text-[#0B1220] mb-6">
            Operational intelligence that understands your approach
          </h2>
          <p className="text-[16px] leading-[26px] text-[#5B6472] mb-10">
            Adunni AI works within the connected AdunniTrak environment, bringing your proprietary data, logs and history to the surface exactly when needed.
          </p>

          <ul className="flex flex-col gap-4 mb-10">
            {aiFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1656E8] mt-2 shrink-0" />
                <span className="text-[14px] leading-[22px] text-[#0B1220] font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <div>
            <Link href="/adunni-ai" className="inline-flex items-center justify-center h-12 px-6 bg-[#1656E8] rounded-[10px] font-bold text-[14px] text-white transition-colors hover:bg-[#0F45C4]">
              Explore Adunni AI
            </Link>
          </div>
        </div>

        {/* Right Asset Image (FIXED) */}
        <div className="flex flex-col w-full bg-[#071A33] rounded-[14px] overflow-hidden border border-[#E2E6ED] shadow-[0_10px_15px_-3px_rgba(11,18,32,0.1)]">

          {/* 2. Text Container (Pushed below the image) */}
          <div className="w-full p-6 sm:p-8 ">
            <h3 className="text-[#F5F7FB] text-[16px] font-bold mb-2">Governance Statement</h3>
            <p className="text-[#B8C2D4] text-[14px] leading-[22px]">
              Adunni AI supports professional judgement. Decisions, approvals and operational actions remain with authorised personnel.
            </p>
          </div>

          {/* 1. Image Container with Aspect Ratio */}
          <div className="relative w-full aspect-video sm:aspect-[4/3] ">
            <Image
              src="/images/aiImage.svg"
              alt="Adunni AI Mockup"
              fill
              className="object-cover object-bottom hover:scale-110 transition duration-500 ease-in-out"
            />
          </div>



        </div>

      </div>
    </section>
  );
};