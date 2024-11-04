import React from "react";

export default function Logo51({
  fill = "black",
  width = "337",
  height = "91",
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
      viewBox="0 0 337 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69 7H7V78H69V46.9743H46.8335"
        stroke={stroke}
        stroke-width="13"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M122.186 44.6616C121.739 43.2612 121.139 42.0071 120.385 40.8991C119.647 39.7758 118.762 38.8217 117.731 38.0369C116.7 37.2367 115.523 36.6289 114.199 36.2134C112.891 35.7979 111.452 35.5902 109.883 35.5902C107.221 35.5902 104.82 36.275 102.681 37.6445C100.542 39.0141 98.8494 41.0223 97.603 43.669C96.3719 46.3004 95.7564 49.5243 95.7564 53.3406C95.7564 57.1722 96.3796 60.4115 97.6261 63.0582C98.8725 65.705 100.581 67.7132 102.75 69.0827C104.92 70.4523 107.39 71.1371 110.16 71.1371C112.73 71.1371 114.969 70.6139 116.877 69.5675C118.8 68.5211 120.285 67.0438 121.332 65.1357C122.393 63.2121 122.924 60.95 122.924 58.3494L124.771 58.6957H111.245V52.8097H129.826V58.1879C129.826 62.158 128.98 65.605 127.287 68.5288C125.61 71.4371 123.286 73.6838 120.316 75.2688C117.362 76.8538 113.976 77.6463 110.16 77.6463C105.882 77.6463 102.127 76.6615 98.8956 74.6918C95.6795 72.7221 93.1712 69.9291 91.3707 66.3129C89.5703 62.6812 88.6701 58.3725 88.6701 53.3867C88.6701 49.6166 89.1933 46.2312 90.2397 43.2305C91.2861 40.2298 92.7557 37.683 94.6484 35.5902C96.5566 33.482 98.7956 31.8739 101.365 30.766C103.951 29.6426 106.774 29.081 109.837 29.081C112.391 29.081 114.769 29.458 116.969 30.212C119.185 30.966 121.155 32.0355 122.878 33.4205C124.617 34.8054 126.056 36.4519 127.195 38.3601C128.333 40.2528 129.103 42.3533 129.503 44.6616H122.186ZM145.228 29.7273V77H138.326V29.7273H145.228ZM154.513 77V41.5455H161.414V77H154.513ZM157.998 36.0749C156.798 36.0749 155.767 35.6748 154.905 34.8746C154.059 34.0591 153.635 33.0896 153.635 31.9663C153.635 30.8275 154.059 29.8581 154.905 29.0579C155.767 28.2423 156.798 27.8345 157.998 27.8345C159.198 27.8345 160.222 28.2423 161.068 29.0579C161.93 29.8581 162.361 30.8275 162.361 31.9663C162.361 33.0896 161.93 34.0591 161.068 34.8746C160.222 35.6748 159.198 36.0749 157.998 36.0749ZM170.699 77V41.5455H177.324V47.316H177.762C178.501 45.3617 179.709 43.8383 181.386 42.7457C183.064 41.6378 185.072 41.0838 187.411 41.0838C189.781 41.0838 191.766 41.6378 193.366 42.7457C194.982 43.8537 196.174 45.3771 196.944 47.316H197.313C198.159 45.4233 199.506 43.9152 201.353 42.7919C203.199 41.6532 205.4 41.0838 207.954 41.0838C211.17 41.0838 213.794 42.0917 215.825 44.1076C217.872 46.1235 218.895 49.1626 218.895 53.2251V77H211.994V53.8714C211.994 51.4709 211.34 49.732 210.032 48.6548C208.724 47.5777 207.162 47.0391 205.346 47.0391C203.099 47.0391 201.353 47.7315 200.106 49.1165C198.86 50.486 198.236 52.248 198.236 54.4023V77H191.358V53.4329C191.358 51.5094 190.758 49.9628 189.557 48.7933C188.357 47.6238 186.795 47.0391 184.872 47.0391C183.564 47.0391 182.356 47.3853 181.248 48.0778C180.155 48.7549 179.27 49.7012 178.593 50.9169C177.932 52.1326 177.601 53.5406 177.601 55.141V77H170.699ZM228.145 90.2955V41.5455H234.885V47.293H235.463C235.863 46.5543 236.44 45.7003 237.194 44.7308C237.948 43.7614 238.994 42.915 240.333 42.1918C241.672 41.4531 243.441 41.0838 245.642 41.0838C248.504 41.0838 251.059 41.8071 253.305 43.2536C255.552 44.7 257.314 46.7852 258.591 49.5089C259.884 52.2326 260.53 55.5103 260.53 59.342C260.53 63.1737 259.891 66.459 258.614 69.1982C257.337 71.9219 255.583 74.0224 253.351 75.4996C251.12 76.9615 248.573 77.6925 245.711 77.6925C243.557 77.6925 241.795 77.3308 240.425 76.6076C239.071 75.8844 238.009 75.038 237.24 74.0685C236.47 73.0991 235.878 72.2373 235.463 71.4833H235.047V90.2955H228.145ZM234.909 59.2727C234.909 61.7656 235.27 63.9508 235.993 65.8281C236.717 67.7055 237.763 69.1751 239.133 70.2369C240.502 71.2833 242.18 71.8065 244.165 71.8065C246.227 71.8065 247.95 71.2602 249.335 70.1676C250.72 69.0597 251.766 67.5593 252.474 65.6665C253.198 63.7738 253.559 61.6425 253.559 59.2727C253.559 56.9337 253.205 54.8332 252.497 52.9712C251.805 51.1093 250.758 49.6397 249.358 48.5625C247.973 47.4853 246.242 46.9467 244.165 46.9467C242.164 46.9467 240.471 47.4622 239.086 48.4933C237.717 49.5243 236.678 50.9631 235.97 52.8097C235.262 54.6562 234.909 56.8106 234.909 59.2727ZM294.83 50.2013L288.575 51.3093C288.314 50.5091 287.898 49.7474 287.329 49.0241C286.775 48.3009 286.021 47.7085 285.067 47.2468C284.113 46.7852 282.92 46.5543 281.489 46.5543C279.535 46.5543 277.903 46.9929 276.595 47.87C275.287 48.7318 274.633 49.8474 274.633 51.217C274.633 52.4019 275.072 53.3559 275.949 54.0792C276.826 54.8024 278.242 55.3949 280.196 55.8565L285.828 57.1491C289.091 57.9032 291.522 59.065 293.122 60.6346C294.723 62.2042 295.523 64.2431 295.523 66.7514C295.523 68.875 294.907 70.7678 293.676 72.4297C292.461 74.0762 290.76 75.3688 288.575 76.3075C286.405 77.2462 283.889 77.7156 281.027 77.7156C277.057 77.7156 273.818 76.8692 271.309 75.1765C268.801 73.4684 267.262 71.0447 266.693 67.9055L273.364 66.8899C273.779 68.6288 274.633 69.9445 275.926 70.837C277.219 71.7141 278.904 72.1527 280.981 72.1527C283.243 72.1527 285.051 71.6834 286.405 70.7447C287.76 69.7906 288.437 68.6288 288.437 67.2592C288.437 66.1513 288.021 65.2203 287.19 64.4663C286.375 63.7122 285.12 63.1429 283.428 62.7582L277.426 61.4425C274.118 60.6884 271.671 59.4882 270.086 57.8416C268.517 56.1951 267.732 54.11 267.732 51.5863C267.732 49.4935 268.316 47.6623 269.486 46.0927C270.655 44.5231 272.271 43.2997 274.333 42.4226C276.395 41.5301 278.757 41.0838 281.42 41.0838C285.251 41.0838 288.267 41.9148 290.468 43.5767C292.668 45.2232 294.123 47.4315 294.83 50.2013ZM318.392 77.7156C314.899 77.7156 311.89 76.9692 309.367 75.4766C306.858 73.9685 304.919 71.8526 303.55 69.1289C302.196 66.3898 301.519 63.1813 301.519 59.5035C301.519 55.8719 302.196 52.6712 303.55 49.9013C304.919 47.1314 306.828 44.9693 309.274 43.4151C311.736 41.8609 314.614 41.0838 317.907 41.0838C319.908 41.0838 321.846 41.4147 323.724 42.0763C325.601 42.738 327.286 43.7768 328.779 45.1925C330.272 46.6082 331.449 48.4471 332.31 50.7092C333.172 52.9558 333.603 55.6873 333.603 58.9034V61.3501H305.419V56.1797H326.84C326.84 54.3639 326.471 52.7558 325.732 51.3555C324.993 49.9397 323.955 48.8241 322.616 48.0085C321.292 47.1929 319.738 46.7852 317.953 46.7852C316.014 46.7852 314.322 47.2622 312.875 48.2163C311.444 49.1549 310.336 50.386 309.551 51.9094C308.782 53.4175 308.397 55.0563 308.397 56.826V60.8654C308.397 63.2352 308.813 65.2511 309.644 66.913C310.49 68.5749 311.667 69.8445 313.175 70.7216C314.683 71.5833 316.445 72.0142 318.461 72.0142C319.769 72.0142 320.962 71.8295 322.039 71.4602C323.116 71.0755 324.047 70.5062 324.832 69.7521C325.617 68.9981 326.217 68.0671 326.632 66.9592L333.165 68.1364C332.641 70.0599 331.703 71.7449 330.348 73.1914C329.01 74.6225 327.325 75.7382 325.293 76.5384C323.278 77.3232 320.977 77.7156 318.392 77.7156Z"
        fill={fill}
      />
    </svg>
  );
}
