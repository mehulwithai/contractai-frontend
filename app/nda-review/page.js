import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'AI NDA Review — Check Your NDA Before Signing',
  description: 'Review non-disclosure agreements in seconds. Spot hidden non-compete terms, broad confidentiality definitions, and indefinite time limits with AI.',
  keywords: ['NDA Review', 'AI NDA Review', 'Non-Disclosure Agreement Checklist', 'NDA Red Flags'],
  alternates: {
    canonical: '/nda-review',
  },
  openGraph: {
    title: 'AI NDA Review — Check Your NDA Before Signing',
    description: 'Review non-disclosure agreements in seconds. Spot hidden non-compete terms and broad confidentiality definitions.',
    url: 'https://contractai.com/nda-review',
  },
}

export default function NDAReviewPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
          🔒 Non-Disclosure Agreement Specialist
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, margin: '20px 0' }}>
          AI NDA Review — Check Your NDA Before Signing
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          NDAs are often treated as standard routine paperwork, but an unfair non-disclosure agreement can accidentally lock your IP, silence your marketing, or insert hidden non-competes.
        </p>
        <Link href="/signup" style={{ background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
          Analyze Your NDA Free
        </Link>
      </section>

      {/* 9 Critical NDA Points */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
          9 Things to Check in Every NDA
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { title: '1. Mutual vs. One-Sided', desc: 'Is confidentiality protected for both parties or strictly one-way?' },
            { title: '2. Definition of Confidential Info', desc: 'Is information clearly defined, or does it cover all oral and written chatter indefinitely?' },
            { title: '3. Duration of Confidentiality', desc: 'Standard business NDAs last 2 to 5 years. Beware of perpetual obligations unless dealing with trade secrets.' },
            { title: '4. Permitted Disclosures', desc: 'Can you disclose information to your legal, financial, and tax advisors?' },
            { title: '5. Standard Exclusions', desc: 'Information already public, previously known, or independently developed must be excluded.' },
            { title: '6. Return or Destruction of Data', desc: 'Does the clause require destroying electronic backups, which may be technically impossible?' },
            { title: '7. Residual Knowledge Clause', desc: 'Protects ideas retained in human memory from triggering accidental breach claims.' },
            { title: '8. Hidden Non-Compete Clauses', desc: 'Watch for sneaky clauses that prevent you from working in the same industry after discussions end.' },
            { title: '9. Non-Solicitation of Staff', desc: 'Checks restrictions on hiring or reaching out to employees after exploratory calls.' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fictional NDA Clause Example */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>
            Hidden Non-Compete inside NDA Example
          </h2>

          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
            <span style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>
              ⚠️ Hidden Sneaky Clause
            </span>
            <blockquote style={{ fontStyle: 'italic', margin: '16px 0', paddingLeft: '16px', borderLeft: '3px solid #ef4444', fontSize: '14px', lineHeight: 1.6 }}>
              "Recipient agrees that during the term of evaluation and for a period of two (2) years thereafter, Recipient shall not engage in any commercial activity, product development, or consulting that competes directly or indirectly with Disclosing Party's core business."
            </blockquote>
            <div style={{ background: 'var(--accent-light)', padding: '16px', borderRadius: '8px', fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5 }}>
              <strong>ContractAI Flag:</strong> This is NOT a standard confidentiality term — it is a restrictive non-compete clause buried inside an NDA. You should request to strike this entire paragraph before signing.
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links & CTA */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--accent)', color: '#fff', padding: '40px 24px', borderRadius: '16px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Upload Your NDA for Instant Audit</h2>
          <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '24px' }}>Check confidentiality duration and spot hidden clauses in 30 seconds.</p>
          <Link href="/signup" style={{ background: '#fff', color: 'var(--accent)', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
            Analyze NDA Free
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/nda-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            NDA Analyzer Tool
          </Link>
          <Link href="/contract-clause-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Clause Analyzer
          </Link>
          <Link href="/freelance-contract-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Freelancer NDA Review
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
