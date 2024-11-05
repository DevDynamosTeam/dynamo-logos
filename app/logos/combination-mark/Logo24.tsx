import React from "react";

export default function Logo24({
  fill = "black",
  width = "100",
  height = "50",
  stroke = "black",
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
      viewBox="0 0 229 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.8 20.8H68.28C73.9925 20.8 76.8488 20.8 79.0307 21.77C80.95 22.6233 82.5104 23.9848 83.4883 25.6595C84.6 27.5633 84.6 30.0555 84.6 35.04V56.4M3 20.8H23.4M84.6 74.2V92M105 74.2L39.72 74.2C34.0075 74.2 31.1512 74.2 28.9693 73.23C27.05 72.3767 25.4896 71.0152 24.5117 69.3405C23.4 67.4367 23.4 64.9445 23.4 59.96V3"
        stroke={stroke}
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M62.1665 57.625H63.3453C64.4783 57.625 65.0448 57.625 65.3571 57.3972C65.6291 57.1987 65.7975 56.8954 65.8178 56.5671C65.8412 56.1901 65.5269 55.7356 64.8984 54.8265L61.3863 49.7465C60.867 48.9954 60.6074 48.6198 60.2801 48.4889C59.994 48.3745 59.6724 48.3745 59.3863 48.4889C59.059 48.6198 58.7993 48.9954 58.28 49.7465L57.4118 51.0024M62.1665 57.625L53.2013 45.1377C52.6857 44.4195 52.4279 44.0605 52.1058 43.9342C51.8241 43.8238 51.5089 43.8238 51.2272 43.9342C50.9051 44.0605 50.6473 44.4195 50.1317 45.1377L43.1944 54.8004C42.5375 55.7153 42.2091 56.1728 42.2278 56.5533C42.2441 56.8846 42.4112 57.1921 42.6844 57.3936C42.9982 57.625 43.5752 57.625 44.7292 57.625H62.1665ZM64.4998 40.75C64.4998 42.614 62.9328 44.125 60.9998 44.125C59.0668 44.125 57.4998 42.614 57.4998 40.75C57.4998 38.886 59.0668 37.375 60.9998 37.375C62.9328 37.375 64.4998 38.886 64.4998 40.75Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M106.85 47.55C106.85 44.15 107.633 41.1 109.2 38.4C110.8 35.7 112.95 33.6 115.65 32.1C118.383 30.5667 121.367 29.8 124.6 29.8C128.3 29.8 131.583 30.7167 134.45 32.55C137.35 34.35 139.45 36.9167 140.75 40.25H133.9C133 38.4167 131.75 37.05 130.15 36.15C128.55 35.25 126.7 34.8 124.6 34.8C122.3 34.8 120.25 35.3167 118.45 36.35C116.65 37.3833 115.233 38.8667 114.2 40.8C113.2 42.7333 112.7 44.9833 112.7 47.55C112.7 50.1167 113.2 52.3667 114.2 54.3C115.233 56.2333 116.65 57.7333 118.45 58.8C120.25 59.8333 122.3 60.35 124.6 60.35C126.7 60.35 128.55 59.9 130.15 59C131.75 58.1 133 56.7333 133.9 54.9H140.75C139.45 58.2333 137.35 60.8 134.45 62.6C131.583 64.4 128.3 65.3 124.6 65.3C121.333 65.3 118.35 64.55 115.65 63.05C112.95 61.5167 110.8 59.4 109.2 56.7C107.633 54 106.85 50.95 106.85 47.55ZM153.122 41.45C153.955 40.05 155.055 38.9667 156.422 38.2C157.822 37.4 159.472 37 161.372 37V42.9H159.922C157.689 42.9 155.989 43.4667 154.822 44.6C153.689 45.7333 153.122 47.7 153.122 50.5V65H147.422V37.45H153.122V41.45ZM178.561 65.45C175.961 65.45 173.611 64.8667 171.511 63.7C169.411 62.5 167.761 60.8333 166.561 58.7C165.361 56.5333 164.761 54.0333 164.761 51.2C164.761 48.4 165.378 45.9167 166.611 43.75C167.845 41.5833 169.528 39.9167 171.661 38.75C173.795 37.5833 176.178 37 178.811 37C181.445 37 183.828 37.5833 185.961 38.75C188.095 39.9167 189.778 41.5833 191.011 43.75C192.245 45.9167 192.861 48.4 192.861 51.2C192.861 54 192.228 56.4833 190.961 58.65C189.695 60.8167 187.961 62.5 185.761 63.7C183.595 64.8667 181.195 65.45 178.561 65.45ZM178.561 60.5C180.028 60.5 181.395 60.15 182.661 59.45C183.961 58.75 185.011 57.7 185.811 56.3C186.611 54.9 187.011 53.2 187.011 51.2C187.011 49.2 186.628 47.5167 185.861 46.15C185.095 44.75 184.078 43.7 182.811 43C181.545 42.3 180.178 41.95 178.711 41.95C177.245 41.95 175.878 42.3 174.611 43C173.378 43.7 172.395 44.75 171.661 46.15C170.928 47.5167 170.561 49.2 170.561 51.2C170.561 54.1667 171.311 56.4667 172.811 58.1C174.345 59.7 176.261 60.5 178.561 60.5ZM204.196 41.5C205.163 40.2333 206.479 39.1667 208.146 38.3C209.813 37.4333 211.696 37 213.796 37C216.196 37 218.379 37.6 220.346 38.8C222.346 39.9667 223.913 41.6167 225.046 43.75C226.179 45.8833 226.746 48.3333 226.746 51.1C226.746 53.8667 226.179 56.35 225.046 58.55C223.913 60.7167 222.346 62.4167 220.346 63.65C218.379 64.85 216.196 65.45 213.796 65.45C211.696 65.45 209.829 65.0333 208.196 64.2C206.563 63.3333 205.229 62.2667 204.196 61V78.1H198.496V37.45H204.196V41.5ZM220.946 51.1C220.946 49.2 220.546 47.5667 219.746 46.2C218.979 44.8 217.946 43.75 216.646 43.05C215.379 42.3167 214.013 41.95 212.546 41.95C211.113 41.95 209.746 42.3167 208.446 43.05C207.179 43.7833 206.146 44.85 205.346 46.25C204.579 47.65 204.196 49.3 204.196 51.2C204.196 53.1 204.579 54.7667 205.346 56.2C206.146 57.6 207.179 58.6667 208.446 59.4C209.746 60.1333 211.113 60.5 212.546 60.5C214.013 60.5 215.379 60.1333 216.646 59.4C217.946 58.6333 218.979 57.5333 219.746 56.1C220.546 54.6667 220.946 53 220.946 51.1Z"
        fill={fill}
      />
    </svg>
  );
}
