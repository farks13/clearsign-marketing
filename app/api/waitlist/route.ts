import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, name, company, role, companySize, concern, audience, plan, source, utmSource, utmMedium, utmCampaign } = body

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

    return NextResponse.json({ success: true, id: entry.id })
  } catch (err: unknown) {
    if (err instanceof Error && (err.message.includes('Unique constraint') || err.message.includes('unique'))) {
      return NextResponse.json({ success: true, duplicate: true })
    }
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
