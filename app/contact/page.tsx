import Navigation from '@/components/Navigation';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navigation pill />
      <main className="w-full">
        <ContactHero />
        <ContactForm />
        <FAQs />
        <Footer />
      </main>
    </>
  );
}