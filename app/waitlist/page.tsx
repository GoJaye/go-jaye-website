import Navigation from '@/components/Navigation';
import WaitlistHero from '@/components/WaitlistHero';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

export default function WaitlistPage() {
  return (
    <>
      <Navigation pill />
      <main className="w-full">
        <WaitlistHero />
        <FAQs />
        <Footer />
      </main>
    </>
  );
}
