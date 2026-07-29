import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ─── /api/contact ─────────────────────────────────────────────────────────────
// Sends the marketing site's contact form to your inbox via Resend.
// Setup needed (both are free to start):
//   1. Sign up at resend.com, verify a sending domain (or use their test domain
//      while you wait for DNS), and grab an API key.
//   2. Add two env vars in Vercel: RESEND_API_KEY and CONTACT_TO_EMAIL
//      (the inbox you want leads to land in — e.g. cody@altusperformance.co.za).
// Until those are set, this returns a clear error instead of silently failing.

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !toEmail) {
    return NextResponse.json({ error: 'Contact form isn\u2019t configured yet — set RESEND_API_KEY and CONTACT_TO_EMAIL.' }, { status: 500 });
  }

  const body = await req.json().catch(() => ({}));
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const school = String(body.school || '').trim();
  const message = String(body.message || '').trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'Altus Performance <onboarding@resend.dev>', // swap to your verified domain once set up
      to: toEmail,
      replyTo: email,
      subject: `New demo request — ${name}${school ? ` (${school})` : ''}`,
      text: `Name: ${name}\nEmail: ${email}\nSchool: ${school || '—'}\n\nMessage:\n${message}`,
    });
    if (error) return NextResponse.json({ error: error.message || 'Failed to send.' }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Failed to send.' }, { status: 500 });
  }
}
