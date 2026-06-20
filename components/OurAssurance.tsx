import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const cards = [
  {
    icon: '/images/our assurance icons/document verification.png',
    title: 'Document verification',
    description: 'Driver KYC with NIN/BVN, licence, and document checks.',
  },
  {
    icon: '/images/our assurance icons/state of the art security.png',
    title: 'State of the art security',
    description: 'Trip PIN, live sharing, SOS, and emergency contacts.',
  },
  {
    icon: '/images/our assurance icons/consistent and reliable.png',
    title: 'Consistent & reliable',
    description: 'Built to scale and stay up on unreliable networks.',
  },
  {
    icon: '/images/our assurance icons/proper money handling.png',
    title: 'Proper money handling',
    description: 'Audited, double-entry money handling and secure data practices.',
  },
];

export default function OurAssurance() {
  return (
    <section className="w-full section-y" style={{ backgroundColor: '#F6F7F9' }}>
      <div className="page-max page-gutter">
        {/* Header */}
        <ScrollReveal animation="rise">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              width: '100%',
              maxWidth: '520px',
              marginBottom: '20px',
            }}
          >
            <span style={{ flex: 1, height: '1px', backgroundColor: '#D0D5D3' }} />
            <span
              style={{
                fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '120%',
                letterSpacing: '-2%',
                color: '#1F8F6B',
                whiteSpace: 'nowrap',
              }}
            >
              OUR ASSURANCE
            </span>
            <span style={{ flex: 1, height: '1px', backgroundColor: '#D0D5D3' }} />
          </div>

          <h2
            className="section-mobile-header"
            style={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              color: '#1A1A1A',
              maxWidth: '499px',
              margin: '0 0 16px',
            }}
          >
            Trust is the product, not a footnote
          </h2>

          <p
            style={{
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#4B5563',
              maxWidth: '616px',
              margin: 0,
            }}
          >
            All drivers are verified before trips. Each journey can be shared and tracked, and every naira is accounted for. Safety and money management are our foundation, not just features.
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal animation="rise" delay={120}>
        <div className="our-assurance-grid">
          {cards.map((card) => (
            <div key={card.title} className="our-assurance-card">
              <Image
                src={card.icon}
                alt={card.title}
                width={164}
                height={164}
                className="our-assurance-icon"
              />
              <h3 className="our-assurance-title">{card.title}</h3>
              <p className="our-assurance-desc">{card.description}</p>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
