import Link from "next/link";
import Logo from "@/components/Logo";
import { NAV_LINKS, SITE } from "@/content/site";
import { OFFICES } from "@/content/offices";

const CITIES = OFFICES.map((o) => o.city).join(" · ");

export default function Footer() {
  const sofia = OFFICES[0];
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              An independent investment banking boutique — the direct successor
              of the investment banking practice of KBC Securities in Bulgaria.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/40">
              {CITIES}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
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
                  className="transition-colors hover:text-gold-soft"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-gold-soft"
                >
                  {SITE.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-line-dark pt-8 text-xs text-white/40">
          <p>
            © Copyright {new Date().getFullYear()}, Mane Capital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
