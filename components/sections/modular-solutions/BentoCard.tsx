import type { ReactNode } from "react";
import { ExpandIcon } from "@/components/icons/ExpandIcon";
import type { BentoCardContent } from "@/data/products";

interface BentoCardProps extends BentoCardContent {
  /** Foreground illustration. */
  graphic?: ReactNode;
  /** Full-bleed background layer. */
  background?: ReactNode;
}

export function BentoCard({ id, title, href, hoverShift, graphic, background }: BentoCardProps) {
  const titleId = `bento-card-title-${id}`;

  return (
    <a
      href={href}
      className={`modular-solutions-bento-card modular-solutions-bento__card-${id}`}
      aria-labelledby={titleId}
      style={{
        "--card-shift-x": `${-hoverShift.x}px`,
        "--card-shift-y": `${-hoverShift.y}px`,
        "--card-grow-x": `${hoverShift.x}px`,
        "--card-grow-y": `${hoverShift.y}px`,
      }}
    >
      <div className="modular-solutions-bento-card__dialog-entry">
        <div className="modular-solutions-bento-card__dialog-entry-wrapper">
          <ExpandIcon />
        </div>
      </div>
      <div className="modular-solutions-bento-card__text">
        <h3
          id={titleId}
          className="hds-heading modular-solutions-bento-card__title hds-heading--md"
        >
          {title}
        </h3>
      </div>
      <div className="modular-solutions-bento-card__border">
        <div className="modular-solutions-bento-card__border-color">
          <div className="modular-solutions-bento-card__border-color-gradient" />
        </div>
      </div>
      <div className="modular-solutions-bento-card__inner">
        <div className="modular-solutions-bento-card__content">
          <div className="modular-solutions-bento-card__content-inner">
            {graphic && <div className="modular-solutions-bento-card__graphic">{graphic}</div>}
            {background && (
              <div className="modular-solutions-bento-card__background">{background}</div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
