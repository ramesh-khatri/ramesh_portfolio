type ProjectCardProps = {
  name: string;
  description: string;
};

export function ProjectCard({ name, description }: ProjectCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
      <h3 className="text-xl font-semibold text-[var(--text-strong)]">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
    </article>
  );
}
