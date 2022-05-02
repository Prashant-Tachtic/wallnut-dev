import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OverviewSection from './OverviewSection';
import FeaturesSection from './FeaturesSection';
import SpecificationsSection from './SpecificationsSection';
import DeliverySection from './DeliverySection';

const DesktopProductDetails = ({ productTypeBlocks, blocks }) => {
  const [currentTab, setCurrentTab] = useState('');
  const productBlock = productTypeBlocks.find((block) => block.type === 'product_details');
  const { about_heading, features_section_1_name, section_2_name } = productBlock
    ? productBlock.settings
    : {};

  useEffect(() => {
    setCurrentTab(about_heading);
  }, [about_heading]);

  if (!productBlock) {
    return null;
  }

  const deliveryBlock = blocks.find((block) => block.type === 'delivery_info_section');
  const deliveryName = deliveryBlock.settings.name;
  const activeStyles = 'border-b-4 border-brown pb-4';
  const tabs = [about_heading, features_section_1_name, section_2_name, deliveryName].filter(
    (tab) => tab
  );

  return (
    <div className="hidden justify-items-center md:grid md:grid-cols-1 lg:px-28 md:px-10">
      <div className="border-b w-10/12 grid justify-items-center max-w-screen-xxl">
        <div
          className={`cursor-pointer font-extralight font-serif grid grid-cols-4 justify-items-center text-blue gap-28 lg:gap-0 text-lg md:grid-cols-${
            tabs.length
          } ${tabs.length === 2 ? 'w-8/12' : 'w-10/12'}`}
        >
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={currentTab === tab ? activeStyles : ''}
              onClick={() => setCurrentTab(tab)}
              role="button"
              onKeyDown={() => {}}
              tabIndex={0}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10 lg:grid lg:grid-cols-2 text-sm justify-items-center max-w-screen-xxl font-extralight xl:px-20 md:mb-12">
        {currentTab === about_heading && (
          <OverviewSection productBlock={productBlock} blocks={blocks} />
        )}
        {currentTab === features_section_1_name && <FeaturesSection productBlock={productBlock} />}
        {currentTab === section_2_name && <SpecificationsSection productBlock={productBlock} />}
        {deliveryName && currentTab === deliveryName && <DeliverySection blocks={blocks} />}
      </div>
    </div>
  );
};

DesktopProductDetails.defaultProps = {
  blocks: [],
  productTypeBlocks: [],
};

DesktopProductDetails.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
  productTypeBlocks: PropTypes.arrayOf(PropTypes.object),
};

export default DesktopProductDetails;
