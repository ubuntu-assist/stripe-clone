// Content extracted from the stripe.com homepage snapshot.
import type { Feature } from "@/types/content";

/** "Realize value faster with dedicated experts" (enterprise). */
export const enterpriseServices: Feature[] = [
  {
    title: "Professional services.",
    description:
      "Get tailored guidance from Stripe on implementation, complex integrations, or major migrations.",
    link: { label: "View services", href: "https://stripe.com/professional-services" },
  },
  {
    title: "Stripe-certified experts.",
    description:
      "Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.",
    link: { label: "View partners", href: "https://stripe.com/partners" },
  },
  {
    title: "Support plans.",
    description:
      "Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.",
    link: { label: "View plans", href: "https://stripe.com/support-plans" },
  },
];

/** Startup programs shown as gradient cards. */
export const startupPrograms = [
  {
    id: "startups",
    title: "Stripe Startups program.",
    description:
      "Access financial benefits, a focused community, and expert resources to help you grow your business.",
    cta: "Apply now",
    href: "https://stripe.com/startups#application",
  },
  {
    id: "atlas",
    title: "Stripe Atlas.",
    description:
      "Incorporate and get everything you need to fundraise, bank, and accept payments in two business days.",
    cta: "Start your company",
    href: "https://stripe.com/atlas",
  },
] as const;

/** Platform value props (SaaS platforms). */
export const platformFeatures: Feature[] = [
  {
    title: "Get to market faster.",
    description:
      "Launch and scale payments products with lower operational overhead using embedded components and no-code tools.",
    link: {
      label: "Read the guide",
      href: "https://stripe.com/guides/best-practices-for-launching-and-scaling-platform-payments",
    },
  },
  {
    title: "Grow new lines of revenue.",
    description:
      "Monetize platform transactions—including payments, card interchange, and financing fees.",
    link: {
      label: "Read the guide",
      href: "https://stripe.com/guides/introduction-to-monetizing-payments",
    },
  },
  {
    title: "Manage platform risk.",
    description:
      "Stay ahead of global regulations with tools for compliance, credit risk, fraud prevention, and account security.",
    link: {
      label: "Read the guide",
      href: "https://stripe.com/guides/introduction-to-risk-management",
    },
  },
];

/** "Choose an integration path" (developers section). */
export const integrationPaths: Feature[] = [
  {
    title: "Don’t code?",
    description:
      "Set up billing, take in-person payments, or share a payment link—right from the Stripe Dashboard, no code required.",
    link: { label: "Explore no-code", href: "https://docs.stripe.com/no-code" },
  },
  {
    title: "Use a pre-integrated platform.",
    description:
      "Browse our directory of platforms that integrate Stripe with website-building tools.",
    link: { label: "See directory", href: "https://marketplace.stripe.com/" },
  },
  {
    title: "Build your own integration.",
    description:
      "Use our SDKs, APIs, MCP server, and AI developer tools to build and maintain your own integration with Stripe.",
    link: { label: "Get started", href: "https://docs.stripe.com/development" },
  },
];

/** Cards in the closing "Ready to get started?" section. */
export const getStartedFeatures: Feature[] = [
  {
    title: "See what you’ll pay",
    description: "Integrated per-transaction pricing with no hidden fees.",
    link: { label: "Pricing details", href: "https://stripe.com/pricing" },
  },
  {
    title: "Start building",
    description: "Get up and running with Stripe in as little as 10 minutes.",
    link: { label: "Integration options", href: "https://docs.stripe.com/get-started" },
  },
];

/** Throughput stats in "Scale with confidence." */
export const scaleStats = [
  { value: "500M+", label: "API requests per day", accent: "orange" },
  { value: "10K+", label: "API requests per second", accent: "pink" },
  { value: "150K+", label: "transactions per minute", accent: "purple" },
] as const;
