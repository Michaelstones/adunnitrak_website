"use client";

import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";

/* ─── Types & Data ─────────────────────────────────────────────── */
interface VideoData {
  category: string;
  title: string;
  duration: string;
  videoUrl: string;
  posterUrl?: string;
}

const VIDEOS: VideoData[] = [
  {
    category: "Operational discussion",
    title: "Why operational information becomes disconnected",
    duration: "Duration to be confirmed",
    videoUrl: "https://videotourl.com/videos/1791212456716-28898b34-20e1-4962-9fb2-b49ab5d804a4.mp4", // Dummy video
  },
  {
    category: "Adunni AI",
    title: "Connected platform overview",
    duration: "Duration to be confirmed",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Dummy video
  },
  {
    category: "Workflow walkthrough",
    title: "From downtime event to maintenance and reliability action",
    duration: "Duration to be confirmed",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Dummy video
  },
  {
    category: "Adunni AI",
    title: "How Adunni AI uses approved operational context",
    duration: "Duration to be confirmed",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Dummy video
  },
];

/* ─── Component ──────────────────────────────────────────── */
export function WatchAndLearn() {
  const [activeVideo, setActiveVideo] = useState<VideoData | null>(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  return (
    <>
      <section id="operational-walkthrough" className="py-16 lg:py-24 bg-[#EEF1F6]">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">

          {/* Header Block */}
          <SlideUp>
            <div className="mb-12 max-w-[800px]">
              <span className="text-[#0F58F5] font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase mb-3 block">
                Watch and learn
              </span>
              <h2 className="text-[#0B1220] font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] mb-4">
                Operational discussions and platform walkthroughs
              </h2>
              <p className="text-[#5B6472] font-inter text-[14px] md:text-[15px] leading-[24px]">
                Practical discussions, workflow explanations and product walkthroughs showing how connected operational information moves across teams and modules.
              </p>
            </div>
          </SlideUp>

          {/* Cards Grid */}
          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VIDEOS.map((video, index) => (
                <StaggerItem key={index}>
                  <article
                    onClick={() => setActiveVideo(video)}
                    className="group flex flex-col h-full bg-white border border-[#E2E6ED] rounded-[16px] p-4 hover:border-[#0F58F5]/30 hover:shadow-md transition-all cursor-pointer"
                  >

                    {/* Video Element & Thumbnail Overlay (Silent Preview) */}
                    <div className="relative aspect-[16/9] w-full bg-[#E2E6ED] rounded-[8px] overflow-hidden mb-5">

                      <video
                        src={video.videoUrl}
                        poster={video.posterUrl}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                      />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors z-10">
                        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-[#0F58F5] group-hover:border-transparent transition-all shadow-sm">
                          <Play className="w-5 h-5 text-white ml-1 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow px-1">
                      <span className="text-[#7C8798] font-inter font-medium text-[12px] leading-[16px] mb-2 block">
                        {video.category}
                      </span>

                      <h3 className="text-[#0B1220] font-inter font-bold text-[16px] leading-[24px] tracking-[-0.01em] mb-4 flex-grow group-hover:text-[#0F58F5] transition-colors">
                        {video.title}
                      </h3>

                      <div className="text-[#A0ABBA] font-inter text-[12px] leading-[18px]">
                        {video.duration}
                      </div>
                    </div>

                  </article>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#031231]/90 backdrop-blur-sm animate-in fade-in duration-200">

          {/* Modal Background Click Area */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setActiveVideo(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-5xl bg-black rounded-[16px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 z-10">

            {/* Header / Title Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-20 pointer-events-none">
              <h3 className="text-white font-inter font-medium text-[15px] truncate pr-4 drop-shadow-md">
                {activeVideo.title}
              </h3>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-30 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors cursor-pointer pointer-events-auto"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Active Video Player with Controls */}
            <div className="aspect-video w-full">
              <video
                src={activeVideo.videoUrl}
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