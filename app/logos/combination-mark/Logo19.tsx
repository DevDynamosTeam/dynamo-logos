import React from "react";

export default function Logo19({
  fill = "black",
  width = "407",
  height = "89",
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
      viewBox="0 0 407 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M94.7608 52.12C94.7608 39.92 86.9115 29.16 75.6328 25.2534C74.0501 11.0667 61.9835 1.52588e-05 47.3795 1.52588e-05C32.7768 1.52588e-05 20.7088 11.0667 19.1262 25.2534C7.28618 29.3734 -0.721825 41.0533 0.0515086 53.8667C0.951509 68.8267 13.8608 80.5467 29.4408 80.5467C41.9448 80.5467 52.1182 70.3733 52.1182 57.8667V56.8534H42.6422V57.8667C42.6422 65.1467 36.7195 71.0667 29.4408 71.0667C18.8648 71.0667 10.1102 63.2667 9.50883 53.2934C8.94217 43.8934 15.4595 35.4 24.6728 33.5467L28.5862 32.76L28.4728 28.76C28.4688 28.5734 28.4528 28.3867 28.4288 28.1867C28.5568 17.8534 37.0075 9.48003 47.3795 9.48003C57.7542 9.48003 66.2075 17.8533 66.3302 28.2L66.1728 32.76L70.0875 33.5467C78.8928 35.32 85.2848 43.1334 85.2848 52.12C85.2848 60.92 79.2208 68.28 71.0702 70.4V66.3333L52.1182 75.8134L71.0702 85.28V80.12C84.4942 77.8534 94.7608 66.1734 94.7608 52.12Z"
        fill={fill}
      />
      <path
        d="M113.392 72V13.8182H134.131C138.638 13.8182 142.379 14.5947 145.352 16.1477C148.345 17.7008 150.58 19.8504 152.057 22.5966C153.534 25.3239 154.273 28.4773 154.273 32.0568C154.273 35.6174 153.525 38.7519 152.028 41.4602C150.551 44.1496 148.316 46.2424 145.324 47.7386C142.35 49.2348 138.61 49.983 134.102 49.983H118.392V42.4261H133.307C136.148 42.4261 138.458 42.0189 140.239 41.2045C142.038 40.3902 143.354 39.2064 144.188 37.6534C145.021 36.1004 145.438 34.2348 145.438 32.0568C145.438 29.8598 145.011 27.9564 144.159 26.3466C143.326 24.7367 142.009 23.5057 140.21 22.6534C138.43 21.7822 136.091 21.3466 133.193 21.3466H122.17V72H113.392ZM142.114 45.75L156.489 72H146.489L132.398 45.75H142.114ZM182.533 72.8807C178.233 72.8807 174.531 71.9621 171.425 70.125C168.338 68.2689 165.951 65.6648 164.266 62.3125C162.599 58.9413 161.766 54.9924 161.766 50.4659C161.766 45.9962 162.599 42.0568 164.266 38.6477C165.951 35.2386 168.3 32.5777 171.311 30.6648C174.341 28.7519 177.883 27.7955 181.936 27.7955C184.398 27.7955 186.785 28.2027 189.095 29.017C191.406 29.8314 193.48 31.1098 195.317 32.8523C197.154 34.5947 198.603 36.858 199.663 39.642C200.724 42.4072 201.254 45.7689 201.254 49.7273V52.7386H166.567V46.375H192.93C192.93 44.1402 192.476 42.161 191.567 40.4375C190.658 38.6951 189.379 37.322 187.732 36.3182C186.103 35.3144 184.19 34.8125 181.993 34.8125C179.607 34.8125 177.523 35.3996 175.743 36.5739C173.982 37.7292 172.618 39.2443 171.652 41.1193C170.705 42.9754 170.232 44.9924 170.232 47.1705V52.142C170.232 55.0587 170.743 57.5398 171.766 59.5852C172.807 61.6307 174.256 63.1932 176.112 64.2727C177.968 65.3333 180.137 65.8636 182.618 65.8636C184.228 65.8636 185.696 65.6364 187.021 65.1818C188.347 64.7083 189.493 64.0076 190.459 63.0795C191.425 62.1515 192.163 61.0057 192.675 59.642L200.714 61.0909C200.071 63.4583 198.915 65.5322 197.249 67.3125C195.601 69.0739 193.527 70.447 191.027 71.4318C188.546 72.3977 185.714 72.8807 182.533 72.8807ZM229.06 72.8807C224.836 72.8807 221.2 71.9242 218.151 70.0114C215.12 68.0795 212.791 65.4186 211.162 62.0284C209.533 58.6383 208.719 54.7557 208.719 50.3807C208.719 45.9489 209.552 42.0379 211.219 38.6477C212.885 35.2386 215.234 32.5777 218.264 30.6648C221.295 28.7519 224.865 27.7955 228.974 27.7955C232.289 27.7955 235.243 28.411 237.838 29.642C240.433 30.8542 242.526 32.5587 244.116 34.7557C245.726 36.9527 246.683 39.5189 246.986 42.4545H238.719C238.264 40.4091 237.223 38.6477 235.594 37.1705C233.984 35.6932 231.825 34.9545 229.116 34.9545C226.749 34.9545 224.675 35.5795 222.895 36.8295C221.134 38.0606 219.76 39.822 218.776 42.1136C217.791 44.3864 217.298 47.0758 217.298 50.1818C217.298 53.3636 217.781 56.1098 218.747 58.4205C219.713 60.7311 221.077 62.5208 222.838 63.7898C224.618 65.0587 226.711 65.6932 229.116 65.6932C230.726 65.6932 232.185 65.3996 233.491 64.8125C234.817 64.2064 235.925 63.3447 236.815 62.2273C237.724 61.1098 238.359 59.7652 238.719 58.1932H246.986C246.683 61.0152 245.764 63.5341 244.23 65.75C242.696 67.9659 240.641 69.7083 238.065 70.9773C235.509 72.2462 232.507 72.8807 229.06 72.8807ZM261.439 88.3636C260.17 88.3636 259.015 88.2595 257.973 88.0511C256.931 87.8617 256.155 87.6534 255.643 87.4261L257.689 80.4659C259.242 80.8826 260.625 81.0625 261.837 81.0057C263.049 80.9489 264.119 80.4943 265.047 79.642C265.994 78.7898 266.827 77.3977 267.547 75.4659L268.598 72.5682L252.632 28.3636H261.723L272.774 62.2273H273.229L284.28 28.3636H293.399L275.416 77.8239C274.583 80.0966 273.522 82.0189 272.234 83.5909C270.946 85.1818 269.412 86.375 267.632 87.1705C265.852 87.9659 263.787 88.3636 261.439 88.3636ZM318.278 72.8807C314.055 72.8807 310.419 71.9242 307.369 70.0114C304.339 68.0795 302.009 65.4186 300.381 62.0284C298.752 58.6383 297.938 54.7557 297.938 50.3807C297.938 45.9489 298.771 42.0379 300.438 38.6477C302.104 35.2386 304.453 32.5777 307.483 30.6648C310.513 28.7519 314.083 27.7955 318.193 27.7955C321.508 27.7955 324.462 28.411 327.057 29.642C329.652 30.8542 331.744 32.5587 333.335 34.7557C334.945 36.9527 335.902 39.5189 336.205 42.4545H327.938C327.483 40.4091 326.441 38.6477 324.812 37.1705C323.203 35.6932 321.044 34.9545 318.335 34.9545C315.968 34.9545 313.894 35.5795 312.114 36.8295C310.352 38.0606 308.979 39.822 307.994 42.1136C307.009 44.3864 306.517 47.0758 306.517 50.1818C306.517 53.3636 307 56.1098 307.966 58.4205C308.932 60.7311 310.295 62.5208 312.057 63.7898C313.837 65.0587 315.93 65.6932 318.335 65.6932C319.945 65.6932 321.403 65.3996 322.71 64.8125C324.036 64.2064 325.144 63.3447 326.034 62.2273C326.943 61.1098 327.578 59.7652 327.938 58.1932H336.205C335.902 61.0152 334.983 63.5341 333.449 65.75C331.915 67.9659 329.86 69.7083 327.284 70.9773C324.727 72.2462 321.725 72.8807 318.278 72.8807ZM353.783 13.8182V72H345.288V13.8182H353.783ZM384.017 72.8807C379.718 72.8807 376.015 71.9621 372.909 70.125C369.822 68.2689 367.436 65.6648 365.75 62.3125C364.083 58.9413 363.25 54.9924 363.25 50.4659C363.25 45.9962 364.083 42.0568 365.75 38.6477C367.436 35.2386 369.784 32.5777 372.795 30.6648C375.826 28.7519 379.367 27.7955 383.42 27.7955C385.883 27.7955 388.269 28.2027 390.58 29.017C392.89 29.8314 394.964 31.1098 396.801 32.8523C398.638 34.5947 400.087 36.858 401.148 39.642C402.208 42.4072 402.739 45.7689 402.739 49.7273V52.7386H368.051V46.375H394.415C394.415 44.1402 393.96 42.161 393.051 40.4375C392.142 38.6951 390.864 37.322 389.216 36.3182C387.587 35.3144 385.674 34.8125 383.477 34.8125C381.091 34.8125 379.008 35.3996 377.227 36.5739C375.466 37.7292 374.102 39.2443 373.136 41.1193C372.189 42.9754 371.716 44.9924 371.716 47.1705V52.142C371.716 55.0587 372.227 57.5398 373.25 59.5852C374.292 61.6307 375.741 63.1932 377.597 64.2727C379.453 65.3333 381.621 65.8636 384.102 65.8636C385.712 65.8636 387.18 65.6364 388.506 65.1818C389.831 64.7083 390.977 64.0076 391.943 63.0795C392.909 62.1515 393.648 61.0057 394.159 59.642L402.199 61.0909C401.555 63.4583 400.4 65.5322 398.733 67.3125C397.085 69.0739 395.011 70.447 392.511 71.4318C390.03 72.3977 387.199 72.8807 384.017 72.8807Z"
        fill={fill}
      />
    </svg>
  );
}
