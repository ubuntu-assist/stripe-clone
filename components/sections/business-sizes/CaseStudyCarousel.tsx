"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ChevronNextIcon, ChevronPrevIcon } from "@/components/icons/CarouselChevrons";
import { FakeCalloutLink } from "@/components/ui/CalloutLink";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import type { CaseStudy } from "@/types/content";

export type CaseStudyItem = Omit<CaseStudy, "logo"> & { logo: ReactNode };

export function CaseStudyCarousel({ items }: { items: CaseStudyItem[] }) {
  const { attach, canPrev, canNext, prev, next } = useCarouselScroll<HTMLUListElement>();

  return (
    <section className="startups-carousel" aria-label="Customer stories">
      <div className="carousel-nav startups-carousel__nav" role="group">
        <button
          type="button"
          className="hds-ui-button hds-ui-button--quiet"
          aria-label="Previous customer story"
          disabled={!canPrev}
          onClick={prev}
        >
          <ChevronPrevIcon />
        </button>
        <button
          type="button"
          className="hds-ui-button hds-ui-button--quiet"
          aria-label="Next customer story"
          disabled={!canNext}
          onClick={next}
        >
          <ChevronNextIcon />
        </button>
      </div>

      <div
        className="carousel__section-container case-study-carousel"
        style={{
          "--case-study-carousel-card-max-width": "332px",
          "--case-study-carousel-card-fluid-width": "26.27cqi",
          "--carousel-hover-scale-target": "1.036",
        }}
      >
        <ul ref={attach} role="list" className="carousel__scroller case-study-carousel__scroller">
          {items.map((item, i) => (
            <li
              key={item.href}
              className="carousel__item case-study-carousel__item"
              style={{ "--carousel-item-index": i }}
            >
              <div className="carousel__inner case-study-carousel__inner">
                <a className="case-study-card" href={item.href}>
                  <div className="case-study-card__media">
                    <picture>
                      <Image
                        className="case-study-card__image"
                        src={item.image}
                        alt=""
                        width={864}
                        height={960}
                        sizes="332px"
                      />
                    </picture>
                  </div>
                  <div className="case-study-card__mediaLogo">{item.logo}</div>
                  <h4 className="hds-text case-study-card__title hds-text--md">{item.title}</h4>
                  <FakeCalloutLink className="case-study-card__link">{item.cta}</FakeCalloutLink>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
