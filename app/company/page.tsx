import Navigation from '@/components/Navigation';
import CompanyHero from '@/components/CompanyHero';
import CompanyStory from '@/components/CompanyStory';
import CompanyMission from '@/components/CompanyMission';
import CompanyApproach from '@/components/CompanyApproach';
import FAQs from '@/components/FAQs';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

export default function CompanyPage() {
  return (
    <>
      <Navigation onDark />
      <main className="w-full">
        <CompanyHero />
        <CompanyStory />
        <CompanyMission />
        <CompanyApproach />
        <FAQs />
        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}
