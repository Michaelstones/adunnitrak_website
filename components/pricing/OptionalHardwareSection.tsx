"use client";

import Link from "next/link";

/* ─── Data ───────────────────────────────────────────────── */
const HARDWARE_CARDS = [
    {
        title: "Customer-provided device",
        description:
            "The organisation may provide an approved compatible biometric device for configuration and authorised attendance-event integration.",
        bgColor: "bg-white",
        borderColor: "border-[#E2E6ED]",
    },
    {
        title: "AdunniTrak-supplied device",
        description:
            "Where AdunniTrak is requested to supply the device, the customer receives a separate commercial quotation.",
        bgColor: "bg-white",
        borderColor: "border-[#E2E6ED]",
    },
    {
        title: "Excluded from subscriptions and standard onboarding",
        description:
            "Biometric hardware, device procurement, delivery, physical installation, device configuration, custom integration, site-specific infrastructure and additional implementation support.",
        bgColor: "bg-[#F4F6F9]",
        borderColor: "border-transparent",
    },
    {
        title: "Biometric data statement",
        description:
            "Biometric templates should ordinarily remain on the approved device. AdunniTrak receives only authorised verification-event information unless another data architecture is separately reviewed and approved.",
        bgColor: "bg-[#F4F6F9]",
        borderColor: "border-transparent",
    },
];

/* ─── Component ──────────────────────────────────────────── */
export default function OptionalHardwareSection() {
    return (
        <section className="bg-white py-16 lg:py-24 border-t border-[#ECEDEE]">
            <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Heading, description & CTA */}
                    <div className="lg:col-span-5 flex flex-col sticky top-8">
                        <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
                            Optional hardware requirements
                        </p>
                        <h2 className="mt-3 font-inter font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-[#0B1220]">
                            Biometric devices are quoted separately
                        </h2>
                        <p className="mt-4 text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
                            Biometric attendance may be connected to AdunniTrak where the customer has
                            an approved compatible device or requires AdunniTrak to supply one.
                        </p>

                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center h-[48px] px-6 rounded-[8px] bg-[#0F58F5] text-[15px] font-[600] text-white transition-colors hover:bg-[#093593]"
                            >
                                Request a device quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Stacked Info Cards */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {HARDWARE_CARDS.map((card) => (
                            <article
                                key={card.title}
                                className={`flex flex-col rounded-[12px] border ${card.borderColor} ${card.bgColor} shadow-sm p-6`}
                            >
                                <h3 className="text-[16px] font-bold text-[#0B1220] font-inter">
                                    {card.title}
                                </h3>
                                <p className="mt-2 text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
                                    {card.description}
                                </p>
                            </article>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}