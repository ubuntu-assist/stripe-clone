import { footerContent as content } from "@/data/footer";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand + contact */}
          <div className={styles.brandColumn}>
            <div className={styles.stack}>
              <h2 className={styles.brandTitle}>
                {content.brand.title[0]}
                <br />
                <span className={styles.brandTitleAccent}>{content.brand.title[1]}</span>
              </h2>
              <p className={styles.tagline}>{content.brand.tagline}</p>
            </div>
            <div className={styles.contact}>
              <div className={styles.block}>
                <p className={styles.label}>Headquarters</p>
                <address className={styles.address}>
                  {content.office.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </div>
              <div className={styles.block}>
                <p className={styles.label}>Inquiries</p>
                {content.inquiries.map((link) => (
                  <a key={link.href} className={styles.inlineLink} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link lists */}
          <nav className={styles.linksColumn} aria-label="Footer">
            {content.linkGroups.map((group) => (
              <div key={group.title} className={styles.block}>
                <p className={styles.label}>{group.title}</p>
                <ul className={styles.list}>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a className={styles.listLink} href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Platform stats + CTA */}
          <div className={styles.specColumn}>
            <p className={styles.label}>{content.platformStats.title}</p>
            <div className={styles.stack}>
              {content.platformStats.rows.map((row) => (
                <div key={row.label} className={styles.specRow}>
                  <span className={styles.specKey}>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
              <a className={styles.statusLink} href={content.platformStats.statusHref}>
                <span className={styles.statusDot} aria-hidden="true" />
                All systems operational
              </a>
            </div>
            <div className={styles.ctaWrapper}>
              <a className={styles.cta} href={content.cta.href}>
                <span className={styles.ctaFill} aria-hidden="true" />
                <span className={styles.ctaLabel}>{content.cta.label}</span>
                <svg
                  className={styles.ctaArrow}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div className={styles.bottom}>
          <div className={styles.shapes} aria-hidden="true">
            {/* Stripe's slanted parallelogram mark */}
            <div className={styles.shapeMark} />
            <div className={styles.shapeCircle} />
            <div className={styles.shapeBar} />
          </div>
          <p className={styles.wordmark} aria-hidden="true">
            {content.wordmark}
          </p>
          <div className={styles.legal}>
            <span>© {year} Stripe, LLC.</span>
            {content.legal.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
