import { BLOG_POSTS } from '../lib/blogData'

export default async function sitemap() {
  const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
    if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'https://contractai.com';
  };

  const baseUrl = getBaseUrl().replace(/\/$/, '');

  const blogRoutes = BLOG_POSTS.map(post => `/blog/${post.slug}`)

  const routes = [
    '',
    '/blog',
    ...blogRoutes,
    '/ai-contract-review',
    '/contract-review',
    '/contract-analyzer',
    '/contract-clause-analyzer',
    '/contract-risk-analysis',
    '/nda-review',
    '/nda-analyzer',
    '/freelance-contract-review',
    '/contract-review-for-startups',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/upgrade',
    '/login',
    '/signup',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/blog') ? 0.8 : 0.6,
  }))
}
