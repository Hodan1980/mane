import type { Metadata } from "next";
import { ButtonLink, Container, PageHero, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { OFFICES } from "@/content/offices";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mane Capital — offices in Sofia, Athens and Geneva, with partnering offices in London, Hong Kong and Shanghai.",
};

const OWN_OFFICES = OFFICES.filter((o) => o.type !== "Partnering Office");
const PARTNER_OFFICES = OFFICES.filter((o) => o.type === "Partnering Office");

function OfficeCard({
  office,
  featured = false,
}: {
  office: (typeof OFFICES)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={`lift flex h-full flex-col rounded-2xl border p-8 ${
        featured
          ? "border-gold/50 bg-navy-deep text-white"
          : "border-line bg-white hover:border-gold/40"
      }`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
        {office.type}
      </p>
      <h3
        className={`mt-3 font-serif text-2xl font-medium ${
          featured ? "text-white" : "text-ink"
        }`}
      >
        {office.city}
      </h3>
      <p
        className={`mt-0.5 text-sm ${
          featured ? "text-white/60" : "text-mist"
        }`}
      >
        {office.country}
      </p>
      <address
        className={`mt-5 flex-1 space-y-3 text-sm not-italic leading-relaxed ${
          featured ? "text-white/75" : "text-mist"
        }`}
      >
        <p>
          {office.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        {office.phone ? (
          <p>
            <a
              href={`tel:${office.phone.replace(/[\s()]/g, "")}`}
              className={`link-underline transition-colors ${
                featured ? "hover:text-gold-soft" : "hover:text-gold"
              }`}
            >
              {office.phone}
            </a>
          </p>
        ) : null}
        {office.email ? (
          <p>
            <a
              href={`mailto:${office.email}`}
              className="link-underline font-medium text-gold transition-colors hover:text-gold-soft"
            >
              {office.email}
            </a>
          </p>
        ) : null}
      </address>
    </article>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's discuss your next move"
        lede="Whether you are raising capital, considering an acquisition or planning an exit — we would be glad to hear from you."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead eyebrow="Our offices" title="Where to find us" />
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={`mailto:${SITE.email}`}>
                Email {SITE.email}
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {OWN_OFFICES.map((office, i) => (
              <Reveal key={office.city} delay={i * 110} className="h-full">
                <OfficeCard office={office} featured={office.type === "Headquarters"} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <SectionHead
              eyebrow="Partnering offices"
              title="Our partners' desks"
              lede="Through our partner network we are present in the world's leading financial centres."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PARTNER_OFFICES.map((office, i) => (
              <Reveal key={office.city} delay={i * 110} className="h-full">
                <OfficeCard office={office} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-deep">
        <div
          aria-hidden="true"
          className="animate-glow pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50rem 25rem at 85% 120%, rgba(176,141,87,0.14), transparent 60%)",
          }}
        />
        <Container className="relative py-20 sm:py-24">
          <Reveal className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="max-w-2xl font-serif text-2xl font-medium leading-snug text-white sm:text-3xl">
                “We are passionate about our clients and aim to grow together”
              </p>
              <p className="mt-4 text-sm text-white/60">
                {SITE.address} ·{" "}
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="link-underline hover:text-gold-soft"
                >
                  {SITE.phone}
                </a>
              </p>
            </div>
            <div className="shrink-0">
              <ButtonLink href={`mailto:${SITE.email}`}>
                Write to us
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
