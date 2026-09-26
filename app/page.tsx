import { BusinessSizesSection } from "@/components/sections/business-sizes/BusinessSizesSection";
import { GetStartedSection } from "@/components/sections/cta/GetStartedSection";
import { DevelopersSection } from "@/components/sections/developers/DevelopersSection";
import { EventsSection } from "@/components/sections/events/EventsSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { LogoRibbons } from "@/components/sections/logo-ribbons/LogoRibbons";
import { ModularSolutionsSection } from "@/components/sections/modular-solutions/ModularSolutionsSection";
import { PersonalizeSection } from "@/components/sections/personalize/PersonalizeSection";
import { SessionsSection } from "@/components/sections/sessions/SessionsSection";
import { StatsSection } from "@/components/sections/stats/StatsSection";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <LogoRibbons />
      <ModularSolutionsSection />
      <PersonalizeSection />
      <SessionsSection />
      <StatsSection />
      <BusinessSizesSection />
      <DevelopersSection />
      <EventsSection />
      <GetStartedSection />
    </main>
  );
}
