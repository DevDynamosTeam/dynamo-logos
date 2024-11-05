import React from "react";
export default function Docker({
  width = "100",
  height = "26",
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
      viewBox="0 0 100 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_401_2714)">
        <path
          d="M47.0203 7.60111C46.4938 7.58376 46.0531 7.99734 46.0357 8.52498C46.035 8.54596 46.035 8.56697 46.0357 8.58795V13.3331C43.7517 11.4944 40.413 11.8599 38.5786 14.1493C37.8219 15.0938 37.4095 16.2689 37.41 17.4802C37.3599 20.4153 39.6931 22.8353 42.6214 22.8854C45.5495 22.9356 47.9641 20.5969 48.0142 17.6619C48.0151 17.6013 48.0151 17.5408 48.0142 17.4802V8.59264C48.0219 8.32629 47.917 8.06903 47.7252 7.88465C47.5371 7.70046 47.283 7.59992 47.0203 7.6058V7.60111ZM45.7746 18.7599C45.436 19.5582 44.8039 20.1955 44.0095 20.5399C43.1772 20.8931 42.2376 20.8931 41.4053 20.5399C40.6123 20.1988 39.9828 19.5622 39.6495 18.7645C39.3011 17.9396 39.3011 17.0084 39.6495 16.1836C39.9835 15.3886 40.6133 14.7552 41.4053 14.4175C42.2376 14.0643 43.1772 14.0643 44.0095 14.4175C44.8039 14.7619 45.436 15.3991 45.7746 16.1976C46.1229 17.0192 46.1229 17.9475 45.7746 18.7692"
          fill="#4990DF"
        />
        <path
          d="M58.0912 13.7172C56.0193 11.6424 52.6619 11.6439 50.5919 13.7206C49.5987 14.7168 49.0408 16.0672 49.0403 17.4755C48.9902 20.4106 51.3235 22.8306 54.2518 22.8808C57.1802 22.9309 59.5944 20.5922 59.6446 17.6572C59.6455 17.5966 59.6455 17.5361 59.6446 17.4755C59.645 16.7765 59.5115 16.084 59.2518 15.4352C58.9844 14.7901 58.5895 14.2058 58.0912 13.7172ZM57.4064 18.7552C57.2371 19.1491 56.9961 19.5079 56.6956 19.8133C56.3923 20.1186 56.0343 20.3636 55.6399 20.5352C54.808 20.8885 53.8689 20.8885 53.0371 20.5352C52.2434 20.1948 51.6132 19.5581 51.2799 18.7598C50.9314 17.9349 50.9314 17.0038 51.2799 16.1789C51.6148 15.3851 52.2453 14.7533 53.0371 14.4175C53.8689 14.0642 54.808 14.0642 55.6399 14.4175C56.0343 14.5891 56.3923 14.834 56.6956 15.1394C56.9961 15.4447 57.2371 15.8036 57.4064 16.1975C57.7528 17.0196 57.7528 17.9471 57.4064 18.7691"
          fill="#4990DF"
        />
        <path
          d="M80.0135 13.1471C80.014 13.0165 79.9873 12.8872 79.9346 12.7676C79.8812 12.6528 79.8084 12.548 79.7199 12.4577C79.6323 12.3663 79.5271 12.2935 79.4107 12.2439C79.2878 12.1931 79.1559 12.1673 79.0227 12.168C78.8349 12.1667 78.6505 12.2206 78.4927 12.3229L72.8311 16.0146V8.60184C72.8363 8.3365 72.7316 8.08086 72.5421 7.89543C72.3602 7.70358 72.1063 7.5969 71.8421 7.60107C71.2967 7.59765 70.8517 8.03807 70.8482 8.58479V21.7884C70.8452 22.0521 70.9496 22.3056 71.1374 22.4902C71.3208 22.6827 71.5763 22.7894 71.8421 22.7846C72.1053 22.7888 72.3583 22.682 72.5391 22.4902C72.7269 22.3056 72.8313 22.0521 72.8281 21.7884V18.3678L73.9826 17.6088L78.3583 22.5336C78.5356 22.7044 78.774 22.7966 79.0196 22.7892C79.1529 22.7907 79.285 22.7649 79.4077 22.7132C79.5243 22.6648 79.6297 22.5926 79.7168 22.501C79.8068 22.4083 79.8796 22.3003 79.9316 22.1819C79.9843 22.0623 80.011 21.933 80.0105 21.8024C80.011 21.545 79.9131 21.2971 79.737 21.1099L75.6691 16.5165L79.6349 13.9356C79.8911 13.7582 80.0349 13.4585 80.0135 13.1471Z"
          fill="#4990DF"
        />
        <path
          d="M63.5869 15.1178C63.8926 14.8149 64.253 14.5731 64.6488 14.4051C65.0586 14.2303 65.5001 14.1418 65.9455 14.1449C66.3399 14.1413 66.7314 14.2117 67.1001 14.3525C67.4694 14.5014 67.8115 14.7108 68.1125 14.9722C68.2954 15.1182 68.523 15.196 68.757 15.1921C69.0232 15.2034 69.2823 15.1022 69.471 14.9133C69.6567 14.7236 69.7577 14.4664 69.7506 14.2007C69.7539 13.9122 69.6286 13.6373 69.409 13.4508C68.4605 12.5998 67.2263 12.1389 65.9532 12.1604C63.0244 12.1604 60.6504 14.5401 60.6504 17.4756C60.6429 20.4068 63.0078 22.789 65.9321 22.7964C67.2087 22.7996 68.4436 22.3404 69.4092 21.5034C69.6083 21.3135 69.7202 21.0493 69.7181 20.7738C69.7357 20.2461 69.323 19.8044 68.7965 19.7869C68.7757 19.7862 68.7546 19.7862 68.7336 19.7869C68.5083 19.788 68.2891 19.8606 68.1078 19.9945C67.8118 20.2558 67.4722 20.463 67.1045 20.6064C66.7357 20.7455 66.3443 20.8148 65.9502 20.811C65.5047 20.8141 65.0633 20.7255 64.6535 20.5507C64.2579 20.3822 63.8977 20.1405 63.5916 19.8381C62.2923 18.5437 62.286 16.4387 63.5776 15.1365C63.5823 15.1318 63.5869 15.1271 63.5916 15.1224"
          fill="#4990DF"
        />
        <path
          d="M99.6809 12.825C99.4893 12.6448 99.2617 12.5075 99.0132 12.4221C98.7291 12.3199 98.434 12.2513 98.1338 12.2177C97.8369 12.1811 97.538 12.1625 97.239 12.1619C96.6319 12.16 96.0294 12.2648 95.4586 12.4717C94.8992 12.6762 94.3769 12.9714 93.913 13.3455V13.1472C93.8912 12.5992 93.4305 12.1725 92.8839 12.1942C92.3675 12.2147 91.9535 12.6296 91.9331 13.1472V21.8024C91.9547 22.3505 92.4153 22.7771 92.9621 22.7555C93.4785 22.7351 93.8926 22.3201 93.913 21.8024V17.4755C93.9099 17.0286 93.9982 16.5857 94.1725 16.1743C94.3392 15.7797 94.5802 15.421 94.8821 15.1177C95.1858 14.8155 95.5439 14.5736 95.9376 14.4051C96.3481 14.2303 96.79 14.1418 97.2359 14.1449C97.6792 14.1405 98.1193 14.221 98.5326 14.3819C98.6631 14.4449 98.8052 14.4802 98.95 14.4857C99.083 14.4869 99.2151 14.4611 99.338 14.4098C99.4544 14.3604 99.5596 14.2877 99.6469 14.196C99.7352 14.1057 99.8074 14.001 99.8603 13.8862C99.9139 13.7636 99.9413 13.6312 99.9406 13.4973C99.9502 13.248 99.8537 13.0064 99.6748 12.8327"
          fill="#4990DF"
        />
        <path
          d="M90.4803 15.4431C89.6382 13.4699 87.7082 12.1858 85.567 12.1743C82.6391 12.1735 80.2651 14.5517 80.2642 17.4864V17.4879C80.2637 20.4243 82.6379 22.8052 85.5674 22.8057C86.8393 22.806 88.0688 22.3482 89.0323 21.5158C89.0461 21.5019 89.0677 21.4833 89.071 21.4786C89.1571 21.4085 89.2328 21.3261 89.2951 21.2339C89.6133 20.7744 89.4998 20.1434 89.0414 19.8241C88.6574 19.574 88.1525 19.6194 87.819 19.9342C87.7864 19.9636 87.6937 20.0504 87.6784 20.0627L87.6644 20.0751C87.3822 20.3157 87.0599 20.5044 86.7124 20.6328C86.3447 20.7627 85.9569 20.8267 85.5672 20.8218C85.2077 20.8236 84.8506 20.766 84.5098 20.6514C84.1782 20.5403 83.8656 20.3789 83.5824 20.1727C83.3007 19.966 83.0529 19.7161 82.8485 19.4322C82.6396 19.1423 82.4796 18.8199 82.3754 18.4779H89.8731C90.1361 18.4839 90.3904 18.3827 90.5777 18.1975C90.7707 18.0144 90.8759 17.7572 90.8667 17.4911C90.8728 16.7906 90.741 16.0957 90.4789 15.4462L90.4803 15.4431ZM82.3738 16.5042C82.4728 16.1619 82.6297 15.8392 82.8375 15.55C83.0431 15.2656 83.2925 15.0156 83.5763 14.8094C83.8632 14.6035 84.1794 14.4421 84.5145 14.3308C84.8534 14.2176 85.2082 14.1601 85.5653 14.1603C85.9206 14.1599 86.2735 14.2175 86.6103 14.3308C87.2787 14.5534 87.8611 14.9796 88.2763 15.55C88.4885 15.8388 88.6503 16.1615 88.7555 16.5042H82.3738Z"
          fill="#4990DF"
        />
        <path
          d="M35.5936 9.83345C35.4964 9.75596 34.5875 9.06816 32.6708 9.06816C32.165 9.07038 31.6598 9.11387 31.1608 9.19827C30.7898 6.64989 28.6879 5.40743 28.5938 5.35169L28.079 5.0542L27.7406 5.54378C27.3167 6.20141 27.0071 6.92638 26.8256 7.68783C26.4825 9.14254 26.6912 10.5089 27.4284 11.677C26.538 12.1742 25.1099 12.2966 24.821 12.3075H1.17681C0.559234 12.3083 0.0580961 12.8086 0.0547305 13.4275C0.0271518 15.5037 0.378088 17.5675 1.09026 19.5173C1.90476 21.6583 3.11651 23.2353 4.69299 24.2005C6.4596 25.285 9.32971 25.9047 12.5831 25.9047C14.0529 25.9091 15.5199 25.7759 16.9649 25.5065C18.9735 25.1368 20.9064 24.433 22.6835 23.4243C24.1477 22.5744 25.4657 21.4931 26.5861 20.2222C28.4594 18.0967 29.5753 15.7295 30.4053 13.6258H30.7359C32.7868 13.6258 34.0481 12.8032 34.7437 12.1138C35.2057 11.6742 35.5666 11.1386 35.8008 10.5445L35.9477 10.1138L35.5936 9.83345Z"
          fill="#4990DF"
        />
        <path
          d="M3.36842 11.6135H6.53686C6.68967 11.6135 6.81351 11.4893 6.81351 11.3362V8.50737C6.81435 8.35421 6.69116 8.22938 6.53842 8.22852C6.53791 8.22852 6.53735 8.22852 6.53686 8.22852H3.36842C3.21561 8.22852 3.0918 8.35268 3.0918 8.5058V11.3362C3.0918 11.4893 3.21561 11.6135 3.36842 11.6135Z"
          fill="#4990DF"
        />
        <path
          d="M7.73479 11.6135H10.9032C11.056 11.6135 11.1798 11.4893 11.1798 11.3362V8.50737C11.1807 8.35421 11.0575 8.22938 10.9047 8.22852C10.9042 8.22852 10.9037 8.22852 10.9032 8.22852H7.73474C7.58106 8.22852 7.45654 8.35334 7.45654 8.50737V11.3362C7.45746 11.4896 7.58172 11.6135 7.73479 11.6135Z"
          fill="#4990DF"
        />
        <path
          d="M12.1673 11.6135H15.3357C15.4885 11.6135 15.6124 11.4893 15.6124 11.3362V8.50737C15.6132 8.35421 15.4901 8.22938 15.3372 8.22852C15.3367 8.22852 15.3362 8.22852 15.3357 8.22852H12.1673C12.0144 8.22852 11.8906 8.35268 11.8906 8.5058V11.3362C11.8907 11.4893 12.0146 11.6135 12.1673 11.6135Z"
          fill="#4990DF"
        />
        <path
          d="M16.5476 11.6135H19.7161C19.8691 11.6135 19.9934 11.4896 19.9943 11.3362V8.50737C19.9943 8.35334 19.8697 8.22852 19.7161 8.22852H16.5476C16.3948 8.22852 16.271 8.35268 16.271 8.5058V11.3362C16.271 11.4893 16.3949 11.6135 16.5476 11.6135Z"
          fill="#4990DF"
        />
        <path
          d="M7.73474 7.54385H10.9032C11.0562 7.54301 11.1798 7.4184 11.1798 7.26502V4.43622C11.1798 4.28306 11.0559 4.15894 10.9032 4.15894H7.73474C7.58174 4.15894 7.45741 4.2828 7.45654 4.43622V7.26502C7.45741 7.41868 7.58144 7.54301 7.73474 7.54385Z"
          fill="#4990DF"
        />
        <path
          d="M12.1673 7.54385H15.3357C15.4887 7.54301 15.6123 7.4184 15.6123 7.26502V4.43622C15.6123 4.28306 15.4884 4.15894 15.3357 4.15894H12.1673C12.0145 4.15894 11.8906 4.2831 11.8906 4.43622V7.26502C11.8906 7.4184 12.0143 7.54301 12.1673 7.54385Z"
          fill="#4990DF"
        />
        <path
          d="M16.5476 7.54385H19.7161C19.8694 7.54301 19.9934 7.41868 19.9943 7.26502V4.43622C19.9934 4.2828 19.8691 4.15894 19.7161 4.15894H16.5476C16.3948 4.15894 16.271 4.2831 16.271 4.43622V7.26502C16.271 7.4184 16.3946 7.54301 16.5476 7.54385Z"
          fill="#4990DF"
        />
        <path
          d="M16.5476 3.47262H19.7161C19.8691 3.47262 19.9934 3.34871 19.9943 3.19534V0.36493C19.9934 0.211511 19.8691 0.0876465 19.7161 0.0876465H16.5476C16.3948 0.0876465 16.271 0.211762 16.271 0.36493V3.19529C16.271 3.34845 16.3949 3.47262 16.5476 3.47262Z"
          fill="#4990DF"
        />
        <path
          d="M20.9666 11.6135H24.135C24.288 11.6135 24.4123 11.4896 24.4132 11.3362V8.50737C24.4132 8.35334 24.2887 8.22852 24.135 8.22852H20.9666C20.8138 8.22852 20.6899 8.35268 20.6899 8.5058V11.3362C20.6899 11.4893 20.8138 11.6135 20.9666 11.6135Z"
          fill="#4990DF"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_2714">
          <rect width="100" height="25.9953" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
