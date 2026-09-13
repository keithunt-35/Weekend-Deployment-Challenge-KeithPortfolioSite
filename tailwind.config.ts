import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "#f4f0e6",
        ink: "#12110f",
        mute: "#6b655c",
        line: "#d8d1c3",
        clay: {
          DEFAULT: "#c45c26",
          dim: "#9e471c",
        },
        brand: {
          400: "#c45c26",
          500: "#c45c26",
        },
      },
      minHeight: {
        touch: "44px",
      },
      minWidth: {
        touch: "44px",
      },
      boxShadow: {
        focus: "0 0 0 2px #f4f0e6, 0 0 0 4px #12110f",
        "focus-invert": "0 0 0 2px #12110f, 0 0 0 4px #f4f0e6",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        shimmer: "shimmer 1.2s ease-in-out infinite",
        rise: "rise 180ms ease-out",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
