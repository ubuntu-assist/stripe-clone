import type { LinkItem } from "@/types/content";

export const footerContent = {
  brand: {
    title: ["Financial", "infrastructure"],
    tagline: "Grow your revenue with Stripe",
  },
  office: ["354 Oyster Point Blvd", "South San Francisco", "CA 94080"],
  inquiries: [
    { label: "Contact sales", href: "https://stripe.com/contact/sales" },
    { label: "Get support", href: "https://support.stripe.com/" },
  ],
  linkGroups: [
    {
      title: "Products",
      items: [
        { label: "Payments", href: "https://stripe.com/payments" },
        { label: "Billing", href: "https://stripe.com/billing" },
        { label: "Connect", href: "https://stripe.com/connect" },
        { label: "Terminal", href: "https://stripe.com/terminal" },
        { label: "Pricing", href: "https://stripe.com/pricing" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "https://stripe.com/about" },
        { label: "Careers", href: "https://stripe.com/careers" },
        { label: "Newsroom", href: "https://stripe.com/newsroom" },
        { label: "Documentation", href: "https://docs.stripe.com/" },
        { label: "Stripe Press", href: "https://press.stripe.com/" },
      ],
    },
  ] satisfies { title: string; items: Required<LinkItem>[] }[],
  /** Figures from the homepage stats sections. */
  platformStats: {
    title: "Platform at a glance",
    rows: [
      { label: "UPTIME", value: "99.999%" },
      { label: "API_REQUESTS / DAY", value: "500M+" },
      { label: "CURRENCIES_&_METHODS", value: "135+" },
    ],
    statusHref: "https://status.stripe.com",
  },
  cta: { label: "Start now", href: "https://dashboard.stripe.com/register" },
  wordmark: "stripe",
  legal: [
    { label: "Privacy", href: "https://stripe.com/privacy" },
    { label: "Legal", href: "https://stripe.com/legal" },
  ],
};
