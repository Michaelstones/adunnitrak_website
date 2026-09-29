import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContributeSidebar() {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-6">
      <FadeIn delay={0.2}>
        <div className="bg-white border border-[#E2E6ED] rounded-[12px] p-6 shadow-sm">
          <h3 className="font-inter font-bold text-[15px] text-[#0B1220] mb-4">
            What happens next
          </h3>
          <ul className="flex flex-col gap-4">
            {[
              "We review your submission for clarity and relevance.",
              "If accepted, we edit for formatting and style.",
              "We send you a final draft for approval.",
              "We publish the insight and notify you."
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-[6px] h-[6px] rounded-full bg-[#0F58F5] mt-2 shrink-0" />
                <span className="text-[#5B6472] font-inter text-[14px] leading-[22px]">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-[#E2E6ED] rounded-[12px] p-6 shadow-sm mt-6">
          <h3 className="font-inter font-bold text-[15px] text-[#0B1220] mb-4">
            Editorial guidelines
          </h3>
          <ul className="flex flex-col gap-3">
            <li><Link href="#" className="text-[#0F58F5] hover:underline font-inter text-[14px]">How to structure an article</Link></li>
            <li><Link href="#" className="text-[#0F58F5] hover:underline font-inter text-[14px]">What makes a good field lesson</Link></li>
            <li><Link href="#" className="text-[#0F58F5] hover:underline font-inter text-[14px]">Image licensing requirements</Link></li>
            <li><Link href="#" className="text-[#0F58F5] hover:underline font-inter text-[14px]">Anonymising plant data</Link></li>
          </ul>
        </div>

        <div className="bg-[#031231] rounded-[12px] p-6 mt-6">
          <h3 className="font-inter font-bold text-[15px] text-white mb-2">
            Need help?
          </h3>
          <p className="text-[#A0ABBA] font-inter text-[13px] leading-[20px] mb-4">
            Not sure if your idea is right for the platform? Send us a brief pitch before you start writing.
          </p>
          <a href="mailto:editor@adunnitrak.com" className="text-[#3FC3EE] font-inter font-semibold text-[14px] hover:underline flex items-center gap-1">
            editor@adunnitrak.com <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </FadeIn>
    </aside>
  );
};