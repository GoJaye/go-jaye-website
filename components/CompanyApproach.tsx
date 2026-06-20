'use client';

import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const TrustIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#F3FAF7" />
    <path
      d="M24 18L20 22L18 20M29 19.165C29 25.7333 24.0319 28.6781 21.9258 29.6314L21.9231 29.6325C21.7016 29.7328 21.5906 29.7831 21.3389 29.8263C21.1795 29.8537 20.8215 29.8537 20.6621 29.8263C20.4094 29.7829 20.2972 29.7325 20.074 29.6314C17.9678 28.6781 13 25.7333 13 19.165V15.2002C13 14.0801 13 13.5196 13.218 13.0918C13.4097 12.7155 13.7155 12.4097 14.0918 12.218C14.5196 12 15.0801 12 16.2002 12H25.8002C26.9203 12 27.4796 12 27.9074 12.218C29.2837 12.4097 29.5905 12.7155 29.7822 13.0918C29 13.5192 29 14.079 29 15.1969V19.165Z"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TransparencyIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#F3FAF7" />
    <path d="M12 21C12 25.9706 16.0294 30 21 30C25.9706 30 30 25.9706 30 21C30 16.0294 25.9706 12 21 12C16.0294 12 12 16.0294 12 21Z" stroke="#0F2A24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.5 19.5L25 17L22.5 22.5L17 25L19.5 19.5Z" stroke="#0F2A24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SafetyIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#F3FAF7" />
    <path
      d="M21.9258 29.6314C24.0319 28.6781 29 25.7333 29 19.165V15.1969C29 14.079 29 13.5192 28.7822 13.0918C28.5905 12.7155 28.2837 12.4097 27.9074 12.218C27.4796 12 26.9203 12 25.8002 12H16.2002C15.0801 12 14.5196 12 14.0918 12.218C13.7155 12.4097 13.4097 12.7155 13.218 13.0918C13 13.5196 13 14.0801 13 15.2002V19.165C13 25.7333 17.9678 28.6781 20.074 29.6314C20.2972 29.7325 20.4094 29.7829 20.6621 29.8263C20.8215 29.8537 21.1795 29.8537 21.3389 29.8263C21.5907 29.7831 21.7017 29.7328 21.9235 29.6324L21.9258 29.6314Z"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EarnersIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

const ChoiceIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#F3FAF7" />
    <path
      d="M15 16.5002V16.2002C15 15.0801 15 14.5196 15.218 14.0918C15.4097 13.7155 15.7155 13.4097 16.0918 13.218C16.5196 13 17.0801 13 18.2002 13H26.8002C27.9203 13 28.4796 13 28.9074 13.218C29.2837 13.4097 29.5905 13.7155 29.7822 14.0918C30 14.5192 30 15.079 30 16.1969V22.8031C30 23.921 30 24.48 29.7822 24.9074C29.5905 25.2837 29.2839 25.5905 28.9076 25.7822C28.4802 26 27.921 26 26.8031 26H19.5M12 25.8002V20.2002C12 19.0801 12 18.5196 12.218 18.0918C12.4097 17.7155 12.7155 17.4097 13.0918 17.218C13.5196 17 14.0801 17 15.2002 17H15.8002C16.9203 17 17.4796 17 17.9074 17.218C18.2837 17.4097 18.5905 17.7155 18.7822 18.0918C19 18.5192 19 19.079 19 20.1969V25.8031C19 26.921 19 27.48 18.7822 27.9074C18.5905 28.2837 18.2837 28.5905 17.9074 28.7822C17.48 29 16.921 29 15.8031 29H15.1969C14.079 29 13.5192 29 13.0918 28.7822C12.7155 28.5905 12.4097 28.2837 12.218 27.9074C12 27.4796 12 26.9203 12 25.8002Z"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BuiltForHereIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#F3FAF7" />
    <path
      d="M14 18.9229C14 23.7747 18.2445 27.7869 20.1232 29.3252C20.3921 29.5454 20.5281 29.6568 20.7287 29.7132C20.8849 29.7572 21.1148 29.7572 21.271 29.7132C21.472 29.6567 21.6071 29.5463 21.877 29.3254C23.7557 27.7871 27.9999 23.7751 27.9999 18.9233C27.9999 17.0872 27.2625 15.3261 25.9497 14.0277C24.637 12.7294 22.8566 12 21.0001 12C19.1436 12 17.363 12.7295 16.0503 14.0278C14.7375 15.3262 14 17.0867 14 18.9229Z"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19 18C19 19.1046 19.8954 20 21 20C22.1046 20 23 19.1046 23 18C23 16.8954 22.1046 16 21 16C19.8954 16 19 16.8954 19 18Z" stroke="#0F2A24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type Card = { id: string; icon: ReactNode; title: string; description: string };

const sideCards: Card[] = [
  { id: 'trust', icon: TrustIcon, title: 'Trust first', description: 'Every trip, payment, and driver is backed by verification and a record you can check.' },
  { id: 'transparency', icon: TransparencyIcon, title: 'Transparency', description: 'Prices, fees, and timelines are visible before you commit — never after.' },
];

