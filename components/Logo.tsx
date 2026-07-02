import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Mane Capital — home"
      className="group inline-flex items-center gap-3"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <rect
          x="6.5"
          y="6.5"
          width="19"
          height="19"
          transform="rotate(45 16 16)"
          stroke="#b08d57"
          strokeWidth="1.5"
        />
        <rect
          x="12.75"
          y="12.75"
          width="6.5"
          height="6.5"
          transform="rotate(45 16 16)"
          fill="#b08d57"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-serif text-[1.3rem] font-semibold tracking-wide ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          Mane Capital
        </span>
        <span className="mt-1 block text-[0.55rem] font-medium uppercase tracking-[0.42em] text-gold">
          Investment Banking
        </span>
      </span>
    </Link>
  );
}
