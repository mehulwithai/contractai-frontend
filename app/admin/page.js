'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import { apiCall } from '../../lib/api'

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/login'); return }
      load()
    })
  }, [])

  const load = async () => {
    setLoading(true)
    setError('')
    try {
      const [statsData, usersData] = await Promise.all([
        apiCall('/api/admin/stats'),
        apiCall('/api/admin/users'),
      ])
      setStats(statsData)
      setUsers(usersData?.users || [])
    } catch (e) {
      setError(e.message.includes('403') ? 'Not authorized to view this page.' : 'Could not load admin data.')
    } finally {
      setLoading(false)
    }
  }

  // Draw the trend chart once stats are loaded
  useEffect(() => {
    if (!stats?.daily_trend || !chartRef.current) return

    const loadChart = async () => {
      if (!window.Chart) {
        await new Promise((resolve) => {
          const script = document.createElement('script')
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js'
          script.onload = resolve
          document.head.appendChild(script)
        })
      }

      if (chartInstance.current) chartInstance.current.destroy()

      const labels = stats.daily_trend.map(d => d.date.slice(5))
      const data = stats.daily_trend.map(d => d.count)

      chartInstance.current = new window.Chart(chartRef.current, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Reviews',
            data,
            borderColor: '#d4502e',
            backgroundColor: 'rgba(212,80,46,0.08)',
            fill: true,
            tension: 0.3,
            pointRadius: 0,
            borderWidth: 2,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#9a9788', font: { size: 11 } } },
            y: { beginAtZero: true, grid: { color: '#e0ddd3' }, ticks: { color: '#9a9788', font: { size: 11 } } }
          }
        }
      })
    }

    loadChart()
  }, [stats])

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen msg={error} />
  if (!stats) return null

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px 64px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>Admin dashboard</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
        Live snapshot of users, revenue, and product usage
      </p>

      {/* Metric cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '32px' }}>
        <MetricCard label="Total signups" value={stats.total_users ?? '—'} />
        <MetricCard label="Paid subscribers" value={stats.active_subscribers} />
        <MetricCard label="Estimated MRR" value={`$${stats.mrr_estimate}`} />
        <MetricCard label="Reviews this month" value={stats.reviews_this_month} />
      </div>

      {/* Trend chart */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
          Reviews per day — last 14 days
        </p>
        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
          <canvas ref={chartRef} role="img" aria-label="Line chart of daily contract reviews over the last 14 days" />
        </div>
      </div>

      {/* Risk distribution */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
          Risk levels — last 14 days
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <RiskPill label="High risk" count={stats.risk_distribution.high} color="red" />
          <RiskPill label="Medium risk" count={stats.risk_distribution.medium} color="amber" />
          <RiskPill label="Low risk" count={stats.risk_distribution.low} color="green" />
        </div>
      </div>

      {/* Recent activity */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
          Recent activity
        </p>
        {stats.recent_activity.length === 0 ? (
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>No activity yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {stats.recent_activity.map((a, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontSize: '13px', padding: '8px 0',
                borderBottom: i < stats.recent_activity.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ color: 'var(--text-primary)' }}>{a.filename}</span>
                <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <RiskBadge risk={a.overall_risk} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{timeAgo(a.created_at)}</span>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Users table */}
      <div className="card">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
          All users ({users.length})
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Joined</th>
                <th style={thStyle}>Reviews</th>
                <th style={thStyle}>Plan</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={tdStyle}>{u.email}</td>
                  <td style={tdStyle}>{new Date(u.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                  <td style={tdStyle}>{u.review_count}</td>
                  <td style={tdStyle}>
                    {u.is_subscribed ? (
                      <span style={{ color: 'var(--green-text)', background: 'var(--green-bg)', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 500 }}>Paid</span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Free</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const thStyle = { textAlign: 'left', padding: '8px 10px', color: 'var(--text-muted)', fontWeight: 500, fontSize: '12px' }
const tdStyle = { padding: '10px 10px', color: 'var(--text-secondary)' }

function MetricCard({ label, value }) {
  return (
    <div style={{ background: 'var(--bg-secondary)', borderRadius: '10px', padding: '16px' }}>
      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>{label}</p>
      <p style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)' }}>{value}</p>
    </div>
  )
}

function RiskPill({ label, count, color }) {
  const colors = {
    red:   { bg: 'var(--red-bg)', text: 'var(--red-text)', border: 'var(--red-border)' },
    amber: { bg: 'var(--amber-bg)', text: 'var(--amber-text)', border: 'var(--amber-border)' },
    green: { bg: 'var(--green-bg)', text: 'var(--green-text)', border: 'var(--green-border)' },
  }
  const c = colors[color]
  return (
    <div style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text, padding: '8px 16px', borderRadius: '8px', fontSize: '13px' }}>
      <strong style={{ fontSize: '18px', marginRight: '6px' }}>{count}</strong>{label}
    </div>
  )
}

function RiskBadge({ risk }) {
  const map = {
    high: { bg: 'var(--red-bg)', text: 'var(--red-text)' },
    medium: { bg: 'var(--amber-bg)', text: 'var(--amber-text)' },
    low: { bg: 'var(--green-bg)', text: 'var(--green-text)' },
  }
  const c = map[risk] || map.medium
  return (
    <span style={{ background: c.bg, color: c.text, fontSize: '11px', padding: '2px 8px', borderRadius: '20px', fontWeight: 500 }}>
      {risk}
    </span>
  )
}

function timeAgo(iso) {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000
  if (diff < 60) return 'just now'
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

function LoadingScreen() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--text-secondary)' }}>
      Loading admin dashboard…
    </div>
  )
}

function ErrorScreen({ msg }) {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24px' }}>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>{msg}</p>
      <a href="/dashboard" style={{ color: 'var(--accent)' }}>← Back to dashboard</a>
    </div>
  )
}
