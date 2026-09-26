import type { CSSProperties } from "react";

/** A step on the HDS core spacing scale, e.g. 500 → `var(--hds-space-core-500)`. */
export type SpaceStep =
  100 | 150 | 200 | 300 | 400 | 450 | 500 | 600 | 700 | 800 | 900 | 1000 | 1200;

export interface ResponsiveSpace {
  /** Mobile */
  mb?: SpaceStep;
  /** Tablet */
  tb?: SpaceStep;
  /** Desktop */
  dt?: SpaceStep;
}

/**
 * Builds the responsive custom properties read by layout utilities such as
 * `.section-row-gap` (`--section-row-gap-mb|tb|dt`) or `.columns-row-gap`.
 */
export function responsiveSpace(prefix: string, space: ResponsiveSpace): CSSProperties {
  const style: CSSProperties = {};
  for (const bp of ["mb", "tb", "dt"] as const) {
    const step = space[bp];
    if (step) style[`--${prefix}-${bp}`] = `var(--hds-space-core-${step})`;
  }
  return style;
}

/** Shorthand for the `.section-row-gap` utility. */
export const rowGap = (space: ResponsiveSpace) => responsiveSpace("section-row-gap", space);

/** Shorthand for the `.columns-row-gap` utility. */
export const columnsRowGap = (space: ResponsiveSpace) => responsiveSpace("columns-row-gap", space);
