'use client';

import { FormEvent, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const PhoneIcon = (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M10.5585 4.73028C10.221 3.8866 9.40385 3.33337 8.49517 3.33337H5.43876C4.27605 3.33337 3.3335 4.2757 3.3335 5.43841C3.3335 15.3214 11.3455 23.3334 21.2285 23.3334C22.3912 23.3334 23.3335 22.3907 23.3335 21.228L23.334 18.1711C23.334 17.2624 22.7809 16.4454 21.9372 16.108L19.0079 14.9366C18.25 14.6335 17.3871 14.7699 16.7601 15.2925L16.0041 15.923C15.1211 16.6588 13.822 16.6003 13.0093 15.7876L10.8804 13.6568C10.0677 12.8441 10.0076 11.546 10.7434 10.663L11.3739 9.90704C11.8964 9.27999 12.034 8.41688 11.7309 7.65903L10.5585 4.73028Z"
      stroke="#1B1D22"
      strokeWidth="2.22222"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MessageIcon = (
  <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M2.22244 2.2222L9.0087 7.34694L9.01096 7.34881C9.76449 7.9014 10.1415 8.17786 10.5544 8.28466C10.9194 8.37905 11.303 8.37905 11.668 8.28466C12.0812 8.17776 12.4593 7.9005 13.2142 7.34694C13.2142 7.34694 17.567 4.00657 20.0002 2.2222M1.11133 13.1113V4.66686C1.11133 3.4223 1.11133 2.79955 1.35354 2.32419C1.56659 1.90605 1.9063 1.56634 2.32444 1.35329C2.7998 1.11108 3.42254 1.11108 4.6671 1.11108H17.556C18.8005 1.11108 19.422 1.11108 19.8973 1.35329C20.3155 1.56634 20.6563 1.90605 20.8694 2.32419C21.1113 2.79909 21.1113 3.42108 21.1113 4.66321V13.1151C21.1113 14.3572 21.1113 14.9783 20.8694 15.4532C20.6563 15.8713 20.3155 16.2116 19.8973 16.4247C19.4224 16.6666 18.8013 16.6666 17.5592 16.6666H4.66345C3.42132 16.6666 2.79933 16.6666 2.32444 16.4247C1.9063 16.2116 1.56659 15.8713 1.35354 15.4532C1.11133 14.9778 1.11133 14.3559 1.11133 13.1113Z"
      stroke="#1B1D22"
      strokeWidth="2.22222"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M5.55566 11.0254C5.55566 16.4163 10.2717 20.8744 12.3592 22.5836C12.658 22.8282 12.8091 22.952 13.032 23.0147C13.2056 23.0636 13.461 23.0636 13.6345 23.0147C13.8579 22.9519 14.008 22.8293 14.3078 22.5838C16.3953 20.8746 21.1111 16.4168 21.1111 11.0259C21.1111 8.9858 20.2917 7.02899 18.8331 5.5864C17.3745 4.14381 15.3963 3.33337 13.3335 3.33337C11.2707 3.33337 9.29234 4.14393 7.83372 5.58652C6.37511 7.02911 5.55566 8.9853 5.55566 11.0254Z"
      stroke="#1B1D22"
      strokeWidth="2.22222"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1112 10C11.1112 11.2273 12.1061 12.2223 13.3334 12.2223C14.5607 12.2223 15.5557 11.2273 15.5557 10C15.5557 8.77274 14.5607 7.77782 13.3334 7.77782C12.1061 7.77782 11.1112 8.77274 11.1112 10Z"
      stroke="#1B1D22"
      strokeWidth="2.22222"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const enquiryReasons = [
  'General enquiry',
  'Trip issue',
  'Fleet enquiry',
  'Partnership',
  'Feedback / report',
];

const fieldLabelStyle: React.CSSProperties = {
  fontFamily: 'Satoshi Variable, system-ui, sans-serif',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '120%',
  letterSpacing: '-2%',
  color: '#FFFFFF',
  marginBottom: '8px',
  display: 'block',
};

const fieldInputStyle: React.CSSProperties = {
  width: '100%',
  height: '48px',
  borderRadius: '8px',
  border: '1px solid rgba(255,255,255,0.2)',
  backgroundColor: 'rgba(255,255,255,0.08)',
  padding: '0 16px',
  fontFamily: 'Satoshi Variable, system-ui, sans-serif',
  fontWeight: 400,
  fontSize: '16px',
  letterSpacing: '-2%',
  color: '#FFFFFF',
  outline: 'none',
};

const contactDetails = [
  { icon: PhoneIcon, value: '+2348147956593' },
  { icon: MessageIcon, value: 'support@gojaye.com' },
  { icon: LocationIcon, value: '5 Washington Square, New York, USA' },
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="w-full contact-form-section section-y">
      <div className="page-max page-gutter grid-2-split contact-form-grid">
        {/* Left — contact info */}
        <ScrollReveal animation="slide-left">
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
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
              CONTACT US
            </span>
            <span style={{ flex: 1, height: '1px', backgroundColor: '#D0D5D3' }} />
          </div>

          <h2
            style={{
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              color: '#1A1A1A',
              width: '648px',
              maxWidth: '100%',
              margin: '0 0 24px',
            }}
          >
            Connect with us directly.
          </h2>

          <p className="contact-form-subtext responsive-body" style={{
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#4B5563',
              width: '605px',
              maxWidth: '100%',
              margin: 0,
            }}
          >
            Our support team is always ready to take your call, enquiries and information. Reach out to us to make a report or for any general information about GoJaye.
          </p>

          <div className="contact-details-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: 'auto', paddingTop: '48px' }}>
            {contactDetails.map((item) => (
              <div key={item.value} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ flexShrink: 0, display: 'inline-flex' }}>{item.icon}</span>
                <span
                  style={{
                    fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '120%',
                    letterSpacing: '-2%',
                    color: '#1A1A1A',
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* Right — form */}
        <ScrollReveal animation="slide-right" delay={120}>
        <div className="contact-form-wrap">
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '669px',
            borderRadius: '16px',
            padding: '32px',
            backgroundColor: '#0F2A24',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <label htmlFor="contact-name" style={fieldLabelStyle}>Name</label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What's your name?"
              style={fieldInputStyle}
            />
          </div>

          <div>
            <label htmlFor="contact-email" style={fieldLabelStyle}>Email</label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={fieldInputStyle}
            />
          </div>

          <div>
            <label htmlFor="contact-reason" style={fieldLabelStyle}>Enquiry reason</label>
            <div style={{ position: 'relative' }}>
              <select
                id="contact-reason"
                required
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                style={{
                  ...fieldInputStyle,
                  appearance: 'none',
                  cursor: 'pointer',
                  color: reason ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                }}
              >
                <option value="" disabled>Choose reason</option>
                {enquiryReasons.map((option) => (
                  <option key={option} value={option} style={{ color: '#0F2A24' }}>
                    {option}
                  </option>
                ))}
              </select>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
              >
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" style={fieldLabelStyle}>Message</label>
            <textarea
              id="contact-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a message"
              rows={5}
              style={{
                ...fieldInputStyle,
                height: 'auto',
                minHeight: '120px',
                padding: '12px 16px',
                resize: 'vertical',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              height: '57px',
              marginTop: '10px',
              borderRadius: '100px',
              border: 'none',
              backgroundColor: '#F8CA89',
              color: '#0F2A24',
              fontFamily: 'Satoshi Variable, system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '-2%',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '14px 16px 16px',
            }}
          >
            Send message
            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M1.11133 1.11108L4.44466 4.44442L1.11133 7.77775" stroke="#40190A" strokeWidth="2.22222" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
