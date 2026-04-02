'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Shield, CheckCircle, ArrowRight } from 'lucide-react'

const ROLES = [
  'Compliance / Legal',
  'Product / Design',
  'Engineering',
  'Executive / Founder',
  'Consumer Advocate / Regulator',
  'Other',
]

const COMPANY_SIZES = ['1–10', '11–50', '51–200', '201–1,000', '1,000+']

const PLAN_LABELS: Record<string, string> = {
  free: 'Free plan',
  growth: 'Growth ($149/mo)',
  scale: 'Scale ($499/mo)',
}

const AUDIENCE_LABELS: Record<string, string> = {
  compliance: 'Compliance & Legal',
  product: 'Product & Design',
  consumer: 'Consumer Advocacy & Regulators',
}

function WaitlistForm() {
  const searchParams = useSearchParams()
  const audience = searchParams.get('audience') || ''
  const plan = searchParams.get('plan') || ''
  const source = searchParams.get('source') || ''
  const utmSource = searchParams.get('utm_source') || ''
  const utmMedium = searchParams.get('utm_medium') || ''
  const utmCampaign = searchParams.get('utm_campaign') || ''

  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', companySize: '', concern: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const set = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, audience, plan, source, utmSource, utmMedium, utmCampaign }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setSuccess(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 border-2 border-teal-200 mb-6">
          <CheckCircle className="w-8 h-8 text-teal-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">You&apos;re on the list.</h2>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          Thanks! We&apos;re onboarding in batches — we&apos;ll be in touch as soon as your spot is ready.
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-sm mx-auto">
          <p className="text-slate-700 font-medium text-sm mb-3">Want to help shape ClearSign?</p>
          <p className="text-slate-500 text-sm mb-4">
            We&apos;re running 20-minute research calls to understand what compliance teams actually need.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:underline"
          >
            Book a research call <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Context chip */}
      {(plan || audience) && (
        <div className="flex flex-wrap gap-2 mb-2">
          {plan && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              {PLAN_LABELS[plan] || plan}
            </span>
          )}
          {audience && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
              {AUDIENCE_LABELS[audience] || audience}
            </span>
          )}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            placeholder="Jane Smith"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Work email <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={e => set('email', e.target.value)}
            placeholder="jane@company.com"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company <span className="text-slate-400 font-normal">(optional)</span></label>
        <input
          type="text"
          value={form.company}
          onChange={e => set('company', e.target.value)}
          placeholder="Acme Corp"
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Role <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={form.role}
            onChange={e => set('role', e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
          >
            <option value="">Select role…</option>
            {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Company size <span className="text-slate-400 font-normal">(optional)</span></label>
          <select
            value={form.companySize}
            onChange={e => set('companySize', e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
          >
            <option value="">Select size…</option>
            {COMPANY_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          What&apos;s your biggest dark pattern concern? <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <textarea
          value={form.concern}
          onChange={e => set('concern', e.target.value)}
          placeholder="e.g. We need to audit our checkout flow before our DSA compliance deadline…"
          rows={3}
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-teal-600 hover:bg-teal-500 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-base"
      >
        {loading ? 'Joining…' : 'Join the Waitlist'}
      </button>

      <p className="text-center text-slate-400 text-xs">
        No spam. No pre-ticked boxes. Unsubscribe any time.
      </p>
    </form>
  )
}

export default function WaitlistPage() {
  return (
    <>
      {/* Nav */}
      <nav className="bg-[#0F172A] border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-teal-400" />
            <span className="text-white font-semibold text-lg tracking-tight">ClearSign</span>
          </Link>
          <Link href="/pricing" className="text-slate-400 hover:text-white text-sm transition-colors">Pricing</Link>
        </div>
      </nav>

      <main className="min-h-screen bg-slate-50 py-16">
        <div className="max-w-lg mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Get early access to ClearSign.</h1>
            <p className="text-slate-500">
              We&apos;re onboarding teams in batches. Tell us a bit about yourself and we&apos;ll get you in as soon as possible.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <Suspense fallback={<div className="text-slate-400 text-sm">Loading form…</div>}>
              <WaitlistForm />
            </Suspense>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            {[
              '🔒 Encrypted at rest',
              '🚫 No third-party sharing',
              '✉️ Easy unsubscribe',
            ].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-slate-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-teal-400" />
            <span className="text-white font-medium">ClearSign</span>
            <span className="ml-1">by Third Mirror PTY LTD</span>
          </div>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <a href="mailto:steve@thirdmirror.com.au" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
