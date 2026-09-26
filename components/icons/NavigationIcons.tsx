import { useId } from "react";

export function ChevronDownIcon() {
  return (
    <svg
      className="hds-icon navigation__chevron-down-icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="navigation__chevron-down-icon__left"
        d="M4.67065 6L9.3 10.6"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        className="navigation__chevron-down-icon__right"
        d="M12.6707 6L8.67065 10"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <svg
      className="navigation__chevron-left-icon"
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M.618 5.238 0 4.62.618 4l4-4 1.238 1.238-3.38 3.381L5.856 8 4.618 9.238z"
      />
    </svg>
  );
}

export function SparkleIcon() {
  const clipId = useId();
  return (
    <svg
      className="navigation__sparkle-icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          fill="currentColor"
          d="M9.168 6.568c.076.213.244.38.457.456l4.106 1.455v1.641l-4.106 1.455a.75.75 0 0 0-.457.457l-1.4 3.951H6.018l-1.4-3.95a.75.75 0 0 0-.379-.425l-.077-.033L.055 10.12V8.48L4.16 7.024a.75.75 0 0 0 .424-.378l.032-.078 1.49-4.207h1.57zm-3.137.501a2.25 2.25 0 0 1-1.369 1.37l-2.433.86 2.433.863c.56.198 1.015.608 1.272 1.136l.097.233.862 2.432.862-2.432.098-.233a2.25 2.25 0 0 1 1.271-1.136l2.432-.862-2.432-.862a2.25 2.25 0 0 1-1.37-1.369l-.861-2.432zm7.63-4.835a.25.25 0 0 0 .15.153l1.793.635v.535l-1.792.636a.25.25 0 0 0-.152.153l-.644 1.816h-.518l-.644-1.816a.25.25 0 0 0-.153-.153L9.91 3.558V3.02l1.792-.634a.25.25 0 0 0 .152-.153l.645-1.816h.518z"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function HamburgerIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect
        className="navigation-hamburger__background"
        x="0"
        y="0"
        width="100"
        height="100"
        fill="var(--hds-color-button-secondary-bg)"
      />
      <rect className="navigation-hamburger__line line-1" width="40" height="5" x="30" y="38" />
      <rect className="navigation-hamburger__line line-2" width="40" height="5" x="30" y="48" />
      <rect className="navigation-hamburger__line line-3" width="40" height="5" x="30" y="48" />
      <rect className="navigation-hamburger__line line-4" width="40" height="5" x="30" y="58" />
    </svg>
  );
}
