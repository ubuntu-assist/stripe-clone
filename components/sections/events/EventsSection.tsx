import { rowGap } from "@/lib/spacing";
import { BookOfTheWeek } from "./BookOfTheWeek";
import { EventsCarousel } from "./EventsCarousel";

export function EventsSection() {
  return (
    <section className="hds-color-mode section section--white hds-mode--light">
      <div className="section-container events-section-container">
        <div className="section-row section-row-gap" style={rowGap({ mb: 500, tb: 600, dt: 800 })}>
          <EventsCarousel />
          <div className="divider-wrapper" />
          <BookOfTheWeek />
        </div>
      </div>
    </section>
  );
}
