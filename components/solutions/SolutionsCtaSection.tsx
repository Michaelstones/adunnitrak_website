import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const SolutionsCtaSection = () => {
  return (
    <section className="w-full py-24 bg-[#192F5D] relative overflow-hidden">
      {/* Background Graphic/Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <h2 className="t-h1 text-white mb-6 max-w-2xl">
          Let's build the right operational solution for your plant
        </h2>
        <p className="t-body-lg text-white/70 mb-10 max-w-xl">
          Every industrial operation is different. Let us understand your facility, workflows, equipment structure, terminology and operational priorities.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href="/book-demo" className="btn-primary w-full sm:w-auto group">
            Book a live demo
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="btn-outline-dark w-full sm:w-auto">
            Contact our team
          </button>
        </div>
      </div>
    </section>
  );
};
