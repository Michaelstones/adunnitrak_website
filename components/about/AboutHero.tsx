import Image from "next/image";
import Link from "next/link";
import { StaggerContainer } from "../animations/StaggerContainer";
import { StaggerItem } from "../animations/StaggerItem";
import { FadeIn } from "../animations/FadeIn";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#031231] min-h-[646px] flex items-center">
      {/* Background image & gradient - Overflow hidden applied HERE so foreground can bleed */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/about-hero-bg.png"
          alt="About AdunniTrak background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(113deg, rgba(3,18,49,0.97) 37%, rgba(9,3,63,0.63) 49%)",
          }}
        />
      </div>

      {/* Main Content Container (Flex Layout to allow absolute positioning on the right) */}
      <StaggerContainer className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between h-full">

        {/* Left Content (Text) */}
        <div className="flex flex-col w-full lg:w-[55%] lg:max-w-[620px] pt-16 lg:pt-24 pb-12 lg:pb-24 justify-center">
          {/* Overline */}
          <StaggerItem>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] font-bold tracking-[0.02em] uppercase text-[#8890A3] font-inter">
                Company
              </span>
              <span className="w-1 h-1 rounded-full bg-[#17A9DB]" />
              <span className="text-[12px] font-bold tracking-[0.02em] uppercase text-[#17A9DB] font-inter">
                About us
              </span>
            </div>
          </StaggerItem>

          {/* H1 */}
          <StaggerItem>
            <h1 className="text-white font-inter font-extrabold text-[40px] md:text-[56px] leading-[44px] md:leading-[64px] tracking-[-0.02em]">
              Industrial intelligence, built for operations that cannot afford to fail
            </h1>
          </StaggerItem>

          {/* Body paragraphs */}
          <StaggerItem>
            <p className="mt-[24px] text-[16px] leading-[26px] font-normal text-white/80 font-inter">
              AdunniTrak is an AI-powered operational intelligence platform connecting
              operations, maintenance, reliability, inventory and workforce — configured
              around each client's requirements, workflows, equipment structure and
              operational terminology.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-[16px] text-[16px] leading-[26px] font-normal text-white/80 font-inter">
              We partner with industrial organisations to eliminate the gap between data
              and decision — turning operational activity into clarity, compliance and
              continuous improvement.
            </p>
          </StaggerItem>

          {/* CTA Buttons */}
          <StaggerItem>
            <div className="mt-[48px] flex flex-col sm:flex-row items-center gap-[16px]">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[52px] px-[24px] rounded-[8px] bg-[#093593] text-white font-inter font-bold text-[16px] transition-all hover:bg-[#072a75] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-lg"
              >
                Book a Demo
              </Link>
              <Link
                href="/platform"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[52px] px-[24px] rounded-[8px] border-[1.5px] border-white/20 text-white font-inter font-semibold text-[16px] transition-all hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg"
              >
                Explore the Platform
              </Link>
            </div>
          </StaggerItem>
        </div>

        {/* Right Asset (Image Box) - Anchored flush to the bottom, allowed to bleed downward */}
        <FadeIn className="w-full relative lg:absolute lg:-bottom-[20px] lg:right-5 xl:right-0 lg:w-[45%] h-[400px] sm:h-[500px] lg:h-[95%] mt-8 lg:mt-0 flex items-end justify-center lg:justify-end z-10 pointer-events-none" delay={0.4}>
          <div className="relative w-full max-w-[600px] h-full pointer-events-auto">
            <Image
              src="/images/about-hero-portrait-6a1753.png"
              alt="AdunniTrak team portrait"
              fill
              className="object-cover lg:object-contain object-bottom lg:object-right-bottom rounded-t-xl lg:rounded-none"
              priority
              quality={100}
            />
            {/* Subtle fade left edge into gradient (Restored to blend smoothly) */}
            <div
              className="absolute inset-0 hidden lg:block pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(3,18,49,1) 0%, rgba(3,18,49,0) 15%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        </FadeIn>

      </StaggerContainer>
    </section>
  );
}