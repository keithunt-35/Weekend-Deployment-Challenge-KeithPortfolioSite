import { Check } from "lucide-react";
import { impossibleList } from "@/data";

export default function ImpossibleList() {
  const items = impossibleList.flatMap((c) => c.items);
  const done = items.filter((i) => i.done).length;
  const pct = Math.round((done / items.length) * 100);

  return (
    <section id="impossible-list" className="section-container border-t border-line">
      <p className="section-label">06 — Ambition</p>
      <h2 className="section-heading">The impossible list</h2>
      <p className="section-sub">
        Not a bucket list. Targets that still sting a little. Updated when one gets crossed off.
      </p>

      <div className="mt-8 max-w-md">
        <div className="mb-2 flex justify-between font-mono text-xs text-mute">
          <span>
            {done} of {items.length} done
          </span>
          <span>{pct}%</span>
        </div>
        <div className="h-1 bg-line" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-ink transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {impossibleList.map((category) => (
          <div key={category.label}>
            <h3 className="border-b border-ink pb-3 font-display text-2xl font-semibold">
              {category.label}
            </h3>
            <ul>
              {category.items.map((item) => (
                <li key={item.text} className="flex items-start gap-3 border-b border-line py-3">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border ${
                      item.done ? "border-ink bg-ink text-paper" : "border-line"
                    }`}
                    aria-hidden
                  >
                    {item.done && <Check size={12} strokeWidth={3} />}
                  </span>
                  <span className={`text-sm leading-relaxed ${item.done ? "text-mute line-through" : "text-ink"}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
