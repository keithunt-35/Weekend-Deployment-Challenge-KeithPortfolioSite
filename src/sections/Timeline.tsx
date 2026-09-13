import { timeline } from "@/data";
import type { TimelineItem } from "@/data";

const TYPE_LABEL: Record<TimelineItem["type"], string> = {
  work: "Work",
  education: "School",
  community: "Community",
};

export default function Timeline() {
  return (
    <section id="timeline" className="section-container border-t border-line">
      <p className="section-label">04 — Path</p>
      <h2 className="section-heading">Where I learned it</h2>
      <p className="section-sub">Lab bench, lecture hall, and the whiteboard after hours.</p>

      <ol className="mt-12 border-t border-ink">
        {timeline.map((item) => (
          <li
            key={item.id}
            className="grid gap-4 border-b border-line py-8 transition-colors hover:bg-ink/[0.03] md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-wider text-clay">
                {TYPE_LABEL[item.type]}
              </p>
              <p className="mt-1 font-mono text-sm text-mute">{item.period}</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-mute">
                {item.org} · {item.location}
              </p>
              <ul className="mt-4 space-y-2">
                {item.bullets.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-mute">
                    — {b}
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
