'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Shield, Layout, Eye, Clock, DollarSign, RotateCcw,
  BarChart2, Bell, CheckSquare, ChevronDown, ArrowRight,
  Twitter, Linkedin, ExternalLink
} from 'lucide-react'

// ─── Product URLs ────────────────────────────────────────────────────────────
const PRODUCT_B2B = 'https://clearsign-ashy.vercel.app/'
const PRODUCT_CONSUMER = 'https://clearsign-ashy.vercel.app/consumer'

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0F172A]/95 backdrop-blur shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-teal-400" />
          <span className="text-white font-semibold text-lg tracking-tight">ClearSign</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">How It Works</a>
          <a href="#who-its-for" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Who It&apos;s For</a>
          <Link href="/pricing" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Pricing</Link>
        </div>
        <Link
          href="/waitlist"
          className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Request Early Access
        </Link>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative bg-[#0F172A] min-h-screen flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #475569 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Teal glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-900/40 border border-teal-700/50 text-teal-300 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
          Private beta — live now
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Find dark patterns<br />
          <span className="text-teal-400">before regulators do.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-14">
          ClearSign scans any website for manipulative design and maps findings to the regulations that matter.
          Two tools — one for teams, one for everyone.
        </p>

        {/* Primary CTAs — the two live products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {/* B2B card */}
          <a
            href={PRODUCT_B2B}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-start text-left gap-4 bg-teal-600 hover:bg-teal-500 px-7 py-6 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-teal-900/40 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-teal-100/70 text-xs font-semibold uppercase tracking-widest">For product teams</span>
              <ExternalLink className="w-4 h-4 text-teal-100/50 group-hover:text-teal-100 transition-colors" />
            </div>
            <div>
              <div className="text-white text-xl font-bold mb-1">B2B Scanner</div>
              <div className="text-teal-100/75 text-sm leading-snug">Scan your product, get a compliance report, and a clear path to fix issues.</div>
            </div>
            <div className="flex items-center gap-1.5 text-white font-semibold text-sm mt-auto">
              Launch scanner <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>

          {/* Consumer card */}
          <a
            href={PRODUCT_CONSUMER}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-start text-left gap-4 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 px-7 py-6 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-slate-900/60 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">For everyone</span>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
            </div>
            <div>
              <div className="text-white text-xl font-bold mb-1">Consumer Scanner</div>
              <div className="text-slate-400 text-sm leading-snug">Check if a website you use is playing fair with your data and attention.</div>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 group-hover:text-white font-semibold text-sm mt-auto transition-colors">
              Launch scanner <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>
        </div>

        {/* Secondary action */}
        <div className="mb-16">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-teal-400 text-sm font-medium transition-colors"
          >
            Want early access for your organisation?
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-600 text-xs">
          <span className="text-slate-500 mr-1">Covers:</span>
          {['DSA', 'FTC Act', 'CPRA', 'India CCPA', 'GDPR'].map((reg, i, arr) => (
            <span key={reg} className="flex items-center gap-3">
              <span className="text-slate-500">{reg}</span>
              {i < arr.length - 1 && <span className="text-slate-700">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Problem ─────────────────────────────────────────────────────────────────
function Problem() {
  const cards = [
    {
      title: 'The Regulatory Wave',
      body: 'The EU Digital Services Act, FTC Section 5, and California\'s CPRA all target dark patterns — with fines reaching hundreds of millions. India now mandates annual audits.',
    },
    {
      title: 'Manual Audits Don\'t Scale',
      body: 'Most teams rely on ad-hoc reviews, designer intuition, or waiting for complaints. That\'s reactive, inconsistent, and indefensible when a regulator comes knocking.',
    },
    {
      title: 'No Tool Exists For This',
      body: 'Accessibility scanners catch WCAG issues. Cookie consent tools handle banners. But nobody systematically detects the broader category of manipulative UX — until now.',
    },
  ]

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dark patterns are now a regulatory risk.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Regulators worldwide are enforcing against manipulative design. Most teams don&apos;t have a
            systematic way to find and fix these issues before they become lawsuits.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white rounded-xl p-7 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{card.body}</p>
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
      title: 'Scan',
      body: 'Point ClearSign at any URL. Our engine crawls your pages, analyses the DOM, inspects copy, and checks interaction patterns against a library of known dark pattern categories.',
      side: 'left',
    },
    {
      num: '02',
      title: 'Score',
      body: 'Every finding is classified by type (confirm-shaming, hidden costs, forced continuity, and more), severity level, and the specific regulations it may violate — DSA, FTC, CPRA, GDPR.',
      side: 'right',
    },
    {
      num: '03',
      title: 'Fix',
      body: 'Get actionable remediation guidance for each issue. Prioritise by regulatory risk. Export compliance-ready reports your legal team can actually use.',
      side: 'left',
    },
  ]

  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-500 text-lg">Three steps from URL to defensible compliance report.</p>
        </div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
            >
              <div className="flex-1">
                <div className="text-5xl font-black text-slate-100 mb-2">{step.num}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base">{step.body}</p>
              </div>
              <div className="flex-1 bg-slate-50 rounded-2xl h-52 flex items-center justify-center border border-slate-100">
                <span className="text-slate-300 text-sm">Product screenshot coming soon</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Request Early Access <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Who It's For ─────────────────────────────────────────────────────────────
function WhoItsFor() {
  const audiences = [
    {
      icon: <Shield className="w-7 h-7 text-teal-500" />,
      label: 'Compliance & Legal Teams',
      headline: 'Audit with confidence.',
      bullets: [
        'Systematic, repeatable dark pattern audits — not ad-hoc reviews',
        'Regulatory mapping to DSA, FTC, CPRA, GDPR, and India CCPA',
        'Exportable compliance reports for regulators and board',
        'Audit trail that proves you checked — before anyone asked',
      ],
      param: 'compliance',
    },
    {
      icon: <Layout className="w-7 h-7 text-teal-500" />,
      label: 'Product & Design Teams',
      headline: 'Ship ethical products, faster.',
      bullets: [
        'Catch manipulative patterns before they reach production',
        'Severity scoring helps you prioritise what matters',
        'Clear remediation guidance — not just "this is bad"',
        'Build user trust as a competitive advantage',
      ],
      param: 'product',
    },
    {
      icon: <Eye className="w-7 h-7 text-teal-500" />,
      label: 'Consumer Advocacy & Regulators',
      headline: 'Evidence-backed enforcement.',
      bullets: [
        'Scan any public-facing website or app for dark patterns',
        'Documented findings mapped to specific regulatory violations',
        'Exportable evidence packages for enforcement proceedings',
        'Monitor repeat offenders over time',
      ],
      param: 'consumer',
    },
  ]

  return (
    <section id="who-its-for" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who It&apos;s For</h2>
          <p className="text-slate-500 text-lg">Built for three teams with different needs, one shared goal.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.param} className="bg-white rounded-xl p-7 shadow-sm border border-slate-100 flex flex-col">
              <div className="mb-4">{a.icon}</div>
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">{a.label}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{a.headline}</h3>
              <ul className="space-y-2.5 flex-1">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-500">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={`/waitlist?audience=${a.param}`}
                className="mt-6 text-center border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Join the Waitlist
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── What We Detect ──────────────────────────────────────────────────────────
function WhatWeDetect() {
  const categories = [
    { icon: <Bell className="w-5 h-5" />, name: 'Confirm-shaming', desc: 'Guilt-tripping language on decline buttons ("No thanks, I don\'t want to save money")' },
    { icon: <DollarSign className="w-5 h-5" />, name: 'Hidden costs', desc: 'Fees, charges, or conditions revealed only at checkout or deep in a flow' },
    { icon: <RotateCcw className="w-5 h-5" />, name: 'Forced continuity', desc: 'Auto-renewal traps and subscriptions that are easy to start, hard to stop' },
    { icon: <BarChart2 className="w-5 h-5" />, name: 'Asymmetric choice', desc: 'Visual tricks that make one option look far more prominent than the other' },
    { icon: <Clock className="w-5 h-5" />, name: 'Nagging', desc: 'Repeated interruptions pushing users toward a preferred action' },
    { icon: <CheckSquare className="w-5 h-5" />, name: 'Sneaking', desc: 'Pre-checked boxes, items added to cart, or consent assumed without clear action' },
  ]

  return (
    <section className="bg-[#1E293B] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Six categories of manipulative design.<br />Detected automatically.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((c) => (
            <div key={c.name} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-teal-400 mb-3">{c.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{c.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-8">
          More detection categories on the roadmap — including trick questions, bait-and-switch, disguised ads, and visual misdirection.
        </p>
      </div>
    </section>
  )
}

// ─── Regulatory Context ───────────────────────────────────────────────────────
function RegulatoryContext() {
  const regs = [
    { name: 'Digital Services Act', region: 'EU', status: 'Active', provision: 'Explicitly prohibits dark patterns on platforms' },
    { name: 'FTC Section 5', region: 'US', status: 'Active enforcement', provision: 'Dark patterns as deceptive trade practices' },
    { name: 'CPRA / CPPA', region: 'California', status: 'Advisory issued', provision: 'Symmetrical choice required; $7,500/violation' },
    { name: 'CCPA Guidelines', region: 'India', status: 'Active', provision: '13 specified dark patterns; annual audits mandated' },
    { name: 'GDPR', region: 'EU', status: 'Active', provision: 'Consent obtained via dark patterns is invalid' },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Findings mapped to the regulations that matter.
          </h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="text-left px-6 py-4 font-semibold">Regulation</th>
                <th className="text-left px-6 py-4 font-semibold">Region</th>
                <th className="text-left px-6 py-4 font-semibold">Status</th>
                <th className="text-left px-6 py-4 font-semibold">Key Provision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {regs.map((r, i) => (
                <tr key={r.name} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="px-6 py-4 font-semibold text-slate-900">{r.name}</td>
                  <td className="px-6 py-4 text-slate-500">{r.region}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {r.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{r.provision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ─── Social Proof ─────────────────────────────────────────────────────────────
function SocialProof() {
  const stats = [
    { value: '$345M+', label: 'Largest dark pattern enforcement fine (TikTok, EU)' },
    { value: '68', label: 'Known dark pattern types in academic taxonomy' },
    { value: '6+', label: 'Jurisdictions with active dark pattern regulation' },
  ]

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Built on research, not hype.</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            ClearSign&apos;s detection engine draws from peer-reviewed dark pattern taxonomies, regulatory
            guidance documents, and real-world enforcement cases. We detect what regulators actually look for.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.value} className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-100">
              <div className="text-4xl font-black text-teal-600 mb-2">{s.value}</div>
              <div className="text-slate-500 text-sm leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing Preview ──────────────────────────────────────────────────────────
function PricingPreview() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      highlight: false,
      features: ['5 scans per month', '1 URL per scan', 'Basic detection (3 pattern types)', 'PDF report'],
      cta: 'Get Started Free',
      param: 'free',
    },
    {
      name: 'Growth',
      price: '$149',
      period: '/month',
      highlight: true,
      badge: 'Most Popular',
      features: ['50 scans per month', 'Full site crawl (up to 100 pages)', 'All 6 detection categories', 'Regulatory mapping (DSA, FTC, CPRA, GDPR)', 'Priority email support'],
      cta: 'Request Early Access',
      param: 'growth',
    },
    {
      name: 'Scale',
      price: '$499',
      period: '/month',
      highlight: false,
      features: ['Unlimited scans', 'Full site crawl (unlimited pages)', 'All categories + custom rules', 'API access', 'Dedicated compliance dashboard', 'Monthly compliance report'],
      cta: 'Contact Us',
      param: 'scale',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing.</h2>
          <p className="text-slate-500 text-lg">
            <Link href="/pricing" className="text-teal-600 hover:underline">See full feature comparison →</Link>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-7 flex flex-col border ${
                plan.highlight
                  ? 'bg-[#0F172A] border-teal-600 shadow-xl shadow-teal-900/20 relative'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{plan.badge}</span>
                </div>
              )}
              <div className={`text-sm font-semibold mb-3 ${plan.highlight ? 'text-teal-400' : 'text-slate-500'}`}>{plan.name}</div>
              <div className={`text-4xl font-black mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                {plan.price}
                <span className={`text-base font-normal ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>{plan.period}</span>
              </div>
              <ul className="mt-5 space-y-2.5 flex-1 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                    <span className={`mt-0.5 flex-shrink-0 text-teal-400`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/waitlist?plan=${plan.param}`}
                className={`block text-center font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm ${
                  plan.highlight
                    ? 'bg-teal-600 hover:bg-teal-500 text-white'
                    : 'border border-slate-300 hover:border-teal-600 hover:text-teal-600 text-slate-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-8">
          Need enterprise pricing or custom deployment?{' '}
          <a href="mailto:steve@thirdmirror.com.au" className="text-teal-600 hover:underline">Contact us</a>
        </p>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How does ClearSign detect dark patterns?',
    a: "ClearSign analyses your website's DOM structure, visual layout, copy, and interaction patterns against a library of known dark pattern categories. Our detection engine combines rule-based heuristics with NLP analysis to identify manipulative design at scale.",
  },
  {
    q: 'Which regulations does ClearSign cover?',
    a: "Currently: EU Digital Services Act, FTC Section 5 (US), CPRA/CPPA (California), GDPR, and India's CCPA Guidelines. We're adding support for the UK Online Safety Act and EU Digital Fairness Act as they develop.",
  },
  {
    q: 'How is this different from an accessibility scanner?',
    a: "Accessibility tools (like Axe or Stark) check for WCAG compliance — colour contrast, alt text, keyboard navigation. ClearSign checks for manipulative design — confirm-shaming, hidden costs, forced continuity, and patterns that exploit user psychology. They're complementary, not competing.",
  },
  {
    q: 'Can ClearSign guarantee regulatory compliance?',
    a: "No tool can guarantee compliance — that's ultimately a legal determination. ClearSign provides systematic, documented evidence that your team has audited for dark patterns. Think of it as a screening tool that strengthens your compliance posture, not a legal opinion.",
  },
  {
    q: 'Is my data secure?',
    a: "ClearSign only analyses publicly accessible pages. We don't access user accounts, store personal data, or require authentication to your systems. Scan results are encrypted at rest and in transit.",
  },
  {
    q: 'When will ClearSign be available?',
    a: "We're currently in private beta. Join the waitlist to get early access and help shape the product.",
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-slate-900 text-sm">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="bg-[#0F172A] py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to find what you&apos;re missing?
        </h2>
        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
          Join the waitlist for early access to ClearSign. Be the first to audit your product for
          dark patterns — before regulators do it for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Request Early Access <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={PRODUCT_B2B}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Try the scanner <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-teal-400" />
          <span className="text-white font-semibold">ClearSign</span>
          <span className="text-slate-600 ml-2 text-sm">by Third Mirror PTY LTD · Built in Australia 🇦🇺</span>
        </div>
        <div className="flex items-center gap-6 text-slate-500 text-sm">
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/waitlist" className="hover:text-white transition-colors">Waitlist</Link>
          <a href="mailto:steve@thirdmirror.com.au" className="hover:text-white transition-colors">Contact</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function HomePage() {
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
        <SocialProof />
        <PricingPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
