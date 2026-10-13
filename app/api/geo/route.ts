import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Check common deployment platform geo-headers (Vercel, Cloudflare, AWS CloudFront, etc.)
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("cloudfront-viewer-country") ||
    request.headers.get("x-country-code") ||
    request.headers.get("x-geo-country") ||
    "";

  return NextResponse.json({
    country: country.toUpperCase(),
    isNigeria: country.toUpperCase() === "NG",
  });
}
