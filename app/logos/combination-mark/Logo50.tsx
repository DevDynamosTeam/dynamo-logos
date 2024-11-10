import React from "react";

export default function Logo50({
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
      viewBox="0 0 262 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.667 5.83325V64.1666"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64.1663 17.5H5.83301"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.3337 64.1667L11.667 17.5"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.667 64.1667L58.3337 17.5"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.3753 64.1666L11.667 36.4583"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.3333 45.2083L30.625 17.5"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.667 45.2083L37.917 17.5"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.625 64.1666L58.3333 36.4583"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64.1663 64.1667H5.83301"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.333 5.83325V64.1666"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79.1935 64V16.7273H108.508V22.8672H86.326V37.2706H106.408V43.3874H86.326V64H79.1935ZM129.403 64.7156C125.91 64.7156 122.902 63.9692 120.378 62.4766C117.87 60.9685 115.931 58.8526 114.562 56.1289C113.207 53.3898 112.53 50.1813 112.53 46.5035C112.53 42.8719 113.207 39.6712 114.562 36.9013C115.931 34.1314 117.839 31.9693 120.286 30.4151C122.748 28.8609 125.626 28.0838 128.919 28.0838C130.919 28.0838 132.858 28.4147 134.736 29.0763C136.613 29.738 138.298 30.7768 139.791 32.1925C141.283 33.6082 142.46 35.4471 143.322 37.7092C144.184 39.9558 144.615 42.6873 144.615 45.9034V48.3501H116.431V43.1797H137.852C137.852 41.3639 137.482 39.7558 136.744 38.3555C136.005 36.9397 134.966 35.8241 133.628 35.0085C132.304 34.1929 130.75 33.7852 128.965 33.7852C127.026 33.7852 125.333 34.2622 123.887 35.2163C122.456 36.1549 121.348 37.386 120.563 38.9094C119.794 40.4175 119.409 42.0563 119.409 43.826V47.8654C119.409 50.2352 119.824 52.2511 120.655 53.913C121.502 55.5749 122.679 56.8445 124.187 57.7216C125.695 58.5833 127.457 59.0142 129.473 59.0142C130.781 59.0142 131.973 58.8295 133.051 58.4602C134.128 58.0755 135.059 57.5062 135.843 56.7521C136.628 55.9981 137.228 55.0671 137.644 53.9592L144.176 55.1364C143.653 57.0599 142.714 58.7449 141.36 60.1914C140.021 61.6225 138.336 62.7382 136.305 63.5384C134.289 64.3232 131.989 64.7156 129.403 64.7156ZM159.174 42.9489V64H152.272V28.5455H158.897V34.316H159.336C160.151 32.4387 161.428 30.9306 163.167 29.7919C164.922 28.6532 167.13 28.0838 169.792 28.0838C172.208 28.0838 174.324 28.5916 176.14 29.6072C177.955 30.6075 179.363 32.1001 180.364 34.0852C181.364 36.0703 181.864 38.5247 181.864 41.4485V64H174.962V42.2795C174.962 39.7096 174.293 37.7015 172.954 36.255C171.615 34.7931 169.777 34.0621 167.438 34.0621C165.837 34.0621 164.414 34.4084 163.167 35.1009C161.936 35.7933 160.959 36.8089 160.236 38.1477C159.528 39.4711 159.174 41.0715 159.174 42.9489ZM206.054 64.7156C202.623 64.7156 199.668 63.9384 197.191 62.3842C194.729 60.8146 192.836 58.6526 191.512 55.8981C190.189 53.1436 189.527 49.989 189.527 46.4343C189.527 42.8335 190.204 39.6558 191.559 36.9013C192.913 34.1314 194.821 31.9693 197.283 30.4151C199.745 28.8609 202.646 28.0838 205.985 28.0838C208.678 28.0838 211.079 28.5839 213.187 29.5842C215.295 30.569 216.995 31.954 218.288 33.739C219.596 35.524 220.373 37.6091 220.619 39.9943H213.902C213.533 38.3324 212.687 36.9013 211.363 35.701C210.055 34.5007 208.301 33.9006 206.1 33.9006C204.177 33.9006 202.492 34.4084 201.045 35.424C199.614 36.4242 198.499 37.8553 197.699 39.7173C196.898 41.5639 196.498 43.7491 196.498 46.2727C196.498 48.858 196.891 51.0893 197.675 52.9666C198.46 54.844 199.568 56.2982 200.999 57.3292C202.446 58.3602 204.146 58.8757 206.1 58.8757C207.408 58.8757 208.593 58.6372 209.655 58.1602C210.732 57.6677 211.633 56.9676 212.356 56.0597C213.094 55.1518 213.61 54.0592 213.902 52.782H220.619C220.373 55.0748 219.627 57.1214 218.38 58.9219C217.134 60.7223 215.464 62.138 213.371 63.169C211.294 64.2 208.855 64.7156 206.054 64.7156ZM243.28 64.7156C239.787 64.7156 236.779 63.9692 234.255 62.4766C231.747 60.9685 229.808 58.8526 228.438 56.1289C227.084 53.3898 226.407 50.1813 226.407 46.5035C226.407 42.8719 227.084 39.6712 228.438 36.9013C229.808 34.1314 231.716 31.9693 234.163 30.4151C236.625 28.8609 239.503 28.0838 242.796 28.0838C244.796 28.0838 246.735 28.4147 248.612 29.0763C250.49 29.738 252.175 30.7768 253.668 32.1925C255.16 33.6082 256.337 35.4471 257.199 37.7092C258.061 39.9558 258.492 42.6873 258.492 45.9034V48.3501H230.308V43.1797H251.729C251.729 41.3639 251.359 39.7558 250.621 38.3555C249.882 36.9397 248.843 35.8241 247.505 35.0085C246.181 34.1929 244.627 33.7852 242.842 33.7852C240.903 33.7852 239.21 34.2622 237.764 35.2163C236.333 36.1549 235.225 37.386 234.44 38.9094C233.67 40.4175 233.286 42.0563 233.286 43.826V47.8654C233.286 50.2352 233.701 52.2511 234.532 53.913C235.379 55.5749 236.556 56.8445 238.064 57.7216C239.572 58.5833 241.334 59.0142 243.35 59.0142C244.658 59.0142 245.85 58.8295 246.927 58.4602C248.005 58.0755 248.936 57.5062 249.72 56.7521C250.505 55.9981 251.105 55.0671 251.521 53.9592L258.053 55.1364C257.53 57.0599 256.591 58.7449 255.237 60.1914C253.898 61.6225 252.213 62.7382 250.182 63.5384C248.166 64.3232 245.866 64.7156 243.28 64.7156Z"
        fill={fill}
      />
    </svg>
  );
}