const bottomCards: Card[] = [
  { id: 'safety', icon: SafetyIcon, title: 'Safety by design', description: 'KYC, SOS, tracking, and dispute handling ship on day one, as intended.' },
  { id: 'earners', icon: EarnersIcon, title: 'Empower local earners', description: 'Drivers keep 100% of fares and get reliable payouts. Fair is the whole point.' },
  { id: 'choice', icon: ChoiceIcon, title: 'Choice & flexibility', description: 'Ride, send, or hire a driver — from one app, your way.' },
  { id: 'built', icon: BuiltForHereIcon, title: 'Built for here', description: 'Cash and digital, low-bandwidth design, local trust concerns taken seriously.' },
];

const sideCardIds = new Set(sideCards.map((c) => c.id));
const bottomCardIds = new Set(bottomCards.map((c) => c.id));

function InfoCard({
  card,
  hovered,
  onHover,
  onLeave,
}: {
  card: Card;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const isSide = sideCardIds.has(card.id);

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        backgroundColor: hovered ? '#F8CA89' : '#FFFFFF',
        borderRadius: hovered ? '24px' : '16px',
        padding: hovered ? (isSide ? '32px 24px' : '28px 20px') : '16px',
        minHeight: hovered ? (isSide ? '344px' : '220px') : '164px',
        height: hovered && isSide ? '100%' : hovered ? 'auto' : '164px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: hovered ? 'flex-start' : 'space-between',
        gap: hovered ? '20px' : undefined,
        transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        cursor: 'default',
        overflow: 'hidden',
        opacity: hovered ? 1 : undefined,
      }}
    >
      {card.icon}
      <div style={{ display: 'flex', flexDirection: 'column', gap: hovered ? '10px' : '6px' }}>
        <h3
          style={{
            fontFamily: 'SF Pro Display, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: hovered ? (isSide ? '26px' : '22px') : '18px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            color: '#0F2A24',
            margin: 0,
            transition: 'font-size 0.45s ease',
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontFamily: 'Satoshi Variable, system-ui, sans-serif',
            fontWeight: 400,
            fontSize: hovered ? '15px' : '14px',
            lineHeight: '130%',
            letterSpacing: '-1%',
            color: hovered ? 'rgba(15,42,36,0.78)' : '#6B7280',
            margin: 0,
            transition: 'font-size 0.45s ease, color 0.45s ease',
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function CompanyApproach() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const sideHovered = hoveredId !== null && sideCardIds.has(hoveredId);
  const bottomHovered = hoveredId !== null && bottomCardIds.has(hoveredId);

  return (
    <section className="w-full" style={{ backgroundColor: '#F6F7F9', paddingTop: '80px', paddingBottom: '100px' }}>
      <ScrollReveal animation="rise">
        <div className="page-max page-gutter" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            className="approach-grid-top"
            style={{
              gridTemplateColumns: sideHovered ? 'minmax(260px, 1fr) minmax(380px, 2fr)' : undefined,
              transition: 'grid-template-columns 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
              alignItems: 'stretch',
            }}
          >
            <div
              className="company-approach-intro"
              style={{
                backgroundColor: '#F8CA89',
                borderRadius: '24px',
                padding: sideHovered ? '28px 24px' : '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: sideHovered ? '24px' : '40px',
                transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                opacity: sideHovered ? 0.72 : 1,
                transform: sideHovered ? 'scale(0.97)' : 'scale(1)',
                transformOrigin: 'center left',
              }}
            >
              <Image
                src="/images/how we approach.png"
                alt=""
                width={40}
                height={40}
                aria-hidden
                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
              />

              <div>
                <h2
                  style={{
                    fontFamily: 'SF Pro Display, system-ui, sans-serif',
                    fontWeight: 800,
                    fontSize: sideHovered ? '28px' : '36px',
                    lineHeight: '108%',
                    letterSpacing: '-2.5%',
                    color: '#0F2A24',
                    margin: '0 0 16px',
                    maxWidth: '560px',
                    transition: 'font-size 0.45s ease',
                  }}
                >
                  How we approach mobility in Nigeria differently.
                </h2>
                <p
                  style={{
                    fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: sideHovered ? '14px' : '16px',
                    lineHeight: '140%',
                    letterSpacing: '-2%',
                    color: 'rgba(15,42,36,0.78)',
                    margin: 0,
                    maxWidth: '620px',
                    transition: 'font-size 0.45s ease',
                  }}
                >
                  We don&apos;t just fix broken systems, we completely rethink how mobility should feel when it&apos;s truly working: smoother, clearer, and empowering for every Nigerian.
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateRows: hoveredId === 'trust' ? '2fr 1fr' : hoveredId === 'transparency' ? '1fr 2fr' : '1fr 1fr',
                gap: '16px',
                transition: 'grid-template-rows 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                minHeight: '344px',
              }}
            >
              {sideCards.map((card) => (
                <InfoCard
                  key={card.id}
                  card={card}
                  hovered={hoveredId === card.id}
                  onHover={() => setHoveredId(card.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </div>
          </div>

          <div
            className="approach-grid-bottom"
            style={{
              transition: 'grid-template-columns 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
              gridTemplateColumns: bottomCards
                .map((card) => (hoveredId === card.id ? '2.2fr' : bottomHovered ? '0.75fr' : '1fr'))
                .join(' '),
            }}
          >
            {bottomCards.map((card) => (
              <InfoCard
                key={card.id}
                card={card}
                hovered={hoveredId === card.id}
                onHover={() => setHoveredId(card.id)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
