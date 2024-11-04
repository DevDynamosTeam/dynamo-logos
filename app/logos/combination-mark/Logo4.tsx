import React from "react";

export default function Logo4({
  fill = "black",
  stroke = "black",
  width = "288",
  height = "116",
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
      viewBox='0 0 288 116'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.4998 82.1666H33.8332C20.4863 82.1666 9.6665 71.3468 9.6665 57.9999C9.6665 44.653 20.4863 33.8333 33.8332 33.8333H43.4998M38.6665 57.9999L86.9998 57.9999M76.2591 82.1666H82.1665C95.5134 82.1666 106.333 71.3468 106.333 57.9999C106.333 44.653 95.5134 33.8333 82.1665 33.8333H76.2591C74.1829 33.8333 72.4998 35.5163 72.4998 37.5925V78.4073C72.4998 80.4835 74.1829 82.1666 76.2591 82.1666Z"
        stroke={stroke}
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M124.035 57.805C124.035 54.065 124.897 50.71 126.62 47.74C128.38 44.77 130.745 42.46 133.715 40.81C136.722 39.1233 140.003 38.28 143.56 38.28C147.63 38.28 151.242 39.2883 154.395 41.305C157.585 43.285 159.895 46.1083 161.325 49.775H153.79C152.8 47.7583 151.425 46.255 149.665 45.265C147.905 44.275 145.87 43.78 143.56 43.78C141.03 43.78 138.775 44.3483 136.795 45.485C134.815 46.6217 133.257 48.2533 132.12 50.38C131.02 52.5067 130.47 54.9817 130.47 57.805C130.47 60.6283 131.02 63.1033 132.12 65.23C133.257 67.3567 134.815 69.0067 136.795 70.18C138.775 71.3167 141.03 71.885 143.56 71.885C145.87 71.885 147.905 71.39 149.665 70.4C151.425 69.41 152.8 67.9067 153.79 65.89H161.325C159.895 69.5567 157.585 72.38 154.395 74.36C151.242 76.34 147.63 77.33 143.56 77.33C139.967 77.33 136.685 76.505 133.715 74.855C130.745 73.1683 128.38 70.84 126.62 67.87C124.897 64.9 124.035 61.545 124.035 57.805ZM184.339 46.2C186.649 46.2 188.702 46.695 190.499 47.685C192.332 48.675 193.762 50.1417 194.789 52.085C195.852 54.0283 196.384 56.375 196.384 59.125V77H190.169V60.06C190.169 57.3467 189.491 55.275 188.134 53.845C186.777 52.3783 184.926 51.645 182.579 51.645C180.232 51.645 178.362 52.3783 176.969 53.845C175.612 55.275 174.934 57.3467 174.934 60.06V77H168.664V36.3H174.934V50.215C175.997 48.9317 177.336 47.9417 178.949 47.245C180.599 46.5483 182.396 46.2 184.339 46.2ZM202.292 61.71C202.292 58.6667 202.915 55.9717 204.162 53.625C205.445 51.2783 207.169 49.4633 209.332 48.18C211.532 46.86 213.952 46.2 216.592 46.2C218.975 46.2 221.047 46.6767 222.807 47.63C224.604 48.5467 226.034 49.7017 227.097 51.095V46.695H233.422V77H227.097V72.49C226.034 73.92 224.585 75.1117 222.752 76.065C220.919 77.0183 218.829 77.495 216.482 77.495C213.879 77.495 211.495 76.835 209.332 75.515C207.169 74.1583 205.445 72.2883 204.162 69.905C202.915 67.485 202.292 64.7533 202.292 61.71ZM227.097 61.82C227.097 59.73 226.657 57.915 225.777 56.375C224.934 54.835 223.815 53.6617 222.422 52.855C221.029 52.0483 219.525 51.645 217.912 51.645C216.299 51.645 214.795 52.0483 213.402 52.855C212.009 53.625 210.872 54.78 209.992 56.32C209.149 57.8233 208.727 59.62 208.727 61.71C208.727 63.8 209.149 65.6333 209.992 67.21C210.872 68.7867 212.009 69.9967 213.402 70.84C214.832 71.6467 216.335 72.05 217.912 72.05C219.525 72.05 221.029 71.6467 222.422 70.84C223.815 70.0333 224.934 68.86 225.777 67.32C226.657 65.7433 227.097 63.91 227.097 61.82ZM244.847 42.68C243.711 42.68 242.757 42.295 241.987 41.525C241.217 40.755 240.832 39.8017 240.832 38.665C240.832 37.5283 241.217 36.575 241.987 35.805C242.757 35.035 243.711 34.65 244.847 34.65C245.947 34.65 246.882 35.035 247.652 35.805C248.422 36.575 248.807 37.5283 248.807 38.665C248.807 39.8017 248.422 40.755 247.652 41.525C246.882 42.295 245.947 42.68 244.847 42.68ZM247.927 46.695V77H241.657V46.695H247.927ZM271.449 46.2C273.833 46.2 275.959 46.695 277.829 47.685C279.736 48.675 281.221 50.1417 282.284 52.085C283.348 54.0283 283.879 56.375 283.879 59.125V77H277.664V60.06C277.664 57.3467 276.986 55.275 275.629 53.845C274.273 52.3783 272.421 51.645 270.074 51.645C267.728 51.645 265.858 52.3783 264.464 53.845C263.108 55.275 262.429 57.3467 262.429 60.06V77H256.159V46.695H262.429V50.16C263.456 48.9133 264.758 47.9417 266.334 47.245C267.948 46.5483 269.653 46.2 271.449 46.2Z"
        fill={fill}
      />
    </svg>
  );
}
