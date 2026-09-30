'use server'

import { createClient } from "@sanity/client";
import "server-only";
import insightsData from "@/data/insights.json";

export interface Article {
    id: string;
    slug: string;
    iconName: "FileText" | "Link2" | "Gauge" | "History";
    category: string;
    title: string;
    description: string;
    author: string;
    date: string;
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-03-01",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

const getIconForCategory = (category: string): "FileText" | "Link2" | "Gauge" | "History" => {
    const cat = category.toLowerCase();
    if (cat.includes("transformation") || cat.includes("connected")) return "Link2";
    if (cat.includes("operations") || cat.includes("control")) return "Gauge";
    if (cat.includes("downtime") || cat.includes("history")) return "History";
    return "FileText";
};

// Mapped JSON dummy articles
const JSON_ARTICLES: Article[] = insightsData.articles.map((article: any) => {
    const firstParagraph = article.blocks.find((b: any) => b.type === "paragraph")?.text || "";
    const description = firstParagraph.length > 140 ? firstParagraph.substring(0, 140) + "..." : firstParagraph;

    return {
        id: article.slug,
        slug: article.slug,
        iconName: getIconForCategory(article.category),
        category: article.category,
        title: article.title,
        description: description,
        author: article.author.name,
        date: article.publishedDate,
    };
});

export async function getCombinedArticles(): Promise<Article[]> {
    try {
        const query = `*[_type == "insightSubmission" && status == "approved"] | order(_createdAt desc) {
      _id,
      title,
      summary,
      fullName,
      company,
      contentType,
      industry,
      _createdAt
    }`;

        const docs = await client.fetch(query);

        const liveArticles: Article[] = docs.map((doc: any) => ({
            id: doc._id,
            slug: doc._id, // Or doc.slug if you generate slugs in Sanity
            iconName: getIconForCategory(doc.contentType || doc.industry || "Operations"),
            category: doc.industry ? doc.industry.charAt(0).toUpperCase() + doc.industry.slice(1) : "Operations",
            title: doc.title,
            description: doc.summary || "",
            author: doc.fullName || doc.company || "Editorial Team",
            date: new Date(doc._createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        }));

        // RULE: Dummy data is ignored ONLY when fetched live articles >= 4
        if (liveArticles.length >= 4) {
            return liveArticles;
        }

        // Otherwise, combine live articles with dummy data
        return [...liveArticles, ...JSON_ARTICLES];
    } catch (error) {
        console.error("Error fetching live articles from Sanity:", error);
        // Fallback to dummy data if network fails
        return JSON_ARTICLES;
    }
}