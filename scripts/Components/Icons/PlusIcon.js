import React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = ({ width = '10', height = '2', fill = 'black' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 0V4H10V6H6V10H4V6H0V4H4V0H6Z" fill={fill} />
  </svg>
);

PlusIcon.defaultProps = {
  width: '12',
  height: '7',
  fill: 'black',
};

PlusIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.string,
};

export default PlusIcon;
