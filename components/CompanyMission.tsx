import ScrollReveal from '@/components/ScrollReveal';
import ScrollRevealText from './ScrollRevealText';

const paragraphs = [
  'Make moving, delivery, and enterprise around Nigeria safer, more flexible, and more rewarding — by connecting riders, drivers, senders, and businesses on one platform built on trust.',
];

export default function CompanyMission() {
  return (
    <section
      className="w-full"
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        backgroundImage: "url('/images/sand bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '160px',
        paddingBottom: '160px',
      }}
    >
      <div className="page-max page-gutter" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <ScrollReveal animation="rise">
        <span
          style={{
            fontFamily: 'Satoshi Variable, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '120%',
            letterSpacing: '-2%',
            color: '#1F8F6B',
            marginBottom: '40px',
          }}
        >
          OUR MISSION
        </span>

        <div className="company-mission-text" style={{ maxWidth: '728px' }}>
          <ScrollRevealText
            paragraphs={paragraphs}
            activeColor="#1A1A1A"
            inactiveColor="#B9BEC6"
            textStyle={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '130%',
              letterSpacing: '-2%',
              textAlign: 'center',
            }}
          />
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
