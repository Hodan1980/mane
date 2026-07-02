import type { Metadata } from "next";
import { Container, CtaBand, Eyebrow, PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mergers & Acquisitions, Equity and Debt Capital Markets, hybrid instruments and financial advisory services — a full range of investment banking services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A full range of investment banking services"
        lede="From mergers and acquisitions to equity, debt and hybrid capital markets transactions — we will guide you to the right solution at the right moment."
      />

      {SERVICES.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 py-20 sm:py-24 ${
            groupIndex % 2 === 1 ? "border-y border-line bg-cream" : ""
          }`}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
              <Reveal>
                <span className="font-serif text-sm text-gold">
                  {group.index}
                </span>
                <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  {group.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist">
                  {group.intro}
                </p>
              </Reveal>

              <div className="space-y-10">
                {group.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 100}>
                    <article className="border-l-2 border-gold/60 pl-7">
                      <h3 className="font-serif text-xl font-medium text-ink">
                        {item.name}
                      </h3>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-mist">
                        {item.description}
                      </p>
                      {item.points ? (
                        <ul className="mt-4 space-y-2">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-baseline gap-2.5 text-sm text-mist"
                            >
                              <span
                                className="h-1 w-1 shrink-0 rotate-45 bg-gold"
                                aria-hidden="true"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-line py-16">
        <Container>
          <Reveal>
            <Eyebrow>Our edge</Eyebrow>
            <p className="mt-6 max-w-3xl font-serif text-2xl font-medium leading-snug text-ink sm:text-[1.7rem]">
              We pride ourselves on being pioneers in introducing warrants on
              the Bulgarian capital market.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        quote="We will guide you to the right solution at the right moment"
        buttonLabel="Discuss your plans"
        buttonHref="/contact"
      />
    </>
  );
}
