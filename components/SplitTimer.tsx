'use client';
import { useEffect, useState } from 'react';

// The signature element: a live split-timer readout, ticking like a real
// stopwatch mid-session. Purely a visual device symbolizing "real-time
// tracking" — not a claim about usage numbers or customer counts.
export default function SplitTimer() {
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const start = Date.now() - ms;
    const id = setInterval(() => setMs(Date.now() - start), 37);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const total = ms % 60000;
  const mm = Math.floor(total / 60000);
  const ss = Math.floor((total % 60000) / 1000);
  const cs = Math.floor((total % 1000) / 10);

  return (
    <button
      onClick={() => setRunning(r => !r)}
      aria-label={running ? 'Pause split timer' : 'Resume split timer'}
      className="group flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)]/60 px-5 py-3 backdrop-blur-sm transition hover:border-sky/40"
    >
      <span className={`h-2 w-2 rounded-full ${running ? 'bg-green animate-pulse' : 'bg-muted'}`} />
      <span className="font-mono text-2xl tabular-nums tracking-tight text-ink sm:text-3xl">
        {String(mm).padStart(2, '0')}:{String(ss).padStart(2, '0')}
        <span className="text-amber">.{String(cs).padStart(2, '0')}</span>
      </span>
      <span className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
        {running ? 'Split in progress' : 'Paused'}
      </span>
    </button>
  );
}
