import React from "react";

export default function PrivacyPolicyPage() {
    return (
        <main className="w-full py-16 lg:py-24 bg-[#F9FAFB]">
            <div className="max-w-[900px] mx-auto px-6 bg-white p-8 md:p-12 rounded-[16px] shadow-sm border border-[#E2E8F0]">
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
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Our privacy roles</h2>
                        <p>For account, billing, sales, website, security, and direct support information, the relevant AdunniTrak company generally acts as the data controller. For Personal Data submitted to a Customer environment, the Customer generally determines the purposes and means of processing, and AdunniTrak processes the data for the Customer as a service provider or data processor.</p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Personal Data we collect</h2>
                        <p>We collect data directly via the web application, APIs, cookies, customer administrators, and connected systems. This includes:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Account and contact data:</strong> Name, business email, telephone number, employer, job title, user role, and communication preferences.</li>
                            <li><strong>Commercial data:</strong> Plan, quotation, contract, invoices, and transaction references. Payment card details are tokenized directly by our payment gateways (Stripe/Paystack) and are never stored on our servers.</li>
                            <li><strong>Customer Data:</strong> Shift records, employee or contractor identifiers, production and downtime entries, work orders, inspection records, attachments, and audit history.</li>
                            <li><strong>Technical and usage data:</strong> IP address, device and browser details, timestamps, authentication events, cookie identifiers, and approximate location.</li>
                            <li><strong>AI interaction data:</strong> Prompts, retrieved context, generated responses, and related logs when Adunni AI is used.</li>
                        </ul>
                        <p className="mt-2">Users must not enter special-category, sensitive, medical, biometric, financial-account, government-identifier, or children’s data unless the Customer has confirmed a lawful need and appropriate safeguards.</p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Adunni AI and automated processing</h2>
                        <p>
                            Adunni AI assists users by processing prompts and authorized Customer Data. User prompts and authorized operational context are transmitted securely via TLS 1.2+ to our enterprise AI providers (e.g., OpenAI/Anthropic). It is not intended to make final decisions about individuals, employment, safety, discipline, or legal rights. We do not knowingly use solely automated processing to make a decision that produces legal or similarly significant effects on an individual. Customers must provide appropriate notice and human review when they use AI-assisted output. AI providers are contractually prohibited from using Customer Data or prompts to train their general-purpose models.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Sharing, disclosure, and international transfers</h2>
                        <p>
                            We do not sell Personal Data. We may disclose it to authorized affiliates; vetted providers of hosting (AWS/Google Cloud), authentication, communications (SendGrid), payments (Stripe/Paystack), and AI processing. Providers may use Personal Data only for contracted purposes under appropriate Data Processing Agreements (DPAs).
                        </p>
                        <p className="mt-4">
                            The Services may involve processing in Canada, Nigeria, the United States, and other countries where approved providers operate. For transfers from Nigeria or another jurisdiction that restricts international transfers, we will use a lawful transfer mechanism and assess or require an adequate level of protection, contractual safeguards, or consent where valid.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Retention, security, and breaches</h2>
                        <p>
                            We retain Personal Data only as long as reasonably necessary for the subscription term, legal obligations, and backups. After termination, Customer Data is held for a 30-day export window, after which it is deleted or de-identified from active systems. Backup copies rotate on a 90-day cycle.
                        </p>
                        <p className="mt-4">
                            We use administrative, technical, and physical safeguards proportionate to the risk, including access controls, authentication, encryption in transit/rest, and logical environment separation. AdunniTrak will record and investigate a reported incident, contain it, and notify affected Customers and regulators within 48 hours where required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Individual rights</h2>
                        <p>
                            Depending on location, an individual may request access, correction, deletion, restriction, portability, or withdrawal of consent. For Customer-controlled data, submit the request to the relevant Customer first. AdunniTrak will ordinarily respond within 30 calendar days to direct requests. AdunniTrak will assess whether AdunniTrak Solutions Nigeria Limited must register as a data controller/processor of major importance and appoint a qualified DPO.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[20px] text-[#0B1220] mt-8 mb-4">Contact</h2>
                        <p>
                            Privacy requests, complaints, and suspected privacy or security breaches may be sent to <a href="mailto:admin@adunnitrak.com" className="text-[#0F58F5] hover:underline">admin@adunnitrak.com</a>. Agboola Shonekan coordinates privacy matters for AdunniTrak Solutions Inc. and AdunniTrak Solutions Nigeria Limited.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}