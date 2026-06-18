import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'ContractAI — Contract review for founders',
  description: 'Upload any contract and get a plain-English risk analysis in 30 seconds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 56px)' }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
