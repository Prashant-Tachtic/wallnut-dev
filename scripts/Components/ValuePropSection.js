import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  MachineWashableIcon,
  SupportIcon,
  ReturnIcon,
  InterchangableIcon,
  StainResistantIcon,
} from './Icons';

const ValuePropSection = ({ page }) => {
  const iconSize = window.innerWidth > 640 ? 80 : 64;

  const valueProps =
    page !== ''
      ? [
          {
            text: 'Machine-Washable',
            icon: <MachineWashableIcon width={iconSize} height={iconSize} page={page} />,
          },
          {
            text: 'Stain-Resistant',
            icon: <StainResistantIcon width={iconSize} height={iconSize} page={page} />,
          },
          {
            text: 'Interchangeable',
            icon: <InterchangableIcon width={iconSize} height={iconSize} page={page} />,
          },
          {
            text: 'Comfortable',
            icon: <SupportIcon width={iconSize} height={iconSize} page={page} />,
          },
        ]
      : [
          {
            text: 'Machine-Washable',
            icon: <MachineWashableIcon width={48} height={40} />,
          },
          {
            text: 'Comfortable Support',
            icon: <SupportIcon width={48} height={40} />,
          },
          {
            text: '30 Day Return Guarantee',
            icon: <ReturnIcon width={48} height={40} />,
          },
          {
            text: 'Interchangeable Covers',
            icon: <InterchangableIcon width={48} height={40} />,
          },
        ];

  return (
    <ValuePropContainer page={page}>
      {valueProps.map((item, i) => (
        <ValuePropColumn key={i}>
          <ValuePropIcon>{item.icon}</ValuePropIcon>
          <div
            className={`${
              page !== '' ? 'font-normal text-blue mt-7 ml-7 md:ml-0' : 'mt-3'
            } md:mt-0`}
          >
            {item.text}
          </div>
        </ValuePropColumn>
      ))}
    </ValuePropContainer>
  );
};

const ValuePropContainer = styled.div.attrs(({ page }) => {
  const className =
    page !== '' ? 'md:grid flex flex-col h-full py-4' : 'items-center h-full xl:px-48 py-4';

  return {
    className,
  };
})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: ${(props) => (props.page !== '' ? '#FFFFFF;' : '#f7f7f7;')}
  justify-items: center;
  
  @media screen and (max-width: 1200px) {
    height: initial;
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: 1fr;
    margin-top: 0px;
    padding: 20px 0;
  }
`;

const ValuePropColumn = styled.div.attrs({
  className: 'items-start lg:items-center py-2',
})`
  width: ${(props) => (props.page !== '' ? '160px;' : '140px;')}
  font-family: Stolzl;
  font-size: 0.9rem;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  line-height: 125%;
  letter-spacing: 0.05em;

  @media screen and (max-width: 740px) {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 4fr;
    text-align: initial;
  }
`;

const ValuePropIcon = styled.div.attrs(({ page }) => {
  let className = 'text-center mb-2';
  if (page !== '') {
    className = `${className} ml-auto md:ml-0`;
  }
  return { className };
})`
  svg {
    display: inline-block;
  }
`;

ValuePropSection.defaultProps = {
  page: '',
};

ValuePropSection.propTypes = {
  page: PropTypes.string,
};

export default ValuePropSection;
