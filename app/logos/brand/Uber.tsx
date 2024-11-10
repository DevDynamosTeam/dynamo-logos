import React from "react";

export default function Uber({
  width = "87",
  height = "30",
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
      viewBox='0 0 87 30'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_401_292)">
        <path
          d="M4.97189 21.4256C5.33708 22.3948 5.84268 23.2234 6.48878 23.9116C7.13488 24.5998 7.90032 25.1265 8.78509 25.4917C9.66996 25.8568 10.632 26.0394 11.6714 26.0394C12.6827 26.0394 13.6307 25.8498 14.5155 25.4705C15.4004 25.0912 16.1728 24.5576 16.8329 23.8694C17.493 23.1812 18.0057 22.3596 18.3709 21.4045C18.736 20.4495 18.9186 19.3821 18.9186 18.2023V0H23.3427V29.4944H18.9607V26.7556C17.9776 27.7949 16.8188 28.5955 15.4846 29.1574C14.1502 29.7191 12.7107 30 11.1658 30C9.59267 30 8.12501 29.7261 6.7626 29.1783C5.40029 28.6306 4.22044 27.8512 3.22332 26.8399C2.2262 25.8286 1.4396 24.6139 0.863797 23.1953C0.287901 21.7767 0 20.1967 0 18.455V0H4.42415V18.2023C4.42415 19.3821 4.6067 20.4565 4.97189 21.4256Z"
          fill="#010202"
        />
        <path
          d="M30.969 0V10.7444C31.9521 9.76123 33.0898 8.98181 34.3819 8.40592C35.674 7.83002 37.0786 7.54212 38.5954 7.54212C40.1685 7.54212 41.643 7.83701 43.0195 8.42689C44.3959 9.01677 45.5896 9.81736 46.6009 10.8286C47.6122 11.8399 48.4128 13.0337 49.0027 14.4101C49.5926 15.7866 49.8875 17.2472 49.8875 18.7922C49.8875 20.337 49.5926 21.7907 49.0027 23.153C48.4128 24.5154 47.6122 25.7023 46.6009 26.7134C45.5896 27.7247 44.3959 28.5253 43.0195 29.1151C41.643 29.705 40.1684 29.9999 38.5954 29.9999C37.0785 29.9999 35.667 29.712 34.3608 29.1361C33.0547 28.5603 31.91 27.7808 30.9268 26.7977V29.4943H26.7134V0H30.969ZM31.4535 21.6994C31.8327 22.5984 32.3594 23.3849 33.0336 24.0591C33.7078 24.7332 34.4943 25.267 35.3931 25.6602C36.2921 26.0535 37.2611 26.2501 38.3005 26.2501C39.3118 26.2501 40.2667 26.0535 41.1656 25.6602C42.0644 25.267 42.8439 24.7333 43.5041 24.0591C44.1642 23.385 44.6909 22.5984 45.0841 21.6994C45.4774 20.8006 45.674 19.8315 45.674 18.7922C45.674 17.7528 45.4774 16.7767 45.0841 15.8638C44.6909 14.9508 44.1642 14.1573 43.5041 13.4832C42.844 12.8091 42.0645 12.2823 41.1656 11.9032C40.2666 11.524 39.3117 11.3342 38.3005 11.3342C37.2893 11.3342 36.3342 11.5239 35.4354 11.9032C34.5365 12.2824 33.75 12.8091 33.0757 13.4832C32.4017 14.1573 31.8679 14.9508 31.4747 15.8638C31.0814 16.7767 30.8848 17.7528 30.8848 18.7922C30.8847 19.8315 31.0743 20.8006 31.4535 21.6994Z"
          fill="#010202"
        />
        <path
          d="M52.2883 14.4523C52.8501 13.104 53.6227 11.9173 54.6057 10.892C55.5888 9.86671 56.7546 9.05913 58.103 8.46925C59.4513 7.87937 60.912 7.58447 62.485 7.58447C64.0299 7.58447 65.4625 7.86538 66.7828 8.42711C68.103 8.98892 69.2406 9.76844 70.1957 10.7657C71.1507 11.7628 71.8952 12.9426 72.4288 14.3049C72.9625 15.6673 73.2293 17.1491 73.2293 18.7502V20.1407H55.7434C55.8839 21.0115 56.1648 21.8191 56.5862 22.5634C57.0076 23.3077 57.5342 23.9538 58.1662 24.5016C58.7982 25.0494 59.5145 25.4778 60.3151 25.7867C61.1157 26.0956 61.9653 26.2502 62.8642 26.2502C65.4205 26.2502 67.4851 25.1968 69.0581 23.09L72.1339 25.3653C71.0665 26.7979 69.7464 27.9215 68.1734 28.7361C66.6002 29.5506 64.8306 29.958 62.8643 29.958C61.2632 29.958 59.7674 29.677 58.377 29.1153C56.9865 28.5535 55.7787 27.7669 54.7534 26.7556C53.7281 25.7443 52.9206 24.5576 52.3307 23.1953C51.7408 21.833 51.4458 20.3511 51.4458 18.7501C51.4456 17.2333 51.7266 15.8007 52.2883 14.4523ZM58.2083 12.788C57.0145 13.7852 56.221 15.1124 55.8277 16.7697H68.9317C68.5665 15.1124 67.787 13.7852 66.5932 12.788C65.3993 11.7908 64.0019 11.2922 62.4008 11.2922C60.7996 11.2922 59.4021 11.7908 58.2083 12.788Z"
          fill="#010202"
        />
        <path
          d="M81.1929 13.2724C80.294 14.2555 79.8445 15.5897 79.8445 17.2752V29.4944H75.5889V8.00557H79.8023V10.6601C80.3361 9.78929 81.0313 9.10105 81.888 8.59545C82.7447 8.08976 83.763 7.83691 84.9429 7.83691H86.4175V11.7976H84.6479C83.2434 11.7977 82.0917 12.2892 81.1929 13.2724Z"
          fill="#010202"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_292">
          <rect width='87' height='30' fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
