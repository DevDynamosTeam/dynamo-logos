import React from "react";
export default function Bmw({
  width = "100",
  height = "100",
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
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_40)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M400.001 0C620.313 0 800 179.687 800 399.999C800 620.313 620.313 799.998 400.001 799.998C179.688 799.998 0 620.313 0 399.999C0 179.687 179.688 0 400.001 0Z"
          fill="black"
        />
        <path
          d="M167.605 280.036L73.2178 198.854L108.562 157.76C115.755 149.399 122.487 143.525 128.719 140.104C134.991 136.677 141.336 135.255 147.77 135.821C154.178 136.369 159.584 138.489 163.936 142.231C167.956 145.69 170.661 150.234 172.028 155.846C173.42 161.431 172.985 167.758 170.777 174.771C178.147 169.58 185.369 166.964 192.458 166.855C199.571 166.764 205.874 169.081 211.369 173.806C215.711 177.507 218.997 182.29 220.893 187.671C222.83 193.106 223.448 198.299 222.775 203.262C222.102 208.225 220.196 213.551 217.129 219.25C214.06 224.95 209.525 231.293 203.517 238.278L167.605 280.036ZM125.361 218.467L145.728 194.788C151.232 188.387 154.826 183.452 156.513 180.025C158.723 175.542 159.555 171.42 158.958 167.669C158.359 163.919 156.424 160.614 153.126 157.777C150.007 155.092 146.492 153.578 142.626 153.27C138.72 152.97 134.944 154.067 131.304 156.524C127.642 159.007 122.422 164.183 115.644 172.062L96.8332 193.934L125.361 218.467ZM168.939 255.948L192.376 228.699C196.409 224.009 199.085 220.587 200.421 218.452C202.765 214.661 204.298 211.143 205.018 207.863C205.763 204.598 205.584 201.251 204.549 197.833C203.469 194.42 201.467 191.413 198.457 188.823C194.942 185.798 190.987 184.215 186.574 184.058C182.184 183.918 177.859 185.254 173.602 188.072C169.392 190.878 164.26 195.778 158.273 202.738L136.504 228.05L168.939 255.948ZM324.539 140.577V33.8115H352.686L386.097 109.405C389.188 116.441 391.457 121.71 392.839 125.216C394.45 121.337 396.949 115.618 400.367 108.089L434.171 33.8115H459.326V140.577H441.307V51.2114L400.268 140.577H383.4L342.558 49.6935V140.577H324.539ZM579.868 202.92L645.195 114.341L654.11 125.343L609.868 181.64C605.314 187.491 600.589 193.208 595.699 198.781C606.224 193.69 612.29 190.776 613.965 190.043L682.338 160.177L692.829 173.124L660.34 218.674C652.308 229.995 644.238 240.008 636.161 248.711C642.209 245.499 649.322 241.986 657.43 238.164L720.903 207.767L729.65 218.56L628.879 263.399L620.499 253.056L669.708 184.887C673.827 179.173 676.375 175.703 677.356 174.47C672.868 176.696 668.991 178.525 665.715 179.961L588.737 213.862L579.868 202.92Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M636.286 403.961C636.286 531.923 531.923 636.286 403.961 636.286V403.961H636.286Z"
          fill="#00ACEC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M636.286 396.039C636.286 268.078 531.923 163.714 403.961 163.714V396.039H636.286Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M163.716 396.039C163.716 268.078 268.079 163.714 396.041 163.714V396.039H163.716Z"
          fill="#00ACEC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M163.716 403.961C163.716 531.923 268.079 636.286 396.041 636.286V403.961H163.716Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_40">
          <rect width='800' height='800' fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
