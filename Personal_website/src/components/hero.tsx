import Image from "next/image";

import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { person, highlights } = portfolio;

  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--card)] shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/ramesh-portrait-hero-cropped.jpg"
          alt="Ramesh Khatri working on a laptop"
          fill
          priority
          className="object-cover object-[58%_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.92)_0%,rgba(248,250,252,0.82)_38%,rgba(248,250,252,0.52)_58%,rgba(255,255,255,0.18)_72%,rgba(255,255,255,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.08),transparent_30%)]" />
      </div>
      <div className="relative px-6 py-6 md:px-10 md:py-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            Principal Software QA Engineer
          </p>
          <div className="h-7 md:h-10" />
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-[var(--text-strong)] md:text-[5.1rem]">
            Quality leadership with a hands-on Automation mindset.
          </h1>
          <div className="h-8 md:h-10" />
          <div className="max-w-2xl space-y-5">
            <p className="text-lg leading-8 text-[var(--text-muted)]">{person.heroIntro}</p>
            <p className="text-base leading-8 text-[var(--text-muted)]">{person.summary}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full border border-[var(--line)] bg-[var(--chip)] px-6 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:translate-y-[-1px] hover:bg-white"
            >
              Contact Me
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:bg-white"
            >
              View LinkedIn
            </a>
            <a
              href="/documents/ramesh-khatri-cv.pdf"
              download="Ramesh_Khatri_CV.pdf"
              className="rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:bg-white"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.25rem] border border-[var(--line)] bg-white/76 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Based In</p>
            <p className="mt-2 text-lg font-semibold text-[var(--text-strong)]">{person.location}</p>
          </div>
          {highlights.map((item) => (
            <div key={item.label} className="rounded-[1.25rem] border border-[var(--line)] bg-white/76 p-5 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-[var(--text-strong)]">{item.value}</p>
              <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
