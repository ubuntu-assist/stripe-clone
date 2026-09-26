// Generated from the original page markup. Edit freely.
import { useId } from "react";

export function FastForwardIcon() {
  const uid = useId();
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={`url(#${uid}-0)`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.75 11.2529V12.7461L4 21L4 3L15.75 11.2529ZM5.5 18.1133L14.2021 12L5.5 5.8877L5.5 18.1133Z"
      />
      <path
        fill={`url(#${uid}-0)`}
        d="M22 11.4287V12.5703L10 21V16.7852L11.5 15.7314V18.1133L20.2021 12H20.2051L10 4.83105V3L22 11.4287Z"
      />
      <defs>
        <linearGradient
          id={`${uid}-0`}
          x1="16.267"
          y1="21"
          x2="9.65783"
          y2="3.00008"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--icon-gradient-start)" />
          <stop offset="0.5" stopColor="var(--icon-gradient-middle)" />
          <stop offset="1" stopColor="var(--icon-gradient-end)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
