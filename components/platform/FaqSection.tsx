"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is AdunniTrak a generic off-the-shelf platform?",
    answer: "No. AdunniTrak provides a structured platform that is configured around the client's facility, equipment hierarchy, workflows, roles, priorities and terminology.",
  },
  {
    question: "Is AdunniTrak custom-built from the beginning for every client?",
    answer: "No. The core platform and connected domains already exist. The relevant structure, modules, terminology, permissions and workflows are configured to reflect the client's requirements.",
  },
  {
    question: "Do the modules work independently?",
    answer: "Each domain supports a specific responsibility, but the platform is designed so related information can move across authorised workflows and contribute to one operational history.",
  },
  {
    question: "Is Adunni AI a general-purpose chatbot?",
    answer: "No. Adunni AI is designed to work within authorised AdunniTrak context and client-specific operational terminology.",
  },
  {
    question: "Can AdunniTrak connect with our existing systems?",
    answer: "Potential integrations are assessed individually based on the required purpose, available interfaces, data ownership, security requirements and agreed implementation scope.",
  },
  {
    question: "Can different facilities use different terminology?",
    answer: "Yes. Approved terminology, naming structures and operational classifications can be configured to reflect each organisation or facility.",
  },
  {
    question: "Does every user see all platform information?",
    answer: "No. Access and permitted actions are defined according to authorised roles, responsibilities and organisational boundaries.",
  },
  {
    question: "Can AdunniTrak support more than one plant?",
    answer: "The platform can be structured for multiple sites or facilities, subject to the agreed configuration, access and implementation requirements.",
  },
  {
    question: "How is implementation scoped?",
    answer: "The scope is established through operational discovery, facility and equipment mapping, workflow confirmation, security and integration review, configuration, validation and deployment planning.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between">

          {/* Left Sticky Header */}
          <div className="lg:w-[423px] flex flex-col shrink-0">
            <div className="lg:sticky lg:top-28">
              <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#0F58F5] uppercase">
                Platform questions
              </span>
              <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4">
                Understanding how AdunniTrak works
              </h2>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="flex-1 bg-[#EDEFF5] rounded-lg p-4 md:p-6 lg:p-8 flex flex-col w-full lg:max-w-[753px]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="flex flex-col border-b border-[#ECEDEE] last:border-b-0"
                >
                  <button
                    onClick={() => toggleOpen(idx)}
                    className="flex flex-row items-center justify-between py-4 md:py-6 text-left"
                  >
                    <span className="font-sans font-semibold text-[16px] leading-[24px] text-[#0F1424] pr-4">
                      {faq.question}
                    </span>
                    <span className="text-[#0F58F5] shrink-0">
                      {isOpen ? <X size={22} /> : <Plus size={22} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-8">
                      <p className="font-sans font-normal text-[14px] md:text-[16px] leading-[20px] text-[#525A72]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
