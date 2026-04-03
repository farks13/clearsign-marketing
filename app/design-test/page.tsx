'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const SCANNER_URL = 'https://clearsign-ashy.vercel.app/'

// ─── Shared style helpers ─────────────────────────────────────────────────────
const glass = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
}
const glassHover = {
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.13)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.09), 0 12px 40px rgba(0,0,0,0.3)',
}
const tealGlow = '0 0 32px rgba(13,148,136,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
const tealGlowHover = '0 0 48px rgba(13,148,136,0.6), inset 0 1px 0 rgba(255,255,255,0.2)'

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = [
    ['How It Works', '#how-it-works'],
    ["Who It's For", '#who-its-for'],
    ['Pricing', '#pricing'],
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <nav className="w-full max-w-6xl transition-all duration-500" style={{
          background: scrolled ? 'rgba(5,6,27,0.9)' : 'rgba(5,6,27,0.6)',
          backdropFilter: 'blur(16px)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '0 20px',
        }}>
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #14b8a6, #0891b2)' }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>ClearSign</span>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map(([l, h]) => (
                <a key={l} href={h} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                  {l}
                </a>
              ))}
              <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
              <a href="/consumer" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
                For consumers →
              </a>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a href="/waitlist" className="hidden sm:block"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #0891b2)',
                  color: 'white', fontSize: '13px', fontWeight: 600,
                  padding: '8px 16px', borderRadius: '999px', textDecoration: 'none',
                  whiteSpace: 'nowrap', boxShadow: '0 0 18px rgba(13,148,136,0.35)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(13,148,136,0.55)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px rgba(13,148,136,0.35)' }}>
                Request early access
              </a>

              {/* Hamburger — mobile/tablet */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg gap-1.5"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span className="block w-4 h-px transition-all" style={{ background: 'rgba(255,255,255,0.7)', transform: mobileOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
                <span className="block w-4 h-px transition-all" style={{ background: 'rgba(255,255,255,0.7)', opacity: mobileOpen ? 0 : 1 }} />
                <span className="block w-4 h-px transition-all" style={{ background: 'rgba(255,255,255,0.7)', transform: mobileOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileOpen && (
            <div className="lg:hidden border-t pb-4" style={{ borderColor: 'rgba(255,255,255,0.07)', marginTop: '0' }}>
              <div className="flex flex-col pt-3 gap-1">
                {navLinks.map(([l, h]) => (
                  <a key={l} href={h} onClick={() => setMobileOpen(false)}
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', padding: '10px 4px', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                    {l}
                  </a>
                ))}
                <a href="/consumer" onClick={() => setMobileOpen(false)}
                  style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', padding: '10px 4px', display: 'block' }}>
                  For consumers →
                </a>
                <a href="/waitlist"
                  style={{ display: 'block', marginTop: '8px', background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', fontSize: '14px', fontWeight: 600, padding: '12px 16px', borderRadius: '10px', textDecoration: 'none', textAlign: 'center' }}>
                  Request early access
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '100vh', background: '#05061b' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(13,148,136,0.18) 0%, transparent 65%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 85% 85%, rgba(8,145,178,0.07) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      <div className="relative max-w-4xl mx-auto px-6 pt-36 pb-28">
        <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-xs font-semibold"
          style={{ background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.22)', color: 'rgba(94,234,212,0.85)', letterSpacing: '0.04em' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Private beta — live now
        </div>

        <h1 style={{ fontSize: 'clamp(50px, 8.5vw, 92px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: 'white', marginBottom: '24px' }}>
          Find dark patterns<br />
          <span style={{
            background: 'linear-gradient(125deg, #2dd4bf 0%, #38bdf8 45%, #818cf8 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>before regulators do.</span>
        </h1>

        <p style={{ maxWidth: '500px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.65', color: 'rgba(255,255,255,0.48)', letterSpacing: '-0.01em' }}>
          ClearSign scans your product for manipulative design and maps every finding to the regulations that matter. Automated. Continuous. Defensible.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
          <a href={SCANNER_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl font-semibold transition-all"
            style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', padding: '15px 30px', fontSize: '15px', letterSpacing: '-0.01em', boxShadow: tealGlow, textDecoration: 'none' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlowHover }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlow }}>
            Launch the scanner
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="/waitlist"
            className="flex items-center rounded-xl font-semibold transition-all"
            style={{ ...glass, color: 'rgba(255,255,255,0.75)', padding: '15px 30px', fontSize: '15px', letterSpacing: '-0.01em', textDecoration: 'none' }}
            onMouseEnter={e => { Object.assign((e.currentTarget as HTMLElement).style, glassHover) }}
            onMouseLeave={e => { Object.assign((e.currentTarget as HTMLElement).style, glass); (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}>
            Request early access
          </a>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '12px', marginBottom: '56px' }}>
          Not a business?{' '}
          <a href="/consumer" style={{ color: 'rgba(94,234,212,0.55)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(94,234,212,0.85)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(94,234,212,0.55)')}>Try the free consumer tool →</a>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1" style={{ color: 'rgba(255,255,255,0.18)', fontSize: '11px', letterSpacing: '0.1em' }}>
          <span style={{ color: 'rgba(255,255,255,0.14)' }}>COVERS</span>
          {['DSA','FTC Act','CPRA','India CCPA','GDPR'].map((r, i, a) => (
            <span key={r} className="flex items-center gap-5">
              <span>{r}</span>
              {i < a.length-1 && <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Problem ──────────────────────────────────────────────────────────────────
function Problem() {
  const cards = [
    { title: 'The Regulatory Wave', body: "The EU Digital Services Act, FTC Section 5, and California's CPRA all target dark patterns — with fines reaching hundreds of millions. India now mandates annual audits." },
    { title: "Manual Audits Don't Scale", body: 'Most teams rely on ad-hoc reviews, designer intuition, or waiting for complaints. That\'s reactive, inconsistent, and indefensible when a regulator comes knocking.' },
    { title: 'No Tool Exists For This', body: 'Accessibility scanners catch WCAG issues. Cookie consent tools handle banners. But nobody systematically detects the broader category of manipulative UX — until now.' },
  ]

  return (
    <section className="py-28" style={{ background: '#030711' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>The problem</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>
            Dark patterns are now<br />a regulatory risk.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '17px', marginTop: '16px', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.65 }}>
            Regulatory standards are catching up with manipulative design. Most teams don&apos;t have a systematic way to identify and fix these issues before they become liabilities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map(c => (
            <div key={c.title} className="rounded-2xl p-7 transition-all duration-300"
              style={glass}
              onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, glassHover)}
              onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, glass)}>
              <h3 style={{ color: 'white', fontWeight: 600, fontSize: '16px', letterSpacing: '-0.015em', marginBottom: '12px' }}>{c.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '14px', lineHeight: 1.7 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: '01',
      label: 'Scan',
      title: 'Point it at any URL.',
      body: 'ClearSign crawls your pages, analyses the DOM, inspects copy, and checks interaction patterns against a library of 26 known dark pattern types across 7 categories.',
    },
    {
      num: '02',
      label: 'Score',
      title: 'Get a scored report.',
      body: 'Every finding is classified by type, severity, and the specific regulations it may violate — DSA, FTC, CPRA, GDPR — with a 0–100 trust score and category breakdown.',
    },
    {
      num: '03',
      label: 'Fix',
      title: 'Prioritise and remediate.',
      body: 'Actionable remediation guidance for each issue, prioritised by regulatory risk. Export compliance-ready reports your legal team can put in front of an auditor.',
    },
  ]

  return (
    <section id="how-it-works" className="py-28" style={{ background: '#05061b', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>How it works</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>
            From URL to defensible<br />compliance report.
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={s.num} className={`flex flex-col gap-5 items-stretch ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Text side */}
              <div className="flex-1 rounded-2xl p-8 flex flex-col justify-center" style={glass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.35)', color: 'rgba(94,234,212,0.9)', letterSpacing: '0.05em' }}>
                    {s.num}
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.label}</span>
                </div>
                <h3 style={{ color: 'white', fontWeight: 600, fontSize: '22px', letterSpacing: '-0.025em', marginBottom: '12px', lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', lineHeight: 1.75 }}>{s.body}</p>
              </div>

              {/* Screen placeholder */}
              <div className="flex-1 rounded-2xl overflow-hidden flex flex-col" style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: '#0a0f1e',
                minHeight: '240px',
              }}>
                {/* Mini browser bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex gap-1.5">
                    {[0,1,2].map(d => <div key={d} className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />)}
                  </div>
                  <div className="mx-auto rounded px-3 py-0.5 text-xs" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.2)' }}>
                    {s.label === 'Scan' ? 'clearsign — scanner' : s.label === 'Score' ? 'clearsign — report' : 'clearsign — findings'}
                  </div>
                </div>
                {/* Screen content area */}
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.2)' }}>
                      <span style={{ fontSize: '20px' }}>
                        {s.label === 'Scan' ? '🔍' : s.label === 'Score' ? '📊' : '🔧'}
                      </span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '12px', fontWeight: 500 }}>{s.label} screen</p>
                    <p style={{ color: 'rgba(255,255,255,0.1)', fontSize: '11px', marginTop: '3px' }}>Product screenshot · coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="/waitlist"
            className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all"
            style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', padding: '14px 28px', fontSize: '14px', letterSpacing: '-0.01em', boxShadow: tealGlow, textDecoration: 'none' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlowHover }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlow }}>
            Request early access
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Who It's For ─────────────────────────────────────────────────────────────
const PERSONAS = [
  {
    tab: 'Product & Design',
    headline: 'Ship with confidence.',
    body: "Know before launch whether a pattern you've shipped will get flagged — by users or regulators. ClearSign gives your team a shared, objective reference.",
    bullets: ['Catch issues in review, not production', 'Plain-English findings the whole team understands', 'Track compliance score across releases'],
  },
  {
    tab: 'Compliance & Legal',
    headline: 'Defensible evidence, on demand.',
    body: 'Regulators want proof you took reasonable steps. ClearSign provides dated scan records, regulatory mapping, and remediation trails you can put in front of an auditor.',
    bullets: ['Mapped to DSA, FTC, CPRA, GDPR', 'PDF reports with finding provenance', 'Continuous scan history'],
  },
  {
    tab: 'Founders & Execs',
    headline: "Don't let UX become a liability.",
    body: 'Dark pattern enforcement is accelerating globally. A single FTC action or DSA notice costs more than years of compliance tooling. ClearSign is your early warning system.',
    bullets: ['Board-ready compliance posture', 'Reduce exposure before fundraising or acquisition', 'Monitor competitors and industry peers'],
  },
]

function WhoItsFor() {
  const [active, setActive] = useState(0)
  const p = PERSONAS[active]

  return (
    <section id="who-its-for" className="py-28" style={{ background: '#030711', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>Who it&apos;s for</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>
            Built for the people<br />who ship the product.
          </h2>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {PERSONAS.map((persona, i) => (
            <button key={persona.tab} onClick={() => setActive(i)}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
              style={{
                background: active === i ? 'rgba(13,148,136,0.18)' : 'rgba(255,255,255,0.04)',
                border: active === i ? '1px solid rgba(13,148,136,0.38)' : '1px solid rgba(255,255,255,0.08)',
                color: active === i ? 'rgba(94,234,212,0.9)' : 'rgba(255,255,255,0.38)',
                cursor: 'pointer',
              }}>
              {persona.tab}
            </button>
          ))}
        </div>

        <div className="rounded-3xl p-10 transition-all" style={glass}>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Left: text content */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.12em' }}>{p.tab}</p>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '-0.025em', marginBottom: '14px', lineHeight: 1.2 }}>{p.headline}</h3>
              <p style={{ color: 'rgba(255,255,255,0.47)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>{p.body}</p>
              <ul className="space-y-2.5">
                {p.bullets.map(b => (
                  <li key={b} className="flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.62)', fontSize: '14px' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="rgba(45,212,191,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a href={`/waitlist`}
                style={{ display: 'inline-flex', alignItems: 'center', marginTop: '28px', color: 'rgba(94,234,212,0.7)', fontSize: '13px', fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.005em' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(94,234,212,1)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(94,234,212,0.7)')}>
                Join the waitlist →
              </a>
            </div>

            {/* Right: product screen placeholder */}
            <div className="flex-shrink-0 w-full md:w-72 lg:w-80 rounded-2xl overflow-hidden flex flex-col" style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: '#0a0f1e',
              minHeight: '260px',
            }}>
              {/* Mini browser bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-1.5">
                  {[0,1,2].map(d => <div key={d} className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />)}
                </div>
                <div className="mx-auto rounded px-3 py-0.5 text-xs" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.2)' }}>
                  clearsign — report
                </div>
              </div>
              {/* Screen content area */}
              <div className="flex-1 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.2)' }}>
                    <span style={{ fontSize: '20px' }}>📊</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '12px', fontWeight: 500 }}>Report screen</p>
                  <p style={{ color: 'rgba(255,255,255,0.1)', fontSize: '11px', marginTop: '3px' }}>Product screenshot · coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── What We Detect ───────────────────────────────────────────────────────────
const CATEGORIES = [
  { icon: '⏱', name: 'Urgency & Pressure', desc: 'Fake countdown timers, manufactured scarcity, and "limited time" claims designed to bypass rational decision-making.' },
  { icon: '💸', name: 'Hidden Costs', desc: 'Drip pricing, pre-ticked add-ons, virtual currencies, and fees revealed only at the final step of checkout.' },
  { icon: '🚫', name: 'Obstruction', desc: 'Cancellation flows designed to exhaust you — no cancel button, call-to-cancel, confirm-shaming, and hidden unsubscribe links.' },
  { icon: '👁', name: 'Misdirection', desc: 'CTA prominence tricks, disguised ads, trick questions, and fake progress bars that steer users toward unintended choices.' },
  { icon: '⭐', name: 'Social Proof', desc: "Fake reviews, manufactured popularity signals, and 'X people viewing this' claims that can't be verified." },
  { icon: '🔒', name: 'Privacy', desc: 'Pre-selected data sharing, dark cookie consent patterns, obscured privacy settings, and permission overreach.' },
  { icon: '🔄', name: 'Subscription Traps', desc: 'Trial-to-paid charges without clear warnings, buried subscription terms, and no self-serve cancellation path.' },
]

function WhatWeDetect() {
  return (
    <section className="py-28" style={{ background: '#05061b', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>Detection</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>
            Seven categories of manipulative<br />design. Detected automatically.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((c, i) => (
            <div key={c.name}
              className={`rounded-2xl p-6 transition-all duration-300 ${i === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={glass}
              onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, glassHover)}
              onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, glass)}>
              <div style={{ fontSize: '22px', marginBottom: '12px' }}>{c.icon}</div>
              <h3 style={{ color: 'white', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em', marginBottom: '8px' }}>{c.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '13px', marginTop: '24px' }}>
          26 individual patterns detected across 7 categories — with more on the roadmap.
        </p>
      </div>
    </section>
  )
}

// ─── Regulatory Context ───────────────────────────────────────────────────────
const REGS = [
  { name: 'Digital Services Act', region: 'EU', status: 'Active', provision: 'Explicitly prohibits dark patterns on platforms' },
  { name: 'FTC Section 5', region: 'US', status: 'Active enforcement', provision: 'Dark patterns as deceptive trade practices' },
  { name: 'CPRA / CPPA', region: 'California', status: 'Advisory issued', provision: 'Symmetrical choice required; $7,500/violation' },
  { name: 'CCPA Guidelines', region: 'India', status: 'Active', provision: '13 specified dark patterns; annual audits mandated' },
  { name: 'GDPR', region: 'EU', status: 'Active', provision: 'Consent obtained via dark patterns is invalid' },
]

function RegulatoryContext() {
  return (
    <section className="py-28" style={{ background: '#030711', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>Regulatory mapping</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>
            Findings mapped to the<br />regulations that matter.
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                {['Regulation','Region','Status','Key Provision'].map(h => (
                  <th key={h} className="text-left px-6 py-4" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REGS.map((r, i) => (
                <tr key={r.name} style={{ borderBottom: i < REGS.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                  <td className="px-6 py-4" style={{ color: 'white', fontWeight: 500, fontSize: '14px' }}>{r.name}</td>
                  <td className="px-6 py-4" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{r.region}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.25)', color: 'rgba(94,234,212,0.8)' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(94,234,212,0.8)' }} />
                      {r.status}
                    </span>
                  </td>
                  <td className="px-6 py-4" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{r.provision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: '$345M+', label: 'Largest dark pattern fine', sub: 'TikTok, EU Digital Services Act' },
    { value: '68', label: 'Known dark pattern types', sub: 'Across peer-reviewed taxonomies' },
    { value: '6+', label: 'Active jurisdictions', sub: 'Enforcing dark pattern regulation' },
  ]

  return (
    <section className="py-24" style={{ background: '#05061b', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-12" style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.14em' }}>
          Built on research, not hype.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map(s => (
            <div key={s.value} className="rounded-2xl p-8 text-center" style={glass}>
              <div style={{
                fontSize: '42px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '6px',
                background: 'linear-gradient(135deg, #2dd4bf, #38bdf8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>{s.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const PLANS = [
  { name: 'Free', price: '$0', period: '/mo', features: ['5 scans/month', '1 page per scan', '3 of 7 categories', 'Trust score report'], cta: 'Get started', href: SCANNER_URL, highlight: false, badge: null },
  { name: 'Pro', price: '$19', period: '/mo', features: ['Unlimited scans', '10 pages per scan', 'All 7 categories', 'Shareable report links'], cta: 'Get Pro', href: '/waitlist?plan=pro', highlight: true, badge: 'Most popular' },
  { name: 'Growth', price: '$149', period: '/mo', features: ['50 deep scans/month', '100 pages per scan', 'Regulatory mapping', 'Priority support'], cta: 'Join waitlist', href: '/waitlist?plan=growth', highlight: false, badge: null },
  { name: 'Scale', price: '$499', period: '/mo', features: ['Unlimited everything', 'API access', 'Compliance dashboard', 'SLA + dedicated support'], cta: 'Contact us', href: 'mailto:steve@thirdmirror.com.au', highlight: false, badge: null },
]

function Pricing() {
  return (
    <section id="pricing" className="py-28" style={{ background: '#030711', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>Pricing</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>Simple, transparent pricing.</h2>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '16px', marginTop: '12px' }}>No hidden fees. Cancel anytime. <Link href="/pricing" style={{ color: 'rgba(94,234,212,0.6)', textDecoration: 'none' }}>See full feature comparison →</Link></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANS.map(plan => (
            <div key={plan.name} className="rounded-2xl p-6 flex flex-col relative transition-all duration-300"
              style={plan.highlight
                ? { background: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.35)', boxShadow: '0 0 40px rgba(13,148,136,0.15)', backdropFilter: 'blur(10px)' }
                : glass}
              onMouseEnter={e => { if (!plan.highlight) Object.assign((e.currentTarget as HTMLElement).style, glassHover) }}
              onMouseLeave={e => { if (!plan.highlight) Object.assign((e.currentTarget as HTMLElement).style, glass) }}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                    style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', boxShadow: '0 0 12px rgba(13,148,136,0.4)' }}>
                    {plan.badge}
                  </span>
                </div>
              )}
              <div style={{ color: plan.highlight ? 'rgba(94,234,212,0.8)' : 'rgba(255,255,255,0.35)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>{plan.name}</div>
              <div style={{ marginBottom: '6px' }}>
                <span style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '-0.03em', color: 'white' }}>{plan.price}</span>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>{plan.period}</span>
              </div>
              <ul className="space-y-2 flex-1 mt-5 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke={plan.highlight ? 'rgba(45,212,191,0.8)' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={plan.href} className="block text-center rounded-lg py-2.5 text-sm font-semibold transition-all"
                style={plan.highlight
                  ? { background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', boxShadow: tealGlow, textDecoration: 'none' }
                  : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                {plan.cta}
              </a>
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
    <section className="relative py-32 overflow-hidden" style={{ background: '#05061b' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(13,148,136,0.13) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rounded-full" style={{ width: '500px', height: '500px', border: '1px solid rgba(255,255,255,0.04)' }} />
        <div className="absolute rounded-full" style={{ width: '720px', height: '720px', border: '1px solid rgba(255,255,255,0.025)' }} />
        <div className="absolute rounded-full" style={{ width: '960px', height: '960px', border: '1px solid rgba(255,255,255,0.015)' }} />
      </div>
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700, letterSpacing: '-0.035em', color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
          Don&apos;t let UX become<br />a liability.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '18px', lineHeight: 1.7, letterSpacing: '-0.01em', marginBottom: '36px' }}>
          Spot dark patterns before your regulators do. Start scanning in minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={SCANNER_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl font-semibold transition-all"
            style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', padding: '16px 32px', fontSize: '15px', letterSpacing: '-0.01em', boxShadow: tealGlow, textDecoration: 'none' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlowHover }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlow }}>
            Launch the scanner
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="/waitlist"
            className="flex items-center rounded-xl font-semibold transition-all"
            style={{ ...glass, color: 'rgba(255,255,255,0.7)', padding: '16px 32px', fontSize: '15px', letterSpacing: '-0.01em', textDecoration: 'none' }}
            onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, glassHover)}
            onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, glass)}>
            Request early access
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-10" style={{ background: '#030711', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #0891b2)' }}>
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.6" fill="none" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: '13px' }}>ClearSign</span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>by Third Mirror PTY LTD</span>
        </div>
        <div className="flex gap-6">
          {[['Pricing','/pricing'],['Waitlist','/waitlist'],['For consumers','/consumer'],['Contact','mailto:steve@thirdmirror.com.au']].map(([l,h]) => (
            <a key={l} href={h} style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DesignTestV2() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <WhoItsFor />
        <WhatWeDetect />
        <RegulatoryContext />
        <Stats />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
