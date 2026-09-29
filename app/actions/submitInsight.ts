"use server";

import { createClient } from "@sanity/client";

// Ensure you have these in your .env.local file
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_WRITE_TOKEN, // A token with write/editor permissions
  useCdn: false,
  apiVersion: "2024-01-01",
});

export async function submitInsightToSanity(formData: FormData) {
  try {
    let imageRef = null;

    // 1. Handle Image Upload if a file was provided
    const imageFile = formData.get("image") as File;
    if (imageFile && imageFile.size > 0) {
      // Upload the image buffer to Sanity Assets
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      const asset = await client.assets.upload("image", buffer, {
        filename: imageFile.name,
        contentType: imageFile.type,
      });
      imageRef = asset._id;
    }

    // 2. Build the Sanity Document
    const insightDoc = {
      _type: "insightSubmission", // Make sure you have this schema created in Sanity
      about: {
        fullName: formData.get("fullName"),
        workEmail: formData.get("workEmail"),
        jobTitle: formData.get("jobTitle"),
        organisation: formData.get("organisation"),
        country: formData.get("country"),
        linkedIn: formData.get("linkedIn"),
      },
      details: {
        contentType: formData.get("contentType"),
        title: formData.get("title"),
        industry: formData.get("industry"),
        summary: formData.get("summary"),
        tags: formData.get("tags") ? (formData.get("tags") as string).split(",") : [],
      },
      content: {
        fullText: formData.get("fullText"),
        keyTakeaway: formData.get("keyTakeaway"),
        sources: formData.get("sources"),
      },
      featuredImage: imageRef ? {
        _type: "image",
        asset: { _type: "reference", _ref: imageRef },
        alt: formData.get("imageDescription"),
        credit: formData.get("imageCredit"),
      } : null,
      publishing: {
        preferredPeriod: formData.get("pubPeriod"),
        contactMethod: formData.get("contactMethod"),
        editorNote: formData.get("note"),
      },
      consents: {
        isOriginal: formData.get("consentOriginal") === "on",
        isNonConfidential: formData.get("consentNonConfidential") === "on",
        agreesToPrivacy: formData.get("consentPrivacy") === "on",
      },
      submittedAt: new Date().toISOString(),
      status: "pending", // Default status for editorial review
    };

    // 3. Create document in Sanity
    await client.create(insightDoc);

    return { success: true, message: "Insight submitted successfully for review." };
  } catch (error: any) {
    console.error("Sanity Submission Error:", error);
    return { success: false, message: error.message || "Failed to submit insight." };
  }
}