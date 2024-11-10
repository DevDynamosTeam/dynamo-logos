import React from "react";
export default function Spotify({
  width = "100",
  height = "32",
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
      viewBox='0 0 100 32'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.9332 7.26951C77.4941 7.2693 77.0729 7.44366 76.7623 7.75425C76.4518 8.06482 76.277 8.48619 76.2768 8.92562C76.2766 9.36507 76.4509 9.78657 76.7611 10.0974C77.0715 10.4083 77.4925 10.5831 77.9316 10.5833C78.3709 10.5833 78.7921 10.4087 79.1029 10.0978C79.4135 9.7869 79.588 9.36527 79.588 8.92562C79.588 8.48596 79.4135 8.06433 79.1029 7.75346C78.7921 7.44256 78.3709 7.26792 77.9316 7.26792L77.9332 7.26951ZM79.0744 11.859H76.7664C76.7218 11.8594 76.679 11.8775 76.6475 11.9093C76.6159 11.9411 76.5982 11.9841 76.5982 12.0289V22.1101C76.5982 22.2054 76.6729 22.2802 76.7664 22.2802H79.076C79.121 22.2802 79.1642 22.2622 79.1962 22.2303C79.2279 22.1985 79.2458 22.1553 79.2458 22.1101V12.0289C79.2458 11.9839 79.2279 11.9406 79.1962 11.9088C79.1642 11.8769 79.121 11.859 79.076 11.859H79.0744ZM84.2078 11.8685V11.5508C84.2078 10.6103 84.568 10.1909 85.376 10.1909C85.857 10.1909 86.2428 10.2862 86.6776 10.4324C86.7031 10.4411 86.7304 10.4434 86.757 10.4394C86.7837 10.4353 86.809 10.4249 86.8308 10.409C86.8524 10.3931 86.8701 10.3723 86.8821 10.3481C86.8941 10.324 86.9002 10.2973 86.8998 10.2704V8.32433C86.8996 8.28796 86.888 8.2526 86.8662 8.22344C86.8444 8.19427 86.8141 8.17283 86.7792 8.1623C86.157 7.97205 85.5092 7.87881 84.8585 7.88588C82.7269 7.88588 81.5998 9.08845 81.5998 11.3617V11.851H80.4902C80.4456 11.851 80.4027 11.8687 80.3707 11.9002C80.3389 11.9318 80.321 11.9746 80.3204 12.0194V14.0163C80.3204 14.11 80.3968 14.1862 80.4902 14.1862H81.5998V22.1134C81.5998 22.2054 81.6744 22.2818 81.768 22.2818H84.0776C84.1224 22.2814 84.1652 22.2633 84.1968 22.2315C84.2281 22.1995 84.2458 22.1565 84.2458 22.1117V14.1847H86.4014L89.7047 22.1117C89.33 22.9427 88.9617 23.1095 88.4585 23.1095C88.0507 23.1095 87.622 22.9871 87.1839 22.7472C87.1638 22.7364 87.1416 22.7297 87.1186 22.7274C87.0957 22.7252 87.0725 22.7276 87.0505 22.7345C87.0285 22.7421 87.0082 22.7541 86.9909 22.77C86.9737 22.7859 86.9599 22.8052 86.9505 22.8266L86.168 24.5439C86.1499 24.5826 86.1471 24.627 86.1605 24.6677C86.1738 24.7085 86.2021 24.7425 86.2395 24.7631C87.057 25.2064 87.7951 25.3954 88.7061 25.3954C90.411 25.3954 91.3538 24.6011 92.1839 22.4612L96.1902 12.1004C96.2008 12.0748 96.2047 12.0469 96.2019 12.0193C96.199 11.9917 96.1892 11.9653 96.1737 11.9424C96.1583 11.9194 96.1373 11.9007 96.1126 11.8878C96.0882 11.8749 96.0609 11.8683 96.0332 11.8685H93.63C93.5949 11.8689 93.5609 11.88 93.5326 11.9005C93.5041 11.921 93.4827 11.9497 93.4713 11.9829L91.0078 19.0219L88.3094 11.9781C88.2974 11.946 88.276 11.9183 88.2479 11.8987C88.2198 11.8791 88.1864 11.8686 88.1522 11.8685H84.2078ZM75.3554 11.859H72.8157V9.25843C72.8157 9.23619 72.8112 9.21415 72.8027 9.19362C72.7941 9.17309 72.7817 9.15445 72.7658 9.13879C72.7501 9.12313 72.7314 9.11077 72.7108 9.1024C72.6902 9.09403 72.668 9.08983 72.6458 9.09004H70.3363C70.2919 9.09044 70.2493 9.10832 70.2177 9.13981C70.1864 9.1713 70.1684 9.21391 70.168 9.25843V11.859H69.057C69.0349 11.859 69.0126 11.8634 68.9923 11.8719C68.9717 11.8805 68.9532 11.893 68.9375 11.9088C68.9218 11.9246 68.9094 11.9434 68.901 11.964C68.8927 11.9846 68.8886 12.0067 68.8888 12.0289V14.0147C68.8888 14.1084 68.965 14.1847 69.057 14.1847H70.168V19.3222C70.168 21.4001 71.1998 22.4516 73.2379 22.4516C74.0664 22.4516 74.7522 22.2818 75.3998 21.9148C75.4261 21.9001 75.4477 21.8785 75.4628 21.8527C75.4778 21.8266 75.4858 21.7971 75.4856 21.7671V19.8766C75.486 19.8476 75.4788 19.819 75.465 19.7935C75.4511 19.7681 75.431 19.7467 75.4063 19.7313C75.3817 19.716 75.3536 19.7072 75.3247 19.706C75.2957 19.7047 75.267 19.711 75.2412 19.7241C74.7968 19.9481 74.3664 20.0513 73.8856 20.0513C73.1442 20.0513 72.8141 19.7161 72.8141 18.9616V14.1847H75.3538C75.3762 14.1849 75.3984 14.1806 75.419 14.1722C75.4397 14.1637 75.4585 14.1512 75.4744 14.1354C75.4902 14.1195 75.5027 14.1007 75.5112 14.08C75.5196 14.0593 75.5238 14.0371 75.5236 14.0147V12.0289C75.5238 12.0067 75.5196 11.9846 75.5112 11.964C75.5029 11.9434 75.4907 11.9246 75.475 11.9088C75.4593 11.893 75.4408 11.8805 75.4202 11.8719C75.3996 11.8634 75.3776 11.859 75.3554 11.859ZM63.1792 11.6477C60.068 11.6477 57.6283 14.0465 57.6283 17.1077C57.6283 20.1371 60.0507 22.5089 63.1412 22.5089C66.2634 22.5089 68.7094 20.1196 68.7094 17.0695C68.7094 14.029 66.2809 11.6477 63.1792 11.6477ZM63.1792 20.1657C61.5236 20.1657 60.2744 18.8345 60.2744 17.068C60.2744 15.2967 61.4809 14.0115 63.1412 14.0115C64.8078 14.0115 66.0617 15.3427 66.0617 17.1093C66.0617 18.8805 64.8507 20.1657 63.1792 20.1657ZM52.0458 11.6477C50.7442 11.6477 49.6776 12.1608 48.7982 13.2108V12.0289C48.7982 11.9841 48.7807 11.9411 48.7491 11.9093C48.7175 11.8775 48.6748 11.8594 48.63 11.859H46.3204C46.2758 11.8594 46.233 11.8775 46.2014 11.9093C46.1699 11.9411 46.1522 11.9841 46.1522 12.0289V25.1667C46.1522 25.2588 46.2283 25.3349 46.3204 25.3349H48.63C48.6746 25.3345 48.7171 25.3168 48.7485 25.2852C48.7801 25.2537 48.7978 25.2111 48.7982 25.1667V21.0205C49.6792 22.0068 50.7458 22.4897 52.0458 22.4897C54.4617 22.4897 56.9078 20.628 56.9078 17.0695C56.9078 13.5111 54.4634 11.6477 52.0458 11.6477ZM54.2236 17.0695C54.2236 18.8805 53.1078 20.1467 51.511 20.1467C49.9316 20.1467 48.7412 18.8234 48.7412 17.0695C48.7412 15.3157 49.9316 13.9924 51.511 13.9924C53.0823 13.9924 54.2253 15.2856 54.2253 17.0695H54.2236ZM40.8332 14.1942C38.2554 13.5778 37.7968 13.1457 37.7968 12.2386C37.7968 11.3808 38.6031 10.8041 39.8031 10.8041C40.965 10.8041 42.119 11.241 43.3269 12.1433C43.3448 12.1566 43.3652 12.1662 43.387 12.1716C43.4088 12.177 43.4314 12.178 43.4534 12.1746C43.4756 12.1712 43.4968 12.1635 43.5159 12.1518C43.535 12.1402 43.5518 12.1249 43.565 12.1068L44.8253 10.3291C44.8497 10.294 44.8601 10.251 44.8542 10.2085C44.8483 10.1661 44.8265 10.1275 44.7935 10.1004C43.3554 8.94388 41.7348 8.38311 39.8412 8.38311C37.0554 8.38311 35.111 10.0543 35.111 12.4483C35.111 15.0139 36.7888 15.9226 39.6888 16.6232C42.1554 17.1919 42.5729 17.6684 42.5729 18.5215C42.5729 19.4651 41.7316 20.0513 40.3744 20.0513C38.8697 20.0513 37.6428 19.543 36.268 18.3547C36.2336 18.3255 36.1894 18.3106 36.1442 18.3134C36.1218 18.3151 36.1 18.3214 36.0803 18.3318C36.0603 18.3421 36.0426 18.3564 36.0283 18.3738L34.6157 20.0545C34.587 20.088 34.5725 20.1316 34.5758 20.1757C34.579 20.2198 34.5998 20.2607 34.6332 20.2896C36.1896 21.7009 38.2171 22.4789 40.3173 22.4708C43.3173 22.4708 45.257 20.8299 45.257 18.2912C45.257 16.145 43.976 14.9583 40.8332 14.1926V14.1942ZM15.0903 0.484619C11.1289 0.484619 7.32975 2.05957 4.52861 4.86299C1.72747 7.66641 0.153809 11.4687 0.153809 15.4333C0.153809 19.3979 1.72747 23.2001 4.52861 26.0036C7.32975 28.807 11.1289 30.382 15.0903 30.382C19.0517 30.382 22.8509 28.807 25.652 26.0036C28.4532 23.2001 30.0269 19.3979 30.0269 15.4333C30.0269 11.4687 28.4532 7.66641 25.652 4.86299C22.8509 2.05957 19.0517 0.484619 15.0903 0.484619ZM21.9412 22.0451C21.8774 22.1498 21.7939 22.2409 21.6949 22.3132C21.5962 22.3852 21.4839 22.4374 21.365 22.4661C21.2458 22.4948 21.1224 22.4999 21.0014 22.4808C20.8805 22.4616 20.7646 22.4189 20.6601 22.3549C17.1522 20.2102 12.7395 19.7257 7.53953 20.914C7.42039 20.9413 7.29707 20.9447 7.1766 20.9242C7.05613 20.9038 6.94088 20.8596 6.83741 20.7946C6.73393 20.7296 6.64428 20.6447 6.57356 20.5451C6.50283 20.4453 6.45244 20.3326 6.42523 20.2134C6.39804 20.0942 6.39456 19.9707 6.41501 19.8502C6.43548 19.7296 6.47947 19.6143 6.54446 19.5107C6.60947 19.4071 6.69422 19.3174 6.79385 19.2466C6.8935 19.1758 7.00611 19.1254 7.12523 19.0982C12.8141 17.7955 17.6951 18.3563 21.6316 20.7647C22.0697 21.0331 22.2078 21.6066 21.9412 22.0451ZM23.7664 17.975C23.6049 18.238 23.3458 18.4262 23.0458 18.4983C22.746 18.5703 22.4298 18.5204 22.1664 18.3595C18.1522 15.8892 12.0316 15.1744 7.28238 16.6168C6.99342 16.6854 6.68921 16.6411 6.43173 16.493C6.17426 16.3449 5.98291 16.1041 5.89668 15.8197C5.81045 15.5353 5.83584 15.2287 5.96768 14.9624C6.09951 14.6961 6.32786 14.4901 6.60619 14.3864C12.0316 12.739 18.7744 13.5381 23.3839 16.3722C23.5145 16.4522 23.6279 16.5572 23.7179 16.6812C23.808 16.8052 23.8727 16.9457 23.9084 17.0947C23.944 17.2437 23.9499 17.3983 23.9259 17.5496C23.9019 17.701 23.8483 17.8461 23.768 17.9766L23.7664 17.975ZM23.9269 13.7367C19.111 10.8756 11.1681 10.6119 6.57285 12.0099C6.39652 12.0662 6.21075 12.0868 6.02635 12.0706C5.84195 12.0545 5.66261 12.0018 5.49876 11.9156C5.33489 11.8295 5.18975 11.7116 5.07181 11.5688C4.95387 11.426 4.86546 11.2612 4.81171 11.084C4.75796 10.9067 4.73994 10.7205 4.75874 10.5362C4.77751 10.3519 4.83271 10.1732 4.9211 10.0104C5.00949 9.84765 5.12933 9.70411 5.27364 9.5881C5.41796 9.47209 5.58387 9.38596 5.76175 9.33468C11.0364 7.7302 19.8078 8.04156 25.3491 11.3331C25.6676 11.5223 25.8982 11.8304 25.99 12.1897C26.0817 12.549 26.0269 12.93 25.8379 13.249C25.6489 13.5679 25.341 13.7986 24.9821 13.8904C24.623 13.9822 24.2424 13.9274 23.9236 13.7383"
        fill="#1CD155"
      />
    </svg>
  );
}
