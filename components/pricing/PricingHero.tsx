import Image from "next/image";
import Link from "next/link";

export default function PricingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071A33] min-h-[600px] flex items-center">

      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pricing-hero-bg.jpg" // Ensure you have this image in your public folder
          alt="Industrial power plant at sunset"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Horizontal gradient for text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A33]/95 via-[#071A33]/70 to-transparent" />
        {/* Vertical gradient to anchor the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#3FC3EE] font-inter">
              Pricing built around your operation
            </p>

            <h1 className="mt-4 font-inter font-extrabold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-white max-w-[600px]">
              Start with operations. Scale into intelligence.
            </h1>

            <p className="mt-6 text-[16px] md:text-[18px] leading-[28px] font-normal text-[#D4D4D4] font-inter max-w-[580px]">
              Choose the level of operational visibility, maintenance control and reliability
              intelligence your facility needs today. Three clear plans, with room to expand as
              your requirements grow.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#compare-plans"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#0F58F5] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#093593]"
              >
                Compare Plan
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[8px] border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book a pricing consultation
              </Link>
            </div>

            {/* Microcopy below buttons */}
            <p className="mt-6 text-[13px] leading-[20px] font-normal text-[#A0ABBA] font-inter max-w-[500px]">
              Clear plans. Site-based pricing. Implementation configured around your operation.
            </p>
          </div>

          {/* Right Column: Plan Progression Card (4 cols) */}
          <div className="lg:col-span-4 lg:col-start-9 w-full flex justify-end">
            <div className="w-full max-w-[420px] rounded-[16px] bg-[#16274D]/90 backdrop-blur-md border border-white/10 p-6 lg:p-8 shadow-2xl">

              <p className="text-[13px] leading-[16px] font-semibold text-[#3FC3EE] mb-6 font-inter">
                Plan progression
              </p>

              <div className="flex flex-col gap-6">

                {/* Plan 1 */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full bg-[#0F58F5] flex items-center justify-center text-[14px] font-bold text-white shadow-sm">
                    1
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-white font-inter leading-tight">
                      Starter
                    </span>
                    <span className="text-[13px] text-[#A0ABBA] font-inter mt-1">
                      Daily operations
                    </span>
                  </div>
                </div>

                {/* Plan 2 */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full bg-[#0F58F5] flex items-center justify-center text-[14px] font-bold text-white shadow-sm">
                    2
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-white font-inter leading-tight">
                      Growth
                    </span>
                    <span className="text-[13px] text-[#A0ABBA] font-inter mt-1">
                      Operations + maintenance
                    </span>
                  </div>
                </div>

                {/* Plan 3 */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full bg-[#0F58F5] flex items-center justify-center text-[14px] font-bold text-white shadow-sm">
                    3
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-white font-inter leading-tight">
                      Enterprise
                    </span>
                    <span className="text-[13px] text-[#A0ABBA] font-inter mt-1">
                      Reliability + plant intelligence
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}