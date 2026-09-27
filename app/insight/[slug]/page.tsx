import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Link2, FileText, Gauge, History, Share2, Bookmark } from "lucide-react";
import { InsightsNewsletter } from "@/components/insights/InsightsNewsletter";

/* ─── Types ─────────────────────────────────────────────── */
interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>;
}

/* ─── CMS Data Fetcher (Dynamic by Slug) ─────────────────── */
async function getArticleBySlug(slug: string) {
    // In production, query your headless CMS here using the dynamic slug parameter
    const mockArticles: Record<string, any> = {
        "most-plants-dont-have-a-data-problem-they-have-a-connection-problem": {
            title: "Most plants don't have a data problem — they have a connection problem",
            category: "Industrial digital transformation",
            readTime: "5 min read",
            author: {
                name: "Agboola Shonekan, C.Tech.",
                role: "Founder and Chief Executive Officer",
                bio: "Experienced in industrial asset management, reliability engineering, and plant digital infrastructure.",
                avatar: "/images/avatar.jpg",
            },
            publishedDate: "Publication date to be confirmed",
            heroImage: "/images/industrial-stack.jpg",
            tableOfContents: [
                { id: "where-data-lives", label: "Where the data actually lives" },
                { id: "ai-separation", label: "What separates silos from isolation? An AI separation" },
                { id: "connected-records", label: "From isolated records to a connected chain of events" },
                { id: "plant-workflow-stops", label: "What stops your plant from a connected-workflow?" },
                { id: "operational-changes", label: "Why connected operational information changes" },
            ],
            // CMS Rich Content with scroll-margin utility classes for smooth jumping
            content: (
                <div className="space-y-8 text-[#333B47] font-inter text-[16px] leading-[28px]">
                    <p className="text-[18px] leading-[30px] font-medium text-[#0B1220]">
                        Industrial plants generate information across production, downtime, maintenance, reliability, inventory and shift activity. The difficulty is often not the absence of data, but the fact that records, people and decisions remain separated.
                    </p>

                    <div className="my-8 relative aspect-[16/9] rounded-[12px] overflow-hidden bg-[#E2E6ED]">
                        <Image
                            src="/images/article-schematic.jpg"
                            alt="Connected plant schematic map"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <p>
                        Plants may have production records, downtime logs, maintenance systems and spreadsheets, yet still lack a connected view of what happened and what action followed. This disconnect creates blind spots that compound across shifts.
                    </p>

                    <h2 id="where-data-lives" className="text-[24px] md:text-[28px] font-extrabold text-[#0B1220] tracking-[-0.01em] pt-4 scroll-mt-28">
                        Where the data actually lives
                    </h2>
                    <p>
                        Experienced operators, technicians and supervisors hold critical insights into equipment behavior, temporary workarounds, and recurring failures. Because this data is siloed across disparate spreadsheets and shift logs, institutional knowledge evaporates during shift handovers.
                    </p>
                    <p>
                        When information is trapped in informal conversations or disconnected documents, plant leadership loses the ability to trace root causes or audit historical decisions effectively.
                    </p>

                    <h2 id="ai-separation" className="text-[24px] md:text-[28px] font-extrabold text-[#0B1220] tracking-[-0.01em] pt-4 scroll-mt-28">
                        What separates silos from isolation? An AI separation
                    </h2>
                    <p>
                        Adunni AI is designed to bridge this gap by connecting approved operational context across teams without replacing human authority or approval workflows.
                    </p>

                    <div className="bg-[#EEF1F6] border-l-4 border-[#0F58F5] p-6 rounded-r-[8px] my-6">
                        <p className="text-[15px] font-semibold text-[#0B1220] italic">
                            "A digital system becomes difficult to use when its equipment names do not match the terminology recognized by the people performing the work."
                        </p>
                    </div>

                    <h2 id="connected-records" className="text-[24px] md:text-[28px] font-extrabold text-[#0B1220] tracking-[-0.01em] pt-4 scroll-mt-28">
                        From isolated records to a connected chain of events
                    </h2>
                    <p>
                        Establishing continuity requires aligning operational observations directly with equipment hierarchies and maintenance task execution.
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-[12px] border border-[#E2E6ED]">
                            <span className="w-8 h-8 rounded-full bg-[#0F58F5] text-white flex items-center justify-center font-bold text-[14px] shrink-0">1</span>
                            <div>
                                <h4 className="font-bold text-[#0B1220] text-[16px]">Define local record</h4>
                                <p className="text-[14px] text-[#5B6472] mt-1">Capture shift observations instantly at the point of activity using structured inputs rather than open text fields.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-[12px] border border-[#E2E6ED]">
                            <span className="w-8 h-8 rounded-full bg-[#0F58F5] text-white flex items-center justify-center font-bold text-[14px] shrink-0">2</span>
                            <div>
                                <h4 className="font-bold text-[#0B1220] text-[16px]">Review cross-department context</h4>
                                <p className="text-[14px] text-[#5B6472] mt-1">Correlate downtime events with maintenance work orders and spare parts inventory logs automatically.</p>
                            </div>
                        </div>
                    </div>

                    <h2 id="plant-workflow-stops" className="text-[24px] md:text-[28px] font-extrabold text-[#0B1220] tracking-[-0.01em] pt-4 scroll-mt-28">
                        What stops your plant from a connected-workflow?
                    </h2>
                    <p>
                        Many industrial facilities struggle due to legacy habits that resist system integration.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        <div className="p-5 bg-white border border-[#E2E6ED] rounded-[12px]">
                            <FileText className="w-6 h-6 text-[#0F58F5] mb-3" />
                            <h4 className="font-bold text-[#0B1220] text-[15px] mb-2">Disconnected shift records</h4>
                            <p className="text-[13px] text-[#5B6472]">Logs kept in personal notebooks or local folders.</p>
                        </div>
                        <div className="p-5 bg-white border border-[#E2E6ED] rounded-[12px]">
                            <Link2 className="w-6 h-6 text-[#0F58F5] mb-3" />
                            <h4 className="font-bold text-[#0B1220] text-[15px] mb-2">Isolated silos</h4>
                            <p className="text-[13px] text-[#5B6472]">Maintenance and production running on separate metrics.</p>
                        </div>
                        <div className="p-5 bg-white border border-[#E2E6ED] rounded-[12px]">
                            <Gauge className="w-6 h-6 text-[#0F58F5] mb-3" />
                            <h4 className="font-bold text-[#0B1220] text-[15px] mb-2">Manual spreadsheets</h4>
                            <p className="text-[13px] text-[#5B6472]">Prone to formula errors and delayed reporting.</p>
                        </div>
                    </div>

                    <h2 id="operational-changes" className="text-[24px] md:text-[28px] font-extrabold text-[#0B1220] tracking-[-0.01em] pt-4 scroll-mt-28">
                        Why connected operational information changes
                    </h2>
                    <p>
                        When data flows freely between departments, accountability improves, response times drop, and institutional memory is preserved for future engineering generations.
                    </p>
                </div>
            ),
            relatedArticles: [
                {
                    slug: "the-most-valuable-system-in-your-plant-isnt-written-down",
                    category: "Knowledge retention",
                    title: "The most valuable system in your plant isn't written down",
                    author: "Agboola Shonekan, C.Tech.",
                },
                {
                    slug: "how-connected-operational-records-support-quality",
                    category: "Operations",
                    title: "How connected operational records support quality and process control",
                    author: "Agboola Shonekan, C.Tech.",
                },
            ],
        },
    };

    return mockArticles[slug] || null;
}

/* ─── Page Component (Server Component) ──────────────────── */
export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white scroll-smooth">

            {/* ─── Dark Hero Header Section ─── */}
            <section className="bg-[#031231] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-[24px]">
                <div className="max-w-[1302px] mx-auto">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[#8890A3] font-inter text-[13px] mb-6">
                        <Link href="/" className="hover:text-white transition-colors">AdunniTrak</Link>
                        <span>/</span>
                        <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
                        <span>/</span>
                        <span className="text-[#3FC3EE] truncate max-w-[300px]">{article.category}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Title & Author Info (8 cols) */}
                        <div className="lg:col-span-8 flex flex-col">
                            <span className="text-[#3FC3EE] font-inter font-bold text-[12px] tracking-[0.06em] uppercase mb-4 block">
                                {article.category}
                            </span>

                            <h1 className="font-inter font-extrabold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.01em] text-white mb-6">
                                {article.title}
                            </h1>

                            <div className="flex items-center gap-4 text-[#A0ABBA] font-inter text-[14px]">
                                <div className="w-10 h-10 rounded-full bg-[#0F58F5] text-white flex items-center justify-center font-bold">
                                    AS
                                </div>
                                <div>
                                    <div className="text-white font-medium">{article.author.name}</div>
                                    <div className="text-[12px] text-[#8890A3]">{article.author.role} · {article.readTime}</div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image (4 cols) */}
                        <div className="lg:col-span-4">
                            <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src={article.heroImage}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── Main Content & Sidebar Grid ─── */}
            <section className="py-16 lg:py-24 bg-white px-6 lg:px-[24px]">
                <div className="max-w-[1302px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Article Body (8 cols) */}
                        <div className="lg:col-span-8">
                            {article.content}

                            {/* Author Footer Signoff */}
                            <div className="mt-16 pt-8 border-t border-[#E2E6ED] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#0F58F5] text-white flex items-center justify-center font-bold text-lg shrink-0">
                                        AS
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0B1220] font-inter">{article.author.name}</h4>
                                        <p className="text-[13px] text-[#5B6472] font-inter">{article.author.role}</p>
                                    </div>
                                </div>
                                <Link
                                    href="/insights"
                                    className="inline-flex items-center gap-2 text-[#0F58F5] hover:text-[#093593] font-inter font-semibold text-[14px]"
                                >
                                    View all published insights <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Sticky Sidebar (4 cols) */}
                        <aside className="lg:col-span-4 flex flex-col gap-8 sticky top-28 bg-[#EDEFF5] p-6 rounded-[16px] border border-[#E2E6ED]">

                            {/* Table of Contents Box */}
                            <div className="bg-[#EEF1F6] border border-[#E2E6ED] rounded-[12px] p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-inter font-bold text-[14px] text-[#0B1220] uppercase tracking-[0.04em]">
                                        On this page
                                    </h3>
                                    <div className="flex items-center gap-2 text-[#5B6472]">
                                        <button aria-label="Share article" className="p-1.5 hover:text-[#0F58F5] transition-colors">
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                        <button aria-label="Bookmark article" className="p-1.5 hover:text-[#0F58F5] transition-colors">
                                            <Bookmark className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-3">
                                    {article.tableOfContents.map((item: any) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className="text-[13px] text-[#5B6472] hover:text-[#0F58F5] transition-colors font-inter block leading-[20px]"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Related Insights Sidebar */}
                            <div className="bg-white border border-[#E2E6ED] rounded-[12px] p-5 shadow-sm">
                                <h3 className="font-inter font-bold text-[14px] text-[#0B1220] mb-5 uppercase tracking-[0.04em]">
                                    Related insights
                                </h3>
                                <div className="flex flex-col gap-5">
                                    {article.relatedArticles.map((rel: any, idx: number) => (
                                        <Link key={idx} href={`/insights/${rel.slug}`} className="group block">
                                            <span className="text-[11px] font-bold text-[#0F58F5] uppercase tracking-[0.06em] block mb-1">
                                                {rel.category}
                                            </span>
                                            <h4 className="font-inter font-bold text-[14px] text-[#0B1220] group-hover:text-[#0F58F5] transition-colors leading-[20px] mb-1.5">
                                                {rel.title}
                                            </h4>
                                            <span className="text-[12px] text-[#7C8798]">
                                                {rel.author}
                                            </span>
                                            {idx < article.relatedArticles.length - 1 && (
                                                <div className="mt-4 border-b border-[#E2E6ED]" />
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>

            {/* ─── Newsletter & Demo Callout ─── */}
            <InsightsNewsletter />

        </main>
    );
}
