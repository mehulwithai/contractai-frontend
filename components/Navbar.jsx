'use client'
import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <nav style={{
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border)',
      padding: '0 24px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <a href={user ? '/' : '/'} style={{
        fontWeight: 700,
        fontSize: '18px',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{
          background: 'var(--accent)',
          color: '#fff',
          borderRadius: '6px',
          padding: '2px 8px',
          fontSize: '13px',
          fontWeight: 700,
        }}>C</span>
        ContractAI
      </a>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

        {/* Theme toggle */}
        <button onClick={toggle} style={{
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          padding: '6px 10px',
          fontSize: '16px',
          color: 'var(--text-secondary)',
          lineHeight: 1,
        }} title="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {user ? (
          <>
            <a href="/dashboard" style={{
              color: 'var(--text-secondary)',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: 500,
            }}>Dashboard</a>
            <a href="/upgrade" style={{
              color: 'var(--text-secondary)',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: 500,
            }}>Upgrade</a>
            <button onClick={signOut} style={{
              background: 'transparent',
              color: 'var(--text-secondary)',
              fontSize: '14px',
              padding: '6px 12px',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              fontWeight: 500,
            }}>Sign out</button>
          </>
        ) : (
          <>
            <a href="/login" style={{
              color: 'var(--text-secondary)',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: 500,
            }}>Sign in</a>
            <a href="/signup" style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '7px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
            }}>Get started free</a>
          </>
        )}
      </div>
    </nav>
  )
}
