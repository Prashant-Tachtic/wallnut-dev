import React from 'react';
import PropTypes from 'prop-types';

const OpenIcon = ({ width = '17', height = '16', strokeWidth = '1.5', stroke = 'black' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.6775 8.07107H1.53538"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path d="M8.60645 1V15.1421" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

OpenIcon.defaultProps = {
  width: '17',
  height: '16',
  strokeWidth: '1.5',
  stroke: 'black',
};

OpenIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
};

export default OpenIcon;
