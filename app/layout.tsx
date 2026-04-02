import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'ClearSign — Find Dark Patterns Before Regulators Do',
  description: 'ClearSign scans your product for manipulative design, maps findings to DSA, FTC, CPRA, and GDPR, and gives your team a clear path to fix them. Automated. Continuous. Defensible.',
  openGraph: {
    title: 'ClearSign — Find Dark Patterns Before Regulators Do',
    description: 'Systematic dark pattern detection and compliance scoring for product teams, compliance teams, and regulators.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
