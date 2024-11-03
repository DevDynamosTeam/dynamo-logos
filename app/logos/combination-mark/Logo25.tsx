import React from "react";

export default function Logo25({
  fill = "black",
  width = "173",
  height = "58",
  stroke = "black",
}: {
  fill?: string;
  stroke?: string;
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
      <path
        d="M18.7071 28.7025H31.5584C35.5015 28.7025 38.698 25.506 38.698 21.5629C38.698 17.6198 35.5015 14.4233 31.5584 14.4233H18.7071V28.7025ZM18.7071 28.7025H34.4142C38.3573 28.7025 41.5538 31.899 41.5538 35.8421C41.5538 39.7852 38.3573 42.9817 34.4142 42.9817H18.7071V28.7025ZM16.708 54.4051H40.697C45.4953 54.4051 47.8944 54.4051 49.7271 53.4713C51.3392 52.6499 52.6499 51.3392 53.4713 49.7271C54.4051 47.8944 54.4051 45.4953 54.4051 40.697V16.708C54.4051 11.9098 54.4051 9.51063 53.4713 7.67794C52.6499 6.06586 51.3392 4.7552 49.7271 3.9338C47.8944 3 45.4953 3 40.697 3L16.708 3C11.9098 3 9.51063 3 7.67794 3.9338C6.06586 4.7552 4.7552 6.06586 3.9338 7.67794C3 9.51063 3 11.9098 3 16.708L3 40.697C3 45.4953 3 47.8944 3.9338 49.7271C4.7552 51.3392 6.06586 52.6499 7.67794 53.4713C9.51063 54.4051 11.9098 54.4051 16.708 54.4051Z"
        stroke={stroke}
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M78.181 49.0083C75.9343 49.0083 73.9031 48.5928 72.0873 47.7618C70.2715 46.9154 68.8327 45.6921 67.7709 44.0917C66.7245 42.4913 66.2013 40.5293 66.2013 38.2057C66.2013 36.2052 66.586 34.5587 67.3554 33.2661C68.1248 31.9734 69.1635 30.9501 70.4715 30.1961C71.7795 29.4421 73.2414 28.8727 74.8572 28.488C76.4729 28.1033 78.1195 27.8109 79.7968 27.6109C81.9204 27.3647 83.6439 27.1646 84.9672 27.0107C86.2906 26.8415 87.2524 26.5722 87.8525 26.2029C88.4527 25.8335 88.7528 25.2334 88.7528 24.4024V24.2408C88.7528 22.225 88.1834 20.6631 87.0447 19.5551C85.9213 18.4472 84.244 17.8932 82.0127 17.8932C79.6891 17.8932 77.8579 18.4087 76.5191 19.4397C75.1957 20.4553 74.2801 21.5864 73.7723 22.8328L67.2861 21.3556C68.0555 19.2012 69.1789 17.4623 70.6562 16.1389C72.1488 14.8002 73.8646 13.8307 75.8035 13.2305C77.7425 12.615 79.7814 12.3073 81.9204 12.3073C83.3361 12.3073 84.8364 12.4765 86.4214 12.8151C88.0218 13.1382 89.5145 13.7384 90.8994 14.6155C92.2997 15.4926 93.4462 16.7468 94.3387 18.3779C95.2312 19.9937 95.6775 22.0942 95.6775 24.6794V48.2234H88.9374V43.3761H88.6604C88.2142 44.2687 87.5448 45.1458 86.6523 46.0075C85.7597 46.8693 84.6133 47.5848 83.213 48.1542C81.8126 48.7236 80.1353 49.0083 78.181 49.0083ZM79.6814 43.4685C81.5895 43.4685 83.2207 43.0915 84.5748 42.3374C85.9444 41.5834 86.9831 40.5986 87.691 39.3829C88.4142 38.1518 88.7758 36.8361 88.7758 35.4358V30.8655C88.5296 31.1117 88.0526 31.3425 87.3447 31.558C86.6523 31.758 85.8598 31.935 84.9672 32.0889C84.0747 32.2274 83.2053 32.3582 82.3589 32.4813C81.5126 32.589 80.8047 32.6813 80.2354 32.7583C78.8966 32.9275 77.6732 33.2122 76.5653 33.6123C75.4727 34.0124 74.5956 34.5895 73.9339 35.3435C73.2876 36.0821 72.9644 37.067 72.9644 38.298C72.9644 40.0061 73.5953 41.2987 74.8572 42.1759C76.119 43.0376 77.7271 43.4685 79.6814 43.4685ZM131.438 21.4248L125.183 22.5328C124.921 21.7326 124.505 20.9708 123.936 20.2476C123.382 19.5243 122.628 18.9319 121.674 18.4703C120.72 18.0086 119.527 17.7778 118.096 17.7778C116.142 17.7778 114.511 18.2163 113.203 19.0935C111.895 19.9552 111.241 21.0709 111.241 22.4404C111.241 23.6253 111.679 24.5794 112.556 25.3026C113.434 26.0259 114.849 26.6183 116.804 27.08L122.436 28.3726C125.698 29.1266 128.129 30.2884 129.73 31.858C131.33 33.4276 132.13 35.4666 132.13 37.9749C132.13 40.0984 131.515 41.9912 130.284 43.6531C129.068 45.2997 127.368 46.5923 125.183 47.531C123.013 48.4697 120.497 48.939 117.635 48.939C113.664 48.939 110.425 48.0926 107.917 46.3999C105.409 44.6918 103.87 42.2682 103.3 39.129L109.971 38.1134C110.387 39.8522 111.241 41.1679 112.533 42.0605C113.826 42.9376 115.511 43.3761 117.588 43.3761C119.85 43.3761 121.659 42.9068 123.013 41.9681C124.367 41.0141 125.044 39.8522 125.044 38.4827C125.044 37.3747 124.629 36.4437 123.798 35.6897C122.982 34.9357 121.728 34.3663 120.035 33.9816L114.034 32.6659C110.725 31.9119 108.279 30.7116 106.694 29.0651C105.124 27.4185 104.339 25.3334 104.339 22.8097C104.339 20.7169 104.924 18.8857 106.093 17.3161C107.263 15.7465 108.879 14.5232 110.941 13.646C113.003 12.7535 115.365 12.3073 118.027 12.3073C121.859 12.3073 124.875 13.1382 127.075 14.8002C129.276 16.4467 130.73 18.6549 131.438 21.4248ZM146.066 36.1975L146.02 27.7725H147.22L161.347 12.7689H169.61L153.499 29.8499H152.414L146.066 36.1975ZM139.719 48.2234V0.950721H146.62V48.2234H139.719ZM162.109 48.2234L149.413 31.3733L154.168 26.5491L170.58 48.2234H162.109Z"
        fill={fill}
      />
    </svg>
  );
}
