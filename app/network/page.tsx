import type { Metadata } from "next";
import { Container, CtaBand, PageHero, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { NETWORK_INTRO, NETWORK_STATEMENT, PARTNERS } from "@/content/network";
import seaAerial from "@/public/images/sea-aerial.jpg";

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
        image={seaAerial}
      />

      <section className="bg-white py-20 sm:py-28">
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
                <article className="lift flex h-full flex-col bg-petrol p-8 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-aqua">
                    {partner.region}
                  </p>
                  <h2 className="mt-3 text-xl font-bold leading-snug tracking-tight">
                    {partner.name}
                  </h2>
                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/15 pt-6">
                    {partner.coverage.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-2.5 text-sm text-white/75"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-aqua/80"
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
            <div className="mt-16 border-l-2 border-teal bg-icy p-10">
              <p className="max-w-3xl text-base leading-relaxed text-mist">
                Together with our partners we field more than{" "}
                <strong className="font-bold text-ink">
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
