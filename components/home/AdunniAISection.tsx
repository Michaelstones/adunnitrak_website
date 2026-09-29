"use client";

import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

const features = [
  "Find similar equipment failures and incident history",
  "Retrieve plant-specific operational knowledge",
  "Support structured root cause investigations",
  "Summarise downtime, maintenance and reliability information",
  "Identify recurring failure patterns",
  "Generate operational and executive reports",
];

export default function AdunniAISection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1366px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-4 md:gap-y-12">
          {/* Left — span 6 */}
          <div className="md:col-span-6 flex flex-col">
            <SlideUp delay={0.1}>
              <p className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase text-[#0F58F5]">
                Not a generic chatbot
              </p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4 max-w-[642px]">
                Industrial intelligence grounded in your operational context
              </h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-6 max-w-[642px]">
                Adunni AI is embedded within the AdunniTrak platform and works with the operational information available to each authorised user. Its context may include the client&apos;s equipment hierarchy, incident history, maintenance records, confirmed failure causes, reliability knowledge, procedures and approved plant terminology.
              </p>
            </SlideUp>
            <SlideUp delay={0.4}>
              <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-4 max-w-[642px]">
                Because Adunni AI works within the connected platform, it can support questions and decisions using relevant operational context rather than providing generic responses disconnected from the facility.
              </p>
            </SlideUp>
            
            <StaggerContainer staggerChildren={0.06} delayChildren={0.3} className="pt-8 flex flex-col gap-3">
              {features.map((feature, idx) => (
                <StaggerItem key={idx} className="flex items-start md:items-center gap-3">
                  <Check size={16} color="#0F1424" strokeWidth={2} className="shrink-0 mt-1 md:mt-0" />
                  <span className="font-sans font-normal text-[14px] leading-[22px] text-[#0F1424]">
                    {feature}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <SlideUp delay={0.5} className="pt-8">
              <Link
                href="/adunni-ai"
                className="inline-flex items-center justify-center bg-[#0F58F5] rounded-lg py-4 px-6 font-sans font-bold text-[16px] text-white leading-none hover:opacity-90 transition-opacity"
              >
                Explore Adunni AI
              </Link>
            </SlideUp>
          </div>

          {/* Right — span 5, justifySelf start */}
          <FadeIn delay={0.3} className="md:col-span-5 md:col-start-8 flex flex-col justify-self-start w-full">
            {/* Image: 633.63×475.22 */}
            <div className="w-full max-w-[634px] aspect-[4/3] shrink-0 overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/images/adunni-ai-chat.png"
                alt="Adunni AI interface"
                width={1268}
                height={951}
                className="w-full h-full object-cover block"
              />
            </div>
            {/* Disclaimer */}
            <SlideUp delay={0.5} className="mt-4 bg-[#EAEEF6] border border-[#ECEDEE] rounded-xl p-5">
              <p className="font-sans font-normal text-[12px] leading-[18px] text-[#525A72]">
                Adunni AI supports professional judgement. Operational and maintenance decisions remain subject to the client&apos;s authorised personnel, procedures, safety requirements and approval controls.
              </p>
            </SlideUp>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
