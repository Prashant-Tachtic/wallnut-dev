import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColorSwatchThumbImageUrl } from '../utils';

const ColorSwatch = ({ option, small }) => (
  <ColorSwatchContainer
    small={small}
    aria-label={`change to ${option.toLowerCase()} variant`}
    option={option}
  />
);

const ColorSwatchContainer = styled.div.attrs(({ small }) => {
  const size = small ? 'h-8 w-8' : 'h-7 w-7 md:h-9 md:w-9';
  return {
    className: `bg-white bg-no-repeat rounded-full ${size}`,
  };
})`
  ${({ option }) => `
    background-image: url(${getColorSwatchThumbImageUrl(option)});
    background-size: 36px 36px;
  `}
`;

ColorSwatch.defaultProps = {
  small: false,
};

ColorSwatch.propTypes = {
  option: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default ColorSwatch;
