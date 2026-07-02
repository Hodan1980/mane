import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import forestMist from "@/public/images/forest-mist.jpg";

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
      className={`text-[11px] font-semibold uppercase tracking-[0.32em] ${
        light ? "text-aqua" : "text-teal"
      }`}
    >
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
  eyebrow?: string;
  title: string;
  lede?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
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
  image,
  imageAlt = "",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  image: StaticImageData;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-petrol">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="animate-kenburns object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-deep/80 via-petrol/70 to-petrol/90"
      />
      <Container className="relative pb-24 pt-40 sm:pb-28 sm:pt-48">
        {eyebrow ? (
          <div className="animate-fade-up">
            <Eyebrow light>{eyebrow}</Eyebrow>
          </div>
        ) : null}
        <h1
          className="animate-fade-up mt-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
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
    "group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";
  const styles = {
    solid:
      "bg-teal text-white hover:bg-aqua hover:text-petrol hover:shadow-[0_14px_36px_-14px_rgba(47,208,198,0.65)]",
    ghost: "border border-white/35 text-white hover:border-aqua hover:text-aqua",
    "ghost-dark": "border border-ink/30 text-ink hover:border-teal hover:text-teal",
  } as const;
  const className = `${base} ${styles[variant]}`;
  const arrow = (
    <svg
      viewBox="0 0 14 12"
      className="h-3 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 6h11M8 1.5 12.5 6 8 10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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

export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
        light ? "text-white hover:text-aqua" : "text-teal hover:text-aqua"
      }`}
    >
      {children}
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
    <section className="relative overflow-hidden bg-petrol">
      <Image
        src={forestMist}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-deep/90 via-petrol/75 to-teal/40"
      />
      <Container className="relative py-24 sm:py-28">
        <Reveal className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {quote}
          </h2>
          <div className="shrink-0">
            <ButtonLink href={buttonHref}>{buttonLabel}</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
