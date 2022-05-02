import React from 'react';
import styled from 'styled-components';

import {
  MachineWashableIconColored,
  StainIconColored,
  InterchangableIconColored,
  ComfortableIconColored,
} from '../Icons';

const ValuePropSection = () => {
  const valueProps = [
    {
      text: 'Machine-Washable',
      icon: <MachineWashableIconColored bgCircleFill="#FFFFFF" />,
    },
    {
      text: 'Stain-Resistant',
      icon: <StainIconColored bgCircleFill="#FFFFFF" />,
    },
    {
      text: 'Interchangeable',
      icon: <InterchangableIconColored bgCircleFill="#FFFFFF" />,
    },
    {
      text: 'Comfortable',
      icon: <ComfortableIconColored bgCircleFill="#FFFFFF" />,
    },
  ];

  return (
    <ValuePropContainer>
      {valueProps.map((item, i) => (
        <ValuePropColumn key={i}>
          <div className="h-14 w-14 md:h-18 md:w-18 lg:h-20 lg:w-20">{item.icon}</div>
          <div className="flex items-center text-base ml-4 md:ml-0 text-center whitespace-nowrap">
            {item.text}
          </div>
        </ValuePropColumn>
      ))}
    </ValuePropContainer>
  );
};

export default ValuePropSection;

const ValuePropContainer = styled.div.attrs({
  className:
    'items-center justify-center h-full py-8 md:py-4 flex flex-col md:flex-row max-w-screen-xxl m-auto bg-offwhite-cream',
})``;

const ValuePropColumn = styled.div.attrs({
  className: 'font-serif flex md:w-44 items-center md:flex-col md:mx-5 lg:mx-14 py-2 md:py-0',
})`
  @media screen and (max-width: 768px) {
    width: 240px;
  }
`;
