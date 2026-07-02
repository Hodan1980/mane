import type { Metadata } from "next";
import { Container, CtaBand, PageHero, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { ANNOUNCEMENTS, NEWS, newsByYear } from "@/content/news";
import heroLake from "@/public/images/hero-lake.jpg";

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
        image={heroLake}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Company announcements"
              title="Official announcements"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ANNOUNCEMENTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="h-full">
                <article className="lift flex h-full flex-col bg-petrol p-7 text-white">
                  {item.date ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                      {item.date}
                    </p>
                  ) : (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                      Announcement
                    </p>
                  )}
                  <h3 className="mt-3 flex-1 text-base font-bold leading-snug">
                    {item.title}
                  </h3>
                  {item.summary ? (
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {item.summary}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-icy py-20 sm:py-28">
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
                    className="flex items-center gap-5 text-3xl font-bold tracking-tight text-ink"
                  >
                    {year}
                    <span className="h-px flex-1 bg-fog" aria-hidden="true" />
                  </h3>
                </Reveal>
                <ul className="mt-8 space-y-7">
                  {items.map((item, i) => (
                    <Reveal key={`${item.title}-${i}`} delay={(i % 4) * 60}>
                      <li className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
                        <p className="pt-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                          {item.date ?? String(year)}
                        </p>
                        <div className="border-l-2 border-teal/40 pl-5">
                          <h4 className="text-base font-semibold leading-snug text-ink">
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
