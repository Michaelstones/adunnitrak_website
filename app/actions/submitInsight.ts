'use server'
import { createClient } from "@sanity/client";

import { notifyViaWeb3Forms } from '@/app/actions/notifyViaWeb3Forms'

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

  const client = createClient({ projectId, dataset, apiVersion: "2024-03-01", token, useCdn: false });

  try {
    let imageAssetId: string | null = null;
    let videoAssetId: string | null = null;

    const imageFile = formData.get("image") as File | null;
    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const asset = await client.assets.upload("image", buffer, {
        filename: imageFile.name,
        contentType: imageFile.type,
      });
      imageAssetId = asset._id;
    }

    const videoFile = formData.get("video") as File | null;
    if (videoFile && videoFile.size > 0) {
      const buffer = Buffer.from(await videoFile.arrayBuffer());
      const asset = await client.assets.upload("file", buffer, {
        filename: videoFile.name,
        contentType: videoFile.type,
      });
      videoAssetId = asset._id;
    }

    const fullName = String(formData.get("fullName") ?? "");
    const workEmail = String(formData.get("workEmail") ?? "");
    const organisation = String(formData.get("organisation") ?? "");
    const title = String(formData.get("title") ?? "");
    const contentType = String(formData.get("contentType") ?? "");
    const summary = String(formData.get("summary") ?? "");

    const submission = {
      _type: "insightSubmission",
      fullName,
      workEmail,
      company: organisation,
      title,
      contentType,
      summary,
      fullText: formData.get("fullText"),
      status: "pending",
      ...(imageAssetId && {
        featuredImage: { _type: "image", asset: { _type: "reference", _ref: imageAssetId } },
      }),
      ...(videoAssetId && {
        featuredVideo: { _type: "file", asset: { _type: "reference", _ref: videoAssetId } },
      }),
    };

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