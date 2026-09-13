import type { Config } from "tailwindcss";

// CSS custom-property helpers — lets Tailwind generate opacity modifiers like
// text-ink/70, bg-paper/50, ring-clay/20, etc.
function cssVar(name: string) {
  return `rgb(var(--${name}) / <alpha-value>)`;
}

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    /* ── Reset Tailwind defaults we don't want bleeding through ── */
    extend: {

      /* ── Colors ──────────────────────────────────────────────── */
      colors: {
        paper:  cssVar("paper"),
        ink:    cssVar("ink"),
        mute:   cssVar("mute"),
        line:   cssVar("line"),
        clay: {
          DEFAULT: cssVar("clay"),
          dim:     cssVar("clay-dim"),
        },
      },

      /* ── Typography ──────────────────────────────────────────── */
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono:    ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },

      /* ── 4-px grid spacing extras ────────────────────────────── */
      spacing: {
        // 4-px base units beyond Tailwind's defaults
        "4.5": "18px",   // 4.5 × 4
        "18":  "72px",   // 18 × 4
        "22":  "88px",   // 22 × 4
      },

      /* ── Sizing for 44 px touch targets ─────────────────────── */
      minHeight: { touch: "44px" },
      minWidth:  { touch: "44px" },
      height:    { touch: "44px" },

      /* ── Max widths ──────────────────────────────────────────── */
      maxWidth: {
        prose: "68ch",
        reading: "56ch",
      },

      /* ── Box shadows ─────────────────────────────────────────── */
      boxShadow: {
        focus:
          "0 0 0 2px rgb(var(--paper)), 0 0 0 4px rgb(var(--ink))",
        "focus-dark":
          "0 0 0 2px rgb(var(--ink)), 0 0 0 4px rgb(var(--paper))",
        "clay-glow":
          "0 4px 20px rgba(196,92,38,0.22)",
      },

      /* ── Transitions ─────────────────────────────────────────── */
      transitionDuration: {
        "80":  "80ms",
        "120": "120ms",
        "200": "200ms",
      },

      /* ── Animations ──────────────────────────────────────────── */
      animation: {
        blink:   "blink 1s step-end infinite",
        shimmer: "shimmer 1.4s ease-in-out infinite",
        rise:    "rise 200ms ease-out both",
        "fade-in":"fade-in 300ms ease-out both",
      },

      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
    },
  },

  plugins: [],
};

export default config;
