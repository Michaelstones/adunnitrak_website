import Link from "next/link";

export default function PricingCTA() {
  return (
    <section
      className="w-full py-24"
      style={{ backgroundColor: "#031231" }}
    >
      <div className="w-full max-w-[1302px] mx-auto px-5 md:px-8">
        {/* Centred content block — matches Figma's 862px centred container */}
        <div className="flex flex-col items-center text-center max-w-[862px] mx-auto gap-0">
          {/* Overline */}
          <p className="text-[12px] leading-[16px] tracking-[0.06em] font-[700] uppercase text-[#17A9DB]">
            Get started
          </p>

          {/* Heading */}
          <h2
            className="mt-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 40px)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            Start with the requirements of your operation
          </h2>

          {/* Body */}
          <p
            className="mt-5 max-w-[640px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Tell us about your facility, users, current workflows and operational
            priorities.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/demo"
              id="pricing-cta-book-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center h-[52px] px-8 rounded-[8px] text-[15px] font-[700] transition-all duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ backgroundColor: "#1656E8", color: "#FFFFFF" }}
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              id="pricing-cta-contact-sales"
              className="w-full sm:w-auto inline-flex items-center justify-center h-[52px] px-8 rounded-[8px] text-[15px] font-[600] transition-all duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                border: "1.5px solid rgba(255,255,255,0.30)",
                color: "#FFFFFF",
              }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
