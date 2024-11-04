import React from "react";

export default function Postman({
  width = "100",
  height = "31",
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
      viewBox='0 0 100 31'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_401_1254)">
        <path
          d="M35.3032 19.6363V10.8636C35.3032 10.7576 35.3487 10.6667 35.4244 10.5909C35.5153 10.5151 35.6214 10.4697 35.7426 10.4848H38.2123C38.9396 10.4545 39.6669 10.697 40.2275 11.1667C40.7275 11.6212 40.985 12.3333 40.985 13.303V13.4242C40.985 14.3939 40.7275 15.1212 40.2123 15.5757C39.6366 16.0454 38.9093 16.303 38.1669 16.2575H36.4093V19.6363C36.4093 19.7575 36.3487 19.8636 36.2426 19.9242C36.0002 20.0606 35.7123 20.0606 35.4699 19.9242C35.3638 19.8636 35.3032 19.7575 35.3032 19.6363ZM36.3941 15.3485H38.1669C38.6366 15.3788 39.1063 15.2121 39.4396 14.8788C39.7729 14.5 39.9396 14 39.8941 13.4848V13.3333C39.9396 12.8333 39.7729 12.3333 39.4396 11.9394C39.0911 11.6212 38.6366 11.4545 38.1669 11.4848H36.4093L36.3941 15.3485Z"
          fill="#FF6C37"
        />
        <path
          d="M44.8032 17.2576V13.3333C44.8032 12.3485 45.0608 11.6364 45.5608 11.1818C46.7729 10.2727 48.4396 10.2727 49.6517 11.1818C50.1669 11.6364 50.4244 12.3636 50.4244 13.3333V17.2576C50.4244 18.2424 50.1669 18.9545 49.6517 19.4091C48.4396 20.3333 46.7729 20.3333 45.5608 19.4091C45.0608 18.9545 44.8032 18.2424 44.8032 17.2576ZM45.9093 17.2576C45.9093 18.4848 46.4699 19.1061 47.6214 19.1061C48.0911 19.1364 48.5456 18.9697 48.8941 18.6515C49.2275 18.2727 49.379 17.7727 49.3487 17.2576V13.3182C49.3941 12.8182 49.2275 12.3182 48.8941 11.9242C48.5456 11.6061 48.0911 11.4394 47.6214 11.4697C46.485 11.4697 45.9244 12.0758 45.9244 13.3182L45.9093 17.2576Z"
          fill="#FF6C37"
        />
        <path
          d="M54.3032 18.6819C54.3032 18.5303 54.3638 18.394 54.4547 18.2728C54.5305 18.1667 54.6366 18.091 54.7729 18.0758C54.8941 18.091 55.0002 18.1516 55.076 18.2425C55.1972 18.3485 55.3184 18.4697 55.4547 18.6061C55.6366 18.7728 55.8487 18.894 56.076 18.9697C56.379 19.091 56.7123 19.1364 57.0305 19.1364C57.5153 19.1667 57.985 19.0152 58.3638 18.7273C58.6972 18.4243 58.879 17.9697 58.8487 17.5152C58.8638 17.0758 58.7123 16.6667 58.4093 16.3485C58.1063 16.0455 57.7426 15.8182 57.3335 15.6667C56.9093 15.5152 56.5002 15.3485 56.0608 15.1667C55.6366 14.9849 55.2729 14.7122 54.985 14.3485C54.682 13.9394 54.5153 13.4394 54.5456 12.9243C54.5305 12.5152 54.6214 12.1061 54.8032 11.7273C54.9547 11.4091 55.1972 11.1515 55.5002 10.9697C55.7881 10.8031 56.0911 10.6818 56.4093 10.5909C56.7426 10.5152 57.0759 10.4697 57.4093 10.4697C57.9396 10.4697 58.4547 10.5455 58.9547 10.697C59.4396 10.8637 59.6972 11.0758 59.6972 11.3334C59.6972 11.4697 59.6517 11.6061 59.5608 11.7273C59.5002 11.8485 59.3638 11.9394 59.2275 11.9394C59.0305 11.8788 58.8335 11.8031 58.6366 11.7122C58.2578 11.5455 57.8487 11.4546 57.4244 11.4697C56.985 11.4546 56.5305 11.5606 56.1517 11.7879C55.8184 12.0152 55.6366 12.4091 55.6669 12.8182C55.6517 13.197 55.8032 13.5606 56.0911 13.8031C56.4093 14.0606 56.7729 14.2728 57.1669 14.394C57.5911 14.5455 58.0153 14.7121 58.4396 14.9091C58.8638 15.1212 59.2275 15.4394 59.5002 15.8334C59.8032 16.3182 59.9547 16.8788 59.9396 17.4546C59.9396 18.3485 59.682 19.0303 59.1517 19.4849C58.576 19.9697 57.8335 20.2122 57.076 20.1667C56.3941 20.1819 55.7123 20.0152 55.1214 19.6819C54.5759 19.3182 54.3032 19 54.3032 18.6819Z"
          fill="#FF6C37"
        />
        <path
          d="M63.1968 10.9697C63.1968 10.8485 63.2271 10.7273 63.3028 10.6364C63.3634 10.5303 63.4695 10.4849 63.5907 10.4849H68.8937C69.015 10.4849 69.121 10.5303 69.1816 10.6364C69.2574 10.7273 69.2877 10.8485 69.2877 10.9697C69.2877 11.0909 69.2574 11.2273 69.1816 11.3333C69.121 11.4394 69.015 11.4849 68.8937 11.4849H66.818V19.6364C66.818 19.7576 66.7574 19.8637 66.6513 19.9243C66.4089 20.0606 66.121 20.0606 65.8786 19.9243C65.7725 19.8637 65.7119 19.7576 65.7119 19.6364V11.4849H63.6059C63.4847 11.4849 63.3786 11.4394 63.318 11.3333C63.2422 11.2273 63.1968 11.1061 63.1968 10.9697Z"
          fill="#FF6C37"
        />
        <path
          d="M73.0153 19.6363V11.0453C72.9698 10.7878 73.1516 10.5453 73.4092 10.4999C73.4698 10.4847 73.5304 10.4847 73.5759 10.4999C73.9244 10.4999 74.2122 10.7272 74.4547 11.1969L76.5001 15.1211L78.5607 11.1969C78.8183 10.7423 79.1062 10.4999 79.4395 10.4999C79.6971 10.4544 79.9395 10.6363 79.985 10.8938C80.0001 10.9393 80.0001 10.9847 79.985 11.0302V19.6211C79.985 19.7423 79.9244 19.8484 79.8183 19.909C79.5759 20.0454 79.288 20.0454 79.0456 19.909C78.9395 19.8484 78.8789 19.7423 78.8789 19.6211V12.7878L76.9092 16.4848C76.8486 16.6666 76.6819 16.8029 76.485 16.8029C76.3032 16.7878 76.1365 16.6666 76.0759 16.4848L74.1062 12.712V19.6211C74.1062 19.7423 74.0456 19.8484 73.9395 19.909C73.8335 19.9848 73.6971 20.0302 73.5759 20.0302C73.4395 20.0302 73.3032 19.9999 73.1971 19.9241C73.0759 19.8787 73.0001 19.7575 73.0153 19.6363Z"
          fill="#FF6C37"
        />
        <path
          d="M83.7271 19.5758C83.7271 19.5455 83.7422 19.5 83.7574 19.4697L86.424 10.8788C86.4998 10.6212 86.7271 10.5 87.0907 10.5C87.4543 10.5 87.6816 10.6212 87.7574 10.8788L90.4392 19.5152V19.5606V19.5909C90.4392 19.7273 90.3483 19.8485 90.2271 19.9091C90.0907 20 89.924 20.0455 89.7422 20.0303C89.5755 20.0455 89.4089 19.9545 89.3483 19.7879L88.7725 17.8788H85.3483L84.7725 19.7879C84.7271 19.9545 84.5452 20.0606 84.3786 20.0455C84.2271 20.0455 84.0755 20 83.9392 19.9091C83.8028 19.8485 83.7271 19.7273 83.7271 19.5758ZM85.621 16.9697H88.5452L87.0907 12.0909L85.621 16.9697Z"
          fill="#FF6C37"
        />
        <path
          d="M94.2119 19.6364V10.8637C94.2119 10.6061 94.3937 10.4849 94.7574 10.4849C94.924 10.4849 95.0907 10.5455 95.2271 10.6515C95.3786 10.803 95.5149 10.9849 95.5907 11.1818L98.8483 17.5455V10.8637C98.8483 10.7424 98.9089 10.6364 99.0149 10.5909C99.2574 10.4546 99.5452 10.4546 99.7877 10.5909C99.8937 10.6515 99.9543 10.7576 99.9543 10.8637V19.6364C99.9543 19.7576 99.8937 19.8637 99.7877 19.9243C99.6665 20 99.5452 20.0303 99.4089 20.0303C99.1059 20.0152 98.8331 19.8182 98.7271 19.5303L95.3028 12.9697V19.6364C95.3028 19.7576 95.2422 19.8637 95.1513 19.9243C94.9089 20.0606 94.621 20.0606 94.3786 19.9243C94.2725 19.8637 94.2119 19.7576 94.2119 19.6364Z"
          fill="#FF6C37"
        />
        <path
          d="M30.2578 17.2272C31.3184 8.92415 25.4548 1.33323 17.1669 0.272625C8.87901 -0.787982 1.25779 5.07566 0.197185 13.3635C-0.863421 21.6514 5.00022 29.2575 13.2881 30.3332C21.5911 31.3938 29.182 25.5302 30.2578 17.2272Z"
          fill="#FF6C37"
        />
        <path
          d="M20.697 9.87889L14.303 16.2728L12.5 14.4698C18.7879 8.18192 19.4091 8.72738 20.697 9.87889Z"
          fill="white"
        />
        <path
          d="M14.3032 16.4242C14.2577 16.4242 14.2274 16.409 14.1971 16.3787L12.379 14.5757C12.3183 14.5151 12.3183 14.4242 12.379 14.3636C18.7729 7.96965 19.4396 8.57571 20.7881 9.78783C20.8184 9.81813 20.8335 9.84843 20.8335 9.89389C20.8335 9.93934 20.8184 9.96965 20.7881 9.99995L14.3941 16.3787C14.379 16.409 14.3335 16.4242 14.3032 16.4242ZM12.7123 14.4696L14.3032 16.0606L20.4699 9.89389C19.3487 8.89389 18.5911 8.59086 12.7123 14.4696Z"
          fill="#FF6C37"
        />
        <path
          d="M16.1365 18.1061L14.394 16.3637L20.788 9.96973C22.5001 11.697 19.9395 14.5 16.1365 18.1061Z"
          fill="white"
        />
        <path
          d="M16.1366 18.2575C16.0911 18.2575 16.0608 18.2424 16.0305 18.2121L14.2881 16.4696C14.2578 16.4393 14.2578 16.409 14.2578 16.3636C14.2578 16.3181 14.273 16.2878 14.3033 16.2575L20.6972 9.86357C20.7578 9.80296 20.8487 9.80296 20.9093 9.86357C21.3033 10.2272 21.5154 10.7424 21.5002 11.2727C21.4699 12.9545 19.5608 15.0908 16.2578 18.2121C16.2123 18.2424 16.1669 18.2575 16.1366 18.2575ZM14.6063 16.3636C15.576 17.3484 15.9851 17.7424 16.1366 17.8939C18.682 15.4696 21.1517 12.9848 21.1669 11.2727C21.182 10.8787 21.0305 10.4848 20.773 10.1818L14.6063 16.3636Z"
          fill="#FF6C37"
        />
        <path
          d="M12.5305 14.5151L13.8184 15.8029C13.8487 15.8333 13.8487 15.8636 13.8184 15.8939C13.8032 15.909 13.8032 15.909 13.7881 15.909L11.1214 16.4848C10.985 16.4999 10.8638 16.409 10.8335 16.2726C10.8184 16.1969 10.8487 16.1211 10.8941 16.0757L12.4396 14.5302C12.4699 14.4999 12.5153 14.4847 12.5305 14.5151Z"
          fill="white"
        />
        <path
          d="M11.0756 16.6364C10.8483 16.6364 10.6816 16.4546 10.6816 16.2273C10.6816 16.1212 10.7271 16.0152 10.8029 15.9394L12.3483 14.394C12.4392 14.3182 12.5604 14.3182 12.6513 14.394L13.9392 15.6819C14.0301 15.7576 14.0301 15.894 13.9392 15.9849C13.9089 16.0152 13.8786 16.0303 13.8332 16.0455L11.1665 16.6212C11.1362 16.6212 11.1059 16.6364 11.0756 16.6364ZM12.4847 14.6819L10.9998 16.1667C10.9695 16.197 10.9544 16.2425 10.9847 16.2879C10.9998 16.3334 11.0453 16.3485 11.0907 16.3334L13.5907 15.7879L12.4847 14.6819Z"
          fill="#FF6C37"
        />
        <path
          d="M24.0758 6.33343C23.1061 5.39404 21.5455 5.42434 20.6061 6.40919C19.6667 7.39404 19.697 8.93948 20.6819 9.87887C21.4849 10.6516 22.697 10.788 23.6516 10.2122L21.9243 8.48493L24.0758 6.33343Z"
          fill="white"
        />
        <path
          d="M22.379 10.7121C20.9396 10.7121 19.7729 9.54545 19.7729 8.10606C19.7729 6.66667 20.9396 5.5 22.379 5.5C23.0457 5.5 23.6972 5.75758 24.182 6.22727C24.2123 6.25758 24.2275 6.28788 24.2275 6.33333C24.2275 6.37879 24.2123 6.40909 24.182 6.43939L22.1366 8.48485L23.7426 10.0909C23.8033 10.1515 23.8033 10.2424 23.7426 10.303C23.7275 10.3182 23.7275 10.3182 23.7123 10.3333C23.3184 10.5758 22.8487 10.7121 22.379 10.7121ZM22.379 5.81818C21.1063 5.81818 20.076 6.84848 20.0911 8.12121C20.0911 9.39394 21.1214 10.4242 22.3942 10.4091C22.7426 10.4091 23.0911 10.3333 23.4093 10.1667L21.8184 8.59091C21.7881 8.56061 21.7729 8.5303 21.7729 8.48485C21.7729 8.43939 21.7881 8.40909 21.8184 8.37879L23.8487 6.34849C23.4396 6 22.9245 5.81818 22.379 5.81818Z"
          fill="#FF6C37"
        />
        <path
          d="M24.1213 6.37869L24.091 6.34839L21.9243 8.48475L23.6364 10.1969C23.8031 10.0908 23.9698 9.9696 24.1061 9.83324C25.0758 8.87869 25.0758 7.33324 24.1213 6.37869Z"
          fill="white"
        />
        <path
          d="M23.6517 10.3637C23.6063 10.3637 23.576 10.3486 23.5457 10.3182L21.8184 8.59098C21.7881 8.56067 21.7729 8.53038 21.7729 8.48493C21.7729 8.43948 21.7881 8.40917 21.8184 8.37887L23.9699 6.22734C24.0305 6.16673 24.1214 6.16673 24.182 6.22734L24.2275 6.25766C25.2426 7.27281 25.2426 8.90916 24.2426 9.93946C24.0911 10.091 23.9245 10.2273 23.7426 10.3334C23.6972 10.3486 23.6669 10.3637 23.6517 10.3637ZM22.1366 8.48493L23.6669 10.0152C23.7881 9.93946 23.9093 9.83342 24.0002 9.74251C24.8639 8.87887 24.9093 7.46978 24.076 6.56069L22.1366 8.48493Z"
          fill="#FF6C37"
        />
        <path
          d="M20.9546 10.1516C20.591 9.788 20.0001 9.788 19.6365 10.1516L13.9243 15.8638L14.8789 16.8183L20.9243 11.5153C21.3183 11.1819 21.3486 10.591 21.0152 10.1971C20.9849 10.1819 20.9698 10.1668 20.9546 10.1516Z"
          fill="white"
        />
        <path
          d="M14.8639 16.9697C14.8184 16.9697 14.7881 16.9546 14.7578 16.9243L13.8033 15.9697C13.7427 15.9091 13.7427 15.8182 13.8033 15.7576L19.5154 10.0455C19.9396 9.62123 20.6214 9.62123 21.0457 10.0455C21.4699 10.4697 21.4699 11.1515 21.0457 11.5758C21.0305 11.5909 21.0154 11.6061 21.0002 11.6212L14.9548 16.9243C14.9396 16.9546 14.9093 16.9697 14.8639 16.9697ZM14.1366 15.8637L14.879 16.6061L20.8184 11.3939C21.1518 11.1212 21.1821 10.6212 20.9093 10.2879C20.6366 9.95455 20.1366 9.92426 19.8033 10.197C19.7881 10.2121 19.773 10.2273 19.7427 10.2424L14.1366 15.8637Z"
          fill="#FF6C37"
        />
        <path
          d="M9.54542 22.3636C9.48482 22.3939 9.45452 22.4545 9.46967 22.5151L9.72724 23.606C9.78785 23.7575 9.69694 23.9393 9.53027 23.9848C9.40906 24.0303 9.2727 23.9848 9.19694 23.8939L7.53027 22.2424L12.9697 16.803L14.8485 16.8333L16.1212 18.106C15.8182 18.3636 13.9848 20.1363 9.54542 22.3636Z"
          fill="white"
        />
        <path
          d="M9.42433 24.1365C9.30312 24.1365 9.18191 24.091 9.10615 24.0001L7.45463 22.3486C7.42433 22.3183 7.40918 22.288 7.40918 22.2425C7.40918 22.1971 7.42433 22.1668 7.45463 22.1365L12.894 16.6971C12.9243 16.6668 12.9698 16.6516 13.0001 16.6516L14.8789 16.6819C14.9243 16.6819 14.9546 16.6971 14.9849 16.7274L16.2577 18.0001C16.288 18.0304 16.3031 18.0759 16.3031 18.1213C16.3031 18.1668 16.288 18.1971 16.2425 18.2274L16.1365 18.3183C14.5304 19.7274 12.3486 21.1365 9.63645 22.4849L9.89403 23.5607C9.93948 23.7577 9.84857 23.9698 9.66676 24.0759C9.57585 24.1213 9.50009 24.1365 9.42433 24.1365ZM7.75766 22.2425L9.31827 23.788C9.36373 23.8637 9.45463 23.894 9.53039 23.8486C9.60615 23.8031 9.63645 23.7122 9.591 23.6365L9.33342 22.5456C9.30312 22.4092 9.36373 22.288 9.48494 22.2274C12.1668 20.8789 14.3334 19.4849 15.9243 18.1062L14.8031 16.9849L13.0607 16.9546L7.75766 22.2425Z"
          fill="#FF6C37"
        />
        <path
          d="M6.24243 23.5455L7.54546 22.2424L9.48485 24.1818L6.39394 23.9697C6.25758 23.9546 6.16667 23.8333 6.18182 23.697C6.18182 23.6364 6.19697 23.5758 6.24243 23.5455Z"
          fill="white"
        />
        <path
          d="M9.4849 24.3181L6.37884 24.106C6.15157 24.0908 6.00005 23.8939 6.0152 23.6666C6.03035 23.5757 6.06066 23.4848 6.13641 23.4242L7.43944 22.1211C7.50005 22.0605 7.59096 22.0605 7.65157 22.1211L9.59096 24.0605C9.63641 24.106 9.65157 24.1666 9.62126 24.2272C9.59096 24.2878 9.5455 24.3181 9.4849 24.3181ZM7.5455 22.4545L6.34854 23.6514C6.30308 23.6817 6.30308 23.7575 6.34854 23.7878C6.36369 23.803 6.37884 23.8181 6.40914 23.8181L9.09096 23.9999L7.5455 22.4545Z"
          fill="#FF6C37"
        />
        <path
          d="M12.4396 17.5C12.3487 17.5 12.2881 17.4243 12.2881 17.3485C12.2881 17.3031 12.3032 17.2728 12.3335 17.2424L13.8032 15.7727C13.8638 15.7121 13.9548 15.7121 14.0154 15.7727L14.9699 16.7273C15.0154 16.7727 15.0305 16.8182 15.0154 16.8788C15.0002 16.9243 14.9548 16.9697 14.8941 16.9849L12.4699 17.5C12.4548 17.5 12.4396 17.5 12.4396 17.5ZM13.9093 16.0909L12.9093 17.0909L14.5457 16.7424L13.9093 16.0909Z"
          fill="#FF6C37"
        />
        <path
          d="M14.8487 16.8334L13.182 17.1971C13.0608 17.2274 12.9396 17.1516 12.9093 17.0304C12.8941 16.9546 12.9093 16.8789 12.9699 16.8183L13.8941 15.894L14.8487 16.8334Z"
          fill="white"
        />
        <path
          d="M13.1517 17.3485C12.9396 17.3485 12.7729 17.1818 12.7729 16.9697C12.7729 16.8637 12.8184 16.7727 12.879 16.697L13.8033 15.7727C13.8639 15.7121 13.9548 15.7121 14.0154 15.7727L14.9699 16.7273C15.0154 16.7728 15.0305 16.8182 15.0154 16.8788C15.0002 16.9243 14.9548 16.9697 14.8942 16.9849L13.2275 17.3485C13.1972 17.3485 13.1669 17.3485 13.1517 17.3485ZM13.9093 16.0909L13.0911 16.9091C13.0608 16.9394 13.0608 16.9697 13.076 17C13.0911 17.0303 13.1214 17.0455 13.1669 17.0455L14.5608 16.7424L13.9093 16.0909Z"
          fill="#FF6C37"
        />
        <path
          d="M24.1361 7.83343C24.1058 7.74252 23.9998 7.69706 23.9088 7.72737C23.8179 7.75767 23.7725 7.86373 23.8028 7.95464C23.8028 7.96979 23.8179 7.98494 23.8179 8.00009C23.9088 8.18191 23.8785 8.40918 23.7573 8.57585C23.6967 8.65161 23.7119 8.75767 23.7725 8.81828C23.8482 8.87888 23.9543 8.86373 24.0149 8.78797C24.2422 8.50009 24.2876 8.13646 24.1361 7.83343Z"
          fill="#FF6C37"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_1254">
          <rect width='100' height='31' fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
