import React from "react";

export default function Logo45({
  fill = "#212121",
  width = "244",
  height = "195",
  className,
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
      viewBox="0 0 244 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M227.515 80.4579L122.495 25.512L0 65.0425L41.9315 194.977L227.515 80.4579Z"
        fill={fill}
      />
      <path
        d="M60.3214 172.014C58.542 173.112 56.6503 173.702 54.6463 173.785C52.6422 173.868 50.7508 173.444 48.972 172.51C47.1821 171.559 45.7103 170.149 44.5566 168.278C43.4142 166.427 42.8251 164.496 42.7894 162.488C42.7424 160.462 43.2058 158.572 44.1794 156.818C45.153 155.064 46.5295 153.639 48.3088 152.541C50.1063 151.432 51.998 150.842 53.9839 150.77C55.988 150.686 57.8759 151.126 59.6477 152.088C61.4265 153.021 62.8871 154.414 64.0295 156.266C65.1832 158.136 65.7835 160.084 65.8304 162.111C65.8843 164.108 65.4244 165.983 64.4508 167.737C63.4772 169.491 62.1007 170.916 60.3214 172.014ZM58.2213 168.61C59.3651 167.904 60.216 167.028 60.7739 165.982C61.3206 164.918 61.5423 163.753 61.4389 162.489C61.3355 161.224 60.8917 159.956 60.1077 158.685C59.3237 157.414 58.3953 156.458 57.3227 155.816C56.2388 155.156 55.1043 154.841 53.9192 154.87C52.7341 154.9 51.5696 155.267 50.4257 155.973C49.2818 156.678 48.4219 157.56 47.8458 158.617C47.2879 159.663 47.0607 160.818 47.1641 162.083C47.2563 163.329 47.6944 164.588 48.4784 165.859C49.2625 167.13 50.1964 168.096 51.2803 168.755C52.3641 169.415 53.5042 169.74 54.7005 169.729C55.9038 169.688 57.0774 169.315 58.2213 168.61ZM77.1547 140.537L86.4624 155.625L82.6223 157.994L81.4462 156.087C81.3592 157.043 81.0338 157.958 80.4702 158.832C79.9134 159.677 79.1721 160.385 78.2461 160.956C77.0659 161.684 75.8707 162.083 74.6605 162.153C73.439 162.205 72.2682 161.912 71.1481 161.274C70.0349 160.607 69.0638 159.602 68.235 158.259L62.7748 149.407L66.5876 147.055L71.7119 155.362C72.4511 156.56 73.3219 157.301 74.3243 157.585C75.3155 157.851 76.3285 157.665 77.3634 157.027C78.4165 156.377 79.0466 155.55 79.2538 154.544C79.4497 153.521 79.1781 152.41 78.4389 151.212L73.3146 142.905L77.1547 140.537ZM86.7434 138.945L91.246 146.244C91.5596 146.753 91.9073 147.052 92.2889 147.142C92.6775 147.204 93.1623 147.055 93.7433 146.696L95.5136 145.604L97.4961 148.818L95.0994 150.297C91.8857 152.279 89.3156 151.709 87.3891 148.586L82.9033 141.314L81.1058 142.423L79.1737 139.291L80.9712 138.182L78.6695 134.451L82.5096 132.082L84.8113 135.813L88.1884 133.73L90.1205 136.862L86.7434 138.945ZM106.545 143.575C105.092 144.471 103.589 144.959 102.035 145.041C100.47 145.104 98.9872 144.753 97.5873 143.987C96.2057 143.21 95.0388 142.05 94.0868 140.506C93.1347 138.963 92.6306 137.394 92.5743 135.8C92.5363 134.194 92.9113 132.709 93.6994 131.346C94.4764 129.964 95.5911 128.825 97.0437 127.929C98.4962 127.033 100.014 126.548 101.598 126.473C103.17 126.381 104.656 126.717 106.056 127.483C107.474 128.238 108.659 129.387 109.611 130.93C110.563 132.473 111.049 134.053 111.069 135.67C111.107 137.276 110.728 138.776 109.933 140.168C109.145 141.532 108.015 142.667 106.545 143.575ZM104.495 140.252C105.185 139.826 105.729 139.265 106.126 138.569C106.531 137.843 106.707 137.032 106.656 136.136C106.605 135.241 106.282 134.312 105.689 133.349C104.804 131.915 103.745 131.052 102.512 130.759C101.286 130.438 100.128 130.613 99.0389 131.285C97.9495 131.957 97.2734 132.913 97.0106 134.153C96.7548 135.364 97.0693 136.686 97.9541 138.121C98.8389 139.555 99.8762 140.444 101.066 140.788C102.263 141.103 103.406 140.924 104.495 140.252ZM116.059 120.861L113.417 122.491L120.792 134.447L116.925 136.833L109.55 124.877L107.834 125.935L105.902 122.803L107.618 121.745L107.147 120.982C106.005 119.13 105.691 117.443 106.207 115.922C106.722 114.401 108.059 113.013 110.217 111.757L112.199 114.97C111.262 115.523 110.713 116.075 110.551 116.626C110.39 117.177 110.572 117.879 111.098 118.732L111.485 119.359L114.127 117.729L116.059 120.861ZM136.969 103.638L141.865 121.448L137.752 123.985L128.5 115.142L132.251 127.378L128.111 129.932L114.364 117.583L118.232 115.197L127.991 125.043L123.788 111.769L127.818 109.283L137.724 119.002L133.32 105.889L136.969 103.638ZM154.646 113.901C153.194 114.798 151.69 115.286 150.136 115.368C148.571 115.431 147.088 115.079 145.689 114.314C144.307 113.537 143.14 112.377 142.188 110.833C141.236 109.29 140.732 107.721 140.676 106.126C140.638 104.521 141.013 103.036 141.801 101.673C142.578 100.291 143.692 99.152 145.145 98.256C146.598 97.3599 148.115 96.8747 149.699 96.8003C151.271 96.7078 152.757 97.0444 154.157 97.8101C155.575 98.5647 156.76 99.7136 157.712 101.257C158.664 102.8 159.15 104.38 159.17 105.997C159.208 107.603 158.829 109.102 158.034 110.495C157.246 111.859 156.117 112.994 154.646 113.901ZM152.596 110.579C153.286 110.153 153.83 109.592 154.228 108.896C154.632 108.17 154.809 107.359 154.758 106.463C154.706 105.568 154.384 104.639 153.79 103.676C152.905 102.242 151.846 101.379 150.613 101.086C149.387 100.765 148.23 100.94 147.14 101.612C146.051 102.284 145.375 103.24 145.112 104.48C144.856 105.691 145.171 107.013 146.055 108.448C146.94 109.882 147.978 110.771 149.167 111.115C150.364 111.43 151.507 111.251 152.596 110.579ZM160.568 92.3136C160.565 91.2123 160.815 90.1939 161.315 89.2584C161.834 88.3116 162.602 87.5246 163.619 86.8974L166.088 90.9009L165.081 91.5226C163.882 92.2618 163.148 93.1032 162.878 94.0469C162.626 94.9794 162.931 96.1446 163.794 97.5427L168.431 105.06L164.618 107.412L155.31 92.3235L159.123 89.9714L160.568 92.3136ZM166.465 78.4493L178.897 98.603L175.084 100.955L162.652 80.8014L166.465 78.4493ZM176.452 89.6215C175.511 88.0963 174.976 86.5589 174.847 85.0091C174.736 83.4481 175.012 82.025 175.673 80.7399C176.334 79.4548 177.309 78.4146 178.598 77.6194C179.578 77.0146 180.648 76.6556 181.806 76.5426C182.954 76.4113 184.009 76.5374 184.972 76.9207L180.554 69.7579L184.421 67.3722L196.854 87.5259L192.986 89.9117L191.609 87.6784C191.596 88.714 191.303 89.722 190.729 90.7024C190.156 91.6827 189.306 92.5201 188.181 93.2145C186.91 93.9985 185.546 94.3886 184.09 94.3845C182.633 94.3805 181.233 93.9789 179.887 93.1795C178.549 92.3508 177.404 91.1648 176.452 89.6215ZM188.36 82.3508C187.788 81.4248 187.12 80.747 186.353 80.3174C185.576 79.8696 184.772 79.6636 183.942 79.6995C183.1 79.7172 182.326 79.9444 181.618 80.3812C180.909 80.8181 180.362 81.3938 179.976 82.1084C179.59 82.823 179.413 83.6338 179.446 84.5408C179.486 85.4184 179.786 86.3111 180.346 87.219C180.906 88.1268 181.581 88.8137 182.369 89.2796C183.165 89.7162 183.975 89.9312 184.798 89.9248C185.639 89.9071 186.405 89.6854 187.095 89.2598C187.803 88.823 188.359 88.2417 188.764 87.5159C189.157 86.7719 189.333 85.9611 189.293 85.0835C189.242 84.1877 188.931 83.2768 188.36 82.3508Z"
        fill="white"
      />
    </svg>
  );
}
