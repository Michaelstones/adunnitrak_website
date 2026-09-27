"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ─── Types & Data ─────────────────────────────────────────────── */
type PlanRegion = "nigeria" | "international";

const ONBOARDING_CARDS = [
    {
        title: "Starter onboarding",
        nigeriaText: "From ₦750,000 per site",
        intlText: "Quoted according to scope",
    },
    {
        title: "Growth onboarding",
        nigeriaText: "From ₦2,500,000 per site",
        intlText: "Quoted according to scope",
    },
    {
        title: "Enterprise onboarding",
        nigeriaText: "Defined within the Enterprise commercial proposal.",
        intlText: "Defined within the Enterprise commercial proposal.",
    },
];

const ENTERPRISE_STEPS = [
    {
        number: "1",
        title: "Initial consultation",
        description: "Discuss the organisation, facilities and operational priorities.",
    },
    {
        number: "2",
        title: "Requirements review",
        description: "Confirm sites, users, assets, workflows, integrations, hosting and migration.",
    },
    {
        number: "3",
        title: "Solution definition",
        description: "Identify the required platform configuration and implementation approach.",
    },
    {
        number: "4",
        title: "Commercial proposal",
        description: "Provide subscription, onboarding, implementation and support terms.",
    },
];

/* ─── Component ──────────────────────────────────────────── */
export default function OnboardingEnterpriseSplit() {
    const [planRegion, setPlanRegion] = useState<PlanRegion>("international");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        try {
            // Auto-detect location based on timezone
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (tz && tz.startsWith("Africa")) {
                setPlanRegion("nigeria");
            }
        } catch (e) {
            console.warn("Timezone detection failed", e);
        }
    }, []);

    return (
        <section className="bg-[#EEF1F6] py-16 lg:py-24">
            <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">

                {/* Two-column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Onboarding */}
                    <div className="flex flex-col">
                        <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
                            Configured around your facility
                        </p>
                        <h2 className="mt-3 font-inter font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-[#0B1220]">
                            Your subscription is supported by structured onboarding
                        </h2>
                        <p className="mt-4 text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
                            AdunniTrak is configured around the organisation's facility structure,
                            departments, users, equipment references, workflows and approved
                            terminology. Onboarding is separate from the recurring subscription fee.
                        </p>

                        <div className="mt-8 flex flex-col gap-4">
                            {ONBOARDING_CARDS.map((card) => (
                                <article
                                    key={card.title}
                                    className="flex flex-col rounded-[12px] bg-white border border-[#E2E6ED] shadow-sm p-5 lg:p-6"
                                >
                                    <h3 className="text-[15px] font-bold text-[#0B1220] font-inter">
                                        {card.title}
                                    </h3>
                                    <div className="mt-1 text-[13px] leading-[20px] font-normal text-[#7C8798] font-inter min-h-[20px]">
                                        <span
                                            className={`transition-opacity duration-300 ${!isMounted ? "opacity-0" : "opacity-100"
                                                }`}
                                        >
                                            {planRegion === "nigeria" ? card.nigeriaText : card.intlText}
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Enterprise Pricing Process */}
                    <div className="flex flex-col">
                        <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
                            Pricing for complex operations
                        </p>
                        <h2 className="mt-3 font-inter font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-[#0B1220]">
                            Enterprise pricing begins with understanding your requirements
                        </h2>
                        <p className="mt-4 text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
                            Enterprise deployments may involve multiple facilities, larger equipment structures,
                            advanced permissions, reliability workflows, integrations, data migration and specialised
                            hosting requirements.
                        </p>

                        {/* Steps List */}
                        <div className="mt-8 flex flex-col gap-6">
                            {ENTERPRISE_STEPS.map((step) => (
                                <div key={step.number} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F58F5] flex items-center justify-center text-[14px] font-bold text-white shadow-sm mt-0.5">
                                        {step.number}
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-[15px] font-bold text-[#0B1220] font-inter">
                                            {step.title}
                                        </h4>
                                        <p className="mt-1 text-[13px] leading-[20px] font-normal text-[#5B6472] font-inter">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-10">
                            <Link
                                href="/demo"
                                className="inline-flex items-center justify-center h-[48px] px-8 rounded-[8px] bg-[#0F58F5] text-[15px] font-[600] text-white transition-colors hover:bg-[#093593]"
                            >
                                Request an enterprise consultation
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}