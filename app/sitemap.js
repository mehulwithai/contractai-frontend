export default async function sitemap() {
  const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
    if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'https://contractai.com';
  };

  const baseUrl = getBaseUrl().replace(/\/$/, '');

  const routes = [
    '',
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
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : 0.6,
  }))
}
