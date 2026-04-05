type ExperienceBlockProps = {
  company: string;
  location: string;
  roles: readonly {
    title: string;
    period: string;
    points: readonly string[];
  }[];
};

export function ExperienceBlock({ company, location, roles }: ExperienceBlockProps) {
  return (
    <article className="grid gap-6 border-t border-[var(--line)] py-8 md:grid-cols-[260px_minmax(0,1fr)] md:py-10">
      <div className="md:sticky md:top-24 md:self-start">
        <h3 className="text-2xl font-semibold text-[var(--text-strong)]">{company}</h3>
        <p className="mt-2 text-sm text-[var(--text-muted)]">{location}</p>
      </div>
      <div className="relative pl-6">
        <div className="absolute bottom-0 left-[7px] top-1 w-px bg-[var(--line)]" />
        <div className="space-y-6">
          {roles.map((role) => (
            <div key={`${role.title}-${role.period}`} className="relative rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
              <span className="absolute left-[-22px] top-7 h-4 w-4 rounded-full border-4 border-[var(--page)] bg-[var(--accent)]" />
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-[var(--text-strong)]">{role.title}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{company}</p>
                </div>
                <p className="text-sm font-medium text-[var(--text-muted)] md:text-right">{role.period}</p>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
                {role.points.map((point) => (
                  <li key={point} className="border-l border-[var(--line)] pl-4">
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
