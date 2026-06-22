'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function WaitlistBanner({ userEmail }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const joinWaitlist = async () => {
    setLoading(true)
    setError('')
    try {
      // Save to a simple waitlist table in Supabase
      const { error: dbError } = await supabase
        .from('waitlist')
        .insert({ email: userEmail })

      if (dbError && dbError.code !== '23505') throw dbError // 23505 = duplicate, that's fine
      setSubmitted(true)
    } catch (e) {
      setError('Could not join waitlist. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
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
        <strong>You've used your free review.</strong>{' '}
        {submitted
          ? "You're on the list — we'll email you the moment paid plans go live."
          : 'Paid plans are launching soon. Want us to notify you the moment they\'re live?'}
      </div>

      {!submitted && (
        <button
          onClick={joinWaitlist}
          disabled={loading}
          style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '7px 16px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            border: 'none',
          }}
        >
          {loading ? 'Joining…' : 'Notify me'}
        </button>
      )}

      {error && <div style={{ color: 'var(--red-text)', fontSize: '12px', width: '100%' }}>{error}</div>}
    </div>
  )
}
