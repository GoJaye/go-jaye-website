import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollRevealText from './ScrollRevealText';

const paragraphs = [
  "Every trip is two people and a few kilometres of trust. Someone needs to get somewhere; someone else turns the key and makes it happen. For too long, that simple exchange has been crowded, a cut taken here, a fee hidden there, a quiet sense that one side always comes off worse. Jaye exists to clear that space out, so the fare a rider agrees to is the fare a driver earns, and the only two people in the deal are the two people in the car. That isn't a tagline to us. It's the reason the whole thing was built.",
  "So this isn't an app with users on one end and drivers on the other. It's a community of people moving each other forward; earning a fair living, riders getting home without a gamble, the same roads shared with a little more care. We're only at the start of it, which means the people who ride and drive with us now aren't joining something finished; they're shaping what it becomes. Move with us. Earn with us. Grow with us. The road is better when nobody on it is being shortchanged.",
];

export default function CompanyStory() {
  return (
    <section className="w-full section-y" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="page-max page-gutter grid-2-col" style={{ gap: '72px', alignItems: 'start' }}>
        {/* Left — scroll-revealed copy */}
        <ScrollReveal animation="slide-left">
        <ScrollRevealText
          paragraphs={paragraphs}
          activeColor="#16241F"
          inactiveColor="#C9CDD4"
          paragraphSpacing="32px"
          textStyle={{
            fontFamily: 'SF Pro Display, system-ui, sans-serif',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '150%',
            letterSpacing: '-2%',
            textAlign: 'justify',
          }}
        />
        </ScrollReveal>

        {/* Right — sticky image */}
        <ScrollReveal animation="slide-right" delay={120}>
        <div style={{ position: 'sticky', top: '120px', alignSelf: 'start' }}>
          <Image
            src="/images/about.png"
            alt="A rider and driver sharing a trip"
            width={1336}
            height={1368}
            style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
          />
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
