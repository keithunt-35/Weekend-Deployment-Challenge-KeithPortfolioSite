import { achievements } from "@/data";

const TESTIMONIALS = [
  {
    quote:
      "Keith doesn't wait for permission. He builds it, then teaches everyone else how.",
    author: "Fellow student, Makerere COCIS",
  },
  {
    quote: "His Web3 workshop was the first time blockchain actually made sense to me.",
    author: "GDG on Campus attendee",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-container border-t border-line">
      <p className="section-label">05 — Proof</p>
      <h2 className="section-heading">Worth mentioning</h2>

      {/* Achievement rows */}
      <ul className="mt-10 border-t border-ink" aria-label="Achievements">
        {achievements.map((a) => (
          <li
            key={a.title}
            className="row grid gap-2 sm:grid-cols-12 sm:items-baseline"
          >
            <span className="font-mono text-[11px] text-mute sm:col-span-2">{a.year}</span>
            <span className="font-medium text-ink sm:col-span-5">{a.title}</span>
            <span className="text-sm text-mute sm:col-span-5">{a.detail}</span>
          </li>
        ))}
      </ul>

      {/* Pull-quotes */}
      <div className="mt-14 grid gap-10 border-t border-line pt-12 md:grid-cols-2 md:gap-16">
        {TESTIMONIALS.map((t) => (
          <blockquote key={t.author}>
            {/* Decorative open-quote mark */}
            <span
              aria-hidden
              className="block font-display text-5xl leading-none text-clay/30 select-none"
            >
              "
            </span>
            <p className="mt-2 font-display text-[1.375rem] font-medium leading-snug text-ink">
              {t.quote}
            </p>
            <footer className="mt-5 font-mono text-[11px] uppercase tracking-wider text-mute">
              — {t.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
