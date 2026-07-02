import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHero, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { OFFICES } from "@/content/offices";
import { SITE } from "@/content/site";
import water from "@/public/images/water.jpg";
import forestMist from "@/public/images/forest-mist.jpg";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mane Capital — offices in Sofia, Athens and Geneva, with partnering offices in London, Hong Kong and Shanghai.",
};

const OWN_OFFICES = OFFICES.filter((o) => o.type !== "Partnering Office");
const PARTNER_OFFICES = OFFICES.filter((o) => o.type === "Partnering Office");

function OfficeCard({ office }: { office: (typeof OFFICES)[number] }) {
  const featured = office.type === "Headquarters";
  return (
    <article
      className={`lift flex h-full flex-col p-8 ${
        featured ? "bg-petrol text-white" : "border-t-2 border-teal bg-white"
      }`}
    >
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
          featured ? "text-aqua" : "text-teal"
        }`}
      >
        {office.type}
      </p>
      <h3
        className={`mt-3 text-2xl font-bold tracking-tight ${
          featured ? "text-white" : "text-ink"
        }`}
      >
        {office.city}
      </h3>
      <p className={`mt-0.5 text-sm ${featured ? "text-white/60" : "text-mist"}`}>
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
                featured ? "hover:text-aqua" : "hover:text-teal"
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
              className={`link-underline font-semibold transition-colors ${
                featured ? "text-aqua hover:text-white" : "text-teal hover:text-aqua"
              }`}
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
        image={water}
      />

      {/* Split: image panel + contact form, like the reference design */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="grid overflow-hidden shadow-[0_30px_80px_-40px_rgba(7,29,42,0.4)] lg:grid-cols-2">
              <div className="relative min-h-[22rem] overflow-hidden bg-petrol lg:min-h-full">
                <Image
                  src={forestMist}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-teal/70 via-petrol/70 to-deep/85"
                />
                <div className="relative flex h-full flex-col justify-between p-10">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">
                      Contact us
                    </p>
                    <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white">
                      Let&apos;s get
                      <br />
                      in touch
                    </h2>
                  </div>
                  <div className="mt-10 space-y-3 text-sm text-white/85">
                    <p className="flex items-center gap-3">
                      <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
                        <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3 5.5l7 5.5 7-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <a href={`mailto:${SITE.email}`} className="link-underline">
                        {SITE.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
                        <path
                          d="M4 3.5h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C8.3 16.9 3.1 11.7 2.5 5.1A1.5 1.5 0 0 1 4 3.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <a
                        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                        className="link-underline"
                      >
                        {SITE.phone}
                      </a>
                    </p>
                    <p className="flex items-start gap-3">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" fill="none" aria-hidden="true">
                        <path
                          d="M10 18s6-5.1 6-9.5a6 6 0 1 0-12 0C4 12.9 10 18 10 18Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <circle cx="10" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <span>{SITE.address}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Offices */}
      <section className="bg-icy py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHead eyebrow="Our offices" title="Where to find us" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {OWN_OFFICES.map((office, i) => (
              <Reveal key={office.city} delay={i * 110} className="h-full">
                <OfficeCard office={office} />
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
    </>
  );
}
