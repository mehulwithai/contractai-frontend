import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'AI Contract Clause Analyzer — Deep-Dive Clause Analysis',
  description: 'Analyze specific contract clauses including indemnification, liability limits, termination, IP rights, and non-competes. Understand clauses in plain English.',
  keywords: ['Contract Clause Analyzer', 'Legal Clause Scanner', 'Indemnification Clause Analysis', 'Limitation of Liability'],
  alternates: {
    canonical: '/contract-clause-analyzer',
  },
  openGraph: {
    title: 'AI Contract Clause Analyzer — Deep-Dive Clause Analysis',
    description: 'Analyze specific contract clauses including indemnification, liability limits, termination, and IP rights.',
    url: 'https://contractai.com/contract-clause-analyzer',
  },
}

export default function ContractClauseAnalyzerPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
          🔍 Deep Clause Inspection
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, margin: '20px 0' }}>
          AI Contract Clause Analyzer
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Contracts are made of individual building blocks: clauses. ContractAI isolates and evaluates each clause to explain what it means, why it matters, and what red flags to avoid.
        </p>
        <Link href="/signup" style={{ background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
          Analyze Every Clause in Your Contract
        </Link>
      </section>

      {/* 9 Major Clause Types Breakdown */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '40px', textAlign: 'center' }}>
          9 Major Clause Types Explained
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            {
              name: '1. Indemnification Clause',
              what: 'Requires one party to compensate the other for legal losses or damages.',
              redFlag: 'One-sided indemnity covering indirect damages or third-party lawsuits regardless of fault.',
            },
            {
              name: '2. Limitation of Liability',
              what: 'Caps the total financial damages a party can be held responsible for.',
              redFlag: 'Missing caps or asymmetrical liability limits (e.g., vendor liability is capped at $500, but client liability is uncapped).',
            },
            {
              name: '3. Termination for Convenience',
              what: 'Allows a party to end the agreement early without showing a breach.',
              redFlag: 'Short notice windows (under 14 days) or non-refundable upfront deposit forfeitures.',
            },
            {
              name: '4. Confidentiality & NDA',
              what: 'Protects proprietary business data, trade secrets, and customer lists.',
              redFlag: 'Overly broad definitions of "Confidential Information" extending perpetually without exclusions.',
            },
            {
              name: '5. Intellectual Property Assignment',
              what: 'Dictates who owns newly created designs, code, copy, or inventions.',
              redFlag: 'Full IP assignment occurring prior to full invoice payment confirmation.',
            },
            {
              name: '6. Non-Compete & Non-Solicit',
              what: 'Restricts working with competitors or soliciting employees/clients.',
              redFlag: 'Excessively wide geographic radiuses or multi-year restrictions after contract end.',
            },
            {
              name: '7. Mandatory Arbitration',
              what: 'Forces disputes into private arbitration instead of public court.',
              redFlag: 'Arbitration located in a distant state with all administrative costs shifted to you.',
            },
            {
              name: '8. Payment & Late Interest',
              what: 'Sets payment deadlines, currency terms, and late payment penalties.',
              redFlag: 'Uncapped late compounding interest rates exceeding legal state limits.',
            },
            {
              name: '9. Automatic Renewal',
              what: 'Extends contract term automatically unless advance cancellation notice is given.',
              redFlag: 'Strict notice windows (e.g., exact 90-day window) leading to locked multi-year renewals.',
            },
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>{item.name}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
                <strong>What it means:</strong> {item.what}
              </p>
              <div style={{ background: '#fef2f2', borderLeft: '3px solid #ef4444', padding: '10px 12px', borderRadius: '0 6px 6px 0', fontSize: '13px', color: '#991b1b' }}>
                <strong>Red Flag:</strong> {item.redFlag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links & CTA */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--accent)', color: '#fff', padding: '40px 24px', borderRadius: '16px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Analyze Every Clause in Your Contract</h2>
          <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '24px' }}>Let ContractAI inspect your agreement line-by-line in seconds.</p>
          <Link href="/signup" style={{ background: '#fff', color: 'var(--accent)', padding: '12px 26px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
            Upload & Analyze Clauses
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contract-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Contract Analyzer
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
