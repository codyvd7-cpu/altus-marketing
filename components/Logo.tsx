export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" aria-hidden="true">
        <path d="M11 0L22 20H14.5L11 13.5L7.5 20H0L11 0Z" fill="url(#altus-mark-grad)" />
        <path d="M11 8L14.5 14.5H7.5L11 8Z" fill="#05070d" />
        <defs>
          <linearGradient id="altus-mark-grad" x1="0" y1="0" x2="22" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-lg font-extrabold tracking-[0.15em] text-ink">ALTUS</span>
    </span>
  );
}
