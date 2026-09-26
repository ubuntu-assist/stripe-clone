// Registry of inline brand logos. Fills use `var(--customerLogoColor, <brand colour>)`
// so surrounding CSS can recolour them (e.g. the flat grey hover state in the hero marquee).
import { AmazonLogo } from "./AmazonLogo";
import { AnthropicLogo } from "./AnthropicLogo";
import { BrightwheelLogo } from "./BrightwheelLogo";
import { BrowserbaseLogo } from "./BrowserbaseLogo";
import { CoinbaseLogo } from "./CoinbaseLogo";
import { CursorLogo } from "./CursorLogo";
import { DecagonLogo } from "./DecagonLogo";
import { ElevenLabsLogo } from "./ElevenLabsLogo";
import { FigmaLogo } from "./FigmaLogo";
import { FordLogo } from "./FordLogo";
import { GammaLogo } from "./GammaLogo";
import { GoogleLogo } from "./GoogleLogo";
import { HertzMark } from "./HertzMark";
import { InstacartMark } from "./InstacartMark";
import { JobberLogo } from "./JobberLogo";
import { LeMondeMark } from "./LeMondeMark";
import { LightspeedLogo } from "./LightspeedLogo";
import { LinearLogo } from "./LinearLogo";
import { LovableLogo } from "./LovableLogo";
import { MarriottLogo } from "./MarriottLogo";
import { MetLifeLogo } from "./MetLifeLogo";
import { MindbodyLogo } from "./MindbodyLogo";
import { NvidiaLogo } from "./NvidiaLogo";
import { OpenAILogo } from "./OpenAILogo";
import { RampLogo } from "./RampLogo";
import { RunwayLogo } from "./RunwayLogo";
import { ShopifyLogo } from "./ShopifyLogo";
import { StripeSessionsLogo } from "./StripeSessionsLogo";
import { SubstackLogo } from "./SubstackLogo";
import { SupabaseLogo } from "./SupabaseLogo";
import { UberLogo } from "./UberLogo";
import { URBNMark } from "./URBNMark";
import { VercelLogo } from "./VercelLogo";
import { WooCommerceLogo } from "./WooCommerceLogo";

export const brandLogos = {
  amazon: AmazonLogo,
  anthropic: AnthropicLogo,
  brightwheel: BrightwheelLogo,
  browserbase: BrowserbaseLogo,
  coinbase: CoinbaseLogo,
  cursor: CursorLogo,
  decagon: DecagonLogo,
  elevenlabs: ElevenLabsLogo,
  figma: FigmaLogo,
  ford: FordLogo,
  gamma: GammaLogo,
  google: GoogleLogo,
  hertz: HertzMark,
  instacart: InstacartMark,
  jobber: JobberLogo,
  lemonde: LeMondeMark,
  lightspeed: LightspeedLogo,
  linear: LinearLogo,
  lovable: LovableLogo,
  marriott: MarriottLogo,
  metlife: MetLifeLogo,
  mindbody: MindbodyLogo,
  nvidia: NvidiaLogo,
  openai: OpenAILogo,
  ramp: RampLogo,
  runway: RunwayLogo,
  shopify: ShopifyLogo,
  "stripe-sessions": StripeSessionsLogo,
  substack: SubstackLogo,
  supabase: SupabaseLogo,
  uber: UberLogo,
  urbn: URBNMark,
  vercel: VercelLogo,
  woocommerce: WooCommerceLogo,
};

export type BrandLogoName = keyof typeof brandLogos;
