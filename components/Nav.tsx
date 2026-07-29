'use client';
import { useState } from 'react';
import Logo from './Logo';
import { ChevronDown, Menu, X } from 'lucide-react';

const SOLUTIONS = [
  { label: 'Heads of Sport', href: '#roles' },
  { label: 'Coaches', href: '#roles' },
  { label: 'Athletes', href: '#roles' },
  { label: 'Parents', href: '#roles' },
];
const RESOURCES = [
  { label: 'Why Altus', href: '#why' },
  { label: 'Every Sport', href: '#sports' },
  { label: 'Book a Demo', href: '#demo' },
];

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-[13.5px] font-medium text-muted transition hover:text-ink">
        {label} <ChevronDown size={14} className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3">
          <div className="glass rounded-xl p-2 shadow-2xl shadow-black/50">
            {items.map(item => (
              <a key={item.label} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top"><Logo /></a>

        <nav className="hidden items-center gap-8 lg:flex">
          <Dropdown label="Solutions" items={SOLUTIONS} />
          <a href="#features" className="text-[13.5px] font-medium text-muted transition hover:text-ink">Features</a>
          <a href="#sports" className="text-[13.5px] font-medium text-muted transition hover:text-ink">Sports</a>
          <a href="#pricing" className="text-[13.5px] font-medium text-muted transition hover:text-ink">Pricing</a>
          <Dropdown label="Resources" items={RESOURCES} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#" className="rounded-lg border border-[var(--line-2)] px-4 py-2 text-[13px] font-semibold text-ink transition hover:bg-white/5">
            School Login
          </a>
          <a href="#demo" className="rounded-lg bg-blue px-4 py-2 text-[13px] font-semibold text-white transition hover:brightness-110">
            Book a Demo
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--line)] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-muted">
            <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#roles" onClick={() => setMobileOpen(false)}>Solutions</a>
            <a href="#sports" onClick={() => setMobileOpen(false)}>Sports</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="#why" onClick={() => setMobileOpen(false)}>Why Altus</a>
            <a href="#demo" onClick={() => setMobileOpen(false)} className="mt-2 rounded-lg bg-blue px-4 py-2.5 text-center font-semibold text-white">Book a Demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
