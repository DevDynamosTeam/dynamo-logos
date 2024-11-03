import React from "react";

export default function Logo37({
  fill = "black",
  width = "175",
  height = "81",
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
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_209_362)">
        <path
          d="M12.9276 52.7472L25.1586 40.5L12.9276 28.269L5.6052 20.9466L0 0V81L5.6052 60.0696L12.9276 52.7472Z"
          fill={fill}
        />
        <path
          d="M40.5 25.1748L52.731 12.9438L60.0534 5.6052L81 0H0L20.9304 5.6052L40.5 25.1748Z"
          fill={fill}
        />
        <path
          d="M75.3948 20.9466L68.0562 28.269L55.8252 40.5L75.3948 60.0696L81 81V0L75.3948 20.9466Z"
          fill={fill}
        />
        <path
          d="M52.731 68.0724L40.5 55.8414L28.2528 68.0724L20.9304 75.3948L0 81H81L60.0534 75.3948L52.731 68.0724Z"
          fill={fill}
        />
      </g>
      <path
        d="M100.156 17.7273L111.467 36.2163H111.836L123.146 17.7273H131.41L116.683 41.3636L131.502 65H123.192L111.836 46.7649H111.467L100.11 65H91.8004L106.873 41.3636L91.8928 17.7273H100.156ZM137.931 65V29.5455H144.832V65H137.931ZM141.416 24.0749C140.216 24.0749 139.185 23.6748 138.323 22.8746C137.477 22.0591 137.053 21.0896 137.053 19.9663C137.053 18.8275 137.477 17.8581 138.323 17.0579C139.185 16.2423 140.216 15.8345 141.416 15.8345C142.616 15.8345 143.64 16.2423 144.486 17.0579C145.348 17.8581 145.779 18.8275 145.779 19.9663C145.779 21.0896 145.348 22.0591 144.486 22.8746C143.64 23.6748 142.616 24.0749 141.416 24.0749ZM154.117 65V29.5455H160.788V35.1776H161.157C161.804 33.2694 162.942 31.7691 164.573 30.6765C166.22 29.5685 168.082 29.0146 170.159 29.0146C170.59 29.0146 171.098 29.0299 171.683 29.0607C172.283 29.0915 172.752 29.13 173.091 29.1761V35.7777C172.814 35.7008 172.321 35.6161 171.614 35.5238C170.906 35.4161 170.198 35.3622 169.49 35.3622C167.859 35.3622 166.405 35.7085 165.127 36.4009C163.866 37.078 162.865 38.0244 162.127 39.2401C161.388 40.4403 161.019 41.8099 161.019 43.3487V65H154.117Z"
        fill={fill}
      />
      <defs>
        <clipPath id="clip0_209_362">
          <rect width="81" height="81" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
