import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({ width = '17', height = '9' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0025 0L8.5 5.56275L1.9975 0L0 1.71255L8.5 9L17 1.71255L15.0025 0Z"
      fill="black"
    />
  </svg>
);

MenuIcon.defaultProps = {
  width: '17',
  height: '9',
};

MenuIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default MenuIcon;
