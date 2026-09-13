import { skillGroups } from "@/data";
import type { SkillGroup } from "@/data";

const LEVEL: Record<string, number> = { Advanced: 3, Intermediate: 2, Familiar: 1 };

function Group({ group }: { group: SkillGroup }) {
  return (
    <div>
      <h3 className="border-b border-ink pb-3 font-display text-2xl font-semibold text-ink">
        {group.label}
      </h3>
      <ul>
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className="group grid gap-2 border-b border-line py-4 transition-colors hover:bg-ink/[0.03] sm:grid-cols-12 sm:items-baseline sm:gap-4"
          >
            <div className="sm:col-span-4">
              <p className="font-medium text-ink">{skill.name}</p>
              <div className="mt-2 flex gap-1" aria-label={skill.level}>
                {[1, 2, 3].map((n) => (
                  <span
                    key={n}
                    className={`h-1.5 w-4 ${n <= LEVEL[skill.level] ? "bg-ink" : "bg-line"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-mute sm:col-span-8">{skill.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-container border-t border-line">
      <p className="section-label">02 — Tools</p>
      <h2 className="section-heading">What I reach for</h2>
      <p className="section-sub">Not a laundry list. The stack I actually ship with — and why.</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-8">
        {skillGroups.map((group) => (
          <Group key={group.label} group={group} />
        ))}
      </div>
    </section>
  );
}
