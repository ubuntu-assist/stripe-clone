// Content extracted from the stripe.com homepage snapshot.

export type BentoCardId =
  "payments" | "billing" | "agentic-commerce" | "issuing" | "crypto" | "connect";

export interface BentoCardContent {
  id: BentoCardId;
  title: string;
  /** On stripe.com the cards open a product dialog; here they link to the product page. */
  href: string;
  /** How far the card grows on hover (px), as measured on the original page. */
  hoverShift: { x: number; y: number };
}

export const bentoCards: BentoCardContent[] = [
  {
    id: "payments",
    title: "Accept and optimize payments globally—online and in person",
    href: "https://stripe.com/payments",
    hoverShift: { x: 4.828, y: 4 },
  },
  {
    id: "billing",
    title: "Enable any billing model",
    href: "https://stripe.com/billing",
    hoverShift: { x: 3.55, y: 6 },
  },
  {
    id: "agentic-commerce",
    title: "Monetize through agentic commerce",
    href: "https://stripe.com/use-cases/agentic-commerce",
    hoverShift: { x: 3.55, y: 6 },
  },
  {
    id: "issuing",
    title: "Create a card issuing program",
    href: "https://stripe.com/issuing",
    hoverShift: { x: 3.55, y: 6 },
  },
  {
    id: "crypto",
    title: "Access borderless money movement with stablecoins and crypto",
    href: "https://stripe.com/use-cases/crypto",
    hoverShift: { x: 3.55, y: 6 },
  },
  {
    id: "connect",
    title: "Embed payments in your platform",
    href: "https://stripe.com/connect",
    hoverShift: { x: 5.476, y: 2 },
  },
];
