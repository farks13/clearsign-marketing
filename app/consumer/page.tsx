'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, ChevronDown, ArrowRight } from 'lucide-react'

// ─── Product URLs ─────────────────────────────────────────────────────────────
const CONSUMER_SCANNER = 'https://clearsign-ashy.vercel.app/consumer'
const B2B_PAGE = 'https://clearsign-marketing.vercel.app/'

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="bg-[#0F172A] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-teal-400" />
          <span className="text-white font-semibold text-lg tracking-tight">ClearSign</span>
        </Link>
        <div className="flex items-center gap-6">
          <a href={B2B_PAGE} className="hidden md:block text-slate-400 hover:text-white text-sm transition-colors">
            For businesses →
          </a>
          <a
            href={CONSUMER_SCANNER}
            className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Check a website free
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-[#0F172A] pt-16 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-900/40 border border-teal-700/40 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-300 text-xs font-semibold tracking-wide uppercase">Free website scanner</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
          Signed up. Got charged.<br />
          <span className="text-teal-400">Can&apos;t cancel?</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Before you hand over your details — check any website for the manipulation tactics designed to trap you. Free, instant, no account needed.
        </p>
        <a
          href={CONSUMER_SCANNER}
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-teal-900/30"
        >
          Scan a website now <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-slate-500 text-sm mt-4">No account needed. No email required.</p>
      </div>
    </section>
  )
}

// ─── What are dark patterns ───────────────────────────────────────────────────
const DARK_PATTERNS = [
  {
    emoji: '⏱',
    name: 'Fake urgency',
    example: '"Only 2 left!" or "Offer expires in 10:00"',
    detail: "That countdown timer probably resets the moment it hits zero. We check whether urgency claims change between page loads.",
  },
  {
    emoji: '💸',
    name: 'Hidden charges',
    example: 'Fees added at the last step of checkout',
    detail: "Drip pricing and pre-ticked add-ons inflate the final price after you\'re already committed. We flag anything that changes the total unexpectedly.",
  },
  {
    emoji: '🔄',
    name: 'Subscription traps',
    example: 'Free trial → auto-charge without a clear warning',
    detail: "Trial terms buried in fine print, no reminder before you\'re charged, and cancellation that requires a phone call. We surface all of it.",
  },
  {
    emoji: '🔒',
    name: 'Data grabs',
    example: 'Pre-ticked marketing consent, vague cookie banners',
    detail: "Consent that\'s on by default, cookie banners with no \'Reject All\', and privacy settings buried five menus deep.",
  },
  {
    emoji: '🚫',
    name: 'Hard to cancel',
    example: 'No cancel button — call us to cancel',
    detail: 'Some sites make signing up one click but cancelling require a phone call, a \'save\' attempt, and three confirmation screens.',
  },
  {
    emoji: '👁',
    name: 'Visual tricks',
    example: '"No thanks, I hate saving money"',
    detail: 'Confirm-shaming, misleading button designs, and disguised ads that look like genuine results or recommendations.',
  },
]

function DarkPatterns() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What we check for
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We scan for 26 manipulation tactics across 7 categories. Here&apos;s what that looks like in the wild.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DARK_PATTERNS.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{p.name}</h3>
              <p className="text-xs text-teal-700 font-medium italic mb-3 bg-teal-50 rounded-lg px-2 py-1">{p.example}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How it works ─────────────────────────────────────────────────────────────
const STEPS = [
  { step: '1', title: 'Paste a URL', body: "Enter any website address — a shop you\'re about to buy from, a streaming service, an app you\'re considering." },
  { step: '2', title: 'We scan it', body: 'ClearSign crawls the site and checks it against 26 known manipulation patterns. Takes about 30 seconds.' },
  { step: '3', title: 'You get the truth', body: 'A plain-English report tells you what we found, how serious it is, and what to watch out for.' },
]

function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
          <p className="text-slate-500 text-lg">Three steps. No account. No catch.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-teal-600 text-white text-xl font-black flex items-center justify-center mx-auto mb-5">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={CONSUMER_SCANNER}
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors"
          >
            Try it now — it&apos;s free <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const CONSUMER_PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    highlight: false,
    desc: 'For anyone who wants to check before they commit.',
    features: [
      '5 scans per month',
      '1 page per scan',
      '3 of 7 detection categories',
      'Trust score + plain-English report',
    ],
    cta: 'Start scanning free',
    href: CONSUMER_SCANNER,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    highlight: true,
    badge: 'Most Popular',
    desc: 'For anyone who shops or subscribes online regularly.',
    features: [
      'Unlimited scans',
      '10 pages per scan',
      'All 7 detection categories',
      'Shareable report links',
      'PDF export',
    ],
    cta: 'Get Pro',
    href: '/waitlist?plan=pro',
  },
]

