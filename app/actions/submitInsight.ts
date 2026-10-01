"use server";

import { createClient } from "@sanity/client";
import { notifyViaWeb3Forms } from '@/app/actions/notifyViaWeb3Forms';

export async function submitInsightToSanity(formData: FormData) {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset || !token) {
    console.error("Sanity Configuration Error: Missing environment variables.");
    return {
      success: false,
      notified: false,
      message: "Server configuration error: Missing Sanity environment variables.",
    };
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-03-01",
    token,
    useCdn: false
  });

  try {
    let imageAssetId: string | null = null;
    let videoAssetId: string | null = null;

    // 1. Process Image Upload
    const imageFile = formData.get("image") as File | null;
    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const asset = await client.assets.upload("image", buffer, {
        filename: imageFile.name,
        contentType: imageFile.type,
      });
      imageAssetId = asset._id;
    }

    // 2. Process Video Upload
    const videoFile = formData.get("video") as File | null;
    if (videoFile && videoFile.size > 0) {
      const buffer = Buffer.from(await videoFile.arrayBuffer());
      const asset = await client.assets.upload("file", buffer, {
        filename: videoFile.name,
        contentType: videoFile.type,
      });
      videoAssetId = asset._id;
    }

    // Extract core fields for notifications
    const fullName = String(formData.get("fullName") ?? "");
    const workEmail = String(formData.get("workEmail") ?? "");
    const organisation = String(formData.get("organisation") ?? "");
    const title = String(formData.get("title") ?? "");
    const contentType = String(formData.get("contentType") ?? "");
    const summary = String(formData.get("summary") ?? "");

    // 3. Create the Submission Object (Expanded to catch all frontend data)
    const submission = {
      _type: "insightSubmission",
      status: "pending",
      // Core Fields
      fullName,
      workEmail,
      company: organisation,
      title,
      contentType,
      summary,
      fullText: String(formData.get("fullText") ?? ""),

      // Extended Form Fields from ContributeForm
      jobTitle: String(formData.get("jobTitle") ?? ""),
      country: String(formData.get("country") ?? ""),
      linkedIn: String(formData.get("linkedIn") ?? ""),
      industry: String(formData.get("industry") ?? ""),
      tags: String(formData.get("tags") ?? ""),
      keyTakeaway: String(formData.get("keyTakeaway") ?? ""),
      sources: String(formData.get("sources") ?? ""),
      imageDescription: String(formData.get("imageDescription") ?? ""),
      imageCredit: String(formData.get("imageCredit") ?? ""),
      pubPeriod: String(formData.get("pubPeriod") ?? ""),
      contactMethod: String(formData.get("contactMethod") ?? ""),
      editorNote: String(formData.get("note") ?? ""),

      // Media Attachments
      ...(imageAssetId && {
        featuredImage: { _type: "image", asset: { _type: "reference", _ref: imageAssetId } },
      }),
      ...(videoAssetId && {
        featuredVideo: { _type: "file", asset: { _type: "reference", _ref: videoAssetId } },
      }),
    };

    // Save to Sanity
    await client.create(submission);

    // Sanity write succeeded — the submission is safe regardless of what happens next.
    const notifyResult = await notifyViaWeb3Forms({
      fullName,
      workEmail,
      organisation,
      title,
      contentType,
      summary,
    });

    return {
      success: true,
      notified: notifyResult.ok,
      message: notifyResult.ok
        ? "Insight submitted successfully for editorial review!"
        : "Your insight was submitted and saved, but the notification email couldn't be sent. It's still in the review queue.",
    };
  } catch (error: any) {
    console.error("Sanity Submission Error:", error);
    return {
      success: false,
      notified: false,
      message: error.message || "An error occurred while uploading your insight.",
    };
  }
}