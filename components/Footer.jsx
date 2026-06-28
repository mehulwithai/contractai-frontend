'use client'
export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
      marginTop: '80px',
    }}>
      <div style={{
        maxWidth: '1040px',
        margin: '0 auto',
        padding: '56px 24px 32px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: '6px',
                padding: '2px 8px',
                fontSize: '13px',
                fontWeight: 700,
                fontFamily: 'var(--sans)',
              }}>C</span>
              <span style={{ fontFamily: 'var(--inter)', fontWeight: 600, fontSize: '16px', color: 'var(--text-primary)' }}>
                ContractAI
              </span>
            </div>
            <p style={{  fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '220px', fontWeight: 500 }}>
              The best tool to generate contracts and legal documents in seconds. Save time and money with ContractAI. 
            </p>
          </div>

          {/* Product */}
          <div>
            <div style={{ fontFamily: 'var(--inter)', fontSize: '14px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
              Product
            </div>
            <FooterLink href="#how-it-works">How it works</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="/signup">Get started</FooterLink>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: 'var(--inter)', fontSize: '14px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
              Company
            </div>
            <FooterLink href="https://dadits.media" external>Dadits Media</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontFamily: 'var(--inter)', fontSize: '14px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
              Legal
            </div>
            <FooterLink href="/privacy">Privacy policy</FooterLink>
            <FooterLink href="/terms">Terms of service</FooterLink>
            <FooterLink href="/disclaimer">Legal disclaimer</FooterLink>
          </div>

          {/* Social */}
          <div>
            <div style={{ fontFamily: 'var(--inter)', fontSize: '14px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
              Connect
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <SocialIcon label="X" href="https://twitter.com">
                <path d="M18 2h3l-7.5 8.6L21.5 22H15l-5-6.6L4 22H1l8-9.1L1 2h6.6l4.4 5.8L18 2z" />
              </SocialIcon>
              <SocialIcon label="LinkedIn" href="https://linkedin.com">
                <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98 2.98-1.34 2.98-2.98S6.62 3.5 4.98 3.5zM2.4 21.5h5.16V9.16H2.4V21.5zm7.6-12.34h4.95v1.69h.07c.69-1.3 2.37-2.67 4.88-2.67 5.22 0 6.18 3.44 6.18 7.91v8.41h-5.16v-7.46c0-1.78-.03-4.06-2.48-4.06-2.48 0-2.86 1.94-2.86 3.94v7.58H10V9.16z" />
              </SocialIcon>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} ContractAI. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'right' }}>
            ContractAI is not a law firm and does not provide legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'block',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        marginBottom: '10px',
        textDecoration: 'none',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
    >
      {children}
    </a>
  )
}

function SocialIcon({ children, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
        transition: 'all 0.15s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">{children}</svg>
    </a>
  )
}
