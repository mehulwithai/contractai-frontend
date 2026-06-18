'use client'

import { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import { apiCall } from '../../lib/api'

function UpgradeContent() {
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')
const [subscribed, setSubscribed] = useState(false)

const router = useRouter()
const params = useSearchParams()
const paymentStatus = params.get('payment')

useEffect(() => {
supabase.auth.getSession().then(({ data: { session } }) => {
if (!session) {
router.push('/login')
return
}
checkSub()
})
}, [])

const checkSub = async () => {
try {
const data = await apiCall('/api/billing/status')
setSubscribed(data?.is_subscribed || false)
} catch (e) {}
}

const handleSubscribe = async () => {
setLoading(true)
setError('')
try {
const data = await apiCall('/api/billing/checkout', { method: 'POST' })
if (data?.checkout_url) window.location.href = data.checkout_url
} catch (e) {
setError('Could not start checkout. Please try again.')
setLoading(false)
}
}

const handlePortal = async () => {
setLoading(true)
try {
const data = await apiCall('/api/billing/portal', { method: 'POST' })
if (data?.portal_url) window.location.href = data.portal_url
} catch (e) {
setError('Could not open billing portal.')
setLoading(false)
}
}

return (
<div style={{ maxWidth: '520px', margin: '0 auto', padding: '48px 24px' }}>
{paymentStatus === 'success' && (
<div
style={{
background: 'var(--green-bg)',
border: '1px solid var(--green-border)',
color: 'var(--green-text)',
borderRadius: '8px',
padding: '14px 18px',
marginBottom: '24px',
fontWeight: 500,
}}
>
🎉 You're subscribed! Unlimited reviews are now unlocked. </div>
)}

```
  {paymentStatus === 'cancelled' && (
    <div
      style={{
        background: 'var(--amber-bg)',
        border: '1px solid var(--amber-border)',
        color: 'var(--amber-text)',
        borderRadius: '8px',
        padding: '14px 18px',
        marginBottom: '24px',
      }}
    >
      Checkout cancelled — you haven't been charged.
    </div>
  )}

  <div style={{ textAlign: 'center', marginBottom: '36px' }}>
    <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
      {subscribed ? "You're on the paid plan" : 'Upgrade to unlimited'}
    </h1>
    <p style={{ color: 'var(--text-secondary)' }}>
      {subscribed
        ? 'Manage your subscription below.'
        : 'Review as many contracts as you need, every month.'}
    </p>
  </div>

  <div
    style={{
      background: 'var(--bg-secondary)',
      border: '2px solid var(--accent)',
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '24px',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontSize: '13px',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        marginBottom: '8px',
      }}
    >
      Growth plan
    </div>

    <div
      style={{
        fontSize: '52px',
        fontWeight: 700,
        color: 'var(--accent)',
        lineHeight: 1,
        marginBottom: '4px',
      }}
    >
      $49
    </div>

    <div style={{ color: 'var(--text-secondary)', marginBottom: '28px' }}>
      per month · cancel anytime
    </div>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        textAlign: 'left',
        marginBottom: '28px',
      }}
    >
      {[
        'Unlimited contract reviews',
        'Risk flags in plain English',
        'Suggested redline language',
        'Contract vault & search history',
        'Renewal date alerts',
        'Priority support',
      ].map((feat) => (
        <div
          key={feat}
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            fontSize: '14px',
          }}
        >
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>
            ✓
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>{feat}</span>
        </div>
      ))}
    </div>

    {error && (
      <div
        className="error-msg"
        style={{ marginBottom: '16px', textAlign: 'left' }}
      >
        {error}
      </div>
    )}

    {subscribed ? (
      <button
        onClick={handlePortal}
        disabled={loading}
        className="btn-primary"
      >
        {loading ? 'Loading…' : 'Manage subscription'}
      </button>
    ) : (
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="btn-primary"
      >
        {loading ? 'Loading…' : 'Subscribe — $49/month'}
      </button>
    )}

    <div
      style={{
        color: 'var(--text-muted)',
        fontSize: '12px',
        marginTop: '12px',
      }}
    >
      Secured by Stripe · Cancel anytime
    </div>
  </div>

  <div style={{ textAlign: 'center' }}>
    <a
      href="/dashboard"
      style={{ color: 'var(--text-secondary)', fontSize: '14px' }}
    >
      ← Back to dashboard
    </a>
  </div>
</div>


)
}

export default function UpgradePage() {
return (
<Suspense fallback={<div>Loading...</div>}> <UpgradeContent /> </Suspense>
)
}
