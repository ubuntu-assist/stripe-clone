import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GdpTicker } from "./GdpTicker";
import { HeroWaveBackground } from "./HeroWaveBackground";

const title = "Financial infrastructure to grow your revenue.";
const copy =
  "Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth.";

export function HeroSection() {
  return (
    <section className="hds-color-mode hero-section-container section section--white hds-mode--light">
      <div className="section-container hero-section__layout">
        <div className="hero-section__layout-grid">
          <GdpTicker />

          {/* The title is rendered twice: a coloured layer behind, and a hard-light blended layer in front. */}
          <h1 className="hds-heading hero-section__title hero-section__title--background hds-heading--xl">
            <em className="hero-section__title-main">{title}</em>{" "}
            <span className="hero-section__title-copy">{copy}</span>
          </h1>
          <h1
            className="hds-heading hero-section__title hero-section__title--foreground hds-heading--xl"
            aria-hidden="true"
          >
            <em className="hero-section__title-main">{title}</em>{" "}
            <span className="hero-section__title-copy">{copy}</span>
          </h1>

          <div className="hds-button-group hero-section__actions">
            <ButtonLink href="https://dashboard.stripe.com/register" withArrow>
              Get started
            </ButtonLink>
            <ButtonLink
              href="https://dashboard.stripe.com/login/oauth/google/init"
              variant="secondary"
              className="hero-section__button--google"
            >
              <GoogleIcon />
              Sign up with Google
            </ButtonLink>
          </div>
        </div>
      </div>

      <HeroWaveBackground />
    </section>
  );
}
