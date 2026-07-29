import RingStat from './RingStat';
import { LayoutGrid, Users, Shield, CalendarDays, ClipboardCheck, TrendingUp, MessageSquare, FolderOpen, Settings, Bell, Search } from 'lucide-react';

const SIDEBAR = [
  { icon: LayoutGrid, label: 'Overview', active: true },
  { icon: Users, label: 'Athletes' },
  { icon: Shield, label: 'Teams' },
  { icon: CalendarDays, label: 'Fixtures' },
  { icon: ClipboardCheck, label: 'Attendance' },
  { icon: TrendingUp, label: 'Performance' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: FolderOpen, label: 'Resources' },
  { icon: Settings, label: 'Settings' },
];

const FIXTURES = [
  { team: '1st XI Hockey', opp: 'vs Northcliff High', time: '15:30' },
  { team: 'U16 Rugby', opp: 'vs Westbrook School (A)', time: '14:00' },
  { team: '1st XV Rugby', opp: 'vs Riverside Academy', time: '15:30' },
];

const ACTIVITY = [
  { label: 'Strength Session', meta: 'Completed', when: 'Today', ok: true },
  { label: 'Match vs Summit College', meta: 'Won 3–1', when: 'Yesterday', ok: true },
  { label: 'Speed Session', meta: 'Completed', when: '2 days ago', ok: true },
];

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl animate-float">
      {/* Laptop frame */}
      <div className="rounded-t-2xl border border-[var(--line-2)] bg-[#0a0e18] p-2 shadow-2xl shadow-black/60">
        <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-bg-2">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-blue" />
              <span className="text-xs font-bold tracking-wide text-ink">ALTUS</span>
            </div>
            <div className="flex items-center gap-3 text-muted">
              <Search size={14} />
              <Bell size={14} />
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-2 to-blue" />
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="hidden w-32 shrink-0 border-r border-[var(--line)] p-3 sm:block">
              {SIDEBAR.map(item => (
                <div key={item.label} className={`mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-[10px] font-medium ${item.active ? 'bg-blue/15 text-blue-2' : 'text-muted'}`}>
                  <item.icon size={12} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-4">
              <p className="text-sm font-bold text-ink">Good morning, Coach.</p>
              <p className="mb-4 text-[10px] text-muted-2">Here's your department overview.</p>

              <div className="grid grid-cols-3 gap-2">
                <div className="glass rounded-xl p-3">
                  <p className="mb-2 text-[8px] font-bold uppercase tracking-wider text-muted-2">Today's Fixtures</p>
                  <div className="space-y-1.5">
                    {FIXTURES.slice(0, 2).map(f => (
                      <div key={f.team} className="text-[8.5px] leading-tight">
                        <p className="font-semibold text-ink">{f.team}</p>
                        <p className="text-muted-2">{f.opp} · {f.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass flex flex-col items-center justify-center gap-1 rounded-xl p-3">
                  <RingStat pct={87} color="#3b82f6" size={44} />
                  <p className="text-[8px] font-semibold text-muted-2">Training Load</p>
                </div>
                <div className="glass flex flex-col items-center justify-center gap-1 rounded-xl p-3">
                  <RingStat pct={96} color="#34d399" size={44} />
                  <p className="text-[8px] font-semibold text-muted-2">Attendance</p>
                </div>
              </div>

              <div className="glass mt-2 rounded-xl p-3">
                <p className="mb-2 text-[8px] font-bold uppercase tracking-wider text-muted-2">Recent Activity</p>
                <div className="space-y-1.5">
                  {ACTIVITY.map(a => (
                    <div key={a.label} className="flex items-center justify-between text-[8.5px]">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-green" />
                        <span className="font-medium text-ink">{a.label}</span>
                        <span className="text-muted-2">· {a.meta}</span>
                      </div>
                      <span className="text-muted-2">{a.when}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 rounded-b-2xl bg-gradient-to-b from-[#141a28] to-[#0a0e18]" />
    </div>
  );
}
