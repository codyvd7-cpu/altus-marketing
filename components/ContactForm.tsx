'use client';
import { useState } from 'react';
import { Lock } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Something went wrong — try again.');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong — try again.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="glass rounded-2xl px-6 py-10 text-center">
        <p className="font-display text-2xl font-bold text-ink">Message sent.</p>
        <p className="mt-1 text-sm text-muted">We&apos;ll be in touch shortly to set up your walkthrough.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass grid grid-cols-1 gap-4 rounded-2xl p-6 sm:grid-cols-2 sm:p-8">
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">Name</label>
        <input name="name" required placeholder="Your full name" autoComplete="name"
          className="w-full rounded-xl border border-[var(--line-2)] bg-bg-2 px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted-2 focus:border-blue" />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">School</label>
        <input name="school" placeholder="School name" autoComplete="organization"
          className="w-full rounded-xl border border-[var(--line-2)] bg-bg-2 px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted-2 focus:border-blue" />
      </div>
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-xs font-semibold text-muted">Email</label>
        <input name="email" type="email" required placeholder="your.email@school.edu" autoComplete="email"
          className="w-full rounded-xl border border-[var(--line-2)] bg-bg-2 px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted-2 focus:border-blue" />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">Role</label>
        <select name="role" defaultValue=""
          className="w-full rounded-xl border border-[var(--line-2)] bg-bg-2 px-4 py-2.5 text-sm text-ink outline-none transition focus:border-blue">
          <option value="" disabled>Select your role</option>
          <option>Head of Sport</option>
          <option>Coach</option>
          <option>Sports Administrator</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">Preferred date</label>
        <input name="preferredDate" type="date"
          className="w-full rounded-xl border border-[var(--line-2)] bg-bg-2 px-4 py-2.5 text-sm text-ink outline-none transition focus:border-blue" />
      </div>
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-xs font-semibold text-muted">What are you looking to solve?</label>
        <textarea name="message" required rows={3} placeholder="Tell us a bit about your department"
          className="w-full rounded-xl border border-[var(--line-2)] bg-bg-2 px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted-2 focus:border-blue" />
      </div>

      {status === 'error' && <p className="text-sm text-red-400 sm:col-span-2">{errorMsg}</p>}

      <button type="submit" disabled={status === 'sending'}
        className="rounded-xl bg-blue px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-50 sm:col-span-2">
        {status === 'sending' ? 'Sending…' : 'Book Demo →'}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-2 sm:col-span-2">
        <Lock size={11} /> Your information is secure and will never be shared.
      </p>
    </form>
  );
}
