export const BLOG_POSTS = [
  {
    slug: '5-dangerous-clauses-in-freelance-contracts',
    title: '5 Dangerous Contract Clauses Every Freelancer Must Avoid',
    excerpt: 'Protect your income and work. Learn how to spot uncapped revisions, immediate IP transfers, Net-90 terms, and broad non-competes before signing.',
    date: 'August 21, 2026',
    author: 'LetractAI Legal Research Team',
    category: 'Freelancers',
    readingTime: '5 min read',
    content: [
      {
        type: 'intro',
        text: 'As an independent freelancer or contractor, signing a client agreement without careful review can cost you thousands of dollars in unpaid work, endless revisions, or restricted future clients. Here are 5 of the most dangerous contract clauses to look out for and how to negotiate safer terms.'
      },
      {
        type: 'heading',
        text: '1. Immediate IP Transfer Prior to Payment'
      },
      {
        type: 'paragraph',
        text: 'Many client templates state that all intellectual property transfers immediately upon creation. If a dispute arises or a payment is delayed, the client technically owns your work before settling your invoice.'
      },
      {
        type: 'callout',
        title: 'Recommended Fix',
        text: 'Modify the language so IP ownership transfers strictly upon receipt of full and final payment.'
      },
      {
        type: 'heading',
        text: '2. Uncapped Revision Requests'
      },
      {
        type: 'paragraph',
        text: 'Vague Scope of Work clauses that do not limit revision rounds often lead to massive scope creep. Clients may ask for 10+ rounds of major edits for no additional fee.'
      },
      {
        type: 'callout',
        title: 'Recommended Fix',
        text: 'Specify that the project fee includes 2 rounds of minor revisions, with subsequent revisions billed at your standard hourly rate.'
      },
      {
        type: 'heading',
        text: '3. Net-60 or Net-90 Payment Windows'
      },
      {
        type: 'paragraph',
        text: 'Waiting 60 to 90 days after submitting an invoice turns you into an interest-free lender for your client. This places unnecessary strain on your personal cash flow.'
      },
      {
        type: 'heading',
        text: '4. Broad Non-Compete Agreements'
      },
      {
        type: 'paragraph',
        text: 'Overly broad non-compete clauses can legally prevent you from taking on other clients in the same industry. Ensure non-competes are narrowly defined or replaced with standard confidentiality.'
      },
      {
        type: 'heading',
        text: '5. One-Sided Indemnification'
      },
      {
        type: 'paragraph',
        text: 'Indemnity clauses requiring you to cover all legal defense costs for any third-party claim can expose your business to unlimited financial liability.'
      }
    ]
  },
  {
    slug: 'how-to-review-a-non-disclosure-agreement-nda',
    title: 'How to Review a Non-Disclosure Agreement (NDA) Before Signing',
    excerpt: 'NDAs are common, but one-sided terms can lock you into perpetual secrecy or restrict your business operations. Here is a practical review checklist.',
    date: 'August 20, 2026',
    author: 'LetractAI Legal Research Team',
    category: 'Guides',
    readingTime: '6 min read',
    content: [
      {
        type: 'intro',
        text: 'Non-Disclosure Agreements (NDAs) are routinely sent before exploratory business calls or partnership discussions. However, many NDAs contain buried non-compete clauses or unreasonable timeframes that restrict your future projects.'
      },
      {
        type: 'heading',
        text: 'Mutual vs. One-Sided Protection'
      },
      {
        type: 'paragraph',
        text: 'Check whether confidentiality obligations apply mutually to both parties or strictly to you. In most collaborative discussions, a mutual NDA is the fairest standard.'
      },
      {
        type: 'heading',
        text: 'Time Period for Confidentiality'
      },
      {
        type: 'paragraph',
        text: 'Commercial NDAs typically set confidentiality obligations for 2 to 5 years. Avoid perpetual secrecy clauses unless genuine trade secrets or patent filings are involved.'
      },
      {
        type: 'callout',
        title: 'Key Pro-Tip',
        text: 'Ensure the agreement explicitly permits sharing confidential data with your legal, financial, and tax advisors under standard professional duties.'
      }
    ]
  },
  {
    slug: 'startup-ip-assignment-clauses-explained',
    title: 'Startup IP Assignment Clauses: What Founders Need to Know',
    excerpt: 'Incomplete or unclear IP assignment agreements are one of the top deal-killers during startup fundraising due diligence. Here is how to structure them right.',
    date: 'August 18, 2026',
    author: 'LetractAI Legal Research Team',
    category: 'Startups',
    readingTime: '4 min read',
    content: [
      {
        type: 'intro',
        text: 'Venture capital investors and acquirers perform rigorous legal due diligence on intellectual property. If a contractor or early engineer created key product code without clear IP assignment, your funding round can hit a wall.'
      },
      {
        type: 'heading',
        text: 'Proprietary Information & Inventions Agreements (PIIA)'
      },
      {
        type: 'paragraph',
        text: 'Every founder, employee, and external contractor should sign a clear PIIA prior to writing code or building brand assets. The agreement must state that all work created for the startup belongs 100% to the company entity.'
      }
    ]
  }
]

export function getPostBySlug(slug) {
  return BLOG_POSTS.find(post => post.slug === slug)
}
