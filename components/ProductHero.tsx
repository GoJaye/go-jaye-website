import ScrollReveal from '@/components/ScrollReveal';

const buttonBase: React.CSSProperties = {
  height: '54px',
  borderRadius: '100px',
  border: 'none',
  fontFamily: 'Satoshi Variable, system-ui, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  letterSpacing: '-2%',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function ProductHero() {
  return (
    <section
      className="hero-dots-bg seamless-hero"
      style={{
        width: '100%',
        paddingTop: 'clamp(140px, 22vw, 220px)',
      }}
    >
      <div className="page-max page-gutter" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <ScrollReveal
          animation="rise"
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
        <h1
          className="responsive-h1"
          style={{
            fontFamily: 'SF Pro Display, system-ui, sans-serif',
            fontWeight: 800,
            lineHeight: '88%',
            letterSpacing: '-2.5%',
            color: '#1A1A1A',
            maxWidth: '609px',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Built once. Made to carry a lot.
        </h1>

        <p
          className="responsive-body"
          style={{
            fontFamily: 'Satoshi Variable, system-ui, sans-serif',
            fontWeight: 500,
            lineHeight: '120%',
            letterSpacing: '-2%',
            color: '#4B5563',
            maxWidth: '495px',
            margin: '24px auto 0',
            textAlign: 'center',
          }}
        >
          One platform manages matching, payments, safety, and tracking, ensuring rides, deliveries, and drivers operate on a trusted core, with new services added seamlessly.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginTop: '36px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            style={{
              ...buttonBase,
              width: '187px',
              padding: '14px 36px 16px',
              backgroundColor: '#0F2A24',
              color: '#FFFFFF',
            }}
          >
            Get early access
          </button>
          <button
            style={{
              ...buttonBase,
              width: '171px',
              padding: '14px 16px 16px',
              backgroundColor: '#F8CA89',
              color: '#0F2A24',
            }}
          >
            Join the waitlist
          </button>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
