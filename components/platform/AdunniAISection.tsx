import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const contextItems = [
  "Asset hierarchy and location",
  "Open work orders on equipment",
  "Current shift notes and production targets",
  "Live operating status (e.g. running, down, standby)",
  "Recent downtime incidents and fault codes",
  "Historical FMEA findings for similar assets",
  "Current inventory levels for required parts",
];

export default function AdunniAISection() {
  return (
    <section className="bg-[#071A33] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#3FC3EE] uppercase">
              Not a generic chatbot
            </span>
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-white pt-4">
              Industrial intelligence connected to operational context
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-white/70 pt-4">
              Adunni AI is an intelligence layer within the AdunniTrak platform. It works with relevant information already structured and authorised within the client's environment rather than providing generic responses disconnected from plant reality.
            </p>

            <h4 className="font-sans font-semibold text-[16px] leading-[24px] text-white pt-8 mb-4">
              Potential authorised context
            </h4>

            {/* List */}
            <div className="flex flex-col gap-3">
              {contextItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#3FC3EE]" />
                  </div>
                  <span className="font-sans font-normal text-[14px] leading-[22px] text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col">
            {/* Card 1 */}
            <div className="bg-[#0F2E56] border border-white/10 rounded-[14px] p-6 flex flex-col">
              <h3 className="font-sans font-semibold text-[18px] leading-[26px] text-white">
                How Adunni AI may support teams
              </h3>
              <div className="flex flex-col gap-3 pt-4">
                {[
                  "Find similar historical failures",
                  "Retrieve relevant operational records",
                  "Support structured root-cause investigation",
                  "Identify related maintenance information",
                  "Summarise incidents, shifts and completed work",
                  "Prepare operational and executive reports",
                  "Preserve and retrieve approved knowledge",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#3FC3EE]" />
                    </div>
                    <span className="font-sans font-normal text-[14px] leading-[22px] text-white/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[14px] p-6 mt-4">
              <p className="font-sans font-normal text-[14px] leading-[20px] text-white/70">
                Adunni AI operates within defined user permissions and authorised information boundaries. It supports professional judgement and approved workflows; it does not replace operational responsibility, engineering judgement, safety procedures or required approvals.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/adunni-ai"
                className="inline-flex items-center justify-center h-[56px] px-6 bg-[#0F58F5] rounded-lg font-sans font-bold text-[16px] text-white transition-opacity hover:opacity-90 w-full sm:w-auto gap-2"
              >
                Explore Adunni AI
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
