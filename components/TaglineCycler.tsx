"use client";

import { useEffect, useState } from "react";

/**
 * Softly cycles through the firm's taglines. Falls back to a static
 * line when the user prefers reduced motion.
 */
export default function TaglineCycler({ taglines }: { taglines: string[] }) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(false);
      return;
    }
    const id = setInterval(
      () => setIndex((i) => (i + 1) % taglines.length),
      4500
    );
    return () => clearInterval(id);
  }, [taglines.length]);

  return (
    <p
      key={animate ? index : "static"}
      className={`font-serif text-base italic text-white/60 sm:text-lg ${
        animate ? "animate-tagline" : ""
      }`}
    >
      “{taglines[index]}”
    </p>
  );
}
