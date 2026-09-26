"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TimeOfDayIcon } from "@/components/icons/TimeOfDayIcon";
import { globalStats } from "@/data/stats";
import { cx } from "@/lib/cx";
import { rowGap } from "@/lib/spacing";
import type { Stat } from "@/types/content";

const TIMES_OF_DAY = ["pre-dawn", "sunrise", "daytime", "dusk", "sunset", "night"] as const;
type TimeOfDay = (typeof TIMES_OF_DAY)[number];

const timeLabel = (time: TimeOfDay) =>
  time.charAt(0).toUpperCase() + time.slice(1).replace("-", " ");

/** Renders a stat description, turning the optional linked phrase into an anchor. */
function StatDescription({ stat }: { stat: Stat }) {
  if (!stat.link) return <>{stat.description}</>;
  const rest = stat.description.replace(stat.link.text, "");
  return (
    <>
      <a
        className="hds-link stats-menu__stat-description__link hds-link--secondary"
        href={stat.link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {stat.link.text}
      </a>
      {rest}
    </>
  );
}

export function StatsSection() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [time, setTime] = useState<TimeOfDay>("dusk");
  const [menuHeight, setMenuHeight] = useState(182);
  const menuRef = useRef<HTMLDivElement>(null);

  // The decorative border and indicator are sized from the stats menu.
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const observer = new ResizeObserver(([entry]) => setMenuHeight(entry.contentRect.height));
    observer.observe(menu);
    return () => observer.disconnect();
  }, []);

  const menuHeightVar = `${Math.round(menuHeight)}px`;

  return (
    <section
      className={cx(
        "hds-color-mode stats-section",
        `stats-section--time-${time}`,
        "section section--white hds-mode--light",
      )}
    >
      <span
        className="stats-section__border"
        aria-hidden="true"
        style={{ "--stats-menu-height": menuHeightVar }}
      >
        <span className="stats-section__border-inline-graphic" />
      </span>
      <span
        className="stats-section__active-indicator-container"
        aria-hidden="true"
        style={{
          "--active-stat-index": active,
          "--hover-indicator-index": hovered ?? active,
          "--stats-menu-height": menuHeightVar,
        }}
      >
        <span className="stats-section__active-indicator-graphic">
          <span className="stats-section__active-indicator stats-section__active-indicator--top" />
          <span className="stats-section__active-indicator stats-section__active-indicator--bottom" />
        </span>
      </span>

      <div className="section-container stats-section__container">
        <div className="section-row section-row-gap" style={rowGap({ mb: 500, tb: 700, dt: 1000 })}>
          <h2 className="hds-heading stats-section__title hds-heading--xxl">
            The backbone of global commerce
          </h2>

          {/* Mobile: a plain list */}
          <div className="stats-section__stats-list">
            {globalStats.map((stat) => (
              <div key={stat.id} className="stats-list__stat">
                <p className="hds-text stats-list__stat-value hds-text--xxl">{stat.value}</p>
                <p className="hds-text stats-list__stat-description hds-text--md">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tablet/desktop: selectable stats */}
          <div ref={menuRef} className="stats-section__stats-menu">
            {globalStats.map((stat, i) => {
              const valueId = `stat-${stat.id}-value`;
              const descriptionId = `stat-${stat.id}-description`;
              return (
                <div key={stat.id} className="stats-menu__stat-wrapper">
                  <button
                    type="button"
                    className={cx("stats-menu__stat", i === active && "stats-menu__stat--active")}
                    aria-labelledby={valueId}
                    aria-describedby={descriptionId}
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <p id={valueId} className="hds-text stats-menu__stat-value hds-text--xxl">
                      {stat.value}
                    </p>
                  </button>
                  <span
                    id={descriptionId}
                    className="hds-text stats-menu__stat-description hds-text--md"
                    aria-hidden={stat.link ? undefined : true}
                  >
                    <StatDescription stat={stat} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="stats-section__stats-spacer">
          <div className="stats-section__controls">
            {/* Cycles the sky gradient through the times of day. */}
            <button
              type="button"
              className="time-of-day-select__trigger"
              data-value={time}
              aria-label={`${timeLabel(time)}. Change the time of day`}
              onClick={() =>
                setTime((t) => TIMES_OF_DAY[(TIMES_OF_DAY.indexOf(t) + 1) % TIMES_OF_DAY.length])
              }
            >
              <TimeOfDayIcon />
            </button>
          </div>
          <div className="data-viz">
            <div className="data-viz__static">
              {globalStats.map((stat, i) => (
                <picture key={stat.id} hidden={i !== active}>
                  <Image
                    src={stat.visual}
                    alt=""
                    width={2468}
                    height={1038}
                    sizes="(min-width: 1266px) 1266px, (min-width: 940px) 100vw, 150vw"
                  />
                </picture>
              ))}
            </div>
          </div>
        </div>
        <div className="stats-section__globe">
          <picture className="stats-section__globe-picture">
            <Image
              src="/images/stats/dataviz-static3x.png"
              alt=""
              width={2304}
              height={900}
              sizes="(min-width: 1264px) 1152px, 100vw"
            />
          </picture>
        </div>
      </div>

      <div className="section-background" aria-hidden="true">
        <div className="stats-animation-gradient">
          {TIMES_OF_DAY.map((t) => (
            <div
              key={t}
              className={cx(
                "stats-animation-gradient__gradient",
                `stats-animation-gradient__gradient--${t}`,
                t === time && "stats-animation-gradient__gradient--active",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
