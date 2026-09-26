"use client";

import { useCallback, useEffect, useState } from "react";

interface CarouselState {
  /** Index of the item closest to the start edge. */
  index: number;
  canPrev: boolean;
  canNext: boolean;
}

/** Distance between the start edges of two consecutive items. */
function getStride(el: HTMLElement) {
  const [first, second] = Array.from(el.children) as HTMLElement[];
  if (first && second) return second.offsetLeft - first.offsetLeft;
  return first?.offsetWidth || el.clientWidth;
}

/**
 * Drives a horizontally scrolling (scroll-snap) carousel:
 * - exposes `--carousel-scroll-progress` on the scroller for the CSS item effects
 * - tracks the current index and whether prev/next are possible
 * - provides smooth `prev`, `next` and `scrollTo(index)` helpers
 *
 * Pass the returned `attach` callback as the `ref` of the scrolling element.
 */
export function useCarouselScroll<T extends HTMLElement = HTMLUListElement>() {
  const [scroller, setScroller] = useState<T | null>(null);
  const [state, setState] = useState<CarouselState>({ index: 0, canPrev: false, canNext: true });

  useEffect(() => {
    if (!scroller) return;

    const update = () => {
      const stride = getStride(scroller);
      const progress = stride ? scroller.scrollLeft / stride : 0;
      scroller.style.setProperty("--carousel-scroll-progress", progress.toFixed(6));
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const next: CarouselState = {
        index: Math.round(progress),
        canPrev: scroller.scrollLeft > 1,
        canNext: scroller.scrollLeft < maxScroll - 1,
      };
      setState((prev) =>
        prev.index === next.index && prev.canPrev === next.canPrev && prev.canNext === next.canNext
          ? prev
          : next,
      );
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    return () => {
      scroller.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [scroller]);

  const scrollTo = useCallback(
    (index: number) =>
      scroller?.scrollTo({ left: index * getStride(scroller), behavior: "smooth" }),
    [scroller],
  );

  const scrollByItems = useCallback(
    (delta: number) =>
      scroller?.scrollBy({ left: delta * getStride(scroller), behavior: "smooth" }),
    [scroller],
  );

  return {
    attach: setScroller,
    ...state,
    scrollTo,
    prev: () => scrollByItems(-1),
    next: () => scrollByItems(1),
  };
}
