import { siteConfig } from "@/data";

const LINKS = [
  { label: "GitHub",  href: siteConfig.github },
  { label: "X",       href: siteConfig.twitter },
  { label: "Email",   href: `mailto:${siteConfig.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-10
                   sm:grid-cols-3 sm:items-center sm:px-8"
      >
        {/* Brand */}
        <p className="font-display text-base font-semibold text-ink">
          Keith Tugume
        </p>

        {/* Links — centred on desktop */}
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-1 sm:justify-center">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center px-3 text-sm text-mute
                         underline-offset-4 transition-colors duration-[120ms]
                         hover:text-ink hover:underline
                         focus-visible:outline-none focus-visible:rounded-sm
                         focus-visible:ring-2 focus-visible:ring-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-[11px] text-mute sm:text-right">
          © {new Date().getFullYear()} · Kampala, Uganda 🇺🇬
        </p>
      </div>
    </footer>
  );
}
