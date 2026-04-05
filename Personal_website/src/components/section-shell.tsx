import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-8 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
        <h2 className="text-3xl font-semibold text-[var(--text-strong)] md:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
