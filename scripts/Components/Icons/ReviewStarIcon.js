import React from 'react';
import PropTypes from 'prop-types';

const ReviewStarIcon = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.91379 0L12.1396 6.90983H19.3424L13.5152 11.1803L15.741 18.0902L9.91379 13.8197L4.08661 18.0902L6.3124 11.1803L0.485215 6.90983H7.68801L9.91379 0Z"
      fill="#B96833"
    />
  </svg>
);

ReviewStarIcon.defaultProps = {
  width: '20',
  height: '19',
};

ReviewStarIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ReviewStarIcon;
