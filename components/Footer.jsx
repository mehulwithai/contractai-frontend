'use client'

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-900/60 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 font-bold text-zinc-950 dark:text-zinc-50 hover:opacity-90">
              <div className="w-7.5 h-7.5 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-extrabold text-sm">
                C
              </div>
              <span className="font-semibold font-display">Contract<span className="text-blue-600 dark:text-blue-400">AI</span></span>
            </a>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm">
              Understand contracts before you sign. Plain-English explanations, risk flags, and negotiation suggestions in minutes.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200/60 dark:border-zinc-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-400 dark:text-zinc-600 text-xs text-center md:text-left max-w-2xl leading-relaxed">
            <span className="font-semibold text-zinc-600 dark:text-zinc-400 block mb-1">Disclaimer</span>
            ContractAI provides AI-generated information and is not a law firm. Results do not constitute legal advice. For critical legal transactions, please consult with a qualified legal professional.
          </div>
          <div className="text-zinc-500 dark:text-zinc-500 text-xs whitespace-nowrap">
            &copy; {new Date().getFullYear()} ContractAI Inc.
          </div>
        </div>
      </div>
    </footer>
  )
}
