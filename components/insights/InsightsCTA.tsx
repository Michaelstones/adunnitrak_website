import Link from "next/link";

interface ActionButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline-light";
}

interface DemoCalloutProps {
  /** Background color style class or hex (e.g., "bg-[#EEF1F6]" or "bg-[#031231]") */
  bgColor?: string;
  /** Heading text color (e.g., "text-[#0B1220]" or "text-white") */
  titleColor?: string;
  /** Description text color (e.g., "text-[#5B6472]" or "text-white/80") */
  descColor?: string;
  /** Top border option */
  hasBorder?: boolean;
  /** Custom heading */
  title?: string;
  /** Custom description */
  description?: string;
  /** Buttons configuration */
  buttons?: ActionButton[];
}

export function InsightsCTA({
  bgColor = "bg-[#EEF1F6]",
  titleColor = "text-[#0B1220]",
  descColor = "text-[#5B6472]",
  hasBorder = false,
  title = "See how these ideas work in your operation",
  description = "Book a personalised demonstration to explore how AdunniTrak can connect your facility structure, workflows, equipment information and operational knowledge.",
  buttons = [
    { label: "Book a live demo", href: "/demo", variant: "primary" },
    { label: "Explore the platform", href: "/platform", variant: "secondary" },
  ],
}: DemoCalloutProps) {
  return (
    <section className={`${bgColor} py-16 lg:py-24 px-6 lg:px-[24px] ${hasBorder ? "border-t border-[#E2E6ED]" : ""}`}>
      <div className="max-w-[720px] mx-auto text-center flex flex-col items-center">

        <h2 className={`${titleColor} font-inter font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em] mb-4`}>
          {title}
        </h2>

        <p className={`${descColor} font-inter text-[15px] leading-[24px] mb-8`}>
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {buttons.map((btn, idx) => {
            if (btn.variant === "primary") {
              return (
                <Link
                  key={idx}
                  href={btn.href}
                  className="inline-flex items-center justify-center h-[52px] px-8 bg-[#0F58F5] hover:bg-[#093593] rounded-[8px] font-inter font-semibold text-[15px] text-white transition-colors shadow-sm w-full sm:w-auto"
                >
                  {btn.label}
                </Link>
              );
            }
            if (btn.variant === "outline-light") {
              return (
                <Link
                  key={idx}
                  href={btn.href}
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-8 bg-transparent border border-white/20 hover:bg-white/10 rounded-[8px] font-inter font-semibold text-[15px] text-white transition-colors w-full sm:w-auto"
                >
                  {btn.label}
                </Link>
              );
            }
            return (
              <Link
                key={idx}
                href={btn.href}
                className="inline-flex items-center justify-center gap-2 h-[52px] px-8 bg-white border border-[#E2E6ED] hover:border-[#0B1220]/20 hover:text-[#0B1220] rounded-[8px] font-inter font-semibold text-[15px] text-[#5B6472] transition-colors shadow-sm w-full sm:w-auto"
              >
                {btn.label}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}