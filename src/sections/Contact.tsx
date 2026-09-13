"use client";

import { useState } from "react";
import { siteConfig } from "@/data";
import { FormSkeleton } from "@/components/ui/Skeleton";

const SUBJECTS = [
  "Internship or job",
  "Let's collaborate",
  "Hackathon team",
  "Open source",
  "Just saying hi",
];

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim())               e.name    = "Add your name so I know who I'm writing back to.";
  else if (f.name.trim().length < 2) e.name    = "That name's a little short.";
  if (!f.email.trim())               e.email   = "I need an email address to reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
                                     e.email   = "That doesn't look like a valid email.";
  if (!f.subject)                    e.subject = "Pick a topic — it helps me reply faster.";
  if (!f.message.trim())             e.message = "Tell me what you're working on, even one sentence.";
  else if (f.message.trim().length < 12)
                                     e.message = "Give me a bit more to go on.";
  return e;
}

/* ── Reusable text field ──────────────────────────────────────────────────── */
function Field({
  id, label, value, onChange, onBlur, error, placeholder, type = "text",
}: {
  id: string; label: string; value: string;
  onChange: (v: string) => void; onBlur: () => void;
  error?: string; placeholder?: string; type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[11px] uppercase tracking-wider text-mute"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="field"
      />
      {error && (
        <p
          id={`${id}-err`}
          role="alert"
          className="flex items-center gap-1.5 text-sm text-clay animate-rise"
        >
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────────────────────── */
export default function Contact() {
  const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };
  const [form, setForm]       = useState<Fields>(EMPTY);
  const [errors, setErrors]   = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);

  const setField = (name: keyof Fields, value: string) => {
    const next = { ...form, [name]: value };
    setForm(next);
    if (touched[name]) setErrors(validate(next));
  };

  const blur = (name: keyof Fields) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate({ ...form, [name]: form[name] }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-container border-t border-line">
      <p className="section-label">07 — Contact</p>
      <h2 className="section-heading">Let&apos;s build something</h2>
      <p className="section-sub">
        Internships, collabs, hackathon teams, hard problems. If it sits at the intersection
        of tech and Africa, I want to hear about it.
      </p>

      <div className="mt-12 grid gap-16 lg:grid-cols-12">

        {/* ── Form column ─────────────────────────────────────────────────── */}
        <div className="lg:col-span-7">
          {sent ? (
            /* Success state */
            <div className="animate-rise border border-ink px-6 py-12 sm:px-10">
              <p className="font-display text-[1.75rem] font-semibold leading-tight text-ink">
                Got it.{" "}
                <span className="text-clay">I&apos;ll reply within 48 hours.</span>
              </p>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-mute">
                Meanwhile, the repos are public — poke around.
              </p>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex"
              >
                Open GitHub ↗
              </a>
            </div>
          ) : loading ? (
            /* Loading skeleton */
            <FormSkeleton />
          ) : (
            /* Form */
            <form
              onSubmit={submit}
              noValidate
              className="space-y-6"
              aria-label="Contact form"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  id="name" label="Your name"
                  value={form.name} error={errors.name}
                  placeholder="Ada Okonkwo"
                  onChange={(v) => setField("name", v)}
                  onBlur={() => blur("name")}
                />
                <Field
                  id="email" label="Email" type="email"
                  value={form.email} error={errors.email}
                  placeholder="you@company.com"
                  onChange={(v) => setField("email", v)}
                  onBlur={() => blur("email")}
                />
              </div>

              {/* Subject select */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="font-mono text-[11px] uppercase tracking-wider text-mute"
                >
                  What&apos;s this about?
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  aria-invalid={Boolean(errors.subject) || undefined}
                  aria-describedby={errors.subject ? "subject-err" : undefined}
                  onChange={(e) => setField("subject", e.target.value)}
                  onBlur={() => blur("subject")}
                  className="field appearance-none"
                >
                  <option value="">Choose one</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.subject && (
                  <p
                    id="subject-err"
                    role="alert"
                    className="flex items-center gap-1.5 text-sm text-clay animate-rise"
                  >
                    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message textarea */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] uppercase tracking-wider text-mute"
                >
                  The note
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="What you're working on, what you need, or just hello."
                  value={form.message}
                  aria-invalid={Boolean(errors.message) || undefined}
                  aria-describedby={errors.message ? "message-err" : undefined}
                  onChange={(e) => setField("message", e.target.value)}
                  onBlur={() => blur("message")}
                  className="field min-h-[160px] resize-y"
                />
                {errors.message && (
                  <p
                    id="message-err"
                    role="alert"
                    className="flex items-center gap-1.5 text-sm text-clay animate-rise"
                  >
                    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                Send the note
              </button>
            </form>
          )}
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="space-y-10 lg:col-span-5" aria-label="Contact details">
          {/* Direct links */}
          <div>
            <h3 className="border-b border-ink pb-3 font-display text-xl font-semibold text-ink">
              Reach me directly
            </h3>
            <ul className="divide-y divide-line">
              {(
                [
                  [siteConfig.email,  `mailto:${siteConfig.email}`],
                  ["keithunt-35",      siteConfig.github],
                  ["@keithunt_35",     siteConfig.twitter],
                ] as [string, string][]
              ).map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center text-sm text-mute
                               underline-offset-4 transition-colors duration-[120ms]
                               hover:text-ink hover:underline
                               focus-visible:outline-none focus-visible:text-ink focus-visible:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Response time */}
          <div>
            <h3 className="border-b border-ink pb-3 font-display text-xl font-semibold text-ink">
              Usually back in 48 hours
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              Urgent? Email is fastest. Open to internships, contract work, hackathons, and
              developer talks.
            </p>
          </div>

          {/* Open to */}
          <ul className="space-y-2" aria-label="What I'm open to">
            {[
              "Internships",
              "Freelance / contract work",
              "Hackathon collaborations",
              "Open-source contributions",
              "Developer community talks",
            ].map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-2 text-sm text-mute"
              >
                <span aria-hidden className="shrink-0 text-clay">—</span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
