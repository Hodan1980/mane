import type { Metadata } from "next";
import { Container, CtaBand, PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { TEAM } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Experienced investment bankers with unique domestic and international experience — the partners of Mane Capital.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Experienced bankers, personally invested"
        lede="Our team consists of experienced investment bankers with unique domestic and international experience."
      />

      <section className="py-20 sm:py-28">
        <Container className="space-y-20">
          {TEAM.map((member, i) => (
            <Reveal key={member.name}>
              <article
                className={`grid gap-10 lg:grid-cols-[minmax(220px,300px)_1fr] lg:gap-16 ${
                  i > 0 ? "border-t border-line pt-20" : ""
                }`}
              >
                <div>
                  <div className="lift flex aspect-square w-full max-w-[300px] items-center justify-center rounded-2xl border border-line bg-cream hover:border-gold/40">
                    <span
                      className="font-serif text-6xl font-medium text-gold"
                      aria-hidden="true"
                    >
                      {member.initials}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                    {member.role}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
                    {member.name}
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-mist">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-7 border-t border-line pt-6">
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">
                      Education
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {member.education.map((item) => (
                        <li key={item} className="text-sm text-mist">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand
        quote="We sail side by side on your corporate journey to new horizons"
        buttonLabel="Work with us"
        buttonHref="/contact"
      />
    </>
  );
}