function Pricing() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple pricing</h2>
          <p className="text-slate-500 text-lg">Free to start. Upgrade if you want more scans and deeper coverage.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {CONSUMER_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col border relative ${
                plan.highlight
                  ? 'bg-[#0F172A] border-teal-600 shadow-xl shadow-teal-900/20'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">{plan.badge}</span>
                </div>
              )}
              <div className={`text-sm font-semibold mb-2 ${plan.highlight ? 'text-teal-400' : 'text-slate-500'}`}>{plan.name}</div>
              <div className={`text-4xl font-black mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                {plan.price}
                <span className="text-base font-normal text-slate-400">{plan.period}</span>
              </div>
              <p className={`text-sm mt-2 mb-5 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                    <span className="text-teal-400 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`block text-center font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm ${
                  plan.highlight
                    ? 'bg-teal-600 hover:bg-teal-500 text-white'
                    : 'border border-slate-300 hover:border-teal-600 hover:text-teal-600 text-slate-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-8">
          Need team or compliance features?{' '}
          <Link href="/pricing" className="text-teal-600 hover:underline">See all plans →</Link>
        </p>
      </div>
    </section>
  )
}

// ─── Score explainer ──────────────────────────────────────────────────────────
const SCORES = [
  { range: '80–100', label: 'Looks good', color: '#0D7377', bg: '#E8F5F5', emoji: '🟢', desc: "We didn't find anything suspicious. Still worth reading the fine print before you commit." },
  { range: '60–79', label: 'Be careful', color: '#92710E', bg: '#FDF8EE', emoji: '🟡', desc: 'Some issues were found but nothing alarming. Check the specific findings before signing up.' },
  { range: '40–59', label: "We'd think twice", color: '#9A4F1E', bg: '#FDF4EE', emoji: '🟠', desc: 'Multiple manipulation tactics detected. Proceed with caution — especially around payment or subscriptions.' },
  { range: '0–39', label: 'Avoid', color: '#8C1F12', bg: '#FDF0EE', emoji: '🔴', desc: "This site has serious issues. We'd strongly recommend shopping elsewhere." },
]

function ScoreExplainer() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your trust score, explained</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">Every scan gives you a score from 0–100. Here&apos;s what each range means.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {SCORES.map((s) => (
            <div key={s.range} className="rounded-2xl p-6 border" style={{ background: s.bg, borderColor: s.color + '30' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{s.emoji}</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest" style={{ color: s.color }}>{s.range}</div>
                  <div className="text-lg font-black text-slate-900">{s.label}</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Is it really free?', a: 'Yes. The basic scan — one URL, up to one page — is always free. No account, no email, no credit card.' },
  { q: 'How accurate is it?', a: "ClearSign analyses the HTML and text of a web page. It catches patterns that are present in the page code. It can't always detect issues that require logging in, completing checkout, or making a purchase — but it catches the vast majority of common tactics." },
  { q: "What if the site looks fine?", a: "A high score means we didn't find anything on the pages we scanned. It's not a guarantee — some manipulation only appears during the checkout flow. But it's a solid signal." },
  { q: 'Can I share my report?', a: 'Yes. Every report has a unique link you can share with friends and family — useful if someone you know is considering signing up to a site.' },
  { q: "I'm a business — can I use ClearSign?", a: "Yes. ClearSign has a professional version designed for product teams, compliance officers, and legal teams. It includes regulatory mapping, PDF reports, API access, and more." },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Common questions</h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-slate-900 text-sm">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-slate-500 text-sm leading-relaxed">{faq.a}</div>
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
    <section className="bg-[#0F172A] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Check before you commit.
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Paste a URL. Get a plain-English report in 30 seconds. It&apos;s free — and it might save you from a subscription nightmare.
        </p>
        <a
          href={CONSUMER_SCANNER}
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors"
        >
          Scan a website now <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-teal-400" />
          <span className="text-white font-medium">ClearSign</span>
          <span className="ml-1">by Third Mirror PTY LTD</span>
        </div>
        <div className="flex gap-5">
          <a href={B2B_PAGE} className="hover:text-white transition-colors">For businesses</a>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <a href="mailto:steve@thirdmirror.com.au" className="hover:text-white transition-colors">Contact</a>
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
        <DarkPatterns />
        <HowItWorks />
        <Pricing />
        <ScoreExplainer />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
