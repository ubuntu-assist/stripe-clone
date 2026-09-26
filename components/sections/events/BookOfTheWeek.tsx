import Image from "next/image";
import { BookIllustration } from "@/components/icons/BookIllustration";
import { StripePressIcon } from "@/components/icons/StripePressIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { bookOfTheWeek } from "@/data/book-of-the-week";
import { rowGap } from "@/lib/spacing";

export function BookOfTheWeek() {
  return (
    <div className="section-row section-row-gap" style={rowGap({ mb: 500, tb: 600, dt: 800 })}>
      <SectionTitle
        span={6}
        className="section-title--stacked"
        as="h3"
        title="Book of the week"
        subtitle="Entrepreneurship starts with ideas."
      />
      <div>
        <div className="book-of-the-week">
          <div
            className="book-of-the-week__image-container"
            style={{ "--book-of-the-week-background-color": bookOfTheWeek.accentColor }}
          >
            <picture className="book-of-the-week__picture">
              <Image
                className="book-of-the-week__image"
                src={bookOfTheWeek.cover.src}
                alt={bookOfTheWeek.cover.alt}
                width={bookOfTheWeek.cover.width}
                height={bookOfTheWeek.cover.height}
                sizes="(max-width: 639px) 220px, (max-width: 939px) 33vw, 296px"
              />
            </picture>
          </div>
          <div className="book-of-the-week__content">
            <BookIllustration className="book-of-the-week__icon" />
            <div className="book-of-the-week__text">
              <div className="book-of-the-week__author-block">
                <h4 className="hds-heading book-of-the-week__book-title hds-heading--md">
                  {bookOfTheWeek.title}
                </h4>{" "}
                <span className="hds-heading book-of-the-week__author hds-heading--md hds-heading--subdued">
                  {bookOfTheWeek.author}
                </span>
              </div>
              <div className="hds-text book-of-the-week__description hds-text--md hds-text--soft">
                {bookOfTheWeek.descriptionBefore}
                <a
                  className="hds-link hds-link--secondary"
                  href={bookOfTheWeek.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  book
                </a>
                {bookOfTheWeek.descriptionAfter}
              </div>
              <div className="book-of-the-week__button-container">
                <p className="hds-text book-of-the-week__see-also hds-text--xxs hds-text--soft">
                  For more ideas on economic progress and technological advancement, see our
                  in-house publications:
                </p>
                <div className="hds-button-group">
                  <a className="book-button" href="https://press.stripe.com/">
                    <div className="book-button__icon-container">
                      <StripePressIcon />
                    </div>
                    <span className="book-button__text">Stripe Press</span>
                  </a>
                  <a className="book-button" href="https://worksinprogress.co/">
                    <div className="book-button__icon-container">
                      <picture>
                        <Image
                          src="/images/events/work-in-progress-icon.png"
                          alt=""
                          width={64}
                          height={64}
                        />
                      </picture>
                    </div>
                    <span className="book-button__text">Works in Progress</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
