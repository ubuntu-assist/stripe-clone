import "react";

declare module "react" {
  // Allow CSS custom properties (e.g. `style={{ "--progress": 0 }}`) in inline styles.
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
