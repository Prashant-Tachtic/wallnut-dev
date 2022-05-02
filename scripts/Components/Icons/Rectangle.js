import React from 'react';
import PropTypes from 'prop-types';

const Rectangle = ({ width = '16', height = '16', fill = 'none' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="15" height="15" stroke="#E6E6E6" />
  </svg>
);

Rectangle.defaultProps = {
  width: '16',
  height: '16',
  fill: 'none',
};

Rectangle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Rectangle;
