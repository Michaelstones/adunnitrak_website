import { DemoHeroSection } from "@/components/demo/DemoHeroSection";
import { DemoBuiltAroundSection } from "@/components/demo/DemoBuiltAroundSection";
import { DemoAreasOfInterestSection } from "@/components/demo/DemoAreasOfInterestSection";
import { DemoNotGenericAiSection } from "@/components/demo/DemoNotGenericAiSection";
import { DemoJourneySection } from "@/components/demo/DemoJourneySection";
import { DemoParticipantsSection } from "@/components/demo/DemoParticipantsSection";
import { DemoRequestFormSection } from "@/components/demo/DemoRequestFormSection";
import { DemoFaqSection } from "@/components/demo/DemoFaqSection";
import { SlideUp } from "@/components/animations/SlideUp";

export const metadata = {
  title: "Book a Demo | AdunniTrak",
  description: "Request a personalised AdunniTrak demonstration built around your facility.",
};

export default function DemoPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <DemoHeroSection />
      <SlideUp><DemoBuiltAroundSection /></SlideUp>
      <SlideUp><DemoAreasOfInterestSection /></SlideUp>
      <SlideUp><DemoNotGenericAiSection /></SlideUp>
      <SlideUp><DemoJourneySection /></SlideUp>
      <SlideUp><DemoParticipantsSection /></SlideUp>
      <SlideUp><DemoRequestFormSection /></SlideUp>
      <SlideUp><DemoFaqSection /></SlideUp>
    </main>
  );
}
