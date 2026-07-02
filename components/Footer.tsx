import Link from "next/link";
import Logo from "@/components/Logo";
import { NAV_LINKS, SITE } from "@/content/site";
import { OFFICES } from "@/content/offices";

const CITIES = OFFICES.map((o) => o.city).join(" · ");

export default function Footer() {
  const sofia = OFFICES[0];
  return (
    <footer className="bg-deep text-white/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              An independent investment banking boutique — the direct successor
              of the investment banking practice of KBC Securities in Bulgaria.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-white/40">
              {CITIES}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-aqua">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm transition-colors hover:text-aqua"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-aqua">
              Head Office
            </h2>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed">
              <p>
                {sofia.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="link-underline transition-colors hover:text-aqua"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline text-aqua transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © Copyright {new Date().getFullYear()}, Mane Capital. All rights
            reserved.
          </p>
          <p className="uppercase tracking-[0.18em]">
            Investment Banking · Sofia, Bulgaria
          </p>
        </div>
      </div>
    </footer>
  );
}
