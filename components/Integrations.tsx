import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const companies = Array.from({ length: 9 }, (_, index) => ({
  src: `/images/company${index + 1}.png`,
  alt: `Partner company ${index + 1}`,
  width: index === 0 ? 759 : 364,
  height: index === 0 ? 151 : 120,
}));

function LogoItem({ company }: { company: (typeof companies)[number] }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '56px',
        paddingRight: '56px',
        flexShrink: 0,
      }}
    >
      <Image
        src={company.src}
        alt={company.alt}
        width={company.width}
        height={company.height}
        className="company-logo-marquee"
        style={{ height: '44px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }}
      />
    </div>
  );
}

export default function Integrations() {
  const marqueeLogos = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="w-full section-y integrations-after-hero" style={{ backgroundColor: '#F6F7F9' }}>
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
              marginBottom: '20px',
              display: 'block',
            }}
          >
            INTEGRATIONS
          </span>

          <h2
            className="responsive-h2 section-mobile-header"
            style={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 800,
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              color: '#1A1A1A',
              maxWidth: '606px',
              margin: '0 0 16px',
            }}
          >
            We&apos;re connected to the rails Nigeria already trusts
          </h2>

          <p
            className="responsive-body"
            style={{
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#4B5563',
              maxWidth: '605px',
              margin: 0,
            }}
          >
            We didn&apos;t change payments or identity; we connected with trusted providers for safe money transfers and real verification.
          </p>
        </ScrollReveal>
      </div>

      <div className="integrations-marquee-wrap" style={{ marginTop: '72px' }}>
        <div className="integrations-marquee" aria-hidden="true">
          {marqueeLogos.map((company, index) => (
            <LogoItem key={`${company.src}-${index}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
