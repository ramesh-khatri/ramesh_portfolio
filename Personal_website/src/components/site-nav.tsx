const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[color:var(--nav)]/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-strong)]">
          Ramesh Khatri
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[var(--text-muted)] transition hover:text-[var(--text-strong)]">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
