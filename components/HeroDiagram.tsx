/**
 * The "three worlds" diagram from the hero — frosted-glass circles for
 * companies, investors and partners, connected by drawing arrows.
 * Purely decorative.
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
        <path
          className="draw-line"
          pathLength={1}
          d="M268 112 Q 332 160 330 206"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <path
          className="draw-line"
          pathLength={1}
          style={{ animationDelay: "1.1s" }}
          d="M252 320 Q 200 352 148 322"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <path
          className="draw-line"
          pathLength={1}
          style={{ animationDelay: "1.6s" }}
          d="M78 210 Q 96 132 144 100"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
      </svg>

      {/* Growth & listed companies — top */}
      <div
        className="animate-float absolute left-1/2 top-0 flex h-[34%] w-[34%] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md"
        style={{ animationDuration: "6s" }}
      >
        <p className="text-[11px] font-medium leading-snug text-white sm:text-sm">
          Growth &amp; listed companies
        </p>
      </div>

      {/* Investors — bottom right */}
      <div
        className="animate-float absolute right-[4%] top-[55%] flex h-[30%] w-[30%] items-center justify-center rounded-full border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md"
        style={{ animationDuration: "7s", animationDelay: "0.8s" }}
      >
        <p className="text-[11px] font-medium leading-snug text-white sm:text-sm">
          Investors
        </p>
      </div>

      {/* Global partners — bottom left */}
      <div
        className="animate-float absolute left-[4%] top-[55%] flex h-[30%] w-[30%] items-center justify-center rounded-full border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md"
        style={{ animationDuration: "6.5s", animationDelay: "1.4s" }}
      >
        <p className="text-[11px] font-medium leading-snug text-white sm:text-sm">
          Global partners
        </p>
      </div>

      {/* Small note bubble — centre */}
      <div
        className="animate-float absolute left-[31%] top-[34%] flex h-[26%] w-[26%] items-center justify-center rounded-full border border-white/15 bg-white/[0.07] p-3 text-center backdrop-blur-md"
        style={{ animationDuration: "8s", animationDelay: "0.4s" }}
      >
        <p className="text-[8px] font-medium leading-snug text-white/80 sm:text-[9px]">
          M&amp;A advice and access to equity &amp; debt capital markets
        </p>
      </div>
    </div>
  );
}
