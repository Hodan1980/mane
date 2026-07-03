import Image from "next/image";
import Link from "next/link";
import logoBlue from "@/public/images/logo.png";
import logoWhite from "@/public/images/logo-white.png";

/**
 * The original Mane Capital lion logo. `tone="light"` (default) renders
 * the white variant for dark backgrounds; `tone="dark"` renders the
 * brand-blue original for light backgrounds.
 */
export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const src = tone === "light" ? logoWhite : logoBlue;
  return (
    <Link href="/" className="inline-block">
      <Image
        src={src}
        alt="Mane Capital"
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
