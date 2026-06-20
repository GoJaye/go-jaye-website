import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function FooterCTA() {
  return (
    <section className="w-full section-y footer-cta" style={{ backgroundColor: '#0F2A24', paddingTop: '87px', paddingBottom: '80px' }}>
      <div className="page-max page-gutter grid-2-split footer-cta-grid" style={{ alignItems: 'center' }}>
        <ScrollReveal animation="slide-left">
          <div>
          <h2
            className="responsive-h2"
            style={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 800,
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              color: '#FFFFFF',
              maxWidth: '555px',
              margin: '0 0 24px',
            }}
          >
              Move forward with Jaye.
            </h2>

            <p
              className="responsive-body"
              style={{
                fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                fontWeight: 500,
                lineHeight: '120%',
                letterSpacing: '-2%',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '474px',
                margin: '0 0 40px',
              }}
            >
              Be first to ride, first to send, first to drive, and help shape what fair mobility looks like.
            </p>

            <button
              style={{
                width: '197px',
                height: '54px',
                paddingTop: '14px',
                paddingRight: '16px',
                paddingBottom: '16px',
                paddingLeft: '16px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: '#F8CA89',
                color: '#0F2A24',
                fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '-2%',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Join the waitlist
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-right" delay={120}>
          <div className="footer-cta-image" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Image
              src="/images/mockups/footer-mock.png"
              alt="Jaye app on iPhone"
              width={1006}
              height={800}
              style={{
                width: '100%',
                maxWidth: '502px',
                height: 'auto',
                borderRadius: '20.34px',
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
