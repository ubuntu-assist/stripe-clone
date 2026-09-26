import Image from "next/image";
import { AtlasGraphic } from "@/components/icons/AtlasGraphic";
import {
  AppsPlusIcon,
  ArrowGrowthIcon,
  FastForwardIcon,
  PersonStackIcon,
  QuestionChatIcon,
  ShieldIcon,
} from "@/components/icons/charm";
import { BrandLogo } from "@/components/logos/BrandLogo";
import { FakeCalloutLink } from "@/components/ui/CalloutLink";
import { FeatureDetail } from "@/components/ui/FeatureDetail";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { caseStudies, customerStories, testimonials } from "@/data/customers";
import { enterpriseServices, platformFeatures, startupPrograms } from "@/data/features";
import { columnsRowGap, rowGap } from "@/lib/spacing";
import { CaseStudyCarousel } from "./CaseStudyCarousel";
import { CustomerStories } from "./CustomerStories";
import { TestimonialCarousel } from "./TestimonialCarousel";

const enterpriseIcons = [
  <AppsPlusIcon key="a" />,
  <PersonStackIcon key="b" />,
  <QuestionChatIcon key="c" />,
];
const platformIcons = [
  <FastForwardIcon key="a" />,
  <ArrowGrowthIcon key="b" />,
  <ShieldIcon key="c" />,
];

function EnterpriseSubsection() {
  return (
    <section className="section-row section-row-gap" style={rowGap({ mb: 300, tb: 400, dt: 600 })}>
      <SectionHeader
        title="Transform your enterprise with agile financial infrastructure"
        description="50% of Fortune 100 companies have used Stripe to grow their businesses—from expanding internationally to reimagining the customer experience."
        cta={{ label: "Stripe for enterprises", href: "https://stripe.com/enterprise" }}
      />
      <CustomerStories
        stories={customerStories.map((story) => ({
          ...story,
          logo: <BrandLogo name={story.logo} />,
        }))}
      />
      <div className="section-row section-row-gap" style={rowGap({ mb: 300, tb: 400, dt: 500 })}>
        <span className="hds-heading enterprise-values-title hds-heading--md">
          Realize value faster with dedicated experts
        </span>
        <div
          className="columns columns--auto columns-row-gap"
          style={columnsRowGap({ mb: 300, tb: 400 })}
        >
          {enterpriseServices.map((feature, i) => (
            <FeatureDetail key={feature.title} {...feature} icon={enterpriseIcons[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StartupsSubsection() {
  return (
    <section className="section-row section-row-gap" style={rowGap({ mb: 600, tb: 400, dt: 800 })}>
      <SectionHeader
        title="Build a foundation for your startup that enables faster growth"
        description="From stablecoin pioneers to 88% of the Forbes AI 50, Stripe helps startups build what’s next on easy-to-integrate financial infrastructure."
        cta={{ label: "Stripe for startups", href: "https://stripe.com/startups" }}
      />
      <CaseStudyCarousel
        items={caseStudies.map((study) => ({
          ...study,
          logo: <BrandLogo name={study.logo} label={study.name} />,
        }))}
      />
      <div className="startups__program-card-grid">
        {startupPrograms.map((program) => (
          <a
            key={program.id}
            className={`startups-program-card startups__program-card--${program.id}`}
            href={program.href}
          >
            <div className="startups-program-card__border">
              <div className="startups-program-card__border-color">
                <div className="startups-program-card__border-color-gradient" />
              </div>
            </div>
            <div className="startups-program-card__inner">
              <div className="startups-program-card__content">
                <div className="startups-program-card__text">
                  <h4 className="hds-text hds-text--md hds-text--emphasized hds-text--inline">
                    {program.title}
                  </h4>
                  <p className="hds-text hds-text--md hds-text--inline hds-text--soft">
                    {program.description}
                  </p>
                </div>
                <FakeCalloutLink className="startups-program-card-action">
                  {program.cta}
                </FakeCalloutLink>
              </div>
              <div className="startups-program-card__graphic">
                {program.id === "startups" ? (
                  <div className="startups__startups-graphic">
                    <picture className="startups__startups-graphic-background">
                      <Image
                        src="/images/business-sizes/card-startups.png"
                        alt=""
                        width={1169}
                        height={472}
                      />
                    </picture>
                  </div>
                ) : (
                  <div className="startups__atlas-graphic">
                    <AtlasGraphic className="startups__atlas-graphic-background" />
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function PlatformsSubsection() {
  return (
    <section className="section-row section-row-gap" style={rowGap({ mb: 700, tb: 800, dt: 1200 })}>
      <SectionHeader
        title="Make your SaaS platform a complete financial operating system"
        description="From the Fortune 100 to the Forbes Cloud 100, vertical SaaS platforms use Stripe to expand their product offerings with embedded payments and financial services."
        cta={{ label: "Stripe for platforms", href: "https://stripe.com/use-cases/platforms" }}
      />
      <div className="platform-value__graphic-container">
        <div className="platform-graphic-wrapper">
          <div className="platform-graphic">
            <div className="platform-graphic__background">
              <picture className="platform-graphic__background-image">
                <Image
                  src="/images/business-sizes/platform-graphic-background-2x.png"
                  alt=""
                  width={2460}
                  height={1064}
                  sizes="(min-width: 1264px) 1232px, 100vw"
                />
              </picture>
            </div>
          </div>
        </div>
        <div
          className="columns columns--auto columns-row-gap"
          style={columnsRowGap({ mb: 300, tb: 400 })}
        >
          {platformFeatures.map((feature, i) => (
            <FeatureDetail key={feature.title} {...feature} icon={platformIcons[i]} />
          ))}
        </div>
      </div>
      <TestimonialCarousel
        items={testimonials.map((t) => ({
          ...t,
          logo: <BrandLogo name={t.logo} label={t.company} />,
        }))}
      />
    </section>
  );
}

export function BusinessSizesSection() {
  return (
    <section className="hds-color-mode business-sizes-section section section--white hds-mode--light">
      <div
        className="section-container section-row section-row-gap"
        style={rowGap({ mb: 500, tb: 600, dt: 800 })}
      >
        <SectionTitle
          title="Powering businesses of all sizes."
          subtitle="Run your business on a reliable platform that adapts to your needs."
          titleClassName="business-sizes__title"
        />
        <span className="section-header-divider" />
        <div className="section-row section-row-gap" style={rowGap({ mb: 600, tb: 700, dt: 1000 })}>
          <EnterpriseSubsection />
          <div className="divider-wrapper" />
          <StartupsSubsection />
          <div className="divider-wrapper" />
          <PlatformsSubsection />
        </div>
      </div>
    </section>
  );
}
