import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilterTabs = ({ onClick, text, active }) => (
  <StyledFilterTabs
    onClick={onClick}
    tabIndex={0}
    onKeyDown={() => {}}
    role="button"
    active={active}
    text={text}
  >
    {text}
  </StyledFilterTabs>
);

const StyledFilterTabs = styled.div.attrs(({ active, text }) => {
  let className =
    'border border-blue center font-serif py-1 px-1 rounded-md text-sm opacity-50 border md:flex-1';

  if (active) {
    className = `${className} ${active ? 'opacity-100 border-2' : 'opacity-50 border'}`;
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

FilterTabs.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default FilterTabs;
