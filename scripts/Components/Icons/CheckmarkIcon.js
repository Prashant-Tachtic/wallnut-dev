import React from 'react';
import PropTypes from 'prop-types';

const CheckmarkIcon = ({ width, height, circleFill, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill={circleFill} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5604 4.06793C11.9548 4.22514 12.1131 4.605 11.914 4.91637L7.60548 11.6531C7.46939 11.8659 7.19314 12.0001 6.89121 12C6.58927 11.9999 6.3131 11.8657 6.17712 11.6529L4.08588 8.37949C3.88692 8.06806 4.04541 7.68825 4.43988 7.53117C4.83435 7.37409 5.31543 7.49922 5.51439 7.81065L6.89176 9.96661L10.4858 4.34704C10.6849 4.03568 11.166 3.91071 11.5604 4.06793Z"
      fill="white"
    />
  </svg>
);

CheckmarkIcon.defaultProps = {
  width: '16',
  height: '16',
  circleFill: '#426F67',
  className: '',
};

CheckmarkIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  circleFill: PropTypes.string,
  className: PropTypes.string,
};

export default CheckmarkIcon;
