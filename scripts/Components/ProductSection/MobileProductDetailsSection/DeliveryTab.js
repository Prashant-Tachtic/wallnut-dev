import React from 'react';
import PropTypes from 'prop-types';

import Tab from '../../Tab';
import { getAllBlockSectionData } from '../../../utils';
import { FreeShippingIcon, ReturnIcon } from '../../Icons';
import Delivery from '../../Delivery';

const addIconsToSectionData = (sectionData) =>
  [<FreeShippingIcon />, <ReturnIcon />].map((icon, i) => ({
    icon,
    ...sectionData[i],
  }));

const DeliveryTab = ({ blocks }) => {
  const deliverySectionData = blocks.find((block) => block.type === 'delivery_info_section');
  if (!deliverySectionData) {
    return null;
  }

  const sectionData = getAllBlockSectionData(deliverySectionData);
  const sectionDataWithIcons = addIconsToSectionData(sectionData);

  return (
    <Tab tabName={deliverySectionData.settings.name}>
      <Delivery sectionDataWithIcons={sectionDataWithIcons} />
    </Tab>
  );
};

DeliveryTab.defaultProps = {
  blocks: [],
};

DeliveryTab.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
};

export default DeliveryTab;
