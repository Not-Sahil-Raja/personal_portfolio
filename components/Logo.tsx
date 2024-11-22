import * as React from "react";

const PortfolioLogo = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="M3 61L32 31H61L32 61H3Z" fill="#CCD783" />
    <mask
      id="mask0_1_2"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={58}
      height={58}
    >
      <rect x={3} y={3} width={58} height={58} fill="#CCD783" />
    </mask>
    <g mask="url(#mask0_1_2)">
      <path d="M3 31L33.3182 3H61L32 31H3Z" fill="#CCD783" />
    </g>
  </svg>
);

export default PortfolioLogo;
