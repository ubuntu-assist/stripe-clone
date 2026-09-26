import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";

interface SectionTitleProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Grid columns the title spans on desktop. */
  span?: 6 | 7 | 8;
  /** `lg` for section titles, `md` for sub-sections. */
  size?: "lg" | "md";
  as?: "h2" | "h3";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  style?: CSSProperties;
  /** Extra content rendered after the subtitle (e.g. an alternate mobile subtitle). */
  children?: ReactNode;
}

/** Heading + inline subdued subtitle, the standard HDS section intro. */
export function SectionTitle({
  title,
  subtitle,
  span = 8,
  size = "lg",
  as: Heading = "h2",
  className,
  titleClassName,
  subtitleClassName,
  style,
  children,
}: SectionTitleProps) {
  return (
    <div className={cx("section-title", `section-title--span-${span}`, className)} style={style}>
      <Heading
        className={cx("hds-heading", titleClassName, `hds-heading--${size}`, "hds-heading--inline")}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cx(
            "hds-heading",
            subtitleClassName,
            `hds-heading--${size}`,
            "hds-heading--subdued hds-heading--inline",
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
