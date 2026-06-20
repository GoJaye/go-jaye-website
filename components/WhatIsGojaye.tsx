import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const cards = [
  { src: '/images/mockups/whats-gojaye1.png', width: 940, height: 1200, alt: 'Book a ride' },
  { src: '/images/mockups/whats-gojaye2.png', width: 940, height: 1200, alt: 'Send a package' },
  { src: '/images/mockups/whats-gojaye3.png', width: 848, height: 1200, alt: 'Name your price' },
  { src: '/images/mockups/whats-gojaye4.png', width: 940, height: 1200, alt: 'Rent a car' },
];

function GojayeCard({ card }: { card: (typeof cards)[number] }) {
  return (
    <Image
      src={card.src}
      alt={card.alt}
      width={card.width}
      height={card.height}
      className="whats-gojaye-card"
      style={{
        flexShrink: 0,
        height: 'clamp(420px, 55vw, 600px)',
        width: 'auto',
        borderRadius: '24px',
        display: 'block',
      }}
    />
  );
}

function MarqueeGroup({ cards: groupCards, hidden }: { cards: typeof cards; hidden?: boolean }) {
  return (
    <div className="whats-gojaye-marquee-group" aria-hidden={hidden}>
      {groupCards.map((card) => (
        <div key={card.src} className="whats-gojaye-marquee-item">
          <GojayeCard card={card} />
        </div>
      ))}
    </div>
  );
}

export default function WhatIsGojaye() {
  return (
    <section id="product" className="w-full section-y overflow-x-clip" style={{ backgroundColor: '#F5F6F7' }}>
      <div className="page-max page-gutter">
        <ScrollReveal animation="rise">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', maxWidth: '760px', marginBottom: '28px' }}>
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
              WHAT&apos;S GOJAYE?
            </span>
            <span style={{ flex: 1, height: '1px', backgroundColor: '#D0D5D3' }} />
          </div>

          <h2
            className="responsive-h2"
            style={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 800,
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              color: '#1A1A1A',
              maxWidth: '588px',
              margin: '0 0 24px',
            }}
          >
            Ways to move. All with your GoJaye account.
          </h2>

          <p
            className="responsive-body"
            style={{
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#4B5563',
              maxWidth: '474px',
              margin: 0,
            }}
          >
            Ride today. Rent a car, hire a driver, and run a fleet as we roll them out, all from the same login.
          </p>
        </ScrollReveal>
      </div>

      <div className="whats-gojaye-marquee-wrap" style={{ marginTop: 'clamp(40px, 8vw, 64px)' }}>
        <div className="whats-gojaye-marquee">
          <MarqueeGroup cards={cards} />
          <MarqueeGroup cards={cards} hidden />
        </div>
      </div>

      <ScrollReveal animation="rise" delay={120}>
        <div
          className="no-scrollbar whats-gojaye-scroll"
          style={{
            marginTop: 'clamp(40px, 8vw, 64px)',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div
            className="whats-gojaye-track"
            style={{
              display: 'flex',
              gap: 'clamp(16px, 3vw, 24px)',
              paddingLeft: 'max(var(--page-gutter), calc((100vw - 1440px) / 2 + var(--page-gutter)))',
              paddingRight: 'var(--page-gutter)',
              width: 'max-content',
            }}
          >
            {cards.map((card) => (
              <GojayeCard key={card.src} card={card} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
