import React from 'react';
import PropTypes from 'prop-types';

import Specifications from '../../Specifications';
import { getDataByBlockSectionName } from '../../../utils';

const SpecificationsSection = ({ productBlock }) => {
  const section = getDataByBlockSectionName('section_2', productBlock);

  if (!section.name) {
    return null;
  }

  return (
    <>
      {section.name && (
        <div className="col-span-2 grid grid-cols-2 gap-24">
          <div>
            <img src={section.dimensionalImage} alt="" />
          </div>
          <Specifications section={section} />
        </div>
      )}
    </>
  );
};

SpecificationsSection.defaultProps = {
  productBlock: {},
};

SpecificationsSection.propTypes = {
  productBlock: PropTypes.shape({}),
};

export default SpecificationsSection;
