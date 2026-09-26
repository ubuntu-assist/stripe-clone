"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { PlusIcon } from "@/components/icons/PlusIcon";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cx } from "@/lib/cx";
import type { CustomerStory } from "@/types/content";

export type CustomerStoryItem = Omit<CustomerStory, "logo"> & { logo: ReactNode };

/** Collapsed width of the round "+" button; it expands to fit "Read the story". */
const COLLAPSED_BUTTON_WIDTH = 40;
/** Horizontal padding around the label inside the expanded button. */
const BUTTON_PADDING = 46;

/** Accordion of enterprise customer stories; exactly one story is open at a time. */
export function CustomerStories({ stories }: { stories: CustomerStoryItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);
  const [labelWidths, setLabelWidths] = useState<number[]>([]);

  // Measure content heights (for the max-height transition) and label widths.
  useLayoutEffect(() => {
    const measure = () => {
      setHeights(contentRefs.current.map((el) => el?.scrollHeight ?? 0));
      setLabelWidths(labelRefs.current.map((el) => el?.offsetWidth ?? 0));
    };
    measure();
    const observer = new ResizeObserver(measure);
    contentRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="customer-stories">
      {stories.map((story, i) => {
        const open = i === openIndex;
        const summaryId = `summary-customer-content-${story.id}`;
        const detailId = `detail-customer-content-${story.id}`;
        const buttonWidth = open
          ? `${(labelWidths[i] ?? 0) + BUTTON_PADDING}px`
          : `${COLLAPSED_BUTTON_WIDTH}px`;

        return (
          <div
            key={story.id}
            id={`customer-${story.id}`}
            className="customer-stories__customer"
            style={{ "--idx": i }}
          >
            <div
              className={cx(
                "customer-stories__customer-summary",
                open && "customer-stories__customer-summary--open",
              )}
            >
              <div className="customer-stories__customer-summary-logo">{story.logo}</div>
              <button
                type="button"
                className="customer-stories__customer-button"
                aria-expanded={open}
                aria-controls={detailId}
                onClick={() => setOpenIndex(i)}
              >
                <h3
                  id={summaryId}
                  className="hds-heading customer-stories__customer-summary-description hds-heading--sm"
                >
                  {story.summary}
                </h3>
              </button>
              <div className="customer-stories__customer-summary-action">
                <a
                  className={cx(
                    "hds-button customer-story-button",
                    open && "customer-story-button--open",
                    "hds-button--secondary-on-quiet hds-button--compact",
                  )}
                  href={story.href}
                  style={{ width: buttonWidth }}
                  tabIndex={open ? 0 : -1}
                  aria-label={`Read ${story.name}'s story`}
                >
                  <div className="customer-story-button__container" style={{ width: buttonWidth }}>
                    <div
                      ref={(el) => {
                        labelRefs.current[i] = el;
                      }}
                      className="customer-story-button__text"
                      style={{ opacity: open ? 1 : 0 }}
                    >
                      <div>Read the story</div>
                      <span className="hds-nowrap-svg">
                        <ArrowIcon />
                      </span>
                    </div>
                    <div className="customer-story-button__icon" style={{ opacity: open ? 0 : 1 }}>
                      <PlusIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
              id={detailId}
              role="region"
              aria-labelledby={summaryId}
              className="customer-stories__customer-content"
              style={{ "--max-height": open ? `${heights[i] ?? 0}px` : "0px" }}
            >
              <div className="customer-stories__customer-image">
                <picture>
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    width={story.image.width}
                    height={story.image.height}
                    sizes="(min-width: 940px) 800px, 100vw"
                  />
                </picture>
              </div>
              <div className="customer-stories__customer-data">
                {story.stats.map((stat) => (
                  <div key={stat.value} className="customer-stories__customer-data-stat">
                    <div className="hds-text hds-text--md hds-text--inline hds-text--soft">
                      <p className="hds-text hds-text--md hds-text--emphasized hds-text--inline">
                        {stat.value}
                      </p>{" "}
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="customer-stories__customer-content--read">
                <ButtonLink
                  href={story.href}
                  variant="secondary"
                  aria-label={`Read ${story.name}'s story`}
                  tabIndex={open ? undefined : -1}
                  withArrow
                >
                  Read the story
                </ButtonLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
