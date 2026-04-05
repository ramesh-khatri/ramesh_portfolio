import Image from "next/image";
import { ExperienceBlock } from "@/components/experience-block";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionShell } from "@/components/section-shell";
import { SiteNav } from "@/components/site-nav";
import { SkillGroup } from "@/components/skill-group";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--text-strong)]">
      <SiteNav />
      <main className="flex flex-col gap-24 px-4 py-8 md:px-6 md:py-10">
        <Hero />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-24">
          <SectionShell
            id="about"
            title="About"
            description="Senior QA experience across automation, release quality, and practical delivery support."
          >
            <div className="space-y-6">
              <div className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr] xl:items-center">
                <article className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_14px_34px_rgba(15,23,42,0.05)] md:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Profile</p>
                  <p className="mt-6 max-w-none text-[1.2rem] leading-10 text-[var(--text-muted)] md:text-[1.24rem]">
                    {portfolio.person.about}
                  </p>
                </article>
                <article className="flex justify-center xl:justify-end">
                  <div className="relative w-full max-w-[280px] overflow-hidden rounded-[1.8rem] bg-[var(--page)] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                    <div className="absolute inset-x-8 top-5 h-16 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.1)_0%,rgba(29,78,216,0)_72%)] blur-2xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),rgba(247,249,252,0.22)_55%,rgba(247,249,252,0)_100%)]" />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[var(--page)]">
                      <Image
                        src="/images/ramesh-about-headshot.png"
                        alt="Portrait of Ramesh Khatri"
                        fill
                        className="object-contain object-bottom drop-shadow-[0_26px_34px_rgba(15,23,42,0.22)]"
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Core strengths</p>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--text-muted)]">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>Maintainable UI and API automation frameworks</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>Regression strategy that supports dependable releases</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>Hands-on verification across web, mobile, and API workflows</span>
                    </li>
                  </ul>
                </article>
                <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Current focus</p>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--text-muted)]">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>Using AI to improve testing workflows and QA efficiency</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>Cross-functional QA leadership and mentoring</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>Improving release confidence through practical quality ownership</span>
                    </li>
                  </ul>
                </article>
                <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)] md:col-span-2 xl:col-span-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Working style</p>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--text-muted)]">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>Hands-on with tooling and close to the delivery process</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>Focused on QA practices that are practical for real product teams</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>Balanced between quality standards, team velocity, and maintainability</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </SectionShell>

          <SectionShell
            id="experience"
            title="Experience"
            description="Selected roles across QA execution, automation, and leadership."
          >
            <div className="space-y-6">
              {portfolio.experience.map((item) => (
                <ExperienceBlock key={item.company} company={item.company} location={item.location} roles={item.roles} />
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="skills"
            title="Skills"
            description="Core tools and technologies used in day-to-day QA work."
          >
            <div className="grid gap-5 md:grid-cols-2">
              {portfolio.skillGroups.map((group) => (
                <SkillGroup key={group.title} title={group.title} items={group.items} />
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="projects"
            title="Projects"
            description="Selected products supported through QA and testing work."
          >
            <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <h3 className="text-xl font-semibold text-[var(--text-strong)]">Selected achievements</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
                  {portfolio.achievements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {portfolio.projects.map((project) => (
                  <ProjectCard key={project.name} name={project.name} description={project.description} />
                ))}
              </div>
            </div>
          </SectionShell>

          <SectionShell
            id="education"
            title="Education"
          >
            <div className="grid gap-5 md:grid-cols-2">
              {portfolio.education.map((item) => (
                <article key={item.institution} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent)]">{item.period}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--text-strong)]">{item.degree}</h3>
                  <p className="mt-4 text-sm text-[var(--text-muted)]">{item.institution}</p>
                  <p className="text-sm text-[var(--text-muted)]">{item.location}</p>
                </article>
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="contact"
            title="Contact"
            description="Public links included below are limited to the sources you provided or resume-backed details."
          >
            <div className="rounded-[1.75rem] border border-slate-300/60 bg-slate-100 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Get in touch</p>
                  <div className="h-5" />
                  <h3 className="text-3xl font-semibold text-[var(--text-strong)]">{portfolio.person.name}</h3>
                  <p className="mt-2 text-base text-[var(--text-muted)]">{portfolio.person.headline}</p>
                  <div className="h-4" />
                  <p className="max-w-xl text-base leading-8 text-[var(--text-muted)]">
                    Open to conversations around QA leadership, automation strategy, software quality, release confidence, and collaborative product delivery across modern engineering teams.
                  </p>
                </div>
                <div className="grid gap-4">
                  <a
                    href={`mailto:${portfolio.person.email}`}
                    className="rounded-[1.25rem] border border-slate-400/70 bg-slate-200/85 px-5 py-4 transition hover:bg-slate-200"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Email</p>
                    <p className="mt-2 text-base font-medium text-[var(--text-strong)]">{portfolio.person.email}</p>
                  </a>
                  <a
                    href={`tel:${portfolio.person.phone}`}
                    className="rounded-[1.25rem] border border-slate-400/70 bg-slate-200/85 px-5 py-4 transition hover:bg-slate-200"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Phone</p>
                    <p className="mt-2 text-base font-medium text-[var(--text-strong)]">{portfolio.person.phone}</p>
                  </a>
                  <a
                    href={portfolio.person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.25rem] border border-slate-400/70 bg-slate-200/85 px-5 py-4 transition hover:bg-slate-200"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">LinkedIn</p>
                    <p className="mt-2 text-base font-medium text-[var(--text-strong)]">View profile</p>
                  </a>
                  <a
                    href={portfolio.person.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.25rem] border border-slate-400/70 bg-slate-200/85 px-5 py-4 transition hover:bg-slate-200"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">GitHub</p>
                    <p className="mt-2 text-base font-medium text-[var(--text-strong)]">Browse repositories</p>
                  </a>
                </div>
              </div>
            </div>
          </SectionShell>
        </div>
      </main>
    </div>
  );
}
