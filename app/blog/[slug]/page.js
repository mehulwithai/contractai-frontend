import Footer from '../../../components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS, getPostBySlug } from '../../../lib/blogData'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Article Not Found — LetractAI' }

  return {
    title: `${post.title} | LetractAI Blog`,
    description: post.excerpt,
    keywords: [post.category, 'Contract Review', 'Legal Risk', 'LetractAI Blog'],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Related posts (excluding current post)
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 4)

  // Extract headings for Table of Contents
  const headings = post.content
    .filter(item => item.type === 'heading')
    .map(item => ({
      text: item.text,
      id: item.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'LetractAI',
    },
  }

  return (
    <div style={{ fontFamily: 'var(--sans)', color: 'var(--text-primary)', background: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 64px' }}>
        <Link href="/blog" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none', display: 'inline-block', marginBottom: '24px', fontWeight: 500 }}>
          ← Back to all guides
        </Link>

        {/* 3-Column Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr)',
          gap: '40px',
        }} className="blog-layout">
          
          {/* LEFT SIDEBAR: Sticky Table of Contents */}
          <aside className="blog-left-sidebar" style={{ position: 'sticky', top: '80px' }}>
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                Table of Contents
              </div>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {headings.map(h => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      lineHeight: 1.4,
                      transition: 'color 0.15s',
                    }}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* CENTER: Main Article Content */}
          <main style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '12px' }}>
                {post.category}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{post.date} · {post.readingTime}</span>
            </div>

            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' }}>
              {post.title}
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', borderBottom: '1px solid var(--border)', paddingBottom: '28px', fontWeight: 500 }}>
              {post.excerpt}
            </p>

            {/* Article Content Render */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '16px', lineHeight: 1.7, color: 'var(--text-primary)' }}>
              {post.content.map((item, idx) => {
                if (item.type === 'intro' || item.type === 'paragraph') {
                  return <p key={idx} style={{ margin: 0 }}>{item.text}</p>
                }
                if (item.type === 'heading') {
                  const id = item.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                  return <h2 key={idx} id={id} style={{ fontSize: '22px', fontWeight: 700, marginTop: '24px', marginBottom: '8px', scrollMarginTop: '80px' }}>{item.text}</h2>
                }
                if (item.type === 'callout') {
                  return (
                    <div key={idx} style={{
                      background: 'var(--accent-light)',
                      borderLeft: '4px solid var(--accent)',
                      padding: '20px',
                      borderRadius: '8px',
                      margin: '12px 0',
                    }}>
                      <strong style={{ display: 'block', color: 'var(--accent)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 700 }}>
                        {item.title}
                      </strong>
                      <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500 }}>
                        {item.text}
                      </div>
                    </div>
                  )
                }
                return null
              })}
            </div>

            {/* In-article conversion card */}
            <div style={{
              marginTop: '56px',
              background: 'var(--bg-secondary)',
              border: '2px solid var(--accent)',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
            }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                Review Your Agreement with LetractAI
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
                Upload any contract and get an instant AI risk score, redlines, and plain-English clause breakdowns in seconds.
              </p>
              <Link href="/signup" style={{
                background: 'var(--accent)',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-block',
              }}>
                Analyze Contract Free →
              </Link>
            </div>
          </main>

          {/* RIGHT SIDEBAR: Sticky Recommended Articles */}
          <aside className="blog-right-sidebar" style={{ position: 'sticky', top: '80px' }}>
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
                Recommended Guides
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {relatedPosts.map(rel => (
                  <div key={rel.slug} className="hover-effect" style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '14px 16px',
                  }}>
                    <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 600 }}>{rel.category}</span>
                    <h4 style={{ fontSize: '14px', fontWeight: 600, margin: '4px 0 6px', lineHeight: 1.3 }}>
                      <Link href={`/blog/${rel.slug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                        {rel.title}
                      </Link>
                    </h4>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{rel.readingTime}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>

      <Footer />

      {/* Responsive layout styles */}
      <style>{`
        @media (min-width: 1024px) {
          .blog-layout {
            grid-template-columns: 240px 1fr 280px !important;
          }
        }
        @media (max-width: 1023px) {
          .blog-left-sidebar, .blog-right-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
