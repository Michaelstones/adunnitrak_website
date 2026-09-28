import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Link2, FileText, Gauge, History, ChevronRight, MailBadge } from "lucide-react";
import insightsData from "@/data/insights.json";
import { InsightsNewsletter } from "@/components/insights/InsightsNewsletter";
import { InsightsCTA } from "@/components/insights/InsightsCTA";
import { ShareButtons } from "@/components/insights/ShareButtons";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const IconMap = {
  FileText,
  Link2,
  Gauge,
  History,
};

/* ─── Dynamic CMS Block Renderer ─── */
const renderBlock = (block: any, index: number) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-[#5B6472] font-inter text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] mb-6">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={index} id={block.id} className="text-[22px] md:text-[26px] font-extrabold text-[#0B1220] tracking-[-0.01em] pt-8 mb-5 scroll-mt-28">
          {block.text}
        </h2>
      );
    case "quote_border":
      return (
        <div key={index} className="border-l-[3px] border-[#0F58F5] pl-6 py-1 my-8 bg-transparent">
          <p className="font-inter font-bold text-[16px] md:text-[18px] leading-[28px] text-[#0B1220]">
            {block.text}
          </p>
        </div>
      );
    case "quote_filled":
      return (
        <div key={index} className="bg-[#EEF1F6] border-l-4 border-[#0F58F5] p-6 md:p-8 rounded-r-[12px] my-8">
          <p className="text-[15px] md:text-[16px] font-semibold text-[#0B1220] leading-[26px]">
            "{block.text}"
          </p>
        </div>
      );
    case "bullet_list":
      return (
        <ul key={index} className="flex flex-col gap-4 my-6">
          {block.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#0F58F5] flex-shrink-0" />
              <span className="text-[#5B6472] font-inter text-[15px] md:text-[16px] leading-[26px]">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "numbered_list":
      return (
        <div key={index} className="space-y-4 my-8">
          {block.items.map((item: any, i: number) => (
            <div key={i} className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-[#F9FAFB] rounded-[12px] border border-[#E2E6ED]">
              <span className="w-8 h-8 rounded-full bg-[#0F58F5] text-white flex items-center justify-center font-bold text-[14px] shrink-0">
                {i + 1}
              </span>
              <div>
                <h4 className="font-bold text-[#0B1220] text-[16px] mb-1">{item.title}</h4>
                <p className="text-[14px] md:text-[15px] text-[#5B6472] leading-[24px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "grid_cards":
      return (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-8">
          {block.items.map((item: any, i: number) => {
            const Icon = IconMap[item.icon as keyof typeof IconMap] || FileText;
            return (
              <div key={i} className="p-6 bg-white border border-[#E2E6ED] rounded-[12px] shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF1F6] flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-5 h-5 text-[#0F58F5]" />
                </div>
                <h4 className="font-bold text-[#0B1220] text-[15px] mb-2">{item.title}</h4>
                <p className="text-[13px] text-[#5B6472] leading-[20px]">{item.text}</p>
              </div>
            );
          })}
        </div>
      );
    case "buttons":
      return (
        <div key={index} className="flex flex-wrap items-center gap-4 my-8 pt-4">
          {block.items.map((btn: any, i: number) => (
            <Link
              key={i}
              href={btn.href}
              className={`inline-flex items-center justify-center h-[48px] px-8 rounded-[8px] font-inter font-semibold text-[14px] transition-colors w-full sm:w-auto ${btn.primary
                ? "bg-[#0F58F5] text-white hover:bg-[#093593]"
                : "bg-white border border-[#E2E6ED] text-[#0B1220] hover:border-[#0B1220]/20"
                }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      );
    case "image":
      return (
        <div key={index} className="my-8 relative w-full aspect-[16/9] rounded-[12px] overflow-hidden shadow-sm">
          <Image src={block.src} alt={block.alt} fill className="object-cover" />
        </div>
      );
    default:
      return null;
  }
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  // Find article in dummy JSON based on the URL parameter
  const article = insightsData.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Extract the first paragraph to use as the header subtitle
  const headerSubtitle = article.blocks.find((b: any) => b.type === "paragraph")?.text || "";

  // Format the title if it contains "connection" to match the design highlight
  const titleParts = article.title.split(/(connection)/i);

  return (
    <main className="min-h-screen bg-[#F9FAFB] scroll-smooth">

      {/* ─── Hero Header ─── */}
      <section className="relative bg-[#031231] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 lg:px-[24px] overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dark-industrial-bg.jpg" // Replace with your dark background pattern image
            alt="Background"
            fill
            className="object-cover opacity-30 mix-blend-multiply"
            priority
          />
        </div>

        <div className="relative z-10 max-w-[1302px] mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[#3FC3EE] font-inter text-[12px] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>-</span>
            <Link href="/insight" className="hover:text-white transition-colors">Insights</Link>
            <span>-</span>
            <span className="text-white">{article.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Header Content */}
            <div className="lg:col-span-8 flex flex-col">
              <span className="text-[#3FC3EE] font-inter font-bold text-[11px] tracking-[0.08em] uppercase mb-4 block">
                {article.category}
              </span>

              <h1 className="font-inter font-extrabold text-[32px] md:text-[44px] lg:text-[48px] leading-[1.1] tracking-[-0.01em] text-white mb-6">
                {titleParts.map((part, i) =>
                  part.toLowerCase() === 'connection'
                    ? <span key={i} className="text-[#3FC3EE]">{part}</span>
                    : part
                )}
              </h1>

              {headerSubtitle && (
                <p className="text-[#A0ABBA] font-inter text-[14px] md:text-[15px] leading-[26px] mb-10 max-w-[700px]">
                  {headerSubtitle}
                </p>
              )}

              <div className="flex items-center gap-4 text-white font-inter text-[14px]">
                <div className="w-12 h-12 rounded-full bg-[#0F58F5] flex items-center justify-center font-bold text-[16px] shrink-0">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[14px]">{article.author.name}</div>
                  <div className="text-[12px] text-[#A0ABBA] mt-0.5">{article.author.role} · {article.readTime}</div>
                </div>
              </div>
            </div>

            {/* Right Header Image */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative w-full aspect-[4/5] rounded-[8px] overflow-hidden shadow-2xl">
                <Image src={article.heroImage} alt={article.title} fill className="object-cover" priority />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Main Content Layout ─── */}
      <section className="py-12 lg:py-20 px-6 lg:px-[24px]">
        <div className="max-w-[1302px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Content */}
            <div className="lg:col-span-8 bg-transparent">

              <div className="prose-container w-full">
                {article.blocks.map((block: any, index: number) => renderBlock(block, index))}
              </div>

              {/* Author Footer Card */}
              <div className="mt-16 bg-white border border-[#E2E6ED] p-6 lg:p-8 rounded-[12px] shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#0F58F5] text-white flex items-center justify-center font-bold text-xl shrink-0">
                    {article.author.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[#0B1220] font-inter text-[16px] mb-1">{article.author.name}</h4>
                    <p className="text-[13px] text-[#5B6472] font-inter mb-3">{article.author.role}</p>
                    <p className="text-[14px] text-[#5B6472] font-inter max-w-[500px] leading-[22px] mb-4">
                      {article.author.bio}
                    </p>
                    <Link
                      href="/insight"
                      className="inline-flex items-center gap-1 text-[#0F58F5] hover:text-[#093593] font-inter font-semibold text-[13px] transition-colors"
                    >
                      More articles from {article.author.name.split(' ')[0]} <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-10 sticky top-28">

              {/* Table of Contents */}
              <div>
                <h3 className="font-inter font-bold text-[11px] text-[#7C8798] uppercase tracking-[0.08em] mb-4">
                  On this page
                </h3>
                <ul className="flex flex-col gap-3">
                  {article.tableOfContents.map((item: any) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-[14px] text-[#0F58F5] hover:underline font-inter block leading-[20px]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share Insight */}
              <ShareButtons title={article.title} />

              {/* Related Insights */}
              <div className="flex flex-col gap-4">
                <h3 className="font-inter font-bold text-[14px] text-[#0B1220] tracking-[-0.01em] mb-1">
                  Related insights
                </h3>
                {article.relatedInsights.map((rel: any, idx: number) => {
                  const Icon = IconMap[rel.icon as keyof typeof IconMap] || FileText;
                  return (
                    <Link
                      key={idx}
                      href={`/insight/${rel.slug}`}
                      className="group flex flex-col p-5 bg-white border border-[#E2E6ED] rounded-[12px] shadow-sm hover:border-[#0F58F5]/50 transition-all"
                    >
                      <div className="w-8 h-8 rounded-[6px] bg-[#EEF1F6] flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4 text-[#0F58F5]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#5B6472] uppercase tracking-[0.06em] block mb-1.5">
                        {rel.category}
                      </span>
                      <h4 className="font-inter font-bold text-[15px] text-[#0B1220] group-hover:text-[#0F58F5] transition-colors leading-[22px] mb-2">
                        {rel.title}
                      </h4>
                      <span className="text-[12px] text-[#A0ABBA] font-medium">
                        {rel.author}
                      </span>
                    </Link>
                  );
                })}
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* Footer / CTA sections */}
      <InsightsNewsletter />
      <InsightsCTA
        bgColor="bg-[#031231]"
        titleColor="text-white"
        descColor="text-white/80"
        hasBorder={false}
      />
    </main>
  );
}