import React from "react";

export default function Logo11({
  fill = "black",
  width = "100",
  height = "50",
  className,
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
      viewBox="0 0 297 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2652 16.0572C15.3437 6.8665 23.6125 0 33.5 0C43.3875 0 51.6563 6.86651 53.7348 16.0573C61.2662 17.3259 67 23.8308 67 31.6667C67 36.7178 66.0583 41.8086 61.5064 44.8328C60.7743 45.3192 59.7835 45.1245 59.2934 44.3978C58.8033 43.6711 58.9995 42.6877 59.7317 42.2013C62.8751 40.1129 63.8095 36.4968 63.8095 31.6667C63.8095 25.0708 58.729 19.651 52.2413 19.0546C51.5185 18.9881 50.9321 18.4458 50.8143 17.7348C49.4456 9.4712 42.213 3.16667 33.5 3.16667C24.787 3.16667 17.5544 9.4712 16.1857 17.7348C16.0679 18.4458 15.4815 18.9881 14.7587 19.0546C8.27098 19.651 3.19048 25.0708 3.19048 31.6667C3.19048 36.0569 5.43939 39.9263 8.86356 42.2013C9.5957 42.6877 9.79193 43.6711 9.30185 44.3978C8.81177 45.1245 7.82096 45.3192 7.08882 44.8328C2.81765 41.9951 0 37.1578 0 31.6667C0 23.8308 5.73383 17.3259 13.2652 16.0572ZM30.7881 28.5C31.4725 28.5 32.0807 28.9334 32.2996 29.577L39.4024 50.4653L42.198 42.2437C42.4169 41.6 43.0251 41.1667 43.7095 41.1667H49.4524C50.3334 41.1667 51.0476 41.8755 51.0476 42.75C51.0476 43.6245 50.3334 44.3333 49.4524 44.3333H44.8548L40.9139 55.923C40.695 56.5666 40.0868 57 39.4024 57C38.7179 57 38.1098 56.5666 37.8909 55.923L30.7881 35.0347L27.9924 43.2563C27.7736 43.9 27.1654 44.3333 26.481 44.3333H20.7381C19.8571 44.3333 19.1429 43.6245 19.1429 42.75C19.1429 41.8755 19.8571 41.1667 20.7381 41.1667H25.3357L29.2766 29.577C29.4955 28.9334 30.1037 28.5 30.7881 28.5Z"
        fill={fill}
      />
      <path
        d="M97.56 47.385C94.0033 47.385 90.7217 46.56 87.715 44.91C84.745 43.2233 82.38 40.895 80.62 37.925C78.8967 34.9183 78.035 31.545 78.035 27.805C78.035 24.065 78.8967 20.71 80.62 17.74C82.38 14.77 84.745 12.46 87.715 10.81C90.7217 9.12333 94.0033 8.28 97.56 8.28C101.153 8.28 104.435 9.12333 107.405 10.81C110.412 12.46 112.777 14.77 114.5 17.74C116.223 20.71 117.085 24.065 117.085 27.805C117.085 31.545 116.223 34.9183 114.5 37.925C112.777 40.895 110.412 43.2233 107.405 44.91C104.435 46.56 101.153 47.385 97.56 47.385ZM97.56 41.94C100.09 41.94 102.345 41.3717 104.325 40.235C106.305 39.0617 107.845 37.4117 108.945 35.285C110.082 33.1217 110.65 30.6283 110.65 27.805C110.65 24.9817 110.082 22.5067 108.945 20.38C107.845 18.2533 106.305 16.6217 104.325 15.485C102.345 14.3483 100.09 13.78 97.56 13.78C95.03 13.78 92.775 14.3483 90.795 15.485C88.815 16.6217 87.2567 18.2533 86.12 20.38C85.02 22.5067 84.47 24.9817 84.47 27.805C84.47 30.6283 85.02 33.1217 86.12 35.285C87.2567 37.4117 88.815 39.0617 90.795 40.235C92.775 41.3717 95.03 41.94 97.56 41.94ZM138.93 16.2C141.24 16.2 143.293 16.695 145.09 17.685C146.923 18.675 148.353 20.1417 149.38 22.085C150.443 24.0283 150.975 26.375 150.975 29.125V47H144.76V30.06C144.76 27.3467 144.082 25.275 142.725 23.845C141.368 22.3783 139.517 21.645 137.17 21.645C134.823 21.645 132.953 22.3783 131.56 23.845C130.203 25.275 129.525 27.3467 129.525 30.06V47H123.255V6.3H129.525V20.215C130.588 18.9317 131.927 17.9417 133.54 17.245C135.19 16.5483 136.987 16.2 138.93 16.2ZM186.748 31.105C186.748 32.2417 186.674 33.2683 186.528 34.185H163.373C163.556 36.605 164.454 38.5483 166.068 40.015C167.681 41.4817 169.661 42.215 172.008 42.215C175.381 42.215 177.764 40.8033 179.158 37.98H185.923C185.006 40.7667 183.338 43.0583 180.918 44.855C178.534 46.615 175.564 47.495 172.008 47.495C169.111 47.495 166.508 46.8533 164.198 45.57C161.924 44.25 160.128 42.4167 158.808 40.07C157.524 37.6867 156.883 34.9367 156.883 31.82C156.883 28.7033 157.506 25.9717 158.753 23.625C160.036 21.2417 161.814 19.4083 164.088 18.125C166.398 16.8417 169.038 16.2 172.008 16.2C174.868 16.2 177.416 16.8233 179.653 18.07C181.889 19.3167 183.631 21.0767 184.878 23.35C186.124 25.5867 186.748 28.1717 186.748 31.105ZM180.203 29.125C180.166 26.815 179.341 24.9633 177.728 23.57C176.114 22.1767 174.116 21.48 171.733 21.48C169.569 21.48 167.718 22.1767 166.178 23.57C164.638 24.9267 163.721 26.7783 163.428 29.125H180.203ZM190.828 31.71C190.828 28.6667 191.451 25.9717 192.698 23.625C193.981 21.2783 195.705 19.4633 197.868 18.18C200.068 16.86 202.488 16.2 205.128 16.2C207.511 16.2 209.583 16.6767 211.343 17.63C213.14 18.5467 214.57 19.7017 215.633 21.095V16.695H221.958V47H215.633V42.49C214.57 43.92 213.121 45.1117 211.288 46.065C209.455 47.0183 207.365 47.495 205.018 47.495C202.415 47.495 200.031 46.835 197.868 45.515C195.705 44.1583 193.981 42.2883 192.698 39.905C191.451 37.485 190.828 34.7533 190.828 31.71ZM215.633 31.82C215.633 29.73 215.193 27.915 214.313 26.375C213.47 24.835 212.351 23.6617 210.958 22.855C209.565 22.0483 208.061 21.645 206.448 21.645C204.835 21.645 203.331 22.0483 201.938 22.855C200.545 23.625 199.408 24.78 198.528 26.32C197.685 27.8233 197.263 29.62 197.263 31.71C197.263 33.8 197.685 35.6333 198.528 37.21C199.408 38.7867 200.545 39.9967 201.938 40.84C203.368 41.6467 204.871 42.05 206.448 42.05C208.061 42.05 209.565 41.6467 210.958 40.84C212.351 40.0333 213.47 38.86 214.313 37.32C215.193 35.7433 215.633 33.91 215.633 31.82ZM236.463 6.3V47H230.193V6.3H236.463ZM252.01 21.81V38.585C252.01 39.7217 252.267 40.5467 252.78 41.06C253.33 41.5367 254.247 41.775 255.53 41.775H259.38V47H254.43C251.607 47 249.444 46.34 247.94 45.02C246.437 43.7 245.685 41.555 245.685 38.585V21.81H242.11V16.695H245.685V9.16H252.01V16.695H259.38V21.81H252.01ZM280.834 16.2C283.144 16.2 285.198 16.695 286.994 17.685C288.828 18.675 290.258 20.1417 291.284 22.085C292.348 24.0283 292.879 26.375 292.879 29.125V47H286.664V30.06C286.664 27.3467 285.986 25.275 284.629 23.845C283.273 22.3783 281.421 21.645 279.074 21.645C276.728 21.645 274.858 22.3783 273.464 23.845C272.108 25.275 271.429 27.3467 271.429 30.06V47H265.159V6.3H271.429V20.215C272.493 18.9317 273.831 17.9417 275.444 17.245C277.094 16.5483 278.891 16.2 280.834 16.2Z"
        fill={fill}
      />
    </svg>
  );
}
