import React from "react";

export default function Logo52({
  fill = "black",
  width = "100",
  height = "50",
  stroke = "black",
  className = "",
}: {
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 251 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.7131 12.2464C35.3583 12.1898 35.3998 11.6667 35.759 11.6667H57.6041C58.0068 11.6667 58.3333 11.9932 58.3333 12.3959V34.241C58.3333 34.6002 57.8103 34.6418 57.7536 34.287L54.8851 16.3251C54.7856 15.7025 54.2975 15.2144 53.6749 15.115L35.7131 12.2464Z"
        fill={fill}
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M9.46304 38.4964C9.10829 38.4397 9.14979 37.9167 9.50904 37.9167H31.3541C31.7567 37.9167 32.0832 38.2433 32.0832 38.6459V60.491C32.0832 60.8502 31.5603 60.8918 31.5036 60.537L28.635 42.5751C28.5356 41.9525 28.0475 41.4644 27.4249 41.365L9.46304 38.4964Z"
        fill={fill}
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M22.5881 25.3714C22.2333 25.3147 22.2748 24.7917 22.634 24.7917H44.4791C44.8818 24.7917 45.2083 25.1183 45.2083 25.5209V47.366C45.2083 47.7252 44.6853 47.7668 44.6286 47.412L41.9267 30.4935C41.7278 29.2486 40.7515 28.2722 39.5065 28.0733L22.5881 25.3714Z"
        fill={fill}
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M87.5746 43.6733H94.5916L99.5312 50.1133L101.863 52.9755L109.734 63.2472H102.44L97.1768 56.3917L95.3764 53.8988L87.5746 43.6733ZM111.257 35.3636C111.257 40.411 110.334 44.7505 108.487 48.3821C106.641 51.9983 104.109 54.7836 100.893 56.7379C97.6924 58.6768 94.053 59.6463 89.9751 59.6463C85.8819 59.6463 82.2272 58.6768 79.011 56.7379C75.8103 54.7836 73.2866 51.9906 71.44 48.359C69.5934 44.7274 68.6701 40.3956 68.6701 35.3636C68.6701 30.3163 69.5934 25.9845 71.44 22.3683C73.2866 18.7366 75.8103 15.9513 79.011 14.0124C82.2272 12.0581 85.8819 11.081 89.9751 11.081C94.053 11.081 97.6924 12.0581 100.893 14.0124C104.109 15.9513 106.641 18.7366 108.487 22.3683C110.334 25.9845 111.257 30.3163 111.257 35.3636ZM104.194 35.3636C104.194 31.5166 103.571 28.2773 102.324 25.6459C101.093 22.9992 99.4005 20.9987 97.2461 19.6445C95.1071 18.275 92.6835 17.5902 89.9751 17.5902C87.2514 17.5902 84.8201 18.275 82.6811 19.6445C80.5421 20.9987 78.8494 22.9992 77.603 25.6459C76.3719 28.2773 75.7564 31.5166 75.7564 35.3636C75.7564 39.2107 76.3719 42.4576 77.603 45.1044C78.8494 47.7358 80.5421 49.7363 82.6811 51.1058C84.8201 52.46 87.2514 53.1371 89.9751 53.1371C92.6835 53.1371 95.1071 52.46 97.2461 51.1058C99.4005 49.7363 101.093 47.7358 102.324 45.1044C103.571 42.4576 104.194 39.2107 104.194 35.3636ZM142.055 44.2965V23.5455H148.979V59H142.193V52.8601H141.824C141.008 54.7528 139.7 56.3301 137.9 57.592C136.115 58.8384 133.891 59.4616 131.229 59.4616C128.952 59.4616 126.936 58.9615 125.182 57.9613C123.443 56.9457 122.073 55.4453 121.073 53.4602C120.088 51.4751 119.596 49.0207 119.596 46.0969V23.5455H126.497V45.266C126.497 47.6819 127.167 49.6055 128.505 51.0366C129.844 52.4677 131.583 53.1832 133.722 53.1832C135.015 53.1832 136.3 52.8601 137.577 52.2138C138.869 51.5675 139.939 50.5903 140.785 49.2823C141.647 47.9743 142.07 46.3124 142.055 44.2965ZM173.533 59.7156C170.04 59.7156 167.032 58.9692 164.508 57.4766C162 55.9685 160.061 53.8526 158.691 51.1289C157.337 48.3898 156.66 45.1813 156.66 41.5035C156.66 37.8719 157.337 34.6712 158.691 31.9013C160.061 29.1314 161.969 26.9693 164.416 25.4151C166.878 23.8609 169.756 23.0838 173.049 23.0838C175.049 23.0838 176.988 23.4147 178.865 24.0763C180.743 24.738 182.428 25.7768 183.92 27.1925C185.413 28.6082 186.59 30.4471 187.452 32.7092C188.314 34.9558 188.745 37.6873 188.745 40.9034V43.3501H160.561V38.1797H181.982C181.982 36.3639 181.612 34.7558 180.874 33.3555C180.135 31.9397 179.096 30.8241 177.757 30.0085C176.434 29.1929 174.88 28.7852 173.095 28.7852C171.156 28.7852 169.463 29.2622 168.017 30.2163C166.586 31.1549 165.478 32.386 164.693 33.9094C163.923 35.4175 163.539 37.0563 163.539 38.826V42.8654C163.539 45.2352 163.954 47.2511 164.785 48.913C165.632 50.5749 166.809 51.8445 168.317 52.7216C169.825 53.5833 171.587 54.0142 173.603 54.0142C174.911 54.0142 176.103 53.8295 177.18 53.4602C178.258 53.0755 179.189 52.5062 179.973 51.7521C180.758 50.9981 181.358 50.0671 181.774 48.9592L188.306 50.1364C187.783 52.0599 186.844 53.7449 185.49 55.1914C184.151 56.6225 182.466 57.7382 180.435 58.5384C178.419 59.3232 176.119 59.7156 173.533 59.7156ZM222.97 32.2013L216.715 33.3093C216.453 32.5091 216.038 31.7474 215.468 31.0241C214.914 30.3009 214.16 29.7085 213.206 29.2468C212.252 28.7852 211.06 28.5543 209.628 28.5543C207.674 28.5543 206.043 28.9929 204.735 29.87C203.427 30.7318 202.773 31.8474 202.773 33.217C202.773 34.4019 203.212 35.3559 204.089 36.0792C204.966 36.8024 206.382 37.3949 208.336 37.8565L213.968 39.1491C217.23 39.9032 219.662 41.065 221.262 42.6346C222.862 44.2042 223.663 46.2431 223.663 48.7514C223.663 50.875 223.047 52.7678 221.816 54.4297C220.6 56.0762 218.9 57.3688 216.715 58.3075C214.545 59.2462 212.029 59.7156 209.167 59.7156C205.197 59.7156 201.957 58.8692 199.449 57.1765C196.941 55.4684 195.402 53.0447 194.833 49.9055L201.503 48.8899C201.919 50.6288 202.773 51.9445 204.066 52.837C205.358 53.7141 207.043 54.1527 209.121 54.1527C211.383 54.1527 213.191 53.6834 214.545 52.7447C215.899 51.7906 216.576 50.6288 216.576 49.2592C216.576 48.1513 216.161 47.2203 215.33 46.4663C214.514 45.7122 213.26 45.1429 211.567 44.7582L205.566 43.4425C202.257 42.6884 199.811 41.4882 198.226 39.8416C196.656 38.1951 195.871 36.11 195.871 33.5863C195.871 31.4935 196.456 29.6623 197.626 28.0927C198.795 26.5231 200.411 25.2997 202.473 24.4226C204.535 23.5301 206.897 23.0838 209.559 23.0838C213.391 23.0838 216.407 23.9148 218.608 25.5767C220.808 27.2232 222.262 29.4315 222.97 32.2013ZM247.801 23.5455V29.0852H228.435V23.5455H247.801ZM233.628 15.0511H240.53V48.5898C240.53 49.9286 240.73 50.9366 241.13 51.6136C241.53 52.2753 242.046 52.7293 242.677 52.9755C243.323 53.2063 244.023 53.3217 244.777 53.3217C245.331 53.3217 245.816 53.2833 246.231 53.2063C246.647 53.1294 246.97 53.0678 247.201 53.0217L248.447 58.723C248.047 58.8769 247.478 59.0308 246.739 59.1847C246.001 59.3539 245.077 59.4463 243.969 59.4616C242.153 59.4924 240.461 59.1693 238.891 58.4922C237.322 57.8151 236.052 56.7687 235.083 55.353C234.113 53.9373 233.628 52.1599 233.628 50.021V15.0511Z"
        fill={fill}
      />
    </svg>
  );
}
