import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const NOTIFY_EMAIL = 'steve@thirdmirror.com.au'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { site, referenceUrl, intent, description, category, impact, email } = body

    if (!site || !intent || !description) {
      return NextResponse.json({ error: 'Site, intent and description are required' }, { status: 400 })
    }

    const report = await prisma.report.create({
      data: {
        site: site.trim(),
        referenceUrl: referenceUrl?.trim() || null,
        intent: intent.trim(),
        description: description.trim(),
        category: category || null,
        impact: Array.isArray(impact) ? impact : [],
        email: email?.trim().toLowerCase() || null,
      },
    })

    if (process.env.RESEND_API_KEY) {
      const impactList = Array.isArray(impact) && impact.length ? impact.join(', ') : '—'
      await resend.emails.send({
        from: 'ClearSign Reports <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        subject: `New dark pattern report: ${site}`,
        text: [
          `Site: ${site}`,
          referenceUrl ? `URL: ${referenceUrl}` : null,
          `Intent: ${intent}`,
          `Description:\n${description}`,
          `Category: ${category || '—'}`,
          `Impact: ${impactList}`,
          email ? `Contact: ${email}` : null,
          `\nReport ID: ${report.id}`,
        ].filter(Boolean).join('\n'),
        html: `
          <h2 style="color:#0F172A;font-family:sans-serif">New dark pattern report</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
            <tr><td style="padding:6px 16px 6px 0;color:#64748B;white-space:nowrap">Site</td><td style="padding:6px 0;color:#0F172A">${site}</td></tr>
            ${referenceUrl ? `<tr><td style="padding:6px 16px 6px 0;color:#64748B;white-space:nowrap">URL</td><td style="padding:6px 0;color:#0F172A"><a href="${referenceUrl}">${referenceUrl}</a></td></tr>` : ''}
            <tr><td style="padding:6px 16px 6px 0;color:#64748B;white-space:nowrap">Intent</td><td style="padding:6px 0;color:#0F172A">${intent}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748B;white-space:nowrap">Category</td><td style="padding:6px 0;color:#0F172A">${category || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748B;white-space:nowrap">Impact</td><td style="padding:6px 0;color:#0F172A">${impactList}</td></tr>
            ${email ? `<tr><td style="padding:6px 16px 6px 0;color:#64748B;white-space:nowrap">Contact</td><td style="padding:6px 0;color:#0F172A">${email}</td></tr>` : ''}
          </table>
          <p style="margin-top:16px;color:#64748B;font-size:13px;font-family:sans-serif"><strong>Description:</strong><br>${description.replace(/\n/g, '<br>')}</p>
          <p style="margin-top:24px;color:#94A3B8;font-size:12px;font-family:sans-serif">Report ID: ${report.id}</p>
        `,
      })
    }

    return NextResponse.json({ success: true, id: report.id })
  } catch (err) {
    console.error('Report error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
