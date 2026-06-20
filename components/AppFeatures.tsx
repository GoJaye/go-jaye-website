import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const CardIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
    <rect width="42" height="42" rx="8" fill="#F3FAF7" />
    <path
      d="M12 20V24.8002C12 25.9203 12 26.4801 12.218 26.9079C12.4097 27.2842 12.7155 27.5905 13.0918 27.7822C13.5192 28 14.079 28 15.1969 28H26.8031C27.921 28 28.48 28 28.9074 27.7822C29.2837 27.5905 29.5905 27.2842 29.7822 26.9079C30 26.4805 30 25.9215 30 24.8036V20M12 20V18M12 20H30M12 18V17.2002C12 16.0801 12 15.5196 12.218 15.0918C12.4097 14.7155 12.7155 14.4097 13.0918 14.218C13.5196 14 14.0801 14 15.2002 14H26.8002C27.9203 14 28.4796 14 28.9074 14.218C29.2837 14.4097 29.5905 14.7155 29.7822 15.0918C30 15.5192 30 16.079 30 17.1969V18M12 18H30M16 24H20M30 20V18"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const leftFeatures = [
  {
    title: 'The budget commute',
    description: "Propose a fare that fits what you've got. Get to work without watching a meter climb.",
  },
  {
    title: "The errand you can't make",
    description: 'Send documents or a parcel across town and get a confirmation when it lands.',
  },
  {
    title: 'Ultimate comfort',
    description: 'When you book a ride, you are signing up for a very comfortable experience.',
  },
];

const rightFeatures = [
  {
    title: 'The late shift home',
    description: 'Share your trip, ride with a verified driver, keep SOS one tap away.',
  },
  {
    title: 'The car, not the wheel',
    description: 'Hire a professional driver for your own car for a meeting, an event, or a long trip.',
  },
  {
    title: 'Reliable income for drivers',
    description: 'As a driver, you get to keep 100% of your earnings after monthly subscriptions.',
  },
];

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="feature-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '16px',
        minHeight: '164px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardIcon />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3
          style={{
            fontFamily: 'SF Pro Display, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '-2.5%',
            color: '#1A1A1A',
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'Satoshi Variable, system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            color: '#6B7280',
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AppFeatures() {
  return (
    <section className="w-full section-y" style={{ backgroundColor: '#F6F7F9' }}>
      <div className="page-max page-gutter">
        <ScrollReveal animation="rise">
          <h2
            className="responsive-h2 app-features-title"
            style={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 800,
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              color: '#1A1A1A',
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto clamp(40px, 8vw, 64px)',
            }}
          >
            However the day goes, Jaye app keeps up with you
          </h2>
        </ScrollReveal>

        <div className="grid-features">
          <div className="features-col features-col-left" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {leftFeatures.map((f, index) => (
              <ScrollReveal key={f.title} animation="slide-left" delay={index * 80}>
                <FeatureCard {...f} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="rise" delay={120}>
            <div
              className="features-phone"
              style={{
                width: 'min(593px, 100%)',
                maxWidth: '100%',
                height: 'min(532px, 70vw)',
                margin: '0 auto',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#D6F1E6',
              }}
            >
              <Image
                src="/images/mockups/jaye app mock.png"
                alt="Jaye app on iPhone"
                width={1186}
                height={1064}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>

          <div className="features-col features-col-right" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {rightFeatures.map((f, index) => (
              <ScrollReveal key={f.title} animation="slide-right" delay={index * 80}>
                <FeatureCard {...f} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
