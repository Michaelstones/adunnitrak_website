import { DemoHeroSection } from "@/components/demo/DemoHeroSection";
import { DemoBuiltAroundSection } from "@/components/demo/DemoBuiltAroundSection";
import { DemoAreasOfInterestSection } from "@/components/demo/DemoAreasOfInterestSection";
import { DemoNotGenericAiSection } from "@/components/demo/DemoNotGenericAiSection";
import { DemoJourneySection } from "@/components/demo/DemoJourneySection";
import { DemoParticipantsSection } from "@/components/demo/DemoParticipantsSection";
import { DemoRequestFormSection } from "@/components/demo/DemoRequestFormSection";
import { DemoFaqSection } from "@/components/demo/DemoFaqSection";

export const metadata = {
  title: "Book a Demo | AdunniTrak",
  description: "Request a personalised AdunniTrak demonstration built around your facility.",
};

export default function DemoPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <DemoHeroSection />
      <DemoBuiltAroundSection />
      <DemoAreasOfInterestSection />
      <DemoNotGenericAiSection />
      <DemoJourneySection />
      <DemoParticipantsSection />
      <DemoRequestFormSection />
      <DemoFaqSection />
    </main>
  );
}
