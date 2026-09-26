import { getImageProps } from "next/image";

/** Static fallback of the animated wave in "Scale with confidence" (wide on desktop, narrow below). */
export function DevelopersWave() {
  const common = { alt: "", sizes: "(min-width: 940px) 1232px, 100vw" };
  const wide = getImageProps({
    ...common,
    src: "/images/developers/developer-wave-wide-2x.png",
    width: 2464,
    height: 920,
  }).props;
  const narrow = getImageProps({
    ...common,
    src: "/images/developers/developer-wave-narrow-2x.png",
    width: 1182,
    height: 840,
  }).props;

  return (
    <div className="developers-wave-animation">
      <div className="developers-wave-animation__static">
        <picture>
          <source media="(min-width: 940px)" srcSet={wide.srcSet} sizes={wide.sizes} />
          <source media="(max-width: 939px)" srcSet={narrow.srcSet} sizes={narrow.sizes} />
          {/* Art-directed <picture>; alt="" comes from the spread props. */}
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img {...wide} aria-hidden="true" />
        </picture>
      </div>
    </div>
  );
}
