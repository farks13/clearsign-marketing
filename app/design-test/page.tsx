'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ─── Design Test Page ─────────────────────────────────────────────────────────
// Inspired by todesktop.com aesthetic: deep dark BG, frosted glass, gradient
// text, tight tracking, glowing CTAs, layered depth.

const SCANNER_URL = 'https://clearsign-ashy.vercel.app/'

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="w-full transition-all duration-500"
        style={{
          maxWidth: scrolled ? '720px' : '1200px',
          background: scrolled ? 'rgba(5,6,27,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderRadius: scrolled ? '999px' : '0',
          border: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
          padding: scrolled ? '8px 24px' : '0 0',
        }}
      >
        <div className="flex items-center justify-between h-11">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #0891b2)' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">ClearSign</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-7">
            {['How It Works', 'Who It\'s For', 'Pricing'].map(l => (
              <a key={l} href="#" className="text-xs font-medium transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >{l}</a>
            ))}
            <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.12)' }} />
            <a href="/consumer" className="text-xs font-medium transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >For consumers →</a>
          </div>

          {/* CTA */}
          <a
            href="/waitlist"
            className="text-xs font-semibold px-4 py-2 rounded-full transition-all"
            style={{
              background: 'linear-gradient(135deg, #0d9488, #0891b2)',
              color: 'white',
              boxShadow: '0 0 20px rgba(13,148,136,0.35)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(13,148,136,0.55)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(13,148,136,0.35)' }}
          >
            Request early access
          </a>
        </div>
      </nav>
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center overflow-hidden" style={{ minHeight: '100vh', background: '#05061b' }}>
      {/* Background noise/depth layer */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(13,148,136,0.15) 0%, transparent 70%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(8,145,178,0.08) 0%, transparent 60%)',
      }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{ background: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.25)', color: 'rgba(94,234,212,0.9)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Private beta — live now
        </div>

        {/* Headline */}
        <h1 className="font-bold leading-none mb-6"
          style={{ fontSize: 'clamp(48px, 8vw, 88px)', letterSpacing: '-0.04em', color: 'white' }}>
          Find dark patterns<br />
          <span style={{
            background: 'linear-gradient(135deg, #2dd4bf 0%, #38bdf8 50%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            before regulators do.
          </span>
        </h1>

        {/* Sub */}
        <p className="mx-auto mb-10 leading-relaxed" style={{ maxWidth: '520px', fontSize: '18px', color: 'rgba(255,255,255,0.5)', letterSpacing: '-0.01em' }}>
          ClearSign scans your product for manipulative design and maps every finding to the regulations that matter. Automated. Continuous. Defensible.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
          <a
            href={SCANNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold rounded-xl transition-all"
            style={{
              background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
              color: 'white',
              padding: '14px 28px',
              fontSize: '15px',
              letterSpacing: '-0.01em',
              boxShadow: '0 0 32px rgba(13,148,136,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 48px rgba(13,148,136,0.6), inset 0 1px 0 rgba(255,255,255,0.2)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(13,148,136,0.4), inset 0 1px 0 rgba(255,255,255,0.15)' }}
          >
            Launch the scanner
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="/waitlist"
            className="flex items-center gap-2 font-semibold rounded-xl transition-all"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.8)',
              padding: '14px 28px',
              fontSize: '15px',
              letterSpacing: '-0.01em',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            Request early access
          </a>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', letterSpacing: '0.01em' }}>
          Not a business?{' '}
          <Link href="/consumer" style={{ color: 'rgba(94,234,212,0.6)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(94,234,212,0.9)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(94,234,212,0.6)' }}
          >Try the free consumer tool →</Link>
        </p>

        {/* Regulation strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mt-14"
          style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px', letterSpacing: '0.08em' }}>
          <span style={{ color: 'rgba(255,255,255,0.15)' }}>COVERS</span>
          {['DSA', 'FTC Act', 'CPRA', 'India CCPA', 'GDPR'].map((r, i, a) => (
            <span key={r} className="flex items-center gap-6">
              <span>{r}</span>
              {i < a.length - 1 && <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Feature grid ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: '⚡',
    title: '26 pattern checks',
    body: 'Every scan runs against a taxonomy of 26 dark patterns across 7 categories — urgency, hidden costs, obstruction, misdirection, social proof, privacy, and subscriptions.',
  },
  {
    icon: '⚖️',
    title: 'Regulatory mapping',
    body: 'Each finding is automatically mapped to DSA, FTC, CPRA, and GDPR articles — so your legal team has what they need without reading the full report.',
  },
  {
    icon: '📊',
    title: 'Scored compliance report',
    body: 'A 0–100 trust score with category breakdowns, severity ratings, and remediation guidance your product team can act on immediately.',
  },
  {
    icon: '🔁',
    title: 'Continuous monitoring',
    body: 'Re-scan on every release. Track score changes over time. Catch regressions before they reach users — or regulators.',
  },
  {
    icon: '🕸️',
    title: 'Multi-page crawl',
    body: 'ClearSign follows internal links and scans up to 100 pages per run, catching patterns that only appear on product, checkout, or cancellation flows.',
  },
  {
    icon: '🔌',
    title: 'API access',
    body: 'Integrate ClearSign into your CI/CD pipeline. Fail builds when high-severity patterns are detected. Available on Scale.',
  },
]

function Features() {
  return (
    <section className="relative py-32" style={{ background: '#05061b' }}>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 40% at 50% 100%, rgba(8,145,178,0.06) 0%, transparent 70%)',
      }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.6)', letterSpacing: '0.15em' }}>What you get</p>
          <h2 className="font-bold" style={{ fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.03em', color: 'white', lineHeight: 1.1 }}>
            Everything your compliance<br />team has been asking for.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(8px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.055)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)'
              }}
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <h3 className="font-semibold mb-2" style={{ color: 'white', fontSize: '15px', letterSpacing: '-0.01em' }}>{f.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: '1.6' }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Who it's for ─────────────────────────────────────────────────────────────
const PERSONAS = [
  {
    role: 'Product & Design',
    headline: 'Ship with confidence.',
    body: "Know before launch whether a pattern you've shipped will get flagged — by users or regulators. ClearSign gives your team a shared, objective reference.",
    detail: ['Catch issues in review, not production', 'Plain-English findings your whole team understands', 'Track score across releases'],
  },
  {
    role: 'Compliance & Legal',
    headline: 'Defensible evidence, on demand.',
    body: 'Regulators want proof you took reasonable steps. ClearSign provides dated scan records, regulatory mapping, and remediation trails you can put in front of an auditor.',
    detail: ['Mapped to DSA, FTC, CPRA, GDPR', 'PDF reports with finding provenance', 'Continuous scan history'],
  },
  {
    role: 'Founders & Executives',
    headline: "Don't let UX become a liability.",
    body: 'Dark pattern enforcement is accelerating globally. A single FTC action or DSA notice costs more than years of compliance tooling. ClearSign is your early warning system.',
    detail: ['Regulatory risk dashboard', 'Board-ready compliance posture', 'Reduce exposure before fundraising or acquisition'],
  },
]

function WhoItsFor() {
  const [active, setActive] = useState(0)
  const p = PERSONAS[active]

  return (
    <section className="py-32" style={{ background: '#030711' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.6)', letterSpacing: '0.15em' }}>Who it&apos;s for</p>
          <h2 className="font-bold" style={{ fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.03em', color: 'white', lineHeight: 1.1 }}>
            Built for the people<br />who ship the product.
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-10">
          {PERSONAS.map((persona, i) => (
            <button
              key={persona.role}
              onClick={() => setActive(i)}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
              style={{
                background: active === i ? 'rgba(13,148,136,0.2)' : 'rgba(255,255,255,0.04)',
                border: active === i ? '1px solid rgba(13,148,136,0.4)' : '1px solid rgba(255,255,255,0.08)',
                color: active === i ? 'rgba(94,234,212,0.95)' : 'rgba(255,255,255,0.4)',
              }}
            >
              {persona.role}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="max-w-3xl mx-auto rounded-3xl p-10 transition-all"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
          }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(94,234,212,0.6)', letterSpacing: '0.12em' }}>{p.role}</p>
          <h3 className="font-bold mb-4" style={{ fontSize: '28px', letterSpacing: '-0.025em', color: 'white' }}>{p.headline}</h3>
          <p className="mb-6" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.7' }}>{p.body}</p>
          <ul className="space-y-2.5">
            {p.detail.map(d => (
              <li key={d} className="flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="rgba(45,212,191,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// ─── Regulation strip ─────────────────────────────────────────────────────────
const REGS = [
  { name: 'EU Digital Services Act', article: 'Article 25', year: '2024' },
  { name: 'FTC "Click to Cancel"', article: '16 CFR §425', year: '2024' },
  { name: 'California CPRA', article: 'Section 1798.100', year: '2023' },
  { name: 'EU GDPR', article: 'Recital 32', year: 'Ongoing' },
]

function RegulationStrip() {
  return (
    <section className="py-24" style={{ background: '#05061b', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>
          Regulations we map to
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {REGS.map(r => (
            <div key={r.name} className="rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-xs font-bold mb-1" style={{ color: 'rgba(94,234,212,0.7)', letterSpacing: '0.05em' }}>{r.article}</div>
              <div className="font-medium text-sm mb-1" style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.01em' }}>{r.name}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{r.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: '#030711' }}>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,148,136,0.12) 0%, transparent 70%)',
      }} />
      {/* Decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rounded-full" style={{ width: '600px', height: '600px', border: '1px solid rgba(255,255,255,0.04)' }} />
        <div className="absolute rounded-full" style={{ width: '800px', height: '800px', border: '1px solid rgba(255,255,255,0.025)' }} />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(36px, 6vw, 60px)', letterSpacing: '-0.035em', color: 'white', lineHeight: 1.1 }}>
          Don&apos;t let UX become<br />a liability.
        </h2>
        <p className="mb-10" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '18px', lineHeight: '1.7', letterSpacing: '-0.01em' }}>
          Start scanning your product today. Spot issues before your regulators do.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={SCANNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold rounded-xl transition-all"
            style={{
              background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
              color: 'white',
              padding: '16px 32px',
              fontSize: '15px',
              letterSpacing: '-0.01em',
              boxShadow: '0 0 40px rgba(13,148,136,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
          >
            Launch the scanner
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <Link href="/waitlist"
            className="flex items-center font-semibold rounded-xl transition-all"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.75)',
              padding: '16px 32px',
              fontSize: '15px',
              letterSpacing: '-0.01em',
            }}
          >
            Request early access
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-10" style={{ background: '#030711', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #0891b2)' }}>
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>ClearSign</span>
          <span>by Third Mirror PTY LTD</span>
        </div>
        <div className="flex gap-6">
          {['Pricing', 'Waitlist', 'For consumers', 'Contact'].map(l => (
            <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.25)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DesignTestPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <WhoItsFor />
        <RegulationStrip />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
