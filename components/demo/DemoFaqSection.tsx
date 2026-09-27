"use client";

import React, { useState } from "react";
import { ChevronDown, PlusIcon } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export const DemoFaqSection = () => {
  const faqs: FaqItem[] = [
    {
      question: "Is the AdunniTrak demonstration live?",
      answer: "Yes. A member of the AdunniTrak team will guide participants live, allowing you to ask questions and explore specific workflows in real time."
    },
    {
      question: "Is this a generic product presentation?",
      answer: "No. We use the information provided in your request to pre-configure a demonstration environment that reflects your facility and terminology."
    },
    {
      question: "Can the demonstration focus on selected modules?",
      answer: "Yes. You may request a complete platform overview or ask us to focus entirely on specific areas such as maintenance, reliability or downtime response."
    },
    {
      question: "Will Adunni AI be included?",
      answer: "Yes, when it is relevant to your requested areas. We will demonstrate how Adunni AI retrieves your specific equipment history and supports root-cause analysis."
    },
    {
      question: "Can our terminology and equipment structure be discussed?",
      answer: "Yes. The session can include a discussion about how your specific equipment hierarchy and naming conventions are mapped into the platform."
    },
    {
      question: "Can members of different departments attend?",
      answer: "Yes. Operations, maintenance, reliability, inventory and IT teams are encouraged to attend to ensure a comprehensive technical and operational evaluation."
    },
    {
      question: "Do we need to provide confidential plant information?",
      answer: "No. Initial information should remain high-level. We use representative examples to simulate your operations without requiring sensitive proprietary data."
    },
    {
      question: "How long will the demonstration take?",
      answer: "The duration will depend on the selected areas and the number of participants, but sessions typically range between 45 and 90 minutes."
    },
    {
      question: "Does requesting a demonstration create an obligation?",
      answer: "No. Requesting or attending a demonstration does not create any purchase obligation or binding commitment."
    },
    {
      question: "What happens after the demonstration?",
      answer: "If there is a suitable operational fit, the next step is typically to discuss configuration, site assessment, and potential implementation phases."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-16 lg:py-24 bg-[#EAEEF6]]">
      <div className=" w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Demonstration questions
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-extrabold text-[#0B1220] tracking-[-0.01em]">
            What you may want to know before booking
          </h2>
        </div>

        {/* Right Content - Accordion */}
        <div className="lg:col-span-7 flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`flex flex-col border-[#E2E6ED] `}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-[16px] leading-[24px] font-bold text-[#0B1220] pr-4">
                  {faq.question}
                </span>
                <span className=" w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300">
                  <PlusIcon
                    className={`w-4 h-4 text-[#0C46C4] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[16px] leading-[26px] text-[#5B6472] pb-5 pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
