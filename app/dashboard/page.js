'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import { uploadContract, apiCall } from '../../lib/api'
import UploadZone from '../../components/UploadZone'

const RISK_STYLE = {
  high:   { bg: 'var(--red-bg)',   border: 'var(--red-border)',   text: 'var(--red-text)',   label: 'High risk' },
  medium: { bg: 'var(--amber-bg)', border: 'var(--amber-border)', text: 'var(--amber-text)', label: 'Medium risk' },
  low:    { bg: 'var(--green-bg)', border: 'var(--green-border)', text: 'var(--green-text)', label: 'Low risk' },
}

export default function Dashboard() {
  const [reviews, setReviews]   = useState([])
  const [loading, setLoading]   = useState(false)
  const [fetching, setFetching] = useState(true)
  const [error, setError]       = useState('')
  const [user, setUser]         = useState(null)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/login'); return }
      setUser(session.user)
      loadReviews()
      checkSubscription()
    })
  }, [])

  const loadReviews = async () => {
    try {
      const data = await apiCall('/api/reviews/')
      setReviews(data?.reviews || [])
    } catch (e) {
      console.error(e)
    } finally {
      setFetching(false)
    }
  }

  const checkSubscription = async () => {
    try {
      const data = await apiCall('/api/billing/status')
      setIsSubscribed(data?.is_subscribed || false)
    } catch (e) {}
  }

  const handleUpload = async (file) => {
    setLoading(true)
    setError('')
    try {
      const data = await uploadContract(file)
      if (data?.review_id) {
        router.push(`/review/${data.review_id}`)
      }
    } catch (e) {
      setError(e.message || 'Upload failed. Please try again.')
      setLoading(false)
    }
  }

  const formatDate = (iso) => {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    })
  }

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '32px 24px' }}>

      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>
          Dashboard
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Upload a contract to get an instant risk analysis
        </p>
      </div>

      {/* Free tier banner */}
      {!isSubscribed && reviews.length >= 1 && (
        <div style={{
          background: 'var(--amber-bg)',
          border: '1px solid var(--amber-border)',
          borderRadius: '8px',
          padding: '14px 18px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ color: 'var(--amber-text)', fontSize: '14px' }}>
            <strong>You've used your free review.</strong> Upgrade to review unlimited contracts.
          </div>
          <a href="/upgrade" style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '7px 16px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 500,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>Upgrade — $49/mo</a>
        </div>
      )}

      {/* Upload zone */}
      {true && (
        <div style={{ marginBottom: '40px' }}>
          <UploadZone onUpload={handleUpload} loading={loading} />
          {error && <div className="error-msg" style={{ marginTop: '12px' }}>{error}</div>}
        </div>
      )}

      {/* Reviews list */}
      <div>
        <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>
          {reviews.length > 0 ? `Past reviews (${reviews.length})` : ''}
        </h2>

        {fetching ? (
          <div style={{ color: 'var(--text-secondary)', padding: '20px 0' }}>Loading…</div>
        ) : reviews.length === 0 ? (
          <EmptyState />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {reviews.map(r => (
              <ReviewRow key={r.id} review={r} onClick={() => router.push(`/review/${r.id}`)} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ReviewRow({ review, onClick }) {
  const risk = RISK_STYLE[review.overall_risk] || RISK_STYLE.medium
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'border-color 0.15s',
        gap: '12px',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
        <span style={{ fontSize: '20px' }}>📄</span>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontWeight: 500,
            fontSize: '14px',
            color: 'var(--text-primary)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>{review.filename}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
            {review.contract_type} · {new Date(review.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        {review.flag_count_red > 0 && (
          <span style={{ fontSize: '12px', color: 'var(--red-text)', background: 'var(--red-bg)', padding: '2px 8px', borderRadius: '20px', border: '1px solid var(--red-border)' }}>
            {review.flag_count_red} red
          </span>
        )}
        <span style={{
          fontSize: '12px',
          color: risk.text,
          background: risk.bg,
          border: `1px solid ${risk.border}`,
          padding: '3px 10px',
          borderRadius: '20px',
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}>
          {risk.label}
        </span>
        <span style={{ color: 'var(--text-muted)', fontSize: '18px' }}>›</span>
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '48px 24px',
      background: 'var(--bg-secondary)',
      border: '1px dashed var(--border)',
      borderRadius: '12px',
    }}>
      <div style={{ fontSize: '40px', marginBottom: '16px' }}>📋</div>
      <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '8px', color: 'var(--text-primary)' }}>
        No contracts reviewed yet
      </div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
        Upload your first contract above — try an NDA, vendor agreement, or any PDF
      </div>
    </div>
  )
}
