export default function Logo8({
  fill = "black",
  stroke = "black",
  width = "309",
  height = "81",
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
        d="M66.4 51C65.9341 52.0557 65.7951 53.2267 66.001 54.3621C66.2069 55.4974 66.7481 56.5451 67.555 57.37L67.765 57.58C68.4158 58.2301 68.9322 59.0021 69.2844 59.8519C69.6367 60.7017 69.818 61.6126 69.818 62.5325C69.818 63.4524 69.6367 64.3633 69.2844 65.2131C68.9322 66.0629 68.4158 66.8349 67.765 67.485C67.1149 68.1358 66.3429 68.6522 65.4931 69.0044C64.6433 69.3567 63.7324 69.538 62.8125 69.538C61.8926 69.538 60.9817 69.3567 60.1319 69.0044C59.2821 68.6522 58.5101 68.1358 57.86 67.485L57.65 67.275C56.8251 66.4681 55.7774 65.9268 54.6421 65.721C53.5067 65.5151 52.3357 65.6541 51.28 66.12C50.2448 66.5637 49.3619 67.3004 48.7401 68.2394C48.1182 69.1784 47.7845 70.2787 47.78 71.405V72C47.78 73.8565 47.0425 75.637 45.7297 76.9497C44.417 78.2625 42.6365 79 40.78 79C38.9235 79 37.143 78.2625 35.8303 76.9497C34.5175 75.637 33.78 73.8565 33.78 72V71.685C33.7529 70.5265 33.3779 69.403 32.7038 68.4605C32.0297 67.5179 31.0876 66.8 30 66.4C28.9443 65.9341 27.7733 65.7951 26.6379 66.001C25.5026 66.2068 24.4549 66.7481 23.63 67.555L23.42 67.765C22.7699 68.4158 21.9979 68.9322 21.1481 69.2844C20.2983 69.6367 19.3874 69.818 18.4675 69.818C17.5476 69.818 16.6367 69.6367 15.7869 69.2844C14.9371 68.9322 14.1651 68.4158 13.515 67.765C12.8642 67.1149 12.3479 66.3429 11.9956 65.4931C11.6433 64.6433 11.462 63.7324 11.462 62.8125C11.462 61.8926 11.6433 60.9817 11.9956 60.1319C12.3479 59.2821 12.8642 58.5101 13.515 57.86L13.725 57.65C14.5319 56.8251 15.0732 55.7774 15.279 54.6421C15.4849 53.5067 15.3459 52.3357 14.88 51.28C14.4363 50.2448 13.6996 49.3619 12.7606 48.7401C11.8216 48.1182 10.7213 47.7845 9.595 47.78H9C7.14348 47.78 5.36301 47.0425 4.05025 45.7297C2.7375 44.417 2 42.6365 2 40.78C2 38.9235 2.7375 37.143 4.05025 35.8303C5.36301 34.5175 7.14348 33.78 9 33.78H9.315C10.4735 33.7529 11.597 33.3779 12.5395 32.7038C13.4821 32.0297 14.2 31.0876 14.6 30C15.0659 28.9443 15.2049 27.7733 14.999 26.6379C14.7932 25.5026 14.2519 24.4549 13.445 23.63L13.235 23.42C12.5842 22.7699 12.0679 21.9979 11.7156 21.1481C11.3633 20.2983 11.182 19.3874 11.182 18.4675C11.182 17.5476 11.3633 16.6367 11.7156 15.7869C12.0679 14.9371 12.5842 14.1651 13.235 13.515C13.8851 12.8642 14.6571 12.3479 15.5069 11.9956C16.3567 11.6433 17.2676 11.462 18.1875 11.462C19.1074 11.462 20.0183 11.6433 20.8681 11.9956C21.7179 12.3479 22.4899 12.8642 23.14 13.515L23.35 13.725C24.1749 14.5319 25.2226 15.0731 26.3579 15.279C27.4933 15.4849 28.6643 15.3459 29.72 14.88H30C31.0352 14.4363 31.9181 13.6996 32.5399 12.7606C33.1618 11.8216 33.4955 10.7213 33.5 9.595V9C33.5 7.14348 34.2375 5.36301 35.5503 4.05025C36.863 2.7375 38.6435 2 40.5 2C42.3565 2 44.137 2.7375 45.4497 4.05025C46.7625 5.36301 47.5 7.14348 47.5 9V9.315C47.5045 10.4413 47.8382 11.5416 48.4601 12.4806C49.0819 13.4196 49.9648 14.1563 51 14.6C52.0557 15.0659 53.2267 15.2049 54.3621 14.999C55.4974 14.7931 56.5451 14.2519 57.37 13.445L57.58 13.235C58.2301 12.5842 59.0021 12.0679 59.8519 11.7156C60.7017 11.3633 61.6126 11.182 62.5325 11.182C63.4524 11.182 64.3633 11.3633 65.2131 11.7156C66.0629 12.0679 66.8349 12.5842 67.485 13.235C68.1358 13.8851 68.6522 14.6571 69.0044 15.5069C69.3567 16.3567 69.538 17.2676 69.538 18.1875C69.538 19.1074 69.3567 20.0183 69.0044 20.8681C68.6522 21.7179 68.1358 22.4899 67.485 23.14L67.275 23.35C66.4681 24.1749 65.9269 25.2226 65.721 26.3579C65.5151 27.4933 65.6541 28.6643 66.12 29.72V30C66.5637 31.0352 67.3004 31.9181 68.2394 32.5399C69.1784 33.1618 70.2787 33.4955 71.405 33.5H72C73.8565 33.5 75.637 34.2375 76.9497 35.5503C78.2625 36.863 79 38.6435 79 40.5C79 42.3565 78.2625 44.137 76.9497 45.4497C75.637 46.7625 73.8565 47.5 72 47.5H71.685C70.5587 47.5045 69.4584 47.8382 68.5194 48.4601C67.5804 49.0819 66.8437 49.9648 66.4 51Z"
        stroke={stroke}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M109.125 59.495C106.742 59.495 104.597 59.0733 102.69 58.23C100.82 57.35 99.335 56.1767 98.235 54.71C97.135 53.2067 96.5483 51.5383 96.475 49.705H102.965C103.075 50.9883 103.68 52.07 104.78 52.95C105.917 53.7933 107.328 54.215 109.015 54.215C110.775 54.215 112.132 53.885 113.085 53.225C114.075 52.5283 114.57 51.6483 114.57 50.585C114.57 49.4483 114.02 48.605 112.92 48.055C111.857 47.505 110.152 46.9 107.805 46.24C105.532 45.6167 103.68 45.0117 102.25 44.425C100.82 43.8383 99.5733 42.94 98.51 41.73C97.4833 40.52 96.97 38.925 96.97 36.945C96.97 35.3317 97.4467 33.865 98.4 32.545C99.3533 31.1883 100.71 30.125 102.47 29.355C104.267 28.585 106.32 28.2 108.63 28.2C112.077 28.2 114.845 29.08 116.935 30.84C119.062 32.5633 120.198 34.9283 120.345 37.935H114.075C113.965 36.5783 113.415 35.4967 112.425 34.69C111.435 33.8833 110.097 33.48 108.41 33.48C106.76 33.48 105.495 33.7917 104.615 34.415C103.735 35.0383 103.295 35.8633 103.295 36.89C103.295 37.6967 103.588 38.375 104.175 38.925C104.762 39.475 105.477 39.915 106.32 40.245C107.163 40.5383 108.41 40.9233 110.06 41.4C112.26 41.9867 114.057 42.5917 115.45 43.215C116.88 43.8017 118.108 44.6817 119.135 45.855C120.162 47.0283 120.693 48.5867 120.73 50.53C120.73 52.2533 120.253 53.7933 119.3 55.15C118.347 56.5067 116.99 57.57 115.23 58.34C113.507 59.11 111.472 59.495 109.125 59.495ZM133.775 33.15C134.838 31.7567 136.287 30.5833 138.12 29.63C139.953 28.6767 142.025 28.2 144.335 28.2C146.975 28.2 149.377 28.86 151.54 30.18C153.74 31.4633 155.463 33.2783 156.71 35.625C157.957 37.9717 158.58 40.6667 158.58 43.71C158.58 46.7533 157.957 49.485 156.71 51.905C155.463 54.2883 153.74 56.1583 151.54 57.515C149.377 58.835 146.975 59.495 144.335 59.495C142.025 59.495 139.972 59.0367 138.175 58.12C136.378 57.1667 134.912 55.9933 133.775 54.6V73.41H127.505V28.695H133.775V33.15ZM152.2 43.71C152.2 41.62 151.76 39.8233 150.88 38.32C150.037 36.78 148.9 35.625 147.47 34.855C146.077 34.0483 144.573 33.645 142.96 33.645C141.383 33.645 139.88 34.0483 138.45 34.855C137.057 35.6617 135.92 36.835 135.04 38.375C134.197 39.915 133.775 41.73 133.775 43.82C133.775 45.91 134.197 47.7433 135.04 49.32C135.92 50.86 137.057 52.0333 138.45 52.84C139.88 53.6467 141.383 54.05 142.96 54.05C144.573 54.05 146.077 53.6467 147.47 52.84C148.9 51.9967 150.037 50.7867 150.88 49.21C151.76 47.6333 152.2 45.8 152.2 43.71ZM171.05 18.3V59H164.78V18.3H171.05ZM177.192 43.71C177.192 40.6667 177.816 37.9717 179.062 35.625C180.346 33.2783 182.069 31.4633 184.232 30.18C186.432 28.86 188.852 28.2 191.492 28.2C193.876 28.2 195.947 28.6767 197.707 29.63C199.504 30.5467 200.934 31.7017 201.997 33.095V28.695H208.322V59H201.997V54.49C200.934 55.92 199.486 57.1117 197.652 58.065C195.819 59.0183 193.729 59.495 191.382 59.495C188.779 59.495 186.396 58.835 184.232 57.515C182.069 56.1583 180.346 54.2883 179.062 51.905C177.816 49.485 177.192 46.7533 177.192 43.71ZM201.997 43.82C201.997 41.73 201.557 39.915 200.677 38.375C199.834 36.835 198.716 35.6617 197.322 34.855C195.929 34.0483 194.426 33.645 192.812 33.645C191.199 33.645 189.696 34.0483 188.302 34.855C186.909 35.625 185.772 36.78 184.892 38.32C184.049 39.8233 183.627 41.62 183.627 43.71C183.627 45.8 184.049 47.6333 184.892 49.21C185.772 50.7867 186.909 51.9967 188.302 52.84C189.732 53.6467 191.236 54.05 192.812 54.05C194.426 54.05 195.929 53.6467 197.322 52.84C198.716 52.0333 199.834 50.86 200.677 49.32C201.557 47.7433 201.997 45.91 201.997 43.82ZM223.873 33.81V50.585C223.873 51.7217 224.129 52.5467 224.643 53.06C225.193 53.5367 226.109 53.775 227.393 53.775H231.243V59H226.293C223.469 59 221.306 58.34 219.803 57.02C218.299 55.7 217.548 53.555 217.548 50.585V33.81H213.973V28.695H217.548V21.16H223.873V28.695H231.243V33.81H223.873ZM244.336 33.81V50.585C244.336 51.7217 244.593 52.5467 245.106 53.06C245.656 53.5367 246.573 53.775 247.856 53.775H251.706V59H246.756C243.933 59 241.77 58.34 240.266 57.02C238.763 55.7 238.011 53.555 238.011 50.585V33.81H234.436V28.695H238.011V21.16H244.336V28.695H251.706V33.81H244.336ZM285.26 43.105C285.26 44.2417 285.187 45.2683 285.04 46.185H261.885C262.069 48.605 262.967 50.5483 264.58 52.015C266.194 53.4817 268.174 54.215 270.52 54.215C273.894 54.215 276.277 52.8033 277.67 49.98H284.435C283.519 52.7667 281.85 55.0583 279.43 56.855C277.047 58.615 274.077 59.495 270.52 59.495C267.624 59.495 265.02 58.8533 262.71 57.57C260.437 56.25 258.64 54.4167 257.32 52.07C256.037 49.6867 255.395 46.9367 255.395 43.82C255.395 40.7033 256.019 37.9717 257.265 35.625C258.549 33.2417 260.327 31.4083 262.6 30.125C264.91 28.8417 267.55 28.2 270.52 28.2C273.38 28.2 275.929 28.8233 278.165 30.07C280.402 31.3167 282.144 33.0767 283.39 35.35C284.637 37.5867 285.26 40.1717 285.26 43.105ZM278.715 41.125C278.679 38.815 277.854 36.9633 276.24 35.57C274.627 34.1767 272.629 33.48 270.245 33.48C268.082 33.48 266.23 34.1767 264.69 35.57C263.15 36.9267 262.234 38.7783 261.94 41.125H278.715ZM297.701 33.095C298.617 31.555 299.827 30.3633 301.331 29.52C302.871 28.64 304.686 28.2 306.776 28.2V34.69H305.181C302.724 34.69 300.854 35.3133 299.571 36.56C298.324 37.8067 297.701 39.97 297.701 43.05V59H291.431V28.695H297.701V33.095Z"
        fill={fill}
      />
    </svg>
  );
}
