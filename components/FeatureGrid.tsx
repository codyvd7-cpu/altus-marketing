import { Globe2, Users2, UserCircle2, TrendingUp } from 'lucide-react';

const FEATURES = [
  { icon: Globe2, title: 'Public Sport Portals', body: 'Showcase your sport, fixtures, results, and news with a public-facing portal parents actually check.' },
  { icon: Users2, title: 'Coach Workflows', body: 'Plan sessions, manage attendance, and communicate with every team from one central hub.' },
  { icon: UserCircle2, title: 'Athlete Profiles', body: 'A single profile per athlete — availability, performance history, and season progression in one place.' },
  { icon: TrendingUp, title: 'Performance Tracking', body: 'Sprint, agility, jump, and endurance testing benchmarked against real age-group research.' },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="border-b border-[var(--line)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-blue-2">Why Altus</p>
        <h2 className="text-center font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Everything you need. One platform.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(f => (
            <div key={f.title} className="glass rounded-2xl p-6 transition">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue/15 text-blue-2">
                <f.icon size={20} />
              </div>
              <p className="font-display text-lg font-bold text-ink">{f.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
