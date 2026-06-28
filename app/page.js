'use client'
import { Reveal } from '../components/Reveal'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <ComparisonTable />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '56px', alignItems: 'center' }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--accent-light)',
            color: 'var(--accent)',
            padding: '5px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '24px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
            Built for founders, not law firms
          </div>

          <h1 style={{
            fontSize: 'clamp(34px, 5vw, 50px)',
            fontWeight: 600,
            lineHeight: 1.12,
            color: 'var(--text-primary)',
            marginBottom: '22px',
            letterSpacing: '-0.01em',
          }}>
            Know what you're<br/>signing — before<br/>you sign it.
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'var(--text-secondary)',
            maxWidth: '440px',
            marginBottom: '32px',
            fontWeight: 500,
            lineHeight: 1.7,
          }}>
            Upload any contract. In under a minute, ContractAI flags the clauses
            that could hurt you, explains why in plain English, and tells you
            exactly what to ask for instead.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <a href="/signup" className="hero-cta" style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '14px 26px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.18s, box-shadow 0.18s',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
            }}>
              Review your first contract free
            </a>
            <a href="#how-it-works" className="hero-cta" style={{
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              padding: '14px 22px',
              borderRadius: '10px',
              fontWeight: 500,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'transform 0.18s, box-shadow 0.18s',
              boxShadow: '0 4px 14px rgba(63, 60, 60, 0.4)',

            }}>
              See how it works
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', fontWeight: 500 }}>
            No card required · One free review, no strings attached
          </p>
        </div>

        <ContractMockup />
      </div>

      
    </section>
  )
}

/* Signature visual: an annotated contract clause with a redline and margin comment */
function ContractMockup() {
  return (
    <div style={{
      background: 'var(--mockup-bg)',
      border: '1px solid var(--border)',
      borderRadius: '19px',
      padding: '28px 28px 24px',
      boxShadow: 'var(--shadow-md)',
      position: 'relative',
      fontFamily: 'var(--sans)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--sans)' }}>VENDOR_AGREEMENT.pdf</span>
        <span style={{
          fontSize: '11px', fontWeight: 600, fontFamily: 'var(--sans)',
          background: 'var(--red-bg)', color: 'var(--red-text)',
          padding: '3px 9px', borderRadius: '20px', border: '1px solid var(--red-border)',
        }}>High risk</span>
      </div>

      <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--accent)', marginBottom: '16px', fontWeight: 600 }}>
        "...Vendor shall be liable for any and all damages, including{' '}
        <span style={{
          background: 'var(--mockup-bg)', 
          textDecoration: 'underline',
          textDecorationColor: 'var(--c)',
          textDecorationThickness: '2px',
          padding: '1px 3px',
        }}>indirect, consequential, and punitive damages, with no cap on liability</span>
        ..."
      </p>

      <div style={{
        background: 'var(--bg)',
        border: '1px solid var(--accent)',
        borderRadius: '8px',
        padding: '12px 14px',
        fontFamily: 'var(--sans)',
        marginBottom: '14px',
      }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Why this matters
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, fontWeight: 500 }}>
          Unlimited liability with no cap means one mistake could cost you everything you own. Ask for a cap at 12 months' fees.
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <span style={{
          fontSize: '12px', fontFamily: 'var(--sans)', color: 'var(--text-secondary)',
          background: 'var(--bg)', border: '1px solid var(--border)',
          padding: '5px 12px', borderRadius: '6px',
        }}>
          📋 Copy suggested fix
        </span>
      </div>

      
        
      
    </div>
  )
}

/* ───────────────────────── LOGO / TRUST STRIP ───────────────────────── */

