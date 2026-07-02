"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/85 backdrop-blur-xl transition-[box-shadow,border-color] duration-500 ${
        scrolled
          ? "border-line shadow-[0_1px_28px_rgba(10,21,34,0.09)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`link-underline pb-1 text-[0.82rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                      active ? "text-gold" : "text-ink/70 hover:text-gold"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[2.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`grid overflow-hidden border-t bg-paper transition-[grid-template-rows,border-color] duration-500 lg:hidden ${
          open ? "grid-rows-[1fr] border-line" : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="min-h-0">
          <ul className="mx-auto max-w-6xl px-6 py-4">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href} className="border-b border-line/70 last:border-0">
                  <Link
                    href={link.href}
                    tabIndex={open ? 0 : -1}
                    className={`block py-3.5 text-sm font-medium uppercase tracking-[0.14em] transition-colors ${
                      active ? "text-gold" : "text-ink/80"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
