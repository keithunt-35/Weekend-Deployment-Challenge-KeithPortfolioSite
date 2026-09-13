import { stats } from "@/data";

const facts = [
  ["Location", "Kampala, Uganda"],
  ["Degree", "BSc Software Engineering"],
  ["School", "Makerere University"],
  ["Languages", "English · Runyoro · Luganda"],
  ["Sport", "Assistant tennis captain"],
  ["Email", "keithunt35@duck.com"],
];

const now = [
  "Shipping 12 projects in 12 months",
  "Going deeper on Solidity and AWS",
  "Training for competitive tennis",
];

export default function About() {
  return (
    <section id="about" className="section-container border-t border-ink">
      <p className="section-label">01 — Story</p>
      <h2 className="section-heading">Tennis first. Then the debug.</h2>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-4 text-base leading-[1.7] text-mute lg:col-span-7">
          <p>I didn&apos;t plan to become a developer. I planned to beat everyone on the tennis court.</p>
          <p>
            Growing up in Uganda, competing and building turned out to be the same muscle: patience,
            strategy, and losing badly before you win cleanly.
          </p>
          <p>
            I&apos;m in year two of a{" "}
            <span className="text-ink">BSc in Software Engineering at Makerere COCIS</span> — working
            the edges: <span className="text-ink">IoT</span>, <span className="text-ink">Web3</span>,
            and <span className="text-ink">machine learning</span>. The IoT-ra Lab internship meant
            embedded hardware, hackathons, and more than one board that smelled like smoke.
          </p>
          <p>
            I also run community for Web3 Club Makerere and GDG on Campus — which mostly means
            proving smart contracts aren&apos;t magic tricks. Off court I&apos;m assistant captain of
            the Makerere tennis team.
          </p>
          <p className="text-ink">
            If you&apos;re building something ambitious and need someone who likes hard problems —
            say hello.
          </p>
        </div>

        <aside className="lg:col-span-5">
          <dl className="divide-y divide-line border-y border-line">
            {facts.map(([label, value]) => (
              <div key={label} className="grid grid-cols-3 gap-4 py-3">
                <dt className="font-mono text-xs uppercase tracking-wider text-mute">{label}</dt>
                <dd className="col-span-2 text-sm font-medium text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-clay">Right now</p>
          <ul className="mt-3 space-y-2">
            {now.map((item) => (
              <li key={item} className="text-sm text-mute">
                — {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-16 grid grid-cols-2 border-y border-ink sm:grid-cols-3 lg:grid-cols-5">
        {stats.map(({ label, value }, i) => (
          <div
            key={label}
            className={`px-4 py-6 ${i !== 0 ? "sm:border-l sm:border-line" : ""} ${
              i >= 2 ? "border-t border-line sm:border-t-0" : ""
            } ${i >= 3 ? "lg:border-t-0" : ""}`}
          >
            <p className="font-display text-3xl font-semibold text-ink">{value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-mute">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
