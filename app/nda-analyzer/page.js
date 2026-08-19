import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'AI NDA Analyzer — Automated Non-Disclosure Agreement Tool',
  description: 'Upload any NDA to our AI NDA Analyzer tool. Instantly extract confidentiality terms, duration periods, allowed disclosures, and unfair obligations.',
  keywords: ['NDA Analyzer', 'AI NDA Analysis Tool', 'Automated NDA Scanner', 'Confidentiality Agreement Analysis'],
  alternates: {
    canonical: '/nda-analyzer',
  },
  openGraph: {
    title: 'AI NDA Analyzer — Automated Non-Disclosure Agreement Tool',
    description: 'Upload any NDA to our AI NDA Analyzer tool. Extract confidentiality terms, duration periods, and allowed disclosures.',
    url: 'https://contractai.com/nda-analyzer',
  },
}

export default function NDAAnalyzerPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
          ⚡ Dedicated NDA Analysis Tool
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, margin: '20px 0' }}>
          AI NDA Analyzer
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Automate your non-disclosure agreement workflows. Upload an NDA and receive a structured audit of confidentiality timelines, exclusions, and risky terms.
        </p>
        <Link href="/signup" style={{ background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
          Analyze NDA Now
        </Link>
      </section>

      {/* Realistic Sample NDA Analysis Card */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 64px' }}>
        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: '18px', fontWeight: 700 }}>Mutual_NDA_AcmeCorp.pdf</span>
            <span style={{ background: '#fef3c7', color: '#b45309', border: '1px solid #fde68a', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
              MEDIUM RISK
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: 'var(--bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>CONFIDENTIALITY DURATION</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--accent)', marginTop: '4px' }}>5 Years from Effective Date</div>
            </div>
            <div style={{ background: 'var(--bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>AGREEMENT STRUCTURE</div>
              <div style={{ fontSize: '16px', fontWeight: 700, marginTop: '4px' }}>Mutual (Two-Way Protection)</div>
            </div>
          </div>

          <div style={{ background: 'var(--bg)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>Identified NDA Observations:</h3>
            <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <li><strong>Broad Definition:</strong> Confidential info includes all oral presentations without marking requirement.</li>
              <li><strong>Standard Exclusions Present:</strong> Properly excludes publicly available and independently developed information.</li>
              <li><strong>Data Destruction:</strong> Requires certified data wiping within 14 days of written demand.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Internal Links & CTA */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--accent)', color: '#fff', padding: '40px 24px', borderRadius: '16px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Fast-Track NDA Approvals</h2>
          <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '24px' }}>Upload your NDA for an automated structured report.</p>
          <Link href="/signup" style={{ background: '#fff', color: 'var(--accent)', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
            Run NDA Analyzer
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/nda-review" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            NDA Review Guide
          </Link>
          <Link href="/contract-analyzer" style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px' }}>
            Contract Analyzer
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
