import React from "react";

export default function Netlify({
  width = "100",
  height = "27",
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
      viewBox='0 0 100 27'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_401_1596)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.3133 8.2904L36.3972 9.78904C37.3539 8.62995 38.61 8.05044 40.1647 8.05044C42.8589 8.05044 44.2302 9.59678 44.2779 12.6895V21.2586H41.3731V12.8572C41.3731 12.0343 41.1957 11.4254 40.8412 11.0292C40.4865 10.6338 39.9062 10.4361 39.101 10.4361C37.9287 10.4361 37.0553 10.9679 36.4825 12.0302V21.2586H33.5762V8.2904H36.3147H36.3133ZM52.9367 21.4986C51.0955 21.4986 49.6022 20.9177 48.4586 19.7551C47.3144 18.5927 46.7423 17.0443 46.7423 15.1107V14.7513C46.7423 13.4572 46.9912 12.3002 47.4896 11.2815C47.9874 10.2629 48.6877 9.46998 49.5885 8.90196C50.4893 8.33537 51.4938 8.0518 52.6026 8.0518C54.3639 8.0518 55.7256 8.61496 56.6857 9.74127C57.6472 10.8684 58.1273 12.4618 58.1273 14.5236V15.6984H49.6717C49.7604 16.7688 50.1164 17.6156 50.7424 18.2388C51.3683 18.862 52.1559 19.1736 53.1044 19.1736C54.4355 19.1736 55.5197 18.635 56.3571 17.5556L57.9234 19.0543C57.4052 19.8288 56.7137 20.4302 55.8491 20.8577C54.9837 21.2852 54.0134 21.4986 52.9373 21.4986H52.9367ZM52.5903 10.389C51.7924 10.389 51.1495 10.6685 50.6591 11.2276C50.1682 11.7867 49.8558 12.5661 49.7202 13.565H55.2572V13.3488C55.1931 12.3738 54.934 11.6374 54.4798 11.1377C54.025 10.6386 53.3956 10.389 52.5903 10.389ZM64.0223 5.13904V8.29111H66.3067V10.4484H64.0223V17.6872C64.0223 18.1823 64.1205 18.5395 64.3156 18.7597C64.5105 18.9792 64.8597 19.089 65.3622 19.089C65.7044 19.0881 66.0453 19.0478 66.3782 18.969V21.2225C65.7168 21.4065 65.0793 21.4979 64.4648 21.4979C62.233 21.4979 61.1168 20.2638 61.1168 17.7949V10.4477H58.9865V8.2904H61.1154V5.13836H64.021L64.0223 5.13904ZM71.6166 21.2593H68.7104V2.85017H71.6166V21.2593ZM77.871 21.2593H74.9648V8.29111H77.871V21.2593ZM74.7854 4.9229C74.7854 4.47631 74.9266 4.10472 75.2096 3.80881C75.4932 3.51359 75.8976 3.36563 76.4234 3.36563C76.9498 3.36563 77.3562 3.51359 77.6439 3.80881C77.9303 4.10472 78.0735 4.47631 78.0735 4.92359C78.0735 5.36268 77.9303 5.72813 77.6439 6.01995C77.3562 6.31177 76.9498 6.45768 76.4234 6.45768C75.8976 6.45768 75.4932 6.31177 75.2096 6.01995C74.9266 5.72881 74.7854 5.36268 74.7854 4.92359V4.9229ZM82.0567 21.2593V10.4477H80.083V8.2904H82.0567V7.10404C82.0567 5.6654 82.4546 4.5554 83.2521 3.77199C84.0495 2.98926 85.1652 2.5979 86.5998 2.5979C87.1109 2.5979 87.6532 2.6695 88.2274 2.81336L88.1556 5.09063C87.7888 5.02257 87.4164 4.9906 87.0432 4.99518C85.6556 4.99518 84.9618 5.70973 84.9618 7.14018V8.2904H87.5926V10.4477H84.9618V21.2586H82.0567V21.2593ZM94.2417 17.0886L96.8725 8.29111H99.9698L94.8286 23.2249C94.0392 25.4061 92.6995 26.497 90.8103 26.497C90.3876 26.497 89.9211 26.4247 89.4108 26.2808V24.0275L89.961 24.0636C90.6939 24.0636 91.2465 23.9299 91.6173 23.662C91.9873 23.3947 92.2808 22.9454 92.4961 22.3141L92.9148 21.1992L88.3701 8.29111H91.5033L94.2417 17.0886Z"
          fill="#0E1E25"
        />
        <path
          d="M18.9364 9.07917L18.927 9.07502C18.9215 9.07303 18.916 9.07096 18.9112 9.06617C18.9034 9.0578 18.8976 9.04767 18.8943 9.03675C18.891 9.02574 18.8903 9.0141 18.8921 9.00278L19.4192 5.78052L21.8912 8.25278L19.3203 9.3464C19.3132 9.34935 19.3056 9.3507 19.2979 9.35054H19.2876C19.2842 9.34847 19.2809 9.34576 19.274 9.3389C19.1783 9.23244 19.064 9.1444 18.9364 9.07917ZM22.5219 8.88276L25.1649 11.5255C25.7139 12.075 25.9887 12.3492 26.0889 12.6669C26.1039 12.7139 26.1162 12.761 26.1258 12.8094L19.8093 10.1346C19.8059 10.1332 19.8025 10.1319 19.799 10.1305C19.7738 10.1203 19.7445 10.1087 19.7445 10.0828C19.7445 10.0568 19.7745 10.0446 19.7998 10.0344L19.8079 10.031L22.5219 8.88276ZM26.018 13.6576C25.8816 13.9139 25.6156 14.1798 25.1656 14.6305L22.1857 17.6094L18.3317 16.8069L18.3112 16.8028C18.277 16.7974 18.2409 16.7912 18.2409 16.7605C18.2263 16.6016 18.1791 16.4473 18.1022 16.3073C18.0254 16.1674 17.9206 16.0448 17.7943 15.9471C17.7786 15.9314 17.7827 15.9068 17.7875 15.8844C17.7875 15.881 17.7875 15.8776 17.7888 15.8749L18.5137 11.4253L18.5164 11.4103C18.5205 11.3762 18.5266 11.3367 18.5573 11.3367C18.7127 11.3174 18.8626 11.2673 18.9984 11.1895C19.1342 11.1116 19.2532 11.0075 19.3483 10.8832C19.3545 10.8765 19.3585 10.869 19.3668 10.8648C19.3886 10.8546 19.4145 10.8648 19.437 10.8744L26.0173 13.6576H26.018ZM21.5004 18.2946L16.6002 23.1942L17.439 18.0396L17.4404 18.0328C17.4411 18.026 17.4424 18.0191 17.4445 18.013C17.4513 17.9966 17.469 17.9899 17.486 17.983L17.4943 17.9796C17.6779 17.9013 17.8404 17.7804 17.9682 17.6271C17.9845 17.608 18.0043 17.5896 18.0295 17.5862C18.0361 17.5852 18.0427 17.5852 18.0493 17.5862L21.4998 18.2953L21.5004 18.2946ZM15.5631 24.2312L15.0108 24.7835L8.90439 15.9594C8.90216 15.9561 8.89985 15.9529 8.89753 15.9498C8.88796 15.9369 8.87776 15.9239 8.87983 15.9089C8.87983 15.898 8.88733 15.8885 8.89482 15.8803L8.9016 15.8714C8.92002 15.8442 8.93573 15.8169 8.9528 15.7875L8.96643 15.7637L8.96843 15.7616C8.97799 15.7453 8.98685 15.7296 9.00327 15.7207C9.01755 15.7139 9.03733 15.7167 9.05304 15.7201L15.8181 17.1151C15.8371 17.118 15.8549 17.1257 15.8699 17.1375C15.8788 17.1464 15.8809 17.156 15.8829 17.1669C15.9301 17.3454 16.0179 17.5106 16.1396 17.6496C16.2612 17.7886 16.4132 17.8975 16.5839 17.968C16.603 17.9776 16.5948 17.9987 16.586 18.0212C16.5815 18.0311 16.5781 18.0414 16.5758 18.0519C16.4905 18.5701 15.7595 23.0278 15.5631 24.2312ZM14.4093 25.3841C14.0022 25.7871 13.7622 26.0005 13.4908 26.0864C13.2232 26.171 12.936 26.171 12.6684 26.0864C12.3507 25.9855 12.0758 25.7114 11.527 25.1619L5.39462 19.0303L6.99641 16.5464C7.0039 16.5342 7.01141 16.5233 7.02368 16.5144C7.04073 16.5021 7.06528 16.5076 7.08574 16.5144C7.45339 16.6253 7.84813 16.6053 8.20272 16.4578C8.22114 16.4509 8.23948 16.4462 8.25383 16.4592C8.26101 16.4657 8.26739 16.473 8.27289 16.481L14.4093 25.3848V25.3841ZM4.80342 18.4391L3.39666 17.0326L6.17472 15.8476C6.18182 15.8445 6.18947 15.8428 6.19722 15.8428C6.2204 15.8428 6.23404 15.866 6.24632 15.8871C6.27424 15.93 6.30381 15.9719 6.33497 16.0126L6.34383 16.0235C6.35201 16.0351 6.34656 16.0466 6.33838 16.0576L4.8041 18.4391H4.80342ZM2.77409 16.41L0.994327 14.6305C0.691564 14.3278 0.471992 14.1083 0.319247 13.9194L5.7308 15.0417C5.7376 15.0429 5.74442 15.0441 5.75126 15.045C5.78467 15.0505 5.8215 15.0567 5.8215 15.088C5.8215 15.1221 5.78126 15.1378 5.74717 15.1508L5.73148 15.1576L2.77409 16.41ZM0.00830078 13.0044C0.014468 12.8898 0.0350881 12.7764 0.0696718 12.6669C0.170593 12.3492 0.444716 12.075 0.994327 11.5255L3.27187 9.24823C4.32052 10.77 5.37201 12.2898 6.42634 13.8076C6.44475 13.8321 6.4652 13.8594 6.44407 13.8798C6.34451 13.9896 6.24496 14.1096 6.17472 14.2399C6.1671 14.2566 6.15537 14.2711 6.14063 14.2821C6.13176 14.2875 6.12221 14.2856 6.11198 14.2835H6.11062L0.00830078 13.0037V13.0044ZM3.88149 8.63866L6.94254 5.57665C7.23098 5.70279 8.27903 6.14529 9.21532 6.54074C9.92449 6.84074 10.5709 7.11347 10.7742 7.20211C10.7946 7.21029 10.813 7.21847 10.8219 7.23892C10.8274 7.2512 10.8246 7.26688 10.8219 7.27983C10.7734 7.50086 10.7806 7.73047 10.8428 7.94802C10.9051 8.16562 11.0204 8.36426 11.1785 8.52622C11.199 8.54664 11.1785 8.57598 11.1608 8.60118L11.1512 8.61553L8.04179 13.4312C8.03358 13.4448 8.02608 13.4564 8.01245 13.4653C7.9961 13.4755 7.97288 13.4707 7.95379 13.466C7.83285 13.4343 7.70853 13.4174 7.58352 13.4155C7.47169 13.4155 7.35032 13.436 7.22757 13.4584H7.22689C7.21325 13.4605 7.20098 13.4632 7.19007 13.4551C7.17802 13.4452 7.16765 13.4335 7.15938 13.4203L3.88081 8.63866H3.88149ZM7.56238 4.95825L11.527 0.994155C12.0758 0.445291 12.3507 0.170518 12.6684 0.0702911C12.936 -0.0143158 13.2232 -0.0143158 13.4908 0.0702911C13.8086 0.170518 14.0834 0.445291 14.6323 0.994155L15.4916 1.85325L12.6719 6.21961C12.6649 6.23232 12.6553 6.24346 12.6439 6.25234C12.6269 6.26392 12.603 6.25916 12.5825 6.25234C12.3602 6.18488 12.1248 6.1726 11.8967 6.21656C11.6686 6.26051 11.4546 6.35938 11.2733 6.50461C11.2549 6.5237 11.2276 6.51279 11.2044 6.50256C10.8362 6.34234 7.97221 5.13211 7.56238 4.95825ZM16.0902 2.45188L18.6937 5.05506L18.0664 8.9401V8.9503C18.0658 8.95916 18.064 8.96785 18.0609 8.97622C18.0541 8.98986 18.0404 8.99257 18.0268 8.99664C17.8927 9.0373 17.7664 9.10022 17.6531 9.18276C17.6483 9.18627 17.6437 9.19018 17.6395 9.1944C17.632 9.20254 17.6245 9.21003 17.6122 9.21139C17.6022 9.21171 17.5923 9.21011 17.5829 9.20668L13.6156 7.5212L13.6081 7.51779C13.5829 7.50756 13.5529 7.49529 13.5529 7.46938C13.5296 7.24833 13.4573 7.03522 13.3415 6.84552C13.3224 6.81416 13.3013 6.78143 13.3176 6.74938L16.0902 2.45188ZM13.409 8.3196L17.1281 9.89464C17.1485 9.90413 17.1711 9.91298 17.1799 9.93412C17.1834 9.94687 17.1834 9.96027 17.1799 9.97303C17.169 10.0276 17.1594 10.0896 17.1594 10.1523V10.2567C17.1594 10.2826 17.1329 10.2934 17.1083 10.3037L17.1008 10.3064C16.5116 10.558 8.82935 13.8335 8.81779 13.8335C8.80615 13.8335 8.79386 13.8335 8.7823 13.8219C8.76181 13.8014 8.7823 13.7728 8.80072 13.7469C8.80399 13.7424 8.80718 13.7379 8.81029 13.7332L11.8665 9.00142L11.872 8.99321C11.8897 8.96458 11.9102 8.9326 11.9429 8.9326L11.9736 8.93731C12.0431 8.94687 12.1046 8.95573 12.1666 8.95573C12.6302 8.95573 13.0599 8.73005 13.319 8.34416C13.3251 8.33388 13.333 8.32463 13.3422 8.31689C13.3606 8.30325 13.3879 8.31003 13.409 8.3196ZM9.14985 14.5821L17.5236 11.0114C17.5236 11.0114 17.5358 11.0115 17.5475 11.023C17.5931 11.0687 17.632 11.0993 17.6695 11.1281L17.6879 11.1396C17.7049 11.1492 17.722 11.16 17.7234 11.1778C17.7234 11.1846 17.7234 11.1887 17.722 11.1948L17.0046 15.6008L17.0019 15.6185C16.9971 15.6525 16.9923 15.6915 16.9603 15.6915C16.7691 15.7044 16.5838 15.7637 16.4207 15.8643C16.2576 15.9649 16.1215 16.1038 16.0241 16.269L16.0207 16.2744C16.0111 16.2901 16.0022 16.3051 15.9866 16.3132C15.9723 16.3201 15.9538 16.3174 15.9388 16.3139L9.26101 14.9367C9.25415 14.9353 9.15734 14.5828 9.14985 14.5821Z"
          fill="url(#paint0_radial_401_1596)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_401_1596"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-0.868575 12.7095) rotate(90) scale(26.1143 30.1535)"
        >
          <stop stop-color="#20C6B7" />
          <stop offset="1" stop-color="#4D9ABF" />
        </radialGradient>
        <clipPath id="clip0_401_1596">
          <rect width='100' height='27' fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
