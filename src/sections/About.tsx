import Image from "next/image";
import { stats } from "@/data";

const FACTS = [
  ["Location",  "Kampala, Uganda"],
  ["Degree",    "BSc Software Engineering"],
  ["School",    "Makerere University"],
  ["Languages", "English · Runyoro · Luganda"],
  ["Sport",     "Assistant tennis captain"],
  ["Email",     "keithunt35@duck.com"],
] as const;

const NOW = [
  "Shipping 12 projects in 12 months",
  "Going deeper on Solidity and AWS",
  "Training for competitive tennis",
];

export default function About() {
  return (
    <section id="about" className="section-container border-t border-line">
      <p className="section-label">01 — Story</p>
      <h2 className="section-heading">Tennis first. Then the debug.</h2>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Bio */}
        <div className="space-y-5 text-[1.0625rem] leading-[1.7] text-mute lg:col-span-7">
          <p>
            I didn&apos;t plan to become a developer. I planned to beat everyone on the tennis
            court.
          </p>
          <p>
            Growing up in Uganda, competing and building turned out to use the same muscle:
            patience, strategy, and losing badly before you win cleanly.
          </p>
          <p>
            I&apos;m in year two of a{" "}
            <span className="text-ink">BSc in Software Engineering at Makerere COCIS</span> —
            working the edges:{" "}
            <span className="text-ink">IoT</span>,{" "}
            <span className="text-ink">Web3</span>, and{" "}
            <span className="text-ink">machine learning</span>. The IoT-ra Lab internship meant
            embedded hardware, hackathons, and more than one board that smelled like smoke.
          </p>
          <p>
            I run community for Web3 Club Makerere and GDG on Campus — which mostly means
            proving smart contracts aren&apos;t magic tricks. Off court I&apos;m assistant
            captain of the Makerere tennis team.
          </p>
          <p className="text-ink font-medium">
            If you&apos;re building something ambitious and need someone who likes hard
            problems — say hello.
          </p>
        </div>

        {/* Facts sidebar */}
        <aside className="lg:col-span-5" aria-label="Quick facts">
          <dl className="divide-y divide-line border-y border-line">
            {FACTS.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[6rem_1fr] gap-4 py-3
                           transition-colors duration-120 hover:bg-ink/[0.025]"
              >
                <dt className="self-center font-mono text-[11px] uppercase tracking-wider text-mute">
                  {label}
                </dt>
                <dd className="self-center text-sm font-medium text-ink">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-clay">
            Right now
          </p>
          <ul className="mt-3 space-y-2" aria-label="Current focus">
            {NOW.map((item) => (
              <li key={item} className="flex items-baseline gap-2 text-sm text-mute">
                <span aria-hidden className="text-clay">—</span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Stats strip — proper border logic with CSS grid */}
      <div
        className="mt-16 grid grid-cols-2 border-t border-ink sm:grid-cols-3 lg:grid-cols-5"
        role="list"
        aria-label="Key stats"
      >
        {stats.map(({ label, value }, i) => (
          <div
            key={label}
            role="listitem"
            className={[
              "px-6 py-7 transition-colors duration-120 hover:bg-ink/[0.025]",
              /* right border on every cell except last in each row */
              "border-b border-line sm:border-b-0 sm:border-r sm:border-line last:border-r-0",
              /* bottom border on first row of 2-col mobile layout */
              i < 2 ? "sm:border-b-0" : "",
            ]
              .join(" ")
              .trim()}
          >
            <p className="font-display text-[2rem] font-semibold leading-none text-ink">
              {value}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-mute">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
