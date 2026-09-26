import type { ReactNode } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { bentoCards, type BentoCardId } from "@/data/products";
import { rowGap } from "@/lib/spacing";
import { BentoCard } from "./BentoCard";
import { AgenticCommerceBackground } from "./graphics/AgenticCommerceBackground";
import { AgenticCommerceGraphic } from "./graphics/AgenticCommerceGraphic";
import { BillingGraphic } from "./graphics/BillingGraphic";
import { ConnectBackground } from "./graphics/ConnectBackground";
import { ConnectGraphic } from "./graphics/ConnectGraphic";
import { CryptoBackground } from "./graphics/CryptoBackground";
import { IssuingBackground } from "./graphics/IssuingBackground";
import { PaymentsBackground } from "./graphics/PaymentsBackground";
import { PaymentsGraphic } from "./graphics/PaymentsGraphic";

/** Illustrations per card: a foreground graphic and/or a full-bleed background. */
const cardArt: Record<BentoCardId, { graphic?: ReactNode; background?: ReactNode }> = {
  payments: {
    graphic: (
      <div className="lazy-animation lazy-animation--loaded lazy-bento-graphic">
        <PaymentsGraphic />
      </div>
    ),
    background: <PaymentsBackground />,
  },
  billing: { graphic: <BillingGraphic /> },
  "agentic-commerce": {
    graphic: <AgenticCommerceGraphic />,
    background: <AgenticCommerceBackground />,
  },
  issuing: { background: <IssuingBackground /> },
  crypto: { background: <CryptoBackground /> },
  connect: { graphic: <ConnectGraphic />, background: <ConnectBackground /> },
};

export function ModularSolutionsSection() {
  return (
    <section className="hds-color-mode section section--white hds-mode--light">
      <div className="section-background modular-solutions-bg" aria-hidden="true" />
      <div
        className="section-container section-row modular-solutions-section section-row-gap"
        style={rowGap({ mb: 500, tb: 600, dt: 800 })}
      >
        <SectionTitle
          title="Flexible solutions for every business model."
          subtitle="Grow your business with a comprehensive set of payments and financial tools⁠—⁠designed to work individually or together."
          subtitleClassName="modular-solutions-section__description"
        >
          <p className="hds-heading modular-solutions-section__description--short-for-mobile hds-heading--lg hds-heading--subdued hds-heading--inline">
            Grow your business with the most comprehensive set of payments and financial tools.
          </p>
        </SectionTitle>

        <div className="modular-solutions-bento">
          <div className="modular-solutions-bento__content">
            <div className="modular-solutions-bento__layout">
              {bentoCards.map((card) => (
                <BentoCard key={card.id} {...card} {...cardArt[card.id]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
