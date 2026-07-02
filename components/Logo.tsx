import Link from "next/link";

/**
 * Namier-style spaced-caps wordmark. `tone` switches between white
 * (dark backgrounds — default) and petrol (light backgrounds).
 */
export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const main = tone === "light" ? "text-white" : "text-petrol";
  const sub = tone === "light" ? "text-white/60" : "text-petrol/60";
  return (
    <Link
      href="/"
      aria-label="Mane Capital — home"
      className="group inline-block leading-none"
    >
      <span
        className={`block text-[1.15rem] font-bold uppercase tracking-[0.42em] ${main}`}
      >
        Mane
      </span>
      <span
        className={`mt-1.5 block text-[0.58rem] font-medium uppercase tracking-[0.6em] ${sub}`}
      >
        Capital
      </span>
    </Link>
  );
}
