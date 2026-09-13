"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data";
import PhotoFrame from "@/components/ui/PhotoFrame";

const ROLES = ["Web3 engineer", "IoT builder", "ML explorer", "Full-stack dev"];

export default function Hero() {
  const [idx, setIdx]           = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 85);
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 48);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, idx]);

  const go = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      data-theme="ink"
      className="relative flex min-h-[100svh] flex-col justify-end bg-ink"
    >
      {/* Noise texture overlay — subtle depth without gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-20 pt-32 sm:px-8 sm:pb-24">
        {/*
         * ── PHOTO INSTRUCTIONS ──────────────────────────────────────────────
         * Drop your headshot at:  public/keith.jpg  (or .png / .webp)
         * Recommended size: 800×1000 px, portrait crop, face near top-centre.
         * The placeholder below shows while the file isn't there yet.
         * ────────────────────────────────────────────────────────────────────
         */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-16">

          {/* ── Left: all text ── */}
          <div className="flex-1">
            {/* Eyebrow */}
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
              Kampala · Makerere · Open to work
            </p>

            {/* Headline */}
            <h1 className="max-w-3xl font-display font-semibold leading-[1.04] tracking-tight text-paper
                           text-[clamp(2.5rem,7vw,5rem)]">
              Building the tech
              <br />
              <span className="text-clay">Africa deserves.</span>
            </h1>

            {/* Pitch */}
            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-[1.65] text-paper/60">
              {siteConfig.pitch}
            </p>

            {/* Typewriter role */}
            <p className="mt-6 font-mono text-sm text-paper/40">
              Keith Tugume ·{" "}
              <span className="text-paper/80">
                {displayed}
                <span className="animate-blink" aria-hidden>▌</span>
              </span>
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button onClick={() => go("#projects")} className="btn-primary">
                See the work
              </button>
              <button
                onClick={() => go("#about")}
                className="btn-secondary border-paper/30 text-paper
                           hover:border-paper hover:bg-paper hover:text-ink"
              >
                Read the story
              </button>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center px-1 text-sm
                           text-paper/40 underline-offset-4
                           transition-colors duration-120 hover:text-paper hover:underline
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* ── Right: headshot ── */}
          {/* Replace /keith.jpg with your actual file name if different */}
          <div className="hidden lg:block lg:w-[280px] lg:shrink-0 xl:w-[320px]">
            <PhotoFrame
              src="/keith.jpg"
              alt="Keith Tugume — software engineer and tennis player in Kampala"
              hint="public/keith.jpg"
              aspectClass="aspect-[4/5]"
              sizes="320px"
              priority
            />
          </div>

        </div>
      </div>

      {/* Scroll nudge */}
      <button
        onClick={() => go("#about")}
        aria-label="Scroll to story"
        className="absolute bottom-8 right-6 inline-flex min-h-[44px] min-w-[44px]
                   items-center justify-center text-paper/30
                   transition-colors duration-120 hover:text-paper
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper
                   sm:right-8"
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </button>
    </section>
  );
}
