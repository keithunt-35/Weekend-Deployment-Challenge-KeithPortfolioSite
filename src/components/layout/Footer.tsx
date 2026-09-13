import { siteConfig } from "@/data";

const links = [
  { label: "GitHub", href: siteConfig.github },
  { label: "X", href: siteConfig.twitter },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-lg font-semibold text-ink">Keith Tugume</p>
        <div className="flex flex-wrap gap-2">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex min-h-touch items-center px-2 text-sm text-mute underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-mute">
          © {new Date().getFullYear()} · Kampala
        </p>
      </div>
    </footer>
  );
}
