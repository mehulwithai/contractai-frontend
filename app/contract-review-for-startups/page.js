import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'AI Contract Review for Startups & Founders',
  description: 'Built for founders, not law firms. Review SaaS agreements, vendor contracts, contractor NDAs, and customer agreements in seconds with AI.',
  keywords: ['Startup Contract Review', 'Founder Contract Review', 'SaaS Agreement Analysis', 'Vendor Contract Review'],
  alternates: {
    canonical: '/contract-review-for-startups',
  },
  openGraph: {
    title: 'AI Contract Review for Startups & Founders',
    description: 'Built for founders, not law firms. Review SaaS agreements, vendor contracts, contractor NDAs, and customer agreements.',
    url: 'https://contractai.com/contract-review-for-startups',
  },
}

export default function StartupContractReviewPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
          🚀 Built for Founders, Not Law Firms
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, margin: '20px 0' }}>
          AI Contract Review for Startups
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Early-stage startups sign dozens of agreements: vendor terms, customer MSAs, software subscriptions, and contractor NDAs. Stop spending $500/hr for routine reviews.
        </p>
        <Link href="/signup" style={{ background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
          Analyze Your Startup Contract Free
        </Link>
      </section>

      {/* 8 Common Startup Contracts */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
          8 Contracts Every Startup Encounter
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            { title: '1. Customer Enterprise MSAs', desc: 'Customer agreements often insert custom indemnity or strict uptime SLA penalty clauses.' },
            { title: '2. SaaS & Vendor Terms', desc: 'Watch out for auto-expanding seat billing, multi-year lock-ins, and data licensing terms.' },
            { title: '3. Contractor & Developer Agreements', desc: 'Startups should make sure ownership of company-related intellectual property is clearly defined in contractor, employee, and development agreements, including when and under what conditions ownership transfers.' },
            { title: '4. Mutual Non-Disclosure Agreements', desc: 'Protect pitch deck data, source code, and customer lists during investor calls.' },
            { title: '5. Partnership & Distribution Terms', desc: 'Verify exclusivity boundaries, revenue split models, and termination rights.' },
            { title: '6. Employment Agreements', desc: 'Proprietary Information & Inventions Agreements (PIIA) to secure founder/employee IP.' },
            { title: '7. Office & Infrastructure Leases', desc: 'Commercial lease terms, personal guaranty clauses, and maintenance obligations.' },
            { title: '8. Investor & Advisor Agreements', desc: 'Advisor equity vesting schedules, board observation rights, and drag-along terms.' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 Founder Focus Areas */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '40px', textAlign: 'center' }}>
            6 Red-Flag Focus Areas for Founders
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { area: 'IP Assignment', desc: 'Ensure intellectual property ownership is explicitly defined, including when and under what conditions rights transfer to the company.' },
              { area: 'Uncapped Exposure', desc: 'A commonly negotiated position is capping liability at fees paid under the contract, depending on the deal scope.' },
              { area: 'Hidden Auto-Renewals', desc: 'Track vendor auto-renewals to prevent unwanted annual SaaS renewals.' },
              { area: 'Data Ownership & AI Rights', desc: 'Ensure vendors do not use your proprietary customer data to train their public AI models.' },
              { area: 'Convenience Termination', desc: 'Ensure key enterprise revenue cannot be canceled on short notice without cause.' },
              { area: 'Arbitration Jurisdiction', desc: 'Check dispute jurisdiction clauses to avoid costly out-of-state litigation.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>{f.area}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links & CTA */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--accent)', color: '#fff', padding: '40px 24px', borderRadius: '16px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Analyze Your Startup Contract</h2>
          <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '24px' }}>Save legal bills and move fast. Get a plain-English AI audit in seconds.</p>
          <Link href="/signup" style={{ background: '#fff', color: 'var(--accent)', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
            Review Startup Agreement
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/ai-contract-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            AI Contract Review
          </Link>
          <Link href="/contract-risk-analysis" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Risk Analysis
          </Link>
          <Link href="/nda-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            NDA Review
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
