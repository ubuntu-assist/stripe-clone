import { getImageProps } from "next/image";

/**
 * Static fallback of the animated WebGL wave behind the hero. The original
 * renders a three.js canvas and fades this image out once it has drawn; here
 * the image is the final result. Uses `getImageProps` for art direction.
 */
const sources = {
  desktop: {
    media: "(min-width: 1264px)",
    src: "/images/hero/wave-fallback-desktop-2x.webp",
    width: 2784,
    height: 1949,
  },
  tablet: {
    media: "(min-width: 640px) and (max-width: 1263px)",
    src: "/images/hero/wave-fallback-tablet-2x.webp",
    width: 2496,
    height: 1950,
  },
  mobile: {
    media: "(max-width: 639px)",
    src: "/images/hero/wave-fallback-mobile-2x.webp",
    width: 1248,
    height: 1950,
  },
};

export function HeroWaveBackground() {
  const common = { alt: "", priority: true, quality: 85 } as const;
  const desktop = getImageProps({ ...common, ...sources.desktop, sizes: "1392px" }).props;
  const tablet = getImageProps({ ...common, ...sources.tablet, sizes: "1248px" }).props;
  const mobile = getImageProps({ ...common, ...sources.mobile, sizes: "624px" }).props;

  return (
    <div className="section-background hero-section__background" aria-hidden="true">
      <span className="hero-section__fullbleed-line hero-section__fullbleed-line--top" />
      <span className="hero-section__fullbleed-line hero-section__fullbleed-line--bottom" />
      <div className="hero-wave-animation">
        <div className="hero-wave-animation__layout">
          <div className="hero-wave-animation__contents">
            <div
              className="hero-wave-animation__static"
              style={{
                "--fallback-width-mobile": "624px",
                "--fallback-width-tablet": "1248px",
                "--fallback-width-desktop": "1392px",
                "--fallback-height-mobile": "975px",
                "--fallback-height-tablet": "975px",
                "--fallback-height-desktop": "975px",
              }}
            >
              <picture>
                <source
                  media={sources.desktop.media}
                  srcSet={desktop.srcSet}
                  sizes={desktop.sizes}
                />
                <source media={sources.tablet.media} srcSet={tablet.srcSet} sizes={tablet.sizes} />
                <source media={sources.mobile.media} srcSet={mobile.srcSet} sizes={mobile.sizes} />
                {/* Art-directed <picture>; alt="" comes from the spread props. */}
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img {...desktop} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
