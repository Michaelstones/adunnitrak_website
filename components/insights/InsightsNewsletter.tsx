"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SlideUp } from "@/components/animations/SlideUp";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export function InsightsNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Simulating network request for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setToastMessage("Successfully subscribed! Welcome to AdunniTrak insights.");
      setEmail("");

      // Auto-hide toast after 4 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Subscription failed:", error);
      setStatus("error");
      setToastMessage("Something went wrong. Please try again.");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <>
      {/* ─── Top Section: Newsletter Split ─── */}
      <section className="py-16 lg:py-24 bg-[#EEF1F6] relative">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <SlideUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: Text Content */}
              <div className="flex flex-col">
                <span className="text-[#0F58F5] font-inter font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase mb-3 block">
                  Stay informed
                </span>
                <h2 className="text-[#0B1220] font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em]">
                  New articles and platform updates in your inbox
                </h2>
              </div>

              {/* Right: Form & Disclaimer */}
              <div className="flex flex-col">
                <form className="flex flex-col sm:flex-row gap-3 mb-4" onSubmit={handleSubmit}>
                  <div className="flex-grow">
                    <label htmlFor="email" className="sr-only">Work email address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      placeholder="Work email address"
                      className="w-full bg-white border border-[#E2E6ED] rounded-[8px] px-4 py-3.5 text-[#0B1220] font-inter text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[#0F58F5]/20 focus:border-[#0F58F5] transition-shadow placeholder:text-[#A0ABBA] shadow-sm disabled:opacity-70"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-8 py-3.5 h-[52px] bg-[#0F58F5] hover:bg-[#093593] text-white font-inter font-semibold text-[15px] rounded-[8px] transition-colors flex-shrink-0 shadow-sm disabled:opacity-70 flex items-center justify-center min-w-[140px]"
                  >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>

                <p className="text-[#7C8798] font-inter text-[12px] leading-[18px]">
                  By subscribing, you agree to receive AdunniTrak communications and acknowledge the <Link href="/privacy" className="text-[#0F58F5] hover:underline">Privacy Policy</Link>. You may unsubscribe at any time.
                </p>
              </div>

            </div>
          </SlideUp>
        </div>
      </section>

      {/* ─── Floating Toast Notification ─── */}
      {(status === "success" || status === "error") && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white border border-[#E2E6ED] shadow-xl rounded-[12px] px-4 py-3.5 animate-in slide-in-from-bottom-5 fade-in duration-300 max-w-[400px]">
          {status === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          )}
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-[#0B1220] font-inter">
              {status === "success" ? "Subscription successful" : "Subscription failed"}
            </span>
            <span className="text-[12px] text-[#5B6472] font-inter">
              {toastMessage}
            </span>
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="ml-auto p-1 text-[#7C8798] hover:text-[#0B1220] transition-colors cursor-pointer"
            aria-label="Close toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}