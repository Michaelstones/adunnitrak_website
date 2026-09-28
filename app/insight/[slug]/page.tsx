import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Link2, FileText, Gauge, History, Share2, Bookmark } from "lucide-react";
import { InsightsNewsletter } from "@/components/insights/InsightsNewsletter";
import insightsData from "@/data/insights.json";

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
        <p key={index} className="text-[#5B6472] font-inter text-[15px] leading-[26px] mb-6">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={index} id={block.id} className="text-[24px] md:text-[28px] font-extrabold text-[#0B1220] tracking-[-0.01em] pt-8 mb-4 scroll-mt-28">
          {block.text}
        </h2>
      );
    case "quote_border":
      return (
        <div key={index} className="border-l-[3px] border-[#0F58F5] pl-6 py-1 my-8">
          <p className="font-inter font-bold text-[16px] md:text-[18px] leading-[28px] text-[#0B1220]">
            {block.text}
          </p>
        </div>
      );
    case "quote_filled":
      return (
        <div key={index} className="bg-[#EEF1F6] border-l-4 border-[#0F58F5] p-6 md:p-8 rounded-r-[12px] my-8">
          <p className="text-[15px] font-semibold text-[#0B1220] italic">
            "{block.text}"
          </p>
        </div>
      );
    case "bullet_list":
      return (
        <ul key={index} className="flex flex-col gap-4 my-6">
          {block.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0F58F5] flex-shrink-0" />
              <span className="text-[#5B6472] font-inter text-[15px] leading-[26px]">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "numbered_list":
      return (
        <div key={index} className="space-y-4 my-8">
          {block.items.map((item: any, i: number) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-[#F9FAFB] rounded-[12px] border border-[#E2E6ED]">
              <span className="w-8 h-8 rounded-full bg-[#0F58F5] text-white flex items-center justify-center font-bold text-[14px] shrink-0">
                {i + 1}
              </span>
              <div>
                <h4 className="font-bold text-[#0B1220] text-[16px] mb-1">{item.title}</h4>
                <p className="text-[14px] text-[#5B6472] leading-[22px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "grid_cards":
      return (
        <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
          {block.items.map((item: any, i: number) => {
            const Icon = IconMap[item.icon as keyof typeof IconMap] || FileText;
            return (
              <div key={i} className="p-6 bg-white border border-[#E2E6ED] rounded-[12px] shadow-sm">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF1F6] flex items-center justify-center mb-4">
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
        <div key={index} className="flex flex-wrap items-center gap-4 my-8">
          {block.items.map((btn: any, i: number) => (
            <Link 
              key={i} 
              href={btn.href} 
              className={`inline-flex items-center justify-center h-[48px] px-8 rounded-[8px] font-inter font-semibold text-[14px] transition-colors ${
                btn.primary 
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
        <div key={index} className="my-8 relative w-full aspect-[16/9] rounded-[12px] overflow-hidden bg-[#E2E6ED]">
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

  return (
    <main className="min-h-screen bg-white scroll-smooth">
      
      {/* ─── Hero Header ─── */}
      <section className="bg-[#031231] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-[24px]">
        <div className="max-w-[1302px] mx-auto">
          <div className="flex items-center gap-2 text-[#8890A3] font-inter text-[13px] mb-6">
            <Link href="/" className="hover:text-white transition-colors">AdunniTrak</Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-[#3FC3EE] truncate max-w-[300px]">{article.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col">
              <span className="text-[#3FC3EE] font-inter font-bold text-[12px] tracking-[0.06em] uppercase mb-4 block">
                {article.category}
              </span>
              <h1 className="font-inter font-extrabold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.01em] text-white mb-6">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-[#A0ABBA] font-inter text-[14px]">
                <div className="w-10 h-10 rounded-full bg-[#0F58F5] text-white flex items-center justify-center font-bold shrink-0">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium">{article.author.name}</div>
                  <div className="text-[12px] text-[#8890A3]">{article.author.role} · {article.readTime}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden border border-white/10 shadow-2xl">
                <Image src={article.heroImage} alt={article.title} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content Layout ─── */}
      <section className="py-16 lg:py-24 bg-white px-6 lg:px-[24px]">
        <div className="max-w-[1302px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Dynamic Content Renderer */}
            <div className="lg:col-span-8">
              
              {/* Loop through JSON blocks and render matching UI */}
              {article.blocks.map((block, index) => renderBlock(block, index))}

              {/* Author Footer */}
              <div className="mt-16 pt-8 border-t border-[#E2E6ED] flex flex-col sm:flex-row items-start justify-between gap-6 bg-[#F9FAFB] p-6 rounded-[12px]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0F58F5] text-white flex items-center justify-center font-bold text-lg shrink-0">
                    {article.author.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1220] font-inter">{article.author.name}</h4>
                    <p className="text-[12px] text-[#5B6472] font-inter mb-2">{article.author.role}</p>
                    <p className="text-[13px] text-[#5B6472] font-inter max-w-[400px] leading-[20px]">{article.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-8 sticky top-28 bg-[#F9FAFB] p-6 rounded-[16px] border border-[#E2E6ED]">
              
              <div className="bg-white border border-[#E2E6ED] rounded-[12px] p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-inter font-bold text-[14px] text-[#0B1220] uppercase tracking-[0.04em]">
                    On this page
                  </h3>
                  <div className="flex items-center gap-2 text-[#5B6472]">
                    <button aria-label="Share" className="p-1.5 hover:text-[#0F58F5] transition-colors"><Share2 className="w-4 h-4" /></button>
                    <button aria-label="Bookmark" className="p-1.5 hover:text-[#0F58F5] transition-colors"><Bookmark className="w-4 h-4" /></button>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {article.tableOfContents.map((item: any) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-[13px] text-[#5B6472] hover:text-[#0F58F5] transition-colors font-inter block leading-[20px]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-inter font-bold text-[14px] text-[#0B1220] uppercase tracking-[0.04em] px-1">
                  Related insights
                </h3>
                {article.relatedInsights.map((rel: any, idx: number) => {
                  const Icon = IconMap[rel.icon as keyof typeof IconMap] || FileText;
                  return (
                    <Link key={idx} href={`/insights/${rel.slug}`} className="group flex flex-col p-5 bg-white border border-[#E2E6ED] rounded-[12px] shadow-sm hover:border-[#0F58F5]/30 transition-colors">
                      <div className="w-8 h-8 rounded-[6px] bg-[#EEF1F6] flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4 text-[#0F58F5]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#5B6472] uppercase tracking-[0.06em] block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="font-inter font-bold text-[14px] text-[#0B1220] group-hover:text-[#0F58F5] transition-colors leading-[20px] mb-2">
                        {rel.title}
                      </h4>
                      <span className="text-[12px] text-[#A0ABBA]">
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

      <InsightsNewsletter bg={'#192F5D'} />
    </main>
  );
}