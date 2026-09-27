export default function PricingTrustBar() {
  return (
    <section className="bg-white py-16">
      <div className="w-full max-w-[1302px] mx-auto px-5 md:px-8">
        {/* 12-col grid — content in col 2–11 (10 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-10 lg:col-start-2 flex flex-col gap-3">
            {/* Top line */}
            <p
              className="text-[14px] leading-[22px] font-[600]"
              style={{ color: "#0B1220" }}
            >
              Enterprise-grade security and compliance — trusted by industrial
              operations across Africa and beyond.
            </p>

            {/* Sub-line */}
            <p
              className="text-[14px] leading-[22px] font-[400]"
              style={{ color: "#5B6472", maxWidth: "1082px" }}
            >
              All data is encrypted in transit and at rest. AdunniTrak is built
              on industry-standard cloud infrastructure with regional data
              residency options, role-based access controls, and full audit
              logging. Our platform is designed to meet the compliance
              requirements of regulated industries including oil &amp; gas,
              power generation, and manufacturing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
