type SkillGroupProps = {
  title: string;
  items: readonly string[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-lg font-semibold text-[var(--text-strong)]">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--line)] bg-[var(--chip)] px-4 py-2 text-sm text-[var(--text-muted)]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
