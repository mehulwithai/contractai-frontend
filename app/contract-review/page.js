import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Contract Review Made Simple — The Ultimate Guide & Checklist',
  description: 'Learn how to review a contract before signing. Detailed 10-point contract review checklist, key red flags to watch for, and how AI can speed up document analysis.',
  keywords: ['Contract Review', 'How to Review a Contract', 'Contract Review Checklist', 'Legal Document Review'],
  alternates: {
    canonical: '/contract-review',
  },
  openGraph: {
    title: 'Contract Review Made Simple — The Ultimate Guide & Checklist',
    description: 'Learn how to review a contract before signing. Detailed 10-point contract review checklist & key red flags.',
    url: 'https://contractai.com/contract-review',
  },
}

export default function ContractReviewPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
          📘 Essential Contract Guide
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, margin: '20px 0' }}>
          Contract Review Made Simple
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Reviewing a contract doesn't require a law degree. Whether you are signing a client agreement, vendor contract, or NDA, this guide breaks down the essential terms you must check before signing.
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
            Analyze Contract with AI
          </Link>
        </div>
      </section>

      {/* 10-Point Checklist Section */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
          The 10-Point Contract Review Checklist
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '40px', maxWidth: '760px', margin: '0 auto 40px' }}>
          Use this practical checklist every time you receive a contract to ensure your financial and operational interests are protected.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { num: '1', title: 'Payment Terms & Schedule', detail: 'Check payment amounts, net payment windows (e.g., Net 15 vs Net 60), late fee percentages, and invoicing triggers.' },
            { num: '2', title: 'Contract Duration & Expiration', detail: 'Identify start and end dates. Look closely for automatic renewal clauses requiring advance written cancellation.' },
            { num: '3', title: 'Termination Rights', detail: 'Can either party terminate without cause? Check required notice periods (30 days is standard) and termination fees.' },
            { num: '4', title: 'Limitation of Liability', detail: 'Ensure liability is capped (ideally at fees paid in the last 12 months) and indirect or consequential damages are waived.' },
            { num: '5', title: 'Indemnification Obligations', detail: 'Beware of broad, one-sided indemnity clauses requiring you to cover all legal defense fees regardless of fault.' },
            { num: '6', title: 'Confidentiality & Non-Disclosure', detail: 'Verify what constitutes confidential information and ensure the confidentiality period has a clear end date (e.g., 2–5 years).' },
            { num: '7', title: 'Intellectual Property Rights', detail: 'Confirm who owns work product. Ensure IP transfer is strictly conditional upon receipt of full payment.' },
            { num: '8', title: 'Scope of Work & Deliverables', detail: 'Ensure project scope, milestones, and client review timelines are clearly defined to prevent scope creep.' },
            { num: '9', title: 'Dispute Resolution & Forum', detail: 'Check where lawsuits or arbitration must take place. Defending a case in another state or country is costly.' },
            { num: '10', title: 'Unusual & One-Sided Clauses', detail: 'Watch out for non-compete provisions, mandatory exclusivity, or unannounced price escalation clauses.' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent)', marginBottom: '6px' }}>ITEM {item.num}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manual vs AI Contract Review */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
            Manual Review vs. AI-Assisted Contract Review
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
                  <th style={{ padding: '16px', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '16px', fontWeight: 700 }}>Manual Self-Review</th>
                  <th style={{ padding: '16px', fontWeight: 700, color: 'var(--accent)' }}>ContractAI Assistance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Turnaround Time', manual: '2 to 5 hours of reading', ai: 'Under 60 seconds' },
                  { feature: 'Jargon Translation', manual: 'Requires searching legal terms', ai: 'Instant plain-English summaries' },
                  { feature: 'Risk Spotting', manual: 'Easy to miss fine print', ai: 'Automated pattern scanning' },
                  { feature: 'Suggested Counter-Terms', manual: 'Manual drafting required', ai: 'Pre-written fallback language' },
                  { feature: 'Cost', manual: '$250-$500/hr lawyer fees', ai: 'Free instant initial review' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px', fontWeight: 600, fontSize: '14px' }}>{row.feature}</td>
                    <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>{row.manual}</td>
                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: 600, color: 'var(--accent)' }}>{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA & Related Links */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px 24px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>Speed Up Your Contract Review Process</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Upload your agreement to ContractAI for a fast, plain-English analysis of risks and key terms.
          </p>
          <Link href="/signup" style={{ background: 'var(--accent)', color: '#fff', padding: '12px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
            Analyze Your Contract Now
          </Link>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Explore Specific Contract Review Tools</h3>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/ai-contract-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            AI Contract Review
          </Link>
          <Link href="/contract-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Contract Analyzer
          </Link>
          <Link href="/freelance-contract-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Freelance Contract Review
          </Link>
          <Link href="/contract-review-for-startups" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Startup Contract Review
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
