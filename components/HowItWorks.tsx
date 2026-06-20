import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function HowItWorks() {
  return (
    <section className="w-full bg-white section-y">
      <div className="page-max page-gutter">
        <ScrollReveal animation="rise">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#1F8F6B',
              marginBottom: '20px',
            }}
          >
            HOW IT WORKS
          </span>

          <h2
            className="responsive-h2 section-mobile-header"
            style={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 800,
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              color: '#1A1A1A',
              maxWidth: '648px',
              margin: '0 0 24px',
            }}
          >
            Simplifying mobility in one powerful platform
          </h2>

          <p
            className="responsive-body"
            style={{
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: '140%',
              letterSpacing: '-2%',
              color: '#4B5563',
              maxWidth: '648px',
              margin: '0 0 36px',
            }}
          >
            Many apps require separate accounts for rides, deliveries, and more. Jaye simplifies this with one account that handles your rides, parcels, and drivers, evolving as your needs grow.
          </p>

          <button
            style={{
              height: '54px',
              padding: '14px 36px 16px',
              borderRadius: '100px',
              border: 'none',
              backgroundColor: '#0F2A24',
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '-2%',
              color: 'white',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              marginBottom: 'clamp(40px, 8vw, 64px)',
            }}
          >
            Get early access
          </button>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="rise" delay={150}>
        <div
          className="how-it-works-media"
          style={{
            width: '100%',
            aspectRatio: '2624 / 1328',
            borderRadius: 'clamp(16px, 4vw, 32px)',
            overflow: 'hidden',
            backgroundColor: '#E5E7EB',
          }}
        >
          <Image
            src="/images/mockups/how it works.png"
            alt="How it works image"
            width={2624}
            height={1328}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
