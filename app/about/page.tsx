import type { Metadata } from "next";
import { Container, CtaBand, PageHero, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { MILESTONES, VALUES } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mane Capital is an independent investment banking boutique and the direct successor of the successful investment banking practice of KBC Securities in Bulgaria.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An independent boutique with an institutional heritage"
        lede="Mane Capital is the direct successor of the successful investment banking practice of KBC Securities in Bulgaria."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHead
              eyebrow="Our story"
              title="Strategic guidance across every stage of development"
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-mist">
              <p>
                Mane Capital specialises in providing strategic and financial
                guidance, and funding solutions, to both private and public
                companies. We form true partnerships with our clients and work
                with companies across all stages of development to execute
                corporate finance solutions.
              </p>
              <p>
                Our goal is to become the premier investment banking practice
                in Bulgaria. We advise Bulgarian companies on accessing growth
                capital through financial restructuring and debt or equity
                solutions, and on expansion or business sale through mergers
                and acquisitions — and we assist foreign investors entering the
                Bulgarian market through M&amp;A and capital markets
                opportunities.
              </p>
              <p>
                We maintain an extensive international network spanning Central
                and Eastern Europe and the wider continent, expanding the reach
                of the corporates and investors we work with. Our team consists
                of experienced investment bankers with unique domestic and
                international experience — and we constantly look for
                opportunities in various sectors across Europe.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Milestones
            </h3>
            <ol className="mt-8 space-y-0 border-l border-line">
              {MILESTONES.map((m) => (
                <li key={m.year} className="relative pb-9 pl-8 last:pb-0">
                  <span
                    className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rotate-45 bg-gold"
                    aria-hidden="true"
                  />
                  <p className="font-serif text-lg font-semibold text-ink">
                    {m.year}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">
                    {m.text}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Our values"
              title="The principles behind every mandate"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((value, i) => (
              <Reveal key={value.name} delay={i * 90} className="h-full">
                <div className="lift h-full rounded-2xl border border-line bg-white p-8 hover:border-gold/40">
                  <span className="font-serif text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-medium text-ink">
                    {value.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        quote="We are passionate about our clients and aim to grow together"
        buttonLabel="Meet the team"
        buttonHref="/team"
      />
    </>
  );
}
