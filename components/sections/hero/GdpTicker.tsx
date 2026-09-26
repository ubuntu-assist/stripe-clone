"use client";

import { useEffect, useState } from "react";

/**
 * The original page projects the share of global GDP running on Stripe from an
 * IMF baseline and a growth rate, ticking up continuously. We start from the
 * value captured in the snapshot and advance the last digit on a timer, which
 * reproduces the effect without the underlying model.
 */
const SNAPSHOT_VALUE = 1.72157076;
const STEP = 0.00000001;
const TICK_MS = 1500;

function formatPercent(value: number) {
  return `${value.toFixed(8)}%`;
}

export function GdpTicker() {
  const [value, setValue] = useState(SNAPSHOT_VALUE);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setValue((v) => v + STEP), TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="hero-section__eyebrow" aria-hidden="true">
      <span className="hero-section__eyebrow-label">Global GDP running on Stripe:</span>{" "}
      <span className="hero-section__eyebrow-value tabular-nums--tight">
        <span className="hero-section__eyebrow-value__content-outgoing">
          {Array.from(formatPercent(value)).map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </span>
      </span>
    </div>
  );
}
