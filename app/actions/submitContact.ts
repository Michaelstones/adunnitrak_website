export async function submitContactForm(formData: FormData) {
    try {
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            return { success: false, message: "Web3Forms Access Key is missing in environment variables." };
        }

        // Prepare a clean payload. Web3Forms automatically formats these key-value pairs into a neat table.
        const payload = {
            access_key: accessKey,
            subject: `New Contact Request: ${formData.get("company") || formData.get("fullName")}`,
            from_name: "AdunniTrak Website",
            replyto: formData.get("workEmail") as string,

            // Clean fields for Web3Forms' built-in email formatter
            "Full Name": formData.get("fullName") || "N/A",
            "Company": formData.get("company") || "N/A",
            "Work Email": formData.get("workEmail") || "N/A",
            "Phone Number": formData.get("phone") || "N/A",
            "Country": formData.get("country") || "N/A",
            "Industry": formData.get("industry") || "N/A",
            "Additional Notes": formData.get("notes") || "None provided",
            "Consent Granted": formData.get("consent") === "on" ? "Yes" : "No",
        };

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (result.success) {
            return { success: true, message: "Thank you! Your requirements have been submitted." };
        } else {
            return { success: false, message: result.message || "Something went wrong. Please try again." };
        }
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return { success: false, message: "Network error. Please check your connection and try again." };
    }
}