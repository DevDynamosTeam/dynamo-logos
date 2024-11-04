import React from "react";
export default function CocaCola({
  width = "200",
  height = "200",
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
      viewBox='0 0 800 800'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_88)">
        <path
          d="M307.987 497.53C278.219 478.354 237.82 474.989 172.668 493.065C103.211 509.387 80.0528 519.85 49.6398 498.846C37.9558 488.528 33.7668 471.915 36.8948 447.985C44.1498 408.975 63.7558 371.434 98.5818 329.792C118.02 308.13 136.052 289.54 159.861 282.075C178.109 277.392 176.403 291.733 174.195 293.784C171.865 293.784 167.951 294.151 164.926 296.125C162.471 298.029 155.732 304.177 155.37 312.447C154.848 325.107 167.949 322.472 173.6 315.521C179.691 307.688 188.693 292.688 181.612 278.708C178.644 273.732 173.516 270.293 167.149 269.122C145.347 267.876 125.043 278.269 106.303 289.759C65.3208 318.228 32.5378 357.676 13.9878 400.856C3.29379 426.909 -6.37821 464.229 8.11879 494.604C19.3348 515.68 42.6178 526.875 70.3968 524.534C89.8798 522.487 113.439 516.19 129.284 512.388C145.13 508.579 226.238 480.699 252.888 529.224C252.888 529.224 261.75 512.021 283.897 511.654C302.105 509.974 328.373 516.925 347.501 530.974C341.128 521.39 323.06 507.265 307.987 497.53Z"
          fill="#E61A27"
        />
        <path
          d="M180.938 334.695C165.768 324.742 135.278 343.77 110.857 376.409C88.5248 405.686 78.8818 439.713 89.3768 455.448C104.987 473.963 133.968 447.032 146.292 432.617L147.882 430.932C156.263 421.93 162.737 411.098 169.005 400.704C169.005 400.704 174.765 391.19 175.04 390.75C178.6 390.094 182.888 389.069 187.72 387.678C187.651 387.896 169.233 418.854 171.112 434.22C171.697 438.908 171.251 456.033 187.97 461.228C210.254 464.963 228.048 447.689 243.746 432.32C243.746 432.32 246.421 429.761 247.934 428.3C247.551 429.832 247.052 431.877 247.052 431.877C240.528 454.565 249.322 459.326 254.823 461.082C271.448 465.916 291.309 441.763 291.374 441.763C290.858 449.371 289.353 455.664 297.373 460.715C304.942 463.425 312.603 459.293 318.427 455.414C339.402 440.632 356.3 417.494 369.948 397.495H361.242C361.139 397.495 339.76 428.483 325.877 435.218C325.855 435.218 323.328 436.515 321.873 435.489C320.07 433.952 320.781 430.755 321.894 428.491C321.964 428.344 375.498 335.495 375.498 335.495H350.222C350.222 335.495 347.461 339.962 347.236 340.255C347.066 340.109 346.661 339.341 346.381 338.973C330.721 317.311 295.258 350.631 268.559 389.271C258.28 404.129 245.193 420.858 231.623 432.933C231.623 432.933 211.519 451.361 202.93 438.121C199.79 432.558 200.756 424.425 202.527 419.084C212.528 390.614 229.761 364.777 249.372 349.188C254.907 344.873 260.925 343.625 263.91 345.455C266.756 347.141 267.215 351.309 265.415 354.164C260.848 354.018 257.188 355.406 254.214 358.48C248.354 364.628 246.318 370.557 248.181 376.12C257.232 389 275.283 363.531 274.41 348.016C274.098 342.453 271.131 337.185 266.701 334.621C260.1 330.671 250.03 331.694 243.513 334.843C234.788 338.135 220.979 349.624 212.918 358.554C202.77 369.753 185.365 382.193 179.923 380.8C181.702 376.042 196.403 345.964 180.938 334.695ZM302.799 379.191C307.716 372.386 322.027 354.162 325.516 351.089C337.25 340.766 341.94 345.308 342.346 348.526C331.395 368.139 318.47 390.608 306.318 410.808C306.343 410.736 302.515 416.589 302.515 416.589C297.148 424.783 291.744 431.81 282.929 436.712C281.672 437.081 279.6 437.228 278.221 436.199C276.561 435.101 275.906 433.271 276.093 431.368C276.622 425.076 283.028 405.832 302.799 379.191ZM165.294 390.973C165.294 390.973 165.073 391.634 164.965 391.85C164.937 391.85 153.944 409.778 153.944 409.778C147.31 418.635 139.027 429.762 128.673 435.102C125.604 436.126 121.361 436.787 119.199 434.081C114.616 428.591 116.978 420.979 118.897 414.833L119.577 412.637C125.079 397.709 133.808 384.533 142.306 372.311C142.412 372.239 142.65 372.166 142.736 372.166C142.757 372.239 142.791 372.239 142.805 372.386C148.137 382.63 158.135 387.385 165.612 389.584C165.657 389.584 165.706 389.657 165.706 389.804C165.707 390.022 165.585 390.317 165.294 390.973ZM175.708 369.825C175.659 369.971 170.812 381.095 170.812 381.095C170.111 381.68 169.003 381.388 167.733 381.095L165.557 380.727C158.724 378.606 153.57 374.068 151.981 368.653C149.79 358.114 158.793 349.844 162.759 346.845C166.565 344.208 172.482 342.818 175.918 345.527C178.037 348.016 178.84 351.235 178.84 354.75C178.841 359.505 177.373 364.847 175.708 369.825ZM495.248 403.78C492.81 398.512 487.025 395.145 480.859 395.51C460.836 397.341 441.251 413.807 430.967 437.444C425.571 449.594 422.626 459.619 420.695 475.573C426.922 468.403 439.622 456.621 454.034 450.18C454.034 450.18 455.995 434.885 465.995 421.272C469.779 415.635 477.351 406.561 485.854 408.975C493.284 411.464 490.672 432.03 480.798 451.932C473.492 466.571 462.312 481.212 451 491.309C440.999 499.798 426.202 510.044 413.256 502.141C405.102 497.313 400.943 487.21 401.821 474.184C405.717 437.227 422.541 405.757 446.616 369.897C471.44 336.598 498.804 302.421 535.667 284.195C543.186 280.39 550.149 279.512 556.168 281.854C556.168 281.854 521.564 300.882 505.069 336.085C500.873 345.015 495.037 357.087 500.914 367.773C503.985 373.334 509.437 373.774 513.828 373.481C534.047 368.796 547.11 349.915 557.783 332.645C563.971 319.545 569.471 306.518 569.471 292.027C569.471 290.271 569.38 287.93 569.232 286.172C578.891 281.051 598.7 290.124 598.7 290.124C614.179 295.249 647.138 320.499 658.256 325.327C663.679 319.034 672.591 309.521 677.61 304.763L670.345 300.298C658.715 293.199 646.422 286.465 634.323 279.806C606.844 264.805 584.476 270.073 573.093 274.172C568.619 275.781 564.531 277.172 564.531 277.172C556.083 267.951 542.227 268.827 532.018 271.317C495.304 281.855 461.217 307.542 424.672 352.113C397.804 387.023 381.138 417.176 372.255 446.961C365.408 467.013 363.327 496.506 380.039 513.998C394.248 528.851 413.089 525.633 426.393 520.293C455.22 506.095 481.129 475.502 494.039 440.299C497.155 429.835 500.612 415.052 495.248 403.78ZM561.535 293.492C557.719 337.257 523.7 362.947 515.282 364.993C510.181 366.016 501.477 363.749 509.248 345.382C520.69 320.643 540.227 299.641 561.187 288.882C561.698 290.712 561.684 291.88 561.535 293.492ZM763.333 299.052C745.034 309.446 726.064 316.177 703.102 313.836C696.739 321.01 690.542 328.401 684.831 336.011C717.06 344.208 751.227 325.985 770.283 308.642C790.442 291.15 800.778 269.123 800.778 269.123C800.778 269.123 785.668 286.393 763.333 299.052ZM417.507 335.497H393.503L379.963 357.497H403.962L417.507 335.497Z"
          fill="#E61A27"
        />
        <path
          d="M703.006 499.567C700.425 501.323 696.799 499.973 698.154 495.949C701.532 485.703 714.958 464.823 714.958 464.823L752.354 398.497H726.739C725.521 400.497 722.918 405.089 722.918 405.089C721.733 403.115 718.189 398.726 716.73 397.777C710.472 393.822 701.291 395.692 694.957 399.277C667.418 415.38 647.325 447.195 631.478 472.006C631.478 472.006 614.797 499.586 605.538 501.637C598.309 502.223 599.055 492.485 599.368 490.216C602.163 473.82 608.654 458.233 615.193 444.108C628.495 434.887 643.674 422.812 657.469 409.566C687.407 380.948 712.646 348.527 716.335 341.282C716.335 341.282 712.342 342.088 707.627 342.233C684.595 374.361 637.463 421.055 623.174 428.006C629.504 412.78 670.402 340.11 705.204 305.348L710.681 300.077C719.15 291.807 727.924 283.318 734.762 281.927C735.484 281.854 736.414 281.927 737.217 283.613C737.522 290.052 735.125 294.81 732.375 300.225L728.521 308.13C728.521 308.13 733.98 307.105 737.566 305.931C741.725 298.104 746.333 289.319 744.634 278.856C744.068 275.489 741.63 272.928 738.445 272.342C728.063 270.366 716.749 278.048 707.644 284.271L707.277 284.489C660.475 321.155 620.956 373.995 586.404 446.156C583.9 448.056 574.225 450.327 572.581 449.228C575.993 442.204 580.289 432.761 582.438 422.515C582.81 419.586 583.156 416.588 583.156 413.661C583.156 407.362 581.644 401.436 576.002 397.34C569.386 394.046 561.209 395.584 555.695 398.07C530.998 408.316 512.539 433.64 499.218 454.495C492.054 467.745 484.911 481.936 482.933 498.186C481.54 510.918 484.376 519.116 491.616 523.215C499.06 527.018 508.43 523.065 512.111 521.164C537.132 507.99 554.615 481.572 568.395 457.42C568.943 457.348 576.467 457.13 582.159 455.664C582.234 455.664 582.266 455.664 582.392 455.74C582.066 456.834 579.125 465.619 579.125 465.619C570.391 491.231 566.352 508.651 574.602 518.969C586.391 533.533 605.909 518.459 621.786 498.549C618.378 522.406 630.742 526.141 640.168 524.313C650.995 521.387 663.06 509.821 668.659 503.895C666.861 510.846 667.349 523.29 677.199 524.532C683.949 525.78 689.002 522.108 694.847 518.96C715.816 507.542 740.917 469.495 747.434 458.495H738.889C729.624 472.498 717.835 490.854 703.006 499.567ZM514.788 497.019C513.458 495.042 513.017 492.882 512.973 490.546C512.718 476.195 528.158 450.497 539.055 436.497H539.078C543.644 446.497 553.986 452.925 560.229 455.634C552.476 472.907 525.883 509.899 514.788 497.019ZM564.606 447.912C563.868 448.428 550.827 444.034 548.306 431.959C546.168 421.563 553.327 413.44 560.253 409.346C563.226 407.002 567.704 406.2 570.989 407.366C574.038 409.419 574.864 413.081 574.864 417.026C574.864 419.446 574.543 421.932 574.26 424.2L574.198 424.714C572.014 432.828 568.789 440.625 564.606 447.912ZM669.203 492.409C669.192 492.409 666.728 494.604 666.728 494.604C663.21 497.75 659.59 501.116 655.22 499.432C654.013 498.994 653.164 497.385 652.96 496.137C652.761 487.135 656.814 478.794 660.746 470.671L661.754 468.548C673.062 449.667 686.206 427.419 705.51 411.979C708.763 409.632 712.293 407.66 716.019 409.198C716.876 410.002 717.874 411.393 717.874 412.782C717.874 413.223 717.482 414.393 717.257 414.758C711.865 423.471 706.731 432.617 701.738 441.399C691.98 458.744 681.857 476.671 669.203 492.409Z"
          fill="#E61A27"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_88">
          <rect
            width='800'
            height='800'
            fill="white"
            transform="translate(0.777832)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
