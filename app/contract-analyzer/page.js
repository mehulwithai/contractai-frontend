import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'AI Contract Analyzer — Instant Automated Contract Analysis',
  description: 'Upload legal agreements to our AI Contract Analyzer. Get an instant risk score, key clause breakdown, and automated red-flag detection in seconds.',
  keywords: ['AI Contract Analyzer', 'Contract Analysis Tool', 'Document Risk Assessment', 'Contract Scanner'],
  alternates: {
    canonical: '/contract-analyzer',
  },
  openGraph: {
    title: 'AI Contract Analyzer — Instant Automated Contract Analysis',
    description: 'Upload legal agreements to our AI Contract Analyzer. Get an instant risk score and key clause breakdown.',
    url: 'https://contractai.com/contract-analyzer',
  },
}

export default function ContractAnalyzerPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      {/* Hero Section */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
          ⚙️ Automated Contract Analysis Engine
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, margin: '20px 0' }}>
          AI Contract Analyzer
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Transform complex legal documents into actionable insights. Upload any agreement and receive an instant overall risk score, flagged clauses, and clear summaries.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link href="/signup" style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '10px',
            fontWeight: 600,
            fontSize: '16px',
            textDecoration: 'none',
          }}>
            Analyze Document Now
          </Link>
        </div>
      </section>

      {/* Interactive Mockup Component */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 64px' }}>
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: 'var(--shadow-md)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>DOCUMENT ANALYZED</div>
              <div style={{ fontSize: '18px', fontWeight: 700 }}>Master_Services_Agreement_V2.pdf</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Overall Risk Rating:</span>
              <span style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '6px 16px', borderRadius: '20px', fontWeight: 700, fontSize: '14px' }}>
                HIGH RISK
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div style={{ background: 'var(--bg)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#dc2626', marginBottom: '12px' }}>🚨 Potential High Concerns</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <li>Unlimited liability on supplier default</li>
                <li>Auto-renews annually without notice requirement</li>
                <li>Unilateral 60-day IP assignment window</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--accent)', marginBottom: '12px' }}>📋 Key Clause Breakdown</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <li><strong>Payment:</strong> Net 45 days upon invoice</li>
                <li><strong>Termination:</strong> 30-day notice for cause only</li>
                <li><strong>Confidentiality:</strong> 5-year non-disclosure period</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
            ⚡ Generated automatically by ContractAI Engine in seconds
          </div>
        </div>
      </section>

      {/* Contract Types Grid */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
            Supported Contract Types
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '40px' }}>
            ContractAI analyzes your agreement and highlights potential risks, important clauses, and areas worth reviewing:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { type: 'Freelance & Independent Contractor', desc: 'Scope, deliverables, IP ownership, and late payment penalties.' },
              { type: 'Non-Disclosure Agreements (NDAs)', desc: 'Mutual vs one-sided confidentiality terms and time limits.' },
              { type: 'Master Services Agreements (MSAs)', desc: 'Service level agreements, liability caps, and indemnities.' },
              { type: 'SaaS & Software Licensing', desc: 'Data privacy, user limits, renewal traps, and service uptime.' },
              { type: 'Employment Agreements', desc: 'Invention assignments, non-competes, and severance terms.' },
              { type: 'Vendor & Supplier Contracts', desc: 'Delivery deadlines, warranties, and cancellation terms.' },
            ].map((c, i) => (
              <div key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>{c.type}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links & CTA */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--accent)', color: '#fff', padding: '40px 24px', borderRadius: '16px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Start Analyzing Contracts Instantly</h2>
          <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '24px' }}>No setup required. Upload your agreement and get instant risk insights.</p>
          <Link href="/signup" style={{ background: '#fff', color: 'var(--accent)', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
            Analyze First Contract Free
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contract-clause-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Clause Analyzer
          </Link>
          <Link href="/nda-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            NDA Analyzer
          </Link>
          <Link href="/contract-risk-analysis" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Risk Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
