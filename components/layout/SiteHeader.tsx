"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  HamburgerIcon,
  SparkleIcon,
} from "@/components/icons/NavigationIcons";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { StripeLogo } from "@/components/icons/StripeLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { mobileCallouts, navLinks, navMenus } from "@/data/navigation";
import { cx } from "@/lib/cx";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const status = mobileOpen ? "open" : "unmounted";

  // Close the mobile menu with Escape, and whenever the viewport grows past the mobile layout.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    const desktop = window.matchMedia("(min-width: 940px)");
    const onResize = () => desktop.matches && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [mobileOpen]);

  return (
    <header className="hds-color-mode navigation section section--white hds-mode--light">
      <div className="section-container navigation__layout">
        <nav
          id="navigation-menu"
          className={cx(
            "hds-navigation-menu navigation-menu navigation-menu--homepage",
            mobileOpen && "hds-navigation-menu--open",
          )}
        >
          <Link
            className="hds-link navigation-menu-home-link"
            href="/"
            aria-label="Stripe homepage"
          >
            <StripeLogo />
          </Link>

          <div
            className="hds-navigation-menu__content navigation-menu-content"
            data-status={status}
          >
            <ul className="hds-navigation-menu__list navigation-menu-list hds-navigation-menu__list--horizontal">
              {navMenus.map((menu) => (
                <li key={menu} className="hds-navigation-menu__item navigation-item">
                  <button
                    type="button"
                    className="hds-button hds-navigation-menu__trigger hds-button--transparent"
                    aria-expanded="false"
                  >
                    {menu}
                    <ChevronDownIcon />
                  </button>
                </li>
              ))}
              <li className="hds-navigation-menu__item navigation-item">
                <a
                  className="hds-button hds-navigation-menu__trigger hds-button--transparent"
                  href={navLinks.pricing.href}
                >
                  {navLinks.pricing.label}
                </a>
              </li>
              <li className="hds-navigation-menu__item navigation-item navigation-item--desktop-only navigation-item--guide-me">
                <a
                  className="hds-button hds-navigation-menu__trigger hds-button--transparent"
                  href={navLinks.guideMe.href}
                >
                  <SparkleIcon />
                  {navLinks.guideMe.label}
                </a>
              </li>
              <li className="hds-navigation-menu__item navigation-item navigation-item__sign-in--mobile">
                <a
                  className="hds-button hds-navigation-menu__trigger hds-button--transparent"
                  href={navLinks.signIn.href}
                >
                  {navLinks.signIn.label}
                </a>
              </li>
            </ul>

            <div className="products-callout products-callout--mobile products-callout--with-curator">
              <p className="hds-text products-callout__title hds-text--sm">
                Not sure where to start?
              </p>
              {mobileCallouts.map((callout) => (
                <a key={callout.href} className="hds-link" href={callout.href}>
                  <span>{callout.title}</span>
                  <span className="hds-text hds-text--sm hds-text--soft">
                    {callout.description}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="navigation-menu-overflow" data-status={status}>
            <section className="navigation-menu-footer">
              <div className="hds-button-group">
                <ButtonLink href={navLinks.startNow.href} withArrow>
                  {navLinks.startNow.label}
                </ButtonLink>
                <ButtonLink href={navLinks.contactSales.href} variant="secondary-on-quiet">
                  {navLinks.contactSales.label}
                </ButtonLink>
              </div>
            </section>
            <section className="navigation-menu-header">
              <button
                type="button"
                className="hds-button navigation-back-button hds-button--transparent"
                onClick={() => setMobileOpen(false)}
              >
                <ChevronLeftIcon />
                Back
              </button>
            </section>
          </div>

          <button
            type="button"
            className="hds-ui-button hds-navigation-menu__trigger navigation-hamburger-button navigation-hamburger-button--homepage hds-ui-button--quiet"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="navigation-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <HamburgerIcon />
          </button>

          <ul className="navigation-buttons">
            <li className="hds-navigation-menu__item navigation-item">
              <a
                className="hds-button navigation-cta-button navigation-item__sign-in hds-button--secondary-on-quiet hds-button--compact"
                href={navLinks.signIn.href}
                aria-label={navLinks.signIn.label}
              >
                {/* Knock-out text effect: the label is cut out of a translucent fill. */}
                <svg className="navigation-item__sign-in__mask" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <mask id="sign-in-cutout-mask">
                      <rect x="0" y="0" width="100%" height="100%" fill="white" />
                      <text
                        x="50%"
                        y="50%"
                        dy="-0.5"
                        dominantBaseline="central"
                        textAnchor="middle"
                        fontSize="1em"
                        fill="black"
                      >
                        {navLinks.signIn.label}
                      </text>
                    </mask>
                  </defs>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="var(--hds-color-text-solid)"
                    opacity="0.10"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="var(--hds-color-surface-bg-quiet)"
                    mask="url(#sign-in-cutout-mask)"
                  />
                </svg>
                <span className="navigation-button-measure">{navLinks.signIn.label}</span>
              </a>
            </li>
            <li className="hds-navigation-menu__item navigation-item">
              <a
                className="hds-button navigation-cta-button navigation-item__contact-sales hds-button--primary hds-button--compact"
                href={navLinks.contactSales.href}
              >
                {navLinks.contactSales.label}
                <span className="hds-nowrap-svg">
                  <ArrowIcon />
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="navigation-menu__background" />
      </div>
    </header>
  );
}
