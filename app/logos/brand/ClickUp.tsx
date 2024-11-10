import React from "react";
export default function ClickUp({
  width = "100",
  height = "25",
  className = "",
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
      viewBox="0 0 100 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_401_2970)">
        <path
          d="M0.0600586 17.8858L3.63513 15.1471C5.53453 17.6261 7.55255 18.7687 9.7988 18.7687C12.033 18.7687 13.994 17.6396 15.8078 15.1801L19.4339 17.8528C16.8168 21.3993 13.5646 23.2732 9.7988 23.2732C6.04504 23.2732 2.76126 21.4114 0.0600586 17.8858Z"
          fill="url(#paint0_linear_401_2970)"
        />
        <path
          d="M9.78674 5.982L3.42338 11.4655L0.481934 8.05408L9.80026 0.0240479L19.045 8.06008L16.09 11.4595L9.78674 5.982Z"
          fill="url(#paint1_linear_401_2970)"
        />
        <path
          d="M33.1441 19.8904C30.9715 19.8904 29.1607 19.1862 27.6922 17.7778C26.2237 16.3499 25.5 14.5196 25.5 12.2853C25.5 10.0331 26.2432 8.18172 27.7117 6.73277C29.2012 5.2643 31.012 4.54058 33.1652 4.54058C35.8213 4.54058 38.1742 5.68622 39.5435 7.47751L37.1471 9.99253C36 8.7643 34.7523 8.14118 33.4054 8.14118C32.2583 8.14118 31.3123 8.52256 30.527 9.30784C29.7628 10.0931 29.3814 11.0796 29.3814 12.2658C29.3814 13.4129 29.7628 14.3784 30.527 15.1637C31.3123 15.928 32.2583 16.3094 33.3844 16.3094C34.8529 16.3094 36.1411 15.6652 37.2072 14.3979L39.7027 16.7928C39.018 17.6982 38.0931 18.443 36.9459 19.0256C35.7988 19.6097 34.5315 19.8904 33.1426 19.8904H33.1441ZM43.9249 4.31835V19.6697H40.3844V4.31835H43.9249ZM47.2808 7.57661C46.0946 7.57661 45.2297 6.71175 45.2297 5.52556C45.2297 4.37841 46.1351 3.51355 47.2808 3.51355C48.4279 3.51355 49.3138 4.37841 49.3138 5.52556C49.3138 6.71175 48.4279 7.57811 47.2808 7.57811V7.57661ZM49.0721 8.5631V19.6697H45.5105V8.5631H49.0721ZM55.8889 19.9115C54.1381 19.9115 52.7297 19.3679 51.6246 18.2808C50.5375 17.1952 49.994 15.8064 49.994 14.0961C49.994 12.3859 50.5375 10.9985 51.6441 9.91145C52.7508 8.82436 54.1787 8.28232 55.9489 8.28232C58.2628 8.28232 60.2958 9.40844 61.2402 11.5211L58.4039 13.0105C57.8408 12.0646 57.0556 11.5811 56.03 11.5811C55.2853 11.5811 54.6817 11.8229 54.1982 12.3063C53.9688 12.5436 53.7886 12.8239 53.6677 13.131C53.5468 13.4382 53.4878 13.7661 53.494 14.0961C53.494 15.5646 54.5601 16.6517 55.9895 16.6517C57.015 16.6517 57.961 16.0886 58.3634 15.2238L61.2012 16.913C60.2342 18.7643 58.2432 19.9115 55.8889 19.9115ZM73.5511 19.6697H69.3243L66.0435 15.2628L65.521 15.7463V19.6697H61.982V4.31835H65.5225V11.7823L68.8619 8.5631H73.1877L68.4204 13.0301L73.5511 19.6697ZM73.7883 13.8949V4.80034H77.5706V13.8349C77.5706 15.5046 78.536 16.3094 79.9249 16.3094C81.2928 16.3094 82.2583 15.464 82.2583 13.8349V4.80034H86.0616V13.8949C86.0616 18.2808 83.0225 19.931 79.9249 19.931C76.8468 19.931 73.7883 18.2808 73.7883 13.8949ZM94.467 8.28232C96.0571 8.28232 97.3453 8.84538 98.3709 9.97151C99.3964 11.0781 99.8994 12.467 99.8994 14.0961C99.8994 15.7268 99.3769 17.1142 98.3513 18.2613C97.3243 19.3874 96.0375 19.952 94.488 19.952C93.2598 19.952 92.1937 19.5496 91.3288 18.7448V24.2373H87.7673V8.5631H91.2688V9.59013C92.1336 8.72376 93.1997 8.28232 94.467 8.28232ZM96.2778 14.1367C96.2778 12.6877 95.2327 11.5811 93.7838 11.5811C92.3348 11.5811 91.2688 12.6877 91.2688 14.1367C91.2688 14.8409 91.509 15.4445 91.973 15.9475C92.4549 16.4505 93.0586 16.6922 93.7838 16.6922C94.5075 16.6922 95.1111 16.4505 95.5736 15.9475C96.035 15.4583 96.288 14.809 96.2793 14.1367H96.2778Z"
          fill="#111111"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_401_2970"
          x1="0.0600586"
          y1="20.6737"
          x2="19.4339"
          y2="20.6737"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8930FD" />
          <stop offset="1" stopColor="#49CCF9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_401_2970"
          x1="0.481934"
          y1="7.80537"
          x2="19.045"
          y2="7.80537"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF02F0" />
          <stop offset="1" stopColor="#FFC800" />
        </linearGradient>
        <clipPath id="clip0_401_2970">
          <rect width="100" height="24.3243" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
