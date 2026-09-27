import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function OriginSection() {
  return (
    <section className="bg-[#EAEEF6] py-16 md:py-24">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — play pic, spans 5/12 */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden group cursor-pointer shadow-lg">
              <Image
                src="/images/portrait-4f4ef8.png"
                alt="Agboola Adio Shonekan — plant floor portrait"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              {/* Play button */}
              <button className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/30 transition-colors z-10">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </button>
            </div>
          </div>

          {/* Right — text content, spans 6/12 starting col 7 */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
            <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.0625em] uppercase text-[#0F58F5]">
              Our origin
            </span>
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0B1220]">
              Born on the plant floor
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72]">
              AdunniTrak began with a challenge observed firsthand in an operating industrial plant. Critical information about production, equipment conditions, maintenance activities and unresolved issues was frequently transferred through verbal handovers, handwritten notes and disconnected spreadsheets.
            </p>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72]">
              Agboola Adio Shonekan, C.Tech., recognised that the problem was larger than replacing paper. Industrial teams needed a connected system that could preserve operational context, coordinate related workflows and make reliable information available to the right people at the right time.
            </p>
            <Link
              href="/about"
              className="font-sans font-semibold text-[14px] leading-[22px] text-[#1656e8] hover:underline w-fit"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
