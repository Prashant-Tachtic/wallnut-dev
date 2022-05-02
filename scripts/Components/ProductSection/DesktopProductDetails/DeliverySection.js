import React from 'react';
import PropTypes from 'prop-types';

import { getAllBlockSectionData } from '../../../utils';
import { FreeShippingIcon, ReturnIcon } from '../../Icons';
import Delivery from '../../Delivery';

const addIconsToSectionData = (sectionData) =>
  [<FreeShippingIcon />, <ReturnIcon height="55" />].map((icon, i) => ({
    icon,
    ...sectionData[i],
  }));

const DeliverySection = ({ blocks }) => {
  const deliverySectionData = blocks.find((block) => block.type === 'delivery_info_section');
  if (!deliverySectionData) {
    return null;
  }

  const sectionData = getAllBlockSectionData(deliverySectionData);
  const sectionDataWithIcons = addIconsToSectionData(sectionData);

  return <Delivery sectionDataWithIcons={sectionDataWithIcons} />;
};

DeliverySection.defaultProps = {
  blocks: [],
};

DeliverySection.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
};

export default DeliverySection;
