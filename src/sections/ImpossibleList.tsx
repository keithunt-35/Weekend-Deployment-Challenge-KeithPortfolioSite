import { Check } from "lucide-react";
import { impossibleList } from "@/data";

export default function ImpossibleList() {
  const items = impossibleList.flatMap((c) => c.items);
  const done  = items.filter((i) => i.done).length;
  const pct   = Math.round((done / items.length) * 100);

  return (
    <section id="impossible-list" className="section-container border-t border-line">
      <p className="section-label">06 — Ambition</p>
      <h2 className="section-heading">The impossible list</h2>
      <p className="section-sub">
        Not a bucket list. Targets that still sting a little. Updated when one gets
        crossed off.
      </p>

      {/* Progress bar */}
      <div className="mt-8 max-w-xs">
        <div className="mb-2 flex justify-between font-mono text-[11px] text-mute">
          <span>{done} of {items.length} done</span>
          <span>{pct}%</span>
        </div>
        <div
          className="h-[3px] w-full bg-line"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${pct}% of impossible list completed`}
        >
          <div
            className="h-full bg-ink transition-[width] duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {impossibleList.map((category) => (
          <div key={category.label}>
            <h3 className="border-b border-ink pb-3 font-display text-xl font-semibold text-ink">
              {category.label}
            </h3>
            <ul aria-label={category.label} className="mt-1">
              {category.items.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 border-b border-line py-3
                             transition-colors duration-120 hover:bg-ink/[0.025]"
                >
                  {/* Checkbox-style indicator — 20×20 touch area */}
                  <span
                    className={`mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center
                                border transition-colors duration-120
                                ${item.done
                                  ? "border-ink bg-ink text-paper"
                                  : "border-line group-hover:border-ink/40"}`}
                    aria-hidden
                  >
                    {item.done && <Check size={11} strokeWidth={3} />}
                  </span>
                  <span
                    className={`text-sm leading-relaxed transition-colors duration-120 ${
                      item.done
                        ? "text-mute line-through decoration-mute/60"
                        : "text-ink"
                    }`}
                  >
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
