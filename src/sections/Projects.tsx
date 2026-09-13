"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data";
import type { Project } from "@/data";
import EmptyState from "@/components/ui/EmptyState";

const FILTERS = ["All", "Web3", "IoT", "Full-Stack", "Open Source", "Cloud"] as const;

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <article className="link-row">
      <div className="absolute left-0 top-0 h-full w-0 bg-clay transition-all duration-150 group-hover:w-1" />
      <div className="flex flex-col gap-3 pl-0 sm:flex-row sm:gap-8">
        <span className="font-mono text-xs text-mute sm:w-8 sm:pt-1">{n}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-clay">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-mute">{project.year}</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-mute">
              {project.status}
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{project.summary}</p>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-clay">Problem</dt>
              <dd className="mt-1 text-mute">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-clay">Fix</dt>
              <dd className="mt-1 text-mute">{project.solution}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-clay">Result</dt>
              <dd className="mt-1 text-mute">{project.outcome}</dd>
            </div>
          </dl>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <span key={tech} className="font-mono text-[11px] text-mute">
                {tech}
              </span>
            ))}
            <span className="mx-1 hidden text-line sm:inline">/</span>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-touch items-center text-sm font-medium text-ink underline-offset-4 hover:underline"
              >
                Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-touch items-center text-sm font-medium text-ink underline-offset-4 hover:underline"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(
      (p) =>
        p.tags.some((t) => t.toLowerCase() === filter.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase())) ||
        p.stack.some((s) => s.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter]);

  return (
    <section id="projects" className="section-container border-t border-line">
      <p className="section-label">03 — Work</p>
      <h2 className="section-heading">Shipped, not hypothetical</h2>
      <p className="section-sub">Experiments, lab pieces, and tools I actually put in front of people.</p>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter work">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`chip shrink-0 ${filter === f ? "chip-active" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-4 border-t border-ink">
        {visible.length === 0 ? (
          <div className="py-8">
            <EmptyState
              title="Nothing in this lane"
              body="That filter is empty. Try another, or skip straight to the repos."
              action={
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setFilter("All")} className="btn-primary">
                    Show everything
                  </button>
                  <a
                    href="https://github.com/keithunt-35"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Open GitHub
                  </a>
                </div>
              }
            />
          </div>
        ) : (
          visible.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))
        )}
      </div>

      <a
        href="https://github.com/keithunt-35"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-10"
      >
        All 50+ repos on GitHub
      </a>
    </section>
  );
}
