import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutStats from "@/components/about/AboutStats";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutValues from "@/components/about/AboutValues";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutPrinciples2 from "@/components/about/AboutPrinciples2";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutOffices from "@/components/about/AboutOffices";
import AboutCTA from "@/components/about/AboutCTA";
import AdunniAISectionAbout from "@/components/about/AdunniAISectionAbout";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <>
      <main>
        {/* 1. Hero — dark bg image + portrait overlay */}
        <AboutHero />

        {/* 2. Mission — 7-col text + 4-col photo + quote block */}
        <SlideUp><AboutMission /></SlideUp>

        {/* 3. Stats bar — #EDEFF5 bg, 4 stats left, text right */}
        <SlideUp><AboutStats /></SlideUp>

        {/* 4. Timeline — 4-col heading + 7-col vertical rail */}
        <SlideUp><AboutTimeline /></SlideUp>

        {/* 5. Values — #EAEEF6 bg, 3×2 card grid + left-bordered quote */}
        <SlideUp><AboutValues /></SlideUp>

        {/* 6. Principles — 2 highlight cards + "Our operating principles" h3 + 3 principle cards */}
        <AboutPrinciples />
        <SlideUp><AboutPrinciples2 /></SlideUp>

        {/* 7. Leadership — #071A33 dark intro + white grid of leader cards */}
        <AboutLeadership />

        <SlideUp><AdunniAISectionAbout /></SlideUp>

        {/* 8. Company information — 3×3 info grid */}
        <SlideUp><AboutOffices /></SlideUp>

        {/* 9. CTA — #192F5D */}
        <FadeIn><AboutCTA /></FadeIn>
      </main>
    </>
  );
}
