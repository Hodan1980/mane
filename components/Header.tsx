"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { NAV_LINKS, SITE } from "@/content/site";

const SERVICE_CHILDREN = [
  { href: "/services#mergers-acquisitions", label: "Mergers & Acquisitions" },
  { href: "/services#capital-markets", label: "Capital Markets" },
  { href: "/services#financial-services", label: "Financial Services" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-petrol/95 shadow-[0_8px_40px_rgba(4,16,25,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              const isServices = link.href === "/services";
              return (
                <li key={link.href} className={isServices ? "group relative" : ""}>
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 py-2 text-[0.86rem] font-medium transition-colors duration-300 ${
                      active ? "text-aqua" : "text-white/85 hover:text-aqua"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {isServices ? (
                      <svg
                        viewBox="0 0 10 6"
                        className="h-1.5 w-2.5 transition-transform duration-300 group-hover:rotate-180"
                        aria-hidden="true"
                        fill="none"
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : null}
                  </Link>

                  {isServices ? (
                    <div className="invisible absolute left-0 top-full min-w-56 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="border border-white/10 bg-petrol/95 py-2 shadow-[0_20px_50px_rgba(4,16,25,0.5)] backdrop-blur-xl">
                        {SERVICE_CHILDREN.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-5 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-aqua"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href={`mailto:${SITE.email}`}
            aria-label={`Email ${SITE.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-aqua hover:text-petrol"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 5.5l7 5.5 7-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-[2px] w-7 bg-white transition-transform duration-300 ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-7 bg-white transition-transform duration-300 ${
              open ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`grid overflow-hidden bg-petrol/95 backdrop-blur-xl transition-[grid-template-rows] duration-500 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="mx-auto max-w-6xl px-6 py-4">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href} className="border-b border-white/10 last:border-0">
                  <Link
                    href={link.href}
                    tabIndex={open ? 0 : -1}
                    className={`block py-3.5 text-sm font-medium ${
                      active ? "text-aqua" : "text-white/85"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <a
                href={`mailto:${SITE.email}`}
                tabIndex={open ? 0 : -1}
                className="text-sm font-medium text-aqua"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
