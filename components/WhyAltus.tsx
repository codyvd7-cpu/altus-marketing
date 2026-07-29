import { GraduationCap, Lock, Zap } from 'lucide-react';

const REASONS = [
  {
    icon: GraduationCap,
    title: 'Built by a coach, not a vendor',
    body: 'Altus was built by someone who has actually run the register, chased the fixture change, and needed an alert to reach every parent in seconds — not a team that has never coached a session.',
  },
  {
    icon: Lock,
    title: 'Secure by design',
    body: 'Encrypted at rest and in transit, role-scoped access down to individual coaches and teams, and built with POPIA compliance in mind from day one — not bolted on afterward.',
  },
  {
    icon: Zap,
    title: 'Built for the moment that matters',
    body: "One tap suspends training and reaches every coach and parent's phone in seconds — because the feature that matters most is the one you hope you never need.",
  },
];

export default function WhyAltus() {
  return (
    <section id="why" className="border-b border-[var(--line)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-blue-2">Why Altus</p>
        <h2 className="text-center font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Not just another school admin tool.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {REASONS.map(r => (
            <div key={r.title} className="glass rounded-2xl p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue/15 text-blue-2">
                <r.icon size={22} />
              </div>
              <p className="font-display text-lg font-bold text-ink">{r.title}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
