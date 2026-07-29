import { ShieldCheck, Users, User, Heart } from 'lucide-react';

const ROLES = [
  { icon: ShieldCheck, title: 'Heads of Sport', body: 'Gain visibility and alignment across every team and every sport your department runs.' },
  { icon: Users, title: 'Coaches', body: 'Save time, communicate faster, and focus on developing athletes instead of chasing paperwork.' },
  { icon: User, title: 'Athletes', body: 'See your own progress, availability, and performance history — and log every session yourself.' },
  { icon: Heart, title: 'Parents', body: 'Stay informed and connected, with fixtures, results, and alerts that reach you the moment they matter.' },
];

export default function RoleGrid() {
  return (
    <section id="roles" className="border-b border-[var(--line)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-blue-2">Built for every role</p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ROLES.map(r => (
            <div key={r.title} className="glass rounded-2xl p-6">
              <r.icon size={20} className="mb-3 text-blue-2" />
              <p className="font-display text-base font-bold text-ink">{r.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
