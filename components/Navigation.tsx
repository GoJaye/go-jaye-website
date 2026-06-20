'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const itemBase: React.CSSProperties = {
  fontFamily: 'Satoshi Variable, system-ui, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  letterSpacing: '-2%',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
};

const products = [
  { label: 'Jaye Ride', soon: false },
  { label: 'Become a Driver', soon: false },
  { label: 'Jaye Lux', soon: true },
  { label: 'Jaye Fleet', soon: true },
  { label: 'Jaye ProDriver', soon: true },
];

type NavigationProps = {
  pill?: boolean;
  onDark?: boolean;
};

function MenuIcon({ open, stroke, size = 24 }: { open: boolean; stroke: string; size?: number }) {
  const lineProps = {
    stroke,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`menu-icon${open ? ' is-open' : ''}`}
    >
      <path className="menu-line menu-line-top" d="M11 7H19" {...lineProps} />
      <path className="menu-line menu-line-mid" d="M5 12H19" {...lineProps} />
      <path className="menu-line menu-line-bot" d="M11 17H19" {...lineProps} />
    </svg>
  );
}

export default function Navigation({ pill = false, onDark = false }: NavigationProps) {
  const [productOpen, setProductOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkColor = onDark ? '#FFFFFF' : '#1B1D22';
  const menuStroke = onDark ? '#FFFFFF' : '#1F8F6B';
  const drawerIconStroke = '#FFFFFF';

  const navItemStyle: React.CSSProperties = {
    ...itemBase,
    color: linkColor,
    ...(pill
      ? { backgroundColor: '#EDEEF1', borderRadius: '100px', padding: '14px 16px 16px' }
      : { padding: 0 }),
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    document.documentElement.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      <nav
        className={`site-nav w-full${onDark ? ' site-nav--on-dark' : ''}`}
        style={{
          background: onDark
            ? 'transparent'
            : 'linear-gradient(180deg, rgba(237,239,238,0.92) 0%, rgba(237,239,238,0.55) 45%, rgba(237,239,238,0) 100%)',
        }}
      >
        <div
          className="page-max page-gutter nav-inner"
          style={{
            paddingTop: '28px',
            paddingBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '12px',
          }}
        >
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Image
              src="/images/jaye-logo.png"
              alt="Jaye"
              width={104}
              height={30}
              priority
              style={{ height: '30px', width: 'auto', filter: onDark ? 'brightness(0) invert(1)' : 'none' }}
            />
          </Link>

          <ul className="nav-desktop" style={{ gap: pill ? '8px' : '48px', listStyle: 'none', padding: 0, margin: 0 }}>
            <li
              className="nav-product-item"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <Link href="/product" className="nav-link" style={navItemStyle} aria-haspopup="true">
                Product
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  style={{ transition: 'transform 200ms ease', transform: productOpen ? 'rotate(180deg)' : 'none' }}
                >
                  <path d="M2.5 4.5L6 8l3.5-3.5" stroke={linkColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {productOpen && (
                <div className="nav-product-dropdown">
                  <div style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', fontSize: '18px', fontWeight: 500, color: '#6B7280', paddingBottom: '10px', borderBottom: '1px solid #E9EAEB' }}>
                    Products
                  </div>
                  {products.map((item) => (
                    <Link key={item.label} href="/product" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                      <span style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', fontSize: '18px', fontWeight: 700, letterSpacing: '-2%', color: '#16241F' }}>
                        {item.label}
                      </span>
                      {item.soon && (
                        <span style={{ fontFamily: 'Satoshi Variable, system-ui, sans-serif', fontSize: '14px', fontWeight: 500, color: '#16241F', backgroundColor: '#FBEACB', borderRadius: '100px', padding: '4px 12px', whiteSpace: 'nowrap' }}>
                          Coming soon!
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li><Link href="/company" className="nav-link" style={navItemStyle}>Company</Link></li>
            <li><Link href="#faqs" className="nav-link" style={navItemStyle}>FAQs</Link></li>
            <li><Link href="/contact" className="nav-link" style={navItemStyle}>Contact us</Link></li>
          </ul>

          <div className="nav-end">
          <div className="nav-actions">
            <Link href="/waitlist" className="nav-waitlist-btn">
              Join the waitlist
            </Link>
            <Link href="/waitlist" className="nav-signup-btn">
              Sign Up
            </Link>
          </div>

          <button
            type="button"
            className="nav-mobile-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <MenuIcon open={mobileOpen} stroke={menuStroke} />
          </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-backdrop${mobileOpen ? ' open' : ''}`} onClick={closeMobile} aria-hidden="true" />

      <aside className={`mobile-drawer${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-drawer-header">
          <Image
            src="/images/jaye-logo.png"
            alt="Jaye"
            width={104}
            height={30}
            style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
          <button type="button" className="drawer-close" aria-label="Close menu" onClick={closeMobile}>
            <MenuIcon open stroke={drawerIconStroke} size={32} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <Link href="/product" className="mobile-nav-link" onClick={closeMobile}>Product</Link>
          <Link href="/company" className="mobile-nav-link" onClick={closeMobile}>Company</Link>
          <Link href="#faqs" className="mobile-nav-link" onClick={closeMobile}>FAQs</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={closeMobile}>Contact us</Link>
          <Link href="/waitlist" className="mobile-nav-link mobile-nav-waitlist" onClick={closeMobile}>
            Join the waitlist
          </Link>
          <Link href="/waitlist" className="mobile-nav-link mobile-nav-signup" onClick={closeMobile}>
            Sign Up
          </Link>
        </nav>
      </aside>
    </>
  );
}
