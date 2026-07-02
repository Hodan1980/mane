import type { Metadata } from "next";
import Image from "next/image";
import { Container, CtaBand, PageHero, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/content/services";
import water from "@/public/images/water.jpg";
import forestDark from "@/public/images/forest-dark.jpg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mergers & Acquisitions, Equity and Debt Capital Markets, hybrid instruments and financial advisory services — a full range of investment banking services.",
};

const PROCESS = [
  {
    title: "Advice",
    points: [
      "Strategic and financial assessment",
      "Valuation & fairness opinion",
      "Financial research and analysis",
    ],
  },
  {
    title: "Structuring",
    points: [
      "Transaction design and documentation",
      "Debt, equity and hybrid solutions",
      "Financial restructuring",
    ],
  },
  {
    title: "Execution",
    points: [
      "Marketing to local and international investors",
      "Negotiations and bookbuilding",
      "Coordination with regulators and exchanges",
    ],
  },
  {
    title: "Completion",
    points: [
      "Closing and settlement",
      "Listing and post-deal support",
      "A partnership that lasts beyond the deal",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Investment banking services to accelerate growth"
        lede="From mergers and acquisitions to equity, debt and hybrid capital markets transactions — we will guide you to the right solution at the right moment."
        image={water}
      />

      {SERVICES.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 py-20 sm:py-24 ${
            groupIndex % 2 === 1 ? "bg-icy" : "bg-white"
          }`}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
              <Reveal>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal text-base font-bold text-teal">
                  {groupIndex + 1}
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                  {group.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist">
                  {group.intro}
                </p>
              </Reveal>

              <div className="space-y-6">
                {group.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 100}>
                    <article
                      className={`lift border-l-2 border-teal p-7 ${
                        groupIndex % 2 === 1 ? "bg-white" : "bg-icy"
                      }`}
                    >
                      <h3 className="text-lg font-bold tracking-tight text-ink">
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
                                className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70"
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

      {/* Our process */}
      <section className="relative overflow-hidden bg-petrol">
        <Image
          src={forestDark}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-petrol/80 via-petrol/60 to-deep/90"
        />
        <Container className="relative py-20 sm:py-28">
          <Reveal>
            <SectionHead eyebrow="How we work" title="Our process" light />
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-4 md:gap-8">
            {PROCESS.map((phase, i) => (
              <Reveal key={phase.title} delay={i * 120}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-aqua text-sm font-bold text-aqua">
                    {i + 1}
                  </span>
                  {i < PROCESS.length - 1 ? (
                    <span
                      className="hidden flex-1 items-center md:flex"
                      aria-hidden="true"
                    >
                      <span className="h-px flex-1 bg-aqua/50" />
                      <span className="border-y-4 border-l-[7px] border-y-transparent border-l-aqua/70" />
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-white">
                  {phase.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {phase.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-baseline gap-2.5 text-sm leading-relaxed text-white/70"
                    >
                      <span
                        className="h-1 w-1 shrink-0 rounded-full bg-aqua/80"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal">
              Our edge
            </p>
            <p className="mt-5 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
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
