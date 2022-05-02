/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import SaleLandingBanner from './SaleLandingBanner';
import SaleCollectionsBanner from './SaleCollectionsBanner';

const SaleBanner = (props) => {
  if (location.pathname.includes('/products/')) {
    return null;
  }

  const { isOnSale } = props;

  if (isOnSale) {
    if (location.pathname.includes('/collections/')) {
      return <SaleCollectionsBanner {...props} />;
    }
    if (!location.pathname.includes('/collections/') && !location.pathname.includes('/pages/')) {
      return <SaleLandingBanner {...props} />;
    }
  }

  return null;
};

SaleBanner.defaultProps = {
  collection: '',
};

SaleBanner.propTypes = {
  collection: PropTypes.string,
  isOnSale: PropTypes.bool.isRequired,
};

export default SaleBanner;
