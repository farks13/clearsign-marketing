'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Check, X, ChevronDown, ArrowRight } from 'lucide-react'

function Nav() {
  return (
    <nav className="bg-[#0F172A] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-teal-400" />
          <span className="text-white font-semibold text-lg tracking-tight">ClearSign</span>
        </Link>
        <Link href="/waitlist" className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          Request Early Access
        </Link>
      </div>
    </nav>
  )
}

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    desc: 'Check any website. See what we find.',
    highlight: false,
    cta: 'Get Started Free',
    param: 'free',
    badge: null,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    badge: 'Most Popular',
    desc: 'For individuals and small teams who need deeper analysis.',
    highlight: true,
    cta: 'Get Pro',
    param: 'pro',
  },
  {
    name: 'Growth',
    price: '$149',
    period: '/month',
    desc: 'For product and compliance teams who need full coverage.',
    highlight: false,
    cta: 'Request Early Access',
    param: 'growth',
    badge: null,
  },
  {
    name: 'Scale',
    price: '$499',
    period: '/month',
    desc: 'For organisations with complex compliance requirements.',
    highlight: false,
    cta: 'Contact Us',
    param: 'scale',
    badge: null,
  },
]

type CellVal = boolean | string | null

interface FeatureRow {
  label: string
  isSection: false
  free: CellVal
  pro: CellVal
  growth: CellVal
  scale: CellVal
}

interface SectionRow {
  label: string
  isSection: true
}

type Row = FeatureRow | SectionRow

const rows: Row[] = [
  { label: 'Usage', isSection: true },
  { label: 'Monthly scans',        isSection: false, free: '5',       pro: 'Unlimited', growth: '50 deep scans', scale: 'Unlimited' },
  { label: 'Pages per scan',       isSection: false, free: '1',       pro: '10',        growth: '100',           scale: 'Unlimited' },
  { label: 'Detection categories', isSection: false, free: '3 of 7',  pro: 'All 7',     growth: 'All 7',         scale: '7 + custom' },
  { label: 'Regulatory mapping',   isSection: false, free: null,      pro: null,        growth: 'ACL, Privacy Act, GDPR, DSA, FTC', scale: 'All + custom' },
  { label: 'Features', isSection: true },
  { label: 'PDF reports',              isSection: false, free: false, pro: true,  growth: true,  scale: true },
  { label: 'Shareable report links',   isSection: false, free: false, pro: true,  growth: true,  scale: true },
  { label: 'API access',               isSection: false, free: false, pro: false, growth: false, scale: true },
  { label: 'Compliance dashboard',     isSection: false, free: false, pro: false, growth: false, scale: true },
  { label: 'Monthly compliance report',isSection: false, free: false, pro: false, growth: false, scale: true },
  { label: 'Custom detection rules',   isSection: false, free: false, pro: false, growth: false, scale: true },
  { label: 'Support', isSection: true },
  { label: 'Email support', isSection: false, free: 'Community', pro: 'Standard', growth: 'Priority', scale: 'Dedicated' },
  { label: 'SLA',          isSection: false, free: false,       pro: false,      growth: false,      scale: '99.9%' },
]

function CellValue({ val }: { val: CellVal }) {
  if (val === null || val === false) return <X className="w-4 h-4 text-slate-300 mx-auto" />
  if (val === true) return <Check className="w-4 h-4 text-teal-500 mx-auto" />
  return <span className="text-slate-600 text-sm">{val}</span>
}

const pricingFaqs = [
  { q: 'What counts as a scan?', a: "One scan = one crawl of a URL. We follow internal links up to your plan's page limit and return a single scored report." },
  { q: 'Can I upgrade or downgrade at any time?', a: "Yes. Plan changes take effect at the start of your next billing period. Downgrading won't delete your historical reports." },
  { q: 'Is there an annual discount?', a: 'Yes — annual plans receive a 20% discount. Contact us for a quote.' },
  { q: 'What payment methods do you accept?', a: 'All major credit cards via Stripe. Enterprise invoicing available on Scale and above.' },
  { q: 'Do unused scans roll over?', a: 'No. Scan quotas reset at the start of each billing period.' },
]

export default function PricingPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-[#0F172A] py-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, transparent pricing.</h1>
            <p className="text-slate-400 text-lg">No hidden fees. Cancel anytime. Upgrade when you&apos;re ready.</p>
          </div>
        </section>

        {/* Plan cards */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-xl p-7 flex flex-col border relative ${
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
                  <p className={`text-sm mb-6 mt-2 flex-1 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
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
          </div>
        </section>

        {/* Feature comparison table */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Full feature comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left px-6 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">Feature</th>
                    {plans.map((p) => (
                      <th key={p.name} className={`px-6 py-4 text-center text-xs uppercase tracking-wider font-semibold ${p.highlight ? 'text-teal-600' : 'text-slate-500'}`}>{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {rows.map((row, i) => {
                    if (row.isSection) {
                      return (
                        <tr key={`section-${i}`} className="bg-slate-50/80">
                          <td colSpan={5} className="px-6 py-2.5 text-xs font-bold text-slate-400 uppercase tracking-wider">{row.label}</td>
                        </tr>
                      )
                    }
                    return (
                      <tr key={`row-${i}`} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}>
                        <td className="px-6 py-4 text-slate-700 font-medium">{row.label}</td>
                        <td className="px-6 py-4 text-center"><CellValue val={row.free} /></td>
                        <td className="px-6 py-4 text-center"><CellValue val={row.pro} /></td>
                        <td className="px-6 py-4 text-center"><CellValue val={row.growth} /></td>
                        <td className="px-6 py-4 text-center"><CellValue val={row.scale} /></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Enterprise */}
        <section className="bg-[#1E293B] py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need something custom?</h2>
            <p className="text-slate-400 text-base mb-8">
              Enterprise pricing, on-premise deployment, custom detection rules, and white-label reporting are all available.
            </p>
            <a
              href="mailto:steve@thirdmirror.com.au"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="bg-white py-16">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Pricing FAQ</h2>
            <div className="space-y-3">
              {pricingFaqs.map((faq, i) => (
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
      </main>

      <footer className="bg-[#0F172A] border-t border-slate-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-teal-400" />
            <span className="text-white font-medium">ClearSign</span>
            <span className="ml-1">by Third Mirror PTY LTD</span>
          </div>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/waitlist" className="hover:text-white transition-colors">Join Waitlist</Link>
            <a href="mailto:steve@thirdmirror.com.au" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
