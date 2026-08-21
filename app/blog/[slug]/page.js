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

      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <Link href="/blog" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none', display: 'inline-block', marginBottom: '24px', fontWeight: 500 }}>
          ← Back to all guides
        </Link>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '12px' }}>
            {post.category}
          </span>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{post.date} · {post.readingTime}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' }}>
          {post.title}
        </h1>

        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', borderBottom: '1px solid var(--border)', paddingBottom: '32px' }}>
          {post.excerpt}
        </p>

        {/* Content body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '16px', lineHeight: 1.7, color: 'var(--text-primary)' }}>
          {post.content.map((item, idx) => {
            if (item.type === 'intro' || item.type === 'paragraph') {
              return <p key={idx} style={{ margin: 0 }}>{item.text}</p>
            }
            if (item.type === 'heading') {
              return <h2 key={idx} style={{ fontSize: '24px', fontWeight: 700, marginTop: '20px', marginBottom: '8px' }}>{item.text}</h2>
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
                  <strong style={{ display: 'block', color: 'var(--accent)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
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

        {/* In-article CTA box */}
        <div style={{
          marginTop: '56px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
            Want to Scan Your Agreement Automatically?
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
            Upload your contract to LetractAI and get an instant breakdown of risky clauses, redlines, and plain-English explanations in seconds.
          </p>
          <Link href="/signup" style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '15px',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Analyze Contract Free →
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  )
}
