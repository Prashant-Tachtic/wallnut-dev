/* eslint-disable new-cap */
import React from 'react';
import PropTypes from 'prop-types';

const AfterPayCopy = ({ price, dataSize }) => (
  <afterpay-placement
    data-locale="en_US"
    data-badge-theme="white-on-black"
    data-modal-theme="white"
    data-currency="USD"
    data-amount={`${price / 100}`}
    data-size={dataSize}
  />
);

AfterPayCopy.defaultProps = {
  dataSize: 'sm',
};

AfterPayCopy.propTypes = {
  price: PropTypes.number.isRequired,
  dataSize: PropTypes.string,
};

export default AfterPayCopy;
