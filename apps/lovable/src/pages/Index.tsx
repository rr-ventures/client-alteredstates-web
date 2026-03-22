import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { OfferingsSection } from "@/components/home/OfferingsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TeamSection } from "@/components/home/TeamSection";
import { UpcomingEventsSection } from "@/components/home/UpcomingEventsSection";
import { LeadCaptureSection } from "@/components/home/LeadCaptureSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SocialProofBar />
      <WhatWeDoSection />
      <OfferingsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <TeamSection />
      <UpcomingEventsSection />
      <LeadCaptureSection />
    </Layout>
  );
};

export default Index;
