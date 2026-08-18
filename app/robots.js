export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://contractai.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/admin/', '/review/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
