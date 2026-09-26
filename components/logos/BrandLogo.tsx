import type { SVGProps } from "react";
import { brandLogos, type BrandLogoName } from "@/components/logos";

type BrandLogoProps = SVGProps<SVGSVGElement> & {
  name: BrandLogoName;
  /** Accessible name. Omit for decorative logos (they get `aria-hidden`). */
  label?: string;
};

export function BrandLogo({ name, label, ...props }: BrandLogoProps) {
  const Logo = brandLogos[name];
  return label ? (
    <Logo role="img" aria-label={label} {...props} />
  ) : (
    <Logo aria-hidden="true" {...props} />
  );
}
