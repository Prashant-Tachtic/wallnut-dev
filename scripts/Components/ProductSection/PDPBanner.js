import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PDPBanner = ({ productBlock }) => {
  <div className="block relative my-2 mx-auto w-full h-20 md:my-6 lg:max-w-7xl bg-blue-baby">
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 text-center top-1/2 transform w-11/12">
      <h1 className="block font-serif mb-0 md:inline md:text-3xl mt-4 text-2xl">
        {productBlock.settings.direct_response_text}
      </h1>
      <DRBannerDiscount>{productBlock.settings.direct_response_discount}% OFF</DRBannerDiscount>
    </div>
  </div>;
};

const DRBannerDiscount = styled.h1.attrs({
  className: 'block font-serif font-normal md:inline md:text-3xl text-2xl text-orange-burnt',
})`
  text-shadow: 2px 2px #f2caaf;
`;

PDPBanner.propTypes = {
  productBlock: PropTypes.shape({
    settings: PropTypes.shape({
      direct_response_text: PropTypes.string,
      direct_response_discount: PropTypes.string,
    }),
  }),
};

export default PDPBanner;
