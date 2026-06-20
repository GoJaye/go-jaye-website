'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  {
    question: 'When does GoJaye launch?',
    answer:
      "We're launching first with JayeRide. Join the waitlist and you'll be among the first to know when we go live.",
  },
  {
    question: 'How does "name your own fare" work?',
    answer:
      'You propose a fare that works for you, and drivers who are willing to accept it can respond to your request.',
  },
  {
    question: 'Can I send a delivery?',
    answer: 'Yes! You can send parcels via our delivery service with same-day delivery in select areas.',
  },
  {
    question: 'Is my safety guaranteed?',
    answer:
      'Your safety is our top priority. All drivers are verified and all trips are transparent with SOS features available.',
  },
  {
    question: 'What does it cost to drive?',
    answer:
      'Our subscription model is simple and transparent. First 30 days free, then a flat monthly fee. You keep 100% of your earnings.',
  },
  {
    question: 'Can I order food or rent a car yet?',
    answer: 'Food and car rental services are coming soon. Stay tuned for announcements!',
  },
  {
    question: 'How do I get started?',
    answer:
      "Join the waitlist to be among the first to access GoJaye when we launch. We'll notify you with all the details.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full faq-section section-y" id="faqs">
      <div className="page-max page-gutter grid-faq">
        {/* Left — heading */}
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
              FAQs
            </span>
            <span style={{ flex: 1, height: '1px', backgroundColor: '#D0D5D3' }} />
          </div>

          <h2
            className="responsive-h2"
            style={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 800,
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              color: '#1A1A1A',
              margin: '0 0 16px',
            }}
          >
            Have further questions? We have answers!
          </h2>

          <p
            className="responsive-body"
            style={{
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#4B5563',
              maxWidth: '474px',
              margin: 0,
            }}
          >
            Clear the last doubts before committing to us.
          </p>
        </div>
        </ScrollReveal>

        {/* Right — single FAQ card */}
        <ScrollReveal animation="slide-right" delay={120}>
        <div
          className="faq-card"
          style={{
            width: '100%',
            maxWidth: '648px',
            borderRadius: '16px',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px 24px',
          }}
        >
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  padding: '20px 0',
                  borderBottom: index === faqs.length - 1 ? 'none' : '1px solid #ECEEF0',
                }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  aria-expanded={open}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      marginTop: '1px',
                      transition: 'transform 200ms ease',
                      transform: open ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    <path d="M10 4V16M4 10H16" stroke="#0F2A24" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '120%',
                      letterSpacing: '-2%',
                      color: '#16241F',
                    }}
                  >
                    {faq.question}
                  </span>
                </button>

                {open && (
                  <p
                    style={{
                      fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '140%',
                      letterSpacing: '-1%',
                      color: '#4B5563',
                      margin: '10px 0 0 32px',
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
