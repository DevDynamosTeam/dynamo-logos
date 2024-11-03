import React from "react";

export default function IPay({
  width = "200",
  height = "200",
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_32)">
        <path
          d="M151.842 273.649C161.152 261.679 167.803 245.719 165.808 229.759C151.842 230.424 135.217 239.069 125.242 250.374C116.597 260.349 108.617 276.974 110.612 292.269C126.572 294.264 141.867 285.619 151.842 273.649ZM165.808 296.259C143.197 294.929 123.912 308.895 113.272 308.895C102.632 308.895 86.007 296.924 68.0519 296.924C44.7768 297.589 23.4966 310.225 11.5266 331.505C-12.4136 373.4 4.87652 435.245 28.8167 469.161C40.1217 485.786 54.0868 504.406 72.0419 503.741C89.3321 503.076 95.9821 492.436 116.597 492.436C137.212 492.436 143.197 503.741 161.818 503.076C180.438 502.411 192.408 486.451 203.713 469.161C217.013 449.875 222.333 431.255 222.333 430.59C221.668 429.925 185.758 416.625 185.758 375.395C185.093 340.815 213.688 324.19 215.018 323.525C199.723 299.584 174.453 296.924 165.808 296.259Z"
          fill="black"
        />
        <path
          d="M361.319 249.044C410.529 249.044 444.444 282.959 444.444 331.504C444.444 380.715 409.864 414.63 359.989 414.63H306.123V500.415H266.888V249.044H361.319ZM306.123 382.045H350.679C384.594 382.045 403.879 363.425 403.879 332.169C403.879 300.249 384.594 282.294 350.679 282.294H305.458V382.045H306.123ZM454.419 449.21C454.419 417.29 479.025 397.34 522.915 394.68L573.455 392.02V378.055C573.455 357.44 559.49 345.47 536.88 345.47C514.935 345.47 501.635 356.11 498.31 372.07H462.399C464.394 338.82 492.99 314.214 538.21 314.214C582.765 314.214 611.36 337.489 611.36 374.73V501.08H575.45V471.155H574.785C564.145 491.77 540.87 504.406 516.93 504.406C479.689 504.406 454.419 481.795 454.419 449.21ZM573.455 432.585V417.955L528.235 420.615C505.625 421.945 492.99 431.92 492.99 447.88C492.99 463.84 506.29 474.48 526.24 474.48C552.84 474.48 573.455 456.525 573.455 432.585ZM644.611 568.911V538.321C647.271 538.986 653.921 538.986 656.581 538.986C673.871 538.986 683.181 531.671 689.166 513.051C689.166 512.386 692.491 501.746 692.491 501.746L625.99 318.204H666.556L713.106 467.83H713.771L760.321 318.204H800.222L731.726 511.721C715.766 556.276 697.811 570.241 659.906 570.241C657.246 569.576 647.936 569.576 644.611 568.911Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_32">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.22168)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
