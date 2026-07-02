import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] ${
        light ? "text-gold-soft" : "text-gold"
      }`}
    >
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 font-serif text-3xl font-medium leading-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-mist"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 30rem at 85% -10%, rgba(176,141,87,0.16), transparent 60%)",
        }}
      />
      <Container className="relative py-20 sm:py-28">
        <div className="animate-fade-up">
          <Eyebrow light>{eyebrow}</Eyebrow>
        </div>
        <h1
          className="animate-fade-up mt-6 max-w-3xl font-serif text-4xl font-medium leading-tight text-white sm:text-5xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        {lede ? (
          <p
            className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {lede}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "ghost-dark";
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300";
  const styles = {
    solid: "bg-gold text-white hover:bg-gold-soft hover:shadow-[0_12px_32px_-12px_rgba(176,141,87,0.6)]",
    ghost:
      "border border-white/30 text-white hover:border-gold-soft hover:text-gold-soft",
    "ghost-dark":
      "border border-ink/25 text-ink hover:border-gold hover:text-gold",
  } as const;
  const className = `${base} ${styles[variant]}`;
  const arrow = (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      →
    </span>
  );
  if (!href.startsWith("/")) {
    return (
      <a href={href} className={className}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
      {arrow}
    </Link>
  );
}

export function CtaBand({
  quote,
  buttonLabel,
  buttonHref,
}: {
  quote: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50rem 25rem at 15% 120%, rgba(176,141,87,0.14), transparent 60%)",
        }}
      />
      <Container className="relative py-20 sm:py-24">
        <Reveal className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl font-serif text-2xl font-medium leading-snug text-white sm:text-3xl">
            “{quote}”
          </p>
          <div className="shrink-0">
            <ButtonLink href={buttonHref}>{buttonLabel}</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
