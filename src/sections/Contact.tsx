"use client";

import { useState } from "react";
import { siteConfig } from "@/data";
import { FormSkeleton } from "@/components/ui/Skeleton";

const SUBJECTS = [
  "Internship or job",
  "Let’s collaborate",
  "Hackathon team",
  "Open source",
  "Just saying hi",
];

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

function validate(form: { name: string; email: string; subject: string; message: string }): Errors {
  const next: Errors = {};
  if (!form.name.trim()) next.name = "Add your name so I know who to reply to.";
  else if (form.name.trim().length < 2) next.name = "That name’s a little short.";
  if (!form.email.trim()) next.email = "I need an email to write back.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "That email doesn’t look right.";
  if (!form.subject) next.subject = "Pick a reason — it helps me reply faster.";
  if (!form.message.trim()) next.message = "Tell me what you’re building, even in one sentence.";
  else if (form.message.trim().length < 12) next.message = "Give me a bit more to go on.";
  return next;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const setField = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...form, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(form);
    setTouched({ name: true, email: true, subject: true, message: true });
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-container border-t border-line">
      <p className="section-label">07 — Contact</p>
      <h2 className="section-heading">Let’s build something</h2>
      <p className="section-sub">
        Internships, collabs, hackathon teams, hard problems. If it sits at the edge of tech and
        Africa, I want to hear it.
      </p>

      <div className="mt-12 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {sent ? (
            <div className="animate-rise border border-ink px-6 py-12">
              <p className="font-display text-3xl font-semibold text-ink">Got it. I’ll reply within 48 hours.</p>
              <p className="mt-3 max-w-sm text-sm text-mute">
                Meanwhile, the repos are public — poke around.
              </p>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                Open GitHub
              </a>
            </div>
          ) : loading ? (
            <FormSkeleton />
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Your name"
                  error={errors.name}
                  value={form.name}
                  onChange={(v) => setField("name", v)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  placeholder="Ada Okonkwo"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  error={errors.email}
                  value={form.email}
                  onChange={(v) => setField("email", v)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block font-mono text-xs uppercase tracking-wider text-mute">
                  What’s this about?
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  onChange={(e) => setField("subject", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, subject: true }))}
                  className="field appearance-none"
                >
                  <option value="">Choose one</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p id="subject-error" role="alert" className="mt-2 text-sm text-clay">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-mute">
                  The note
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="What you’re working on, what you need, or just hello."
                  value={form.message}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={(e) => setField("message", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  className="field min-h-[160px] resize-y"
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-2 text-sm text-clay">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send the note
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-8 lg:col-span-5">
          <div>
            <h3 className="border-b border-ink pb-3 font-display text-xl font-semibold">Reach me directly</h3>
            <ul className="divide-y divide-line">
              {[
                [siteConfig.email, `mailto:${siteConfig.email}`],
                ["keithunt-35", siteConfig.github],
                ["@keithunt_35", siteConfig.twitter],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex min-h-touch items-center text-sm text-mute transition-colors hover:text-ink hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="border-b border-ink pb-3 font-display text-xl font-semibold">I usually reply in 48 hours</h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              Urgent work? Email is fastest. I’m open to internships, contract work, hackathons, and talks.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-wider text-mute">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="field"
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-clay">
          {error}
        </p>
      )}
    </div>
  );
}
