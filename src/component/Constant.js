const Alert = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="10" stroke="#2A353D" strokeWidth="1.5" />
    <path
      d="M10.991 14H11"
      stroke="#2A353D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 11L11 7"
      stroke="#2A353D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const location = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.12852 18C5.29864 18.4117 4.12695 19.0443 4.12695 19.7537C4.12695 20.9943 7.71054 22 12.1311 22C16.5517 22 20.1353 20.9943 20.1353 19.7537C20.1353 19.0443 18.9636 18.4117 17.1337 18"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14.6325 9C14.6325 10.3807 13.5126 11.5 12.1312 11.5C10.7498 11.5 9.62988 10.3807 9.62988 9C9.62988 7.61929 10.7498 6.5 12.1312 6.5C13.5126 6.5 14.6325 7.61929 14.6325 9Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M13.3891 17.4936C13.0517 17.8184 12.6006 18 12.1312 18C11.6618 18 11.2108 17.8184 10.8733 17.4936C7.78312 14.5008 3.64186 11.1575 5.66143 6.30373C6.75339 3.67932 9.3746 2 12.1312 2C14.8879 2 17.5091 3.67933 18.6011 6.30373C20.6181 11.1514 16.487 14.5111 13.3891 17.4936Z"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);
const filtercircle = (
  <svg
    width="57"
    height="56"
    viewBox="0 0 57 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <ellipse cx="28.7285" cy="28" rx="28.0146" ry="28" fill="#F3F3F4" />
    <rect x="16.7222" y="15" width="25.013" height="25" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_84_2402"
          transform="matrix(0.00195312 0 0 0.00195414 0 -0.000260429)"
        />
      </pattern>
      <image
        id="image0_84_2402"
        width="512"
        height="512"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
const heart = (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.4567 1.99415C15.7751 0.349229 13.4345 1.01211 12.0285 2.06801C11.452 2.50096 11.1637 2.71743 10.9941 2.71743C10.8245 2.71743 10.5363 2.50096 9.95979 2.06801C8.55376 1.01211 6.21323 0.349229 3.53158 1.99415C0.0122092 4.15294 -0.784139 11.2749 7.33367 17.2834C8.87986 18.4278 9.65295 19 10.9941 19C12.3353 19 13.1084 18.4278 14.6546 17.2834C22.7724 11.2749 21.9761 4.15294 18.4567 1.99415Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
const cart = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.00492 22C9.55749 22 10.0054 21.5523 10.0054 21C10.0054 20.4477 9.55749 20 9.00492 20C8.45234 20 8.00439 20.4477 8.00439 21C8.00439 21.5523 8.45234 22 9.00492 22Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.0108 22C20.5633 22 21.0113 21.5523 21.0113 21C21.0113 20.4477 20.5633 20 20.0108 20C19.4582 20 19.0103 20.4477 19.0103 21C19.0103 21.5523 19.4582 22 20.0108 22Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.00049 1H5.00257L7.68397 14.39C7.77546 14.8504 8.02605 15.264 8.39188 15.5583C8.75771 15.8526 9.21546 16.009 9.68501 16L14.5475 12L19.4101 16C19.8796 16.009 20.3374 15.8526 20.7032 15.5583C21.069 15.264 21.3196 14.8504 21.4111 14.39L23.0119 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const search = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7276 21C16.977 21 21.2326 16.7467 21.2326 11.5C21.2326 6.25329 16.977 2 11.7276 2C6.47817 2 2.22266 6.25329 2.22266 11.5C2.22266 16.7467 6.47817 21 11.7276 21Z"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.233 22L20.2319 20"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const downarrow = (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.69872 7.69471C7.51109 7.88218 7.25665 7.9875 6.99135 7.9875C6.72605 7.9875 6.47161 7.88218 6.28398 7.69471L0.280858 1.69471C0.0986051 1.50611 -0.00224178 1.25351 3.78223e-05 0.991311C0.00231743 0.729114 0.107541 0.478301 0.293046 0.292893C0.47855 0.107485 0.729494 0.00231622 0.991827 3.78026e-05C1.25416 -0.00224062 1.50689 0.0985538 1.69559 0.280712L6.99135 5.57371L12.2871 0.280712C12.4758 0.0985538 12.7285 -0.00224062 12.9909 3.78026e-05C13.2532 0.00231622 13.5042 0.107485 13.6897 0.292893C13.8752 0.478301 13.9804 0.729114 13.9827 0.991311C13.9849 1.25351 13.8841 1.50611 13.7018 1.69471L7.69872 7.69471Z"
      fill="white"
    />
  </svg>
);
const leftArrow = (
  <svg
    width="4"
    height="7"
    viewBox="0 0 4 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.85338 3.14588C3.94726 3.23981 4 3.36718 4 3.5C4 3.63281 3.94726 3.76019 3.85338 3.85412L0.848682 6.8594C0.754234 6.95064 0.627735 7.00112 0.496431 6.99998C0.365128 6.99884 0.239525 6.94616 0.146676 6.8533C0.0538267 6.76043 0.00115991 6.6348 1.89092e-05 6.50347C-0.00112209 6.37214 0.049354 6.24562 0.140576 6.15115L2.79122 3.5L0.140575 0.848845C0.0493538 0.754379 -0.00112234 0.627856 1.86466e-05 0.496527C0.00115963 0.365198 0.0538264 0.239571 0.146676 0.146704C0.239525 0.0538368 0.365127 0.00116013 0.496431 1.85749e-05C0.627734 -0.0011225 0.754233 0.0493631 0.848682 0.140603L3.85338 3.14588Z"
      fill="#697475"
    />
  </svg>
);

export {
  Alert,
  location,
  filtercircle,
  heart,
  cart,
  search,
  downarrow,
  leftArrow,
};