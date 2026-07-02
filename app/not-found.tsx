import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-petrol">
      <Container className="flex flex-col items-start pb-28 pt-48 sm:pb-40">
        <Eyebrow light>404 — Page not found</Eyebrow>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          This page has moved on to new horizons
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
