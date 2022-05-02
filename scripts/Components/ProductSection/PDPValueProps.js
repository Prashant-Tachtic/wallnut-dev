import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MachineWashableIconColored from '../Icons/MachineWashableIconColored';
import StainIconColored from '../Icons/StainIconColored';
import InterchangebleIconColored from '../Icons/InterchangableIconColored';

const ValuePropsSections = (width, height) => [
  {
    title: 'Machine-washable',
    text: 'Throw our removable upholstery right into the washer and dryer.',
    icon: <MachineWashableIconColored width={width} height={height} />,
  },
  {
    title: 'Stain-proof',
    text: 'Take care of any kind of spill with just one wash.',
    icon: <StainIconColored width={width} height={height} />,
  },
  {
    title: 'Interchangeable',
    text: 'With 30+ customizable covers, update simply & painlessly!',
    icon: <InterchangebleIconColored width={width} height={height} />,
  },
];

const PDPValueProps = ({ width, height }) => (
  <div className="lg:mt-15 md:mt-0 md:w-98 mt-5 mx-auto">
    {ValuePropsSections(width, height).map((valueProp, i) => (
      <StyledValueProp sections={ValuePropsSections(width, height)} i={i} key={i}>
        <div className="mt-2 md:mt-0">{valueProp.icon}</div>
        <div className="ml-5">
          <h2 className="my-2 text-xl text-blue-light">{valueProp.title}</h2>
          <p className="pr-1 text-sm md:text-base">{valueProp.text}</p>
        </div>
      </StyledValueProp>
    ))}
  </div>
);

const StyledValueProp = styled.div.attrs(({ sections, i }) => {
  let className = 'flex justify-between';
  if (i !== sections.length - 1) {
    className = `${className} md:mb-10`;
  }
  return {
    className,
  };
})``;

PDPValueProps.defaultProps = {
  width: 100,
  height: 100,
};

PDPValueProps.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default PDPValueProps;
