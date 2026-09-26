// Content extracted from the stripe.com homepage snapshot.
import type { Stat } from "@/types/content";

/** Order matches the stats menu; `visual` is the globe data-viz shown for each stat. */
export const globalStats: Stat[] = [
  {
    id: "payment-methods",
    visual: "/images/stats/dataviz-fallback-2x.png",
    value: "135+",
    description: "currencies and payment methods supported",
  },
  {
    id: "payments-volume",
    visual: "/images/stats/volume-fallback-2x.png",
    value: "$1.9T",
    description: "in payments volume processed in 2025",
  },
  {
    id: "historical-uptime",
    visual: "/images/stats/uptime-fallback-2x.png",
    value: "99.999%",
    description: "historical uptime for Stripe services",
    link: {
      text: "historical uptime",
      href: "https://status.stripe.com",
    },
  },
  {
    id: "active-subscriptions",
    visual: "/images/stats/subscriptions-fallback-2x.png",
    value: "200M+",
    description: "active subscriptions managed on Stripe Billing",
  },
];
