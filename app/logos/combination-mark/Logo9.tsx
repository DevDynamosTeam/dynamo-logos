import React from "react";

export default function Logo9({
  fill = "black",
  stroke = "black",
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
      viewBox="0 0 299 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.25 2C24.9454 2 2 24.9454 2 53.25H14.8125M53.25 2C81.5546 2 104.5 24.9454 104.5 53.25H91.6875M53.25 2V14.8125M16.9734 17.375L25.8727 26.2743M91.6875 19.3504L78.75 26.2743"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.7498 59.5833H29.9165M36.9165 46.75H26.4165M42.7498 33.9167H31.0832M61.4165 25.75L46.0248 47.2984C45.3436 48.2521 45.0029 48.729 45.0177 49.1266C45.0305 49.4727 45.1965 49.7953 45.4707 50.0069C45.7857 50.25 46.3717 50.25 47.5438 50.25H59.0832L56.7498 67.75L72.1415 46.2016C72.8228 45.2479 73.1634 44.771 73.1486 44.3734C73.1358 44.0273 72.9698 43.7047 72.6956 43.4931C72.3806 43.25 71.7946 43.25 70.6225 43.25H59.0832L61.4165 25.75Z"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M139.72 56.385C137.153 56.385 134.843 55.945 132.79 55.065C130.737 54.1483 129.123 52.865 127.95 51.215C126.777 49.565 126.19 47.64 126.19 45.44H132.9C133.047 47.09 133.688 48.4467 134.825 49.51C135.998 50.5733 137.63 51.105 139.72 51.105C141.883 51.105 143.57 50.5917 144.78 49.565C145.99 48.5017 146.595 47.145 146.595 45.495C146.595 44.2117 146.21 43.1667 145.44 42.36C144.707 41.5533 143.772 40.93 142.635 40.49C141.535 40.05 139.995 39.5733 138.015 39.06C135.522 38.4 133.487 37.74 131.91 37.08C130.37 36.3833 129.05 35.32 127.95 33.89C126.85 32.46 126.3 30.5533 126.3 28.17C126.3 25.97 126.85 24.045 127.95 22.395C129.05 20.745 130.59 19.48 132.57 18.6C134.55 17.72 136.842 17.28 139.445 17.28C143.148 17.28 146.173 18.215 148.52 20.085C150.903 21.9183 152.223 24.4483 152.48 27.675H145.55C145.44 26.2817 144.78 25.09 143.57 24.1C142.36 23.11 140.765 22.615 138.785 22.615C136.988 22.615 135.522 23.0733 134.385 23.99C133.248 24.9067 132.68 26.2267 132.68 27.95C132.68 29.1233 133.028 30.095 133.725 30.865C134.458 31.5983 135.375 32.185 136.475 32.625C137.575 33.065 139.078 33.5417 140.985 34.055C143.515 34.7517 145.568 35.4483 147.145 36.145C148.758 36.8417 150.115 37.9233 151.215 39.39C152.352 40.82 152.92 42.745 152.92 45.165C152.92 47.1083 152.388 48.9417 151.325 50.665C150.298 52.3883 148.777 53.7817 146.76 54.845C144.78 55.8717 142.433 56.385 139.72 56.385ZM166.588 30.15C167.652 28.7567 169.1 27.5833 170.933 26.63C172.767 25.6767 174.838 25.2 177.148 25.2C179.788 25.2 182.19 25.86 184.353 27.18C186.553 28.4633 188.277 30.2783 189.523 32.625C190.77 34.9717 191.393 37.6667 191.393 40.71C191.393 43.7533 190.77 46.485 189.523 48.905C188.277 51.2883 186.553 53.1583 184.353 54.515C182.19 55.835 179.788 56.495 177.148 56.495C174.838 56.495 172.785 56.0367 170.988 55.12C169.192 54.1667 167.725 52.9933 166.588 51.6V70.41H160.318V25.695H166.588V30.15ZM185.013 40.71C185.013 38.62 184.573 36.8233 183.693 35.32C182.85 33.78 181.713 32.625 180.283 31.855C178.89 31.0483 177.387 30.645 175.773 30.645C174.197 30.645 172.693 31.0483 171.263 31.855C169.87 32.6617 168.733 33.835 167.853 35.375C167.01 36.915 166.588 38.73 166.588 40.82C166.588 42.91 167.01 44.7433 167.853 46.32C168.733 47.86 169.87 49.0333 171.263 49.84C172.693 50.6467 174.197 51.05 175.773 51.05C177.387 51.05 178.89 50.6467 180.283 49.84C181.713 48.9967 182.85 47.7867 183.693 46.21C184.573 44.6333 185.013 42.8 185.013 40.71ZM225.369 40.105C225.369 41.2417 225.295 42.2683 225.149 43.185H201.994C202.177 45.605 203.075 47.5483 204.689 49.015C206.302 50.4817 208.282 51.215 210.629 51.215C214.002 51.215 216.385 49.8033 217.779 46.98H224.544C223.627 49.7667 221.959 52.0583 219.539 53.855C217.155 55.615 214.185 56.495 210.629 56.495C207.732 56.495 205.129 55.8533 202.819 54.57C200.545 53.25 198.749 51.4167 197.429 49.07C196.145 46.6867 195.504 43.9367 195.504 40.82C195.504 37.7033 196.127 34.9717 197.374 32.625C198.657 30.2417 200.435 28.4083 202.709 27.125C205.019 25.8417 207.659 25.2 210.629 25.2C213.489 25.2 216.037 25.8233 218.274 27.07C220.51 28.3167 222.252 30.0767 223.499 32.35C224.745 34.5867 225.369 37.1717 225.369 40.105ZM218.824 38.125C218.787 35.815 217.962 33.9633 216.349 32.57C214.735 31.1767 212.737 30.48 210.354 30.48C208.19 30.48 206.339 31.1767 204.799 32.57C203.259 33.9267 202.342 35.7783 202.049 38.125H218.824ZM259.314 40.105C259.314 41.2417 259.241 42.2683 259.094 43.185H235.939C236.122 45.605 237.021 47.5483 238.634 49.015C240.247 50.4817 242.227 51.215 244.574 51.215C247.947 51.215 250.331 49.8033 251.724 46.98H258.489C257.572 49.7667 255.904 52.0583 253.484 53.855C251.101 55.615 248.131 56.495 244.574 56.495C241.677 56.495 239.074 55.8533 236.764 54.57C234.491 53.25 232.694 51.4167 231.374 49.07C230.091 46.6867 229.449 43.9367 229.449 40.82C229.449 37.7033 230.072 34.9717 231.319 32.625C232.602 30.2417 234.381 28.4083 236.654 27.125C238.964 25.8417 241.604 25.2 244.574 25.2C247.434 25.2 249.982 25.8233 252.219 27.07C254.456 28.3167 256.197 30.0767 257.444 32.35C258.691 34.5867 259.314 37.1717 259.314 40.105ZM252.769 38.125C252.732 35.815 251.907 33.9633 250.294 32.57C248.681 31.1767 246.682 30.48 244.299 30.48C242.136 30.48 240.284 31.1767 238.744 32.57C237.204 33.9267 236.287 35.7783 235.994 38.125H252.769ZM263.394 40.71C263.394 37.6667 264.018 34.9717 265.264 32.625C266.548 30.2783 268.271 28.4633 270.434 27.18C272.634 25.86 275.073 25.2 277.749 25.2C279.729 25.2 281.673 25.64 283.579 26.52C285.523 27.3633 287.063 28.5 288.199 29.93V15.3H294.524V56H288.199V51.435C287.173 52.9017 285.743 54.1117 283.909 55.065C282.113 56.0183 280.041 56.495 277.694 56.495C275.054 56.495 272.634 55.835 270.434 54.515C268.271 53.1583 266.548 51.2883 265.264 48.905C264.018 46.485 263.394 43.7533 263.394 40.71ZM288.199 40.82C288.199 38.73 287.759 36.915 286.879 35.375C286.036 33.835 284.918 32.6617 283.524 31.855C282.131 31.0483 280.628 30.645 279.014 30.645C277.401 30.645 275.898 31.0483 274.504 31.855C273.111 32.625 271.974 33.78 271.094 35.32C270.251 36.8233 269.829 38.62 269.829 40.71C269.829 42.8 270.251 44.6333 271.094 46.21C271.974 47.7867 273.111 48.9967 274.504 49.84C275.934 50.6467 277.438 51.05 279.014 51.05C280.628 51.05 282.131 50.6467 283.524 49.84C284.918 49.0333 286.036 47.86 286.879 46.32C287.759 44.7433 288.199 42.91 288.199 40.82Z"
        fill={fill}
      />
    </svg>
  );
}
