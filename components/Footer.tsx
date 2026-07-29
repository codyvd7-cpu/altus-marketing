import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-xs text-muted-2">Sport management, built by a coach.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted">
          <a href="#features" className="hover:text-ink">Features</a>
          <a href="#pricing" className="hover:text-ink">Pricing</a>
          <a href="#demo" className="hover:text-ink">Book a Demo</a>
          <a href="#" className="hover:text-ink">Login</a>
          <a href="#demo" className="hover:text-ink">Contact</a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-[var(--line)] pt-6 text-center text-[11px] text-muted-2">
        © {new Date().getFullYear()} Altus (Pty) Ltd · altusperformance.co.za
      </div>
    </footer>
  );
}
