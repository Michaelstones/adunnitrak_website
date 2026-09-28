"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react"; // Replace Mail with MailBadge if you have a custom icon

interface ShareButtonsProps {
    title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
    const [url, setUrl] = useState("");

    // Safely get the URL only after the component mounts on the client
    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const handleGeneralShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: `Check out this insight: ${title}`,
                    url: url,
                });
            } catch (error) {
                console.log("Sharing failed or was cancelled:", error);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            try {
                await navigator.clipboard.writeText(url);
                alert("Link copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy link:", err);
            }
        }
    };

    const handleEmailShare = () => {
        const subject = encodeURIComponent(title);
        const body = encodeURIComponent(`I thought you might find this insight interesting:\n\n${url}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    return (
        <div>
            <h3 className="font-inter font-bold text-[11px] text-[#7C8798] uppercase tracking-[0.08em] mb-4">
                Share this insight
            </h3>
            <div className="flex items-center gap-3">
                <button
                    onClick={handleGeneralShare}
                    aria-label="Share via..."
                    className="w-9 h-9 rounded-full border border-[#E2E6ED] flex items-center justify-center text-[#5B6472] hover:border-[#0F58F5] hover:text-[#0F58F5] transition-colors bg-white shadow-sm"
                >
                    <ArrowRight className="w-4 h-4" />
                </button>
                <button
                    onClick={handleEmailShare}
                    aria-label="Share via Email"
                    className="w-9 h-9 rounded-full border border-[#E2E6ED] flex items-center justify-center text-[#5B6472] hover:border-[#0F58F5] hover:text-[#0F58F5] transition-colors bg-white shadow-sm"
                >
                    <Mail className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}