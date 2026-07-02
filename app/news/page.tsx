import type { Metadata } from "next";
import { Container, CtaBand, PageHero, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { ANNOUNCEMENTS, NEWS, newsByYear } from "@/content/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Company announcements, transaction news and market commentary from Mane Capital.",
};

export default function NewsPage() {
  const grouped = newsByYear(NEWS);

  return (
    <>
      <PageHero
        eyebrow="News"
        title="Announcements & market commentary"
        lede="Transaction news, regulatory announcements and our partners' views on the Bulgarian and international capital markets."
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHead
              eyebrow="Company announcements"
              title="Official announcements"
            />
          </Reveal>
          <ul className="mt-10 space-y-6">
            {ANNOUNCEMENTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <li className="lift rounded-2xl border border-line bg-white p-7 hover:border-gold/40">
                  {item.date ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {item.date}
                    </p>
                  ) : null}
                  <h3 className="mt-2 font-serif text-lg font-medium leading-snug text-ink">
                    {item.title}
                  </h3>
                  {item.summary ? (
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {item.summary}
                    </p>
                  ) : null}
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-20 sm:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHead eyebrow="Archive" title="News through the years" />
          </Reveal>

          <div className="mt-14 space-y-16">
            {grouped.map(([year, items]) => (
              <section key={year} aria-labelledby={`year-${year}`}>
                <Reveal>
                  <h3
                    id={`year-${year}`}
                    className="flex items-center gap-5 font-serif text-3xl font-medium text-ink"
                  >
                    {year}
                    <span className="h-px flex-1 bg-line" aria-hidden="true" />
                  </h3>
                </Reveal>
                <ul className="mt-8 space-y-8">
                  {items.map((item, i) => (
                    <Reveal key={`${item.title}-${i}`} delay={(i % 4) * 60}>
                      <li className="grid gap-2 border-l-2 border-gold/50 pl-6 sm:grid-cols-[7rem_1fr] sm:gap-6 sm:border-l-0 sm:pl-0">
                        <p className="pt-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                          {item.date ?? String(year)}
                        </p>
                        <div className="sm:border-l-2 sm:border-gold/40 sm:pl-6">
                          <h4 className="text-base font-medium leading-snug text-ink">
                            {item.title}
                          </h4>
                          {item.summary ? (
                            <p className="mt-1.5 text-sm leading-relaxed text-mist">
                              {item.summary}
                            </p>
                          ) : null}
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        quote="We are passionate about our clients and aim to grow together"
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
