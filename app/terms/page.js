import Footer from '../../components/Footer'

export const metadata = { title: 'Terms of Service — ContractAI' }

export default function TermsPage() {
  return (
    <div>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '56px 24px 24px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
          Last updated: June 2026
        </p>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 600, marginBottom: '32px' }}>
          Terms of Service
        </h1>

        <Section title="1. Acceptance of terms">
          By creating an account or using ContractAI, you agree to these Terms of Service. If you
          don't agree with any part of these terms, please don't use the service.
        </Section>

        <Section title="2. What ContractAI is — and isn't">
          ContractAI is an AI-powered tool that analyses contracts you upload and surfaces potential
          risks in plain language. It is not a law firm, does not provide legal advice, and does not
          create an attorney-client relationship of any kind. For binding legal advice, you should
          consult a licensed attorney in your jurisdiction.
        </Section>

        <Section title="3. Your account">
          You're responsible for keeping your login credentials secure and for any activity that
          happens under your account. Let us know immediately if you believe your account has been
          accessed without authorization.
        </Section>

        <Section title="4. Acceptable use">
          You agree not to upload documents you don't have the right to share, use the service for
          any unlawful purpose, attempt to reverse-engineer or abuse the platform, or use automated
          tools to scrape or overload the service.
        </Section>

        <Section title="5. Subscriptions and billing">
          Paid plans are billed on a recurring monthly basis via our payment provider. You can cancel
          at any time through your account settings or the billing portal; cancellation stops future
          billing but does not refund the current billing period unless required by law.
        </Section>

        <Section title="6. Free tier limits">
          Free accounts are limited to a set number of contract reviews per month. We reserve the
          right to adjust free tier limits at any time.
        </Section>

        <Section title="7. Accuracy of AI output">
          AI-generated analysis is provided for informational purposes only and may contain errors,
          omissions, or inaccuracies. You are responsible for independently verifying any conclusions
          before relying on them, particularly for high-value or legally significant agreements.
        </Section>

        <Section title="8. Limitation of liability">
          ContractAI and its operators are not liable for any decisions made, damages incurred, or
          losses suffered as a result of relying on the AI-generated review. The service is provided
          "as is" without warranties of any kind.
        </Section>

        <Section title="9. Termination">
          We may suspend or terminate access to the service for violations of these terms or for any
          other reason at our discretion, with or without notice.
        </Section>

        <Section title="10. Changes to these terms">
          We may update these terms from time to time. Continued use of the service after changes
          take effect constitutes acceptance of the updated terms.
        </Section>

        <Section title="11. Contact">
          Questions about these terms can be directed to the ContractAI team via the contact option
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
