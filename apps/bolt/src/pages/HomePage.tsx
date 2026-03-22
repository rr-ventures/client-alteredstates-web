import Hero from '../components/home/Hero';
import SocialProof from '../components/home/SocialProof';
import WhatIs from '../components/home/WhatIs';
import Offerings from '../components/home/Offerings';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import Team from '../components/home/Team';
import UpcomingEvents from '../components/home/UpcomingEvents';
import LeadCapture from '../components/home/LeadCapture';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <WhatIs />
      <Offerings />
      <HowItWorks />
      <Testimonials />
      <Team />
      <UpcomingEvents />
      <LeadCapture />
    </>
  );
}
