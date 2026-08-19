import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'AI Contract Review for Freelancers & Contractors',
  description: 'Protect your freelance business. Review client agreements for payment terms, scope creep, revision limits, IP ownership, and late payment fees with AI.',
  keywords: ['Freelance Contract Review', 'Contractor Agreement Scanner', 'Freelance Contract Checklist', 'Gig Worker Legal Protection'],
  alternates: {
    canonical: '/freelance-contract-review',
  },
  openGraph: {
    title: 'AI Contract Review for Freelancers & Contractors',
    description: 'Protect your freelance business. Review client agreements for payment terms, scope creep, revision limits, and IP ownership.',
    url: 'https://contractai.com/freelance-contract-review',
  },
}

export default function FreelanceContractReviewPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
          💼 Freelancer & Contractor Legal Shield
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, margin: '20px 0' }}>
          AI Contract Review for Freelancers
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Never get burned by unpaid invoices, unlimited revision demands, or broad IP grabs. ContractAI helps freelancers and independent contractors spot dangerous client terms before signing.
        </p>
        <Link href="/signup" style={{ background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
          Review Your Freelance Contract Free
        </Link>
      </section>

      {/* 12 Essential Checks for Freelancers */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
          12 Things Every Freelancer Must Check
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            { title: '1. Payment Amount & Currency', desc: 'Verify exact fixed rate, hourly caps, or milestone payment triggers.' },
            { title: '2. Payment Schedule & Terms', desc: 'Longer payment windows like Net 60 or Net 90 may impact cash flow; many freelancers negotiate for Net 15 or upfront deposits.' },
            { title: '3. Late Payment Terms', desc: 'Check whether late payment interest terms apply, subject to applicable local regulations.' },
            { title: '4. Scope of Work (SOW)', desc: 'Explicit deliverables list to prevent client scope creep.' },
            { title: '5. Revision Limits', desc: 'Cap rounds of revisions (e.g., max 2 rounds included; extra charged hourly).' },
            { title: '6. IP Ownership Transfer', desc: 'A commonly negotiated term for freelancers is ensuring IP ownership transfers upon receipt of full payment.' },
            { title: '7. Portfolio Usage Rights', desc: 'Retain rights to showcase non-confidential work in your portfolio.' },
            { title: '8. Termination & Kill Fees', desc: 'Consider specifying a kill fee if the client cancels project mid-way.' },
            { title: '9. Liability Caps', desc: 'A commonly negotiated position is limiting liability strictly to fees paid under the project.' },
            { title: '10. Confidentiality Timeframes', desc: 'Confidentiality obligations are often time-bound (e.g., 2 to 5 years depending on the deal).' },
            { title: '11. Non-Compete Clauses', desc: 'Non-compete clauses can restrict future client work and are worth reviewing carefully.' },
            { title: '12. Independent Contractor Status', desc: 'Confirm you control your own hours, tools, and location.' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Clause Breakdown for Freelancers */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>
            Freelancer IP Trap Example
          </h2>

          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
            <span style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>
              ⚠️ IP Transfer Trap
            </span>
            <blockquote style={{ fontStyle: 'italic', margin: '16px 0', paddingLeft: '16px', borderLeft: '3px solid #ef4444', fontSize: '14px', lineHeight: 1.6 }}>
              "Contractor hereby assigns and transfers all rights, title, and interest in all work product created under this Agreement immediately upon creation, prior to invoice settlement."
            </blockquote>
            <div style={{ background: 'var(--accent-light)', padding: '16px', borderRadius: '8px', fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5 }}>
              <strong>Plain-English Meaning:</strong> The client owns your work the moment you draft it — even if they never pay your invoice!
              <br />
              <strong>Suggested Fix:</strong> Modify language to: <em>"...upon receipt of full and final payment."</em>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links & CTA */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--accent)', color: '#fff', padding: '40px 24px', borderRadius: '16px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Review Your Client Contract</h2>
          <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '24px' }}>Don't risk unpaid work. Get a free AI contract audit in seconds.</p>
          <Link href="/signup" style={{ background: '#fff', color: 'var(--accent)', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
            Analyze Client Contract
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contract-clause-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Clause Analyzer
          </Link>
          <Link href="/nda-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Freelance NDA Review
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
