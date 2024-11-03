import React from "react";

export default function Logo20({
  fill = "black",
  width = "199",
  height = "42",
  stroke = "black",
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
      viewBox="0 0 199 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.70181 27.379L8.04115 25.4512C8.22203 25.3468 8.43429 25.3105 8.63958 25.3489L15.21 26.5786C15.7499 26.6797 16.2484 26.264 16.2459 25.7147L16.2203 19.9578C16.2196 19.8014 16.2609 19.6476 16.3398 19.5126L19.6555 13.8359C19.8281 13.5404 19.8126 13.1715 19.616 12.8916L14.0331 4.94495M33.2504 8.50334C23.6254 13.1251 28.8751 19.2501 30.6254 20.1251C33.9102 21.7672 38.4784 21.875 38.4784 21.875C38.4927 21.5851 38.5 21.2934 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21C3.5 30.665 11.335 38.5 21 38.5C21.2934 38.5 21.5851 38.4928 21.875 38.4785M29.3261 38.3946L23.7843 23.7843L38.3946 29.3261L31.9159 31.9159L29.3261 38.3946Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50.995 39V2.63636H73.5447V7.35938H56.4815V18.4389H71.929V23.1442H56.4815V39H50.995ZM79.8658 39V11.7273H85.1747V39H79.8658ZM82.5469 7.51918C81.6236 7.51918 80.8305 7.21141 80.1676 6.59588C79.5166 5.96851 79.1911 5.22277 79.1911 4.35866C79.1911 3.48272 79.5166 2.73698 80.1676 2.12145C80.8305 1.49408 81.6236 1.1804 82.5469 1.1804C83.4702 1.1804 84.2573 1.49408 84.9084 2.12145C85.5713 2.73698 85.9027 3.48272 85.9027 4.35866C85.9027 5.22277 85.5713 5.96851 84.9084 6.59588C84.2573 7.21141 83.4702 7.51918 82.5469 7.51918ZM97.6259 22.8068V39H92.3169V11.7273H97.4128V16.1662H97.7502C98.3775 14.7221 99.36 13.562 100.698 12.6861C102.047 11.8101 103.746 11.3722 105.794 11.3722C107.652 11.3722 109.28 11.7628 110.676 12.544C112.073 13.3134 113.156 14.4616 113.926 15.9886C114.695 17.5156 115.08 19.4036 115.08 21.6527V39H109.771V22.2919C109.771 20.3151 109.256 18.7704 108.226 17.6577C107.196 16.5331 105.782 15.9709 103.982 15.9709C102.751 15.9709 101.656 16.2372 100.698 16.7699C99.7507 17.3026 98.999 18.0838 98.4426 19.1136C97.8981 20.1316 97.6259 21.3627 97.6259 22.8068ZM132.409 39.5327C130.208 39.5327 128.243 38.9704 126.514 37.8459C124.798 36.7095 123.449 35.0937 122.466 32.9986C121.495 30.8916 121.01 28.3643 121.01 25.4169C121.01 22.4695 121.501 19.9482 122.484 17.853C123.478 15.7578 124.839 14.1539 126.568 13.0412C128.296 11.9285 130.255 11.3722 132.445 11.3722C134.137 11.3722 135.499 11.6562 136.529 12.2244C137.57 12.7808 138.375 13.4318 138.943 14.1776C139.523 14.9233 139.973 15.5803 140.293 16.1484H140.612V2.63636H145.921V39H140.737V34.7564H140.293C139.973 35.3364 139.512 35.9993 138.908 36.745C138.316 37.4908 137.499 38.1418 136.458 38.6982C135.416 39.2545 134.066 39.5327 132.409 39.5327ZM133.581 35.005C135.108 35.005 136.398 34.6025 137.452 33.7976C138.517 32.9808 139.322 31.8504 139.867 30.4062C140.423 28.9621 140.701 27.2812 140.701 25.3636C140.701 23.4697 140.429 21.8125 139.884 20.392C139.34 18.9716 138.541 17.8648 137.487 17.0717C136.434 16.2786 135.132 15.8821 133.581 15.8821C131.983 15.8821 130.651 16.2964 129.586 17.125C128.521 17.9536 127.716 19.084 127.171 20.5163C126.639 21.9486 126.372 23.5644 126.372 25.3636C126.372 27.1866 126.645 28.826 127.189 30.282C127.734 31.7379 128.539 32.892 129.604 33.7443C130.681 34.5848 132.007 35.005 133.581 35.005ZM165.253 39.5504C162.566 39.5504 160.252 38.9763 158.31 37.8281C156.381 36.6681 154.889 35.0405 153.836 32.9453C152.794 30.8383 152.273 28.3703 152.273 25.5412C152.273 22.7476 152.794 20.2855 153.836 18.1548C154.889 16.0241 156.357 14.361 158.239 13.1655C160.133 11.9699 162.347 11.3722 164.88 11.3722C166.419 11.3722 167.91 11.6267 169.354 12.1357C170.799 12.6446 172.095 13.4437 173.243 14.5327C174.391 15.6217 175.297 17.0362 175.96 18.7763C176.622 20.5045 176.954 22.6056 176.954 25.0795V26.9616H155.274V22.9844H171.751C171.751 21.5876 171.467 20.3506 170.899 19.2734C170.331 18.1844 169.532 17.3262 168.502 16.6989C167.484 16.0715 166.289 15.7578 164.915 15.7578C163.424 15.7578 162.122 16.1248 161.009 16.8587C159.908 17.5807 159.056 18.5277 158.452 19.6996C157.861 20.8596 157.565 22.1203 157.565 23.4815V26.5888C157.565 28.4117 157.884 29.9624 158.523 31.2408C159.174 32.5192 160.08 33.4957 161.24 34.1705C162.4 34.8333 163.755 35.1648 165.306 35.1648C166.312 35.1648 167.23 35.0227 168.058 34.7386C168.887 34.4427 169.603 34.0047 170.207 33.4247C170.81 32.8447 171.272 32.1286 171.592 31.2763L176.616 32.1818C176.214 33.6615 175.492 34.9576 174.45 36.0703C173.42 37.1712 172.124 38.0294 170.562 38.6449C169.011 39.2486 167.241 39.5504 165.253 39.5504ZM182.844 39V11.7273H187.976V16.0597H188.26C188.757 14.5919 189.633 13.4377 190.888 12.5973C192.154 11.745 193.586 11.3189 195.184 11.3189C195.516 11.3189 195.907 11.3307 196.356 11.3544C196.818 11.3781 197.179 11.4077 197.439 11.4432V16.5213C197.226 16.4621 196.848 16.397 196.303 16.326C195.759 16.2431 195.214 16.2017 194.67 16.2017C193.415 16.2017 192.296 16.468 191.314 17.0007C190.343 17.5215 189.574 18.2495 189.006 19.1847C188.437 20.108 188.153 21.1615 188.153 22.3452V39H182.844Z"
        fill={fill}
      />
    </svg>
  );
}
