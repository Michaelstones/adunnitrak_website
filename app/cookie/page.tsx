import React from "react";

export default function CookiePolicyPage() {
    return (
        <main className="w-full py-16 lg:py-24 bg-[#F9FAFB]">
            <div className="max-w-[800px] mx-auto px-6 bg-white p-8 md:p-12 rounded-[16px] shadow-sm border border-[#E2E8F0]">
                <div className="mb-10 border-b border-[#E2E8F0] pb-6">
                    <h1 className="font-inter font-extrabold text-[32px] md:text-[40px] text-[#0B1220] mb-4">
                        Cookie Policy
                    </h1>
                    <p className="text-[#5B6472] text-[14px]">
                        <strong>Effective date:</strong> January 1, 2026 | <strong>Last updated:</strong> September 22, 2026
                    </p>
                </div>

                <div className="space-y-8 font-inter text-[#334155] text-[15px] leading-[26px]">
                    <p>
                        This Policy explains how the AdunniTrak website and web application use cookies, local storage, pixels, SDKs, and similar technologies. A cookie is a small file stored on a browser or device.
                    </p>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Technology categories</h2>
                        <p className="mb-4">AdunniTrak utilizes the following categories of technologies:</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                <strong>Strictly necessary technologies:</strong> Enable secure authentication, session continuity, load balancing, security protections, fraud prevention, and core requested functions. They cannot generally be disabled through our consent tools.
                            </li>
                            <li>
                                <strong>Preference technologies:</strong> Remember language, display preferences, region settings, and customized interface choices.
                            </li>
                            <li>
                                <strong>Analytics technologies:</strong> Help us measure traffic patterns, feature utilization, error rates, and overall platform performance.
                            </li>
                            <li>
                                <strong>Marketing & Support technologies:</strong> Support direct communication features, live assistance continuity across page loads, and relevant operational updates where authorized.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Consent and controls</h2>
                        <p>
                            Where required by applicable law, non-essential technologies are disabled until the visitor makes an explicit choice. Consent may be changed or withdrawn through the cookie settings mechanism available on the website or by configuring standard browser data controls. Browser settings can block or delete cookies, though blocking necessary technologies may prevent authentication or core platform operations.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Do Not Track and global signals</h2>
                        <p>
                            We may not respond to automated "Do Not Track" browser mechanisms because standardized industry interpretation varies. We will honour supported consent or opt-out preference signals where required by governing data protection laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Updates</h2>
                        <p>
                            We may update this Policy and our technology classifications as platform features or infrastructure providers evolve. Questions regarding our cookie practices may be sent to <a href="mailto:info@adunnitrak.com" className="text-[#0F58F5] hover:underline">info@adunnitrak.com</a>. Website: https://adunnitrak.com.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}