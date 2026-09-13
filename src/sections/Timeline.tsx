import { timeline } from "@/data";
import type { TimelineItem } from "@/data";

const TYPE_LABEL: Record<TimelineItem["type"], string> = {
  work:      "Work",
  education: "School",
  community: "Community",
};

export default function Timeline() {
  return (
    <section id="timeline" className="section-container border-t border-line">
      <p className="section-label">04 — Path</p>
      <h2 className="section-heading">Where I learned it</h2>
      <p className="section-sub">
        Lab bench, lecture hall, and the whiteboard after hours.
      </p>

      <ol className="mt-12 border-t border-ink" aria-label="Career and education timeline">
        {timeline.map((item) => (
          <li
            key={item.id}
            className="row md:grid md:grid-cols-12 md:gap-8"
          >
            {/* Left: type + period */}
            <div className="mb-3 md:col-span-3 md:mb-0">
              <p className="font-mono text-[11px] uppercase tracking-wider text-clay">
                {TYPE_LABEL[item.type]}
              </p>
              <p className="mt-1 font-mono text-xs text-mute">{item.period}</p>
            </div>

            {/* Right: content */}
            <div className="md:col-span-9">
              <h3 className="font-display text-[1.375rem] font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-mute">
                {item.org} · {item.location}
              </p>
              <ul className="mt-4 space-y-2" aria-label="Highlights">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-baseline gap-2 text-sm leading-relaxed text-mute">
                    <span aria-hidden className="shrink-0 text-clay">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
