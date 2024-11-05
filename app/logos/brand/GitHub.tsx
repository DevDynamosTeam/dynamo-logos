import React from "react";

export default function GitHub({
  width = "100",
  height = "28",
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
      viewBox="0 0 100 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_401_2395)">
        <path
          d="M19.2383 11.5615H10.8446C10.628 11.5615 10.4524 11.7372 10.4524 11.9539V16.0576C10.4524 16.2741 10.628 16.4504 10.8446 16.4504H14.119V21.5489C14.119 21.5489 13.3836 21.7995 11.3511 21.7995C8.95301 21.7995 5.60306 20.9233 5.60306 13.5568C5.60306 6.18865 9.09128 5.21922 12.3663 5.21922C15.2011 5.21922 16.4224 5.71839 17.1995 5.95882C17.4436 6.03369 17.6695 5.79055 17.6695 5.57383L18.6058 1.60878C18.6058 1.50749 18.5715 1.3854 18.4559 1.30241C18.1403 1.07737 16.215 0 11.3511 0C5.74767 0 0 2.38394 0 13.844C0 25.3045 6.5806 27.0123 12.126 27.0123C16.7175 27.0123 19.503 25.0501 19.503 25.0501C19.6178 24.9867 19.6301 24.8263 19.6301 24.7527V11.9539C19.6301 11.7372 19.4547 11.5615 19.2383 11.5615Z"
          fill="#161312"
        />
        <path
          d="M62.4951 1.37319C62.4951 1.1548 62.322 0.978638 62.1054 0.978638H57.3794C57.1635 0.978638 56.9879 1.1548 56.9879 1.37319C56.9879 1.37423 56.9893 10.5064 56.9893 10.5064H49.6225V1.37319C49.6225 1.1548 49.4487 0.978638 49.2325 0.978638H44.5067C44.2916 0.978638 44.1162 1.1548 44.1162 1.37319V26.1034C44.1162 26.3215 44.2916 26.4992 44.5067 26.4992H49.2325C49.4487 26.4992 49.6225 26.3215 49.6225 26.1034V15.5254H56.9893C56.9893 15.5254 56.9763 26.1026 56.9763 26.1034C56.9763 26.3215 57.1517 26.4992 57.3678 26.4992H62.1051C62.3215 26.4992 62.4946 26.3215 62.4951 26.1034V1.37319Z"
          fill="#161312"
        />
        <path
          d="M28.1562 4.61834C28.1562 2.9166 26.7918 1.54138 25.1086 1.54138C23.4271 1.54138 22.0615 2.9166 22.0615 4.61834C22.0615 6.31831 23.4271 7.69721 25.1086 7.69721C26.7918 7.69721 28.1562 6.31831 28.1562 4.61834Z"
          fill="#161312"
        />
        <path
          d="M27.8183 20.8867C27.8183 20.2531 27.8183 9.47109 27.8183 9.47109C27.8183 9.25432 27.6432 9.07715 27.4273 9.07715H22.7161C22.5 9.07715 22.3066 9.30006 22.3066 9.51675C22.3066 9.51675 22.3066 23.2534 22.3066 25.8719C22.3066 26.3526 22.6061 26.4953 22.9938 26.4953C22.9938 26.4953 25.0046 26.4953 27.2384 26.4953C27.704 26.4953 27.8183 26.2669 27.8183 25.8642C27.8183 24.9875 27.8183 21.5532 27.8183 20.8867Z"
          fill="#161312"
        />
        <path
          d="M80.4559 9.11438H75.7661C75.5509 9.11438 75.3759 9.29163 75.3759 9.50977V21.6358C75.3759 21.6358 74.1845 22.5075 72.4934 22.5075C70.8025 22.5075 70.3536 21.7403 70.3536 20.0845C70.3536 18.4266 70.3536 9.50977 70.3536 9.50977C70.3536 9.29163 70.1789 9.11438 69.9636 9.11438H65.2038C64.989 9.11438 64.813 9.29163 64.813 9.50977C64.813 9.50977 64.813 15.9674 64.813 20.8852C64.813 25.8033 67.5541 27.0065 71.325 27.0065C74.4183 27.0065 76.9125 25.2975 76.9125 25.2975C76.9125 25.2975 77.0313 26.198 77.0849 26.3048C77.1388 26.4113 77.2787 26.519 77.43 26.519L80.4581 26.5057C80.6729 26.5057 80.8488 26.328 80.8488 26.1108L80.8474 9.50977C80.8474 9.29163 80.6721 9.11438 80.4559 9.11438Z"
          fill="#161312"
        />
        <path
          d="M91.4239 22.4926C89.7971 22.443 88.6938 21.7049 88.6938 21.7049V13.8733C88.6938 13.8733 89.7825 13.2061 91.1179 13.0869C92.8068 12.9356 94.4341 13.4457 94.4341 17.4744C94.4341 21.7229 93.6996 22.5611 91.4239 22.4926ZM93.2737 8.55888C90.6099 8.55888 88.7983 9.74731 88.7983 9.74731V1.37319C88.7983 1.1548 88.6237 0.978638 88.4083 0.978638H83.6688C83.4534 0.978638 83.2783 1.1548 83.2783 1.37319V26.1034C83.2783 26.3215 83.4534 26.4992 83.6695 26.4992C83.6698 26.4992 86.9567 26.4992 86.9577 26.4992C87.1058 26.4992 87.2179 26.4229 87.3008 26.2892C87.3825 26.1563 87.5005 25.149 87.5005 25.149C87.5005 25.149 89.4384 26.9856 93.1071 26.9856C97.4141 26.9856 99.8841 24.8007 99.8841 17.1779C99.8841 9.55502 95.9392 8.55888 93.2737 8.55888Z"
          fill="#161312"
        />
        <path
          d="M41.4015 9.07494H37.8564C37.8564 9.07494 37.8511 4.39247 37.8511 4.39142C37.8511 4.21421 37.7597 4.12561 37.5549 4.12561H32.7238C32.5359 4.12561 32.4351 4.20819 32.4351 4.38872V9.22851C32.4351 9.22851 30.0141 9.81298 29.8504 9.86019C29.6873 9.90747 29.5674 10.0578 29.5674 10.2372V13.2785C29.5674 13.4972 29.7421 13.6736 29.9581 13.6736H32.4351C32.4351 13.6736 32.4351 16.8546 32.4351 20.9902C32.4351 26.4246 36.2471 26.9586 38.8195 26.9586C39.9947 26.9586 41.4007 26.581 41.6328 26.4953C41.7732 26.4437 41.8547 26.2985 41.8547 26.1408L41.8587 22.7952C41.8587 22.577 41.6744 22.4003 41.4669 22.4003C41.2604 22.4003 40.7318 22.4843 40.1877 22.4843C38.4464 22.4843 37.8564 21.6747 37.8564 20.6268C37.8564 19.5795 37.8562 13.6736 37.8562 13.6736H41.4015C41.6176 13.6736 41.7925 13.4972 41.7925 13.2785V9.469C41.7925 9.25067 41.6176 9.07494 41.4015 9.07494Z"
          fill="#161312"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_2395">
          <rect width="100" height="27.1215" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
