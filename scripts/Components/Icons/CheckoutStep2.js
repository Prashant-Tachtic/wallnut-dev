import React from 'react';
import PropTypes from 'prop-types';

const CheckoutStep2 = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" fill="#F7F7F7" stroke="#D5D5D5" />
    <path
      d="M11.21 13.92L11.23 13.91L12.33 12.97C13.51 11.94 14.5 11.08 14.5 10.02C14.5 8.84 13.57 7.88 12.08 7.88C10.63 7.88 9.58 8.79 9.42 10.25H10.56C10.71 9.45 11.18 8.96 12.03 8.96C12.89 8.96 13.36 9.46 13.36 10.07C13.36 10.69 12.93 11.07 11.39 12.41L9.36 14.19V15H14.67V13.92H11.21Z"
      fill="#CCCCCC"
    />
  </svg>
);

CheckoutStep2.defaultProps = {
  className: '',
};

CheckoutStep2.propTypes = {
  className: PropTypes.string,
};

export default CheckoutStep2;
