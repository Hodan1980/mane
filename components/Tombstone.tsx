import type { Deal } from "@/content/projects";

export default function Tombstone({
  deal,
  ongoing = false,
}: {
  deal: Deal;
  ongoing?: boolean;
}) {
  const topLabel = ongoing ? "Ongoing" : deal.year;
  return (
    <article className="lift flex h-full flex-col rounded-2xl border border-line bg-white p-8 text-center hover:border-gold/40">
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
          ongoing ? "text-gold" : "text-mist"
        }`}
      >
        {topLabel}
      </p>

      <div className="my-6 flex flex-1 flex-col items-center justify-center gap-3">
        {deal.company ? (
          <p className="font-serif text-xl font-semibold leading-snug text-ink">
            {deal.company}
          </p>
        ) : deal.confidential ? (
          <p className="font-serif text-xl font-semibold leading-snug text-ink/50">
            Confidential
          </p>
        ) : null}

        <p className="text-sm font-medium uppercase tracking-[0.12em] text-ink/80">
          {deal.title}
        </p>

        {deal.detail ? (
          <p className="font-serif text-lg font-medium text-gold">{deal.detail}</p>
        ) : null}

        {deal.sector ? (
          <p className="text-xs uppercase tracking-[0.18em] text-mist">
            {deal.sector}
          </p>
        ) : null}
      </div>

      <div className="border-t border-line pt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-mist">
          {deal.role}
        </p>
      </div>
    </article>
  );
}
