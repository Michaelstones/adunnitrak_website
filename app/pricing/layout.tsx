import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — AdunniTrak | Operational Intelligence Platform",
  description:
    "Simple, transparent pricing for every industrial operation. Choose from Starter, Professional, or Enterprise plans — available for Nigerian and international facilities.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
