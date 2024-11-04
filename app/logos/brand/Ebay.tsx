import React from "react";

export default function Ebay({
  width = "100",
  height = "41",
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 100 41'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_401_2589)">
        <path
          d="M12.9554 8.76941C5.90678 8.76941 0.0332031 11.7598 0.0332031 20.7815C0.0332031 27.9288 3.98276 32.4297 13.1374 32.4297C23.9127 32.4297 24.6035 25.3316 24.6035 25.3316H19.3823C19.3823 25.3316 18.2628 29.1536 12.8189 29.1536C8.38487 29.1536 5.19578 26.1584 5.19578 21.96H25.1495V19.3255C25.1495 15.1721 22.5128 8.76941 12.9554 8.76941ZM12.7734 12.1364C16.994 12.1364 19.8714 14.7221 19.8714 18.5975H5.31126C5.31126 14.4833 9.067 12.1364 12.7734 12.1364Z"
          fill="#E53238"
        />
        <path
          d="M25.1461 0.0333252V27.899C25.1461 29.4807 25.0332 31.7017 25.0332 31.7017H30.0131C30.0131 31.7017 30.1919 30.1066 30.1919 28.6488C30.1919 28.6488 32.6523 32.498 39.3423 32.498C46.3871 32.498 51.1724 27.6069 51.1724 20.5996C51.1724 14.0807 46.777 8.83768 39.3536 8.83768C32.4022 8.83768 30.2422 12.5915 30.2422 12.5915V0.0333252H25.1461ZM38.0682 12.2843C42.8522 12.2843 45.8943 15.8349 45.8943 20.5996C45.8943 25.7088 42.3808 29.0513 38.1024 29.0513C32.9964 29.0513 30.2422 25.0646 30.2422 20.6451C30.2422 16.5269 32.7136 12.2843 38.0682 12.2843Z"
          fill="#0064D2"
        />
        <path
          d="M63.5481 8.76941C52.9441 8.76941 52.264 14.5757 52.264 15.5035H57.5421C57.5421 15.5035 57.8188 12.1137 63.1841 12.1137C66.6706 12.1137 69.3722 13.7095 69.3722 16.7775V17.8695H63.1841C54.969 17.8695 50.626 20.2728 50.626 25.1496C50.626 29.9491 54.6388 32.5605 60.0617 32.5605C67.4521 32.5605 69.8329 28.4768 69.8329 28.4768C69.8329 30.1011 69.9581 31.7017 69.9581 31.7017H74.6503C74.6503 31.7017 74.4683 29.7177 74.4683 28.4484V17.4771C74.4683 10.2833 68.6658 8.76941 63.5481 8.76941ZM69.3722 21.1456V22.6016C69.3722 24.5006 68.2004 29.2219 61.3015 29.2219C57.5238 29.2219 55.904 27.3365 55.904 25.1496C55.904 21.1712 61.3586 21.1456 69.3722 21.1456Z"
          fill="#F5AF02"
        />
        <path
          d="M71.6265 9.68042H77.5643L86.0859 26.7529L94.588 9.68042H99.9668L84.4804 40.0748H78.8383L83.3071 31.6019L71.6265 9.68042Z"
          fill="#86B817"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_2589">
          <rect width='100' height='41' fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
