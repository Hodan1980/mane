import type { Metadata } from "next";
import { Container, CtaBand, PageHero, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Tombstone from "@/components/Tombstone";
import { COMPLETED_PROJECTS, CURRENT_PROJECTS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Track Record",
  description:
    "Current engagements and completed transactions — capital markets issues, M&A mandates, privatisation valuations and pioneering instruments on the Bulgarian market.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Track Record"
        title="Transactions that move companies forward"
        lede="Landmark mandates across equity, debt and M&A — including first-of-their-kind instruments on the Bulgarian capital market."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Current engagements"
              title="What we are working on"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CURRENT_PROJECTS.map((deal, i) => (
              <Reveal
                key={`${deal.title}-${i}`}
                delay={(i % 3) * 100}
                className="h-full"
              >
                <Tombstone deal={deal} ongoing />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Completed transactions"
              title="A decade of closed mandates"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMPLETED_PROJECTS.map((deal, i) => (
              <Reveal
                key={`${deal.title}-${deal.year}-${i}`}
                delay={(i % 3) * 100}
                className="h-full"
              >
                <Tombstone deal={deal} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        quote="Focused on the long-term growth of our clients"
        buttonLabel="Discuss a transaction"
        buttonHref="/contact"
      />
    </>
  );
}
