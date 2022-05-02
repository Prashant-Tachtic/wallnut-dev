import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightIcon = ({ width = '100%', height = '100%' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-2 ml-4"
  >
    <path
      d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
      fill="#B96833"
    />
  </svg>
);

ArrowRightIcon.defaultProps = {
  width: '10%',
  height: '10%',
};

ArrowRightIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ArrowRightIcon;
