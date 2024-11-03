import React from "react";

export default function GoogleAds({
  width = "50",
  height = "46",
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
      <g clip-path="url(#clip0_401_2335)">
        <path
          d="M17.048 5.74295C17.53 4.47789 18.1926 3.31323 19.1766 2.36945C23.1123 -1.46588 29.6183 -0.502027 32.289 4.31724C34.297 7.97186 36.4255 11.5462 38.4938 15.1606C41.9476 21.1646 45.4416 27.1687 48.8553 33.1927C51.7267 38.2329 48.6143 44.5984 42.9115 45.4618C39.4175 45.9839 36.1444 44.3775 34.3372 41.245C31.3051 35.9638 28.2528 30.6827 25.2207 25.4217C25.1605 25.3012 25.0802 25.2008 24.9998 25.1004C24.6785 24.8393 24.538 24.4578 24.3372 24.1164C22.9918 21.747 21.6063 19.3976 20.2609 17.0482C19.3974 15.5221 18.4938 14.016 17.6304 12.4899C16.8472 11.1245 16.4858 9.63853 16.526 8.07226C16.5862 7.26905 16.6866 6.46584 17.048 5.74295Z"
          fill="#3C8BD9"
        />
        <path
          d="M17.0482 5.74304C16.8675 6.46593 16.7069 7.18883 16.6667 7.95188C16.6065 9.63862 17.0281 11.2049 17.8715 12.6708C20.0803 16.4659 22.2891 20.2812 24.4779 24.0964C24.6787 24.4378 24.8393 24.7792 25.0401 25.1005C23.8353 27.1888 22.6305 29.2571 21.4056 31.3454C19.7189 34.2571 18.0322 37.1888 16.3253 40.1005C16.245 40.1005 16.2249 40.0603 16.2048 40C16.1848 39.8394 16.245 39.6988 16.2852 39.5382C17.1085 36.5262 16.4257 33.8555 14.3575 31.5663C13.0924 30.1808 11.486 29.3976 9.63858 29.1366C7.22894 28.7952 5.10043 29.4177 3.1928 30.9237C2.85143 31.1848 2.63055 31.5663 2.22894 31.7671C2.14862 31.7671 2.10846 31.727 2.08838 31.6667C3.05223 30.0001 3.99601 28.3334 4.95986 26.6667C8.93577 19.7591 12.9117 12.8515 16.9077 5.96393C16.9478 5.8836 17.0081 5.82336 17.0482 5.74304Z"
          fill="#FABC04"
        />
        <path
          d="M2.16847 31.7269C2.55 31.3855 2.91144 31.024 3.31305 30.7028C8.19256 26.8473 15.5219 29.6385 16.5861 35.7429C16.8472 37.2088 16.7066 38.6144 16.2649 40.02C16.2448 40.1405 16.2247 40.2409 16.1845 40.3614C16.0038 40.6827 15.8432 41.024 15.6424 41.3453C13.8552 44.2971 11.2247 45.763 7.77088 45.5421C3.81506 45.261 0.702612 42.2891 0.160443 38.3534C-0.100601 36.4457 0.280925 34.6586 1.26486 33.012C1.46566 32.6505 1.70663 32.3293 1.92751 31.9678C2.02791 31.8875 1.98775 31.7269 2.16847 31.7269Z"
          fill="#34A852"
        />
        <path
          d="M2.16883 31.7269C2.08851 31.8072 2.08851 31.9478 1.94795 31.9679C1.92786 31.8273 2.00818 31.747 2.08851 31.6466L2.16883 31.7269Z"
          fill="#FABC04"
        />
        <path
          d="M16.1846 40.3614C16.1043 40.2208 16.1846 40.1204 16.265 40.02C16.285 40.0401 16.3252 40.0803 16.3453 40.1003L16.1846 40.3614Z"
          fill="#E1C025"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_2335">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
