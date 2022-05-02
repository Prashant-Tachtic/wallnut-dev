import React from 'react';
import PropTypes from 'prop-types';

const MinusIcon = ({ width = '10', height = '2', fill }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 0V2H0V0H10Z" fill={fill} />
  </svg>
);

MinusIcon.defaultProps = {
  width: '12',
  height: '7',
  fill: 'black',
};

MinusIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.string,
};

export default MinusIcon;
