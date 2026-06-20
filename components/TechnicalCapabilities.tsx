'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const items = [
  {
    number: '01',
    title: 'Real-time everything',
    description: 'Live location, live offers, live trip status — updated as it happens.',
    image: '/images/mockups/jaye app mock2.png',
  },
  {
    number: '02',
    title: 'Money you can audit',
    description: 'Every payment, payout, and deposit is logged and reconcilable to the kobo.',
    image: '/images/technical-capabilities/technical2.png',
  },
  {
    number: '03',
    title: 'Low-bandwidth ready',
    description: 'Lean screens, lazy-loaded images, and graceful behaviour when the signal drops.',
    image: '/images/technical-capabilities/technical3.png',
  },
  {
    number: '04',
    title: 'Central effort, available everywhere',
    description: 'iOS and Android from a single React Native build, tested on mid-range devices.',
    image: '/images/technical-capabilities/technical4.png',
  },
];

export default function TechnicalCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full section-y" style={{ backgroundColor: '#F6F7F9' }}>
      <div className="page-max page-gutter grid-2-col" style={{ alignItems: 'center' }}>
        <ScrollReveal animation="slide-left">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
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
                TECHNICAL CAPABILITIES
              </span>
              <span style={{ flex: 1, height: '1px', backgroundColor: '#D0D5D3' }} />
            </div>

            <h2
              className="responsive-h2 section-mobile-header"
              style={{
                fontFamily: 'SF Pro Display, system-ui, sans-serif',
                fontWeight: 800,
                lineHeight: '100%',
                letterSpacing: '-2.5%',
                color: '#1A1A1A',
                maxWidth: '648px',
                margin: '0 0 16px',
              }}
            >
              Jaye is crafted to withstand real life conditions
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
                margin: '0 0 40px',
              }}
            >
              GoJaye is built for the network you actually have, not a perfect one. Light on data, quick to load, and designed Android-first — with iOS held to the same bar.
            </p>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '4px 12px',
              }}
            >
              {items.map((item, index) => {
                const active = activeIndex === index;
                return (
                  <button
                    key={item.number}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px',
                      width: '100%',
                      padding: '16px 12px',
                      margin: '4px 0',
                      border: 'none',
                      borderRadius: '12px',
                      backgroundColor: active ? '#F3FAF7' : 'transparent',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background-color 0.35s cubic-bezier(0.22, 1, 0.36, 1), transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                      transform: active ? 'translateX(4px)' : 'translateX(0)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'SF Pro Display, system-ui, sans-serif',
                        fontWeight: 600,
                        fontSize: '14px',
                        letterSpacing: '-1%',
                        color: active ? '#1F8F6B' : '#9CA3AF',
                        marginTop: '3px',
                        minWidth: '24px',
                        transition: 'color 0.35s ease',
                      }}
                    >
                      {item.number}
                    </span>

                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontFamily: 'SF Pro Display, system-ui, sans-serif',
                          fontWeight: 700,
                          fontSize: '20px',
                          lineHeight: '120%',
                          letterSpacing: '-2.5%',
                          color: '#1A1A1A',
                          margin: '0 0 6px',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                          fontWeight: 400,
                          fontSize: '15px',
                          lineHeight: '130%',
                          letterSpacing: '-1%',
                          color: '#6B7280',
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      style={{
                        marginTop: '3px',
                        flexShrink: 0,
                        opacity: active ? 1 : 0.45,
                        transform: active ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'opacity 0.35s ease, transform 0.35s ease',
                      }}
                    >
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-right" delay={120}>
          <div
            className="tech-capability-preview"
            style={{
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '603 / 627',
              backgroundColor: '#E5E7EB',
            }}
          >
            {items.map((item, index) => (
              <Image
                key={item.number}
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
                className={`tech-capability-image${activeIndex === index ? ' active' : ''}`}
                style={{
                  objectFit: 'cover',
                  opacity: activeIndex === index ? 1 : 0,
                  transform: activeIndex === index ? 'scale(1) translateY(0)' : 'scale(1.04) translateY(12px)',
                  transition: 'opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
