import { useId } from "react";

/** The animated "hover arrow" used inside `.hds-button` and `.hds-link--callout`. */
export function ArrowIcon() {
  const clipId = useId();
  return (
    <svg
      className="hds-icon hds-icon-hover-arrow"
      width="5"
      height="8"
      viewBox="0 0.5 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="12" height="9" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <g className="arrow-group">
          <rect className="shaft" fill="currentColor" x="-10" y="3.375" width="13" height="1.75" />
          <path
            fill="currentColor"
            d="M4.84766 3.63379L5.45898 4.25L4.84766 4.86621L1.24219 8.49902L0 7.2666L2.99316 4.24902L0 1.23242L1.24219 0L4.84766 3.63379Z"
          />
        </g>
      </g>
    </svg>
  );
}
