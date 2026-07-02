import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-40">
      <Container className="flex flex-col items-start">
        <Eyebrow>404 — Page not found</Eyebrow>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          This page has moved on to new horizons
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-mist">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
