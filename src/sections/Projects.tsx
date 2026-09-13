"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data";
import type { Project } from "@/data";
import EmptyState from "@/components/ui/EmptyState";

const FILTERS = ["All", "Web3", "IoT", "Full-Stack", "Open Source", "Cloud"] as const;
type Filter = (typeof FILTERS)[number];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <article className="row group pl-0">
      <div className="grid gap-4 sm:grid-cols-[2rem_1fr] sm:gap-8">
        {/* Index */}
        <span
          className="hidden font-mono text-xs text-mute transition-colors duration-120
                     group-hover:text-clay sm:block sm:pt-1"
          aria-hidden
        >
          {n}
        </span>

        {/* Body */}
        <div className="min-w-0">
          {/* Title row */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3
              className="font-display text-[1.375rem] font-semibold text-ink
                         transition-colors duration-120 group-hover:text-clay"
            >
              {project.title}
            </h3>
            <span className="font-mono text-xs text-mute">{project.year}</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-mute/70">
              {project.status}
            </span>
          </div>

          {/* Summary */}
          <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-mute">
            {project.summary}
          </p>

          {/* Problem / Fix / Result — hidden on mobile, shown from sm */}
          <dl className="mt-4 hidden gap-4 text-sm sm:grid sm:grid-cols-3">
            {([
              ["Problem", project.problem],
              ["Solution", project.solution],
              ["Result",   project.outcome],
            ] as const).map(([dt, dd]) => (
              <div key={dt}>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-clay">
                  {dt}
                </dt>
                <dd className="mt-1 leading-relaxed text-mute">{dd}</dd>
              </div>
            ))}
          </dl>

          {/* Footer row: stack + links */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            {/* Stack — max 4 items, rest truncated */}
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="font-mono text-[11px] text-mute/70">
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="font-mono text-[11px] text-mute/40">
                +{project.stack.length - 4} more
              </span>
            )}

            {/* Divider */}
            {(project.repoUrl || project.demoUrl) && (
              <span aria-hidden className="text-line/60 select-none">/</span>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-sm font-medium text-ink
                           underline-offset-4 transition-colors duration-120 hover:text-clay
                           hover:underline focus-visible:outline-none focus-visible:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Code ↗
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-sm font-medium text-ink
                           underline-offset-4 transition-colors duration-120 hover:text-clay
                           hover:underline focus-visible:outline-none focus-visible:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    const q = filter.toLowerCase();
    return projects.filter(
      (p) =>
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.stack.some((s) => s.toLowerCase().includes(q)),
    );
  }, [filter]);

  return (
    <section id="projects" className="section-container border-t border-line">
      <p className="section-label">03 — Work</p>
      <h2 className="section-heading">Shipped, not hypothetical</h2>
      <p className="section-sub">
        Experiments, lab pieces, and tools I actually put in front of people.
      </p>

      {/* Filter chips */}
      <div
        className="mt-8 flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Filter projects by category"
      >
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

      {/* Project list */}
      <div
        className="mt-3 border-t border-ink"
        role="tabpanel"
        aria-label={`${filter} projects`}
      >
        {visible.length === 0 ? (
          <div className="py-6">
            <EmptyState
              title="Nothing here yet"
              body="That filter is empty. Try another lane, or head straight to the repos."
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
          visible.map((p, i) => <ProjectRow key={p.slug} project={p} index={i} />)
        )}
      </div>

      {/* Footer CTA */}
      <a
        href="https://github.com/keithunt-35"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-10 inline-flex"
      >
        All 50+ repos on GitHub ↗
      </a>
    </section>
  );
}
