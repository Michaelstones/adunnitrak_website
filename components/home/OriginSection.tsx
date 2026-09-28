"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";

export default function OriginSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Dummy video URL for testing - replace with your actual video source later
  const dummyVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  return (
    <>
      <section className="bg-[#EEF1F6] py-16 lg:py-24 px-6 lg:px-[24px]">
        <div className="max-w-[1302px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left — Image with Video Trigger */}
            <FadeIn className="w-full">
              <div 
                className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-sm group cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <Image
                  src="/images/plant-floor-portrait.jpg" // Replace with actual thumbnail path
                  alt="Agboola Shonekan on the plant floor"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={95}
                />
                
                {/* Image Gradient & Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-[#0B1220]/20 to-transparent transition-colors duration-300 group-hover:bg-[#0B1220]/40 z-10" />
                
                {/* Play Button */}
                <div className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm group-hover:bg-[#0F58F5] group-hover:border-transparent transition-all z-20 shadow-lg">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-5 left-6 z-20">
                  <p className="text-white/90 font-inter text-[12px] tracking-[0.02em]">
                    Agboola Shonekan, plant-floor portrait
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right — Text Content */}
            <div className="flex flex-col">
              <SlideUp>
                <span className="font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase text-[#0F58F5] mb-3 block">
                  Our origin
                </span>
                
                <h2 className="font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] text-[#0B1220] mb-6">
                  Born on the plant floor
                </h2>
                
                {/* Replaced with the opening hook of the actual story */}
                <div className="flex flex-col gap-5 mb-8">
                  <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-[#5B6472]">
                    AdunniTrak began with a problem experienced firsthand during an early morning shift. On 1 July 2024, Agboola Adio Shonekan arrived for a 5:30 a.m. shift at an industrial facility in London, Ontario. He had joined less than three months earlier and was still learning the operation.
                  </p>
                  <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-[#5B6472]">
                    During the morning preparation talk, the incoming crew reviewed the previous shift’s handwritten handover notes. The writing was difficult to read, and the instructions about an unresolved issue were unclear. The team tried to piece together what had happened, but could not resolve the issue until the facility manager arrived.
                  </p>
                </div>

                {/* Blockquote Section */}
                <div className="border-l-[3px] border-[#0F58F5] pl-6 py-1 mb-8">
                  <p className="font-inter font-bold text-[15px] md:text-[16px] leading-[26px] text-[#0B1220] mb-3">
                    Industrial technology should adapt to the way organisations operate — not require organisations to adapt to the technology.
                  </p>
                  <p className="font-inter font-normal text-[12px] md:text-[13px] leading-[20px] text-[#7C8798]">
                    Agboola Adio Shonekan, C.Tech. · Founder and Chief Executive Officer
                  </p>
                </div>

                {/* CTA Link */}
                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 font-inter font-semibold text-[14px] md:text-[15px] leading-[22px] text-[#0F58F5] hover:text-[#093593] transition-colors group"
                  >
                    Read Our Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </Link>
                </div>
              </SlideUp>
            </div>
            
          </div>
        </div>
      </section>

      {/* ─── Video Player Modal ─── */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#031231]/90 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Background Click Overlay */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setIsVideoOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-5xl bg-black rounded-[16px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 z-10">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-30 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <video 
                src={dummyVideoUrl} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full outline-none"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}