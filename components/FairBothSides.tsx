import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const RiderIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#D6F1E6" />
    <path
      d="M28 30C28 26.134 24.866 23 21 23C17.134 23 14 26.134 14 30M21 20C18.7909 20 17 18.2091 17 16C17 13.7909 18.7909 12 21 12C23.2091 12 25 13.7909 25 16C25 18.2091 23.2091 20 21 20Z"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DriverIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#D6F1E6" />
    <path
      d="M12 20H13.0455M13.0455 20H28.9545M13.0455 20C13.0566 19.9485 13.0698 19.8975 13.085 19.8471C13.1212 19.7268 13.1724 19.6111 13.2754 19.3795L14.8217 15.9004C15.1274 15.2125 15.2805 14.8684 15.5221 14.6162C15.7357 14.3933 15.9976 14.223 16.2881 14.1184C16.6167 14 16.9934 14 17.7461 14H24.2536C25.0063 14 25.3833 14 25.7119 14.1184C26.0024 14.223 26.264 14.3933 26.4775 14.6162C26.719 14.8682 26.8718 15.2121 27.1771 15.899L28.7296 19.3921C28.8289 19.6154 28.8794 19.729 28.915 19.8471C28.9301 19.8975 28.9433 19.9485 28.9545 20M13.0455 20C13.033 20.0576 13.0231 20.1158 13.0157 20.1743C13 20.299 13 20.4257 13 20.6792V26M28.9545 20H30M28.9545 20C28.967 20.0576 28.977 20.1158 28.9844 20.1743C29 20.2982 29 20.4242 29 20.6746V26.0001M29 26.0001L25 26.0001M29 26.0001V26.9999C29 28.1045 28.1046 29 27 29C25.8954 29 25 28.1046 25 27V26.0001M13 26H17L25 26.0001M17 26V27C17 28.1046 16.1046 29 15 29C13.8954 29 13 28.1046 13 27V26"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const cards = [
  {
    Icon: RiderIcon,
    title: 'FOR RIDERS',
    body:
      'A price you helped set, a driver you can see coming, and a total you saw before you tapped "book". Getting around shouldn’t feel like a gamble on the meter.',
    image: '/images/mockups/for riders.png',
    animation: 'slide-left' as const,
  },
  {
    Icon: DriverIcon,
    title: 'FOR DRIVERS',
    body:
      'Keep 100% of every fare. No commission on JayeRide trips, ever! Instead of losing a fifth of each ride, you pay one flat monthly subscription, and your first 30 days are free.',
    image: '/images/mockups/for drivers.png',
    animation: 'slide-right' as const,
  },
];

export default function FairBothSides() {
  return (
    <section className="w-full bg-white section-y">
      <div className="page-max page-gutter">
        <ScrollReveal animation="rise">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '56px' }}>
          <h2
            className="responsive-h2 fair-both-sides-title"
            style={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 800,
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              color: '#1A1A1A',
              maxWidth: '599px',
              margin: '0 0 16px',
            }}
          >
              Fair on both sides of the trip
            </h2>

            <p
              className="responsive-body"
              style={{
                fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                fontWeight: 500,
                lineHeight: '120%',
                letterSpacing: '-2%',
                color: '#4B5563',
                maxWidth: '599px',
                margin: 0,
              }}
            >
              The rules for a driver and a rider are different, but fair and considerate to point of negotiations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-2-col">
          {cards.map(({ Icon, title, body, image, animation }, index) => (
            <ScrollReveal key={title} animation={animation} delay={index * 120}>
              <div
                style={{
                  backgroundColor: '#F3FAF7',
                  borderRadius: '24px',
                  padding: '24px',
                  height: 'auto',
                minHeight: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon />
                  <h3
                    style={{
                      fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '120%',
                      letterSpacing: '-2%',
                      color: '#0F2A24',
                      margin: 0,
                    }}
                  >
                    {title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '150%',
                    letterSpacing: '-2%',
                    textAlign: 'justify',
                    color: '#4B5563',
                    margin: 0,
                  }}
                >
                  {body}
                </p>

                <div
                  style={{
                    marginTop: 'auto',
                    width: '100%',
                    aspectRatio: '600 / 472',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: '#E5E7EB',
                  }}
                >
                  <Image
                    src={image}
                    alt={`${title} app interface`}
                    width={1200}
                    height={944}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
