import React from "react";
import Link from "next/link";

export default function CookiePolicyPage() {
    return (
        <main className="w-full py-16 lg:py-24 bg-[#F9FAFB]">
            <div className="max-w-[800px] mx-auto px-6 bg-white p-8 md:p-12 rounded-[16px] shadow-sm border border-[#E2E8F0]">
                <div className="mb-10 border-b border-[#E2E8F0] pb-6">
                    <h1 className="font-inter font-extrabold text-[32px] md:text-[40px] text-[#0B1220] mb-4">
                        Cookie Policy
                    </h1>
                    <p className="text-[#5B6472] text-[14px]">
                        <strong>Effective date:</strong> January 1, 2026 | <strong>Last updated:</strong> October 6, 2026
                    </p>
                </div>

                <div className="space-y-8 font-inter text-[#334155] text-[15px] leading-[26px]">
                    <p>
                        This Cookie Policy explains how AdunniTrak uses cookies, local storage, web beacons, pixels, and similar tracking technologies across our website and SaaS web application. This document should be read in conjunction with our Privacy Policy.
                    </p>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">1. What are Cookies?</h2>
                        <p>
                            Cookies are small text files downloaded to your device when you visit a website. <strong>Session cookies</strong> are temporary and expire when you close your browser. <strong>Persistent cookies</strong> remain on your device until they expire or you manually delete them. We also utilize HTML5 Local Storage for faster application load times.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">2. Categories of Technologies Used</h2>
                        <p className="mb-4">AdunniTrak utilizes the following classifications:</p>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>
                                <strong>Strictly Necessary (Essential):</strong> These cannot be disabled. They handle core operations like secure user authentication (JWT tokens), load balancing across our servers, cross-site request forgery (CSRF) protection, and maintaining session state during complex data entry flows.
                            </li>
                            <li>
                                <strong>Functional & Preference:</strong> These remember your UI customization, language, timezone selection, and dashboard widget layouts so you do not have to reconfigure them every shift.
                            </li>
                            <li>
                                <strong>Performance & Analytics:</strong> Provided largely by trusted third parties, these help us measure system latency, identify UI bottlenecks, trace application errors, and understand overall aggregate traffic patterns. Data collected is typically pseudo-anonymized.
                            </li>
                            <li>
                                <strong>Marketing & Third-Party:</strong> Used on our public marketing site (not inside the authenticated SaaS app) to track ad campaign performance and manage live-chat customer support continuity across pages.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">3. Consent, Controls, and Opt-Outs</h2>
                        <p>
                            In compliance with regulations like the NDPA, PIPEDA, and GDPR, non-essential cookies are disabled upon your first visit until explicit consent is granted via our Cookie Consent Banner.
                        </p>
                        <p className="mt-4">
                            <strong>Browser-Level Controls:</strong> You can manage or block cookies natively within your browser settings. Be aware that blocking "Strictly Necessary" cookies will break the login capability of the AdunniTrak SaaS platform.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-[#0F58F5] hover:underline">Manage in Google Chrome</a></li>
                            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noreferrer" className="text-[#0F58F5] hover:underline">Manage in Apple Safari</a></li>
                            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noreferrer" className="text-[#0F58F5] hover:underline">Manage in Mozilla Firefox</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">4. Global Privacy Control & Do Not Track</h2>
                        <p>
                            We actively monitor and respect standardized <strong>Global Privacy Control (GPC)</strong> signals sent by supported browsers and automatically opt those users out of non-essential tracking. Traditional "Do Not Track" (DNT) header requests are handled on a best-effort basis due to a lack of uniform industry standardization.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">5. Updates and Contact</h2>
                        <p>
                            As we add new features or switch infrastructure providers, we will update this policy and reset your consent preferences if the scope of processing changes significantly.
                        </p>
                        <p className="mt-4">
                            Questions regarding our cookie architecture or consent mechanism can be directed to <a href="mailto:privacy@adunnitrak.com" className="text-[#0F58F5] hover:underline">privacy@adunnitrak.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}