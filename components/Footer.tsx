import Image from 'next/image';

const columns = [
  {
    title: 'PRODUCT',
    links: ['Jaye Ride', 'Jaye Driver', 'Jaye Send', 'Jaye ProDriver'],
  },
  {
    title: 'COMING SOON',
    links: ['Jaye Eat', 'Jaye Fleet', 'Jaye Lux'],
  },
  {
    title: 'COMPANY',
    links: ['About', 'Fleet enquiry', 'Terms & Conditions', 'Privacy Policy', 'Feedback / Report'],
  },
];

export default function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: '#0F2A24' }}>
      <div
        className="page-max page-gutter"
        style={{
          paddingTop: '64px',
          paddingBottom: '48px',
          borderTop: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
          {/* Brand */}
          <div style={{ maxWidth: '394px' }}>
            <Image
              src="/images/jaye-logo.png"
              alt="Jaye"
              width={180}
              height={52}
              style={{ height: '46px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '24px' }}
            />
            <p
              className="responsive-body"
              style={{
                fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                fontWeight: 500,
                lineHeight: '150%',
                letterSpacing: '-2%',
                color: 'rgba(255,255,255,0.7)',
                margin: 0,
              }}
            >
              Enjoy a new standard in ride hailing, package delivery, and earning through driving.
            </p>
          </div>

          {/* Link columns */}
          <div className="footer-links" style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
            {columns.map((col) => (
              <div key={col.title} style={{ display: 'flex', flexDirection: 'column' }}>
                <h4
                  style={{
                    fontFamily: 'SF Pro Display, system-ui, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-1.5%',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    margin: '0 0 24px',
                  }}
                >
                  {col.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="footer-link-item"
                        style={{
                          fontFamily: 'Satoshi Variable, system-ui, sans-serif',
                          fontWeight: 400,
                          fontSize: '20px',
                          lineHeight: '120%',
                          letterSpacing: '-2%',
                          color: '#FDF0D7',
                          textDecoration: 'none',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            fontFamily: 'Satoshi Variable, system-ui, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            letterSpacing: '-2%',
            color: 'rgba(255,255,255,0.6)',
            margin: '80px 0 0',
          }}
        >
          GoJaye — Move. Earn. Grow. © 2026 GoJaye Technologies.
        </p>
      </div>
    </footer>
  );
}
