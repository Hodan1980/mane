import type { Metadata } from "next";
import { Container, CtaBand, PageHero, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { NETWORK_INTRO, NETWORK_STATEMENT, PARTNERS } from "@/content/network";

export const metadata: Metadata = {
  title: "Network",
  description:
    "Mane Capital covers most of Europe and China via exclusive and preferred partnerships with leading investment banking franchises.",
};

export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Network"
        title="A partnership network spanning Europe and Asia"
        lede={NETWORK_INTRO[0]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Global reach"
              title="Exclusive and preferred partnerships"
              lede={NETWORK_STATEMENT}
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PARTNERS.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 110} className="h-full">
                <article className="lift flex h-full flex-col rounded-2xl border border-line bg-white p-9 hover:border-gold/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    {partner.region}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-medium leading-snug text-ink">
                    {partner.name}
                  </h2>
                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                    {partner.coverage.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-2.5 text-sm text-mist"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rotate-45 bg-gold"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-16 rounded-2xl border border-line bg-cream p-10">
              <p className="max-w-3xl text-base leading-relaxed text-mist">
                Together with our partners we field more than{" "}
                <strong className="font-semibold text-ink">
                  100 corporate finance professionals
                </strong>{" "}
                — with access to local entrepreneurs, small and medium-sized
                businesses and large corporations throughout the countries in
                which we are active.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        quote="We sail side by side on your corporate journey to new horizons"
        buttonLabel="Connect with us"
        buttonHref="/contact"
      />
    </>
  );
}
