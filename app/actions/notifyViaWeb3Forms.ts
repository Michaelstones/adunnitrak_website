export const notifyViaWeb3Forms = async (payload: {
    fullName: string;
    workEmail: string;
    organisation: string;
    title: string;
    contentType: string;
    summary: string;
}) => {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        console.error("Web3Forms Configuration Error: Missing WEB3FORMS_ACCESS_KEY.");
        return { ok: false as const };
    }

    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `New insight submission: ${payload.title}`,
                from_name: "AdunniTrak Insights",
                email: payload.workEmail, // lets you hit "reply" and go straight to the contributor
                message:
                    `New article submitted for review.\n\n` +
                    `Title: ${payload.title}\n` +
                    `Type: ${payload.contentType}\n` +
                    `Author: ${payload.fullName} (${payload.organisation})\n` +
                    `Contact: ${payload.workEmail}\n\n` +
                    `Summary:\n${payload.summary}`,
            }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
            console.error("Web3Forms Error:", data);
            return { ok: false as const };
        }
        return { ok: true as const };
    } catch (error) {
        console.error("Web3Forms Network Error:", error);
        return { ok: false as const };
    }
}