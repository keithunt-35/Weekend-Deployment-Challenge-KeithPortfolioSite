"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Story",    href: "#about" },
  { label: "Work",     href: "#projects" },
  { label: "Path",     href: "#timeline" },
  { label: "Contact",  href: "#contact" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("");
  const drawerRef                 = useRef<HTMLDivElement>(null);

  /* ── Scroll-aware: shrink border + active section tracker ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV.map((n) => ({
        id: n.href,
        top: (document.querySelector(n.href) as HTMLElement | null)?.offsetTop ?? 0,
      }));
      const hit = [...sections]
        .reverse()
        .find((s) => window.scrollY + 80 >= s.top);
      setActive(hit?.id ?? "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close drawer on outside click ── */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!drawerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  /* ── Trap scroll while mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handle = (href: string) => { setOpen(false); scrollTo(href); };

  return (
    <header
      data-theme="ink"
      className={`fixed inset-x-0 top-0 z-50 bg-ink transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_rgba(244,240,230,0.12)]" : ""
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight text-paper
                     transition-opacity hover:opacity-70 focus-visible:rounded-sm
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper"
        >
          Keith Tugume
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center md:flex" role="list">
          {NAV.map(({ label, href }) => {
            const isActive = active === href;
            return (
              <li key={href}>
                <button
                  onClick={() => handle(href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative inline-flex min-h-[44px] items-center px-4 text-sm
                              transition-colors duration-120 focus-visible:outline-none
                              focus-visible:ring-2 focus-visible:ring-paper
                              ${isActive ? "text-paper" : "text-paper/55 hover:text-paper"}`}
                >
                  {label}
                  {/* Underline active indicator */}
                  <span
                    aria-hidden
                    className={`absolute bottom-0 left-4 right-4 h-px bg-clay
                                transition-[opacity,transform] duration-200
                                ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
                    style={{ transformOrigin: "left" }}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Hire me CTA */}
        <button
          onClick={() => handle("#contact")}
          className="hidden min-h-[44px] items-center bg-paper px-5 text-sm font-semibold
                     text-ink transition-[background-color,color,transform] duration-120
                     hover:bg-clay hover:text-paper active:scale-[0.97]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper
                     md:inline-flex"
        >
          Hire me
        </button>

        {/* Mobile hamburger */}
        <button
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center
                     text-paper/80 transition-colors hover:text-paper
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-drawer"
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </nav>

      {/* Mobile drawer — full-screen overlay */}
      {open && (
        <div
          id="mobile-drawer"
          ref={drawerRef}
          className="absolute inset-x-0 top-16 animate-rise border-t border-paper/10
                     bg-ink px-6 pb-8 pt-4 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <ul className="flex flex-col gap-1" role="list">
            {NAV.map(({ label, href }) => {
              const isActive = active === href;
              return (
                <li key={href}>
                  <button
                    onClick={() => handle(href)}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex min-h-[52px] w-full items-center justify-between
                                border-b border-paper/8 text-base font-medium
                                transition-colors duration-120
                                ${isActive ? "text-paper" : "text-paper/60 hover:text-paper"}`}
                  >
                    {label}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => handle("#contact")}
            className="mt-6 flex min-h-[52px] w-full items-center justify-center
                       bg-paper text-sm font-semibold text-ink
                       transition-[background-color,color] duration-120
                       hover:bg-clay hover:text-paper active:scale-[0.97]"
          >
            Hire me
          </button>
        </div>
      )}
    </header>
  );
}
