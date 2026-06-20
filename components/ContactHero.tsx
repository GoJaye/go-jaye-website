import type { ReactNode } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const SupportIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#F3FAF7" />
    <path
      d="M13 15L19.1076 19.6123L19.1097 19.614C19.7878 20.1113 20.1271 20.3601 20.4988 20.4562C20.8272 20.5412 21.1725 20.5412 21.501 20.4562C21.8729 20.36 22.2132 20.1105 22.8926 19.6123C22.8926 19.6123 26.8101 16.6059 29 15M12 24.8002V17.2002C12 16.0801 12 15.5196 12.218 15.0918C12.4097 14.7155 12.7155 14.4097 13.0918 14.218C13.5196 14 14.0801 14 15.2002 14H26.8002C27.9203 14 28.4796 14 28.9074 14.218C29.2837 14.4097 29.5905 14.7155 29.7822 15.0918C30 15.5192 30 16.079 30 17.1969V24.8036C30 25.9215 30 26.4805 29.7822 26.9079C29.5905 27.2842 29.2837 27.5905 28.9074 27.7822C28.48 28 27.921 28 26.8031 28H15.1969C14.079 28 13.5192 28 13.0918 27.7822C12.7155 27.5905 12.4097 27.2842 12.218 26.9079C12 26.4801 12 25.9203 12 24.8002Z"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FleetIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#F3FAF7" />
    <path
      d="M12 20H13.0455M13.0455 20H28.9545M13.0455 20C13.0566 19.9485 13.0698 19.8975 13.085 19.8471C13.1212 19.7268 13.1724 19.6111 13.2754 19.3795L14.8217 15.9004C15.1274 15.2125 15.2805 14.8684 15.5221 14.6162C15.7357 14.3933 15.9976 14.223 16.2881 14.1184C16.6167 14 16.9934 14 17.7461 14H24.2536C25.0063 14 25.3833 14 25.7119 14.1184C26.0024 14.223 26.264 14.3933 26.4775 14.6162C26.719 14.8682 26.8718 15.2121 27.1771 15.899L28.7296 19.3921C28.8289 19.6154 28.8794 19.729 28.915 19.8471C28.9301 19.8975 28.9433 19.9485 28.9545 20M13.0455 20C13.033 20.0576 13.0231 20.1158 13.0157 20.1743C13 20.299 13 20.4257 13 20.6792V26M28.9545 20H30M28.9545 20C28.967 20.0576 28.977 20.1158 28.9844 20.1743C29 20.2982 29 20.4242 29 20.6746V26.0001M29 26.0001L25 26.0001M29 26.0001V26.9999C29 28.1045 28.1046 29 27 29C25.8954 29 25 28.1046 25 27V26.0001M13 26H17L25 26.0001M17 26V27C17 28.1046 16.1046 29 15 29C13.8954 29 13 28.1046 13 27V26"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PartnershipsIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="42" height="42" rx="8" fill="#F3FAF7" />
    <path
      d="M12 21H17M12 21C12 25.9706 16.0294 30 21 30M12 21C12 16.0294 16.0294 12 21 12M17 21H25M17 21C17 25.9706 18.7909 30 21 30M17 21C17 16.0294 18.7909 12 21 12M25 21H30M25 21C25 16.0294 23.2091 12 21 12M25 21C25 25.9706 23.2091 30 21 30M30 21C30 16.0294 25.9706 12 21 12M30 21C30 25.9706 25.9706 30 21 30"
      stroke="#0F2A24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type ContactCard = {
  icon: ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
  buttonWidth: number;
};

const cards: ContactCard[] = [
  {
    icon: SupportIcon,
    title: 'Our 24-hour reliable support',
    description: 'For any general questions or information about our services, feel free to reach out.',
    buttonLabel: 'Contact 24hr GoJaye Support',
    buttonWidth: 218,
  },
  {
    icon: FleetIcon,
    title: 'Special information about JayeFleet?',
    description: 'For any specific question or enquiries about JayeFleet, kindly contact our Fleet team directly.',
    buttonLabel: 'Contact Fleet',
    buttonWidth: 116,
  },
  {
    icon: PartnershipsIcon,
    title: 'Partnerships',
    description: 'Are you curious or interested in partnering with, or investing at GoJaye? Contact us today!',
    buttonLabel: 'Contact Team',
    buttonWidth: 120,
  },
];

function ContactCardItem({ card }: { card: ContactCard }) {
  return (
    <div
      className="contact-hero-card-item"
      style={{
        width: '383px',
        maxWidth: '100%',
        height: '226px',
        borderRadius: '16px',
        padding: '16px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
        {card.icon}
        <h3
          style={{
            fontFamily: 'SF Pro Display, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            color: '#0F2A24',
            margin: 0,
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontFamily: 'Satoshi Variable, system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '130%',
            letterSpacing: '-1%',
            color: '#4B5563',
            margin: 0,
          }}
        >
          {card.description}
        </p>
      </div>

      <button
        type="button"
        style={{
          width: `${card.buttonWidth}px`,
          height: '32px',
          borderRadius: '100px',
          border: 'none',
          backgroundColor: '#EDEEF1',
          fontFamily: 'Satoshi Variable, system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '-2%',
          color: '#0F2A24',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          padding: '10px 16px 12px',
          alignSelf: 'flex-start',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        {card.buttonLabel}
      </button>
    </div>
  );
}

export default function ContactHero() {
  return (
    <section
      className="hero-dots-bg seamless-hero"
      style={{
        width: '100%',
        paddingTop: '180px',
      }}
    >
      <div className="page-max page-gutter" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ScrollReveal
          animation="rise"
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
        <h1
          className="responsive-h1 contact-hero-title"
          style={{
            fontFamily: 'SF Pro Display, system-ui, sans-serif',
            fontWeight: 800,
            lineHeight: '88%',
            letterSpacing: '-2.5%',
            textAlign: 'center',
            color: '#0F2A24',
            width: '609px',
            maxWidth: '100%',
            margin: 0,
          }}
        >
          Stay in touch with us.
        </h1>

        <p
          className="contact-hero-subtext responsive-body"
          style={{
            fontFamily: 'Satoshi Variable, system-ui, sans-serif',
            fontWeight: 500,
            lineHeight: '120%',
            letterSpacing: '-2%',
            textAlign: 'center',
            color: '#4B5563',
            width: '495px',
            maxWidth: '100%',
            margin: '24px auto 0',
          }}
        >
          Question, idea, or a problem with a trip — reach us the way that suits you, and we&apos;ll get back quickly.
        </p>
        </ScrollReveal>

        <div
          className="contact-hero-cards"
          style={{
            display: 'flex',
            gap: '30px',
            marginTop: '48px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} animation="rise" delay={index * 100}>
              <ContactCardItem card={card} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
