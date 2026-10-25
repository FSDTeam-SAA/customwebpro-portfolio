"use client";

import { useCallback, useEffect, useState } from "react";

type IntroPhase = "visible" | "leaving" | "hidden";

export function IntroVideo() {
  const [phase, setPhase] = useState<IntroPhase>("hidden");

  const finishIntro = useCallback(() => {
    setPhase((current) => (current === "visible" ? "leaving" : current));
  }, []);

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (navigation?.type === "reload") setPhase("visible");
  }, []);

  useEffect(() => {
    if (phase !== "visible") return;

    const safetyTimer = window.setTimeout(finishIntro, 5200);
    return () => window.clearTimeout(safetyTimer);
  }, [finishIntro, phase]);

  useEffect(() => {
    if (phase !== "leaving") return;

    const hideTimer = window.setTimeout(() => setPhase("hidden"), 650);
    return () => window.clearTimeout(hideTimer);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      aria-label="CustomWeb Pro introduction"
      className={`intro-video fixed inset-0 z-[9999] w-full overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0%,#f5f4ef_52%,#e6ebdf_100%)] duration-700 ${
        phase === "leaving"
          ? "pointer-events-none scale-110 opacity-0 blur-sm [clip-path:circle(0%_at_50%_50%)]"
          : "scale-100 opacity-100 blur-0 [clip-path:circle(150%_at_50%_50%)]"
      }`}
    >
      <div className="intro-bg-orb intro-bg-orb-left" aria-hidden="true" />
      <div className="intro-bg-orb intro-bg-orb-right" aria-hidden="true" />
      <div className="intro-bg-grid absolute inset-0 opacity-[0.16]" aria-hidden="true" />
      <div className="intro-brand flex h-full w-full items-center justify-center px-5">
        <div className="intro-mark relative shrink-0">
          <span className="intro-mark-glow absolute inset-1 rounded-full" />
          <svg
            viewBox="0 0 47.2019 46"
            className="relative h-[72px] w-[74px] overflow-visible sm:h-[106px] sm:w-[109px]"
            aria-hidden="true"
          >
            <path
              className="intro-logo-path intro-logo-path-one"
              pathLength="1"
              d="M20.2138 0L38.3515 10.38L29.9382 15.6449L20.2138 10.0305L8.63183 16.7173V29.6769L16.3895 34.1558L22.1805 30.8124L30.4846 39.5534L19.886 46L0 34.3088V12.1283L20.2138 0Z"
            />
            <path
              className="intro-logo-path intro-logo-path-two"
              pathLength="1"
              d="M43.7055 35.1829L38.5701 29.3919V21.6342L47.2019 16.4988V32.4513L43.7055 35.1829Z"
            />
            <path
              className="intro-logo-path intro-logo-path-three"
              pathLength="1"
              d="M23.601 15.734L15.8432 19.9952L36.1663 41.3017L42.8314 35.9477L23.601 15.734Z"
            />
          </svg>
        </div>

        <div
          className="intro-wordmark overflow-hidden whitespace-nowrap"
          onAnimationEnd={finishIntro}
        >
          <div className="pl-3 text-[32px] font-extrabold tracking-[-2px] text-[#111] sm:pl-5 sm:text-[58px]">
            CustomWeb<span className="text-[#033C38]">Pro</span>
          </div>
        </div>
      </div>
    </div>
  );
}
