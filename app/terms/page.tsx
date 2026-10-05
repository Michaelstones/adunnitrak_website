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
                        <strong>Effective date:</strong> January 1, 2026 | <strong>Last updated:</strong> September 22, 2026
                    </p>
                </div>

                <div className="space-y-8 font-inter text-[#334155] text-[15px] leading-[26px]">
                    <p>
                        These Terms govern access to and use of the Services by Customers, Authorized Users, and website visitors. By creating an account, accepting an Order Form, or using the Services, you agree to these Terms. If you use the Services for an organization, you confirm that you have authority to act for it.
                    </p>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Contracting entity</h2>
                        <p>
                            "AdunniTrak," "we," "us," and "our" mean the AdunniTrak company identified in the applicable quotation, Order Form or written agreement. Customers located in Nigeria will ordinarily contract with and be invoiced by AdunniTrak Solutions Nigeria Limited. Customers located outside Nigeria will ordinarily contract with and be invoiced by AdunniTrak Solutions Inc., unless the applicable quotation, Order Form or written agreement identifies a different AdunniTrak company. Each company is responsible only for the Services it supplies or contracts to supply.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Eligibility and accounts</h2>
                        <p>
                            Users must have legal capacity to enter a binding agreement and must use the Services only for authorized business purposes. Customers must provide accurate account information, assign appropriate roles, keep administrator details current, remove access promptly when it is no longer required, and ensure that Authorized Users comply with these Terms. Credentials are personal to the assigned user and must be protected. Suspected compromise must be reported promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Purpose of the Services</h2>
                        <p>
                            AdunniTrak supports production and feed planning, downtime records, maintenance and work orders, shift handover, reliability and FMEA workflows, inventory, picture and incident reporting, dashboards, operational communication, and related industrial processes. Configuration and terminology may differ by Customer.
                        </p>
                        <p className="mt-4">
                            The Services support human decision-making. They do not replace engineering judgment, competent supervision, legal or regulatory reporting, equipment safeguards, permits, isolation procedures, LOTO or equivalent procedures, emergency response, preventive maintenance, or the Customer’s health and safety management system. Customers remain responsible for workplace and operational decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Adunni AI</h2>
                        <p>
                            Adunni AI utilizes secure enterprise-grade artificial intelligence and large language model infrastructure to process operational context. When interacting with Adunni AI, context-specific prompts and retrieved records are transmitted via secure server-side connections. Processing partners adhere to strict data retention policies (typically storing operational prompts for a maximum of 30 days strictly for trust, safety, and abuse monitoring). Customer Data and user prompts are explicitly opted out of general-purpose model training.
                        </p>
                        <p className="mt-4">
                            Adunni AI may summarize, organize, retrieve, or suggest information based on Customer Data and other authorized sources. AI output can be incomplete, inaccurate, or unsuitable for a particular context. Users must review output before relying on it, especially where safety, maintenance, production, regulatory compliance, personnel, or financial consequences may follow. Adunni AI must not be used as the sole basis for a safety-critical action, personnel decision, legal conclusion, or regulatory submission.
                        </p>
                        <p className="mt-4">
                            We will not use identifiable Customer Data to train a general-purpose model for other customers unless the Customer gives express written permission. Service providers that process prompts or output for us must do so under contractual controls appropriate to their role.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Third party services</h2>
                        <p>
                            The Services depend on vetted cloud hosting, secure content storage, relational database management, communication tools, authentication services, payment processing gateways, and AI infrastructure partners operating globally under appropriate data protection agreements. Third-party products may be governed by their own separate terms. We are not responsible for a third-party product chosen, controlled, or separately contracted by the Customer, but we remain responsible for our obligations when a provider processes Personal Data on our behalf.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Warranties disclaimers and liability</h2>
                        <p>
                            We will provide the Services with reasonable care and skill. Except for an express commitment in an Order Form and to the fullest extent permitted by law, the Services are provided "as is" and "as available," without implied warranties of uninterrupted operation, fitness for a particular purpose, or error-free results.
                        </p>
                        <p className="mt-4">
                            To the fullest extent permitted by law, neither party is liable for indirect, incidental, special, exemplary, or consequential damages, or for lost profits, revenue, production, goodwill, or anticipated savings. Our aggregate liability arising from the Services will not exceed the fees paid or payable for the affected Services during the twelve months before the event giving rise to the claim. This limit does not apply where liability cannot lawfully be limited, or to fraud, wilful misconduct, breach of confidentiality, infringement by a party, or payment obligations. An Order Form may state different limits.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Governing law and disputes</h2>
                        <p>
                            If your contracting entity is AdunniTrak Solutions Inc., these terms are governed by the laws of Ontario and the federal laws of Canada applicable there, and the courts of Ontario have exclusive jurisdiction, except where applicable law requires otherwise. If your contracting entity is AdunniTrak Solutions Nigeria Limited, these terms are governed by the laws of the Federal Republic of Nigeria, and the courts with jurisdiction in the Federal Capital Territory, Abuja, have exclusive jurisdiction, except where applicable law requires otherwise. The parties may agree to a different dispute process in an order form or enterprise agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Contact</h2>
                        <p>
                            General and contractual inquiries may be sent to <a href="mailto:info@adunnitrak.com" className="text-[#0F58F5] hover:underline">info@adunnitrak.com</a>. Formal notices may also be delivered to the registered office of the applicable contracting company: AdunniTrak Solutions Inc., Unit 11, 2910 Tokala Trail, London, Ontario N6G 0T9, Canada; or AdunniTrak Solutions Nigeria Limited, No. 2 Babatope Ajakaiye Crescent, Jahi, Abuja, Federal Capital Territory, Nigeria.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}