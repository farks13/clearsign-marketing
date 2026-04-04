'use client'

import { useState, useEffect, FormEvent } from 'react'

const B2B_URL = 'https://clearsign-marketing.vercel.app/'

const glass = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
}
const tealGlow = '0 0 32px rgba(13,148,136,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
const tealGlowHover = '0 0 48px rgba(13,148,136,0.6), inset 0 1px 0 rgba(255,255,255,0.2)'

const CATEGORIES = [
  'Urgency & Pressure',
  'Hidden Costs',
  'Obstruction',
  'Misdirection',
  'Social Proof',
  'Privacy',
  'Subscription Traps',
  "I'm not sure",
]

const IMPACTS = [
  { id: 'money', label: 'Lost money' },
  { id: 'time', label: 'Wasted time' },
  { id: 'privacy', label: 'Lost privacy' },
  { id: 'choice', label: 'Denied a choice' },
  { id: 'stress', label: 'Stressed or embarrassed' },
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '12px 14px',
  color: 'white',
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: 'rgba(255,255,255,0.55)',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  marginBottom: '8px',
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

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
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0" style={{ textDecoration: 'none' }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #14b8a6, #0891b2)' }}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ color: 'white', fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em' }}>ClearSign</span>
          </a>
          <div className="hidden sm:flex items-center gap-6">
            <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>For businesses</a>
            <a href="/consumer" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>For consumers</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default function ReportPage() {
  const [impact, setImpact] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function toggleImpact(id: string) {
    setImpact(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const form = e.currentTarget
    const data = {
      site: (form.elements.namedItem('site') as HTMLInputElement).value,
      referenceUrl: (form.elements.namedItem('referenceUrl') as HTMLInputElement).value,
      intent: (form.elements.namedItem('intent') as HTMLInputElement).value,
      description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
      category: (form.elements.namedItem('category') as HTMLSelectElement).value,
      impact,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
    }

    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setSubmitted(true)
      } else {
        setError(json.error || 'Something went wrong.')
      }
    } catch {
      setError('Could not connect. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Nav />
      <main style={{ background: '#05061b', minHeight: '100vh' }}>

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(13,148,136,0.16) 0%, transparent 65%)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }} />
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.22)', color: 'rgba(94,234,212,0.85)', letterSpacing: '0.04em' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Anonymous by default
            </div>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1, color: 'white', marginBottom: '18px' }}>
              Report a{' '}
              <span style={{
                background: 'linear-gradient(125deg, #2dd4bf 0%, #38bdf8 50%, #818cf8 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>dark pattern.</span>
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', marginBottom: '0' }}>
              Document a manipulative design you&apos;ve encountered. Every submission strengthens the evidence base for regulators, researchers, and the case for fairer digital standards.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section style={{ paddingBottom: '64px' }}>
          <div className="max-w-2xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-4 mb-16">
              {[
                { num: '01', title: 'You report', body: 'Describe what happened — no personal data required.' },
                { num: '02', title: 'We review', body: 'We anonymise submissions and strip any identifying detail.' },
                { num: '03', title: 'Insights shared', body: 'Patterns are published to help researchers and regulators.' },
              ].map(s => (
                <div key={s.num} className="rounded-2xl p-5 text-center" style={glass}>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(94,234,212,0.55)', marginBottom: '8px' }}>{s.num}</div>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>{s.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '12px', lineHeight: 1.6 }}>{s.body}</div>
                </div>
              ))}
            </div>

            {/* Form */}
            {submitted ? (
              <div className="rounded-3xl p-12 text-center" style={glass}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>✓</div>
                <h2 style={{ color: 'white', fontWeight: 700, fontSize: '24px', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                  Thank you for reporting.
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', lineHeight: 1.7, maxWidth: '380px', margin: '0 auto 28px' }}>
                  Your submission has been received. We review every report and use them to identify recurring patterns across industries.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="/report"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}
                    onClick={() => setSubmitted(false)}>
                    Report another
                  </a>
                  <a href="/consumer"
                    style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, boxShadow: tealGlow }}>
                    Check a website →
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="rounded-3xl p-8 space-y-6" style={glass}>

                  {/* Site */}
                  <div>
                    <label style={labelStyle}>Where did this happen? <span style={{ color: 'rgba(239,68,68,0.7)' }}>*</span></label>
                    <input name="site" required placeholder="e.g. Spotify, Amazon, some-app.com"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(13,148,136,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  </div>

                  {/* Reference URL */}
                  <div>
                    <label style={labelStyle}>Link to the page <span style={{ color: 'rgba(255,255,255,0.22)' }}>(optional)</span></label>
                    <input name="referenceUrl" type="url" placeholder="https://..."
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(13,148,136,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  </div>

                  {/* Intent */}
                  <div>
                    <label style={labelStyle}>What were you trying to do? <span style={{ color: 'rgba(239,68,68,0.7)' }}>*</span></label>
                    <input name="intent" required placeholder="e.g. Cancel my subscription, sign up for a free trial"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(13,148,136,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  </div>

                  {/* Description */}
                  <div>
                    <label style={labelStyle}>What happened? <span style={{ color: 'rgba(239,68,68,0.7)' }}>*</span></label>
                    <textarea name="description" required rows={5}
                      placeholder="Describe what you saw or experienced — as much detail as you're comfortable sharing."
                      style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(13,148,136,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  </div>

                  {/* Category */}
                  <div>
                    <label style={labelStyle}>Type of dark pattern <span style={{ color: 'rgba(255,255,255,0.22)' }}>(optional)</span></label>
                    <select name="category"
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(13,148,136,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}>
                      <option value="" style={{ background: '#0a0f1e' }}>Select a category...</option>
                      {CATEGORIES.map(c => (
                        <option key={c} value={c} style={{ background: '#0a0f1e' }}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Impact */}
                  <div>
                    <label style={labelStyle}>How did it affect you? <span style={{ color: 'rgba(255,255,255,0.22)' }}>(select all that apply)</span></label>
                    <div className="flex flex-wrap gap-2">
                      {IMPACTS.map(i => {
                        const active = impact.includes(i.id)
                        return (
                          <button key={i.id} type="button" onClick={() => toggleImpact(i.id)}
                            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150"
                            style={{
                              background: active ? 'rgba(13,148,136,0.18)' : 'rgba(255,255,255,0.04)',
                              border: active ? '1px solid rgba(13,148,136,0.4)' : '1px solid rgba(255,255,255,0.08)',
                              color: active ? 'rgba(94,234,212,0.9)' : 'rgba(255,255,255,0.4)',
                              cursor: 'pointer',
                            }}>
                            {i.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Your email <span style={{ color: 'rgba(255,255,255,0.22)' }}>(optional — for follow-up only)</span></label>
                    <input name="email" type="email" placeholder="you@example.com"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(13,148,136,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')} />
                    <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '12px', marginTop: '6px', lineHeight: 1.5 }}>
                      We&apos;ll never share your email. It&apos;s only used if we need clarification.
                    </p>
                  </div>

                  {error && (
                    <p style={{ color: 'rgba(239,68,68,0.8)', fontSize: '13px' }}>{error}</p>
                  )}

                  <button type="submit" disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl font-semibold transition-all"
                    style={{
                      background: 'linear-gradient(135deg, #0d9488, #0891b2)',
                      color: 'white', padding: '14px 28px', fontSize: '15px',
                      letterSpacing: '-0.01em', boxShadow: tealGlow,
                      border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
                      opacity: submitting ? 0.7 : 1,
                    }}
                    onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLElement).style.boxShadow = tealGlowHover }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = tealGlow }}>
                    {submitting ? 'Submitting...' : 'Submit report'}
                    {!submitting && (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #0891b2)' }}>
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.6" fill="none" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: '13px' }}>ClearSign</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>by Third Mirror PTY LTD · Built in Australia 🇦🇺</span>
            </div>
            <div className="flex gap-6">
              {[['For businesses','/'],['For consumers','/consumer'],['Pricing','/pricing'],['Contact','mailto:steve@thirdmirror.com.au']].map(([l,h]) => (
                <a key={l} href={h} style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}>{l}</a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
