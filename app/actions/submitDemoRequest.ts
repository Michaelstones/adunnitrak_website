"use server";

import { google } from "googleapis";

export async function submitDemoRequest(formData: FormData) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const values = [
            [
                new Date().toISOString(), // Timestamp
                formData.get("fullName") || "",
                formData.get("company") || "",
                formData.get("workEmail") || "",
                formData.get("phone") || "",
                formData.get("jobTitle") || "",
                formData.get("country") || "",
                formData.get("facilityType") || "",
                formData.get("industry") || "",
                formData.get("areasOfInterest") || "",
                formData.get("currentSystems") || "",
                formData.get("mainChallenge") || "",
                formData.get("contactMethod") || "",
                formData.get("timeframe") || "",
                formData.get("notes") || "",
                formData.get("consent") === "on" ? "Yes" : "No",
            ],
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_DEMO_SHEET_ID, // Add this new ID to your .env
            range: "Sheet1!A:P",
            valueInputOption: "USER_ENTERED",
            requestBody: { values },
        });

        return { success: true, message: "Request received. We will contact you shortly." };
    } catch (error) {
        console.error("Error submitting form to Google Sheets:", error);
        return { success: false, message: "Something went wrong. Please try again." };
    }
}