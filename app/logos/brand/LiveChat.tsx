import React from "react";
export default function LiveChat({
  width = "100",
  height = "23",
  className = "",
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
      viewBox='0 0 100 23'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_401_1883)">
        <path
          d="M17.1454 3.84363C13.3293 3.56953 9.07873 3.56954 5.26262 3.84363C4.46379 3.90101 3.85853 4.51269 3.79847 5.26034C3.60584 7.65806 3.58022 11.2503 3.75684 13.6456C3.81519 14.4368 4.50982 15.1159 5.44957 15.1159H8.39552V18.75L5.45557 18.7479C2.75857 18.7479 0.337746 16.7489 0.128634 13.9131C-0.061743 11.3315 -0.0354486 7.55239 0.172087 4.96901C0.380075 2.37999 2.46197 0.397371 5.00198 0.214927C8.99164 -0.0716416 13.4164 -0.0716428 17.406 0.214926C19.946 0.397369 22.028 2.37999 22.236 4.96901C22.4435 7.55239 22.4344 11.3315 22.244 13.9131C22.0349 16.7489 19.6197 18.756 16.9227 18.756L14.0131 18.754L8.39552 22.3881V18.75L14.0131 15.1159H16.9231C17.8628 15.1159 18.5575 14.4368 18.6158 13.6456C18.7925 11.2503 18.8022 7.65806 18.6096 5.26034C18.5495 4.51269 17.9443 3.90101 17.1454 3.84363Z"
          fill="#FE5000"
        />
        <path
          d="M27.9565 15.9735H36.7483V13.766H30.6207V2.65259H27.9565V15.9735Z"
          fill="#1B1B20"
        />
        <path
          d="M38.0228 15.9735H40.6109V6.07799H38.0228V15.9735ZM37.8135 3.48993C37.8135 4.34627 38.4415 4.99329 39.3168 4.99329C40.1922 4.99329 40.8202 4.34627 40.8202 3.48993C40.8202 2.63359 40.1922 1.98657 39.3168 1.98657C38.4415 1.98657 37.8135 2.63359 37.8135 3.48993Z"
          fill="#1B1B20"
        />
        <path
          d="M50.7586 6.07812H48.1706L46.0392 13.3285L43.9079 6.07812H41.3198L44.6881 15.9736H47.3903L50.7586 6.07812Z"
          fill="#1B1B20"
        />
        <path
          d="M55.3767 16.2019C57.5651 16.2019 59.3349 14.8888 59.6775 13.081H57.4129C57.1655 13.766 56.4804 14.3369 55.3767 14.3369C53.8734 14.3369 53.2834 13.3284 53.2834 12.1675V11.9201H59.7536V10.1884C59.7536 7.8097 58.2692 5.84961 55.3387 5.84961C52.37 5.84961 50.7715 7.75261 50.7715 10.4358V11.7869C50.7715 14.5653 52.5793 16.2019 55.3767 16.2019ZM53.2834 9.99813C53.2834 8.66604 53.8543 7.67649 55.3387 7.67649C56.7278 7.67649 57.3748 8.60895 57.3748 9.84589V10.0933H53.2834V9.99813Z"
          fill="#1B1B20"
        />
        <path
          d="M66.6322 16.24C70.0005 16.24 72.0748 13.9564 72.208 11.2351H69.7341C69.5628 12.7385 68.6113 14.0515 66.6322 14.0515C64.4057 14.0515 63.4542 12.5291 63.4542 10.3978V8.22839C63.4542 6.09705 64.4057 4.57466 66.6322 4.57466C68.6113 4.57466 69.5628 5.88772 69.7341 7.39108H72.208C72.0748 4.66981 70.0005 2.38623 66.6322 2.38623C62.6169 2.38623 60.8091 4.95526 60.8091 8.3616V10.2646C60.8091 13.6709 62.6169 16.24 66.6322 16.24Z"
          fill="#1B1B20"
        />
        <path
          d="M73.6147 15.9736H76.203V10.1124C76.203 8.78033 76.9447 8.09526 78.1059 8.09526C79.3619 8.09526 79.9134 8.91354 79.9134 10.0553V15.9736H82.5015V9.63668C82.5015 7.29597 81.1507 5.8497 79 5.8497C77.7253 5.8497 76.7164 6.40156 76.203 7.25791V2.08179H73.6147V15.9736Z"
          fill="#1B1B20"
        />
        <path
          d="M87.4416 16.2019C88.5834 16.2019 89.8394 15.7261 90.2961 15.0601V15.9735H92.7886V9.65559C92.7886 7.35297 91.0954 5.84961 88.6215 5.84961C86.4901 5.84961 84.9484 6.87722 84.3775 8.79925H86.7752C87.0416 8.26642 87.5939 7.86679 88.4879 7.86679C89.5536 7.86679 90.2006 8.55186 90.2006 9.4653V10.8164C89.7439 10.4358 88.8685 9.9791 87.6886 9.9791C85.3103 9.9791 83.6924 10.9687 83.6924 13.119C83.6924 15.041 85.2148 16.2019 87.4416 16.2019ZM88.1073 14.4892C87.023 14.4892 86.2043 13.9563 86.2043 13.0429C86.2043 12.1295 86.9655 11.6347 88.1834 11.6347C89.3446 11.6347 90.2006 12.1485 90.2006 13.0239C90.2006 13.8612 89.2491 14.4892 88.1073 14.4892Z"
          fill="#1B1B20"
        />
        <path
          d="M97.6254 15.9735H99.4142V13.8802H98.3672C97.6821 13.8802 97.4351 13.6138 97.4351 12.9667V8.17123H99.547V6.07797H97.4351V3.37573H94.8276V6.07797H93.4194V8.17123H94.8276V13.157C94.8276 14.9078 95.7224 15.9735 97.6254 15.9735Z"
          fill="#1B1B20"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_1883">
          <rect width='100' height='23' fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
