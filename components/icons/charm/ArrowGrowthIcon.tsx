// Generated from the original page markup. Edit freely.
import { useId } from "react";

export function ArrowGrowthIcon() {
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
        d="M9.36859 9.53092L12.9038 13.0661L18.3921 7.57774L14.7958 8.14812L13.4849 6.83714L20.1982 5.77234L21.2589 6.833L20.1937 13.546L18.8831 12.2354L19.4538 8.63736L12.9038 15.1874L9.36824 11.6519L2.82751 18.1926L1.76685 17.132L9.36859 9.53092Z"
      />
      <defs>
        <linearGradient
          id={`${uid}-0`}
          x1="15.0507"
          y1="5.77234"
          x2="11.9241"
          y2="19.1356"
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
