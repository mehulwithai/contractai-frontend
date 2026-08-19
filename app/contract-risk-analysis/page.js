import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'AI Contract Risk Analysis — Detect High-Risk Legal Terms',
  description: 'Evaluate legal exposure with AI-powered contract risk analysis. Categorize risks into High, Medium, and Low levels before signing any agreement.',
  keywords: ['Contract Risk Analysis', 'Contract Risk Assessment', 'Legal Risk Scanner', 'Contract Audit Tool'],
  alternates: {
    canonical: '/contract-risk-analysis',
  },
  openGraph: {
    title: 'AI Contract Risk Analysis — Detect High-Risk Legal Terms',
    description: 'Evaluate legal exposure with AI-powered contract risk analysis. Categorize risks into High, Medium, and Low levels.',
    url: 'https://contractai.com/contract-risk-analysis',
  },
}

export default function ContractRiskAnalysisPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <span style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
          🛡️ Automated Risk Detection
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, margin: '20px 0' }}>
          AI Contract Risk Analysis
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Spot dangerous liabilities, unfair terms, and hidden costs before they hurt your business. ContractAI categorizes risk levels so you know exactly where to negotiate.
        </p>
        <Link href="/signup" style={{ background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
          Check Contract for Potential Risks
        </Link>
      </section>

      {/* Risk Tiers Concept */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
          How ContractAI Categorizes Legal Risk
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ background: '#fff5f5', border: '1px solid #fed7d7', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ background: '#e53e3e', color: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>!</span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#9b2c2c' }}>High Risk</h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Severe terms that could cause major financial loss or legal vulnerability. Includes uncapped liability, one-sided indemnification, and perpetual non-compete clauses.
            </p>
          </div>

          <div style={{ background: '#fffaf0', border: '1px solid #feebc8', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ background: '#dd6b20', color: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>!</span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#9c4221' }}>Medium Risk</h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Unfavorable or non-standard provisions that warrant negotiation. Includes tight payment windows (Net 15), strict auto-renewals, and distant court venues.
            </p>
          </div>

          <div style={{ background: '#f0fff4', border: '1px solid #c6f6d5', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ background: '#38a169', color: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#22543d' }}>Low Risk</h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Standard commercial terms that align with normal industry standards. Includes mutual confidentiality, standard IP transfer upon payment, and 30-day notice terms.
            </p>
          </div>
        </div>
      </section>

      {/* When to Consult a Lawyer */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px' }}>
            Responsible AI: Informational Analysis vs. Legal Counsel
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
            ContractAI provides an informational risk score to help you navigate contracts faster. An AI risk rating is a screening tool, not a legal determination. For high-stakes enterprise deals, custom M&A agreements, or litigation-sensitive contracts, we recommend sharing ContractAI's audit report directly with your attorney to save hourly billing time.
          </p>
        </div>
      </section>

      {/* Internal Links & CTA */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--accent)', color: '#fff', padding: '40px 24px', borderRadius: '16px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Audit Your Contract Risk Profile</h2>
          <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '24px' }}>Get a free automated risk breakdown in under a minute.</p>
          <Link href="/signup" style={{ background: '#fff', color: 'var(--accent)', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
            Run Risk Audit Free
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/ai-contract-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            AI Contract Review
          </Link>
          <Link href="/contract-clause-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Clause Analyzer
          </Link>
          <Link href="/contract-review-for-startups" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Startup Risk Review
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
