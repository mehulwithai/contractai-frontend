import Footer from '../../components/Footer'
import Link from 'next/link'
import { BLOG_POSTS } from '../../lib/blogData'

export const metadata = {
  title: 'Contract Review & Legal Risk Blog — LetractAI',
  description: 'Practical guides, contract checklists, and legal risk analysis tips for freelancers, startup founders, and business owners.',
  keywords: ['Contract Review Blog', 'Freelance Contract Checklist', 'NDA Review Guide', 'Startup IP Assignment'],
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogIndexPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      {/* Header */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
        <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
          📚 LetractAI Knowledge Hub
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, margin: '20px 0' }}>
          Contract Review Guides & Insights
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Learn how to spot dangerous clauses, negotiate safer client agreements, and protect your business before signing.
        </p>
      </section>

      {/* Grid of Posts */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 24px 72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {BLOG_POSTS.map(post => (
            <article key={post.slug} className="card card-hover hover-effect" style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              cursor: 'pointer',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '12px' }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{post.readingTime}</span>
                </div>

                <h2 style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.3, marginBottom: '12px' }}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                    {post.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {post.excerpt}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{post.date}</span>
                <Link href={`/blog/${post.slug}`} style={{ fontSize: '14px', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
                  Read Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
        <div style={{ background: 'var(--accent)', color: '#fff', padding: '48px 24px', borderRadius: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Have a Contract Waiting for Review?</h2>
          <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '24px', maxWidth: '560px', margin: '0 auto 24px' }}>
            Upload any agreement and receive an instant AI risk score, clause breakdown, and suggested counter-terms.
          </p>
          <Link href="/signup" style={{ background: '#fff', color: 'var(--accent)', padding: '14px 28px', borderRadius: '10px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
            Review First Contract Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
