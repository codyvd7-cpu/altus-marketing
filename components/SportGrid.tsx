const SPORTS = [
  { label: 'Hockey', body: 'Fixtures, squads, statistics & more.', color: '#3b82f6' },
  { label: 'Rugby', body: 'Fixtures, squads, statistics & more.', color: '#f87171' },
  { label: 'Cricket', body: 'Fixtures, squads, statistics & more.', color: '#34d399' },
  { label: 'Swimming', body: 'Fixtures, squads, statistics & more.', color: '#22d3ee' },
  { label: 'Rowing', body: 'Fixtures, squads, statistics & more.', color: '#f5c86e' },
  { label: 'High Performance', body: 'Testing, monitoring, analytics & more.', color: '#a78bfa' },
];

export default function SportGrid() {
  return (
    <section id="sports" className="border-b border-[var(--line)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-blue-2">One system. Every sport.</p>
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Flexible. Scalable. Built for the structure of school sport.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {SPORTS.map(s => (
            <div key={s.label} className="glass rounded-2xl p-4 text-center">
              <div className="mx-auto mb-3 h-1 w-8 rounded-full" style={{ background: s.color }} />
              <p className="text-sm font-bold text-ink">{s.label}</p>
              <p className="mt-1 text-[10px] leading-tight text-muted-2">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
