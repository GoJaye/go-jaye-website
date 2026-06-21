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
      <div className="waitlist-hero-inner">
        <ScrollReveal animation="rise" className="waitlist-hero-reveal">
        <h1 className="waitlist-hero-title">
          Join our waitlist
        </h1>

        <p className="waitlist-hero-subtext">
          We are actively building, and we seek your support through this phase, kindly join us before launch.
        </p>

        <form
          onSubmit={handleSubmit}
          className="waitlist-hero-form"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            className="waitlist-hero-input"
          />
          <button
            type="submit"
            className="waitlist-hero-submit"
          >
            Join the waitlist
          </button>
        </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
