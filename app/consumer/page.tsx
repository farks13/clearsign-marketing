'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const SCANNER_URL = 'https://clearsign-ashy.vercel.app/consumer'
const B2B_URL = 'https://clearsign-marketing.vercel.app/'

// ─── Shared design tokens ────────────────────────────────────────────────────
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
    ['What We Check', '#what-we-check'],
    ['Pricing', '#pricing'],
  ]

  return (
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
            <a href={B2B_URL} style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
              For businesses →
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a href={SCANNER_URL} className="hidden sm:block"
              style={{
                background: 'linear-gradient(135deg, #0d9488, #0891b2)',
                color: 'white', fontSize: '13px', fontWeight: 600,
                padding: '8px 16px', borderRadius: '999px', textDecoration: 'none',
                whiteSpace: 'nowrap', boxShadow: '0 0 18px rgba(13,148,136,0.35)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(13,148,136,0.55)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px rgba(13,148,136,0.35)' }}>
              Check a website free
            </a>

            {/* Hamburger */}
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
          <div className="lg:hidden border-t pb-4" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <div className="flex flex-col pt-3 gap-1">
              {navLinks.map(([l, h]) => (
                <a key={l} href={h} onClick={() => setMobileOpen(false)}
                  style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', padding: '10px 4px', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                  {l}
                </a>
              ))}
              <a href={B2B_URL} onClick={() => setMobileOpen(false)}
                style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', padding: '10px 4px', display: 'block' }}>
                For businesses →
              </a>
              <a href={SCANNER_URL}
                style={{ display: 'block', marginTop: '8px', background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', fontSize: '14px', fontWeight: 600, padding: '12px 16px', borderRadius: '10px', textDecoration: 'none', textAlign: 'center' }}>
                Check a website free
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '100vh', background: '#05061b' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(13,148,136,0.16) 0%, transparent 65%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 15% 85%, rgba(8,145,178,0.07) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      <div className="relative max-w-4xl mx-auto px-6 pt-36 pb-28">
        <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-xs font-semibold"
          style={{ background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.22)', color: 'rgba(94,234,212,0.85)', letterSpacing: '0.04em' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Free website scanner
        </div>

        <h1 style={{ fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'white', marginBottom: '24px' }}>
          Signed up. Got charged.<br />
          <span style={{
            background: 'linear-gradient(125deg, #2dd4bf 0%, #38bdf8 50%, #818cf8 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Can&apos;t cancel?</span>
        </h1>

        <p style={{ maxWidth: '500px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.65', color: 'rgba(255,255,255,0.48)', letterSpacing: '-0.01em' }}>
          Before you hand over your details — check any website for the manipulation tactics designed to trap you. Free, instant, no account needed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
          <a href={SCANNER_URL}
            className="flex items-center gap-2 rounded-xl font-semibold transition-all"
            style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', padding: '15px 30px', fontSize: '15px', letterSpacing: '-0.01em', boxShadow: tealGlow, textDecoration: 'none' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlowHover }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlow }}>
            Scan a website now
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '12px', marginBottom: '56px' }}>
          No account needed. No email required.{' '}
          <a href={B2B_URL} style={{ color: 'rgba(94,234,212,0.55)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(94,234,212,0.85)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(94,234,212,0.55)')}>Using this for your business? →</a>
        </p>
      </div>
    </section>
  )
}

// ─── What We Check ────────────────────────────────────────────────────────────
const PATTERNS = [
  { icon: '⏱', name: 'Fake urgency', example: '"Only 2 left!" or "Offer expires in 10:00"', body: "That countdown timer probably resets the moment it hits zero. We check whether urgency claims change between page loads." },
  { icon: '💸', name: 'Hidden charges', example: 'Fees added at the last step of checkout', body: "Drip pricing and pre-ticked add-ons inflate the final price after you're already committed. We flag anything that changes the total unexpectedly." },
  { icon: '🔄', name: 'Subscription traps', example: 'Free trial → auto-charge without a clear warning', body: "Trial terms buried in fine print, no reminder before you're charged, and cancellation that requires a phone call. We surface all of it." },
  { icon: '🔒', name: 'Data grabs', example: 'Pre-ticked marketing consent, vague cookie banners', body: "Consent that's on by default, cookie banners with no 'Reject All', and privacy settings buried five menus deep." },
  { icon: '🚫', name: 'Hard to cancel', example: 'No cancel button — call us to cancel', body: "Some sites make signing up one click but cancelling require a phone call, a 'save' attempt, and three confirmation screens." },
  { icon: '👁', name: 'Visual tricks', example: '"No thanks, I hate saving money"', body: 'Confirm-shaming, misleading button designs, and disguised ads that look like genuine results or recommendations.' },
]

function WhatWeCheck() {
  return (
    <section id="what-we-check" className="py-28" style={{ background: '#030711', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>What we check for</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>
            26 manipulation tactics.<br />Detected automatically.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '17px', marginTop: '14px', maxWidth: '460px', margin: '14px auto 0', lineHeight: 1.6 }}>
            Here&apos;s what we look for — and what it looks like in the wild.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PATTERNS.map(p => (
            <div key={p.name} className="rounded-2xl p-6 transition-all duration-300" style={glass}
              onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, glassHover)}
              onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, glass)}>
              <div style={{ fontSize: '22px', marginBottom: '12px' }}>{p.icon}</div>
              <h3 style={{ color: 'white', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em', marginBottom: '6px' }}>{p.name}</h3>
              <p style={{ color: 'rgba(94,234,212,0.6)', fontSize: '12px', fontStyle: 'italic', marginBottom: '10px', background: 'rgba(13,148,136,0.08)', padding: '4px 8px', borderRadius: '6px', display: 'inline-block' }}>{p.example}</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: 1.7 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const STEPS = [
  { num: '01', label: 'Paste', title: 'Paste any URL.', body: "Enter any website address — a shop you're about to buy from, a streaming service you're considering, an app asking for your card details.", icon: '🔗' },
  { num: '02', label: 'Scan', title: 'We check it in 30 seconds.', body: 'ClearSign crawls the site and checks it against 26 known manipulation patterns across 7 categories. Fast, automated, no login required.', icon: '🔍' },
  { num: '03', label: 'Report', title: 'You get a plain-English verdict.', body: "A trust score from 0–100, a list of exactly what we found, how serious each issue is, and what to watch out for before you commit.", icon: '📊' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28" style={{ background: '#05061b', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>How it works</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>
            Three steps. No account.<br />No catch.
          </h2>
        </div>

        <div className="space-y-5">
          {STEPS.map((s, i) => (
            <div key={s.num} className={`flex flex-col gap-5 items-stretch ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Text */}
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
                minHeight: '220px',
              }}>
                <div className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex gap-1.5">
                    {[0,1,2].map(d => <div key={d} className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />)}
                  </div>
                  <div className="mx-auto rounded px-3 py-0.5 text-xs" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.2)' }}>
                    clearsign — {s.label.toLowerCase()} view
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.2)' }}>
                      <span style={{ fontSize: '22px' }}>{s.icon}</span>
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
          <a href={SCANNER_URL}
            className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all"
            style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', padding: '14px 28px', fontSize: '14px', letterSpacing: '-0.01em', boxShadow: tealGlow, textDecoration: 'none' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlowHover }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlow }}>
            Try it now — it&apos;s free
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: 'Free', price: '$0', period: '/month', highlight: false, badge: null,
    desc: 'For anyone who wants to check before they commit.',
    features: ['5 scans per month', '1 page per scan', '3 of 7 detection categories', 'Trust score + plain-English report'],
    cta: 'Start scanning free', href: SCANNER_URL,
  },
  {
    name: 'Pro', price: '$19', period: '/month', highlight: true, badge: 'Most popular',
    desc: 'For anyone who shops or subscribes online regularly.',
    features: ['Unlimited scans', '10 pages per scan', 'All 7 detection categories', 'Shareable report links'],
    cta: 'Get Pro', href: '/waitlist?plan=pro',
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-28" style={{ background: '#030711', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>Pricing</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>Simple pricing.</h2>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '16px', marginTop: '12px' }}>Free to start. Upgrade for more.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {PLANS.map(plan => (
            <div key={plan.name} className="rounded-2xl p-7 flex flex-col relative transition-all duration-300"
              style={plan.highlight
                ? { background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.32)', boxShadow: '0 0 40px rgba(13,148,136,0.12)', backdropFilter: 'blur(10px)' }
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
              <div style={{ marginBottom: '4px' }}>
                <span style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-0.03em', color: 'white' }}>{plan.price}</span>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>{plan.period}</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '13px', marginBottom: '20px', marginTop: '8px', lineHeight: 1.5 }}>{plan.desc}</p>
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke={plan.highlight ? 'rgba(45,212,191,0.8)' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={plan.href} className="block text-center rounded-xl py-3 text-sm font-semibold transition-all"
                style={plan.highlight
                  ? { background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', boxShadow: tealGlow, textDecoration: 'none' }
                  : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '13px', marginTop: '20px' }}>
          Need team or compliance features?{' '}
          <Link href="/pricing" style={{ color: 'rgba(94,234,212,0.55)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(94,234,212,0.85)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(94,234,212,0.55)')}>
            See all plans →
          </Link>
        </p>
      </div>
    </section>
  )
}

// ─── Your Rights ─────────────────────────────────────────────────────────────
const YOUR_RIGHTS = [
  {
    flag: '🇦🇺',
    name: 'Australian Consumer Law',
    desc: 'Prohibits misleading and deceptive conduct. The ACCC is actively pursuing dark pattern cases — including against Microsoft and JustAnswer in 2025.',
  },
  {
    flag: '🇦🇺',
    name: 'Unfair Trading Practices Bill',
    desc: 'Coming July 2027 — will explicitly ban dark patterns, subscription traps, and hidden fees in Australia.',
    pending: true,
  },
  {
    flag: '🇪🇺',
    name: 'EU Digital Services Act',
    desc: 'Bans dark patterns across all EU-facing digital services. Enforceable now.',
  },
]

function YourRights() {
  return (
    <section className="py-28" style={{ background: '#030711', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>Your rights</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>
            These tactics are<br />increasingly illegal.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '17px', marginTop: '14px', maxWidth: '460px', margin: '14px auto 0', lineHeight: 1.6 }}>
            Regulators are catching up. Here&apos;s what the law says where it matters most.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {YOUR_RIGHTS.map(r => (
            <div key={r.name} className="rounded-2xl p-6 transition-all duration-300" style={glass}
              onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, glassHover)}
              onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, glass)}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{r.flag}</div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 style={{ color: 'white', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em' }}>{r.name}</h3>
                {r.pending && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', color: 'rgba(252,211,77,0.9)' }}>
                    Incoming
                  </span>
                )}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '13px', lineHeight: 1.7 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Trust Score Explainer ────────────────────────────────────────────────────
const SCORES = [
  { range: '80–100', label: 'Looks good', emoji: '🟢', color: 'rgba(45,212,191,0.9)', bg: 'rgba(13,148,136,0.1)', border: 'rgba(13,148,136,0.25)', desc: "We didn't find anything suspicious. Still worth reading the fine print before you commit." },
  { range: '60–79', label: 'Be careful', emoji: '🟡', color: 'rgba(234,179,8,0.9)', bg: 'rgba(234,179,8,0.07)', border: 'rgba(234,179,8,0.2)', desc: 'Some issues detected. Check the specific findings before signing up.' },
  { range: '40–59', label: "We'd think twice", emoji: '🟠', color: 'rgba(249,115,22,0.9)', bg: 'rgba(249,115,22,0.07)', border: 'rgba(249,115,22,0.2)', desc: 'Multiple manipulation tactics detected. Be cautious — especially around payment or subscriptions.' },
  { range: '0–39', label: 'Avoid', emoji: '🔴', color: 'rgba(239,68,68,0.9)', bg: 'rgba(239,68,68,0.07)', border: 'rgba(239,68,68,0.2)', desc: "Serious issues found. We'd strongly recommend shopping elsewhere." },
]

function ScoreExplainer() {
  return (
    <section className="py-28" style={{ background: '#05061b', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>The verdict</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>
            Your trust score,<br />explained.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '17px', marginTop: '14px', maxWidth: '420px', margin: '14px auto 0', lineHeight: 1.6 }}>
            Every scan gives you a score from 0–100. Here&apos;s what each range means.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {SCORES.map(s => (
            <div key={s.range} className="rounded-2xl p-6 transition-all duration-300"
              style={{ background: s.bg, border: `1px solid ${s.border}` }}>
              <div className="flex items-center gap-3 mb-3">
                <span style={{ fontSize: '24px' }}>{s.emoji}</span>
                <div>
                  <div style={{ color: s.color, fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.range}</div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{s.label}</div>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Is it really free?', a: 'Yes. The free plan gives you 5 scans per month with no account, no email, no credit card. The Pro plan ($19/month) gives you unlimited scans and deeper coverage across all 7 detection categories.' },
  { q: 'How does the scan work?', a: 'ClearSign fetches and analyses the HTML and text of a web page, checking it against 26 known manipulation patterns across 7 categories. Most scans complete in under 30 seconds.' },
  { q: 'Can it catch everything?', a: "ClearSign detects patterns visible in the page code. It can't always catch issues that only appear after logging in or during checkout — but it covers the majority of common tactics consumers encounter." },
  { q: "What if the site scores well?", a: "A high score means we didn't find anything on the pages we scanned. It's a strong signal, but not a guarantee. Always read cancellation terms before entering payment details." },
  { q: 'Can I share my report?', a: 'Yes. Every report has a unique link — useful to share with friends or family before they sign up to a service.' },
  { q: "I run a business — can I use ClearSign to audit my own product?", a: "Yes. ClearSign has a professional version for product teams, compliance officers, and legal teams — with regulatory mapping (ACL, Privacy Act, GDPR, DSA, FTC), PDF reports, API access, and more." },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="py-28" style={{ background: '#030711', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(94,234,212,0.55)', letterSpacing: '0.14em' }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.15 }}>Common questions.</h2>
        </div>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden transition-all"
              style={{ ...glass, border: open === i ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.07)' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: 600, letterSpacing: '-0.01em' }}>{faq.q}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                  style={{ flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'rgba(255,255,255,0.3)' }}>
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.75 }}>{faq.a}</div>
              )}
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
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(13,148,136,0.12) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rounded-full" style={{ width: '500px', height: '500px', border: '1px solid rgba(255,255,255,0.04)' }} />
        <div className="absolute rounded-full" style={{ width: '720px', height: '720px', border: '1px solid rgba(255,255,255,0.025)' }} />
        <div className="absolute rounded-full" style={{ width: '960px', height: '960px', border: '1px solid rgba(255,255,255,0.015)' }} />
      </div>
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700, letterSpacing: '-0.035em', color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
          Check before<br />you commit.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '18px', lineHeight: 1.7, letterSpacing: '-0.01em', marginBottom: '36px' }}>
          Paste a URL. Get a plain-English report in 30 seconds. It&apos;s free — and it might save you from a subscription nightmare.
        </p>
        <a href={SCANNER_URL}
          className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all"
          style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', padding: '16px 36px', fontSize: '16px', letterSpacing: '-0.01em', boxShadow: tealGlow, textDecoration: 'none' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlowHover }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlow }}>
          Scan a website now
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
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
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>by Third Mirror PTY LTD · Built in Australia 🇦🇺</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[['How It Works','#how-it-works'],['Pricing','#pricing'],['FAQ','#faq'],['For businesses',B2B_URL],['Contact','mailto:steve@thirdmirror.com.au']].map(([l,h]) => (
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
export default function ConsumerPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeCheck />
        <HowItWorks />
        <Pricing />
        <YourRights />
        <ScoreExplainer />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
