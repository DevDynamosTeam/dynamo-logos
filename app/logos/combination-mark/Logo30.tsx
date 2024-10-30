export default function Logo30({
  fill = "black",
  width = "280",
  height = "53",
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
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.4818 0H5.08448C2.27664 0 0 2.24625 0 5.0541V20.5958C0 22.7814 1.3661 24.5876 3.23294 25.3313V28.5338C3.21776 29.8846 4.82658 30.856 5.9649 30.1275L13.842 25.6956H33.4818C36.2896 25.6956 38.5359 23.4037 38.5359 20.5958V5.0541C38.5359 2.24625 36.2896 0 33.4818 0Z"
        fill={fill}
      />
      <path
        d="M54.8265 22.0308H42.549C40.1608 22.0461 40.1608 25.6589 42.549 25.6742H54.8265C55.6072 25.6742 56.2502 26.3173 56.2502 27.098V42.6362C56.2502 43.4323 55.6072 44.0599 54.8265 44.0599C53.8161 44.0599 53.0047 44.8865 53.0047 45.8969V47.443C52.3924 47.2134 47.1262 43.8456 46.5292 44.0599H26.4291C25.6483 44.0599 25.0052 43.4323 25.0052 42.6362V30.2363C25.0052 27.8634 21.3618 27.8481 21.3618 30.2363V42.6362C21.3618 45.4377 23.6276 47.7185 26.4291 47.7185H46.0546L53.9385 52.1734C55.0866 52.8623 56.6941 51.9284 56.6481 50.5813V47.3819C58.5464 46.6471 59.8936 44.7947 59.8936 42.6362V27.098C59.8936 24.2965 57.628 22.0308 54.8265 22.0308Z"
        fill={fill}
      />
      <path
        d="M34.4832 33.3049C33.7673 34.0208 33.7673 35.1784 34.4832 35.8791C35.3058 36.4884 38.0018 40.0375 39.1899 39.8395C40.18 40.2812 45.1609 34.3711 46.7298 33.0459C47.4458 32.3453 47.4458 31.1876 46.7298 30.4716C46.0292 29.7557 44.8716 29.7557 44.1557 30.4716L39.1899 35.4221C38.0475 34.4168 36.2045 31.5684 34.4832 33.3049Z"
        fill={fill}
      />
      <path
        d="M77.4231 33.0471H64.4458C62.0695 33.0625 62.0695 36.6888 64.4458 36.7042H77.4231C79.8149 36.6888 79.8149 33.0625 77.4231 33.0471Z"
        fill={fill}
      />
      <path
        d="M64.447 30.3233H70.9406C71.9407 30.3233 72.7562 29.4923 72.7562 28.4922C72.7562 27.492 71.9407 26.6611 70.9406 26.6611H64.447C62.0619 26.6765 62.0619 30.3079 64.447 30.3233Z"
        fill={fill}
      />
      <path
        d="M67.6961 39.4324H64.4529C62.0704 39.4478 62.0704 43.0754 64.4529 43.0907H67.6961C70.0787 43.0754 70.0787 39.4478 67.6961 39.4324Z"
        fill={fill}
      />
      <path
        d="M21.4737 10.4101C21.7699 9.88386 22.0169 9.409 22.1692 9.04757C22.9088 7.29253 22.1775 5.27377 20.3897 4.45029C18.6019 3.62681 16.8067 4.48068 16.0188 6.12933C14.5122 5.0955 12.5024 5.24733 11.394 6.86067C10.2857 8.474 10.6335 10.5817 12.1516 11.7318C12.8405 12.2538 14.2031 13.023 15.486 13.7075M22.0691 11.8553C21.7348 10.0589 20.2063 8.7451 18.2817 9.10218C16.3572 9.45926 15.1128 11.1956 15.373 13.0822C15.582 14.598 16.7358 18.1545 17.1814 19.4941C17.2422 19.6769 17.2726 19.7683 17.3327 19.832C17.3852 19.8876 17.4549 19.9278 17.5292 19.9455C17.6145 19.9657 17.7088 19.9463 17.8976 19.9076C19.2805 19.6236 22.9373 18.8446 24.3546 18.2677C26.1185 17.5497 27.0289 15.6051 26.347 13.7587C25.6652 11.9122 23.792 11.2466 22.0691 11.8553Z"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M92.1136 1.45454H100.636L115.455 37.6364H116L130.818 1.45454H139.341V48H132.659V14.3182H132.227L118.5 47.9318H112.955L99.2273 14.2955H98.7955V48H92.1136V1.45454ZM159.165 48.7727C156.953 48.7727 154.953 48.3636 153.165 47.5455C151.377 46.7121 149.96 45.5076 148.915 43.9318C147.884 42.3561 147.369 40.4242 147.369 38.1364C147.369 36.1667 147.748 34.5455 148.506 33.2727C149.263 32 150.286 30.9924 151.574 30.25C152.862 29.5076 154.301 28.947 155.892 28.5682C157.483 28.1894 159.104 27.9015 160.756 27.7045C162.847 27.4621 164.544 27.2652 165.847 27.1136C167.15 26.947 168.097 26.6818 168.688 26.3182C169.278 25.9545 169.574 25.3636 169.574 24.5455V24.3864C169.574 22.4015 169.013 20.8636 167.892 19.7727C166.786 18.6818 165.134 18.1364 162.938 18.1364C160.65 18.1364 158.847 18.6439 157.528 19.6591C156.225 20.6591 155.324 21.7727 154.824 23L148.438 21.5455C149.195 19.4242 150.301 17.7121 151.756 16.4091C153.225 15.0909 154.915 14.1364 156.824 13.5455C158.733 12.9394 160.741 12.6364 162.847 12.6364C164.241 12.6364 165.718 12.803 167.278 13.1364C168.854 13.4545 170.324 14.0455 171.688 14.9091C173.066 15.7727 174.195 17.0076 175.074 18.6136C175.953 20.2045 176.392 22.2727 176.392 24.8182V48H169.756V43.2273H169.483C169.044 44.1061 168.384 44.9697 167.506 45.8182C166.627 46.6667 165.498 47.3712 164.119 47.9318C162.741 48.4924 161.089 48.7727 159.165 48.7727ZM160.642 43.3182C162.521 43.3182 164.127 42.947 165.46 42.2045C166.809 41.4621 167.831 40.4924 168.528 39.2955C169.241 38.0833 169.597 36.7879 169.597 35.4091V30.9091C169.354 31.1515 168.884 31.3788 168.188 31.5909C167.506 31.7879 166.725 31.9621 165.847 32.1136C164.968 32.25 164.112 32.3788 163.278 32.5C162.445 32.6061 161.748 32.697 161.188 32.7727C159.869 32.9394 158.665 33.2197 157.574 33.6136C156.498 34.0076 155.634 34.5758 154.983 35.3182C154.347 36.0455 154.028 37.0152 154.028 38.2273C154.028 39.9091 154.65 41.1818 155.892 42.0455C157.134 42.8939 158.718 43.3182 160.642 43.3182ZM201.739 13.0909V18.5455H182.67V13.0909H201.739ZM187.784 4.72727H194.58V37.75C194.58 39.0682 194.777 40.0606 195.17 40.7273C195.564 41.3788 196.072 41.8258 196.693 42.0682C197.33 42.2955 198.019 42.4091 198.761 42.4091C199.307 42.4091 199.784 42.3712 200.193 42.2955C200.602 42.2197 200.92 42.1591 201.148 42.1136L202.375 47.7273C201.981 47.8788 201.42 48.0303 200.693 48.1818C199.966 48.3485 199.057 48.4394 197.966 48.4545C196.178 48.4848 194.511 48.1667 192.966 47.5C191.42 46.8333 190.17 45.803 189.216 44.4091C188.261 43.0152 187.784 41.2652 187.784 39.1591V4.72727ZM223.585 48.7045C220.206 48.7045 217.297 47.9394 214.858 46.4091C212.434 44.8636 210.57 42.7348 209.267 40.0227C207.964 37.3106 207.312 34.2045 207.312 30.7045C207.312 27.1591 207.979 24.0303 209.312 21.3182C210.646 18.5909 212.525 16.4621 214.949 14.9318C217.373 13.4015 220.229 12.6364 223.517 12.6364C226.169 12.6364 228.532 13.1288 230.608 14.1136C232.684 15.0833 234.358 16.447 235.631 18.2045C236.919 19.9621 237.684 22.0152 237.926 24.3636H231.312C230.949 22.7273 230.116 21.3182 228.812 20.1364C227.525 18.9545 225.797 18.3636 223.631 18.3636C221.737 18.3636 220.078 18.8636 218.653 19.8636C217.244 20.8485 216.146 22.2576 215.358 24.0909C214.57 25.9091 214.176 28.0606 214.176 30.5455C214.176 33.0909 214.563 35.2879 215.335 37.1364C216.108 38.9848 217.199 40.4167 218.608 41.4318C220.032 42.447 221.706 42.9545 223.631 42.9545C224.919 42.9545 226.085 42.7197 227.131 42.25C228.191 41.7652 229.078 41.0758 229.79 40.1818C230.517 39.2879 231.025 38.2121 231.312 36.9545H237.926C237.684 39.2121 236.949 41.2273 235.722 43C234.494 44.7727 232.85 46.1667 230.79 47.1818C228.744 48.197 226.343 48.7045 223.585 48.7045ZM251.989 27.2727V48H245.193V1.45454H251.898V18.7727H252.33C253.148 16.8939 254.398 15.4015 256.08 14.2955C257.761 13.1894 259.958 12.6364 262.67 12.6364C265.064 12.6364 267.155 13.1288 268.943 14.1136C270.746 15.0985 272.14 16.5682 273.125 18.5227C274.125 20.4621 274.625 22.8864 274.625 25.7955V48H267.83V26.6136C267.83 24.053 267.17 22.0682 265.852 20.6591C264.534 19.2348 262.701 18.5227 260.352 18.5227C258.746 18.5227 257.307 18.8636 256.034 19.5455C254.777 20.2273 253.784 21.2273 253.057 22.5455C252.345 23.8485 251.989 25.4242 251.989 27.2727Z"
        fill={fill}
      />
    </svg>
  );
}
