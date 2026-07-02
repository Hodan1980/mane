import Link from "next/link";
import {
  ButtonLink,
  Container,
  CtaBand,
  Eyebrow,
  SectionHead,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import TaglineCycler from "@/components/TaglineCycler";
import Tombstone from "@/components/Tombstone";
import { SITE, STATS, TAGLINES, VALUES } from "@/content/site";
import { SERVICES } from "@/content/services";
import { CURRENT_PROJECTS, COMPLETED_PROJECTS } from "@/content/projects";
import { NETWORK_STATEMENT, PARTNERS } from "@/content/network";

const FEATURED_DEALS = [
  { deal: CURRENT_PROJECTS[1], ongoing: true },
  { deal: COMPLETED_PROJECTS[0], ongoing: false },
  { deal: COMPLETED_PROJECTS[9], ongoing: false },
  { deal: COMPLETED_PROJECTS[8], ongoing: false },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div
          aria-hidden="true"
          className="animate-glow pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70rem 35rem at 80% -20%, rgba(176,141,87,0.18), transparent 60%)",
          }}
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-full opacity-[0.14]"
          viewBox="0 0 1200 220"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            className="draw-line"
            pathLength={1}
            d="M0 200 L150 170 L300 185 L450 130 L600 150 L750 90 L900 110 L1050 40 L1200 10"
            stroke="#c8a97a"
            strokeWidth="2"
          />
        </svg>

        <Container className="relative py-28 sm:py-36">
          <div className="animate-fade-up">
            <Eyebrow light>Independent Investment Banking Boutique</Eyebrow>
          </div>
          <h1
            className="animate-fade-up mt-8 max-w-4xl font-serif text-4xl font-medium leading-[1.15] text-white sm:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            {SITE.tagline}
          </h1>
          <p
            className="animate-fade-up mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {SITE.description}
          </p>
          <div
            className="animate-fade-up mt-12 flex flex-wrap gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <ButtonLink href="/services">Explore our services</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Get in touch
            </ButtonLink>
          </div>
          <div
            className="animate-fade-up mt-16 min-h-14 max-w-2xl border-t border-white/10 pt-6"
            style={{ animationDelay: "480ms" }}
          >
            <TaglineCycler
              taglines={TAGLINES.filter((t) => t !== SITE.tagline)}
            />
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-cream">
        <Container>
          <dl className="grid grid-cols-2 divide-line max-md:gap-y-10 max-md:py-12 md:grid-cols-4 md:divide-x">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 90}
                className="md:px-8 md:py-14 md:first:pl-0 md:last:pr-0"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-4xl font-medium text-ink sm:text-5xl">
                  <CountUp value={stat.value} />
                </dd>
                <dd className="mt-3 text-sm leading-snug text-mist">
                  {stat.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHead
              eyebrow="Who we are"
              title="The premier investment banking practice in Bulgaria"
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-mist">
              <p>
                Mane Capital is an independent investment banking boutique and
                the direct successor of the successful investment banking
                practice of KBC Securities in Bulgaria. We provide strategic and
                financial guidance, and funding solutions, to both private and
                public companies.
              </p>
              <p>
                We advise Bulgarian companies on accessing growth capital
                through financial restructuring and debt or equity solutions,
                and on expansion or business sale through M&amp;A — and we help
                foreign investors enter the Bulgarian market.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/about" variant="ghost-dark">
                More about us
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={150} className="border-l border-line pl-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Our values
            </h3>
            <ul className="mt-6 space-y-5">
              {VALUES.map((value) => (
                <li key={value.name}>
                  <p className="font-serif text-lg font-medium text-ink">
                    {value.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="border-y border-line bg-cream py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="What we do"
              title="A full range of investment banking services"
              lede="From mergers and acquisitions to equity, debt and hybrid capital markets transactions."
            />
            <Link
              href="/services"
              className="link-underline pb-1 text-sm font-medium uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-soft"
            >
              All services →
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((group, i) => (
              <Reveal key={group.id} delay={i * 110} className="h-full">
                <Link
                  href={`/services#${group.id}`}
                  className="lift group flex h-full flex-col rounded-2xl border border-line bg-white p-9 hover:border-gold/40"
                >
                  <span className="font-serif text-sm text-gold">
                    {group.index}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-medium text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-baseline gap-2.5 text-sm text-mist"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rotate-45 bg-gold"
                          aria-hidden="true"
                        />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50 transition-colors duration-300 group-hover:text-gold">
                    Learn more
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Track record preview */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Track record"
              title="Selected transactions"
              lede="Landmark mandates across capital markets and M&A — including pioneering instruments on the Bulgarian market."
            />
            <Link
              href="/projects"
              className="link-underline pb-1 text-sm font-medium uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-soft"
            >
              Full track record →
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_DEALS.map(({ deal, ongoing }, i) => (
              <Reveal key={`${deal.title}-${i}`} delay={i * 110} className="h-full">
                <Tombstone deal={deal} ongoing={ongoing} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Network */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="animate-glow pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55rem 28rem at 10% -20%, rgba(176,141,87,0.14), transparent 60%)",
          }}
        />
        <Container className="relative">
          <Reveal>
            <SectionHead
              eyebrow="Our network"
              title="Coverage across Europe and China"
              lede={NETWORK_STATEMENT}
              light
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PARTNERS.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 110} className="h-full">
                <div className="lift h-full rounded-2xl border border-line-dark bg-navy-deep p-9 hover:border-gold/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    {partner.region}
                  </p>
                  <h3 className="mt-3 font-serif text-xl font-medium text-white">
                    {partner.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {partner.coverage.join(" · ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12">
            <ButtonLink href="/network" variant="ghost">
              Explore the network
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <CtaBand
        quote="Focused on the long-term growth of our clients"
        buttonLabel="Start a conversation"
        buttonHref="/contact"
      />
    </>
  );
}
