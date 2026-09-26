import type { ReactNode } from "react";
import { CalloutLink } from "@/components/ui/CalloutLink";
import { cx } from "@/lib/cx";
import type { Feature } from "@/types/content";

interface FeatureDetailProps extends Feature {
  /** A charm icon shown above the copy. */
  icon?: ReactNode;
  /** An illustration shown above the copy. */
  media?: ReactNode;
  /** Put the title and description on separate lines instead of running them inline. */
  stacked?: boolean;
  className?: string;
}

/** Icon/illustration + short copy + callout link. */
export function FeatureDetail({
  title,
  description,
  link,
  icon,
  media,
  stacked = false,
  className,
}: FeatureDetailProps) {
  return (
    <div className={cx("feature-detail", className)}>
      {icon && <div className="charm-icon">{icon}</div>}
      {media && <div className="feature-detail__image">{media}</div>}
      <div className={cx("feature-detail__content", stacked && "feature-detail__content--stacked")}>
        <h4
          className={cx(
            "hds-text hds-text--md hds-text--emphasized",
            !stacked && "hds-text--inline",
          )}
        >
          {title}
        </h4>
        <p
          className={cx("hds-text hds-text--md", !stacked && "hds-text--inline", "hds-text--soft")}
        >
          {description}
        </p>
      </div>
      <div className="feature-detail__footer">
        <CalloutLink href={link.href}>{link.label}</CalloutLink>
      </div>
    </div>
  );
}
