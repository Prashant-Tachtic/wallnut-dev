import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownIcon = ({ width = '12', height = '7', fill = 'black' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.23472 6.8682L11.868 1.24477C12.044 1.12762 12.044 0.834728 11.868 0.717573L11.2812 0.131799C11.1638 -0.0439331 10.8704 -0.0439331 10.7531 0.131799L6 4.87657L1.24694 0.131799C1.12959 -0.0439336 0.836185 -0.0439336 0.718826 0.131799L0.13203 0.717573C-0.0440102 0.834727 -0.0440102 1.12761 0.132029 1.24477L5.76528 6.8682C5.82396 7.04393 6.05868 7.04393 6.23472 6.8682Z"
      fill={fill}
    />
  </svg>
);

ArrowDownIcon.defaultProps = {
  width: '12',
  height: '7',
  fill: 'black',
};

ArrowDownIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.string,
};

export default ArrowDownIcon;
