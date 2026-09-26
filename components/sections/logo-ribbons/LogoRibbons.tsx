import { BrandLogo } from "@/components/logos/BrandLogo";
import { heroLogos } from "@/data/customer-logos";
import { cx } from "@/lib/cx";
import type { CustomerLogo } from "@/types/content";
import styles from "./LogoRibbons.module.css";

/** Each ribbon repeats its logos this many times so the loop never shows a gap. */
const COPIES = 3;

function RibbonItem({ name, href, logo }: CustomerLogo) {
  const content = <BrandLogo name={logo} label={name} />;
  return href ? (
    <a className={styles.item} href={href}>
      {content}
    </a>
  ) : (
    <div className={styles.item}>{content}</div>
  );
}

function Ribbon({ logos, direction }: { logos: CustomerLogo[]; direction: "left" | "right" }) {
  return (
    <div className={cx(styles.ribbon, direction === "left" ? styles.tiltDown : styles.tiltUp)}>
      {Array.from({ length: COPIES }, (_, copy) => (
        <div
          key={copy}
          className={cx(
            styles.track,
            direction === "left" ? styles.scrollLeft : styles.scrollRight,
          )}
          // Only the first copy is exposed to assistive tech and keyboard users.
          aria-hidden={copy > 0 || undefined}
          inert={copy > 0 || undefined}
        >
          {logos.map((logo) => (
            <RibbonItem key={logo.name} {...logo} />
          ))}
        </div>
      ))}
    </div>
  );
}

/** Two crossing, tilted ribbons of customer logos scrolling in opposite directions. */
export function LogoRibbons() {
  const half = Math.ceil(heroLogos.length / 2);

  return (
    <section className={styles.section} aria-labelledby="logo-ribbons-title">
      <p id="logo-ribbons-title" className={styles.title}>
        Millions of businesses of all sizes use Stripe, including…
      </p>
      <Ribbon logos={heroLogos.slice(0, half)} direction="left" />
      <Ribbon logos={heroLogos.slice(half)} direction="right" />
    </section>
  );
}
