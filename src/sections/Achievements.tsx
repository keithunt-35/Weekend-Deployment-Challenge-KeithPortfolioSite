import { achievements } from "@/data";

const testimonials = [
  {
    quote:
      "Keith doesn’t wait for permission. He builds it, then teaches everyone else how.",
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

      <ul className="mt-10 border-t border-ink">
        {achievements.map((a) => (
          <li
            key={a.title}
            className="grid gap-2 border-b border-line py-5 transition-colors hover:bg-ink/[0.03] sm:grid-cols-12 sm:items-baseline"
          >
            <span className="font-mono text-xs text-mute sm:col-span-2">{a.year}</span>
            <span className="font-medium text-ink sm:col-span-5">{a.title}</span>
            <span className="text-sm text-mute sm:col-span-5">{a.detail}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2 md:gap-16">
        {testimonials.map((t) => (
          <blockquote key={t.author}>
            <p className="font-display text-2xl font-medium leading-snug text-ink">
              “{t.quote}”
            </p>
            <footer className="mt-4 font-mono text-xs uppercase tracking-wider text-mute">
              {t.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
