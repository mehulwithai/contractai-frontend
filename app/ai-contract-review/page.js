import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'AI Contract Review — Understand Your Contracts Before You Sign',
  description: 'Upload any contract or legal document and get an instant AI-powered risk analysis, plain-English clause explanations, and suggested revisions in seconds.',
  keywords: ['AI Contract Review', 'AI Legal Document Review', 'Contract Risk Scanner', 'Automated Contract Analysis'],
  alternates: {
    canonical: '/ai-contract-review',
  },
  openGraph: {
    title: 'AI Contract Review — Understand Your Contracts Before You Sign',
    description: 'Upload any contract or legal document and get an instant AI-powered risk analysis and plain-English clause explanations.',
    url: 'https://contractai.com/ai-contract-review',
  },
}

export default function AIContractReviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AI Contract Review',
    description: 'Understand your legal agreements before signing with AI contract review.',
    publisher: {
      '@type': 'Organization',
      name: 'ContractAI',
    },
  }

  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--accent-light)',
          color: 'var(--accent)',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 600,
          marginBottom: '20px',
        }}>
          ✨ Next-Gen AI Contract Analysis
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, marginBottom: '20px' }}>
          AI Contract Review — Understand Your Contracts Before You Sign
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Never sign a one-sided agreement again. ContractAI uses artificial intelligence to scan legal documents, highlight hidden risks, translate legal jargon into plain English, and suggest safer language in seconds.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '10px',
            fontWeight: 600,
            fontSize: '16px',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
          }}>
            Analyze Your Contract Free
          </Link>
          <Link href="/contract-analyzer" style={{
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            padding: '14px 24px',
            borderRadius: '10px',
            fontWeight: 500,
            fontSize: '16px',
            textDecoration: 'none',
          }}>
            Explore Analyzer Tool
          </Link>
        </div>
      </section>

      {/* What AI Contract Review Does */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
          What is AI Contract Review?
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
          Traditional legal review takes days and costs hundreds of dollars per hour. AI contract review automates the initial scanning process by applying natural language processing to extract key provisions, identify unfair liabilities, and compare terms against industry baselines.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            { title: 'Unlimited Liability', desc: 'Flags uncapped damages that could expose your personal or business assets to unexpected financial risks.' },
            { title: 'Indemnification Traps', desc: 'Identifies one-sided indemnity obligations that force you to pay for third-party legal disputes.' },
            { title: 'Termination & Cancellation', desc: 'Checks notice periods, penalty fees, and convenience termination rights.' },
            { title: 'Payment & Late Terms', desc: 'Highlights payment windows, interest penalties, and hidden recurring fees.' },
            { title: 'Confidentiality Scope', desc: 'Ensures non-disclosure obligations are reciprocal and reasonably time-limited.' },
            { title: 'Intellectual Property Ownership', desc: 'Verifies whether work product is transferred, licensed, or retained upon payment.' },
            { title: 'Non-Compete & Non-Solicit', desc: 'Detects restrictive covenants that might restrict your future business operations.' },
            { title: 'Dispute & Governing Law', desc: 'Surfaces forced arbitration clauses and unfavorable court jurisdictions.' },
          ].map((item, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Workflow */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '40px', textAlign: 'center' }}>
            How AI Contract Review Works in 4 Steps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', title: 'Upload Document', desc: 'Drop your PDF or Word agreement into ContractAI.' },
              { step: '02', title: 'Instant AI Audit', desc: 'Our model parses every clause against standard risk patterns.' },
              { step: '03', title: 'Plain-English Breakdown', desc: 'Get a clear risk score, flagged clauses, and explanation summaries.' },
              { step: '04', title: 'Actionable Counter-Terms', desc: 'Copy suggested fallback language to negotiate fairer terms.' },
            ].map((s, idx) => (
              <div key={idx} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-light)', padding: '4px 10px', borderRadius: '12px' }}>STEP {s.step}</span>
                <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '14px 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Fictional Clause Breakdown */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
          Real-World Clause Breakdown Example
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '32px' }}>
          Here is how ContractAI translates complex legal language into plain English:
        </p>

        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-muted)' }}>Original Contract Excerpt:</span>
            <span style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
              ⚠️ High Risk Clause
            </span>
          </div>

          <blockquote style={{ background: 'var(--bg)', borderLeft: '4px solid #ef4444', padding: '16px', margin: '0 0 24px', borderRadius: '0 8px 8px 0', fontSize: '14px', lineHeight: 1.7, fontStyle: 'italic' }}>
            "Contractor agrees to defend, indemnify, and hold harmless Client and its officers from and against any and all claims, losses, liabilities, and legal fees arising out of or resulting from Contractor's performance of services hereunder, regardless of negligence."
          </blockquote>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'var(--bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', marginBottom: '6px' }}>💡 Plain-English Translation</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                You are agreeing to pay all of the client's legal fees and damages if a lawsuit happens, even if the client was partially or fully at fault.
              </p>
            </div>
            <div style={{ background: 'var(--bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#dc2626', marginBottom: '6px' }}>🚨 Why It Matters</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                This is a broad, one-sided indemnity clause. It creates unlimited financial liability that your business insurance may not cover.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '20px', background: 'var(--accent-light)', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>💬 Suggested Counter-Ask</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5 }}>
              "Request to limit indemnity strictly to your own willful misconduct or direct breach, and add a mutual cap on liability equal to fees paid under the agreement."
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links & CTA */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--accent)', color: '#fff', padding: '48px 24px', borderRadius: '16px', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '12px' }}>Review Your Contract in Seconds</h2>
          <p style={{ fontSize: '16px', maxWidth: '560px', margin: '0 auto 28px', opacity: 0.9 }}>
            Join founders, freelancers, and business owners who review contracts faster with ContractAI.
          </p>
          <Link href="/signup" style={{
            background: '#fff',
            color: 'var(--accent)',
            padding: '14px 28px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '16px',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Review Your First Contract Free
          </Link>
        </div>

        {/* Related Pages */}
        <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>Explore Related ContractAI Tools</h3>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contract-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Contract Review Guide
          </Link>
          <Link href="/contract-clause-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Contract Clause Analyzer
          </Link>
          <Link href="/contract-risk-analysis" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Contract Risk Analysis
          </Link>
          <Link href="/nda-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            NDA Review
          </Link>
        </div>
      </section>

      {/* Responsible AI Disclaimer */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 48px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, textAlign: 'center' }}>
        <strong>Important Legal Disclaimer:</strong> ContractAI provides automated informational analysis of contracts using artificial intelligence. ContractAI is not a law firm, does not provide legal advice, and is not a substitute for consulting an attorney. Users remain responsible for reviewing and executing legal documents.
      </section>

      <Footer />
    </div>
  )
}
