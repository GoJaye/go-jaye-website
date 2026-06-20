'use client';

import { FormEvent, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function WaitlistHero() {
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      className="hero-dots-bg seamless-hero"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '140px',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <ScrollReveal
          animation="rise"
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
        <h1
          style={{
            fontFamily: 'SF Pro Display, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: '64px',
            lineHeight: '88%',
            letterSpacing: '-2.5%',
            textAlign: 'center',
            color: '#0F2A24',
            width: '456px',
            maxWidth: '100%',
            margin: 0,
          }}
        >
          Join our waitlist
        </h1>

        <p
          style={{
            fontFamily: 'Satoshi Variable, system-ui, sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            textAlign: 'center',
            color: '#4B5563',
            width: '495px',
            maxWidth: '100%',
            margin: '24px auto 0',
          }}
        >
          We are actively building, and we seek your support through this phase, kindly join us before launch.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '517px',
            maxWidth: '100%',
            height: '62px',
            margin: '40px auto 0',
            borderRadius: '100px',
            gap: '10px',
            padding: '4px 4px 4px 16px',
            border: '1px solid #E5E7EB',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 24px rgba(15, 42, 36, 0.08)',
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            style={{
              flex: 1,
              minWidth: 0,
              height: '100%',
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              letterSpacing: '-2%',
              color: '#0F2A24',
            }}
          />
          <button
            type="submit"
            style={{
              height: '54px',
              padding: '14px 24px 16px',
              borderRadius: '100px',
              border: 'none',
              backgroundColor: '#0F2A24',
              color: '#FFFFFF',
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '-2%',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            Join the waitlist
          </button>
        </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
