import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../../Tab';

import Specifications from '../../Specifications';
import { getDataByBlockSectionName } from '../../../utils';

const SpecificationsTab = ({ productTypeBlock }) => {
  const section = getDataByBlockSectionName('section_2', productTypeBlock);

  return (
    <>
      {section.name && (
        <Tab tabName={section.name}>
          <Specifications section={section} />
        </Tab>
      )}
    </>
  );
};

SpecificationsTab.defaultProps = {
  productTypeBlock: {},
};

SpecificationsTab.propTypes = {
  productTypeBlock: PropTypes.shape({}),
};

export default SpecificationsTab;
