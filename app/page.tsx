import Nav from '@/components/Nav';
import DashboardMockup from '@/components/DashboardMockup';
import FeatureGrid from '@/components/FeatureGrid';
import ProductShowcase from '@/components/ProductShowcase';
import RoleGrid from '@/components/RoleGrid';
import SportGrid from '@/components/SportGrid';
import WhyAltus from '@/components/WhyAltus';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { ShieldCheck, Lock, Star, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-bg text-ink">
      <Nav />

      {/* ── HERO ── */}
      <section className="hero-glow grain relative overflow-hidden px-6 pb-16 pt-20 sm:pt-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              One Platform.
              <br />
              Every Athlete.
              <br />
              Every Team.
              <br />
              Every Season.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted">
              The Performance Operating System for school sport.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#demo" className="rounded-xl bg-blue px-6 py-3.5 text-center text-sm font-bold text-white transition hover:brightness-110">
                Book a Demo →
              </a>
              <a href="#features" className="rounded-xl border border-[var(--line-2)] px-6 py-3.5 text-center text-sm font-bold text-ink transition hover:bg-white/5">
                Explore the Platform
              </a>
            </div>
          </div>
          <DashboardMockup />
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-[var(--line)] pt-8 text-xs font-medium text-muted-2">
          <span className="flex items-center gap-2"><ShieldCheck size={14} /> Built for schools, coaches, athletes and parents</span>
          <span className="flex items-center gap-2"><Lock size={14} /> Secure</span>
          <span className="flex items-center gap-2"><Star size={14} /> Built by a working coach</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Privacy by design</span>
        </div>
      </section>

      <FeatureGrid />
      <ProductShowcase />
      <RoleGrid />
      <SportGrid />
      <WhyAltus />

      {/* ── PRICING ── */}
      <section id="pricing" className="border-b border-[var(--line)] px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-blue-2">Pricing</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Priced per school, not per headache.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted">
            Every department is a different size with different needs — pricing is set up front in a short conversation, not buried in a tiered feature table.
          </p>
          <a href="#demo" className="mt-8 inline-block rounded-xl bg-blue px-8 py-3.5 text-sm font-bold text-white transition hover:brightness-110">
            Get pricing for your school
          </a>
        </div>
      </section>

      {/* ── DEMO / CONTACT ── */}
      <section id="demo" className="hero-glow px-6 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-blue-2">Book Your Demo</p>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              See Altus in Action
            </h2>
            <p className="mt-4 max-w-sm text-muted">
              Book a personalised walkthrough for your school sport department.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-2" /> Tailored to your school's needs</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-2" /> See real data and live examples</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-2" /> No obligation, just answers</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
