import React from "react";

export default function Logo34({
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
      viewBox="0 0 346 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.2 16.575L28.5 21.875M28.5 21.875L33.8 16.575M28.5 21.875L28.5 7.3C28.5 4.37289 30.8729 2 33.8 2H49.7C52.627 2 55 4.37289 55 7.3V21.875M33.8 40.425L28.5 35.125M28.5 35.125L23.2 40.425M28.5 35.125V49.7C28.5 52.6271 26.1271 55 23.2 55H7.3C4.37289 55 2 52.6271 2 49.7V35.125M40.425 23.2L35.125 28.5M35.125 28.5L40.425 33.8M35.125 28.5L49.7 28.5C52.6271 28.5 55 30.8729 55 33.8V49.7C55 52.6271 52.6271 55 49.7 55H35.125M16.575 33.8L21.875 28.5M21.875 28.5L16.575 23.2M21.875 28.5L7.3 28.5C4.37289 28.5 2 26.1271 2 23.2V7.3C2 4.37289 4.37289 2 7.3 2H21.875"
        stroke={stroke}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M110.385 8.775V47H104.115V20.82L92.455 47H88.11L76.395 20.82V47H70.125V8.775H76.89L90.31 38.75L103.675 8.775H110.385ZM116.536 31.71C116.536 28.6667 117.159 25.9717 118.406 23.625C119.689 21.2783 121.413 19.4633 123.576 18.18C125.776 16.86 128.196 16.2 130.836 16.2C133.219 16.2 135.291 16.6767 137.051 17.63C138.848 18.5467 140.278 19.7017 141.341 21.095V16.695H147.666V47H141.341V42.49C140.278 43.92 138.829 45.1117 136.996 46.065C135.163 47.0183 133.073 47.495 130.726 47.495C128.123 47.495 125.739 46.835 123.576 45.515C121.413 44.1583 119.689 42.2883 118.406 39.905C117.159 37.485 116.536 34.7533 116.536 31.71ZM141.341 31.82C141.341 29.73 140.901 27.915 140.021 26.375C139.178 24.835 138.059 23.6617 136.666 22.855C135.273 22.0483 133.769 21.645 132.156 21.645C130.543 21.645 129.039 22.0483 127.646 22.855C126.253 23.625 125.116 24.78 124.236 26.32C123.393 27.8233 122.971 29.62 122.971 31.71C122.971 33.8 123.393 35.6333 124.236 37.21C125.116 38.7867 126.253 39.9967 127.646 40.84C129.076 41.6467 130.579 42.05 132.156 42.05C133.769 42.05 135.273 41.6467 136.666 40.84C138.059 40.0333 139.178 38.86 140.021 37.32C140.901 35.7433 141.341 33.91 141.341 31.82ZM159.091 12.68C157.955 12.68 157.001 12.295 156.231 11.525C155.461 10.755 155.076 9.80167 155.076 8.665C155.076 7.52833 155.461 6.575 156.231 5.805C157.001 5.035 157.955 4.65 159.091 4.65C160.191 4.65 161.126 5.035 161.896 5.805C162.666 6.575 163.051 7.52833 163.051 8.665C163.051 9.80167 162.666 10.755 161.896 11.525C161.126 12.295 160.191 12.68 159.091 12.68ZM162.171 16.695V47H155.901V16.695H162.171ZM185.693 16.2C188.077 16.2 190.203 16.695 192.073 17.685C193.98 18.675 195.465 20.1417 196.528 22.085C197.592 24.0283 198.123 26.375 198.123 29.125V47H191.908V30.06C191.908 27.3467 191.23 25.275 189.873 23.845C188.517 22.3783 186.665 21.645 184.318 21.645C181.972 21.645 180.102 22.3783 178.708 23.845C177.352 25.275 176.673 27.3467 176.673 30.06V47H170.403V16.695H176.673V20.16C177.7 18.9133 179.002 17.9417 180.578 17.245C182.192 16.5483 183.897 16.2 185.693 16.2ZM212.391 21.15C213.454 19.7567 214.903 18.5833 216.736 17.63C218.569 16.6767 220.641 16.2 222.951 16.2C225.591 16.2 227.993 16.86 230.156 18.18C232.356 19.4633 234.079 21.2783 235.326 23.625C236.573 25.9717 237.196 28.6667 237.196 31.71C237.196 34.7533 236.573 37.485 235.326 39.905C234.079 42.2883 232.356 44.1583 230.156 45.515C227.993 46.835 225.591 47.495 222.951 47.495C220.641 47.495 218.588 47.0367 216.791 46.12C214.994 45.1667 213.528 43.9933 212.391 42.6V61.41H206.121V16.695H212.391V21.15ZM230.816 31.71C230.816 29.62 230.376 27.8233 229.496 26.32C228.653 24.78 227.516 23.625 226.086 22.855C224.693 22.0483 223.189 21.645 221.576 21.645C219.999 21.645 218.496 22.0483 217.066 22.855C215.673 23.6617 214.536 24.835 213.656 26.375C212.813 27.915 212.391 29.73 212.391 31.82C212.391 33.91 212.813 35.7433 213.656 37.32C214.536 38.86 215.673 40.0333 217.066 40.84C218.496 41.6467 219.999 42.05 221.576 42.05C223.189 42.05 224.693 41.6467 226.086 40.84C227.516 39.9967 228.653 38.7867 229.496 37.21C230.376 35.6333 230.816 33.8 230.816 31.71ZM256.541 47.495C253.681 47.495 251.096 46.8533 248.786 45.57C246.476 44.25 244.661 42.4167 243.341 40.07C242.021 37.6867 241.361 34.9367 241.361 31.82C241.361 28.74 242.04 26.0083 243.396 23.625C244.753 21.2417 246.605 19.4083 248.951 18.125C251.298 16.8417 253.92 16.2 256.816 16.2C259.713 16.2 262.335 16.8417 264.681 18.125C267.028 19.4083 268.88 21.2417 270.236 23.625C271.593 26.0083 272.271 28.74 272.271 31.82C272.271 34.9 271.575 37.6317 270.181 40.015C268.788 42.3983 266.881 44.25 264.461 45.57C262.078 46.8533 259.438 47.495 256.541 47.495ZM256.541 42.05C258.155 42.05 259.658 41.665 261.051 40.895C262.481 40.125 263.636 38.97 264.516 37.43C265.396 35.89 265.836 34.02 265.836 31.82C265.836 29.62 265.415 27.7683 264.571 26.265C263.728 24.725 262.61 23.57 261.216 22.8C259.823 22.03 258.32 21.645 256.706 21.645C255.093 21.645 253.59 22.03 252.196 22.8C250.84 23.57 249.758 24.725 248.951 26.265C248.145 27.7683 247.741 29.62 247.741 31.82C247.741 35.0833 248.566 37.6133 250.216 39.41C251.903 41.17 254.011 42.05 256.541 42.05ZM281.66 12.68C280.523 12.68 279.57 12.295 278.8 11.525C278.03 10.755 277.645 9.80167 277.645 8.665C277.645 7.52833 278.03 6.575 278.8 5.805C279.57 5.035 280.523 4.65 281.66 4.65C282.76 4.65 283.695 5.035 284.465 5.805C285.235 6.575 285.62 7.52833 285.62 8.665C285.62 9.80167 285.235 10.755 284.465 11.525C283.695 12.295 282.76 12.68 281.66 12.68ZM284.74 16.695V47H278.47V16.695H284.74ZM308.262 16.2C310.645 16.2 312.772 16.695 314.642 17.685C316.548 18.675 318.033 20.1417 319.097 22.085C320.16 24.0283 320.692 26.375 320.692 29.125V47H314.477V30.06C314.477 27.3467 313.798 25.275 312.442 23.845C311.085 22.3783 309.233 21.645 306.887 21.645C304.54 21.645 302.67 22.3783 301.277 23.845C299.92 25.275 299.242 27.3467 299.242 30.06V47H292.972V16.695H299.242V20.16C300.268 18.9133 301.57 17.9417 303.147 17.245C304.76 16.5483 306.465 16.2 308.262 16.2ZM336.004 21.81V38.585C336.004 39.7217 336.261 40.5467 336.774 41.06C337.324 41.5367 338.241 41.775 339.524 41.775H343.374V47H338.424C335.601 47 333.438 46.34 331.934 45.02C330.431 43.7 329.679 41.555 329.679 38.585V21.81H326.104V16.695H329.679V9.16H336.004V16.695H343.374V21.81H336.004Z"
        fill={fill}
      />
    </svg>
  );
}
