// Content extracted from the stripe.com homepage snapshot.
import type { CaseStudy, CustomerStory, Testimonial } from "@/types/content";

/** Enterprise accordion in the "Powering businesses of all sizes" section. */
export const customerStories: CustomerStory[] = [
  {
    id: "hertz",
    name: "Hertz",
    summary: "Hertz unifies commerce with Stripe.",
    href: "https://stripe.com/customers/hertz",
    logo: "hertz",
    image: {
      src: "/images/business-sizes/enterprise-accordion-hertz.png",
      alt: "Aerial view of a street intersection where the crosswalks form a slanted parallelogram, imitating the Stripe logo.",
      width: 2460,
      height: 1060,
    },
    stats: [
      {
        value: "160",
        label: "countries",
      },
      {
        value: "11K+",
        label: "locations globally",
      },
      {
        value: "Products used",
        label: "Payments, Terminal, Connect, Radar, and Stripe Sigma",
      },
    ],
  },
  {
    id: "urbn",
    name: "URBN",
    summary: "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
    href: "https://stripe.com/customers/urbn",
    logo: "urbn",
    image: {
      src: "/images/business-sizes/enterprise-accordion-urbn.png",
      alt: "Exterior view of a clothing boutique with a large window display showcasing garments, where the window frame forms Stripe's parallelogram logo.",
      width: 2460,
      height: 1060,
    },
    stats: [
      {
        value: "5+",
        label: "consumer brands in retailer portfolio",
      },
      {
        value: "700+",
        label: "store locations",
      },
      {
        value: "Products used",
        label: "Payments, Terminal, Connect, Stripe Sigma, Radar, and Link",
      },
    ],
  },
  {
    id: "instacart",
    name: "Instacart",
    summary: "Instacart powers online grocery delivery with Stripe.",
    href: "https://stripe.com/customers/instacart",
    logo: "instacart",
    image: {
      src: "/images/business-sizes/enterprise-accordion-instacart.png",
      alt: "Overhead view of a door stoop with a grocery delivery bag containing flowers, bread, olive oil, and produce, where the bag's shape forms Stripe's parallelogram logo.",
      width: 2460,
      height: 1060,
    },
    stats: [
      {
        value: "600K+",
        label: "shoppers",
      },
      {
        value: "1.8K",
        label: "retail partners across nearly 100K stores",
      },
      {
        value: "Products used",
        label: "Payments, Connect, Data Pipeline, and Issuing",
      },
    ],
  },
  {
    id: "lemonde",
    name: "LeMonde",
    summary: "Le Monde improves local and international payments with Stripe.",
    href: "https://stripe.com/customers/le-monde",
    logo: "lemonde",
    image: {
      src: "/images/business-sizes/enterprise-accordion-lemonde.png",
      alt: "Street view of a traditional Parisian newspaper kiosk with yellow-framed windows displaying publications, where the window frame forms Stripe's parallelogram logo.",
      width: 2460,
      height: 1060,
    },
    stats: [
      {
        value: "100%",
        label: "of digital and print payments powered by Stripe",
      },
      {
        value: "Less than 3 months",
        label: "to implement and go live",
      },
      {
        value: "Products used",
        label: "Payments, Stripe Sigma, and Radar",
      },
    ],
  },
];

/** Startup case-study carousel. */
export const caseStudies: CaseStudy[] = [
  {
    name: "Lovable",
    href: "https://stripe.com/customers/lovable",
    title: "Lovable grows into a vibe-coding juggernaut with Stripe.",
    cta: "Read Lovable’s story",
    image: "/images/business-sizes/lovable.png",
    logo: "lovable",
  },
  {
    name: "Gamma",
    href: "https://stripe.com/customers/gamma",
    title: "Gamma expands to $100M ARR and 70 million users with Stripe.",
    cta: "Read Gamma’s story",
    image: "/images/business-sizes/gamma.png",
    logo: "gamma",
  },
  {
    name: "Runway",
    href: "https://stripe.com/customers/runway",
    title: "Runway protects developer time with no-code solutions from Stripe.",
    cta: "Read Runway’s story",
    image: "/images/business-sizes/runway.png",
    logo: "runway",
  },
  {
    name: "Supabase",
    href: "https://stripe.com/customers/supabase",
    title: "Supabase delivers its backend-as-a-service to 150 countries with Stripe.",
    cta: "Read Supabase’s story",
    image: "/images/business-sizes/supabase.png",
    logo: "supabase",
  },
  {
    name: "Linear",
    href: "https://stripe.com/customers/linear",
    title: "Linear partners with Stripe to handle billing and payments.",
    cta: "Read Linear’s story",
    image: "/images/business-sizes/linear.png",
    logo: "linear",
  },
  {
    name: "ElevenLabs",
    href: "https://stripe.com/customers/elevenlabs",
    title: "ElevenLabs grows into a $3B AI audio leader with Stripe.",
    cta: "Watch the video",
    image: "/images/business-sizes/eleven-labs.png",
    logo: "elevenlabs",
  },
  {
    name: "Browserbase",
    href: "https://stripe.com/customers/browserbase",
    title: "Browserbase offers usage-based billing for an AI agent browser with Stripe.",
    cta: "Read Browserbase’s story",
    image: "/images/business-sizes/browserbase.png",
    logo: "browserbase",
  },
  {
    name: "Decagon",
    href: "https://stripe.com/customers/decagon",
    title: "Decagon decreases support costs by 65% with Stripe-integrated agents.",
    cta: "Read Decagon’s story",
    image: "/images/business-sizes/decagon.png",
    logo: "decagon",
  },
];

/** Platform testimonials carousel. */
export const testimonials: Testimonial[] = [
  {
    company: "Mindbody",
    quote:
      "With Stripe, we have a global technology partner to help our customers—from Canadian yoga studios to British boxing classes—keep growing and evolving in a new wellness world.",
    author: "Kurtis Moyer",
    role: "Lead Product Manager of Payments, Mindbody",
    headshot: "/images/business-sizes/kurtis-moyer.png",
    logo: "mindbody",
    href: "https://stripe.com/customers/mindbody",
  },
  {
    company: "Jobber",
    quote:
      "Without Stripe, it would have taken significant time and engineering effort to offer these resources to our customers. The financial infrastructure Stripe offers is incredibly valuable to Jobber, and we look forward to seeing what comes next.",
    author: "Laura Collinson",
    role: "Director of Fintech, Jobber",
    headshot: "/images/business-sizes/testimonial-headshot-jobber.png",
    logo: "jobber",
    href: "https://stripe.com/customers/jobber",
  },
  {
    company: "Substack",
    quote:
      "Stripe makes the subscriptions and payment piece really easy for everyone involved. And that helps us make it easy for writers and other creators to do the work they want to do on Substack and get paid for it.",
    author: "Seth McMillan",
    role: "Engineering Manager, Substack",
    headshot: "/images/business-sizes/testimonial-headshot-substack.png",
    logo: "substack",
    href: "https://stripe.com/customers/substack",
  },
  {
    company: "Lightspeed",
    quote:
      "Stripe offers an enterprise-grade infrastructure that puts our customers on the cutting edge of modern payments technology. The combination of Terminal and Connect is a powerful integrated solution.",
    author: "Dax Dasilva",
    role: "Founder and CEO, Lightspeed",
    headshot: "/images/business-sizes/testimonial-headshot-lightspeed.png",
    logo: "lightspeed",
    href: "https://stripe.com/customers/lightspeed-terminal",
  },
];
