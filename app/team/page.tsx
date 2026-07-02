import type { Metadata } from "next";
import { Container, CtaBand, PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { TEAM } from "@/content/team";
import forestMist from "@/public/images/forest-mist.jpg";

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
        image={forestMist}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="space-y-20">
          {TEAM.map((member, i) => (
            <Reveal key={member.name}>
              <article
                className={`grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16 ${
                  i > 0 ? "border-t border-fog pt-20" : ""
                }`}
              >
                <div>
                  <div
                    className="lift flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-panel to-steel sm:h-52 sm:w-52"
                    aria-hidden="true"
                  >
                    <span className="text-5xl font-bold text-aqua">
                      {member.initials}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">
                    {member.role}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
                    {member.name}
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-mist">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-7 border-t border-fog pt-6">
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-mist">
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
