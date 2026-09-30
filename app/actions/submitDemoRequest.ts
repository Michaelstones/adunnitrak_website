export async function submitDemoRequest(formData: FormData) {
    try {
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            return { success: false, message: "Web3Forms Access Key is missing in environment variables." };
        }

        const fullName = formData.get("fullName") || "N/A";
        const company = formData.get("company") || "N/A";
        const workEmail = formData.get("workEmail") || "N/A";
        const phone = formData.get("phone") || "N/A";
        const jobTitle = formData.get("jobTitle") || "N/A";
        const country = formData.get("country") || "N/A";
        const facilityType = formData.get("facilityType") || "N/A";
        const industry = formData.get("industry") || "N/A";
        const areasOfInterest = formData.get("areasOfInterest") || "N/A";
        const currentSystems = formData.get("currentSystems") || "N/A";
        const mainChallenge = formData.get("mainChallenge") || "N/A";
        const contactMethod = formData.get("contactMethod") || "N/A";
        const timeframe = formData.get("timeframe") || "N/A";
        const notes = formData.get("notes") || "None provided";
        const consent = formData.get("consent") === "on" ? "Yes" : "No";

        // Clean payload using Web3Forms' built-in formatting engine
        const payload = {
            access_key: accessKey,
            subject: `New Demo Request: ${company}`,
            from_name: "AdunniTrak Website",
            replyto: workEmail as string,

            "Full Name": fullName,
            "Company": company,
            "Work Email": workEmail,
            "Phone Number": phone,
            "Job Title": jobTitle,
            "Country": country,
            "Facility / Plant Type": facilityType,
            "Industry": industry,
            "Areas of Interest": areasOfInterest,
            "Current Systems": currentSystems,
            "Main Challenge": mainChallenge,
            "Preferred Contact": contactMethod,
            "Preferred Timeframe": timeframe,
            "Additional Message": notes,
            "Consent Granted": consent,
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
            return { success: true, message: "Request received. We will contact you shortly." };
        } else {
            console.error("Web3Forms API Error:", result);
            return { success: false, message: result.message || "Something went wrong. Please try again." };
        }
    } catch (error) {
        console.error("Error submitting demo request:", error);
        return { success: false, message: "Network error. Please check your connection and try again." };
    }
}