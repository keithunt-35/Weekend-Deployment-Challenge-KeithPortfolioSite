"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Story", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Path", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-paper transition-opacity hover:opacity-80"
        >
          Keith Tugume
        </Link>

        <ul className="hidden items-center gap-0 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="min-h-touch px-4 text-sm text-paper/70 transition-colors hover:text-paper"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav("#contact")}
          className="hidden min-h-touch bg-paper px-4 text-sm font-semibold text-ink transition-colors hover:bg-clay hover:text-paper md:inline-flex md:items-center"
        >
          Hire me
        </button>

        <button
          className="inline-flex min-h-touch min-w-touch items-center justify-center text-paper md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper/15 bg-ink px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="min-h-touch w-full text-left text-base text-paper/80 transition-colors hover:text-paper"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNav("#contact")}
            className="mt-4 flex min-h-touch w-full items-center justify-center bg-paper text-sm font-semibold text-ink hover:bg-clay hover:text-paper"
          >
            Hire me
          </button>
        </div>
      )}
    </header>
  );
}
