"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

/* ─── Types & Data ─────────────────────────────────────────────── */
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is pricing charged per user or per site?",
    answer:
      "AdunniTrak is licensed per site, allowing an allocated number of users per location depending on your chosen plan tier (e.g., up to 10 users for Starter, 25 users for Growth, and custom user limits for Enterprise).",
  },
  {
    id: "faq-2",
    question: "What is considered a site?",
    answer:
      "A site refers to a single physical operational location — such as a plant, refinery, terminal, or facility. Each site is licensed independently.",
  },
  {
    id: "faq-3",
    question: "Are taxes included in the displayed prices?",
    answer:
      "All subscription prices are charged per site and exclude applicable local taxes, which will be calculated at checkout or outlined in your commercial proposal.",
  },
  {
    id: "faq-4",
    question: "Is onboarding included in the subscription price?",
    answer:
      "No. Onboarding is structured and priced separately from the recurring subscription fee to ensure your facility, departments, and equipment structures are configured correctly.",
  },
  {
    id: "faq-5",
    question: "Can we pay annually?",
    answer:
      "Yes. You can choose annual billing on eligible plans to save 10% compared to month-to-month pricing.",
  },
  {
    id: "faq-6",
    question: "Can we move from Starter to Growth or Enterprise?",
    answer:
      "Yes. You can upgrade your plan tier at any time as your facility's operational requirements expand.",
  },
  {
    id: "faq-7",
    question: "Why does Growth use a restricted equipment list?",
    answer:
      "The Growth plan utilizes a restricted equipment list configured during onboarding to streamline maintenance workflows, work orders, and PM tasks without requiring a full enterprise asset register.",
  },
  {
    id: "faq-8",
    question: "What is a shared Adunni AI request allowance?",
    answer:
      "The Adunni AI request allowance is a pool of shared queries and automated insights distributed across all authorized users within your subscribed site each month.",
  },
  {
    id: "faq-9",
    question: "Is biometric hardware included?",
    answer:
      "Biometric hardware and procurement are excluded from standard subscriptions and onboarding. They are quoted separately depending on whether you use a customer-provided device or request an AdunniTrak-supplied unit.",
  },
  {
    id: "faq-10",
    question: "Can we see the platform before choosing a plan?",
    answer:
      "Yes, you can request a demo or consultation with our team to walk through the platform and determine the right configuration for your operation.",
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default function PricingFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggleItem(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="w-full  mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Heading block (4 cols) */}
          <div className="lg:col-span-4 flex flex-col sticky top-8">
            <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
              Pricing questions
            </p>
            <h2 className="mt-3 font-inter font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-[#0B1220]">
              What organisations may want to know
            </h2>
          </div>

          {/* Right: Accordion container (8 cols) */}
          <div className="lg:col-span-8 bg-[#F4F6F9] rounded-[16px] p-2 md:p-4 ">
            <div className="flex flex-col">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="last:border-none"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-content`}
                      className="w-full flex items-center justify-between gap-4 px-4 py-4 md:py-5 text-left transition-colors duration-200 hover:bg-[#EAEFF5] rounded-[8px]"
                    >
                      <span className="text-[15px] leading-[22px] font-semibold text-[#0B1220] font-inter">
                        {item.question}
                      </span>
                      {/* Animated Icon Container */}
                      <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors">
                        <Plus
                          className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 text-[#0F58F5]" : "text-[#0F58F5]"
                            }`}
                        />
                      </span>
                    </button>

                    {/* Smooth Height Expansion Animation */}
                    <div
                      id={`${item.id}-content`}
                      role="region"
                      className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5 px-4" : "grid-rows-[0fr] opacity-0 px-4"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter pt-1">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}