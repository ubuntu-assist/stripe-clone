"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronNextIcon, ChevronPrevIcon } from "@/components/icons/CarouselChevrons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { events } from "@/data/events";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import { cx } from "@/lib/cx";
import { rowGap } from "@/lib/spacing";

/**
 * "What's happening" carousel.
 *
 * Desktop: on stripe.com the images are drawn by a WebGL "squeezy" canvas. Here
 * `.events-stage` (styles/components/events-stage.css) recreates the effect with
 * flexbox — the active image widens while the others collapse into slivers.
 * Mobile: a swipeable scroll-snap carousel of cards.
 */
export function EventsCarousel() {
  const [active, setActive] = useState(0);
  const { attach: attachMobileScroller } = useCarouselScroll<HTMLUListElement>();
  const count = events.length;
  const go = (delta: number) => setActive((i) => (i + delta + count) % count);

  return (
    <section
      className="section-row section-row-gap"
      aria-labelledby="events-carousel-heading"
      style={rowGap({ mb: 500 })}
    >
      <header className="events-carousel__header">
        <div className="events-carousel__header-content">
          <h2
            id="events-carousel-heading"
            className="hds-heading events-carousel__header-title hds-heading--lg"
          >
            What’s happening
          </h2>
          <p className="hds-heading events-carousel__header-subtitle hds-heading--lg hds-heading--subdued">
            See the latest from Stripe.
          </p>
        </div>
        <div className="events-carousel__controls" role="group" aria-label="Carousel navigation">
          <button
            type="button"
            className="hds-ui-button hds-ui-button--quiet"
            aria-label="Previous slide"
            onClick={() => go(-1)}
          >
            <ChevronPrevIcon />
          </button>
          <button
            type="button"
            className="hds-ui-button hds-ui-button--quiet"
            aria-label="Next slide"
            onClick={() => go(1)}
          >
            <ChevronNextIcon />
          </button>
        </div>
      </header>

      {/* Desktop */}
      <div className="section-row squeezy-carousel section-row-gap" style={rowGap({ tb: 400 })}>
        <div className="events-stage" aria-hidden="true">
          {events.map((event, i) => (
            <button
              key={event.href}
              type="button"
              tabIndex={-1}
              className={cx("events-stage__item", i === active && "events-stage__item--active")}
              onClick={() => setActive(i)}
            >
              <Image src={event.image} alt="" fill sizes="(min-width: 940px) 800px, 100vw" />
            </button>
          ))}
        </div>
        <div className="squeezy-carousel__items-details-container">
          {events.map((event, i) => {
            const isActive = i === active;
            return (
              <div
                key={event.href}
                className="squeezy-carousel__item-details"
                aria-hidden={!isActive}
                style={{
                  transform: `translateX(${-i * 100}%)`,
                  pointerEvents: isActive ? "auto" : "none",
                  opacity: isActive ? 1 : 0,
                }}
              >
                <div className="squeezy-carousel__item-copy">
                  <h3 className="hds-heading hds-heading--sm hds-heading--inline">{event.title}</h3>{" "}
                  <p className="hds-heading hds-heading--sm hds-heading--subdued hds-heading--inline">
                    {event.description}
                  </p>
                </div>
                <ButtonLink
                  href={event.href}
                  variant="secondary"
                  aria-label={event.ctaLabel}
                  tabIndex={isActive ? 0 : -1}
                  withArrow
                >
                  {event.cta}
                </ButtonLink>
              </div>
            );
          })}
        </div>
      </div>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Item {active + 1} of {count}: {events[active].title}
      </div>

      {/* Mobile */}
      <div className="events-mobile-carousel">
        <div className="carousel__section-container mobile-carousel">
          <ul
            ref={attachMobileScroller}
            role="list"
            className="carousel__scroller mobile-carousel__scroller"
          >
            {events.map((event, i) => (
              <li
                key={event.href}
                className="carousel__item mobile-carousel__item"
                style={{ "--carousel-item-index": i }}
              >
                <div className="carousel__inner">
                  <div className="events-mobile-carousel-card">
                    <div className="events-mobile-carousel-card__media">
                      <picture>
                        <Image
                          className="events-mobile-carousel-card__image"
                          src={event.image}
                          alt=""
                          width={672}
                          height={700}
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                    <div className="events-mobile-carousel-card__title">
                      <span className="hds-heading hds-heading--md hds-heading--inline">
                        {event.title}
                      </span>{" "}
                      <span className="hds-heading squeezy-carousel__itemDescription hds-heading--md hds-heading--subdued hds-heading--inline">
                        {event.description}
                      </span>
                    </div>
                    <ButtonLink
                      href={event.href}
                      variant="secondary"
                      className="events-mobile-carousel-card__link"
                      aria-label={event.ctaLabel}
                      withArrow
                    >
                      {event.cta}
                    </ButtonLink>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
