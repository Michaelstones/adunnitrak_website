
import Image from "next/image";
import Link from "next/link";

export const ContactHeroSection = () => {
  return (
    <section className="relative w-full h-[382px] flex items-center bg-navy-900 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/contact_hero_bg.jpg"
        alt="Contact Us Background"
        fill
        className="object-cover opacity-60 mix-blend-overlay"
        priority
      />

      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 relative z-10 flex flex-col">
        <div className="max-w-[862px]">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Discuss your operational requirements
          </span>

          <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold tracking-[-0.02em] mb-4">
            Tell us about your facility, workflows and priorities
          </h1>

          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/80 max-w-[646px]">
            Share a few details about your operation and current systems, and a member of our team will follow up to discuss how AdunniTrak can be configured around your requirements. Prefer a live walkthrough instead?{" "}
            <Link href="/demo" className="text-[#3FC3EE] hover:underline">
              Book a demo
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};