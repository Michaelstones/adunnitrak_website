import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import PlatformSteps from "@/components/home/PlatformSteps";
import ActivityAction from "@/components/home/ActivityAction";
import ConnectedPlatformSection from "@/components/home/ConnectedPlatformSection";
import AdunniAISection from "@/components/home/AdunniAISection";
import DashboardCarousel from "@/components/home/DashboardCarousel";
import PerformanceBenefits from "@/components/home/PerformanceBenefits";
import OriginSection from "@/components/home/OriginSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import InsightsSection from "@/components/home/InsightsSection";
import CtaSection from "@/components/home/CtaSection";
import { SlideUp } from "@/components/animations/SlideUp";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-canvas-50">
      <HeroSection />
      <SlideUp><IndustriesSection /></SlideUp>
      <SlideUp><PlatformSteps /></SlideUp>
      <SlideUp><ActivityAction /></SlideUp>
      <SlideUp><ConnectedPlatformSection /></SlideUp>
      <SlideUp><AdunniAISection /></SlideUp>
      <SlideUp><DashboardCarousel /></SlideUp>
      <SlideUp><PerformanceBenefits /></SlideUp>
      <SlideUp><OriginSection /></SlideUp>
      <SlideUp><LeadershipSection /></SlideUp>
      <SlideUp><InsightsSection /></SlideUp>
      <SlideUp><CtaSection /></SlideUp>
    </div>
  );
}
