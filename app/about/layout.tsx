import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — AdunniTrak | Industrial Operational Intelligence",
  description:
    "Learn about AdunniTrak — the AI-powered industrial operational intelligence platform built for oil & gas, power generation, manufacturing and utilities across Africa and beyond.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
