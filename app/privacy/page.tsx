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
                        <strong>Effective date:</strong> January 1, 2026 | <strong>Last updated:</strong> September 22, 2026
                    </p>
                </div>

                <div className="space-y-8 font-inter text-[#334155] text-[15px] leading-[26px]">
                    <p>
                        This Privacy Policy explains how AdunniTrak handles Personal Data through the public website, web application, customer onboarding, support, sales, security, and Adunni AI features. It applies to website visitors, customer representatives, Authorized Users, and people whose Personal Data a Customer places in the Services.
                    </p>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Personal Data we collect</h2>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Account and contact data:</strong> Name, business email, telephone number, employer, job title, user role, profile details, and communication preferences.</li>
                            <li><strong>Commercial data:</strong> Plan, quotation, contract, invoices, payment status, tax information, and transaction references. Payment card details are collected and tokenized securely through certified payment gateway partners; AdunniTrak does not store complete payment-card details on its servers.</li>
                            <li><strong>Customer Data:</strong> Shift records, employee or contractor identifiers, production and downtime entries, work orders, inspection records, inventory records, reliability assessments, incident records, comments, photographs, videos, attachments, signatures, and audit history.</li>
                            <li><strong>Technical and usage data:</strong> IP address, device and browser details, timestamps, authentication events, logs, pages or features used, diagnostic data, cookie identifiers, and approximate location derived from IP address.</li>
                            <li><strong>Support and communications data:</strong> Emails, direct support messages, call notes, feedback, training records, and files supplied for troubleshooting.</li>
                            <li><strong>AI interaction data:</strong> Prompts, retrieved context, generated responses, feedback, and related logs when Adunni AI is used.</li>
                        </ul>
                        <p className="mt-4">
                            Customers should configure forms and user practices to avoid collecting Personal Data that is unnecessary for industrial operations. Users must not enter special-category, sensitive, medical, biometric, financial-account, government-identifier, or children's data unless the Customer has confirmed a lawful need and appropriate safeguards.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Adunni AI and automated processing</h2>
                        <p>
                            Adunni AI assists users by processing prompts and authorized Customer Data to produce summaries, suggestions, or answers. Prompts and authorized operational records are transmitted securely to enterprise-grade AI processing infrastructure for analysis. Adunni AI is not intended to make final decisions about individuals, employment, safety, discipline, or legal rights. We do not knowingly use solely automated processing to make a decision that produces legal or similarly significant effects on an individual. Customers must provide appropriate notice and human review when they use AI-assisted output in their own processes.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">International transfers</h2>
                        <p>
                            The Services may involve processing in Canada, Nigeria, and other jurisdictions where our approved cloud infrastructure and service partners operate. For transfers from Nigeria or another jurisdiction that restricts international transfers, we use lawful transfer mechanisms and implement appropriate technical and contractual safeguards. Information processed across regions may be accessible to authorized courts, law-enforcement, or regulatory authorities under applicable local laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Retention & Export</h2>
                        <p>
                            We retain Personal Data only as long as reasonably necessary for the purposes described, Customer instructions, the subscription term, security, backups, dispute resolution, and legal, tax, or audit obligations. Customer login access will ordinarily end when the subscription terminates.
                        </p>
                        <p className="mt-4">
                            The Customer may request a manual export of Customer Data in commonly readable formats (such as CSV, Excel, PDF, or JSON) by emailing info@adunnitrak.com within 30 calendar days after termination. If the Customer does not request an export within the 30-day period, AdunniTrak may delete or de-identify Customer Data from active systems, subject to applicable law, contractual retention requirements, and secure backup rotation cycles.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Security and breaches</h2>
                        <p>
                            We use administrative, technical, and physical safeguards proportionate to the sensitivity and risk, which include rigorous access controls, multi-tier authentication, robust data encryption in transit and at rest, logical tenant environment separation, comprehensive activity logging, automated backups, and structured incident response procedures.
                        </p>
                        <p className="mt-4">
                            No system is completely secure. We will assess suspected security events and notify affected Customers, individuals, or regulators when required by applicable law and contract.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Contact</h2>
                        <p>
                            Privacy requests, complaints, and suspected privacy or security breaches may be sent to <a href="mailto:admin@adunnitrak.com" className="text-[#0F58F5] hover:underline">admin@adunnitrak.com</a>. Website: https://adunnitrak.com.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}