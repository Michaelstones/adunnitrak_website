export const insightSchema = {
    name: "insightSubmission",
    title: "Insight Submission",
    type: "document",
    fields: [
        { name: "fullName", title: "Full Name", type: "string" },
        { name: "workEmail", title: "Work Email", type: "string" },
        { name: "company", title: "Company", type: "string" },
        { name: "title", title: "Insight Title", type: "string" },
        { name: "contentType", title: "Content Type", type: "string" },
        { name: "summary", title: "Summary", type: "text" },
        { name: "fullText", title: "Full Text", type: "text" },
        { name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } },
        { name: "featuredVideo", title: "Walkthrough Video", type: "file" },
        {
            name: "status",
            title: "Approval Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending Review", value: "pending" },
                    { title: "Approved & Live", value: "approved" },
                    { title: "Declined", value: "declined" },
                ],
                layout: "radio",
            },
            initialValue: "pending",
        },
    ],
};