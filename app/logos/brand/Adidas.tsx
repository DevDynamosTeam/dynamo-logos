import React from "react";
export default function Adidas({
  width = "800",
  height = "800",
}: {
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
      <g clip-path="url(#clip0_1_11)">
        <path
          d="M738.703 670.082C701.288 670.082 679.101 650.935 677.402 623.361H713.174C713.174 632.553 718.267 644.788 740.401 645.548C755.74 645.548 764.229 636.359 764.229 629.449C762.53 618.734 748.89 617.974 735.305 615.633C719.966 613.409 708.081 610.305 699.534 606.499C687.648 600.353 680.797 587.296 680.797 573.539C680.797 549.005 701.288 529.858 737.004 529.858C771.079 529.858 793.211 547.485 794.848 574.299H760.834C760.834 567.445 759.135 555.914 738.7 555.914C725.06 555.914 716.571 558.197 714.873 568.149C714.873 581.968 743.796 581.205 765.927 586.534C786.36 591.92 800 604.918 800 623.361C800 657.085 772.775 670.082 738.703 670.082ZM86.8314 443.824L204.279 375.614L267.276 483.697H108.963"
          fill="black"
        />
        <path d="M333.805 666.016V529.599V666.016Z" fill="black" />
        <path
          d="M333.805 666.016V529.599"
          stroke="black"
          stroke-width="34.3677"
        />
        <path
          d="M32.3208 599.825C32.3208 621.252 51.0545 638.876 71.4283 638.876C93.6182 638.876 110.597 621.252 110.597 599.825C110.597 579.158 93.6182 560.773 71.4283 560.773C51.0545 560.773 32.3208 579.158 32.3208 599.825ZM69.7323 670.317C32.3181 670.317 0 638.876 0 599.825C0 560.773 32.3208 530.095 69.7323 530.095C85.0713 530.095 98.7116 533.959 110.597 542.33V531.615H144.673V667.213H110.6V658.784C100.413 666.453 85.0713 670.317 69.7323 670.317ZM524.316 483.665L360.91 198.653L478.355 129.683L682.629 483.665M188.935 599.825C188.935 621.252 205.975 638.876 228.104 638.876C248.478 638.876 267.273 621.252 267.273 599.825C267.273 579.158 248.478 560.773 228.104 560.773C205.973 560.773 188.935 579.158 188.935 599.825ZM226.405 670.317C187.236 670.317 156.617 638.876 156.617 599.825C156.617 560.773 187.236 530.095 226.405 530.095C241.686 530.095 255.329 533.959 267.273 542.33V484.894H301.29V667.213H267.27V658.784C255.326 666.453 241.688 670.317 226.405 670.317ZM224.728 322.005L343.872 254.617L474.963 483.657H350.667V517.38H316.647V483.657M777.927 518.442C769.381 518.442 760.892 510.772 760.892 501.58C760.892 492.388 769.381 484.718 777.927 484.718C788.114 484.718 794.968 492.39 794.968 501.58C794.968 510.769 788.114 518.442 777.927 518.442ZM777.927 487.062C769.381 487.062 764.287 493.91 764.287 501.58C764.287 509.249 769.381 516.159 777.927 516.159C786.418 516.159 791.512 509.252 791.512 501.58C791.512 493.908 786.418 487.062 777.927 487.062Z"
          fill="black"
        />
        <path
          d="M781.442 510.831L778.045 503.161H774.65V510.831H772.074V492.446H779.743C781.442 492.446 784.837 494.79 784.837 497.833C784.837 500.876 783.138 502.401 781.442 503.161L784.837 510.831M778.045 494.79H774.65V500.878H778.045C781.442 500.878 781.442 500.118 781.442 497.833C781.442 496.254 781.442 494.79 778.045 494.79ZM553.104 599.825C553.104 621.252 570.144 638.876 592.272 638.876C612.705 638.876 631.383 621.252 631.383 599.825C631.383 579.158 612.705 560.773 592.272 560.773C570.141 560.773 553.104 579.158 553.104 599.825ZM590.518 670.317C551.408 670.317 520.785 638.876 520.785 599.825C520.785 560.773 551.408 530.095 590.515 530.095C605.857 530.095 619.497 533.959 631.383 542.33V531.615H663.759V667.213H631.385V658.783C619.497 666.453 605.859 670.317 590.518 670.317ZM396.607 599.825C396.607 621.252 415.34 638.876 435.773 638.876C457.907 638.876 474.942 621.252 474.942 599.825C474.942 579.158 457.904 560.773 435.773 560.773C415.34 560.773 396.607 579.158 396.607 599.825ZM474.942 484.894H508.959V667.213H474.942V658.783C464.696 666.453 451.056 670.317 435.773 670.317C396.607 670.317 364.286 638.876 364.286 599.825C364.286 560.773 396.607 530.095 435.773 530.095C451.053 530.095 464.696 533.959 474.942 542.33V484.894Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_11">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
