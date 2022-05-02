import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MultiSwatchIcon } from '../../../Icons';
import { plpColorFilterGroupIcons } from '../../../../utils';

const handlePDPColorSubfilter = () => {
  window.optimizely.push({
    type: 'event',
    eventName: 'handle-pdp-color-subfilter',
    tags: {
      revenue: 0, // Optional in cents as integer (500 == $5.00)
      value: 0.0, // Optional as float
    },
  });
};

const ColorGroupFilter = ({
  fabrics,
  type,
  setSelectedColor,
  handleColorSelect,
  group,
  setGroup,
  groupName,
}) => {
  const firstColor = fabrics[type][groupName][0];
  const colorGroup = group === groupName ? 'All' : groupName;

  return (
    <StyledColorGroupContainer group={group} groupName={groupName}>
      <StyledColorGroup
        onClick={() => {
          setGroup(colorGroup);
          setSelectedColor(firstColor);
          handleColorSelect(firstColor);
          handlePDPColorSubfilter();
        }}
        background={plpColorFilterGroupIcons[groupName].background}
      >
        {groupName === 'Multi' ? <MultiSwatchIcon /> : ''}
      </StyledColorGroup>
    </StyledColorGroupContainer>
  );
};

const StyledColorGroupContainer = styled.div.attrs(({ group, groupName }) => {
  let className = 'relative h-10 w-11 rounded-md border-2 border-white';
  if (group === groupName) {
    className = `${className} border-2 border-blue`;
  } else {
    className = `${className} hover:border-gray-300`;
  }
  return {
    className,
  };
})``;

const StyledColorGroup = styled.div.attrs({
  className:
    'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-no-repeat h-8 w-9 rounded-md border border-gray-300 cursor-pointer',
})`
  ${({ group, background = '' }) => {
    if (group !== 'Multi') {
      return `background-color: ${background}; background-size: 36px 36px;`;
    }
    return 'background-size: 36px 36px;';
  }}
`;

ColorGroupFilter.defaultProps = {
  fabrics: {},
  type: '',
  group: '',
  groupName: '',
};

ColorGroupFilter.propTypes = {
  fabrics: PropTypes.shape({}),
  type: PropTypes.string,
  setSelectedColor: PropTypes.func.isRequired,
  handleColorSelect: PropTypes.func.isRequired,
  group: PropTypes.string,
  setGroup: PropTypes.func.isRequired,
  groupName: PropTypes.string,
};

export default ColorGroupFilter;
