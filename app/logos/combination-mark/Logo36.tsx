import React from "react";

export default function Logo36({
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
      viewBox="0 0 177 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 17.5H34V1H1L17.5 17.5ZM17.5 17.5H1V34H34L17.5 17.5Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.4432 32V29.0739L59.7415 6.6875H44.3153V2.90909H65.1108V5.83523L49.8125 28.2216H65.2386V32H44.4432ZM79.8054 32.4403C77.6558 32.4403 75.8045 31.9811 74.2514 31.0625C72.7079 30.1345 71.5147 28.8324 70.6719 27.1562C69.8385 25.4706 69.4219 23.4962 69.4219 21.233C69.4219 18.9981 69.8385 17.0284 70.6719 15.3239C71.5147 13.6193 72.6889 12.2888 74.1946 11.3324C75.7098 10.3759 77.4806 9.89773 79.5071 9.89773C80.7382 9.89773 81.9313 10.1013 83.0866 10.5085C84.242 10.9157 85.2789 11.5549 86.1974 12.4261C87.116 13.2973 87.8404 14.429 88.3707 15.821C88.901 17.2036 89.1662 18.8845 89.1662 20.8636V22.3693H71.8224V19.1875H85.0043C85.0043 18.0701 84.777 17.0805 84.3224 16.2188C83.8679 15.3475 83.2287 14.661 82.4048 14.1591C81.5904 13.6572 80.634 13.4062 79.5355 13.4062C78.3423 13.4062 77.3007 13.6998 76.4105 14.2869C75.5298 14.8646 74.848 15.6222 74.3651 16.5597C73.8916 17.4877 73.6548 18.4962 73.6548 19.5852V22.071C73.6548 23.5294 73.9105 24.7699 74.4219 25.7926C74.9427 26.8153 75.6671 27.5966 76.5952 28.1364C77.5232 28.6667 78.6075 28.9318 79.848 28.9318C80.6529 28.9318 81.3868 28.8182 82.0497 28.5909C82.7126 28.3542 83.2855 28.0038 83.7685 27.5398C84.2514 27.0758 84.6207 26.5028 84.8764 25.821L88.8963 26.5455C88.5743 27.7292 87.9967 28.7661 87.1634 29.6562C86.3395 30.5369 85.3026 31.2235 84.0526 31.7159C82.812 32.1989 81.3963 32.4403 79.8054 32.4403ZM93.8786 40.1818V10.1818H98.0263V13.7188H98.3814C98.6276 13.2642 98.9827 12.7386 99.4467 12.142C99.9107 11.5455 100.555 11.0246 101.379 10.5795C102.202 10.125 103.291 9.89773 104.646 9.89773C106.407 9.89773 107.979 10.3428 109.362 11.233C110.744 12.1231 111.828 13.4062 112.614 15.0824C113.41 16.7585 113.808 18.7756 113.808 21.1335C113.808 23.4915 113.415 25.5133 112.629 27.1989C111.843 28.875 110.763 30.1676 109.39 31.0767C108.017 31.9763 106.45 32.4261 104.688 32.4261C103.362 32.4261 102.278 32.2036 101.435 31.7585C100.602 31.3134 99.9486 30.7926 99.4751 30.196C99.0017 29.5994 98.6371 29.0691 98.3814 28.6051H98.1257V40.1818H93.8786ZM98.0405 21.0909C98.0405 22.625 98.263 23.9697 98.7081 25.125C99.1532 26.2803 99.7971 27.1847 100.64 27.8381C101.483 28.482 102.515 28.804 103.737 28.804C105.005 28.804 106.066 28.4678 106.918 27.7955C107.771 27.1136 108.415 26.1903 108.85 25.0256C109.295 23.8608 109.518 22.5492 109.518 21.0909C109.518 19.6515 109.3 18.3589 108.864 17.2131C108.438 16.0672 107.794 15.1629 106.933 14.5C106.08 13.8371 105.015 13.5057 103.737 13.5057C102.505 13.5057 101.464 13.8229 100.612 14.4574C99.7687 15.0919 99.1295 15.9773 98.6939 17.1136C98.2583 18.25 98.0405 19.5758 98.0405 21.0909ZM122.813 19.0455V32H118.566V2.90909H122.756V13.733H123.026C123.538 12.5587 124.319 11.6259 125.37 10.9347C126.421 10.2434 127.794 9.89773 129.489 9.89773C130.986 9.89773 132.292 10.2055 133.41 10.821C134.537 11.4366 135.408 12.3551 136.023 13.5767C136.648 14.7888 136.961 16.304 136.961 18.1222V32H132.714V18.6335C132.714 17.0331 132.302 15.7926 131.478 14.9119C130.654 14.0218 129.508 13.5767 128.04 13.5767C127.037 13.5767 126.137 13.7898 125.342 14.2159C124.556 14.642 123.935 15.267 123.481 16.0909C123.036 16.9053 122.813 17.8902 122.813 19.0455ZM144.532 40.1818C143.897 40.1818 143.32 40.1297 142.799 40.0256C142.278 39.9309 141.89 39.8267 141.634 39.7131L142.657 36.233C143.433 36.4413 144.125 36.5313 144.731 36.5028C145.337 36.4744 145.872 36.2472 146.336 35.821C146.809 35.3949 147.226 34.6989 147.586 33.733L148.112 32.2841L140.129 10.1818H144.674L150.2 27.1136H150.427L155.952 10.1818H160.512L151.521 34.9119C151.104 36.0483 150.574 37.0095 149.93 37.7955C149.286 38.5909 148.519 39.1875 147.629 39.5852C146.738 39.983 145.706 40.1818 144.532 40.1818ZM164.504 32V10.1818H168.609V13.6477H168.836C169.234 12.4735 169.934 11.5502 170.938 10.8778C171.951 10.196 173.097 9.85511 174.376 9.85511C174.641 9.85511 174.953 9.86458 175.313 9.88352C175.683 9.90246 175.971 9.92614 176.18 9.95455V14.017C176.009 13.9697 175.706 13.9176 175.271 13.8608C174.835 13.7945 174.399 13.7614 173.964 13.7614C172.96 13.7614 172.065 13.9744 171.279 14.4006C170.503 14.8172 169.887 15.3996 169.433 16.1477C168.978 16.8864 168.751 17.7292 168.751 18.6761V32H164.504Z"
        fill={fill}
      />
    </svg>
  );
}
