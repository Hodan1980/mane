/**
 * The "three worlds" diagram from the hero — frosted-glass circles for
 * companies, investors and partners, connected by drawing arrows.
 * Purely decorative.
 *
 * Geometry (viewBox 400×400): the three circles (r=62) sit on an
 * equilateral triangle whose circumcircle has centre (200,205) and
 * radius 120. Each arrow is a 50° arc of that same circumcircle,
 * so all three are identical, rotated 120° apart. The note bubble
 * sits exactly on the centroid.
 */
export default function HeroDiagram() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[300px] select-none sm:max-w-[420px]"
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L8 4 L0 8 z" fill="rgba(255,255,255,0.65)" />
          </marker>
        </defs>
        {/* top → investors */}
        <path
          className="draw-line"
          pathLength={1}
          d="M 268.8 106.7 A 120 120 0 0 1 319.5 194.5"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        {/* investors → partners */}
        <path
          className="draw-line"
          pathLength={1}
          style={{ animationDelay: "1.1s" }}
          d="M 250.7 313.8 A 120 120 0 0 1 149.3 313.8"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        {/* partners → top */}
        <path
          className="draw-line"
          pathLength={1}
          style={{ animationDelay: "1.6s" }}
          d="M 80.5 194.5 A 120 120 0 0 1 131.2 106.7"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
      </svg>

      {/* Growth & listed companies — top, centre (200,85) r=62 */}
      <div
        className="animate-float absolute left-[34.5%] top-[5.75%] flex h-[31%] w-[31%] items-center justify-center rounded-full border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md"
        style={{ animationDuration: "6s" }}
      >
        <p className="text-[11px] font-medium leading-snug text-white sm:text-sm">
          Growth &amp; listed companies
        </p>
      </div>

      {/* Investors — bottom right, centre (304,265) r=62 */}
      <div
        className="animate-float absolute left-[60.5%] top-[50.75%] flex h-[31%] w-[31%] items-center justify-center rounded-full border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md"
        style={{ animationDuration: "7s", animationDelay: "0.8s" }}
      >
        <p className="text-[11px] font-medium leading-snug text-white sm:text-sm">
          Investors
        </p>
      </div>

      {/* Global partners — bottom left, centre (96,265) r=62 */}
      <div
        className="animate-float absolute left-[8.5%] top-[50.75%] flex h-[31%] w-[31%] items-center justify-center rounded-full border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md"
        style={{ animationDuration: "6.5s", animationDelay: "1.4s" }}
      >
        <p className="text-[11px] font-medium leading-snug text-white sm:text-sm">
          Global partners
        </p>
      </div>

      {/* Note bubble — static hub on the centroid (200,205) r=48 */}
      <div className="absolute left-[38%] top-[39.25%] flex h-[24%] w-[24%] items-center justify-center rounded-full border border-white/15 bg-white/[0.07] p-3 text-center backdrop-blur-md">
        <p className="text-[8px] font-medium leading-snug text-white/80 sm:text-[9px]">
          M&amp;A advice and access to equity &amp; debt capital markets
        </p>
      </div>
    </div>
  );
}
