import React from "react";

export default function Logo49({
  fill = "black",
  width = "100",
  height = "54",
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
      viewBox="0 0 284 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.9997 20.0416L50.8747 12.3333L66.2913 21.4181V54.1234L52.4163 63.2083L21.583 44.7083V27.7499L52.4163 45.0386V29.2916L36.9997 20.0416ZM36.9997 20.0416L23.1247 12.3333L7.70907 21.5833L7.70801 53.9583L23.1247 63.2083L36.9997 53.9583"
        stroke={stroke}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M117.349 13.7273V61H110.793L86.7646 26.3303H86.326V61H79.1935V13.7273H85.7951L109.847 48.4432H110.286V13.7273H117.349ZM142.48 61.7156C138.987 61.7156 135.978 60.9692 133.454 59.4766C130.946 57.9685 129.007 55.8526 127.638 53.1289C126.284 50.3898 125.606 47.1813 125.606 43.5035C125.606 39.8719 126.284 36.6712 127.638 33.9013C129.007 31.1314 130.915 28.9693 133.362 27.4151C135.824 25.8609 138.702 25.0838 141.995 25.0838C143.995 25.0838 145.934 25.4147 147.812 26.0763C149.689 26.738 151.374 27.7768 152.867 29.1925C154.359 30.6082 155.537 32.4471 156.398 34.7092C157.26 36.9558 157.691 39.6873 157.691 42.9034V45.3501H129.507V40.1797H150.928C150.928 38.3639 150.559 36.7558 149.82 35.3555C149.081 33.9397 148.043 32.8241 146.704 32.0085C145.38 31.1929 143.826 30.7852 142.041 30.7852C140.102 30.7852 138.409 31.2622 136.963 32.2163C135.532 33.1549 134.424 34.386 133.639 35.9094C132.87 37.4175 132.485 39.0563 132.485 40.826V44.8654C132.485 47.2352 132.9 49.2511 133.731 50.913C134.578 52.5749 135.755 53.8445 137.263 54.7216C138.771 55.5833 140.533 56.0142 142.549 56.0142C143.857 56.0142 145.05 55.8295 146.127 55.4602C147.204 55.0755 148.135 54.5062 148.92 53.7521C149.704 52.9981 150.305 52.0671 150.72 50.9592L157.252 52.1364C156.729 54.0599 155.791 55.7449 154.436 57.1914C153.098 58.6225 151.413 59.7382 149.381 60.5384C147.365 61.3232 145.065 61.7156 142.48 61.7156ZM180.283 61.7156C176.851 61.7156 173.897 60.9384 171.419 59.3842C168.957 57.8146 167.064 55.6526 165.741 52.8981C164.418 50.1436 163.756 46.989 163.756 43.4343C163.756 39.8335 164.433 36.6558 165.787 33.9013C167.141 31.1314 169.049 28.9693 171.512 27.4151C173.974 25.8609 176.874 25.0838 180.214 25.0838C182.907 25.0838 185.307 25.5839 187.415 26.5842C189.523 27.569 191.224 28.954 192.517 30.739C193.825 32.524 194.602 34.6091 194.848 36.9943H188.131C187.762 35.3324 186.915 33.9013 185.592 32.701C184.284 31.5007 182.53 30.9006 180.329 30.9006C178.405 30.9006 176.72 31.4084 175.274 32.424C173.843 33.4242 172.727 34.8553 171.927 36.7173C171.127 38.5639 170.727 40.7491 170.727 43.2727C170.727 45.858 171.119 48.0893 171.904 49.9666C172.689 51.844 173.797 53.2982 175.228 54.3292C176.674 55.3602 178.375 55.8757 180.329 55.8757C181.637 55.8757 182.822 55.6372 183.884 55.1602C184.961 54.6677 185.861 53.9676 186.584 53.0597C187.323 52.1518 187.838 51.0592 188.131 49.782H194.848C194.602 52.0748 193.855 54.1214 192.609 55.9219C191.362 57.7223 189.693 59.138 187.6 60.169C185.523 61.2 183.084 61.7156 180.283 61.7156ZM218.778 25.5455V31.0852H199.412V25.5455H218.778ZM204.606 17.0511H211.508V50.5898C211.508 51.9286 211.708 52.9366 212.108 53.6136C212.508 54.2753 213.023 54.7293 213.654 54.9755C214.301 55.2063 215.001 55.3217 215.755 55.3217C216.309 55.3217 216.793 55.2833 217.209 55.2063C217.624 55.1294 217.948 55.0678 218.178 55.0217L219.425 60.723C219.025 60.8769 218.455 61.0308 217.717 61.1847C216.978 61.3539 216.055 61.4463 214.947 61.4616C213.131 61.4924 211.438 61.1693 209.869 60.4922C208.299 59.8151 207.03 58.7687 206.06 57.353C205.091 55.9373 204.606 54.1599 204.606 52.021V17.0511ZM236.731 61.7848C234.484 61.7848 232.453 61.3693 230.637 60.5384C228.821 59.692 227.382 58.4686 226.321 56.8683C225.274 55.2679 224.751 53.3059 224.751 50.9822C224.751 48.9818 225.136 47.3352 225.905 46.0426C226.675 44.75 227.713 43.7267 229.021 42.9727C230.329 42.2186 231.791 41.6493 233.407 41.2646C235.023 40.8799 236.669 40.5875 238.347 40.3874C240.47 40.1412 242.194 39.9412 243.517 39.7873C244.84 39.618 245.802 39.3487 246.402 38.9794C247.002 38.6101 247.303 38.0099 247.303 37.179V37.0174C247.303 35.0015 246.733 33.4396 245.594 32.3317C244.471 31.2237 242.794 30.6697 240.562 30.6697C238.239 30.6697 236.408 31.1852 235.069 32.2163C233.746 33.2319 232.83 34.3629 232.322 35.6094L225.836 34.1321C226.605 31.9777 227.729 30.2389 229.206 28.9155C230.699 27.5767 232.414 26.6072 234.353 26.0071C236.292 25.3916 238.331 25.0838 240.47 25.0838C241.886 25.0838 243.386 25.2531 244.971 25.5916C246.572 25.9148 248.064 26.5149 249.449 27.392C250.85 28.2692 251.996 29.5233 252.888 31.1545C253.781 32.7702 254.227 34.8707 254.227 37.456V61H247.487V56.1527H247.21C246.764 57.0452 246.095 57.9223 245.202 58.7841C244.31 59.6458 243.163 60.3614 241.763 60.9308C240.362 61.5001 238.685 61.7848 236.731 61.7848ZM238.231 56.245C240.139 56.245 241.77 55.868 243.125 55.114C244.494 54.36 245.533 53.3751 246.241 52.1594C246.964 50.9284 247.326 49.6127 247.326 48.2124V43.642C247.079 43.8883 246.602 44.1191 245.895 44.3345C245.202 44.5346 244.41 44.7115 243.517 44.8654C242.625 45.0039 241.755 45.1347 240.909 45.2578C240.062 45.3655 239.355 45.4579 238.785 45.5348C237.446 45.7041 236.223 45.9888 235.115 46.3888C234.022 46.7889 233.145 47.366 232.484 48.12C231.837 48.8587 231.514 49.8435 231.514 51.0746C231.514 52.7827 232.145 54.0753 233.407 54.9524C234.669 55.8142 236.277 56.245 238.231 56.245ZM263.42 61V25.5455H270.091V31.1776H270.46C271.106 29.2694 272.245 27.7691 273.876 26.6765C275.523 25.5685 277.385 25.0146 279.462 25.0146C279.893 25.0146 280.401 25.0299 280.986 25.0607C281.586 25.0915 282.055 25.13 282.394 25.1761V31.7777C282.117 31.7008 281.624 31.6161 280.916 31.5238C280.208 31.4161 279.501 31.3622 278.793 31.3622C277.162 31.3622 275.707 31.7085 274.43 32.4009C273.168 33.078 272.168 34.0244 271.429 35.2401C270.691 36.4403 270.321 37.8099 270.321 39.3487V61H263.42Z"
        fill={fill}
      />
    </svg>
  );
}
