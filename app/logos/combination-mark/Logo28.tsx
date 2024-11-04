import React from "react";

export default function Logo28({
  fill = "black",
  width = "240",
  height = "80",
  className
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
      viewBox={`0 0 240 80`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60.3665 18.8497C57.1732 7.75303 43.1648 4.27446 35.1515 12.5883L7.39487 41.3857C-0.618484 49.6995 3.37315 63.5703 14.5798 66.3532L53.3974 75.9924C64.604 78.7753 74.6207 68.383 71.4274 57.2863L60.3665 18.8497ZM31.575 32.9275C32.0118 31.1685 33.7918 30.0967 35.5508 30.5334C37.3098 30.9702 38.3816 32.7502 37.9448 34.5092C37.508 36.2682 35.728 37.34 33.969 36.9032C32.2101 36.4664 31.1382 34.6864 31.575 32.9275ZM36.0328 28.5924C33.2018 27.8894 30.337 29.6145 29.634 32.4454C28.931 35.2764 30.6561 38.1413 33.487 38.8443C36.318 39.5473 39.1829 37.8222 39.8859 34.9912C40.5888 32.1602 38.8638 29.2954 36.0328 28.5924ZM44.0043 34.9835C43.4683 34.8504 42.9259 35.1771 42.7928 35.7131C42.6597 36.2491 42.9863 36.7915 43.5223 36.9246L44.124 37.074C46.2527 37.6026 47.7871 37.9845 48.8705 38.3498C49.4092 38.5315 49.7935 38.6953 50.0628 38.8493C50.3331 39.0038 50.4319 39.1171 50.467 39.172C50.8112 39.7094 50.8549 40.3861 50.5826 40.9632C50.5548 41.0222 50.4713 41.1473 50.2232 41.3352C49.9758 41.5225 49.6158 41.7343 49.1049 41.9837C48.0774 42.4852 46.6048 43.061 44.5616 43.8587L37.9428 46.4428L37.8947 46.4616C35.9097 47.2366 34.36 47.8416 33.2496 48.3836C32.6871 48.6581 32.1966 48.9356 31.8011 49.235C31.4065 49.5339 31.055 49.8931 30.8403 50.348C30.2744 51.5477 30.3651 52.9542 31.0805 54.0712C31.3518 54.4948 31.7466 54.8059 32.1763 55.0516C32.6069 55.2978 33.129 55.5099 33.7222 55.7099C34.8929 56.1047 36.5074 56.5056 38.5754 57.0191L38.5757 57.0192L38.6258 57.0316L39.92 57.353C40.456 57.4861 40.9984 57.1595 41.1315 56.6235C41.2647 56.0875 40.938 55.5451 40.402 55.412L39.1078 55.0906C36.9791 54.562 35.4447 54.1801 34.3612 53.8148C33.8225 53.6331 33.4383 53.4693 33.1689 53.3153C32.8987 53.1608 32.7999 53.0475 32.7647 52.9926C32.4205 52.4552 32.3769 51.7785 32.6492 51.2013C32.677 51.1424 32.7605 51.0173 33.0086 50.8294C33.2559 50.6421 33.616 50.4302 34.1268 50.1809C35.1544 49.6794 36.627 49.1036 38.6701 48.3059L45.289 45.7218L45.337 45.703L45.337 45.703C47.322 44.928 48.8718 44.323 49.9822 43.781C50.5447 43.5065 51.0352 43.229 51.4306 42.9296C51.8252 42.6307 52.1768 42.2715 52.3914 41.8165C52.9574 40.6168 52.8666 39.2104 52.1513 38.0934C51.88 37.6698 51.4852 37.3587 51.0554 37.113C50.6248 36.8668 50.1027 36.6547 49.5096 36.4547C48.3389 36.0599 46.7243 35.659 44.6562 35.1454L44.6561 35.1454L44.606 35.133L44.0043 34.9835ZM46.1515 57.1348C46.5883 55.3758 48.3683 54.304 50.1273 54.7408C51.8862 55.1776 52.9581 56.9576 52.5213 58.7165C52.0845 60.4755 50.3045 61.5473 48.5455 61.1106C46.7866 60.6738 45.7147 58.8938 46.1515 57.1348ZM50.6093 52.7997C47.7783 52.0967 44.9134 53.8218 44.2105 56.6528C43.5075 59.4838 45.2325 62.3486 48.0635 63.0516C50.8945 63.7546 53.7593 62.0295 54.4623 59.1986C55.1653 56.3676 53.4402 53.5027 50.6093 52.7997Z"
        fill={fill}
      />
      <path
        d="M119.349 21.7273V69H112.793L88.7646 34.3303H88.326V69H81.1935V21.7273H87.7951L111.847 56.4432H112.286V21.7273H119.349ZM139.517 69.7848C137.27 69.7848 135.239 69.3693 133.423 68.5384C131.607 67.692 130.169 66.4686 129.107 64.8683C128.06 63.2679 127.537 61.3059 127.537 58.9822C127.537 56.9818 127.922 55.3352 128.691 54.0426C129.461 52.75 130.499 51.7267 131.807 50.9727C133.115 50.2186 134.577 49.6493 136.193 49.2646C137.809 48.8799 139.455 48.5875 141.133 48.3874C143.256 48.1412 144.98 47.9412 146.303 47.7873C147.627 47.618 148.588 47.3487 149.188 46.9794C149.789 46.6101 150.089 46.0099 150.089 45.179V45.0174C150.089 43.0015 149.519 41.4396 148.381 40.3317C147.257 39.2237 145.58 38.6697 143.349 38.6697C141.025 38.6697 139.194 39.1852 137.855 40.2163C136.532 41.2319 135.616 42.3629 135.108 43.6094L128.622 42.1321C129.391 39.9777 130.515 38.2389 131.992 36.9155C133.485 35.5767 135.201 34.6072 137.139 34.0071C139.078 33.3916 141.117 33.0838 143.256 33.0838C144.672 33.0838 146.172 33.2531 147.757 33.5916C149.358 33.9148 150.85 34.5149 152.235 35.392C153.636 36.2692 154.782 37.5233 155.675 39.1545C156.567 40.7702 157.013 42.8707 157.013 45.456V69H150.273V64.1527H149.996C149.55 65.0452 148.881 65.9223 147.988 66.7841C147.096 67.6458 145.949 68.3614 144.549 68.9308C143.149 69.5001 141.471 69.7848 139.517 69.7848ZM141.017 64.245C142.925 64.245 144.557 63.868 145.911 63.114C147.28 62.36 148.319 61.3751 149.027 60.1594C149.75 58.9284 150.112 57.6127 150.112 56.2124V51.642C149.866 51.8883 149.389 52.1191 148.681 52.3345C147.988 52.5346 147.196 52.7115 146.303 52.8654C145.411 53.0039 144.541 53.1347 143.695 53.2578C142.849 53.3655 142.141 53.4579 141.571 53.5348C140.233 53.7041 139.009 53.9888 137.901 54.3888C136.809 54.7889 135.931 55.366 135.27 56.12C134.623 56.8587 134.3 57.8435 134.3 59.0746C134.3 60.7827 134.931 62.0753 136.193 62.9524C137.455 63.8142 139.063 64.245 141.017 64.245ZM173.108 47.9489V69H166.206V21.7273H173.015V39.316H173.454C174.285 37.4079 175.554 35.8922 177.262 34.7688C178.971 33.6455 181.202 33.0838 183.956 33.0838C186.388 33.0838 188.511 33.5839 190.327 34.5842C192.158 35.5844 193.574 37.0771 194.574 39.0621C195.59 41.0318 196.098 43.494 196.098 46.4485V69H189.196V47.2795C189.196 44.6789 188.527 42.663 187.188 41.2319C185.849 39.7854 183.987 39.0621 181.602 39.0621C179.971 39.0621 178.509 39.4084 177.216 40.1009C175.939 40.7933 174.931 41.8089 174.192 43.1477C173.469 44.4711 173.108 46.0715 173.108 47.9489ZM220.242 69.7156C216.918 69.7156 214.017 68.9538 211.54 67.4304C209.062 65.907 207.139 63.7757 205.769 61.0366C204.4 58.2975 203.715 55.0967 203.715 51.4343C203.715 47.7565 204.4 44.5404 205.769 41.7859C207.139 39.0314 209.062 36.8924 211.54 35.369C214.017 33.8455 216.918 33.0838 220.242 33.0838C223.566 33.0838 226.466 33.8455 228.944 35.369C231.421 36.8924 233.345 39.0314 234.714 41.7859C236.084 44.5404 236.769 47.7565 236.769 51.4343C236.769 55.0967 236.084 58.2975 234.714 61.0366C233.345 63.7757 231.421 65.907 228.944 67.4304C226.466 68.9538 223.566 69.7156 220.242 69.7156ZM220.265 63.9219C222.419 63.9219 224.204 63.3525 225.62 62.2138C227.036 61.075 228.082 59.5593 228.759 57.6665C229.452 55.7738 229.798 53.6887 229.798 51.4112C229.798 49.1491 229.452 47.0717 228.759 45.179C228.082 43.2708 227.036 41.7397 225.62 40.5856C224.204 39.4315 222.419 38.8544 220.265 38.8544C218.095 38.8544 216.295 39.4315 214.864 40.5856C213.448 41.7397 212.394 43.2708 211.701 45.179C211.024 47.0717 210.686 49.1491 210.686 51.4112C210.686 53.6887 211.024 55.7738 211.701 57.6665C212.394 59.5593 213.448 61.075 214.864 62.2138C216.295 63.3525 218.095 63.9219 220.265 63.9219Z"
        fill={fill}
      />
    </svg>
  );
}
