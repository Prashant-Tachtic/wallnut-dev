import React from 'react';
import PropTypes from 'prop-types';

const InterchangebleIconColored = ({ width, height, bgCircleFill }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill={bgCircleFill} />
    <path
      d="M62.3359 14.8911C59.9688 10.9459 54.4454 9.76233 48.9221 9.36768C43.3988 8.97302 39.4536 10.9459 36.692 13.7084C33.9303 16.4709 32.3523 23.5706 35.1139 26.7276C37.8755 29.8846 40.6372 31.0664 39.4536 33.4344C38.27 35.8024 34.7194 34.6171 28.8016 36.9851C22.8838 39.3531 17.755 42.113 14.5991 47.2426C11.4431 52.3722 9.07598 59.4735 18.9388 64.6014C28.8016 69.7293 37.8757 70.5192 44.5826 66.574C51.2894 62.6288 52.8675 59.4727 53.262 54.7376C53.6565 50.0025 49.7113 46.1783 54.051 40.9303C56.6966 37.731 61.5469 31.4609 62.7304 27.5157C63.914 23.5706 64.703 18.8363 62.3359 14.8911Z"
      fill="#E1EAF8"
    />
    <path
      d="M59.9369 55.1321H20.0633C17.7039 55.1321 15.9344 53.2756 15.9344 51.0709V27.6318C15.9344 25.3111 17.8219 23.5706 20.0633 23.5706H59.9369C62.2962 23.5706 64.0658 25.4271 64.0658 27.6318V51.0709C64.0658 53.2756 62.2962 55.1321 59.9369 55.1321Z"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M57.7532 55.132H22.2465V33.2175C22.2465 30.8611 24.1031 29.0938 26.3077 29.0938H53.692C56.0127 29.0938 57.7532 30.9789 57.7532 33.2175V55.132Z"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.2465 42.5074V32.7191C22.2465 30.6647 23.7331 29.0938 25.6771 29.0938H38.0273L22.2465 42.5074Z"
      fill="#F7F7F7"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.2465 42.5074L31.2154 43.9902C33.0319 44.4521 34.8484 43.1818 35.3025 41.3342L38.0273 29.0938L22.2465 42.5074Z"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.3015 28.8203H38.2129V29.9747H40.3015V28.8203Z"
      fill="#F7F7F7"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M39.9539 29.974L42.6227 30.6666C42.9708 30.7821 43.3189 30.4357 43.3189 30.0894V28.8196C43.3189 28.4733 42.9708 28.1269 42.6227 28.2424L39.9539 28.8196C39.3737 28.935 39.3737 29.8585 39.9539 29.974Z"
      fill="#F7F7F7"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M58.3725 17.0745C63.4314 17.3962 67.974 21.2571 68.8 26.7268"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M62.6056 15.6802L57.7531 16.8599L61.4699 20.2918"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.6271 61.4219C16.5684 61.1002 12.0259 57.2392 11.2 51.7695"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.3943 62.8163L22.2465 61.6365L18.53 58.2046"
      stroke="#435570"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

InterchangebleIconColored.defaultProps = {
  width: '100%',
  height: '100%',
  bgCircleFill: '#FCF9F7',
};

InterchangebleIconColored.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bgCircleFill: PropTypes.string,
};

export default InterchangebleIconColored;
