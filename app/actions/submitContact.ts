"use server";

import { google } from "googleapis";

export async function submitContactForm(formData: FormData) {
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
                formData.get("country") || "",
                formData.get("industry") || "",
                formData.get("notes") || "",
                formData.get("consent") === "on" ? "Yes" : "No",
            ],
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Sheet1!A:I", // Adjust if your sheet tab is named differently
            valueInputOption: "USER_ENTERED",
            requestBody: { values },
        });

        return { success: true, message: "Thank you! Your requirements have been submitted." };
    } catch (error) {
        console.error("Error submitting form to Google Sheets:", error);
        return { success: false, message: "Something went wrong. Please try again." };
    }
}