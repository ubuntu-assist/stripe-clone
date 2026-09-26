"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import type { Testimonial } from "@/types/content";
import styles from "./TestimonialCarousel.module.css";

export type TestimonialItem = Omit<Testimonial, "logo"> & { logo: ReactNode };

/** "What our customers say" — a swipeable row of testimonial cards with prev/next controls. */
export function TestimonialCarousel({ items }: { items: TestimonialItem[] }) {
  const { attach, canPrev, canNext, prev, next } = useCarouselScroll<HTMLDivElement>();

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Customer stories</p>
          <h4 id="testimonials-title" className={styles.title}>
            What our <span className={styles.highlight}>customers</span> say
          </h4>
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Previous testimonial"
            disabled={!canPrev}
            onClick={prev}
          >
            <ChevronLeft className={styles.navIcon} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Next testimonial"
            disabled={!canNext}
            onClick={next}
          >
            <ChevronRight className={styles.navIcon} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div ref={attach} className={styles.track} role="list">
        {items.map((item) => (
          <article key={item.company} className={styles.card} role="listitem">
            <div className={styles.cardTop}>
              <div className={styles.logo}>{item.logo}</div>
              <Image
                className={styles.avatar}
                src={item.headshot}
                alt={item.author}
                width={64}
                height={64}
              />
            </div>

            <blockquote className={styles.quoteBlock}>
              <Quote className={styles.quoteIcon} aria-hidden="true" />
              <p className={styles.quote}>{item.quote}</p>
            </blockquote>

            <div className={styles.author}>
              <p className={styles.name}>{item.author}</p>
              <p className={styles.role}>{item.role}</p>
              <a className={styles.storyLink} href={item.href}>
                Read {item.company}’s story
                <ChevronRight className={styles.storyLinkIcon} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
