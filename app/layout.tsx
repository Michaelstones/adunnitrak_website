import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Import your newly created global components
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { TawkChat } from "@/components/TawkChat";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdunniTrak | Operational Intelligence",
  description:
    "An AI-powered industrial operational intelligence platform connecting operations, maintenance, reliability, inventory and workforce activity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col mx-0 px-0">
        <SiteHeader />

        {/* flex-1 allows this container to grow and push the footer to the bottom */}
        <main className="flex-1 flex flex-col">{children}</main>

        <SiteFooter />
        <TawkChat />
      </body>
    </html>
  );
}
