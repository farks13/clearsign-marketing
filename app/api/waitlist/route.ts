import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const NOTIFY_EMAIL = 'steve@thirdmirror.com.au'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      email, name, company, role, companySize, concern,
      audience, plan, source, utmSource, utmMedium, utmCampaign
    } = body

    if (!email || !name || !role) {
      return NextResponse.json({ error: 'Email, name and role are required' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const entry = await prisma.waitlistEntry.create({
      data: {
        email: email.trim().toLowerCase(),
        name: name.trim(),
        company: company?.trim() || null,
        role,
        companySize: companySize || null,
        concern: concern?.trim() || null,
        audience: audience || null,
        plan: plan || null,
        source: source || null,
        utmSource: utmSource || null,
        utmMedium: utmMedium || null,
        utmCampaign: utmCampaign || null,
      },
    })

    if (process.env.RESEND_API_KEY) {
      const fields: [string, string][] = [
        ['Name', name],
        ['Email', email],
      ]
      if (company) fields.push(['Company', company])
      fields.push(['Role', role])
      if (companySize) fields.push(['Company size', companySize])
      if (plan) fields.push(['Plan interest', plan])
      if (audience) fields.push(['Audience', audience])
      if (source) fields.push(['Source', source])

      const tableRows = fields
        .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#64748B;white-space:nowrap">${k}</td><td style="padding:6px 0;color:#0F172A">${v}</td></tr>`)
        .join('')

      const textBody = fields.map(([k, v]) => `${k}: ${v}`).join('\n')
        + (concern ? `\n\nConcern:\n${concern}` : '')

      await resend.emails.send({
        from: 'ClearSign Waitlist <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        subject: `New waitlist signup: ${name} (${email})`,
        text: `New ClearSign waitlist signup\n\n${textBody}\n\n---\nEntry ID: ${entry.id}`,
        html: `
          <h2 style="color:#0F172A;font-family:sans-serif">New ClearSign waitlist signup</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
            ${tableRows}
          </table>
          ${concern ? `<p style="margin-top:16px;color:#64748B;font-size:13px;font-family:sans-serif"><strong>Concern:</strong><br>${concern}</p>` : ''}
          <p style="margin-top:24px;color:#94A3B8;font-size:12px;font-family:sans-serif">Entry ID: ${entry.id}</p>
        `,
      })
    }

    return NextResponse.json({ success: true, id: entry.id })
  } catch (err: unknown) {
    if (err instanceof Error && (err.message.includes('Unique constraint') || err.message.includes('unique'))) {
      return NextResponse.json({ success: true, duplicate: true })
    }
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
