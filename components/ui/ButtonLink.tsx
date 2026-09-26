import type { ComponentProps } from "react";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { cx } from "@/lib/cx";

export type ButtonVariant = "primary" | "secondary" | "secondary-on-quiet" | "transparent";

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: ButtonVariant;
  compact?: boolean;
  /** Appends the animated hover arrow after the label. */
  withArrow?: boolean;
};

/** An anchor styled as an HDS button. */
export function ButtonLink({
  variant = "primary",
  compact = false,
  withArrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cx(
        "hds-button",
        className,
        `hds-button--${variant}`,
        compact && "hds-button--compact",
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <span className="hds-nowrap-svg">
          <ArrowIcon />
        </span>
      )}
    </a>
  );
}
