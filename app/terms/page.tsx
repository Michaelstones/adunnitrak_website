import React from "react";

export default function TermsOfServicePage() {
    return (
        <main className="w-full py-16 lg:py-24 bg-[#F9FAFB]">
            <div className="max-w-[900px] mx-auto px-6 bg-white p-8 md:p-12 rounded-[16px] shadow-sm border border-[#E2E8F0]">

                <div className="mb-10 border-b border-[#E2E8F0] pb-6">
                    <h1 className="font-inter font-extrabold text-[32px] md:text-[40px] text-[#0B1220] mb-4">
                        Terms of Service & Operational Policies
                    </h1>
                    <p className="text-[#5B6472] text-[14px]">
                        <strong>Effective date:</strong> January 1, 2026 | <strong>Last updated:</strong> September 22, 2026
                    </p>
                    <p className="mt-4 text-[#334155] text-[15px]">
                        These Terms govern access to and use of the Services by Customers, Authorized Users, and website visitors. By creating an account, accepting an Order Form, or using the Services, you agree to these Terms. If you use the Services for an organization, you confirm that you have authority to act for it.
                    </p>
                </div>

                <div className="space-y-12 font-inter text-[#334155] text-[15px] leading-[26px]">

                    {/* 1. TERMS OF SERVICE */}
                    <section id="terms-of-service">
                        <h2 className="font-bold text-[24px] text-[#0B1220] mb-4 border-b pb-2">1. Terms of Service</h2>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-[#0B1220]">Contracting entity</h3>
                            <p>“AdunniTrak,” “we,” “us,” and “our” mean the AdunniTrak company identified in the applicable quotation, Order Form or written agreement. Customers located in Nigeria will ordinarily contract with and be invoiced by AdunniTrak Solutions Nigeria Limited. Customers located outside Nigeria will ordinarily contract with and be invoiced by AdunniTrak Solutions Inc., unless the applicable quotation, Order Form or written agreement identifies a different AdunniTrak company. Each company is responsible only for the Services it supplies or contracts to supply.</p>

                            <h3 className="font-semibold text-[#0B1220]">Eligibility and accounts</h3>
                            <p>Users must have legal capacity to enter a binding agreement and must use the Services only for authorized business purposes. Customers must provide accurate account information, assign appropriate roles, keep administrator details current, remove access promptly when it is no longer required, and ensure that Authorized Users comply with these Terms. Credentials are personal to the assigned user and must be protected. Suspected compromise must be reported promptly.</p>

                            <h3 className="font-semibold text-[#0B1220]">Purpose of the Services</h3>
                            <p>AdunniTrak supports production and feed planning, downtime records, maintenance and work orders, shift handover, reliability and FMEA workflows, inventory, picture and incident reporting, dashboards, operational communication, and related industrial processes. Configuration and terminology may differ by Customer.</p>
                            <p>The Services support human decision-making. They do not replace engineering judgment, competent supervision, legal or regulatory reporting, equipment safeguards, permits, isolation procedures, LOTO or equivalent procedures, emergency response, preventive maintenance, or the Customer’s health and safety management system. Customers remain responsible for workplace and operational decisions.</p>

                            <h3 className="font-semibold text-[#0B1220]">Adunni AI</h3>
                            <p>Adunni AI utilizes secure enterprise API endpoints (e.g., OpenAI Enterprise / Anthropic) to process operational context. Prompts and outputs are transmitted via secure TLS encryption. Our AI providers retain data for a maximum of 30 days strictly for trust, safety, and abuse monitoring. Our providers are contractually prohibited from using Customer Data, prompts, or outputs to train general-purpose models. All AI outputs require human review prior to operational implementation.</p>
                            <p>Adunni AI may summarize, organize, retrieve, or suggest information based on Customer Data and other authorized sources. AI output can be incomplete, inaccurate, or unsuitable for a particular context. Users must review output before relying on it, especially where safety, maintenance, production, regulatory compliance, personnel, or financial consequences may follow. Adunni AI must not be used as the sole basis for a safety-critical action, personnel decision, legal conclusion, or regulatory submission.</p>

                            <h3 className="font-semibold text-[#0B1220]">Customer Data and instructions</h3>
                            <p>The Customer controls its Customer Data and instructs us to host, process, transmit, display, back up, and otherwise use it as necessary to provide, secure, support, and improve the Services. The Customer is responsible for the lawfulness, accuracy, quality, and permitted use of Customer Data and for giving required notices to employees, contractors, and other individuals. We do not independently verify operational records.</p>

                            <h3 className="font-semibold text-[#0B1220]">Third party services</h3>
                            <p>The Services utilize third-party providers including AWS/Google Cloud (hosting and storage in North America), Auth0/Firebase (authentication), Stripe/Paystack (payments), and SendGrid (communications). All act as subprocessors under strict Data Processing Agreements. The Services may depend on hosting, communications, authentication, analytics, mapping, payment, AI, or integration providers. Third-party products may have separate terms. We are not responsible for a third-party product chosen, controlled, or separately contracted by the Customer, but we remain responsible for our obligations when a provider processes Personal Data for us.</p>

                            <h3 className="font-semibold text-[#0B1220]">Intellectual property and feedback</h3>
                            <p>AdunniTrak and its licensors own the Services, software, user interface, documentation, templates, workflows, trademarks, and related intellectual property. These Terms grant only a limited, non-exclusive, non-transferable right to use the Services during the subscription term. Customer Data remains subject to the Data Ownership and Use Policy. If a user voluntarily provides product feedback, we may use it without restriction or payment, provided we do not identify the Customer publicly without permission.</p>

                            <h3 className="font-semibold text-[#0B1220]">Confidentiality</h3>
                            <p>Each party must protect the other party’s non-public business, technical, security, pricing, and operational information using reasonable care and may use it only for the relationship. This duty does not cover information that is public without breach, already lawfully known, independently developed, or lawfully obtained from another source. A party compelled to disclose confidential information will give notice where legally permitted and disclose only what is required.</p>

                            <h3 className="font-semibold text-[#0B1220]">Warranties disclaimers and liability</h3>
                            <p>We will provide the Services with reasonable care and skill. Except for an express commitment in an Order Form and to the fullest extent permitted by law, the Services are provided “as is” and “as available,” without implied warranties of uninterrupted operation, fitness for a particular purpose, or error-free results.</p>
                            <p className="font-semibold">To the fullest extent permitted by law, neither party is liable for indirect, incidental, special, exemplary, or consequential damages, or for lost profits, revenue, production, goodwill, or anticipated savings. Our aggregate liability arising from the Services will not exceed the fees paid or payable for the affected Services during the twelve months before the event giving rise to the claim. This limit does not apply where liability cannot lawfully be limited, or to fraud, wilful misconduct, breach of confidentiality, infringement by a party, or payment obligations. An Order Form may state different limits.</p>

                            <h3 className="font-semibold text-[#0B1220]">Indemnity</h3>
                            <p>The Customer will defend and indemnify AdunniTrak against third-party claims arising from unlawful Customer Data, the Customer’s material breach of these Terms, or use of the Services in violation of law or another person’s rights. We will promptly notify the Customer, provide reasonable cooperation, and allow the Customer to control the defence, provided no settlement admits our fault or imposes a non-monetary obligation on us without consent.</p>

                            <h3 className="font-semibold text-[#0B1220]">Governing law and disputes</h3>
                            <p>If your contracting entity is AdunniTrak Solutions Inc., these terms are governed by the laws of Ontario and the federal laws of Canada applicable there, and the courts of Ontario have exclusive jurisdiction, except where applicable law requires otherwise. If your contracting entity is AdunniTrak Solutions Nigeria Limited, these terms are governed by the laws of the Federal Republic of Nigeria, and the courts with jurisdiction in the Federal Capital Territory, Abuja, have exclusive jurisdiction, except where applicable law requires otherwise.</p>
                        </div>
                    </section>

                    {/* 3. BILLING AND SUBSCRIPTION */}
                    <section id="billing-policy">
                        <h2 className="font-bold text-[24px] text-[#0B1220] mb-4 border-b pb-2">2. Billing and Subscription Policy</h2>
                        <div className="space-y-4">
                            <p>Customers in Nigeria will ordinarily be invoiced in Nigerian naira. Customers in Canada will ordinarily be invoiced in Canadian dollars. Other international Customers will ordinarily be invoiced in United States dollars. The applicable quotation or Order Form may specify another currency. The Customer must pay the invoiced amount by the due date and is responsible for applicable GST, HST, VAT, withholding, sales, or similar taxes, excluding taxes on our net income.</p>
                            <p><strong>Billing and authorization:</strong> Recurring payments are processed securely via third-party PCI-DSS compliant providers (Stripe for global, Paystack for Nigeria). AdunniTrak does not store payment card details; they are tokenized directly by the provider. By providing a payment method, the Customer authorizes charges for recurring fees, approved usage, taxes, and agreed services.</p>
                            <p>Monthly subscriptions renew automatically each month until cancelled. Annual subscriptions renew automatically for successive one-year periods unless either party gives at least 30 days’ written notice before the renewal date.</p>
                            <p>Overdue undisputed amounts may accrue interest at the lower of 1.5 percent per month and the maximum lawful rate. We may suspend paid Services after giving written notice and at least 10 calendar days to settle the overdue amount.</p>
                        </div>
                    </section>

                    {/* 4. REFUND AND CANCELLATION */}
                    <section id="refund-policy">
                        <h2 className="font-bold text-[24px] text-[#0B1220] mb-4 border-b pb-2">3. Refund and Cancellation Policy</h2>
                        <div className="space-y-4">
                            <p>The Customer may cancel through the available account-management feature or by emailing info@adunnitrak.com. AdunniTrak will confirm receipt. Removing users, stopping use, or deleting an app does not cancel a subscription.</p>
                            <p>A monthly cancellation takes effect at the end of the current paid billing period. Partial-month refunds are not provided, except where required by law. Cancellation of an annual subscription prevents the next renewal but does not normally terminate or refund the current annual commitment, except where required by applicable law.</p>
                            <p><strong>Non-refundable items:</strong> Completed or substantially completed services, subscription time already provided, approved third-party or travel costs, custom development, promotional credits, and charges caused by the Customer’s failure to cancel.</p>
                            <p>Customer login access will ordinarily end when the subscription terminates. The Customer may request an export of Customer Data by emailing info@adunnitrak.com within 30 calendar days after termination.</p>
                        </div>
                    </section>

                    {/* 6. ACCEPTABLE USE */}
                    <section id="acceptable-use">
                        <h2 className="font-bold text-[24px] text-[#0B1220] mb-4 border-b pb-2">4. Acceptable Use Policy</h2>
                        <div className="space-y-4">
                            <p>The Services may be used only for legitimate and authorized industrial, operational, maintenance, reliability, inventory, reporting, administrative, and related business purposes. You must not:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access or attempt to access an account, system, environment, or data without authorization.</li>
                                <li>Bypass authentication, permissions, rate limits, security controls, or technical restrictions.</li>
                                <li>Introduce malware, destructive code, excessive traffic, denial-of-service activity, or material that interferes with the Services.</li>
                                <li>Upload false, fraudulent, defamatory, discriminatory, abusive, unlawful, infringing, or malicious content.</li>
                                <li>Copy, resell, sublicence, reverse engineer, or create a competing product from protected elements of the Services.</li>
                                <li>Use Adunni AI to create deceptive records, bypass safety controls, make solely automated high-impact decisions, or generate instructions intended to cause harm.</li>
                            </ul>
                            <p>We enforce this policy via account suspension, role restriction, rate limiting, malware scanning, and audit logging. We may investigate suspected violations and preserve relevant logs. Serious security threats, unlawful conduct, or imminent harm may require immediate action.</p>
                        </div>
                    </section>

                    {/* 7. DATA SECURITY */}
                    <section id="data-security">
                        <h2 className="font-bold text-[24px] text-[#0B1220] mb-4 border-b pb-2">5. Data Security and Protection Policy</h2>
                        <div className="space-y-4">
                            <p>Our security program is designed to preserve confidentiality, integrity, availability, accountability, and recoverability. Technical safeguards include:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Authentication (JWT) and strict role-based authorization (RBAC).</li>
                                <li>Encryption in transit using TLS 1.2+ and encryption at rest (AES-256).</li>
                                <li>Logical separation of customer environments to prevent tenant data bleed.</li>
                                <li>Security logging, monitoring (via Datadog/CloudWatch), and automated backups.</li>
                            </ul>
                            <p>Customers must assign least-privilege access, protect credentials, remove former users promptly, and maintain independent operational safeguards. We assess suspected security events, contain and remediate confirmed incidents, isolate affected tenants, and communicate as required by law and contract within 48 hours.</p>
                            <p>Daily encrypted snapshots of databases are stored in redundant availability zones with a 90-day retention period. Backups reduce but do not eliminate risk and are not a substitute for Customer exports.</p>
                        </div>
                    </section>

                    {/* 8. DATA OWNERSHIP */}
                    <section id="data-ownership">
                        <h2 className="font-bold text-[24px] text-[#0B1220] mb-4 border-b pb-2">6. Data Ownership and Use Policy</h2>
                        <div className="space-y-4">
                            <p>As between the Customer and AdunniTrak, the Customer retains its rights in Customer Data. The Customer grants AdunniTrak and approved providers a limited, non-exclusive right to host, copy, process, transmit, display, back up, and otherwise use Customer Data only as necessary to provide, secure, support, and improve the contracted Services.</p>
                            <p>AdunniTrak and its licensors retain all rights in the platform, software, schemas, general workflows, dashboards, documentation, branding, and models. Authorized AdunniTrak tier-3 engineering personnel may access Customer Data only when necessary for support, security, reliability, or legal compliance, via MFA-protected VPNs with full audit logging.</p>
                            <p>We may create and use statistics or datasets that are aggregated or de-identified so that they do not reasonably identify an individual, Customer, or facility. We do not use identifiable Customer Data to train a general-purpose model for other customers without express written permission.</p>
                            <p>The Customer may request a manual export of Customer Data (CSV, Excel, PDF, or ZIP) by emailing info@adunnitrak.com within 30 calendar days after termination. If the Customer does not request an export within the 30-day period, AdunniTrak may cryptographically shred, delete, or de-identify Customer Data from active systems.</p>
                        </div>
                    </section>

                    {/* 9. SERVICE AVAILABILITY */}
                    <section id="service-availability">
                        <h2 className="font-bold text-[24px] text-[#0B1220] mb-4 border-b pb-2">7. Service Availability Statement</h2>
                        <div className="space-y-4">
                            <p>We use commercially reasonable efforts to operate the Services reliably. Availability can be affected by maintenance, internet conditions, Customer systems, force majeure, and other circumstances. Uptime, error rates, and capacity are continuously monitored using automated cloud tools.</p>
                            <p>Where planned maintenance is expected to materially affect access, we will seek to provide 48 hours' reasonable notice through email or in-app communication. The Customer must maintain supported devices, connectivity, internal procedures, and business-continuity arrangements. AdunniTrak is not a substitute for emergency communication or offline procedures needed to operate safely during an interruption.</p>
                        </div>
                    </section>

                    {/* 10. IMAGE UPLOAD */}
                    <section id="image-upload">
                        <h2 className="font-bold text-[24px] text-[#0B1220] mb-4 border-b pb-2">8. Image Incident and File Upload Policy</h2>
                        <div className="space-y-4">
                            <p>Authorized Users may upload files reasonably necessary for equipment condition reporting, inspections, downtime, maintenance, work orders, shift handover, and incident documentation. Uploaded files (JPG, PNG, PDF, MP4) are stored in secure cloud buckets with AES-256 encryption.</p>
                            <p>Users should avoid capturing faces, identification cards, medical details, trade secrets, or other unnecessary Personal Data. Images and recordings must not be made where prohibited or where doing so would create a safety risk.</p>
                            <p>Prohibited files include malware, executable payloads, unlawful/defamatory material, and fabricated or AI-generated evidence presented as an authentic operational record. All uploads are automatically scanned for malware. We may quarantine, restrict, or remove a file that appears malicious or contrary to policy.</p>
                            <p>Customers should maintain independent copies of evidence that must be preserved for legal, safety, insurance, or regulatory purposes. The Services must not be the sole repository where law or risk requires another recordkeeping method.</p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}