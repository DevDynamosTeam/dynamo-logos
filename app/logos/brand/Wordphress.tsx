import React from "react";
export default function Wordphress({
  width = "100",
  height = "21",
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
      viewBox='0 0 100 21'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_401_99)">
        <path
          d="M37.4567 5.51181L35.2598 13.9528L33.063 5.51181H30.8504L31.3622 7.32283L29.4331 14.2362L27.3228 5.51181H25.1968L28.189 16.5354H30.5197L32.315 10.6378L33.9921 16.5354H36.315L39.4646 5.51181H37.4567ZM59.811 8.70866C59.3305 8.59748 58.8396 8.53677 58.3465 8.52756C55.6693 8.52756 54.2047 10.315 54.2047 12.937C54.2047 15.5433 55.6693 16.7323 57.3937 16.7323C58.3105 16.7024 59.1935 16.3795 59.9134 15.811V16.5354H61.748V5.51181H59.811V8.70866ZM59.811 14.2835C59.1811 14.8583 58.5906 15.1732 57.9685 15.1732C56.8976 15.1732 56.2126 14.4646 56.2126 12.8031C56.2126 11.0079 57.063 10.0709 58.5433 10.0709C58.9764 10.0709 59.4094 10.1575 59.8031 10.315V14.2835H59.811ZM50.5512 10H50.4803V8.70866H48.6693V16.5354H50.6142V11.874C51.2205 10.7244 51.9606 10.3465 53.1968 10.3465H53.3937V8.66142C53.2185 8.64205 53.0424 8.63157 52.8661 8.62992C51.811 8.62992 51.0866 9.03937 50.5512 10.0079V10ZM43.1654 8.51181C40.4882 8.51181 39.2283 10.2441 39.2283 12.6299C39.2283 15.0079 40.4882 16.7244 43.1654 16.7244C45.8425 16.7244 47.1181 15.0079 47.1181 12.6299C47.1181 10.2441 45.8268 8.51181 43.1575 8.51181H43.1654ZM43.1654 15.1575C41.9055 15.1575 41.2283 14.3386 41.2283 12.6299C41.2283 10.9134 41.9055 10.0945 43.1732 10.0945C44.4331 10.0945 45.0945 10.9134 45.0945 12.6299C45.0945 14.3386 44.4252 15.1575 43.1575 15.1575H43.1654ZM74.9055 9.99213H74.8425V8.70866H73.0236V16.5354H74.9606V11.874C75.5669 10.7244 76.3071 10.3465 77.5433 10.3465H77.7402V8.66142C77.565 8.64205 77.3889 8.63157 77.2126 8.62992C76.1654 8.62992 75.4409 9.03937 74.8976 10.0079H74.9055V9.99213ZM67.7559 5.51181H64.1496V16.5354H66.2283V12.7008H67.748C70.1024 12.7008 71.811 11.4331 71.811 9.06299C71.811 6.70079 70.1024 5.51181 67.748 5.51181H67.7559ZM67.7717 11.0866H66.2283V7.14173H67.7638C69.0236 7.14173 69.6378 7.83465 69.6378 9.06299C69.6378 10.2992 69.063 11.0866 67.7638 11.0866H67.7717ZM96.1339 10.9055C96.1339 10.315 96.7795 10.0866 97.4724 10.0866C98.2047 10.0945 98.937 10.2126 99.6378 10.4252V8.8189C98.8827 8.60551 98.1 8.50472 97.315 8.51968C95.4409 8.51968 94.126 9.40945 94.126 10.8583C94.126 13.6693 98 12.9449 98 14.315C98 14.9843 97.3937 15.1654 96.5039 15.1654C95.874 15.1654 94.874 14.9291 94.1496 14.6693V16.2677C94.8764 16.5583 95.6504 16.7157 96.4331 16.7323C98.2598 16.7323 100 16.189 100 14.2362C100.024 11.5197 96.1417 12.2205 96.1417 10.9055H96.1339ZM82.3543 8.51968C79.8504 8.51968 78.5512 10.4646 78.5512 12.5827C78.5512 15.4961 80.0787 16.7323 82.5669 16.7323C83.5425 16.7343 84.5126 16.5829 85.4409 16.2835V14.6693C84.6299 14.9685 83.8898 15.1496 83.1024 15.1496C81.6535 15.1496 80.685 14.7559 80.6378 13.0472H85.6457C85.6929 12.6614 85.7165 12.2756 85.7087 11.8976C85.7087 10.2441 84.8346 8.51968 82.3465 8.51968H82.3543ZM80.6535 11.7638C80.7717 10.6772 81.3622 9.98425 82.3307 9.98425C83.3701 9.98425 83.685 10.811 83.685 11.7638H80.6535ZM89.0787 10.9055C89.0787 10.315 89.7165 10.0866 90.4094 10.0866C91.1417 10.0945 91.874 10.2126 92.5748 10.4252V8.8189C91.822 8.6063 91.0417 8.50551 90.2598 8.51968C88.3858 8.51968 87.063 9.40945 87.063 10.8583C87.063 13.6693 90.9449 12.9449 90.9449 14.315C90.9449 14.9843 90.3307 15.1654 89.4488 15.1654C88.8189 15.1654 87.8189 14.9291 87.0866 14.6693V16.2677C87.8134 16.5584 88.5874 16.7158 89.3701 16.7323C91.1968 16.7323 92.9449 16.189 92.9449 14.2362C92.9606 11.5197 89.0787 12.2205 89.0787 10.9055ZM1.35433 10.2362C1.35433 13.7559 3.40157 16.7874 6.3622 18.2283L2.12598 6.62205C1.61731 7.75905 1.35435 8.99063 1.35433 10.2362ZM10.2362 19.1181C11.2677 19.1181 12.2598 18.937 13.189 18.6142L13.126 18.4961L10.3937 11.0157L7.73228 18.7559C8.51968 18.9921 9.3622 19.1181 10.2362 19.1181ZM11.4567 6.07087L14.6693 15.622L15.5591 12.6614C15.937 11.4331 16.2283 10.5512 16.2283 9.7874C16.2283 8.68504 15.8346 7.92913 15.5039 7.34646C15.0472 6.6063 14.6299 5.98425 14.6299 5.25984C14.6299 4.44094 15.2441 3.68504 16.126 3.68504H16.2362C14.5996 2.18261 12.4579 1.35063 10.2362 1.35433C8.7652 1.35406 7.3172 1.71947 6.02245 2.41769C4.72771 3.11592 3.62684 4.12506 2.8189 5.35433L3.38583 5.37008C4.31496 5.37008 5.74803 5.25197 5.74803 5.25197C6.23622 5.22835 6.29134 5.92913 5.81102 5.98425C5.81102 5.98425 5.33071 6.04724 4.7874 6.07087L8.0315 15.6929L9.97638 9.86614L8.59055 6.07087C8.28016 6.05374 7.97031 6.02748 7.66142 5.99213C7.1811 5.96063 7.23622 5.22835 7.71654 5.25197C7.71654 5.25197 9.1811 5.37008 10.0551 5.37008C10.9843 5.37008 12.4173 5.25197 12.4173 5.25197C12.8976 5.22835 12.9606 5.92913 12.4803 5.98425C12.4803 5.98425 12 6.03937 11.4567 6.07087ZM14.7008 17.9134C16.0444 17.1321 17.1595 16.0119 17.9347 14.6647C18.7098 13.3176 19.118 11.7905 19.1181 10.2362C19.1181 8.69291 18.7244 7.24409 18.0315 5.97638C18.1722 7.37109 17.961 8.77882 17.4173 10.0709L14.7008 17.9134ZM10.2362 20.4724C7.52141 20.4724 4.91778 19.394 2.99812 17.4743C1.07846 15.5546 0 12.951 0 10.2362C0 7.52141 1.07846 4.91778 2.99812 2.99812C4.91778 1.07846 7.52141 0 10.2362 0C12.951 0 15.5546 1.07846 17.4743 2.99812C19.394 4.91778 20.4724 7.52141 20.4724 10.2362C20.4724 12.951 19.394 15.5546 17.4743 17.4743C15.5546 19.394 12.951 20.4724 10.2362 20.4724Z"
          fill="#163B54"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_99">
          <rect width='100' height='21' fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
