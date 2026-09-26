// Generated from the original page markup. Edit freely.
import { useId } from "react";

export function ShieldIcon() {
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
        d="M21 9.44629C21 15.5177 16.6024 19.468 11.999 22.5 7.39625 19.4674 3 15.5176 3 9.44629V3h18zm-16.5 0c0 4.62111 2.92882 7.93331 6.75 10.71291V4.5H4.5zm8.25 10.71191c3.8211-2.779 6.75-6.0915 6.75-10.71191V4.5h-6.75z"
      />
      <defs>
        <linearGradient
          id={`${uid}-0`}
          x1="15.267"
          x2="7.66716"
          y1="3"
          y2="22.1058"
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
