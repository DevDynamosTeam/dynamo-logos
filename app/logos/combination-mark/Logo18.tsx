import React from "react";

export default function Logo18({
  fill = "black",
  width = "245",
  height = "87",
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
        d="M0.0447845 42.7965C-0.608543 36.8765 6.04474 37.9699 10.3247 37.8232C19.3247 37.8232 31.4181 39.1699 39.2581 47.5699V36.3699C40.7247 8.7832 61.3781 -0.670132 84.9115 0.0365348C89.0181 0.249868 96.6447 -1.16347 95.7914 5.03653C95.7114 5.4632 93.258 16.3165 85.5647 26.1298C78.818 34.7565 66.7781 44.0232 47.1514 41.4498V82.9699C47.1381 88.1032 39.2981 88.1965 39.2581 82.9699C40.2447 58.5165 37.5914 45.5565 9.32474 45.7565C11.8581 52.0232 17.8713 62.6898 30.0714 64.8098C32.218 65.1832 33.6447 67.2232 33.2581 69.3831C32.9114 71.5432 30.8314 72.9565 28.7247 72.5832C6.01807 68.6498 0.28479 43.8765 0.0447845 42.7965Z"
        fill={fill}
      />
      <path
        d="M84.855 57.16C84.855 59.1033 84.3967 60.9367 83.48 62.66C82.5633 64.3833 81.0967 65.795 79.08 66.895C77.0633 67.9583 74.4783 68.49 71.325 68.49H64.395V84H58.125V45.775H71.325C74.2583 45.775 76.7333 46.2883 78.75 47.315C80.8033 48.305 82.325 49.6617 83.315 51.385C84.3417 53.1083 84.855 55.0333 84.855 57.16ZM71.325 63.375C73.7083 63.375 75.4867 62.8433 76.66 61.78C77.8333 60.68 78.42 59.14 78.42 57.16C78.42 52.98 76.055 50.89 71.325 50.89H64.395V63.375H71.325ZM97.105 58.095C98.0216 56.555 99.2316 55.3633 100.735 54.52C102.275 53.64 104.09 53.2 106.18 53.2V59.69H104.585C102.128 59.69 100.258 60.3133 98.975 61.56C97.7283 62.8067 97.105 64.97 97.105 68.05V84H90.835V53.695H97.105V58.095ZM125.088 84.495C122.228 84.495 119.643 83.8533 117.333 82.57C115.023 81.25 113.208 79.4167 111.888 77.07C110.568 74.6867 109.908 71.9367 109.908 68.82C109.908 65.74 110.587 63.0083 111.943 60.625C113.3 58.2417 115.152 56.4083 117.498 55.125C119.845 53.8417 122.467 53.2 125.363 53.2C128.26 53.2 130.882 53.8417 133.228 55.125C135.575 56.4083 137.427 58.2417 138.783 60.625C140.14 63.0083 140.818 65.74 140.818 68.82C140.818 71.9 140.122 74.6317 138.728 77.015C137.335 79.3983 135.428 81.25 133.008 82.57C130.625 83.8533 127.985 84.495 125.088 84.495ZM125.088 79.05C126.702 79.05 128.205 78.665 129.598 77.895C131.028 77.125 132.183 75.97 133.063 74.43C133.943 72.89 134.383 71.02 134.383 68.82C134.383 66.62 133.962 64.7683 133.118 63.265C132.275 61.725 131.157 60.57 129.763 59.8C128.37 59.03 126.867 58.645 125.253 58.645C123.64 58.645 122.137 59.03 120.743 59.8C119.387 60.57 118.305 61.725 117.498 63.265C116.692 64.7683 116.288 66.62 116.288 68.82C116.288 72.0833 117.113 74.6133 118.763 76.41C120.45 78.17 122.558 79.05 125.088 79.05ZM174.792 68.105C174.792 69.2417 174.718 70.2683 174.572 71.185H151.417C151.6 73.605 152.498 75.5483 154.112 77.015C155.725 78.4817 157.705 79.215 160.052 79.215C163.425 79.215 165.808 77.8033 167.202 74.98H173.967C173.05 77.7667 171.382 80.0583 168.962 81.855C166.578 83.615 163.608 84.495 160.052 84.495C157.155 84.495 154.552 83.8533 152.242 82.57C149.968 81.25 148.172 79.4167 146.852 77.07C145.568 74.6867 144.927 71.9367 144.927 68.82C144.927 65.7033 145.55 62.9717 146.797 60.625C148.08 58.2417 149.858 56.4083 152.132 55.125C154.442 53.8417 157.082 53.2 160.052 53.2C162.912 53.2 165.46 53.8233 167.697 55.07C169.933 56.3167 171.675 58.0767 172.922 60.35C174.168 62.5867 174.792 65.1717 174.792 68.105ZM168.247 66.125C168.21 63.815 167.385 61.9633 165.772 60.57C164.158 59.1767 162.16 58.48 159.777 58.48C157.613 58.48 155.762 59.1767 154.222 60.57C152.682 61.9267 151.765 63.7783 151.472 66.125H168.247ZM178.872 68.82C178.872 65.7033 179.495 62.9717 180.742 60.625C182.025 58.2417 183.785 56.4083 186.022 55.125C188.259 53.8417 190.825 53.2 193.722 53.2C197.389 53.2 200.414 54.08 202.797 55.84C205.217 57.5633 206.849 60.0383 207.692 63.265H200.927C200.377 61.7617 199.497 60.5883 198.287 59.745C197.077 58.9017 195.555 58.48 193.722 58.48C191.155 58.48 189.102 59.3967 187.562 61.23C186.059 63.0267 185.307 65.5567 185.307 68.82C185.307 72.0833 186.059 74.6317 187.562 76.465C189.102 78.2983 191.155 79.215 193.722 79.215C197.352 79.215 199.754 77.62 200.927 74.43H207.692C206.812 77.51 205.162 79.9667 202.742 81.8C200.322 83.5967 197.315 84.495 193.722 84.495C190.825 84.495 188.259 83.8533 186.022 82.57C183.785 81.25 182.025 79.4167 180.742 77.07C179.495 74.6867 178.872 71.9367 178.872 68.82ZM227.085 84.495C224.225 84.495 221.64 83.8533 219.33 82.57C217.02 81.25 215.205 79.4167 213.885 77.07C212.565 74.6867 211.905 71.9367 211.905 68.82C211.905 65.74 212.584 63.0083 213.94 60.625C215.297 58.2417 217.149 56.4083 219.495 55.125C221.842 53.8417 224.464 53.2 227.36 53.2C230.257 53.2 232.879 53.8417 235.225 55.125C237.572 56.4083 239.424 58.2417 240.78 60.625C242.137 63.0083 242.815 65.74 242.815 68.82C242.815 71.9 242.119 74.6317 240.725 77.015C239.332 79.3983 237.425 81.25 235.005 82.57C232.622 83.8533 229.982 84.495 227.085 84.495ZM227.085 79.05C228.699 79.05 230.202 78.665 231.595 77.895C233.025 77.125 234.18 75.97 235.06 74.43C235.94 72.89 236.38 71.02 236.38 68.82C236.38 66.62 235.959 64.7683 235.115 63.265C234.272 61.725 233.154 60.57 231.76 59.8C230.367 59.03 228.864 58.645 227.25 58.645C225.637 58.645 224.134 59.03 222.74 59.8C221.384 60.57 220.302 61.725 219.495 63.265C218.689 64.7683 218.285 66.62 218.285 68.82C218.285 72.0833 219.11 74.6133 220.76 76.41C222.447 78.17 224.555 79.05 227.085 79.05Z"
        fill={fill}
      />
    </svg>
  );
}
