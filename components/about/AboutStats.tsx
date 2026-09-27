import Image from "next/image";

export default function AboutNameMeaning() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#EDEFF5]">
      {/* Added max-w-[1280px] to constrain the overall layout properly on ultra-wide screens */}
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8">

        <span className="text-[#0F58F5] font-inter text-[12px] font-bold leading-[16px] tracking-[0.06em] uppercase mb-4 block">
          The meaning behind our name
        </span>

        {/* Balanced 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Heading & Graphic */}
          <div className="flex flex-col items-start w-full">

            <h2 className="text-[#0F1424] font-inter text-[30px] font-extrabold leading-[38px] tracking-[-0.01em] mb-8">
              A name connected to value
            </h2>

            {/* Removed max-w-[400px] and aspect-square. Replaced with responsive heights */}
            <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] flex items-center justify-start">
              <Image
                src="/logoheading.png"
                alt="AdunniTrak Logo Meaning"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Right: Heading + Body */}
          <div className="flex flex-col gap-6 lg:max-w-[560px]">
            <h3 className="font-inter font-extrabold text-[24px] md:text-[28px] leading-[32px] md:leading-[36px] tracking-[-0.01em] text-[#0B1220]">
              A decade of experience. A single-minded focus on operational
              outcomes.
            </h3>

            <div className="flex flex-col gap-4">
              <p className="text-[16px] leading-[26px] font-normal text-[#5B6472] font-inter">
                <span className="text-black font-bold">Adunni </span>is a name rooted in the Yoruba language and cultural tradition. For us, the name represents the idea of bringing value. It reflects our purpose: helping industrial organisations create greater visibility, structure, accountability and intelligence from the operational information generated across their facilities.
              </p>

              <p className="text-[16px] leading-[26px] font-normal text-[#5B6472] font-inter">
                <span className="text-black font-bold">"Trak"</span> reflects the platform's role in capturing and connecting operational activity over time
                from production and downtime to maintenance, reliability, inventory and workforce action.
              </p>

            </div>
            <p className="mt-5 text-[20px] leading-[26px] font-semibold text-[#0F58F5]">
              AdunniTrak — where data meets diligence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}