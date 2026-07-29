import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/logo-mark.png" alt="" width={28} height={28} className="h-6 w-6 object-contain" priority />
      <span className="font-display text-lg font-extrabold tracking-[0.15em] text-ink">ALTUS</span>
    </span>
  );
}
