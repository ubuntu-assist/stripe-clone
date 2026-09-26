import type { ComponentProps } from "react";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { cx } from "@/lib/cx";

/** The trailing arrow used by callout links (HDS wraps it twice). */
export function CalloutArrow() {
  return (
    <span className="hds-nowrap-svg">
      <span className="hds-nowrap-svg">
        <ArrowIcon />
      </span>
    </span>
  );
}

/** Text link with an animated arrow, e.g. "Read the story →". */
export function CalloutLink({ className, children, ...props }: ComponentProps<"a">) {
  return (
    <a className={cx("hds-link", className, "hds-link--callout")} {...props}>
      {children}
      <CalloutArrow />
    </a>
  );
}

/**
 * Looks like a callout link but isn't interactive on its own. Used inside
 * cards where the whole card is already the link.
 */
export function FakeCalloutLink({ className, children }: { className?: string; children: string }) {
  return (
    <div className={cx("hds-link fake-link", className, "hds-link--callout")}>
      {children}
      <CalloutArrow />
    </div>
  );
}
