import Image from "next/image";
import { BrandLogo } from "@/components/logos/BrandLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";

const WATCH_URL =
  "https://stripe.com/sessions/2026?utm_medium=owned-surfaces&utm_source=9cb9&utm_campaign=GLOBAL_4301&utm_content=8a70&utm_term=5a728d3d167c";

/** Promo banner for Stripe Sessions on demand. */
export function SessionsSection() {
  return (
    <section className="hds-color-mode section section--white hds-mode--light">
      <div className="section-container sessions-section">
        <div className="sessions-on-demand__wrapper">
          <picture className="sessions-on-demand-background sessions-on-demand-background-desktop--desktop">
            <Image
              className="sessions-on-demand-background-image"
              src="/images/sessions/sessions-2026-on-demand-bg.png"
              alt=""
              width={2464}
              height={800}
              sizes="(min-width: 1264px) 1232px, 100vw"
            />
          </picture>
          <picture className="sessions-on-demand-background sessions-on-demand-background-desktop--mobile">
            <Image
              className="sessions-on-demand-background-image"
              src="/images/sessions/sessions-2026-on-demand-bg-mobile.png"
              alt=""
              width={736}
              height={1184}
              sizes="100vw"
            />
          </picture>
          <div className="sessions-on-demand-content">
            <div className="sessions-on-demand-content-description">
              <div className="sessions-on-demand-content-description-text">
                <span className="hds-heading sessions-section__header-text hds-heading--xl">
                  Building the economic infrastructure for AI
                </span>
                <ButtonLink href={WATCH_URL} className="sessions-section__cta-button" withArrow>
                  Watch now
                </ButtonLink>
              </div>
              <div className="sessions-on-demand-content-logo">
                <BrandLogo name="stripe-sessions" label="Stripe Sessions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
