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

    // Save to database
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

    // Send notification email
    if (process.env.RESEND_API_KEY) {
      const details = [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Role: ${role}`,
        companySize ? `Company size: ${companySize}` : null,
        plan ? `Plan interest: ${plan}` : null,
        audience ? `Audience: ${audience}` : null,
        source ? `Source: ${source}` : null,
        concern ? `\nConcern:\n${concern}` : null,
      ].filter(Boolean).join('\n')

      await resend.emails.send({
        from: 'ClearSign Waitlist <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        subject: `New waitlist signup: ${name} (${email})`,
        text: `New ClearSign waitlist signup\n\n${details}\n\n---\nEntry ID: ${entry.id}`,
        html: `
          <h2 style="color:#0F172A">New ClearSign waitlist signup</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
            ${[
              ['Name', name],
              ['Email', email],
              company ? ['Company', company] : null,
              ['Role', role],
              companySize ? ['Company size', companySize] : null,
              plan ? ['Plan interest', `<strong>${plan}</strong>`] : null,
              audience ? ['Audience', audience] : null,
              source ? ['Source', source] : null,
            ].filter(Boolean).map(([k, v]) => `
              <tr>
                <td style="padding:6px 16px 6px 0;color:#64748B;white-space:nowrap">${k}</td>
                <td style="padding:6px 0;color:#0F172A">${v}</td>
              </tr>
            `).join('')}
          </table>
          ${concern ? `<p style="margin-top:16px;color:#64748B;font-size:13px"><strong>Concern:</strong><br>${concern}</p>` : ''}
          <p style="margin-top:24px;color:#94A3B8;font-size:12px">Entry ID: ${entry.id}</p>
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
