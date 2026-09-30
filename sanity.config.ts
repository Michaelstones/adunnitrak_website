import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { insightSchema } from "./sanity/schemas/insight";

export default defineConfig({
    basePath: "/admin",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    title: "AdunniTrak Admin",
    plugins: [structureTool()],
    schema: {
        types: [insightSchema],
    },
});