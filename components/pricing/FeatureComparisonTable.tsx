"use client";

/* ─── Types ─────────────────────────────────────────────── */
interface FeatureRow {
  capability: string;
  starter: string;
  growth: string;
  enterprise: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const FEATURES: FeatureRow[] = [
  {
    capability: "Daily operations and shift records",
    starter: "Included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "Production and feed-plan tracking",
    starter: "Included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "Downtime and incident reporting",
    starter: "Included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "Shift handover",
    starter: "Included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "Picture reporting",
    starter: "Included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "Operational reports and exports",
    starter: "Included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "Corrective maintenance workflows",
    starter: "Not included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "P1–P4 maintenance priorities",
    starter: "Not included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "Work orders",
    starter: "Not included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "Preventive maintenance planning and execution",
    starter: "Not included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    capability: "Equipment access",
    starter: "Operational references",
    growth: "Restricted equipment list",
    enterprise: "Full asset register",
  },
  {
    capability: "Inventory database",
    starter: "Not included",
    growth: "Not included",
    enterprise: "Included",
  },
  {
    capability: "Reliability performance",
    starter: "Not included",
    growth: "Not included",
    enterprise: "Included",
  },
  {
    capability: "Asset reliability analytics",
    starter: "Not included",
    growth: "Not included",
    enterprise: "Included",
  },
  {
    capability: "FMEA live tracker",
    starter: "Not included",
    growth: "Not included",
    enterprise: "Included",
  },
  {
    capability: "FMEA knowledge base",
    starter: "Not included",
    growth: "Not included",
    enterprise: "Included",
  },
  {
    capability: "Executive intelligence",
    starter: "Not included",
    growth: "Not included",
    enterprise: "Included",
  },
  {
    capability: "Multi-site reporting",
    starter: "Not included",
    growth: "Not included",
    enterprise: "Included",
  },
  {
    capability: "Full users included",
    starter: "10",
    growth: "25",
    enterprise: "Defined in proposal",
  },
  {
    capability: "Shared Adunni AI requests per site/month",
    starter: "200",
    growth: "750",
    enterprise: "Defined in proposal",
  },
  {
    capability: "Support",
    starter: "Remote support",
    growth: "Priority remote support",
    enterprise: "Enterprise support structure",
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default function FeatureComparisonTable() {
  return (
    <section className="bg-[#EEF1F6] py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Section heading */}
        <div className="flex flex-col max-w-[800px]">
          <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
            Compare Plans
          </p>
          <h2 className="mt-3 font-inter font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-[#0B1220]">
            See what each plan supports
          </h2>
          <p className="mt-4 text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
            "Not included" means the capability is not available within that
            subscription level. It may become available when the organisation
            upgrades to the applicable plan.
          </p>
        </div>

        {/* Table Container (Allows horizontal scroll on mobile) */}
        <div className="mt-12 overflow-x-auto rounded-[12px] shadow-sm bg-white border border-[#E2E6ED]">
          <div className="min-w-[900px]">

            {/* Table header */}
            <div className="grid grid-cols-12 bg-[#050F1E] text-white rounded-t-[12px]">
              <div className="col-span-3 px-6 py-4 flex items-center">
                <span className="text-[14px] font-bold font-inter">Capability</span>
              </div>
              <div className="col-span-3 px-6 py-4 flex items-center">
                <span className="text-[14px] font-bold font-inter">Starter</span>
              </div>
              <div className="col-span-3 px-6 py-4 flex items-center">
                <span className="text-[14px] font-bold font-inter">Growth</span>
              </div>
              <div className="col-span-3 px-6 py-4 flex items-center">
                <span className="text-[14px] font-bold font-inter">Enterprise</span>
              </div>
            </div>

            {/* Feature rows */}
            <div className="flex flex-col">
              {FEATURES.map((row, index) => (
                <div
                  key={row.capability}
                  className={`grid grid-cols-12 ${index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                    }`}
                >
                  <div className="col-span-3 px-6 py-4 flex items-center border-r border-[#ECEDEE]/50">
                    <span className="text-[13px] font-medium text-[#0B1220] font-inter">
                      {row.capability}
                    </span>
                  </div>
                  <div className="col-span-3 px-6 py-4 flex items-center border-r border-[#ECEDEE]/50">
                    <span
                      className={`text-[13px] font-inter ${row.starter === "Not included"
                          ? "text-[#A0ABBA]"
                          : "text-[#5B6472]"
                        }`}
                    >
                      {row.starter}
                    </span>
                  </div>
                  <div className="col-span-3 px-6 py-4 flex items-center border-r border-[#ECEDEE]/50">
                    <span
                      className={`text-[13px] font-inter ${row.growth === "Not included"
                          ? "text-[#A0ABBA]"
                          : "text-[#5B6472]"
                        }`}
                    >
                      {row.growth}
                    </span>
                  </div>
                  <div className="col-span-3 px-6 py-4 flex items-center">
                    <span
                      className={`text-[13px] font-inter ${row.enterprise === "Not included"
                          ? "text-[#A0ABBA]"
                          : "text-[#5B6472]"
                        }`}
                    >
                      {row.enterprise}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}