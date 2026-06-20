import Navigation from '@/components/Navigation';
import ProductHero from '@/components/ProductHero';
import Integrations from '@/components/Integrations';
import TechnicalCapabilities from '@/components/TechnicalCapabilities';
import OurAssurance from '@/components/OurAssurance';
import FAQs from '@/components/FAQs';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

export default function ProductPage() {
  return (
    <>
      <Navigation pill />
      <main className="w-full">
        <ProductHero />
        <Integrations />
        <TechnicalCapabilities />
        <OurAssurance />
        <FAQs />
        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}
