import { DocumentCodeIcon, TagPriceIcon } from "@/components/icons/charm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FeatureDetail } from "@/components/ui/FeatureDetail";
import { getStartedFeatures } from "@/data/features";
import { navLinks } from "@/data/navigation";
import { rowGap } from "@/lib/spacing";

const icons = [<TagPriceIcon key="price" />, <DocumentCodeIcon key="code" />];

/** Closing call-to-action above the footer. */
export function GetStartedSection() {
  return (
    <section className="hds-color-mode section hds-mode--light">
      <div className="section-container footer-cta-section__grid">
        <div
          className="section-row footer-cta-section__content section-row-gap"
          style={rowGap({ mb: 300, tb: 400 })}
        >
          <div className="footer-cta-section__content-text">
            <span className="hds-heading footer-cta-section__title hds-heading--lg">
              Ready to get started?
            </span>
            <p className="hds-text footer-cta-section__description hds-text--xl hds-text--soft">
              Create an account instantly, or contact us to design a custom package for your
              business.
            </p>
          </div>
          <div className="hds-button-group">
            <ButtonLink href={navLinks.startNow.href} withArrow>
              {navLinks.startNow.label}
            </ButtonLink>
            <ButtonLink href={navLinks.contactSales.href} variant="secondary">
              {navLinks.contactSales.label}
            </ButtonLink>
          </div>
        </div>

        <div className="footer-cta-section__feature-grid">
          {getStartedFeatures.map((feature, i) => (
            <div key={feature.title} className="footer-cta-section__feature-card">
              <FeatureDetail
                {...feature}
                icon={icons[i]}
                stacked
                className="footer-cta-section__feature-detail"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
