const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-slate-900">
          Verdant <span className="text-brand-600">Flow</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="transition hover:text-brand-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Start My Free Trial
        </a>
      </nav>
    </header>
  );
}
