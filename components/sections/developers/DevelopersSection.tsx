import { ButtonLink } from "@/components/ui/ButtonLink";
import { FeatureDetail } from "@/components/ui/FeatureDetail";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { integrationPaths, scaleStats } from "@/data/features";
import { cx } from "@/lib/cx";
import { columnsRowGap, responsiveSpace, rowGap } from "@/lib/spacing";
import { CodeEditorIllustration } from "./graphics/CodeEditorIllustration";
import { DevelopersWave } from "./graphics/DevelopersWave";
import { NoCodeIllustration } from "./graphics/NoCodeIllustration";
import { PlatformDirectoryIllustration } from "./graphics/PlatformDirectoryIllustration";
import { SystemsDiagram } from "./graphics/SystemsDiagram";

const integrationIllustrations = [
  <NoCodeIllustration key="no-code" />,
  <PlatformDirectoryIllustration key="platforms" />,
  <CodeEditorIllustration key="code" />,
];

export function DevelopersSection() {
  return (
    <section className="hds-color-mode section hds-mode--dark">
      <div
        className="section-container section-row section-row-gap"
        style={rowGap({ mb: 500, tb: 600, dt: 800 })}
      >
        <div className="section-row section-row-gap" style={rowGap({ mb: 300, tb: 400 })}>
          <SectionTitle
            title="Reliable, extensible infrastructure for every stack."
            subtitle="Adapt Stripe to your business needs with flexible integration options."
            className="section-title-padding-inline-end"
            style={responsiveSpace("section-title-padding-inline-end", { tb: 500, dt: 100 })}
          />
          <div className="hds-button-group">
            <ButtonLink href="https://docs.stripe.com/development" withArrow>
              View developer docs
            </ButtonLink>
            <ButtonLink href="https://github.com/stripe" variant="secondary">
              View Stripe’s GitHub
            </ButtonLink>
          </div>
        </div>

        <span className="section-header-divider" />

        <div className="section-row section-row-gap" style={rowGap({ mb: 500, tb: 600, dt: 800 })}>
          <div className="section-row section-row-gap" style={rowGap({ mb: 700, tb: 800 })}>
            <SectionTitle
              as="h3"
              size="md"
              span={7}
              title="Connect to existing systems."
              subtitle="Orchestrate payments across multiple processors, build custom workflows, and connect to third parties using APIs, partner apps, or prebuilt integrations."
              subtitleClassName="developers-subsection__description"
            />
            <SystemsDiagram />
          </div>

          <div className="divider-wrapper" />

          <div className="developers-scale-subsection">
            <SectionTitle
              as="h3"
              size="md"
              span={7}
              className="developers-scale-subsection__content"
              title="Scale with confidence."
              subtitle="Handle thousands of transactions per second with consistent speed and reliability, even during peak traffic periods."
              subtitleClassName="developers-subsection__description"
            />
            <DevelopersWave />
            <div className="developers-scale-subsection__stats-grid">
              {scaleStats.map((stat) => (
                <div key={stat.label} className="developers-scale-subsection__stats-grid-item">
                  <h4
                    className={cx(
                      "hds-heading",
                      `developers-scale-subsection__stats-grid-item-heading--${stat.accent}`,
                      "hds-heading--xl",
                    )}
                  >
                    {stat.value}
                  </h4>
                  <p className="hds-text hds-text--md">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="divider-wrapper" />

          <div
            className="section-row section-row-gap"
            style={rowGap({ mb: 500, tb: 600, dt: 800 })}
          >
            <SectionTitle
              as="h3"
              size="md"
              span={7}
              title="Choose an integration path."
              subtitle="With AI-powered support, rich documentation, and built-in debugging tools, you can quickly get started with the best option for your business."
              subtitleClassName="developers-subsection__description"
            />
            <div
              className="columns columns-row-gap"
              style={{ "--columns-count-dt": 3, ...columnsRowGap({ mb: 300, tb: 400 }) }}
            >
              {integrationPaths.map((feature, i) => (
                <FeatureDetail
                  key={feature.title}
                  {...feature}
                  media={integrationIllustrations[i]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
