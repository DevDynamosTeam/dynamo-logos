import React from "react";

export default function Gem({
  width = "100",
  height = "29",
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 100 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_401_2425)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 9.44882L9.44882 0H28.3465L37.7953 9.44882L28.3465 18.8976L18.8976 28.3465L0 9.44882ZM28.3465 18.8976L18.8976 9.44882L28.3465 0V18.8976Z"
          fill="#0D61FF"
        />
        <path
          d="M78.6416 23.6216H82.5146V15.3683C82.5146 13.4718 83.7164 12.5103 85.2122 12.5103C86.5744 12.5103 87.4024 13.3116 87.4024 15.1012V23.6216H91.2486V15.3683C91.2486 13.4718 92.4505 12.5103 93.9462 12.5103C95.3352 12.5103 96.1365 13.3116 96.1365 15.1012V23.6216H99.9827V14.6738C99.9827 10.9612 97.9794 9.33191 95.3886 9.33191C93.6257 9.33191 91.8095 10.0797 90.6877 11.7625C90.0199 10.1064 88.631 9.33191 86.7881 9.33191C84.7047 9.33191 83.2089 10.4803 82.5146 11.7891V9.65238H78.6416V23.6216Z"
          fill="#17181A"
        />
        <path
          d="M70.1013 23.9181C73.9209 23.9181 76.3247 22.2354 76.7787 19.2172H73.1195C72.8791 20.3924 71.9978 21.167 70.2083 21.167C68.0982 21.167 66.8428 19.8315 66.7359 17.5077H76.8055V16.4393C76.8055 11.4447 73.6004 9.33459 69.9945 9.33459C65.9346 9.33459 62.8096 12.1925 62.8096 16.5996V16.8133C62.8096 21.2738 65.8812 23.9181 70.1013 23.9181ZM66.7894 15.1305C67.0832 13.154 68.2584 12.0056 69.9945 12.0056C71.8375 12.0056 72.9059 13.0206 73.0395 15.1305H66.7894Z"
          fill="#17181A"
        />
        <path
          d="M52.2418 23.9173C57.9577 23.9173 61.2162 20.5252 61.2162 15.4236V13.3937H52.6425V16.5454H56.9428C56.8626 18.7357 55.5539 20.5786 52.3487 20.5786C48.6093 20.5786 47.0334 17.9344 47.0334 14.2484V14.0348C47.0334 10.1352 48.9833 7.6512 52.2953 7.6512C54.5924 7.6512 56.0614 8.66616 56.4353 10.9097H60.7355C60.2815 6.18217 56.4887 4.2323 52.2418 4.2323C46.6061 4.2323 42.5195 8.23873 42.5195 13.9814V14.195C42.5195 19.8575 45.9918 23.9173 52.2418 23.9173Z"
          fill="#17181A"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_2425">
          <rect width="100" height="28.3465" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
