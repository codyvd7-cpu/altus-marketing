import RingStat from './RingStat';

export default function ProductShowcase() {
  return (
    <section className="border-b border-[var(--line)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-blue-2">The Altus Platform</p>
        <h2 className="text-center font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Powerful tools. Seamless experience.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Public Sport Portal */}
          <div className="glass overflow-hidden rounded-2xl">
            <div className="flex h-44 items-end bg-gradient-to-br from-blue/25 via-bg-2 to-bg-2 p-5">
              <div>
                <p className="font-display text-xl font-bold leading-tight text-ink">Excellence in<br />Sport. Every Day.</p>
                <span className="mt-2 inline-block rounded-md bg-blue px-2.5 py-1 text-[10px] font-bold text-white">Latest News</span>
              </div>
            </div>
            <div className="p-5">
              <p className="font-display text-base font-bold text-ink">Public Sport Portal</p>
              <p className="mt-1 text-sm text-muted">Live fixtures, results, news, and team updates your community actually checks.</p>
            </div>
          </div>

          {/* Athlete Profile */}
          <div className="glass overflow-hidden rounded-2xl">
            <div className="h-44 p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-2 to-blue" />
                <div>
                  <p className="text-xs font-bold text-ink">George Harrison</p>
                  <p className="text-[10px] text-muted-2">1st XV Rugby</p>
                </div>
              </div>
              <div className="flex gap-4">
                <RingStat pct={98} color="#34d399" size={52} label="Avail." />
                <RingStat pct={82} color="#3b82f6" size={52} label="Wellbeing" />
              </div>
            </div>
            <div className="p-5 pt-0">
              <p className="font-display text-base font-bold text-ink">Athlete Profile</p>
              <p className="mt-1 text-sm text-muted">A single source of truth for every athlete's availability and progress.</p>
            </div>
          </div>

          {/* Performance Dashboard */}
          <div className="glass overflow-hidden rounded-2xl">
            <div className="flex h-44 items-center justify-center gap-6 p-5">
              <RingStat pct={82} color="#34d399" size={72} label="Training Load" />
              <div className="text-left">
                <p className="text-[10px] font-semibold text-muted-2">Injury Risk</p>
                <p className="font-mono text-sm font-bold text-green">Low</p>
                <p className="mt-2 text-[10px] font-semibold text-muted-2">Trend</p>
                <p className="font-mono text-sm font-bold text-blue-2">+12%</p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <p className="font-display text-base font-bold text-ink">Performance Dashboard</p>
              <p className="mt-1 text-sm text-muted">Monitor load and trends, and make data-driven decisions per athlete.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
