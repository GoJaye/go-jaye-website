'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const SLIDE_DURATION = 6000; // ms each slide stays before advancing

const subtext =
  'Jaye is your go-to for stylish and quality rides. Book a ride, rent a car, or hire a driver. Have a car or know how to drive? Start earning with us!';

const slides = [
  { image: '/images/hero-carousel1.png', title: 'Moving just became easier and enjoyable.', objectPosition: 'center' },
  { image: '/images/hero-carousel2.png', title: 'Get good deals on same-day deliveries.', objectPosition: 'center 15%' },
  { image: '/images/hero-carousel3.png', title: 'Earn more on every trip you take.', objectPosition: 'center 15%' },
  { image: '/images/hero-carousel4.png', title: 'Moving just became easier and enjoyable.', objectPosition: 'center 30%' },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '760px',
        overflow: 'hidden',
      }}
    >
      {/* Background carousel */}
      {slides.map((slide, i) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          fill
          priority={i === 0}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: slide.objectPosition,
            opacity: i === active ? 1 : 0,
            transition: 'opacity 800ms ease-in-out',
          }}
        />
      ))}

      {/* Bottom gradient for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.65) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="page-max page-gutter"
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '64px',
        }}
      >
        <ScrollReveal animation="rise" style={{ width: '100%' }}>
        <h1
          className="responsive-h1"
          style={{
            fontFamily: 'SF Pro Display, system-ui, sans-serif',
            fontWeight: 800,
            lineHeight: '88%',
            letterSpacing: '-2.5%',
            color: '#FFFFFF',
            maxWidth: '610px',
            width: '100%',
            margin: 0,
          }}
        >
          {slides[active].title}
        </h1>

        <p
          className="responsive-body"
          style={{
            fontFamily: 'Satoshi Variable, system-ui, sans-serif',
            fontWeight: 500,
            lineHeight: '120%',
            letterSpacing: '-2%',
            color: 'rgba(255,255,255,0.92)',
            maxWidth: '610px',
            margin: '24px 0 0',
          }}
        >
          {subtext}
        </p>

        <div className="hero-actions" style={{ display: 'flex', gap: '16px', marginTop: '36px' }}>
          <button
            style={{
              height: '54px',
              padding: '14px 32px 16px',
              borderRadius: '100px',
              border: 'none',
              backgroundColor: 'rgba(15,42,36,0.85)',
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '-2%',
              color: 'white',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Get early access
          </button>
          <button
            style={{
              height: '54px',
              padding: '14px 32px 16px',
              borderRadius: '100px',
              border: 'none',
              backgroundColor: 'white',
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '-2%',
              color: '#0F2A24',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Join the waitlist
          </button>
        </div>
        </ScrollReveal>
      </div>

      {/* Progress indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1440px',
          display: 'flex',
          gap: '16px',
          padding: '0 var(--page-gutter) 28px',
        }}
      >
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              flex: 1,
              height: '4px',
              border: 'none',
              padding: 0,
              borderRadius: '100px',
              backgroundColor: 'rgba(255,255,255,0.35)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <span
              style={{
                display: 'block',
                height: '100%',
                width: i < active ? '100%' : i === active ? '100%' : '0%',
                backgroundColor: '#1F8F6B',
                borderRadius: '100px',
                transformOrigin: 'left',
                animation: i === active ? `heroProgress ${SLIDE_DURATION}ms linear` : 'none',
              }}
            />
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes heroProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