function LogoStrip() {
  const items = ['Freelancers', 'Agencies', 'SaaS founders', 'Consultants', 'Small studios']
  return (
    <Reveal>
      <div style={{
        maxWidth: '1040px', margin: '0 auto', padding: '0 24px 56px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '23px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px', fontWeight: 600 }}>
          Built for people who sign contracts without a legal team
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap' }}>
          {items.map(i => (
            <span key={i} style={{ fontFamily: 'var(--serif)', fontSize: '21px', color: 'var(--text-secondary)' }}>{i}</span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

/* ───────────────────────── HOW IT WORKS ───────────────────────── */

function HowItWorks() {
  const steps = [
    { title: 'Upload your contract', desc: 'Drop in a PDF or Word file. NDA, vendor agreement, offer letter — any of it.' },
    { title: 'AI reads every clause', desc: 'In under a minute, it scans for the language that tends to cause real damage.' },
    { title: 'See it in plain English', desc: 'Each risky clause gets a red, amber, or green flag and a one-line explanation.' },
    { title: 'Negotiate with confidence', desc: 'Copy the suggested redline straight into your reply. No guessing what to ask for.' },
  ]
  return (
    <section id="how-it-works" style={{ maxWidth: '1040px', margin: '0 auto', padding: '40px 24px 72px' }}>
      <Reveal>
        <h2 style={{ fontSize: '30px', fontWeight: 600, textAlign: 'center', marginBottom: '12px' }}>
          From PDF to peace of mind
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '480px', marginInline: 'auto', fontWeight: 500, fontSize: '15px' }}>
          Four steps. No legal degree required.
        </p>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="card card-hover" style={{ height: '100%' }}>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '28px',
                color: 'var(--accent)',
                marginBottom: '14px',
                lineHeight: 1,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '8px', color: 'var(--text-primary)' }}>
                {s.title}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {s.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── COMPARISON TABLE ───────────────────────── */

function ComparisonTable() {
  const rows = [
    ['Cost per review', '$49/mo unlimited', '$300–800 each', 'Free, but no structure'],
    ['Turnaround time', 'Under 1 minute', '3–10 business days', 'Instant'],
    ['Plain-English flags', '✓', '✗ — legal memo format', '✗ — no consistent format'],
    ['Suggested redlines', '✓', 'Sometimes, at extra cost', '✗'],
    ['Built for founders', '✓', '✗ — built for legal teams', '✗ — general purpose'],
  ]
  return (
    <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 24px 72px' }}>
      <Reveal>
        <h2 style={{ fontSize: '30px', fontWeight: 600, textAlign: 'center', marginBottom: '40px' }}>
          How it stacks up
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <div  className="hover-effect"style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '560px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)' }}>
                <th style={cellStyle(true)}></th>
                <th style={{ ...cellStyle(true), color: 'var(--accent)' }}>ContractAI</th>
                <th style={cellStyle(true)}>A lawyer</th>
                <th style={cellStyle(true)}>Pasting into ChatGPT</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, us, lawyer, chatgpt], i) => (
                <tr key={label} style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg-secondary)' }}>
                  <td style={{ ...cellStyle(), fontWeight: 500, color: 'var(--text-primary)' }}>{label}</td>
                  <td style={{ ...cellStyle(), color: 'var(--accent)', fontWeight: 600 }}>{us}</td>
                  <td style={cellStyle()}>{lawyer}</td>
                  <td style={cellStyle()}>{chatgpt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  )
}

function cellStyle(isHeader) {
  return {
    padding: '14px 18px',
    textAlign: 'left',
    color: isHeader ? 'var(--text-primary)' : 'var(--text-secondary)',
    fontWeight: isHeader ? 600 : 400,
    borderBottom: '1px solid var(--border)',
    whiteSpace: 'nowrap',
  }
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */

function Testimonials() {
  const quotes = [
    { name: 'Early tester', role: 'Freelance designer', text: 'Caught a non-compete clause I would have completely missed. Took less time than making coffee.' },
    { name: 'Early tester', role: 'Agency founder', text: 'I finally understand what "indemnify" actually means in my own contracts.' },
    { name: 'Early tester', role: 'Solo SaaS founder', text: 'Used it on a vendor agreement and immediately knew what to push back on.' },
  ]
  return (
    <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 24px 72px' }}>
      <Reveal>
        <h2 style={{ fontSize: '28px', fontWeight: 600, textAlign: 'center', marginBottom: '8px' }}>
          What early users are saying
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '40px' }}>
          We're early — these are from our first private testers.
        </p>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {quotes.map((q, i) => (
          <Reveal key={q.text} delay={i * 90}>
            <div className="card card-hover" style={{ height: '100%' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '18px' }}>
                "{q.text}"
              </p>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{q.name}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{q.role}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── PRICING ───────────────────────── */

function Pricing() {
  return (
    <section id="pricing" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px 72px' }}>
      <Reveal>
        <div className="card card-hover" style={{
          textAlign: 'center',
          padding: '44px 40px',
          border: '1px solid var(--accent)',
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Simple pricing</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '14px', fontWeight: 500 }}>
            Less than the cost of one lawyer email
          </p>
          <div style={{ fontFamily: 'var(--inter)', fontSize: '50px', fontWeight: 600, color: 'var(--accent)', lineHeight: 1, fontWeight: 700 }}>$10</div>
          <div style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '14px', fontWeight: 500 }}>per month · cancel anytime</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '280px', margin: '0 auto 28px', textAlign: 'left', fontWeight: 500 }}>
            {['Unlimited contract reviews', 'Risk flags in plain English', 'Suggested redline language', 'Contract vault & history', 'Renewal date alerts'].map(f => (
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
            padding: '13px 34px',
            borderRadius: '10px',
            fontWeight: 600,
            textDecoration: 'none',
          }}>Start free →</a>
        </div>
      </Reveal>
    </section>
  )
}

/* ───────────────────────── FAQ ───────────────────────── */

function FAQ() {
  const faqs = [
    { q: 'Is this a replacement for a lawyer?', a: 'No. ContractAI helps you understand what you\'re signing and flag obvious red flags fast. For high-stakes or unusually complex agreements, we\'ll always recommend a qualified lawyer — and our review even tells you when that\'s the smart move.' },
    { q: 'What file types can I upload?', a: 'PDF and Word (.docx) files, up to 10MB. That covers the vast majority of contracts you\'ll receive by email.' },
    { q: 'Is my contract data kept private?', a: 'Yes. Your documents are stored securely and never used to train any AI model. Only you can see your own reviews.' },
    { q: 'What happens after my free review?', a: 'You can upgrade to unlimited reviews for $49/month, cancel anytime. No card required to try your first one.' },
    { q: 'What kinds of contracts does it handle?', a: 'NDAs, vendor agreements, freelance contracts, employment offers, SaaS subscription terms, and most standard business agreements.' },
  ]
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px 80px' }}>
      <Reveal>
        <h2 style={{ fontSize: '28px', fontWeight: 600, textAlign: 'center', marginBottom: '40px' }}>
          Frequently Asked Questions
        </h2>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <div className="card" style={{ cursor: 'pointer', padding: '18px 22px' }} onClick={() => setOpen(open === i ? -1 : i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 500, fontSize: '14px', color: 'var(--text-primary)' }}>{f.q}</span>
                <span style={{
                  color: 'var(--accent)', fontSize: '18px', fontWeight: 300,
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}>+</span>
              </div>
              {open === i && (
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '12px' }}>
                  {f.a}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── FINAL CTA ───────────────────────── */

function FinalCTA() {
  return (
    <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 24px 80px' }}>
      <Reveal>
        <div style={{
          background: 'var(--ink)',
          borderRadius: '20px',
          padding: '56px 40px',
          textAlign: 'center',
        }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>
            Don't sign blind.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '28px', fontSize: '15px' }}>
            Your first contract review is free. Takes less time than reading this page did.
          </p>
          <a href="/signup" className="hover-effect" style={{
            display: 'inline-block',
            background: 'var(--accent)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '10px',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            Review your first contract free →
          </a>
        </div>
      </Reveal>
    </section>
  )
}
