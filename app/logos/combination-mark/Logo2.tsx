import React from "react";

export default function Logo2({
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
      viewBox="0 0 282 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_209_3)">
        <path
          d="M37.3337 2.66675V29.3334M37.3337 56.0001V29.3334M56.1898 10.4772L18.4775 48.1896M37.3337 29.3334L10.667 29.3334M56.1898 48.1896L18.4775 10.4772"
          stroke={stroke}
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        d="M91.17 39.19H75.165L72.415 47H65.87L79.565 8.72H86.825L100.52 47H93.92L91.17 39.19ZM89.41 34.075L83.195 16.31L76.925 34.075H89.41ZM117.475 47.495C115.091 47.495 112.946 47.0733 111.04 46.23C109.17 45.35 107.685 44.1767 106.585 42.71C105.485 41.2067 104.898 39.5383 104.825 37.705H111.315C111.425 38.9883 112.03 40.07 113.13 40.95C114.266 41.7933 115.678 42.215 117.365 42.215C119.125 42.215 120.481 41.885 121.435 41.225C122.425 40.5283 122.92 39.6483 122.92 38.585C122.92 37.4483 122.37 36.605 121.27 36.055C120.206 35.505 118.501 34.9 116.155 34.24C113.881 33.6167 112.03 33.0117 110.6 32.425C109.17 31.8383 107.923 30.94 106.86 29.73C105.833 28.52 105.32 26.925 105.32 24.945C105.32 23.3317 105.796 21.865 106.75 20.545C107.703 19.1883 109.06 18.125 110.82 17.355C112.616 16.585 114.67 16.2 116.98 16.2C120.426 16.2 123.195 17.08 125.285 18.84C127.411 20.5633 128.548 22.9283 128.695 25.935H122.425C122.315 24.5783 121.765 23.4967 120.775 22.69C119.785 21.8833 118.446 21.48 116.76 21.48C115.11 21.48 113.845 21.7917 112.965 22.415C112.085 23.0383 111.645 23.8633 111.645 24.89C111.645 25.6967 111.938 26.375 112.525 26.925C113.111 27.475 113.826 27.915 114.67 28.245C115.513 28.5383 116.76 28.9233 118.41 29.4C120.61 29.9867 122.406 30.5917 123.8 31.215C125.23 31.8017 126.458 32.6817 127.485 33.855C128.511 35.0283 129.043 36.5867 129.08 38.53C129.08 40.2533 128.603 41.7933 127.65 43.15C126.696 44.5067 125.34 45.57 123.58 46.34C121.856 47.11 119.821 47.495 117.475 47.495ZM143.169 21.81V38.585C143.169 39.7217 143.426 40.5467 143.939 41.06C144.489 41.5367 145.406 41.775 146.689 41.775H150.539V47H145.589C142.766 47 140.603 46.34 139.099 45.02C137.596 43.7 136.844 41.555 136.844 38.585V21.81H133.269V16.695H136.844V9.16H143.169V16.695H150.539V21.81H143.169ZM184.093 31.105C184.093 32.2417 184.02 33.2683 183.873 34.185H160.718C160.902 36.605 161.8 38.5483 163.413 40.015C165.027 41.4817 167.007 42.215 169.353 42.215C172.727 42.215 175.11 40.8033 176.503 37.98H183.268C182.352 40.7667 180.683 43.0583 178.263 44.855C175.88 46.615 172.91 47.495 169.353 47.495C166.457 47.495 163.853 46.8533 161.543 45.57C159.27 44.25 157.473 42.4167 156.153 40.07C154.87 37.6867 154.228 34.9367 154.228 31.82C154.228 28.7033 154.852 25.9717 156.098 23.625C157.382 21.2417 159.16 19.4083 161.433 18.125C163.743 16.8417 166.383 16.2 169.353 16.2C172.213 16.2 174.762 16.8233 176.998 18.07C179.235 19.3167 180.977 21.0767 182.223 23.35C183.47 25.5867 184.093 28.1717 184.093 31.105ZM177.548 29.125C177.512 26.815 176.687 24.9633 175.073 23.57C173.46 22.1767 171.462 21.48 169.078 21.48C166.915 21.48 165.063 22.1767 163.523 23.57C161.983 24.9267 161.067 26.7783 160.773 29.125H177.548ZM196.534 21.095C197.45 19.555 198.66 18.3633 200.164 17.52C201.704 16.64 203.519 16.2 205.609 16.2V22.69H204.014C201.557 22.69 199.687 23.3133 198.404 24.56C197.157 25.8067 196.534 27.97 196.534 31.05V47H190.264V16.695H196.534V21.095ZM214.562 12.68C213.425 12.68 212.472 12.295 211.702 11.525C210.932 10.755 210.547 9.80167 210.547 8.665C210.547 7.52833 210.932 6.575 211.702 5.805C212.472 5.035 213.425 4.65 214.562 4.65C215.662 4.65 216.597 5.035 217.367 5.805C218.137 6.575 218.522 7.52833 218.522 8.665C218.522 9.80167 218.137 10.755 217.367 11.525C216.597 12.295 215.662 12.68 214.562 12.68ZM217.642 16.695V47H211.372V16.695H217.642ZM236.874 47.495C234.491 47.495 232.346 47.0733 230.439 46.23C228.569 45.35 227.084 44.1767 225.984 42.71C224.884 41.2067 224.297 39.5383 224.224 37.705H230.714C230.824 38.9883 231.429 40.07 232.529 40.95C233.666 41.7933 235.077 42.215 236.764 42.215C238.524 42.215 239.881 41.885 240.834 41.225C241.824 40.5283 242.319 39.6483 242.319 38.585C242.319 37.4483 241.769 36.605 240.669 36.055C239.606 35.505 237.901 34.9 235.554 34.24C233.281 33.6167 231.429 33.0117 229.999 32.425C228.569 31.8383 227.322 30.94 226.259 29.73C225.232 28.52 224.719 26.925 224.719 24.945C224.719 23.3317 225.196 21.865 226.149 20.545C227.102 19.1883 228.459 18.125 230.219 17.355C232.016 16.585 234.069 16.2 236.379 16.2C239.826 16.2 242.594 17.08 244.684 18.84C246.811 20.5633 247.947 22.9283 248.094 25.935H241.824C241.714 24.5783 241.164 23.4967 240.174 22.69C239.184 21.8833 237.846 21.48 236.159 21.48C234.509 21.48 233.244 21.7917 232.364 22.415C231.484 23.0383 231.044 23.8633 231.044 24.89C231.044 25.6967 231.337 26.375 231.924 26.925C232.511 27.475 233.226 27.915 234.069 28.245C234.912 28.5383 236.159 28.9233 237.809 29.4C240.009 29.9867 241.806 30.5917 243.199 31.215C244.629 31.8017 245.857 32.6817 246.884 33.855C247.911 35.0283 248.442 36.5867 248.479 38.53C248.479 40.2533 248.002 41.7933 247.049 43.15C246.096 44.5067 244.739 45.57 242.979 46.34C241.256 47.11 239.221 47.495 236.874 47.495ZM267.244 31.875L281.214 47H272.744L261.524 33.965V47H255.254V6.3H261.524V29.95L272.524 16.695H281.214L267.244 31.875Z"
        fill={fill}
      />
      <defs>
        <clipPath id="clip0_209_3">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
