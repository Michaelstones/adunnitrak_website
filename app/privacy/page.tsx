import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="w-full py-16 lg:py-24 bg-[#F9FAFB]">
            <div className="max-w-[800px] mx-auto px-6 bg-white p-8 md:p-12 rounded-[16px] shadow-sm border border-[#E2E8F0]">
                <div className="mb-10 border-b border-[#E2E8F0] pb-6">
                    <h1 className="font-inter font-extrabold text-[32px] md:text-[40px] text-[#0B1220] mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-[#5B6472] text-[14px]">
                        <strong>Effective date:</strong> January 1, 2026 | <strong>Last updated:</strong> October 6, 2026
                    </p>
                </div>

                <div className="space-y-8 font-inter text-[#334155] text-[15px] leading-[26px]">
                    <p>
                        AdunniTrak ("we," "us," or "our") respects your privacy. This Privacy Policy details how we collect, use, disclose, and protect Personal Data in compliance with global data protection standards, including the Nigerian Data Protection Act (NDPA) and the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada.
                    </p>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">1. Personal Data We Collect</h2>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Account & Identity Data:</strong> Full name, business email address, telephone number, employer, job title, and system role.</li>
                            <li><strong>Commercial & Transactional Data:</strong> Billing details, tax identification numbers, and transaction history. We do not store full payment card details; these are tokenized and processed by PCI-DSS compliant third-party gateways.</li>
                            <li><strong>Customer Operations Data:</strong> Information entered into the SaaS platform, including shift logs, worker identifiers, maintenance requests, and audit logs.</li>
                            <li><strong>Technical & Telemetry Data:</strong> IP addresses, browser types, device identifiers, session metadata, authentication events, and feature usage analytics.</li>
                            <li><strong>AI Interaction Data:</strong> Prompts submitted to Adunni AI, context parameters, and generated outputs.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">2. Legal Bases & How We Use Your Data</h2>
                        <p className="mb-4">We process Personal Data based on the following legal grounds:</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Contractual Necessity:</strong> To provision the Services, authenticate users, process payments, and provide customer support.</li>
                            <li><strong>Legitimate Interests:</strong> To improve platform security, analyze usage trends, train our non-AI internal algorithms, and protect against fraud or abuse.</li>
                            <li><strong>Legal Obligation:</strong> To comply with tax, corporate, and law enforcement mandates.</li>
                            <li><strong>Consent:</strong> For direct marketing or specific non-essential cookie tracking (which you can withdraw at any time).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">3. Data Sharing & Subprocessors</h2>
                        <p>
                            We do not sell your Personal Data. We only share information in the following strictly controlled scenarios:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 mt-4">
                            <li><strong>Service Providers (Subprocessors):</strong> Cloud hosting providers (e.g., AWS, Azure), secure enterprise AI API providers, and communication tools. All subprocessors are bound by strict Data Processing Agreements (DPAs).</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user data may be transferred under strict confidentiality obligations.</li>
                            <li><strong>Legal Compliance:</strong> If compelled by a court of competent jurisdiction or valid legal mandate to disclose data to law enforcement.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">4. Adunni AI Processing</h2>
                        <p>
                            Adunni AI features transmit specific, scoped operational prompts to isolated enterprise LLM environments. <strong>We strictly prohibit our AI infrastructure partners from utilizing Customer Data or prompts to train their public or baseline models.</strong> AI processing logs are retained for a maximum of 30 days strictly for trust, safety, and abuse prevention before being permanently purged. We do not use automated processing to make final employment or legal decisions about individuals.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">5. International Data Transfers</h2>
                        <p>
                            AdunniTrak operates across Nigeria and Canada. Data may be stored or processed in regions outside your home jurisdiction. Where data is transferred internationally (e.g., from Nigeria to North American data centers), we employ recognized transfer mechanisms, such as Standard Contractual Clauses (SCCs) and adherence to local adequacy decisions, to ensure continuous legal protection.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">6. Data Retention & Export</h2>
                        <p>
                            We retain operational data for the duration of your active subscription. Upon contract termination, Customers have a 30-day window to request a full structured data export (CSV, JSON). Following this period, AdunniTrak will systematically cryptographically shred or irreversibly anonymize the data, barring data required to be kept for legal, tax, or regulatory audit compliance.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">7. Your Data Privacy Rights</h2>
                        <p className="mb-4">Depending on your jurisdiction (e.g., NDPA, PIPEDA), you have the right to:</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Access:</strong> Request a copy of the Personal Data we hold about you.</li>
                            <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
                            <li><strong>Erasure (Right to be Forgotten):</strong> Request deletion of your data, subject to legal retention constraints.</li>
                            <li><strong>Restriction & Objection:</strong> Opt-out of marketing communications or object to specific processing types.</li>
                            <li><strong>Portability:</strong> Receive your data in a machine-readable format.</li>
                        </ul>
                        <p className="mt-4">To exercise these rights, email <a href="mailto:privacy@adunnitrak.com" className="text-[#0F58F5] hover:underline">privacy@adunnitrak.com</a>. We will respond within 30 days.</p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">8. Children's Privacy</h2>
                        <p>
                            Our Services are strictly designed for industrial and corporate environments. We do not knowingly collect Personal Data from individuals under the age of 18.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">9. Contact the Privacy Team</h2>
                        <p>
                            For privacy inquiries, Data Subject Access Requests (DSARs), or complaints, contact our Data Protection Officer (DPO) at:<br />
                            <strong>Email:</strong> <a href="mailto:info@adunnitrak.com" className="text-[#0F58F5] hover:underline">info@adunnitrak.com</a><br />
                            <strong>Website:</strong> https://adunnitrak.com
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}