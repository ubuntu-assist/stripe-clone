import type { BrandLogoName } from "@/components/logos";

export interface LinkItem {
  label: string;
  /** Items without an href render as plain text (e.g. a phone number). */
  href?: string;
}

export interface CustomerLogo {
  name: string;
  logo: BrandLogoName;
  href?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CustomerStory {
  id: string;
  name: string;
  summary: string;
  href: string;
  logo: BrandLogoName;
  image: ImageAsset;
  stats: { value: string; label: string }[];
}

export interface CaseStudy {
  name: string;
  href: string;
  title: string;
  cta: string;
  image: string;
  logo: BrandLogoName;
}

export interface Testimonial {
  company: string;
  quote: string;
  author: string;
  role: string;
  headshot: string;
  logo: BrandLogoName;
  href: string;
}

export interface Stat {
  id: string;
  /** Data-viz image shown while this stat is selected. */
  visual: string;
  value: string;
  description: string;
  /** Optional part of the description rendered as a link. */
  link?: { text: string; href: string };
}

export interface EventItem {
  title: string;
  description: string;
  cta: string;
  /** Accessible label for the CTA when the visible text is ambiguous. */
  ctaLabel?: string;
  href: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  link: { label: string; href: string };
}
