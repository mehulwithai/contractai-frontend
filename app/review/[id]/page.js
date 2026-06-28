'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { supabase } from '../../../lib/supabase'
import { apiCall } from '../../../lib/api'

const SEV = {
  red:   { bg: 'var(--red-bg)',   border: 'var(--red-border)',   text: 'var(--red-text)',   label: '🔴 High risk' },
  amber: { bg: 'var(--amber-bg)', border: 'var(--amber-border)', text: 'var(--amber-text)', label: '🟡 Worth discussing' },
  green: { bg: 'var(--green-bg)', border: 'var(--green-border)', text: 'var(--green-text)', label: '🟢 Minor note' },
}

const RISK_BADGE = {
  high:   { bg: 'var(--red-bg)',   border: 'var(--red-border)',   text: 'var(--red-text)',   label: '🔴 High Risk' },
  medium: { bg: 'var(--amber-bg)', border: 'var(--amber-border)', text: 'var(--amber-text)', label: '🟡 Medium Risk' },
  low:    { bg: 'var(--green-bg)', border: 'var(--green-border)', text: 'var(--green-text)', label: '🟢 Low Risk' },
}

export default function ReviewPage() {
  const [review, setReview] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')
  const router = useRouter()
  const { id } = useParams()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/login'); return }
      loadReview()
    })
  }, [id])

  const loadReview = async () => {
    try {
      const data = await apiCall(`/api/reviews/${id}`)
      setReview(data)
    } catch (e) {
      setError('Review not found or you do not have access.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingScreen />
  if (error)   return <ErrorScreen msg={error} />
  if (!review) return null

  const result = review.result
  const flags  = [...(result.flags || [])].sort((a, b) => {
    const order = { red: 0, amber: 1, green: 2 }
    return (order[a.severity] ?? 3) - (order[b.severity] ?? 3)
  })
  const riskBadge = RISK_BADGE[result.overall_risk] || RISK_BADGE.medium

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '32px 24px' }}>

      {/* Back */}
      <button
        onClick={() => router.push('/dashboard')}
        style={{
          background: 'none',
          color: 'var(--text-secondary)',
          fontSize: '14px',
          padding: '0',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        ← Back to dashboard
      </button>

      {/* Summary card */}
      <div style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        fontWeight: 500,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              {result.contract_type} · {new Date(review.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <h1 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {review.filename}
            </h1>
          </div>
          <span className="hover-effect" style={{
            background: riskBadge.bg,
            border: `1px solid ${riskBadge.border}`,
            color: riskBadge.text,
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>
            {riskBadge.label}
          </span>
        </div>

        {/* Parties */}
        {result.parties?.length > 0 && (
          <div style={{ marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Parties</span>
            <div style={{ fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px' }}>
              {result.parties.join(' · ')}
            </div>
          </div>
        )}

        {/* Summary */}
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
          {result.summary}
        </p>

        {/* Key dates */}
        {result.key_dates?.filter(d => d.date)?.length > 0 && (
          <div style={{
            background: 'var(--bg-tertiary)',
            borderRadius: '8px',
            padding: '12px 16px',
          }}>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              Key dates
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {result.key_dates.filter(d => d.date).map((d, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-muted)', minWidth: '160px' }}>{d.label}</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{d.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Flag count summary */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {['red', 'amber', 'green'].map(sev => {
          const count = flags.filter(f => f.severity === sev).length
          if (!count) return null
          const s = SEV[sev]
          return (
            <div key={sev} style={{
              background: s.bg,
              border: `1px solid ${s.border}`,
              color: s.text,
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 500,
            }}>
              {count} {sev === 'red' ? 'high risk' : sev === 'amber' ? 'worth discussing' : 'minor note'}{count > 1 ? 's' : ''}
            </div>
          )
        })}
      </div>

      {/* Risk flags */}
      <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>
        Risk flags ({flags.length})
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        {flags.map(flag => (
          <FlagCard key={flag.id} flag={flag} />
        ))}
      </div>

      {/* Positives */}
      {result.positives?.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>✅ What's in your favour</h2>
          <div className="hover-effect"style={{
            background: 'var(--green-bg)',
            border: '1px solid var(--green-border)',
            borderRadius: '8px',
            padding: '16px',
          }}>
            {result.positives.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--green-text)', padding: '4px 0' }}>
                <span>•</span><span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Questions to ask */}
      {result.questions_to_ask?.length > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>❓ Ask before signing</h2>
          <div className="hover-effect" style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '16px',
          }}>
            {result.questions_to_ask.map((q, i) => (
              <div key={i} style={{
                display: 'flex', gap: '10px', fontSize: '14px',
                color: 'var(--text-secondary)',
                padding: '6px 0',
                borderBottom: i < result.questions_to_ask.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ color: 'var(--text-muted)', minWidth: '20px' }}>{i + 1}.</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div style={{
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '12px',
        borderTop: '1px solid var(--border)',
        paddingTop: '20px',
      }}>
        This review is AI-generated and not legal advice.
        For complex agreements, consult a qualified lawyer.
      </div>
    </div>
  )
}

function FlagCard({ flag }) {
  const [copied, setCopied] = useState(false)
  const s = SEV[flag.severity] || SEV.amber

  const copy = () => {
    navigator.clipboard.writeText(flag.suggestion)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="hover-effect"style={{
      background: s.bg,
      border: `1px solid ${s.border}`,
      borderRadius: '10px',
      padding: '16px 20px',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            background: 'rgba(0,0,0,0.07)',
            color: s.text,
            fontSize: '11px',
            padding: '2px 8px',
            borderRadius: '20px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>{s.label}</span>
          <span style={{ fontWeight: 600, fontSize: '14px', color: s.text }}>
            {flag.title}
          </span>
        </div>
      </div>

      {/* Clause */}
      <blockquote  style={{
        fontSize: '13px',
        fontStyle: 'italic',
        color: s.text,
        opacity: 0.75,
        borderLeft: `3px solid ${s.border}`,
        paddingLeft: '10px',
        margin: '0 0 10px',
        lineHeight: 1.5,
      }}>
        "{flag.clause}"
      </blockquote>

      {/* Issue */}
      <p style={{ fontSize: '14px', color: s.text, lineHeight: 1.6, marginBottom: '12px', fontWeight: 500 }}>
        {flag.issue}
      </p>

      {/* Suggestion */}
      <div className="hover-effect" style={{
        background: 'var(--box)',
        borderRadius: '6px',
        padding: '10px 14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '12px',
      }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: s.text, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
            Suggested fix
          </div>
          <div style={{ fontSize: '13px', color: s.text, lineHeight: 1.5, fontWeight: 500 }}>
            {flag.suggestion}
          </div>
        </div>
        <button onClick={copy} style={{
          background: 'rgba(0,0,0,0.08)',
          color: s.text,
          padding: '5px 12px',
          borderRadius: '5px',
          fontSize: '12px',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

function LoadingScreen() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--text-secondary)' }}>
      <div style={{ fontSize: '32px', marginBottom: '16px' }}>⏳</div>
      <div style={{ fontWeight: 500 }}>Loading review…</div>
    </div>
  )
}

function ErrorScreen({ msg }) {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24px' }}>
      <div style={{ fontSize: '32px', marginBottom: '16px' }}>⚠️</div>
      <div style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{msg}</div>
      <a href="/dashboard" style={{ color: 'var(--accent)' }}>← Back to dashboard</a>
    </div>
  )
}
