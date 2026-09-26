// Content extracted from the stripe.com homepage snapshot.
import type { LinkItem } from "@/types/content";

/** Top-level menus. Their dropdown panels weren't part of the saved page. */
export const navMenus = ["Products", "Solutions", "Developers", "Resources"] as const;

export const navLinks = {
  pricing: { label: "Pricing", href: "https://stripe.com/pricing" },
  guideMe: { label: "Guide me", href: "https://stripe.com/personalize" },
  signIn: { label: "Sign in", href: "https://dashboard.stripe.com/login" },
  startNow: { label: "Start now", href: "https://dashboard.stripe.com/register" },
  contactSales: { label: "Contact sales", href: "https://stripe.com/contact/sales" },
} satisfies Record<string, Required<LinkItem>>;

/** Shortcuts shown at the bottom of the mobile menu. */
export const mobileCallouts = [
  {
    title: "Get recommendations",
    description: "Tell us about your business",
    href: "https://stripe.com/personalize",
  },
  {
    title: "See all products",
    description: "Explore our full product catalog",
    href: "https://stripe.com/products",
  },
];
