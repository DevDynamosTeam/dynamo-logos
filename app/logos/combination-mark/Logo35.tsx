import React from "react";

export default function Logo35({
  fill = "black",
  width = "201",
  height = "76",
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
      viewBox="0 0 201 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1022 75.9745L1.13333 63.5539L24.1022 51.1587V75.9745ZM26.117 51.1333L49.8415 63.6303L26.117 76V51.1333ZM27.2756 49.4534L51 36.7274V61.925L27.2756 49.4534ZM26.117 47.7736V28.2009C34.5188 28.3635 42.7357 30.7223 49.9674 35.0476L26.117 47.7736ZM24.1022 47.7736L1.03259 34.6403C8.0787 30.609 16.0069 28.4135 24.1022 28.2518V47.7736ZM23.0193 49.4789L0 61.925V36.4729L23.0193 49.4789ZM51 33.4186C43.4586 28.8969 34.8843 26.4324 26.117 26.2666V21.4052L51 8.67916V33.4186ZM24.1022 26.1648C15.642 26.3336 7.3574 28.6345 0 32.8587V8.57735L24.1022 21.3034V26.1648ZM49.9422 6.84661L25.1096 19.5727L0.629629 6.64299C8.12952 2.25709 16.6482 -0.0353662 25.3132 0.000412471C33.9782 0.0361911 42.478 2.39892 49.9422 6.84661Z"
        fill={fill}
      />
      <path
        d="M68.08 23.2C71.04 23.2 73.6267 23.7733 75.84 24.92C78.08 26.04 79.8 27.6667 81 29.8C82.2267 31.9067 82.84 34.3733 82.84 37.2C82.84 40.0267 82.2267 42.48 81 44.56C79.8 46.64 78.08 48.24 75.84 49.36C73.6267 50.4533 71.04 51 68.08 51H59V23.2H68.08ZM68.08 47.28C71.3333 47.28 73.8267 46.4 75.56 44.64C77.2933 42.88 78.16 40.4 78.16 37.2C78.16 33.9733 77.2933 31.4533 75.56 29.64C73.8267 27.8267 71.3333 26.92 68.08 26.92H63.56V47.28H68.08ZM85.8394 39.88C85.8394 37.6667 86.2927 35.7067 87.1994 34C88.1327 32.2933 89.386 30.9733 90.9594 30.04C92.5594 29.08 94.3194 28.6 96.2394 28.6C97.9727 28.6 99.4794 28.9467 100.759 29.64C102.066 30.3067 103.106 31.1467 103.879 32.16V28.96H108.479V51H103.879V47.72C103.106 48.76 102.053 49.6267 100.719 50.32C99.386 51.0133 97.866 51.36 96.1594 51.36C94.266 51.36 92.5327 50.88 90.9594 49.92C89.386 48.9333 88.1327 47.5733 87.1994 45.84C86.2927 44.08 85.8394 42.0933 85.8394 39.88ZM103.879 39.96C103.879 38.44 103.559 37.12 102.919 36C102.306 34.88 101.493 34.0267 100.479 33.44C99.466 32.8533 98.3727 32.56 97.1994 32.56C96.026 32.56 94.9327 32.8533 93.9194 33.44C92.906 34 92.0794 34.84 91.4394 35.96C90.826 37.0533 90.5194 38.36 90.5194 39.88C90.5194 41.4 90.826 42.7333 91.4394 43.88C92.0794 45.0267 92.906 45.9067 93.9194 46.52C94.9594 47.1067 96.0527 47.4 97.1994 47.4C98.3727 47.4 99.466 47.1067 100.479 46.52C101.493 45.9333 102.306 45.08 102.919 43.96C103.559 42.8133 103.879 41.48 103.879 39.96ZM119.029 32.24C119.802 31.1733 120.855 30.3067 122.189 29.64C123.549 28.9467 125.055 28.6 126.709 28.6C128.655 28.6 130.415 29.0667 131.989 30C133.562 30.9333 134.802 32.2667 135.709 34C136.615 35.7067 137.069 37.6667 137.069 39.88C137.069 42.0933 136.615 44.08 135.709 45.84C134.802 47.5733 133.549 48.9333 131.949 49.92C130.375 50.88 128.629 51.36 126.709 51.36C125.002 51.36 123.482 51.0267 122.149 50.36C120.842 49.6933 119.802 48.84 119.029 47.8V51H114.469V21.4H119.029V32.24ZM132.429 39.88C132.429 38.36 132.109 37.0533 131.469 35.96C130.855 34.84 130.029 34 128.989 33.44C127.975 32.8533 126.882 32.56 125.709 32.56C124.562 32.56 123.469 32.8533 122.429 33.44C121.415 34.0267 120.589 34.88 119.949 36C119.335 37.12 119.029 38.44 119.029 39.96C119.029 41.48 119.335 42.8133 119.949 43.96C120.589 45.08 121.415 45.9333 122.429 46.52C123.469 47.1067 124.562 47.4 125.709 47.4C126.882 47.4 127.975 47.1067 128.989 46.52C130.029 45.9067 130.855 45.0267 131.469 43.88C132.109 42.7333 132.429 41.4 132.429 39.88ZM146.138 32.24C146.911 31.1733 147.965 30.3067 149.298 29.64C150.658 28.9467 152.165 28.6 153.818 28.6C155.765 28.6 157.525 29.0667 159.098 30C160.671 30.9333 161.911 32.2667 162.818 34C163.725 35.7067 164.178 37.6667 164.178 39.88C164.178 42.0933 163.725 44.08 162.818 45.84C161.911 47.5733 160.658 48.9333 159.058 49.92C157.485 50.88 155.738 51.36 153.818 51.36C152.111 51.36 150.591 51.0267 149.258 50.36C147.951 49.6933 146.911 48.84 146.138 47.8V51H141.578V21.4H146.138V32.24ZM159.538 39.88C159.538 38.36 159.218 37.0533 158.578 35.96C157.965 34.84 157.138 34 156.098 33.44C155.085 32.8533 153.991 32.56 152.818 32.56C151.671 32.56 150.578 32.8533 149.538 33.44C148.525 34.0267 147.698 34.88 147.058 36C146.445 37.12 146.138 38.44 146.138 39.96C146.138 41.48 146.445 42.8133 147.058 43.96C147.698 45.08 148.525 45.9333 149.538 46.52C150.578 47.1067 151.671 47.4 152.818 47.4C153.991 47.4 155.085 47.1067 156.098 46.52C157.138 45.9067 157.965 45.0267 158.578 43.88C159.218 42.7333 159.538 41.4 159.538 39.88ZM173.248 21.4V51H168.688V21.4H173.248ZM199.434 39.44C199.434 40.2667 199.381 41.0133 199.274 41.68H182.434C182.568 43.44 183.221 44.8533 184.394 45.92C185.568 46.9867 187.008 47.52 188.714 47.52C191.168 47.52 192.901 46.4933 193.914 44.44H198.834C198.168 46.4667 196.954 48.1333 195.194 49.44C193.461 50.72 191.301 51.36 188.714 51.36C186.608 51.36 184.714 50.8933 183.034 49.96C181.381 49 180.074 47.6667 179.114 45.96C178.181 44.2267 177.714 42.2267 177.714 39.96C177.714 37.6933 178.168 35.7067 179.074 34C180.008 32.2667 181.301 30.9333 182.954 30C184.634 29.0667 186.554 28.6 188.714 28.6C190.794 28.6 192.648 29.0533 194.274 29.96C195.901 30.8667 197.168 32.1467 198.074 33.8C198.981 35.4267 199.434 37.3067 199.434 39.44ZM194.674 38C194.648 36.32 194.048 34.9733 192.874 33.96C191.701 32.9467 190.248 32.44 188.514 32.44C186.941 32.44 185.594 32.9467 184.474 33.96C183.354 34.9467 182.688 36.2933 182.474 38H194.674Z"
        fill={fill}
      />
    </svg>
  );
}
