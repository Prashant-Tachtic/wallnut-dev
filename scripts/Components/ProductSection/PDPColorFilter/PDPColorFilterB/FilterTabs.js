import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilterTabs = ({ onClick, text, active, large }) => (
  <StyledFilterTabs
    onClick={onClick}
    tabIndex={0}
    onKeyDown={() => {}}
    role="button"
    active={active}
    text={text}
    large={large}
  >
    {text}
  </StyledFilterTabs>
);

const StyledFilterTabs = styled.div.attrs(({ active, text, large }) => {
  let className =
    'border border-gray-500 center font-serif py-1 px-1 rounded-md opacity-75 border md:flex-1 text-sm';

  if (active) {
    className = `${className} opacity-100 border-2 bg-gray-500 text-white`;
  }

  if (large) {
    className = `${className} lg:text-base`;
  }

  if (text === 'Solids' || text === 'Patterns') {
    className = `${className} flex-1`;
  } else {
    className = `${className} flex-2`;
  }

  return {
    className,
  };
})`
  ${({ text, type }) =>
    text === 'All' && type === 'Patterns'
      ? '@media screen and (min-width: 760px) { width: 84px; }'
      : ''}
  ${({ type }) =>
    type === 'Solids'
      ? 'flex-basis: 31%;'
      : '@media screen and (max-width: 430px) { flex-basis: 31% }'}
`;

FilterTabs.defaultProps = {
  large: false,
};

FilterTabs.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  large: PropTypes.bool,
};

export default FilterTabs;
