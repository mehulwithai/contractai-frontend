export default function LandingPage() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 24px' }}>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{
          display: 'inline-block',
          background: 'var(--accent-light)',
          color: 'var(--accent)',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 500,
          marginBottom: '20px',
        }}>
          Built for founders, not lawyers
        </div>
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 700,
          lineHeight: 1.15,
          color: 'var(--text-primary)',
          marginBottom: '20px',
        }}>
          Review any contract in<br />
          <span style={{ color: 'var(--accent)' }}>30 seconds</span>
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          maxWidth: '520px',
          margin: '0 auto 32px',
          lineHeight: 1.7,
        }}>
          Upload an NDA, vendor agreement, or any contract.
          Get plain-English risk flags, dangerous clauses highlighted,
          and suggested redlines — for less than the cost of one lawyer email.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/signup" style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '16px',
            textDecoration: 'none',
          }}>
            Review your first contract free →
          </a>
          <a href="/login" style={{
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            padding: '14px 28px',
            borderRadius: '8px',
            fontWeight: 500,
            fontSize: '16px',
            textDecoration: 'none',
          }}>
            Sign in
          </a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px' }}>
          No credit card required · 1 free review
        </p>
      </div>

      {/* How it works */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: '32px',
          color: 'var(--text-primary)',
        }}>How it works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          {[
            { step: '1', title: 'Upload your contract', desc: 'PDF or Word doc. Any contract type.' },
            { step: '2', title: 'AI reads every clause', desc: 'Claude analyses risks in plain English.' },
            { step: '3', title: 'Review the flags', desc: 'Red, amber, green — sorted by severity.' },
            { step: '4', title: 'Negotiate with confidence', desc: 'Copy suggested redlines directly.' },
          ].map(item => (
            <div key={item.step} style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
            }}>
              <div style={{
                width: '32px', height: '32px',
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '14px',
                margin: '0 auto 12px',
              }}>{item.step}</div>
              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: 'var(--text-primary)' }}>{item.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '40px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>Simple pricing</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Less than the cost of one lawyer email
        </p>
        <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>$49</div>
        <div style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>per month · cancel anytime</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '280px', margin: '0 auto 28px', textAlign: 'left' }}>
          {[
            'Unlimited contract reviews',
            'Risk flags in plain English',
            'Suggested redline language',
            'Contract vault & history',
            'Renewal date alerts',
          ].map(f => (
            <div key={f} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '14px' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
              <span style={{ color: 'var(--text-secondary)' }}>{f}</span>
            </div>
          ))}
        </div>
        <a href="/signup" style={{
          display: 'inline-block',
          background: 'var(--accent)',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: '8px',
          fontWeight: 600,
          textDecoration: 'none',
        }}>Start free →</a>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '48px',
        color: 'var(--text-muted)',
        fontSize: '13px',
      }}>
        ContractAI is not a law firm and does not provide legal advice.
        AI analysis is for informational purposes only.
      </div>
    </div>
  )
}
