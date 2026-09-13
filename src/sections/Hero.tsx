"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data";

const ROLES = ["Web3", "IoT", "ML", "Full-stack"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section
      data-theme="ink"
      className="relative flex min-h-[100svh] flex-col justify-end bg-ink text-paper"
    >
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-32 sm:px-8 sm:pb-20">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-paper/55">
          Kampala · Makerere · Open to work
        </p>

        <h1 className="max-w-4xl font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Building the tech
          <br />
          <span className="text-clay">Africa deserves.</span>
        </h1>

        <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/70">
          {siteConfig.pitch}
        </p>

        <p className="mt-6 font-mono text-sm text-paper/55">
          Keith Tugume ·{" "}
          <span className="text-paper">
            {displayed}
            <span className="animate-blink">▌</span>
          </span>
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex min-h-touch items-center justify-center bg-paper px-6 text-sm font-semibold text-ink transition-colors hover:bg-clay hover:text-paper"
          >
            See the work
          </button>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex min-h-touch items-center justify-center border border-paper/30 px-6 text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            Read the story
          </button>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-touch items-center px-2 text-sm text-paper/60 underline-offset-4 hover:text-paper hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Continue to the story"
        className="absolute bottom-6 right-4 inline-flex min-h-touch min-w-touch items-center justify-center text-paper/50 transition-colors hover:text-paper sm:right-8"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
