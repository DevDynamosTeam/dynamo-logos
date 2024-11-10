import React from "react";

export default function Logo47({
  fill = "black",
  width = "100",
  height = "50",
  stroke = "black",
  className = "",
}: {
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 234 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_209_371)">
        <path d="M60 0H0V60H60V0Z" fill="white" fillOpacity="0.01" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55V5Z"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 5C43.8071 5 55 16.1929 55 30C55 43.8071 43.8071 55 30 55V5Z"
          stroke={stroke}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M30 45H11.25"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 35H6.25"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 25H6.25"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 15H11.25"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M84.4972 53H69.1935V5.72727H84.9819C89.6138 5.72727 93.5916 6.67365 96.9155 8.56641C100.239 10.4438 102.786 13.1444 104.556 16.6683C106.341 20.1768 107.233 24.3855 107.233 29.2944C107.233 34.2186 106.333 38.4504 104.533 41.9897C102.748 45.529 100.162 48.2527 96.777 50.1609C93.3916 52.0536 89.2983 53 84.4972 53ZM76.326 46.7678H84.1048C87.7056 46.7678 90.6986 46.0907 93.0838 44.7365C95.469 43.367 97.254 41.3896 98.4389 38.8043C99.6238 36.2037 100.216 33.0337 100.216 29.2944C100.216 25.5858 99.6238 22.4389 98.4389 19.8537C97.2694 17.2685 95.5228 15.3065 93.1992 13.9677C90.8756 12.6289 87.9903 11.9595 84.5433 11.9595H76.326V46.7678ZM123.235 53L112.802 17.5455H119.934L126.882 43.5824H127.228L134.199 17.5455H141.332L148.256 43.467H148.603L155.504 17.5455H162.637L152.227 53H145.187L137.985 27.4016H137.454L130.252 53H123.235ZM183.388 53.7156C179.895 53.7156 176.886 52.9692 174.363 51.4766C171.854 49.9685 169.915 47.8526 168.546 45.1289C167.192 42.3898 166.515 39.1813 166.515 35.5035C166.515 31.8719 167.192 28.6712 168.546 25.9013C169.915 23.1314 171.824 20.9693 174.27 19.4151C176.732 17.8609 179.61 17.0838 182.903 17.0838C184.904 17.0838 186.843 17.4147 188.72 18.0763C190.597 18.738 192.282 19.7768 193.775 21.1925C195.268 22.6082 196.445 24.4471 197.307 26.7092C198.168 28.9558 198.599 31.6873 198.599 34.9034V37.3501H170.416V32.1797H191.836C191.836 30.3639 191.467 28.7558 190.728 27.3555C189.989 25.9397 188.951 24.8241 187.612 24.0085C186.289 23.1929 184.734 22.7852 182.949 22.7852C181.01 22.7852 179.318 23.2622 177.871 24.2163C176.44 25.1549 175.332 26.386 174.547 27.9094C173.778 29.4175 173.393 31.0563 173.393 32.826V36.8654C173.393 39.2352 173.809 41.2511 174.64 42.913C175.486 44.5749 176.663 45.8445 178.171 46.7216C179.679 47.5833 181.441 48.0142 183.457 48.0142C184.765 48.0142 185.958 47.8295 187.035 47.4602C188.112 47.0755 189.043 46.5062 189.828 45.7521C190.613 44.9981 191.213 44.0671 191.628 42.9592L198.161 44.1364C197.637 46.0599 196.699 47.7449 195.345 49.1914C194.006 50.6225 192.321 51.7382 190.29 52.5384C188.274 53.3232 185.973 53.7156 183.388 53.7156ZM213.158 5.72727V53H206.257V5.72727H213.158ZM229.345 5.72727V53H222.443V5.72727H229.345Z"
        fill={fill}
      />
      <defs>
        <clipPath id="clip0_209_371">
          <rect width="234" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
