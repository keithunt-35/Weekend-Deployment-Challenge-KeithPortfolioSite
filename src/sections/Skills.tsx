import { skillGroups } from "@/data";
import type { SkillGroup } from "@/data";

const LEVEL_DOTS: Record<string, number> = { Advanced: 3, Intermediate: 2, Familiar: 1 };
const LEVEL_LABEL: Record<string, string> = {
  Advanced:     "Advanced",
  Intermediate: "Intermediate",
  Familiar:     "Familiar",
};

function Group({ group }: { group: SkillGroup }) {
  return (
    <div>
      <h3 className="border-b border-ink pb-3 font-display text-xl font-semibold text-ink">
        {group.label}
      </h3>
      <ul role="list">
        {group.skills.map((skill) => {
          const dots = LEVEL_DOTS[skill.level] ?? 1;
          return (
            <li
              key={skill.name}
              className="group row"
            >
              {/* Mobile: stacked. sm+: 4-col / 8-col split */}
              <div className="grid gap-3 sm:grid-cols-12 sm:items-baseline sm:gap-4 pl-0">
                <div className="sm:col-span-4">
                  {/* Name */}
                  <p className="text-sm font-semibold text-ink">{skill.name}</p>

                  {/* Level dots + label */}
                  <div
                    className="mt-2 flex items-center gap-2"
                    role="img"
                    aria-label={`${skill.level} proficiency`}
                  >
                    <span className="flex gap-[3px]">
                      {[1, 2, 3].map((n) => (
                        <span
                          key={n}
                          className={`inline-block h-[5px] w-[14px] transition-colors duration-120 ${
                            n <= dots ? "bg-ink" : "bg-line"
                          }`}
                        />
                      ))}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-mute">
                      {LEVEL_LABEL[skill.level]}
                    </span>
                  </div>
                </div>

                {/* Notes — always visible, slightly muted */}
                <p className="text-sm leading-relaxed text-mute sm:col-span-8">
                  {skill.notes}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-container border-t border-line">
      <p className="section-label">02 — Tools</p>
      <h2 className="section-heading">What I reach for</h2>
      <p className="section-sub">
        Not a laundry list. The stack I actually ship with — and why.
      </p>

      <div className="mt-12 grid gap-14 lg:grid-cols-3 lg:gap-10">
        {skillGroups.map((group) => (
          <Group key={group.label} group={group} />
        ))}
      </div>
    </section>
  );
}
