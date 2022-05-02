import React from 'react';
import PropTypes from 'prop-types';

const CheckoutStep3 = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" fill="#F7F7F7" stroke="#D5D5D5" />
    <path
      d="M13.59 12.32C14.17 12.07 14.5 11.52 14.5 10.88C14.5 9.71 13.47 8.88 12.07 8.88C10.76 8.88 9.7 9.55 9.5 11H10.64C10.83 10.22 11.33 9.95 12.04 9.95C12.88 9.95 13.36 10.39 13.36 11.02C13.36 11.63 12.9 11.91 12.05 11.91H11.3V12.91H12.25C13.23 12.91 13.58 13.32 13.58 13.91C13.58 14.6 13.08 15.05 12.15 15.05C11.34 15.05 10.72 14.73 10.55 13.91H9.41C9.57 15.4 10.75 16.12 12.16 16.12C13.68 16.12 14.72 15.33 14.72 14.01C14.72 13.19 14.3 12.58 13.59 12.32Z"
      fill="#CCCCCC"
    />
  </svg>
);

CheckoutStep3.defaultProps = {
  className: '',
};

CheckoutStep3.propTypes = {
  className: PropTypes.string,
};

export default CheckoutStep3;
