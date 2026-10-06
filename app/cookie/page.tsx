import React from "react";

export default function CookiePolicyPage() {
    return (
        <main className="w-full py-16 lg:py-24 bg-[#F9FAFB]">
            <div className="max-w-[900px] mx-auto px-6 bg-white p-8 md:p-12 rounded-[16px] shadow-sm border border-[#E2E8F0]">
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
                        <ul className="list-disc pl-6 space-y-4">
                            <li>
                                <strong>Strictly necessary technologies:</strong> Enable secure login (e.g., JWT authentication tokens), session continuity, CSRF security, load balancing, and fraud prevention. They cannot generally be disabled through our consent tool.
                            </li>
                            <li>
                                <strong>Preference technologies:</strong> Remember language, display, region, and other dashboard configuration choices.
                            </li>
                            <li>
                                <strong>Analytics technologies:</strong> Help us understand traffic, feature use, errors, and system performance.
                            </li>
                            <li>
                                <strong>Marketing technologies:</strong> Measure campaigns or support advertising on our public website. We will not use them unless enabled and permitted.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Consent and controls</h2>
                        <p>
                            Where required, non-essential technologies are disabled until the visitor makes a choice via our cookie consent banner. Consent may be changed or withdrawn through the cookie settings link on the website or by clearing browser data. Browser controls can block cookies, but blocking necessary technologies may prevent login or core functions.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Do Not Track and global signals</h2>
                        <p>
                            We may not respond to “Do Not Track” because browsers do not interpret it consistently. We will honour supported consent or opt-out signals (such as Global Privacy Control) where required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Updates and Contact</h2>
                        <p>
                            We may update this Policy and cookie table when technologies or providers change. Session cookies expire when the browser closes; persistent cookies remain until expiry or deletion. Questions may be sent to <a href="mailto:info@adunnitrak.com" className="text-[#0F58F5] hover:underline">info@adunnitrak.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}