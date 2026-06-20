'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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

export default function CompanyHero() {
  const carRef = useRef<HTMLDivElement>(null);
  const [carVisible, setCarVisible] = useState(false);

  useEffect(() => {
    const el = carRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCarVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full overflow-x-clip" style={{ backgroundColor: '#0F2A24', paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="page-max" style={{ paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }}>
        <div
          ref={carRef}
          className="company-hero-card"
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1321 / 744',
            backgroundColor: '#F8CA89',
            borderRadius: '32px',
            overflow: 'hidden',
          }}
        >
          {/* Copy */}
          <ScrollReveal animation="rise" style={{ position: 'relative', zIndex: 2, maxWidth: '760px' }}>
          <div className="company-hero-copy" style={{ padding: 'clamp(40px, 8vw, 93px) clamp(24px, 5vw, 75px)' }}>
            <h1
              className="company-hero-title"
              style={{
                fontFamily: 'SF Pro Display, system-ui, sans-serif',
                fontWeight: 800,
                lineHeight: '100%',
                letterSpacing: '-2.5%',
                color: '#0F2A24',
                width: '700px',
                maxWidth: '100%',
                minHeight: '112px',
                margin: 0,
              }}
            >
              We&apos;re building fair
              <br className="company-hero-title-br" />
              mobility on both
              <br className="company-hero-title-br" />
              sides.
            </h1>

            <p
              className="company-hero-subtext"
              style={{
                fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '130%',
                letterSpacing: '-2%',
                color: 'rgba(15,42,36,0.78)',
                maxWidth: '495px',
                margin: '24px 0 0',
              }}
            >
              GoJaye started from a simple frustration: riders overpay, drivers get squeezed, and nobody seems to win. We thought the trip could be fair to everyone in it.
            </p>

            <div className="company-hero-actions" style={{ display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
              <button style={{ ...buttonBase, width: '187px', padding: '14px 36px 16px', backgroundColor: '#0F2A24', color: '#FFFFFF' }}>
                Get early access
              </button>
              <a href="/waitlist" style={{ ...buttonBase, width: '171px', padding: '14px 16px 16px', gap: '10px', backgroundColor: '#FFFFFF', color: '#0F2A24', textDecoration: 'none' }}>
                Join the waitlist
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Car */}
          <div
            className="company-hero-car"
            style={{
              position: 'absolute',
              right: '-2%',
              bottom: 0,
              width: '70%',
              zIndex: 1,
              opacity: carVisible ? 1 : 0,
              transform: carVisible ? 'translateX(0)' : 'translateX(18%)',
              transition: 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
            }}
          >
            <Image
              src="/images/jayeride.png"
              alt="Jaye branded car"
              width={1926}
              height={1064}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
