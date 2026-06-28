import Footer from '../../components/Footer'

export const metadata = { title: 'Privacy Policy — ContractAI' }

export default function PrivacyPage() {
  return (
    <div>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '56px 24px 24px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
          Last updated: June 2026
        </p>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 600, marginBottom: '32px' }}>
          Privacy Policy
        </h1>

        <Section title="What we collect">
          When you create an account, we collect your email address and a password (stored securely
          via Supabase's authentication system — we never see or store your password in plain text).
          When you upload a contract, we store the document file and the AI-generated review tied to
          your account.
        </Section>

        <Section title="How we use your contract data">
          Your uploaded contracts are sent to a third-party AI provider (currently Google Gemini or
          Anthropic Claude, depending on what's active) solely to generate the risk analysis you
          requested. We do not use your contracts to train any AI model, and we do not sell, rent, or
          share your documents with any third party for marketing or any other purpose.
        </Section>

        <Section title="Where your data is stored">
          Account data and contract reviews are stored in Supabase, a secured cloud database provider.
          Files are stored in a private storage bucket accessible only to your account — no other user
          can view, list, or download your contracts.
        </Section>

        <Section title="Payment information">
          If you subscribe to a paid plan, payment is processed directly by our payment provider
          (Stripe). We do not store your card details on our servers at any point.
        </Section>

        <Section title="Data retention and deletion">
          You can delete any individual contract review at any time from your dashboard, which
          permanently removes both the file and the analysis. If you'd like your entire account and
          all associated data deleted, contact us and we'll process the request within a reasonable
          timeframe.
        </Section>

        <Section title="Cookies and analytics">
          We use only the minimal cookies required for you to stay logged in. We do not currently run
          third-party advertising trackers or sell data to ad networks.
        </Section>

        <Section title="Changes to this policy">
          If this policy changes in a way that affects how your data is handled, we'll update this
          page and, where appropriate, notify you by email.
        </Section>

        <Section title="Contact">
          Questions about this policy can be directed to the ContractAI team via the contact option
          in your account settings.
        </Section>
      </div>
      <Footer />
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>
        {title}
      </h2>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
        {children}
      </p>
    </div>
  )
}
