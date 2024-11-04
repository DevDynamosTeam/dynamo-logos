import React from "react";

export default function Heineken({
  width = "200",
  height = "200",
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
      viewBox='0 0 800 800'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_140)">
        <path
          d="M154.251 598.418C141.459 598.418 130.986 608.847 130.986 621.683V642.095C130.986 654.708 142.128 665.359 155.32 665.359C163.298 665.359 170.518 662.061 174.752 656.535C175.376 655.644 175.732 654.485 175.732 653.504C175.732 650.919 173.326 648.602 170.607 648.602C169.092 648.602 167.487 649.404 166.507 650.697C163.298 654.752 158.128 655.332 155.32 655.332C147.654 655.332 140.969 649.137 140.969 642.095V640.535L172.568 634.429C175.242 634.34 177.471 632.067 177.471 629.393V621.638C177.515 608.847 167.042 598.418 154.251 598.418ZM167.487 625.203L141.014 629.839V621.638C141.014 614.329 146.986 608.401 154.251 608.401C161.515 608.401 167.487 614.373 167.487 621.638V625.203ZM235.32 664.201C232.824 664.201 230.329 662.463 230.329 659.209V621.638C230.329 614.329 224.401 608.401 217.092 608.401C209.827 608.401 203.9 614.329 203.9 621.638V659.209C203.9 662.507 201.404 664.201 198.863 664.201C196.368 664.201 193.872 662.463 193.872 659.209V642.184L193.827 641.917V605.103C193.827 601.85 196.323 600.112 198.819 600.112C200.512 600.112 202.473 601.003 203.365 602.919C207.331 600.022 212.189 598.418 217.092 598.418C229.883 598.418 240.356 608.847 240.356 621.683V659.254C240.312 662.507 237.771 664.201 235.32 664.201ZM773.081 574.663C770.585 574.663 768.044 576.401 768.044 579.655V603.187C764.078 600.067 759.443 598.373 754.808 598.373C741.972 598.373 731.543 608.802 731.543 621.638V642.05C731.543 654.886 741.972 665.315 754.808 665.315C759.71 665.315 764.524 663.755 768.535 660.858C769.426 662.775 771.342 663.666 773.081 663.666C775.576 663.666 778.072 661.928 778.072 658.674V579.61C778.072 576.401 775.532 574.663 773.081 574.663ZM768.044 642.095C768.044 649.404 762.072 655.332 754.808 655.332C747.498 655.332 741.571 649.404 741.571 642.095V621.638C741.571 614.329 747.498 608.401 754.808 608.401C762.117 608.401 768.044 614.373 768.044 621.683V642.095ZM30.7519 598.418C17.9608 598.418 7.4873 608.847 7.4873 621.683V642.095C7.4873 654.93 17.9163 665.359 30.7519 665.359C43.543 665.359 54.0166 654.931 54.0166 642.139V621.683C54.0166 608.847 43.5876 598.418 30.7519 598.418ZM43.9887 642.095C43.9887 649.404 38.0611 655.332 30.7519 655.332C23.4427 655.332 17.5152 649.404 17.5152 642.095V621.638C17.5152 614.329 23.4873 608.401 30.7519 608.401C38.0611 608.401 43.9887 614.373 43.9887 621.683V642.095ZM92.7909 598.463C87.8438 598.463 82.9859 600.067 78.9748 603.008C78.2171 601.27 76.479 600.156 74.4288 600.156C71.933 600.156 69.4372 601.894 69.4372 605.148V641.961L69.5709 642.318V681.359C69.5709 684.613 72.0667 686.351 74.5625 686.351C77.0583 686.351 79.5987 684.613 79.5542 681.449V660.68C83.5207 663.755 88.1558 665.449 92.7909 665.449C105.582 665.449 116.056 655.02 116.056 642.184V621.727C116.056 608.891 105.582 598.463 92.7909 598.463ZM106.028 642.095C106.028 649.404 100.1 655.332 92.7909 655.332C85.4817 655.332 79.5542 649.404 79.5542 642.095V621.638C79.5542 614.329 85.5263 608.401 92.7909 608.401C100.1 608.401 106.028 614.373 106.028 621.683V642.095ZM572.256 664.78C570.607 664.78 568.379 663.71 567.532 660.68L556.568 621.638L545.693 660.68C544.802 663.309 543.064 664.78 540.88 664.78C538.696 664.78 536.914 663.22 536.156 660.68L521.582 605.995C521.27 605.371 521.27 604.747 521.27 604.39C521.27 601.359 523.944 599.488 526.395 599.488C528.579 599.488 530.362 600.78 531.12 602.964L541.058 641.649L551.844 603.053C552.557 600.602 554.473 598.953 556.568 598.953C558.663 598.953 560.49 600.468 561.381 602.964L572.122 641.649L582.15 603.098C582.863 600.424 585.003 599.532 586.785 599.532C589.682 599.532 591.911 601.627 591.911 604.435C591.911 604.791 591.911 605.326 591.732 605.95L577.159 660.68C576.356 663.176 574.44 664.78 572.256 664.78ZM422.953 665.359C410.161 665.359 399.688 654.93 399.688 642.095V604.524C399.688 601.27 402.184 599.532 404.68 599.532C407.086 599.532 409.716 601.27 409.716 604.524V642.095C409.716 649.404 415.643 655.332 422.953 655.332C430.217 655.332 436.189 649.404 436.189 642.095V604.524C436.189 601.27 438.685 599.532 441.225 599.532C443.721 599.532 446.262 601.27 446.262 604.524V642.095C446.217 654.886 435.788 665.359 422.953 665.359ZM296.914 686.351C294.462 686.351 291.788 684.479 291.788 681.449C291.788 680.869 291.922 680.424 292.011 680.022L292.056 679.844L299.766 659.031L280.869 606.217C280.691 605.593 280.557 604.969 280.557 604.435C280.557 601.404 283.231 599.532 285.682 599.532C287.732 599.532 289.471 600.735 290.317 602.786L305.292 644.502L320.802 602.83C321.515 600.78 323.298 599.532 325.393 599.532C327.978 599.532 330.607 601.359 330.607 604.435C330.607 605.281 330.384 605.861 330.117 606.396L301.549 683.098C300.746 685.059 299.008 686.351 296.914 686.351ZM625.471 598.418C612.68 598.418 602.251 608.847 602.251 621.683V642.095C602.251 654.93 612.68 665.359 625.471 665.359C638.306 665.359 648.735 654.931 648.735 642.139V621.683C648.735 608.847 638.306 598.418 625.471 598.418ZM638.707 642.095C638.707 649.404 632.78 655.332 625.471 655.332C618.161 655.332 612.234 649.404 612.234 642.095V621.638C612.234 614.329 618.206 608.401 625.471 608.401C632.78 608.401 638.707 614.373 638.707 621.683V642.095ZM469.303 664.201C466.808 664.201 464.312 662.463 464.312 659.209V605.103C464.312 601.85 466.808 600.112 469.348 600.112C470.997 600.112 472.468 600.825 473.404 602.028C476.301 599.978 479.643 598.775 483.432 598.507L483.699 598.463L484.59 598.418H486.106C489.404 598.418 491.097 600.914 491.097 603.41C491.097 605.905 489.359 608.401 486.106 608.401H485.393C478.351 608.401 474.429 613.304 474.384 622.217V659.209C474.34 662.507 471.799 664.201 469.303 664.201ZM716.568 665.359C716.167 665.359 715.32 665.359 714.518 664.958C713.939 664.78 713.047 664.201 712.512 663.844C706.941 660.323 703.688 653.504 703.688 645.215V580.635C703.688 577.337 706.228 575.644 708.724 575.644C711.22 575.644 713.716 577.382 713.716 580.635V645.215C713.716 649.137 714.919 654.217 718.351 655.733C720.312 656.624 721.471 658.407 721.471 660.368C721.471 662.73 719.51 665.359 716.568 665.359ZM361.582 598.418C348.791 598.418 338.317 608.847 338.317 621.683V642.095C338.317 654.93 348.746 665.359 361.582 665.359C374.373 665.359 384.847 654.931 384.847 642.139V621.683C384.847 608.847 374.418 598.418 361.582 598.418ZM374.819 642.095C374.819 649.404 368.847 655.332 361.582 655.332C354.273 655.332 348.345 649.404 348.345 642.095V621.638C348.345 614.329 354.317 608.401 361.582 608.401C368.847 608.401 374.819 614.373 374.819 621.683V642.095ZM669.147 664.201C666.652 664.201 664.156 662.463 664.156 659.209V605.103C664.156 601.85 666.652 600.112 669.147 600.112C670.797 600.112 672.267 600.825 673.203 602.028C676.1 599.978 679.443 598.775 683.231 598.507L683.498 598.463L684.39 598.418H685.905C689.203 598.418 690.897 600.914 690.897 603.41C690.897 605.905 689.159 608.401 685.905 608.401H685.192C678.15 608.401 674.228 613.304 674.184 622.217V659.209C674.184 662.507 671.643 664.201 669.147 664.201Z"
          fill="#007E3A"
        />
        <path
          d="M220.123 315.766V319.153H216.914V334.084H212.903V319.153H209.738V315.766H220.123ZM236.346 325.749C238.351 324.769 239.242 323.031 239.242 321.025C239.242 316.033 234.652 315.766 232.067 315.766H228.011V334.128H232.067V325.66H232.112L235.632 334.128H239.866L236.346 325.749ZM232.78 323.655L232.067 323.61V318.707H232.602C234.652 318.618 235.32 319.688 235.32 320.98C235.32 322.54 234.607 323.655 232.78 323.655ZM255.376 315.766H251.142L246.418 334.128H250.429L251.142 331.053H255.198L255.956 334.128H260.234L255.376 315.766ZM251.766 328.111L252.658 323.209L253.059 320.446H253.103L253.549 323.209L254.574 328.111H251.766ZM270.217 315.766H267.187V334.128H270.752C277.125 334.128 279.354 330.34 279.354 325.081C279.354 314.83 270.93 315.766 270.217 315.766ZM271.198 330.83V319.019C274.496 319.019 275.298 322.719 275.298 325.081C275.343 327.309 274.451 330.964 271.198 330.83ZM295.131 315.766V319.153H291.031V323.164H294.641V326.551H291.031V330.696H295.176V334.084H287.02V315.766H295.131ZM502.864 315.766L504.869 326.551H504.914L506.518 315.766H511.956L514.05 334.084H509.95L508.97 320.891H508.925L508.256 325.393L506.518 334.084H503.398L501.437 325.304L500.769 321.248V320.891H500.724L500.1 334.084H495.822L497.56 315.766H502.864ZM528.891 315.766H524.658L519.933 334.128H523.944L524.658 331.053H528.713L529.471 334.128H533.749L528.891 315.766ZM525.281 328.111L526.173 323.209L526.618 320.446H526.663L527.109 323.209L528.134 328.111H525.281ZM548.724 325.749C550.685 324.769 551.621 323.031 551.621 321.025C551.621 316.033 547.031 315.766 544.446 315.766H540.39V334.128H544.446V325.66H544.49L548.011 334.128H552.245L548.724 325.749ZM545.114 323.655L544.401 323.61V318.707H544.936C546.986 318.618 547.655 319.688 547.655 320.98C547.699 322.54 546.986 323.655 545.114 323.655ZM564.546 315.766V323.922H564.591L567.978 315.766H572.078L568.29 324.234L572.524 334.084H568.29L564.591 324.769H564.546V334.084H560.535V315.766H564.546Z"
          fill="#B4B4B4"
        />
        <path
          d="M520.423 203.855C519.22 200.2 515.832 197.838 512.178 197.794H429.994L404.546 119.621C403.387 116.145 400.133 113.649 396.3 113.649C392.423 113.649 389.169 116.145 388.011 119.621L362.607 197.838H280.378C276.724 197.883 273.337 200.2 272.133 203.9C270.93 207.554 272.312 211.432 275.253 213.616L341.793 261.972L316.39 340.189C315.275 343.71 316.434 347.632 319.598 349.905C322.718 352.178 326.819 352.089 329.805 349.95L396.345 301.593L462.841 349.861C465.782 351.955 469.927 352.089 473.047 349.816C476.167 347.543 477.325 343.621 476.256 340.1L450.852 261.883L517.392 213.571C520.289 211.387 521.626 207.51 520.423 203.855Z"
          fill="white"
        />
        <path
          d="M327.8 341.036C327.22 341.437 326.462 341.437 325.838 341.036C325.259 340.635 324.992 339.922 325.215 339.253L351.376 258.674L282.919 208.936C282.34 208.535 282.117 207.822 282.34 207.109C282.563 206.395 283.187 205.994 283.9 205.994H368.579L394.741 125.504C394.964 124.836 395.543 124.39 396.301 124.39C397.014 124.39 397.638 124.88 397.861 125.549L424.022 206.039H508.702C509.415 206.039 510.039 206.485 510.262 207.153C510.485 207.866 510.217 208.579 509.683 208.98L441.181 258.719L467.343 339.253C467.521 339.922 467.298 340.635 466.719 341.081C466.139 341.482 465.337 341.482 464.758 341.081L396.301 291.298L327.8 341.036Z"
          fill="#ED1C24"
        />
        <path
          d="M341.749 261.883L275.253 213.571C274.094 212.724 273.203 211.61 272.579 210.318C272.356 213.482 273.559 216.646 276.055 218.429L340.679 265.359L341.749 261.883ZM450.763 261.883L517.303 213.571C518.462 212.724 519.353 211.61 519.977 210.318C520.2 213.482 518.997 216.646 516.501 218.429L451.877 265.359L450.763 261.883ZM396.3 306.54L461.459 353.872C465.426 356.769 470.952 355.922 473.894 351.956C475.008 350.396 475.587 348.613 475.632 346.83C475.052 347.944 474.161 348.969 473.047 349.772C469.927 352.045 465.827 351.956 462.841 349.816L396.3 301.504L329.76 349.861C326.818 351.956 322.674 352.089 319.554 349.816C318.44 349.014 317.593 347.989 316.969 346.875C317.013 348.657 317.548 350.44 318.707 352C321.604 355.967 327.175 356.813 331.142 353.917L396.3 306.54Z"
          fill="#B4B4B4"
        />
        <path
          d="M204.702 492.524C199.443 497.783 192.579 503.042 185.849 505.181C179.521 507.231 161.426 508.791 156.078 493.861C154.919 490.607 155.855 489.627 158.796 488.735C163.164 487.443 174.395 484.145 186.295 479.688C197.081 475.677 206.663 470.73 209.693 468.724C215.086 465.203 215.888 460.212 213.482 454.819C205.905 437.838 188.835 420.011 160.356 425.448C137.76 429.771 121.537 450.095 121.537 473.404C121.537 502.239 138.919 519.086 161.025 524.301C181.437 529.159 205.504 519.265 215.755 502.596C219.9 496.223 208.401 488.602 204.702 492.524ZM153.493 469.838C151.264 463.733 153.047 445.014 163.387 441.493C174.217 437.749 180.902 443.365 184.111 454.284C185.315 458.34 185.047 462.618 183.755 464.223C181.838 466.585 178.406 467.966 175.331 468.992L167.22 471.666C159.198 474.384 155.365 474.919 153.493 469.838ZM469.482 492.524C464.223 497.783 457.359 503.042 450.674 505.181C444.345 507.231 426.251 508.791 420.902 493.861C419.744 490.607 420.724 489.627 423.621 488.735C427.989 487.443 439.22 484.145 451.12 479.688C461.905 475.677 471.532 470.73 474.518 468.724C479.911 465.203 480.713 460.212 478.351 454.819C470.774 437.838 453.705 420.011 425.225 425.448C402.629 429.771 386.406 450.095 386.406 473.404C386.406 502.239 403.744 519.086 425.894 524.301C446.306 529.159 470.329 519.265 480.624 502.596C484.635 496.223 473.181 488.602 469.482 492.524ZM418.273 469.838C416.936 466.184 417.025 458.028 419.521 451.298C421.214 446.797 423.71 443.276 428.122 441.493C433.069 439.487 437.303 440.067 440.646 441.983C444.434 444.167 447.153 448.49 448.891 454.329C450.095 458.384 449.827 462.663 448.49 464.267C446.574 466.629 443.588 467.788 440.067 469.036C436.546 470.284 433.426 471.309 431.955 471.755C423.933 474.206 420.145 474.919 418.273 469.838ZM671.331 492.524C666.072 497.783 659.209 503.042 652.479 505.181C646.15 507.231 628.056 508.791 622.707 493.861C621.549 490.607 622.529 489.627 625.426 488.735C629.794 487.443 641.025 484.145 652.925 479.688C663.71 475.677 673.337 470.73 676.323 468.724C681.716 465.203 682.518 460.212 680.156 454.819C672.579 437.838 655.51 420.011 627.031 425.448C604.434 429.771 588.256 450.095 588.256 473.404C588.256 502.239 605.593 519.086 627.744 524.301C648.156 529.159 672.178 519.265 682.473 502.596C686.485 496.223 675.031 488.602 671.331 492.524ZM620.122 469.838C618.785 466.184 618.875 458.028 621.37 451.298C623.064 446.797 625.56 443.276 629.972 441.493C634.919 439.487 639.153 440.067 642.496 441.983C646.284 444.167 649.003 448.49 650.741 454.329C651.944 458.384 651.677 462.663 650.34 464.267C648.423 466.629 645.437 467.788 641.916 469.036C638.395 470.284 635.276 471.309 633.805 471.755C625.738 474.206 621.994 474.919 620.122 469.838ZM47.777 462.306C46.2171 462.306 44.88 463.599 44.88 465.203V497.827C44.9246 502.908 46.4399 506.295 49.2032 507.499C50.7185 508.167 53.9274 509.682 55.7993 510.485C57.0472 511.064 57.1363 512.356 56.9135 514.005L56.1558 521.226C55.9775 522.919 54.6405 523.632 52.1001 523.632H4.90232C2.49563 523.632 1.02488 523.231 0.802038 521.226L0.0443783 513.738C-0.133895 511.866 0.222651 510.93 1.38143 510.351C2.94131 509.638 6.41764 508.078 7.88839 507.409C10.8299 506.072 12.0778 502.061 12.0778 497.916V417.203C12.0778 412.702 10.8299 409.047 7.53184 407.532C6.01652 406.863 2.94131 405.437 1.42599 404.724C0.178083 404.145 -0.133895 402.986 0.0889465 401.292C0.311788 399.822 0.668334 397.326 0.846607 395.766C1.11402 393.805 2.5402 393.359 4.94689 393.359H50.0054C52.4121 393.359 53.7937 393.76 54.0611 395.766C54.2839 397.326 54.6405 399.822 54.8633 401.292C55.0862 402.941 54.7742 404.1 53.5708 404.724L48.2672 407.621C46.3062 408.691 45.0583 410.875 45.0137 416.089V439.621C45.0137 441.181 46.3062 442.518 47.9107 442.518H73.0917C74.6516 442.518 75.9887 441.27 75.9887 439.621V416.089C75.9441 410.875 74.6962 408.691 72.7352 407.621C71.309 406.819 69.036 405.571 67.4316 404.724C66.2282 404.056 65.8717 402.941 66.1391 401.292C66.3619 399.822 66.7185 397.326 66.9413 395.766C67.2087 393.805 68.5903 393.359 70.997 393.359H116.056C118.462 393.359 119.844 393.76 120.156 395.766C120.379 397.326 120.735 399.822 120.913 401.292C121.181 402.941 120.824 404.1 119.576 404.724C118.061 405.437 114.941 406.863 113.471 407.532C110.217 409.047 108.925 412.702 108.925 417.203V497.961C108.925 502.15 110.173 506.117 113.114 507.454C114.629 508.167 118.061 509.682 119.621 510.395C120.78 510.93 121.181 511.911 120.958 513.783C120.78 515.253 120.379 519.71 120.2 521.27C120.022 523.231 118.507 523.677 116.1 523.677H68.6795C66.1391 523.677 64.802 522.964 64.6238 521.27C64.4455 519.71 64.0444 515.521 63.9107 514.05C63.7324 512.401 63.777 511.109 65.0249 510.529C66.8522 509.682 70.1057 508.167 71.621 507.543C74.3842 506.34 75.8995 502.953 75.9441 497.872V465.203C75.9441 463.643 74.6516 462.306 73.0472 462.306H47.777ZM554.34 459.677C554.34 459.677 571.454 490.652 576.134 499.12C579.699 505.582 583.666 507.409 589.103 510.485C590.485 511.287 590.93 511.822 590.663 514.407C590.485 516.457 590.173 519.532 589.994 521.136C589.771 523.365 588.167 523.632 585.939 523.632H560.713C557.504 523.632 556.301 522.964 555.142 520.914C553.939 518.73 532.858 480.312 532.858 480.312L524.88 487.888V498.451C524.925 503.309 527.153 506.429 529.337 507.677L534.596 510.618C535.933 511.331 536.022 512.267 535.844 514.362C535.71 515.833 535.309 519.666 535.175 521.226C534.997 522.964 533.838 523.632 531.12 523.632H489.136C486.73 523.632 485.259 523.231 485.036 521.226C484.858 519.666 484.457 515.565 484.323 514.095C484.145 512.267 484.457 511.287 485.66 510.618C487.264 509.727 489.537 508.434 490.964 507.677C493.014 506.563 494.707 503.443 494.707 498.362V416.356C494.707 410.696 492.524 408.111 490.875 407.175C489.671 406.507 486.284 404.59 485.526 404.189C484.323 403.521 484.1 402.228 484.323 400.668C484.546 399.198 484.813 397.326 484.991 395.766C485.259 393.716 486.641 393.359 489.092 393.359H519.443C522.028 393.359 524.925 395.231 524.925 398.841V461.504C524.925 461.504 541.95 446.173 544.445 443.9C546.273 442.295 545.738 440.557 544.713 440.111L539.944 437.927C538.741 437.393 538.117 436.724 538.34 434.719C538.518 432.847 538.875 429.771 539.008 428.301C539.186 426.429 539.81 425.627 542.93 425.627H580.011C582.329 425.627 583.131 426.429 583.264 427.944L584.022 435.031C584.156 436.412 583.175 437.214 581.125 437.972C575.777 439.933 573.415 441.315 566.195 448.312L554.34 459.677ZM260.991 498.629C261.036 503.487 262.641 506.473 264.824 507.677L270.083 510.618C271.42 511.331 271.51 512.267 271.331 514.362C271.198 515.833 270.796 519.666 270.663 521.226C270.484 522.964 269.326 523.632 266.607 523.632H224.535C222.128 523.632 220.657 523.231 220.434 521.226C220.256 519.666 219.855 515.565 219.721 514.095C219.543 512.267 219.855 511.287 221.058 510.618C222.663 509.727 224.936 508.434 226.362 507.677C228.412 506.563 230.106 503.443 230.106 498.362V452.368C230.106 446.173 228.278 443.32 226.317 442.161C225.114 441.493 223.465 440.557 222.663 440.111C221.415 439.398 221.237 438.239 221.459 436.635C221.682 435.164 221.994 432.713 222.217 431.153C222.484 429.192 223.911 428.746 226.317 428.746H258.139C259.699 428.746 260.947 429.994 260.947 431.554L260.991 498.629ZM243.075 390.685C233.76 390.685 226.228 397.95 226.228 406.953C226.228 415.955 233.76 423.22 243.075 423.22C252.39 423.22 259.922 415.955 259.922 406.953C259.966 397.95 252.39 390.685 243.075 390.685ZM370.54 452.412C370.54 435.521 362.874 429.103 354.05 426.295C343.844 423.042 331.498 428.39 325.17 431.331C322.585 432.535 320.223 433.738 320.223 433.738C318.574 429.905 317.727 428.791 315.276 428.791H285.237C282.83 428.791 281.448 429.192 281.136 431.198C280.913 432.758 280.601 435.209 280.379 436.68C280.156 438.239 280.334 439.443 281.582 440.156C282.384 440.602 284.033 441.582 285.237 442.206C287.242 443.32 289.025 446.217 289.025 452.412V498.407C289.025 503.487 287.331 506.563 285.281 507.721C283.855 508.524 281.582 509.771 279.978 510.663C278.774 511.331 278.418 512.312 278.641 514.139C278.819 515.61 279.22 519.71 279.354 521.27C279.532 523.231 281.047 523.677 283.454 523.677H325.437C328.111 523.677 329.315 523.008 329.493 521.27C329.671 519.71 330.072 515.877 330.161 514.407C330.34 512.356 330.251 511.421 328.913 510.663C327.175 509.727 325.036 508.568 323.654 507.721C320.936 506.161 319.822 502.15 319.822 498.54L319.866 462.039C319.866 452.501 324.501 447.153 330.919 446.351C335.153 445.816 340.59 448.446 340.59 455.933V505.136C340.59 519.175 352.49 524.524 361.849 524.524C371.744 524.524 380.212 519.978 383.955 512.089C385.159 509.593 383.688 507.677 382.44 506.34C381.014 504.78 379.766 503.398 377.493 504.602C375.22 505.76 372.858 507.989 371.521 507.276C370.496 506.696 370.406 505.849 370.406 503.621V452.412H370.54ZM778.34 452.412C778.34 435.521 770.674 429.103 761.849 426.295C751.643 423.042 739.298 428.39 732.969 431.331C730.384 432.535 728.022 433.738 728.022 433.738C726.373 429.905 725.526 428.791 723.075 428.791H693.125C690.719 428.791 689.337 429.192 689.025 431.198C688.802 432.758 688.49 435.209 688.267 436.68C688.044 438.239 688.223 439.443 689.471 440.156C690.273 440.602 691.922 441.582 693.125 442.206C695.131 443.32 696.914 446.217 696.914 452.412V498.407C696.914 503.487 695.265 506.563 693.17 507.721C691.744 508.524 689.471 509.771 687.866 510.663C686.663 511.331 686.306 512.312 686.529 514.139C686.707 515.61 687.109 519.71 687.242 521.27C687.42 523.231 688.936 523.677 691.342 523.677H733.326C736.044 523.677 737.203 523.008 737.381 521.27C737.56 519.71 737.961 515.877 738.095 514.407C738.273 512.356 738.184 511.421 736.847 510.663C735.109 509.727 732.969 508.568 731.588 507.721C728.869 506.161 727.755 502.15 727.755 498.54L727.799 462.039C727.799 452.501 732.434 447.153 738.852 446.351C743.131 445.816 748.568 448.446 748.568 455.933V505.136C748.568 519.175 760.468 524.524 769.827 524.524C779.721 524.524 788.189 519.978 791.933 512.089C793.136 509.593 791.666 507.677 790.418 506.34C788.992 504.78 787.744 503.398 785.471 504.602C783.198 505.76 780.836 507.989 779.498 507.276C778.473 506.696 778.384 505.849 778.384 503.621L778.34 452.412ZM800 400.356C800 410.652 791.666 418.941 781.415 418.941C771.12 418.941 762.785 410.652 762.785 400.356C762.785 390.061 771.12 381.771 781.415 381.771C791.666 381.771 800 390.061 800 400.356ZM796.212 400.356C796.212 392.156 789.571 385.56 781.415 385.56C773.214 385.56 766.529 392.156 766.529 400.356C766.529 408.557 773.17 415.153 781.415 415.153C789.615 415.198 796.212 408.557 796.212 400.356ZM789.125 404.813C789.437 406.997 790.418 408.557 790.953 409.716H785.961C784.98 407.577 784.802 406.15 784.312 404.68C783.643 402.54 782.351 401.916 779.989 401.916H778.251V409.716H773.705V389.705H783.287C785.515 389.705 789.393 391.042 789.393 395.276C789.393 397.95 787.877 399.777 786.407 400.356C788.056 401.426 788.813 402.629 789.125 404.813ZM784.668 395.499C784.668 393.894 782.975 393.315 781.549 393.315H778.34V397.905H781.994C783.599 397.905 784.668 396.88 784.668 395.499Z"
          fill="#007E3A"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_140">
          <rect width='800' height='800' fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
