import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { Article } from "@/app/actions/getArticles"; // Adjust this import path to wherever your Article type lives

interface FeaturedInsightProps {
  article?: Article;
}

export function FeaturedInsight({ article }: FeaturedInsightProps) {
  // If no article is passed or the array is empty, don't render the section
  if (!article) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#F9FAFB]">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image */}
          <div className="w-full order-2 lg:order-1">
            <FadeIn>
              <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-[12px] overflow-hidden bg-[#E2E6ED]">
                <Image
                  src="/images/featured-insight.jpg" // You can replace this with article.imageUrl later when added to Sanity
                  alt="Industrial plant smoke stack against a cloudy sky"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Content */}
          <div className="w-full flex flex-col justify-center order-1 lg:order-2">
            <SlideUp>
              <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
                Featured insight
              </p>

              <h2 className="mt-4 text-[#0B1220] font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] max-w-[540px]">
                {article.title}
              </h2>

              <p className="mt-6 text-[#5B6472] font-inter text-[14px] md:text-[15px] leading-[24px] max-w-[540px]">
                {article.description}
              </p>

              <div className="mt-8 flex flex-col gap-1">
                <span className="text-[#5B6472] font-inter font-medium text-[12px] leading-[18px]">
                  {article.category}
                </span>
                <span className="text-[#7C8798] font-inter text-[12px] leading-[18px]">
                  {article.author} · {article.date}
                </span>
              </div>

              <div className="mt-8">
                <Link
                  href={`/insight/${article.slug}`}
                  className="inline-flex items-center justify-center h-[48px] px-8 bg-[#0F58F5] hover:bg-[#093593] text-white font-inter font-semibold text-[15px] rounded-[8px] transition-colors shadow-sm"
                >
                  Read featured insight
                </Link>
              </div>
            </SlideUp>
          </div>

        </div>
      </div>
    </section>
  );
}