import React from 'react';
import PropTypes from 'prop-types';

const CompletedCheckout = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#CE8553" />
    <path
      d="M9 12.1128L10.9606 16L15 8"
      stroke="#F7F7F7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CompletedCheckout.defaultProps = {
  className: '',
};

CompletedCheckout.propTypes = {
  className: PropTypes.string,
};

export default CompletedCheckout;
