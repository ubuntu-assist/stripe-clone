import { ButtonLink } from "@/components/ui/ButtonLink";

interface SectionHeaderProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

/** Sub-section header with a title, primary CTA and supporting copy. */
export function SectionHeader({ title, description, cta }: SectionHeaderProps) {
  return (
    <header className="section-header section-header--title-span-5">
      <div className="section-header__primary">
        <h3 className="hds-heading section-header__title hds-heading--md">{title}</h3>
        <div className="hds-button-group section-header__actions">
          <ButtonLink href={cta.href} withArrow>
            {cta.label}
          </ButtonLink>
        </div>
      </div>
      <p className="hds-text section-header__description hds-text--lg hds-text--soft">
        {description}
      </p>
    </header>
  );
}
