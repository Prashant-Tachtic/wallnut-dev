import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ width = '17', height = '15', strokeWidth = '1.5', stroke = 'black' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.6775 7.07107H1.53538"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

CloseIcon.defaultProps = {
  width: '17',
  height: '15',
  strokeWidth: '1.5',
  stroke: 'black',
};

CloseIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
};

export default CloseIcon;
