import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClearSign — Check Any Website for Dark Patterns',
  description: "Before you hand over your details — check any website for the manipulation tactics designed to trap you. Free, instant, no account needed.",
  openGraph: {
    title: 'ClearSign — Check Any Website for Dark Patterns',
    description: "Signed up. Got charged. Can't cancel? Check first with ClearSign.",
    type: 'website',
  },
}

export default function ConsumerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
