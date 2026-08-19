import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://contractai.com'),
  title: {
    default: 'ContractAI — AI Contract Review & Risk Analysis for Founders',
    template: '%s | ContractAI',
  },
  description: 'Upload any contract and get a plain-English risk analysis with actionable revisions in 30 seconds. Built specifically for startup founders and legal teams.',
  keywords: [
    'AI Contract Review',
    'Contract Risk Scanner',
    'Legal Clause Analysis',
    'Founder Legal Tools',
    'Automated Contract Review',
    'ContractAI',
  ],
  authors: [{ name: 'ContractAI Team' }],
  creator: 'ContractAI',
  publisher: 'ContractAI',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ContractAI — AI Contract Review & Risk Analysis for Founders',
    description: 'Upload any contract and get a plain-English risk analysis in under 60 seconds.',
    url: 'https://contractai.com',
    siteName: 'ContractAI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ContractAI — AI Contract Review Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContractAI — AI Contract Review for Founders',
    description: 'Upload any contract and get a plain-English risk analysis in under 60 seconds.',
    creator: '@contractai',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'R3oqhsurklfnEJg2ll6ECUFiYzoFUEhjo9QQ1qJcRL0',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Script
          id="whop-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(w,d,s,u,n,a,b){if(w[n])return;a=w[n]={q:[],t:+new Date,s:[],o:u,track:function(){a.q.push([+new Date].concat([].slice.call(arguments)))},setScope:function(){a.s=[].slice.call(arguments).filter(function(x){return typeof x==="string"});a.q.push([+new Date,"setScope"].concat(a.s))},scope:function(){var c=[].slice.call(arguments);return{track:function(){a.q.push([+new Date].concat([].slice.call(arguments)).concat([{__scope:c}]))}}}};b=d.createElement(s);b.async=1;b.src=u+"/s.js";d.getElementsByTagName(s)[0].parentNode.insertBefore(b,d.getElementsByTagName(s)[0])}(window,document,"script","https://t.whop.tw","whop");whop.setScope("biz_u3LbT7ERPKmwwH");whop.track("page");`
          }}
        />
        <ThemeProvider>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 56px)' }}>
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
