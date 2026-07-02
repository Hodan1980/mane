import Image from "next/image";
import {
  ArrowLink,
  ButtonLink,
  Container,
  CtaBand,
  SectionHead,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import TaglineCycler from "@/components/TaglineCycler";
import HeroDiagram from "@/components/HeroDiagram";
import Tombstone from "@/components/Tombstone";
import { SITE, STATS, TAGLINES, VALUES } from "@/content/site";
import { SERVICES } from "@/content/services";
import { CURRENT_PROJECTS, COMPLETED_PROJECTS } from "@/content/projects";
import { NETWORK_STATEMENT, PARTNERS } from "@/content/network";
import { TEAM } from "@/content/team";
import heroLake from "@/public/images/hero-lake.jpg";

const FEATURED_DEALS = [
  { deal: CURRENT_PROJECTS[1], ongoing: true },
  { deal: COMPLETED_PROJECTS[0], ongoing: false },
  { deal: COMPLETED_PROJECTS[9], ongoing: false },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-petrol">
        <Image
          src={heroLake}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-deep/75 via-petrol/60 to-deep/95"
        />

        <Container className="relative pb-24 pt-40 sm:pt-48">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <h1 className="animate-fade-up max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-[3.4rem]">
                {SITE.tagline}
              </h1>
              <div
                className="animate-fade-up mt-7 min-h-16 max-w-xl"
                style={{ animationDelay: "150ms" }}
              >
                <TaglineCycler
                  taglines={TAGLINES.filter((t) => t !== SITE.tagline)}
                />
              </div>
              <div
                className="animate-fade-up mt-10 flex flex-wrap gap-4"
                style={{ animationDelay: "300ms" }}
              >
                <ButtonLink href="/services">Explore our services</ButtonLink>
                <ButtonLink href="/contact" variant="ghost">
                  Get in touch
                </ButtonLink>
              </div>
            </div>

            <div
              className="animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <HeroDiagram />
            </div>
          </div>

          {/* Track record preview inside the hero imagery */}
          <div className="mt-28 sm:mt-36">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Track record
              </h2>
              <ArrowLink href="/projects" light>
                See full track record
              </ArrowLink>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {FEATURED_DEALS.map(({ deal, ongoing }, i) => (
                <Reveal key={`${deal.title}-${i}`} delay={i * 110} className="h-full">
                  <Tombstone deal={deal} ongoing={ongoing} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <Container>
          <dl className="grid grid-cols-2 gap-y-10 py-16 sm:py-20 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90} className="md:px-6 md:first:pl-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-4xl font-bold tracking-tight text-teal sm:text-5xl">
                  <CountUp value={stat.value} />
                </dd>
                <dd className="mt-3 max-w-52 text-sm leading-snug text-mist">
                  {stat.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-icy py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="What we do"
              title="A full range of investment banking services"
              lede="From mergers and acquisitions to equity, debt and hybrid capital markets transactions."
            />
            <ArrowLink href="/services">All services</ArrowLink>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((group, i) => (
              <Reveal key={group.id} delay={i * 110} className="h-full">
                <a
                  href={`/services#${group.id}`}
                  className="lift group flex h-full flex-col border border-fog bg-white p-8"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-teal text-sm font-bold text-teal">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-baseline gap-2.5 text-sm text-mist"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70"
                          aria-hidden="true"
                        />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors duration-300 group-hover:text-aqua">
                    Learn more
                    <svg
                      viewBox="0 0 8 12"
                      className="h-3 w-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m1.5 1 5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* About + values */}
      <section className="bg-petrol py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHead
              eyebrow="Who we are"
              title="The premier investment banking practice in Bulgaria"
              light
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-white/70">
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
              <ButtonLink href="/about" variant="ghost">
                More about us
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={150} className="border-l border-white/15 pl-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-aqua">
              Our values
            </h3>
            <ul className="mt-6 space-y-5">
              {VALUES.map((value, i) => (
                <li key={value.name} className="flex gap-4">
                  <span className="text-sm font-bold text-aqua">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{value.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Team preview */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Team"
              title="Experienced bankers, personally invested"
            />
            <ArrowLink href="/team">Meet the team</ArrowLink>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 110}>
                <div className="flex items-center gap-5">
                  <span
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-panel to-steel text-xl font-bold text-aqua"
                    aria-hidden="true"
                  >
                    {member.initials}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{member.name}</p>
                    <p className="mt-1 text-sm text-teal">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Network */}
      <section className="bg-icy py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Our network"
              title="Coverage across Europe and China"
              lede={NETWORK_STATEMENT}
            />
            <ArrowLink href="/network">Explore the network</ArrowLink>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PARTNERS.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 110} className="h-full">
                <div className="lift h-full border-t-2 border-teal bg-white p-8 shadow-[0_10px_40px_-24px_rgba(7,29,42,0.25)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal">
                    {partner.region}
                  </p>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">
                    {partner.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {partner.coverage.join(" · ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
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
