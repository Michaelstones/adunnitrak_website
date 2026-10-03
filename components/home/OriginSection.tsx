"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Play, X, BookOpen } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";

export default function OriginSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  
  // Dummy video URL for testing - replace with your actual video source later
  const dummyVideoUrl = "https://www.image2url.com/r2/default/videos/1791058465818-eee535da-5a2b-4341-add7-469281736eea.mp4";

  // Lock background scroll when either modal is open
  useEffect(() => {
    if (isVideoOpen || isStoryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen, isStoryOpen]);

  return (
    <>
      <section className="bg-[#EEF1F6] py-16 lg:py-24 px-6 lg:px-[24px]">
        <div className="max-w-[1302px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left — Video Frame Thumbnail Trigger */}
            <FadeIn className="w-full">
              <div 
                className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-sm group cursor-pointer bg-black"
                onClick={() => setIsVideoOpen(true)}
              >
                <video
                  src={`${dummyVideoUrl}#t=0.1`}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                    Agboola Shonekan
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

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => setIsStoryOpen(true)}
                    className="inline-flex items-center gap-2 font-inter font-semibold text-[14px] md:text-[15px] leading-[22px] text-[#0F58F5] hover:text-[#093593] transition-colors group cursor-pointer"
                  >
                    Read Our Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </button>
                </div>
              </SlideUp>
            </div>
            
          </div>
        </div>
      </section>

      {/* ─── Video Player Modal ─── */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#031231]/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsVideoOpen(false)} />
          <div className="relative w-full max-w-5xl bg-black rounded-[16px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 z-10">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-30 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <video src={dummyVideoUrl} controls autoPlay playsInline className="w-full h-full outline-none">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* ─── Story Pop-over Modal ─── */}
      {isStoryOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-[#0B1220]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsStoryOpen(false)} />
          
          <div className="relative w-full max-w-[800px] max-h-[90vh] bg-white rounded-[20px] shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 duration-300 z-10">
            
            {/* Header / Top Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E8F0] shrink-0">
              <div className="flex items-center gap-3 text-[#0F58F5]">
                <BookOpen className="w-5 h-5" />
                <span className="font-bold text-[15px]">AdunniTrak Origin</span>
              </div>
              <button 
                onClick={() => setIsStoryOpen(false)}
                className="p-2 rounded-full hover:bg-[#F1F5F9] text-[#5B6472] hover:text-[#0B1220] transition-colors cursor-pointer"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Story Content */}
            <div className="p-6 md:p-10 overflow-y-auto">
              <h3 className="font-extrabold text-[28px] md:text-[36px] text-[#0B1220] mb-8 leading-[1.2] tracking-[-0.01em]">
                Our Story
              </h3>

              <section className="mb-10">
                <h4 className="font-bold text-[18px] text-[#0B1220] mb-4">
                  The 5:30 A.M. Shift That Built a Platform
                </h4>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  AdunniTrak began with a problem experienced firsthand during an early morning shift. On 1 July 2024, Agboola Adio Shonekan arrived for a 5:30 a.m. shift at an industrial facility in London, Ontario. He had joined less than three months earlier and was still learning the operation.
                </p>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  During the morning preparation talk, the incoming crew reviewed the previous shift’s handwritten handover notes. The writing was difficult to read, and the instructions about an unresolved issue were unclear. The team tried to piece together what had happened, but could not resolve the issue until the facility manager arrived. Operations did not begin until around 8:30 a.m., about two and a half hours of unnecessary downtime after the normal preparation period.
                </p>
                <p className="text-[15px] leading-[26px] text-[#0F58F5] font-medium border-l-2 border-[#0F58F5] pl-4 italic">
                  For Agboola, the question was simple: why should an incoming team have to guess what the previous shift meant?
                </p>
              </section>

              <section className="mb-10">
                <h4 className="font-bold text-[18px] text-[#0B1220] mb-4">
                  Starting with a Better Handover
                </h4>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  Agboola was new to the facility and nervous about suggesting a change. But he knew enough Excel to believe he could create a clearer, more consistent handover document. Later that day, he approached the facility manager and offered to put something together. The response was cautious, but Agboola began developing the idea.
                </p>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  He researched the problem and built a structured digital handover. At first, his goal was to replace unclear handwritten notes with information the next shift could readily understand.
                </p>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  As he worked, he realised that a useful handover depended on more than the final note. It needed the context of the shift itself: production activity, equipment conditions, downtime, maintenance work, and issues still awaiting action. Those records were connected, even when they were kept in different places.
                </p>
                <p className="text-[15px] leading-[26px] text-[#5B6472]">
                  That insight changed the scope of the idea. Agboola began envisioning a system that could preserve operational history and help different teams work from the same information.
                </p>
              </section>

              <section className="mb-10">
                <h4 className="font-bold text-[18px] text-[#0B1220] mb-4">
                  Pursuing the Idea Independently
                </h4>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  Agboola submitted the first version for review. For about three months, he received no clear response, but continued researching and developing the solution as he learned more about the operation. The system was never formally adopted at the facility.
                </p>
                <p className="text-[15px] leading-[26px] text-[#5B6472]">
                  That lack of internal support did not mark the end of the project. It gave Agboola the clarity to pursue AdunniTrak independently and take the idea beyond one workplace. The handover problem he had witnessed was part of a wider challenge faced by industrial organisations: important information was being recorded, but the people who needed it did not always have a complete, connected view.
                </p>
              </section>

              <section className="mb-12">
                <h4 className="font-bold text-[18px] text-[#0B1220] mb-4">
                  From One Shift to a Connected Platform
                </h4>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  The solution was officially named AdunniTrak on 1 October 2024. Its development continued beyond shift handovers to include structured workflows, reporting, and broader operational coverage.
                </p>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  The challenges Agboola observed also formed the basis of his technical report, <em className="text-[#0B1220]">Optimizing Wash Plant Operations: An Integrated Production Tracking & Shift Communication System</em>. The report was accepted by the Ontario Association of Certified Engineering Technicians and Technologists (OACETT), and Agboola received his Certified Engineering Technician designation in 2026.
                </p>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  AdunniTrak continued to evolve from spreadsheets and structured digital forms into a cloud-based platform connecting operations, maintenance, reliability, inventory, and reporting. Adunni AI was later introduced to help authorised teams find relevant operational knowledge, examine incident history, and prepare analyses and reports from the information available to them.
                </p>
                <p className="text-[15px] leading-[26px] text-[#5B6472] mb-4">
                  Today, AdunniTrak is an independent company with entities in Canada and Nigeria. Its team has visited Ajaokuta Steel Company Limited and is configuring the platform around Ajaokuta’s operational requirements. This work reflects the principle that has guided AdunniTrak since its beginning: industrial technology should fit an organisation’s equipment, workflows, and people.
                </p>
                <p className="text-[15px] leading-[26px] text-[#0F58F5] font-medium">
                  A difficult handover during a 5:30 a.m. shift started the journey. What grew from it is a platform designed to help industrial teams capture what happened, understand what needs attention, and carry that knowledge forward.
                </p>
              </section>

              {/* Timeline Container */}
              <div className="bg-[#F8FAFC] rounded-[16px] p-6 md:p-8 border border-[#E2E8F0]">
                <h4 className="font-bold text-[18px] text-[#0B1220] mb-6">
                  The Evolution of AdunniTrak
                </h4>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">July 2024 — The catalyst:</strong> An unclear handwritten handover during an early morning shift leads to about two and a half hours of unnecessary downtime and inspires the first solution.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">October 2024 — AdunniTrak is named:</strong> The digital handover initiative receives its identity.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">January 2025 — Development expands:</strong> The work grows beyond handovers to include structured workflows, reporting, and broader operational coverage.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">May 2025 — Operational vision validated:</strong> Industry research and continued operational experience strengthen the vision for a purpose-built operational intelligence platform.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">October 2025 — Cloud-based development:</strong> AdunniTrak is rebuilt using Google AppSheet to support digital data capture and connected workflows.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">March 2026 — A professional milestone:</strong> Agboola receives his Certified Engineering Technician designation following acceptance of his technical report by OACETT.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">April 2026 — A connected platform:</strong> AdunniTrak evolves into an operational intelligence platform connecting operations, maintenance, reliability, inventory, and reporting.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">May 2026 — Canadian incorporation:</strong> AdunniTrak Solutions Inc. is incorporated in Canada.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">June 2026 — Adunni AI is introduced:</strong> AI capabilities are added to help teams work with operational history and knowledge.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F58F5] mt-2 shrink-0 shadow-[0_0_0_4px_#EEF3FF]"></div>
                    <p className="text-[14px] leading-[24px] text-[#5B6472]">
                      <strong className="text-[#0B1220]">September 2026 — Nigerian incorporation and configuration work:</strong> AdunniTrak Solutions Nigeria Limited is incorporated, and the team is configuring AdunniTrak for Ajaokuta Steel Company Limited.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}