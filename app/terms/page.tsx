import React from "react";
import Link from "next/link";

export default function TermsOfServicePage() {
    return (
        <main className="w-full py-16 lg:py-24 bg-[#F9FAFB]">
            <div className="max-w-[800px] mx-auto px-6 bg-white p-8 md:p-12 rounded-[16px] shadow-sm border border-[#E2E8F0]">
                <div className="mb-10 border-b border-[#E2E8F0] pb-6">
                    <h1 className="font-inter font-extrabold text-[32px] md:text-[40px] text-[#0B1220] mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-[#5B6472] text-[14px]">
                        <strong>Effective date:</strong> January 1, 2026 | <strong>Last updated:</strong> October 6, 2026
                    </p>
                </div>

                <div className="space-y-8 font-inter text-[#334155] text-[15px] leading-[26px]">
                    <p>
                        These Terms of Service ("Terms") govern access to and use of the Services provided by AdunniTrak. By creating an account, accepting an Order Form, executing an agreement, or using the Services, you ("Customer," "Authorized User," or "Visitor") agree to be bound by these Terms. If you are accepting these Terms on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms.
                    </p>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">1. Contracting Entity</h2>
                        <p>
                            "AdunniTrak," "we," "us," and "our" refer to the specific AdunniTrak entity identified in the applicable Order Form. Unless otherwise specified: Customers located in Nigeria contract with <strong>AdunniTrak Solutions Nigeria Limited</strong>. Customers located outside Nigeria contract with <strong>AdunniTrak Solutions Inc. (Canada)</strong>. Each entity is solely responsible for the Services it directly provides.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">2. Account Eligibility & Security</h2>
                        <p>
                            Users must have the legal capacity to enter into a binding agreement. You agree to provide accurate, current, and complete account information. You are strictly responsible for safeguarding your credentials, applying appropriate role-based access controls, and promptly terminating access for former personnel. Credentials cannot be shared between multiple individuals. You must notify us immediately at <a href="mailto:security@adunnitrak.com" className="text-[#0F58F5] hover:underline">security@adunnitrak.com</a> of any unauthorized use or suspected security breach. AdunniTrak is not liable for losses arising from compromised credentials due to Customer negligence.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">3. Acceptable Use Policy (AUP)</h2>
                        <p className="mb-4">You agree not to misuse the Services. Specifically, you shall not:</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code, underlying ideas, algorithms, or AI models of the Services.</li>
                            <li>Use the Services to build a competitive product, service, or AI model.</li>
                            <li>Attempt to bypass, exploit, or disable any security mechanism or rate limit.</li>
                            <li>Upload or transmit viruses, malware, or any data that is illegal, defamatory, or infringes on third-party intellectual property rights.</li>
                            <li>Perform automated scraping, unauthorized API access, or load testing without prior written consent.</li>
                        </ul>
                        <p className="mt-4">We reserve the right to immediately suspend or terminate accounts that violate this AUP without liability or refund.</p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">4. Purpose of Services & Industrial Disclaimers</h2>
                        <p>
                            AdunniTrak provides software for production planning, shift management, downtime tracking, and industrial reliability analysis. <strong>The Services are decision-support tools, not autonomous safety systems.</strong>
                        </p>
                        <p className="mt-4 font-semibold text-[#0B1220]">
                            The Services DO NOT replace engineering judgment, competent on-site supervision, physical equipment safeguards, hazardous energy control (LOTO), emergency response protocols, or the Customer’s legal health, safety, and environmental (HSE) obligations. Customers remain 100% responsible for physical workplace operations and safety decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">5. Adunni AI Acceptable Use & Limitations</h2>
                        <p>
                            Adunni AI utilizes secure large language model (LLM) infrastructure to process operational context. Customer Data and user prompts are explicitly excluded from being used to train general-purpose, public-facing AI models.
                        </p>
                        <p className="mt-4">
                            <strong>AI Fallibility:</strong> AI outputs are probabilistic and may contain inaccuracies, omissions, or "hallucinations." Users must independently verify AI-generated summaries, work orders, or suggestions before implementation—especially in safety-critical, compliance, or heavy-machinery contexts. AdunniTrak expressly disclaims all liability for physical damage, production loss, or personnel injury resulting from unverified reliance on Adunni AI.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">6. Intellectual Property Rights</h2>
                        <p>
                            <strong>AdunniTrak IP:</strong> We retain all right, title, and interest (including all copyrights, patents, trademarks, and trade secrets) in and to the Services, Adunni AI, underlying software, and any updates or derivatives.
                        </p>
                        <p className="mt-4">
                            <strong>Customer Data:</strong> You retain all ownership of the data you input into the Services. You grant AdunniTrak a worldwide, limited-term license to host, copy, process, and transmit Customer Data strictly as necessary to provide, maintain, and support the Services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">7. Indemnification</h2>
                        <p>
                            You agree to defend, indemnify, and hold harmless AdunniTrak, its officers, directors, and employees from and against any claims, damages, obligations, losses, liabilities, costs, or debt (including attorney's fees) arising from: (i) your use of and access to the Services; (ii) your violation of any term of these Terms (including the AUP); (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your Customer Data caused damage to a third party.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">8. Warranties, Disclaimers, & Limitation of Liability</h2>
                        <p>
                            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." ADUNNITRAK DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR 100% SECURE.
                        </p>
                        <p className="mt-4 font-semibold text-[#0B1220]">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ADUNNITRAK BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR DOWNTIME. ADUNNITRAK'S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">9. Term and Termination</h2>
                        <p>
                            These Terms remain in effect until your subscription expires or is terminated. We may suspend or terminate your access immediately if you breach these Terms, fail to pay valid invoices, or if required by law. Upon termination, your right to use the Services ceases immediately. Sections 6, 7, 8, 10, and 11 survive termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">10. Governing Law & Jurisdiction</h2>
                        <p>
                            For AdunniTrak Solutions Inc.: Governed by the laws of Ontario, Canada, with exclusive jurisdiction in the courts of Ontario.
                            For AdunniTrak Solutions Nigeria Limited: Governed by the laws of the Federal Republic of Nigeria, with exclusive jurisdiction in the courts of the Federal Capital Territory, Abuja.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">11. General Provisions</h2>
                        <p>
                            <strong>Severability:</strong> If any provision is found unenforceable, it will be modified to reflect the parties' intention, and the remaining provisions will remain in full effect.<br />
                            <strong>Force Majeure:</strong> Neither party is liable for delays or failures caused by acts of God, war, terrorism, internet/telecommunication outages, or other events beyond their reasonable control.<br />
                            <strong>Waiver:</strong> Failure to enforce any right does not constitute a waiver of that right.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">12. Contact</h2>
                        <p>
                            Legal notices should be sent to <a href="mailto:legal@adunnitrak.com" className="text-[#0F58F5] hover:underline">legal@adunnitrak.com</a>. Registered offices:<br />
                            <strong>Canada:</strong> Unit 11, 2910 Tokala Trail, London, Ontario N6G 0T9, Canada.<br />
                            <strong>Nigeria:</strong> No. 2 Babatope Ajakaiye Crescent, Jahi, Abuja, Federal Capital Territory, Nigeria.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}