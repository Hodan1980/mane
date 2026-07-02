import type { Deal } from "@/content/projects";

/** Flat colored tile palette cycled across the deal grid. */
const PALETTE = ["bg-[#159a90]", "bg-[#27bdb2]", "bg-[#1b5e7e]", "bg-panel"];

export default function Tombstone({
  deal,
  ongoing = false,
  index = 0,
}: {
  deal: Deal;
  ongoing?: boolean;
  index?: number;
}) {
  const color = PALETTE[index % PALETTE.length];
  return (
    <article
      className={`lift flex h-full min-h-64 flex-col p-7 text-white ${color}`}
    >
      <p className="w-fit bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]">
        {ongoing ? "Ongoing" : deal.year}
      </p>

      <div className="flex flex-1 flex-col items-start justify-center gap-2 py-6">
        {deal.company ? (
          <p className="text-xl font-bold leading-snug">{deal.company}</p>
        ) : deal.confidential ? (
          <p className="text-xl font-bold leading-snug text-white/60">
            Confidential
          </p>
        ) : null}

        {deal.detail ? (
          <p className="text-2xl font-bold leading-tight">{deal.detail}</p>
        ) : null}

        {deal.sector ? (
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            {deal.sector}
          </p>
        ) : null}
      </div>

      <div className="border-t border-white/20 pt-4">
        <p className="text-sm font-semibold uppercase tracking-[0.1em]">
          {deal.title}
        </p>
        <p className="mt-1 text-xs text-white/70">{deal.role}</p>
      </div>
    </article>
  );
}
