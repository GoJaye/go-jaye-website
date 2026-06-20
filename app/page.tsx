'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatIsGojaye from '@/components/WhatIsGojaye';
import HowItWorks from '@/components/HowItWorks';
import FairBothSides from '@/components/FairBothSides';
import AppFeatures from '@/components/AppFeatures';
import FAQs from '@/components/FAQs';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="w-full">
        <Hero />
        <WhatIsGojaye />
        <HowItWorks />
        <FairBothSides />
        <AppFeatures />
        <FAQs />
        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}